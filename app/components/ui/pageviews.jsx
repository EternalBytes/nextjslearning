import { wait } from "@/lib/posts";
import React from "react";

export default async function PageViews({ slug }) {
    await wait(2000);

    return <div>views: 100</div>
}