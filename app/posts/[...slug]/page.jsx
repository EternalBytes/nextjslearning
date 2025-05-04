import React, { Suspense } from "react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PageViews from "@/app/components/ui/pageviews";

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map(post => ({ slug: [post.slug] }));
}

export default async function Page({ params }) {
    const {slug} = await params;
    const { content, frontmatter } = await getPostBySlug(slug[0]);
    
    return (
        <section className=" py-8">
            <div className=" container">
                <header className=" rounded bg-slate-800 p-8">
                    <h1 className=" font-serif text-3xl">{ frontmatter.title }</h1>
                    <p className=" text-sm font-light uppercase leading-3">{ frontmatter.author }</p>

                    <Suspense fallback={<div>Loading count...</div>}>
                        <PageViews slug={slug} />
                    </Suspense>
                </header>
                <div className=" prose-base mt-12">{ content }</div>
            </div>
        </section>
    )
}