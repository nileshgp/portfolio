import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { SlugifyPipe } from '../pipes/slugify.pipe';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
	constructor(private slugifyPipe: SlugifyPipe) {
		this.init();
	}

	//   blog shots

	private authors: { [key: string]: Author } = {
		Nilesh: {
			name: 'Nilesh Patel',
			image: './assets/img/nilesh-avatar.png',
			email: 'nileshgpatel@outlook.com',
			bio: ''
		}
	};

	private posts: Post[] = [
		{
			title: "Let's Gooooo",
			date: '2020/08/20',
			author: this.authors['Nilesh'],
			image: './assets/img/posts/lets-go.jpg',
			content: './assets/blog/lets-go.md',
			tags: [ 'Web Development', 'Web Development' ]
		},
		{
			title: 'Test Post',
			date: '2020/08/20',
			author: this.authors['Nilesh'],
			image: './assets/img/posts/angular.jpg',
			content: './assets/blog/test-post.md',
			tags: [ 'Design', 'Front-end', 'Angular', 'React' ]
		}
	];

	private init() {
		let currentId = this.posts.length;
		this.posts.forEach((post) => {
			// Generate post id
			post.id = currentId--;
			// Generate slug
			if (!post.slug) {
				post.slug = this.slugifyPipe.transform(post.title);
			}
		});
	}

	getPosts() {
		return this.posts.slice();
	}

	getPostBySlug(slug: string) {
		return this.posts.find((p) => p.slug == slug);
	}

	getPostById(id: number) {
		return this.posts.find((p) => p.id == id);
	}

	// getTags() {
	//     let tags = [];
	//     this.posts.forEach((post) => {
	//         post.tags.forEach((tag) => {
	//             if (!tags.includes(tag)) {
	//                 tags.push(tag);
	//             }
	//         });
	//     });
	//     return tags;
	// }
}

export const DisqusConfig = {
	//url: 'https://github.com/nileshpdev',
	shortname: 'Nilesh'
};
