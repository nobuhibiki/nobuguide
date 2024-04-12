import { error } from '@sveltejs/kit';
import { posts } from './guides/data.js';
import { words } from './scrollingbackground.js';

export function load({ params }) {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
            content: post.content
		})),
        scrolling: words.map((word) => ({
			verse: word.verses
		}))
	};
}
