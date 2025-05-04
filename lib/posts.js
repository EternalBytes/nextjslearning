import fs from 'fs';
import path from 'path';

import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import NewsLetter from '@/app/components/NewsLetter';

import rehypePrettyCode from 'rehype-pretty-code';

// Rehype plugin
const prettyCodeOptions = {
    theme: 'one-dark-pro', 
    onVisitLine(node) {
        if(node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
        }
    }, 
    onVisitHighlightedLine(node) {
        node.properties.className.push('highlighted');
    }, 
    onVisitHighlightedWord(node) {
        node.properties.className = ['highlighted', 'word'];
    }
};

const rootDirectory = path.join(process.cwd(), 'content');

const components = {
    h1: props => (
        <h1 {...props} className=' text-emerald-400'>
            {props.children}
        </h1>
    ), 
    NewsLetter: NewsLetter
};

export async function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
    try {
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

        const { content, frontmatter } = await compileMDX({
            source: fileContent, 
            components, 
            options: {
                parseFrontmatter: true, 
                mdxOptions: {
                    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
                }
            }
        });

        return { content, frontmatter, slug: realSlug }
    } catch (err) {
        return notFound()
    }
    
}

export async function getAllPosts() {
    const files = fs.readdirSync(rootDirectory);

    let posts = [];

    for(const file of files) {
        const post = await getPostBySlug(file);
        posts.push(post);
    }

    await wait(2000);

    return posts;
}

export async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}