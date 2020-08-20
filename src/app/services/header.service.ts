import { Menu } from '../models/menu.model';

export class HeaderService {
	title: string = 'Nilesh Patel';

	repositoryLink: string = ''; //'https://github.com/nileshgp';

	menu: Menu[] = [
		{ name: 'Home', id: '', link: '/' },
		{ name: 'Fun Fact', id: 'fun-fact-section', link: '/' },
		{ name: 'Good At', id: 'service-section', link: '/' },
		// { name: 'Skills', id: 'skill-section', link: '/' },
		// { name: "Tools", id: "tools-section", link: "/" },
		{ name: 'Technologies', id: 'technologies-section', link: '/' },
		// { name: 'Experience', id: 'experience-section', link: '/' },
		{ name: 'Featured Work', id: 'featured-work-section', link: '/' },
		{ name: 'Blog', id: 'blog-section', link: '/' }
	];
}
