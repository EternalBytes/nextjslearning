import React from "react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map(post => ({ slug: [post.slug] }));
}

export default async function Page({ params }) {
    const {slug} = await params;
    console.log(slug);
    const { content, frontmatter } = await getPostBySlug(slug[0]);
    
    return (
        <section className=" py-8">
            <div className=" container">
                <header className=" rounded bg-slate-800 p-8">
                    <h1 className=" font-serif text-3xl">{ frontmatter.title }</h1>
                    <p className=" text-sm font-light uppercase leading-3">{ frontmatter.author }</p>
                </header>
                <div className=" prose-base mt-12">{ content }</div>
            </div>
        </section>
    )
}