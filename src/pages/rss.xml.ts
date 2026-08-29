// Blog RSS temporarily disabled — restore rss feed when blog is re-enabled.
export async function GET() {
	return new Response("Blog feed is not available yet.", { status: 404 });
}

// import { getCollection } from "astro:content";
// import rss from "@astrojs/rss";
//
// export async function GET(context: any) {
// 	const blog = await getCollection("posts");
// 	return rss({
// 		title: "Hermosa Software Blog",
// 		description: "A Costa Rica based software development company",
// 		site: context.site,
// 		items: blog.map((post) => ({
// 			title: post.data.title,
// 			pubDate: post.data.pubDate,
// 			description: post.data.description,
// 			link: `/blog/${post.slug}/`,
// 		})),
// 	});
// }
