import { Project } from '../models/project.model';

export class PortfolioService {
	// Where all the projects go!!!!

	// List of projects groups
	groups = {
		'Web apps': 'web-apps',
		'Static apps': 'static-apps',
		'Mobile apps': 'mobile-apps',
		Tests: 'test-apps'
	};

	// List of projects
	private projects: Project[] = [
		{
			name: 'Cloud Canine',
			image: './assets/img/projects/cloudcanine.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Javascript', 'NodeJs', 'Express' ],
			group: [ this.groups['Web apps'] ]
		},
		{
			name: 'PawPal | WoofFinders',
			image: './assets/img/projects/pawpal.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Javascript', 'React' ],
			group: [ this.groups['Web apps'], this.groups['Mobile apps'] ]
		},
		{
			name: 'Nilesh Portfolio',
			image: './assets/img/projects/portfolio.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Typescript', 'Angular' ],
			group: [ this.groups['Web apps'], this.groups['Mobile apps'] ]
		},
		{
			name: 'Cov19 Near Me',
			image: './assets/img/projects/cov19-near-me.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Javascript', 'React' ],
			group: [ this.groups['Web extensions'] ]
		},
		{
			name: 'Nextflix',
			image: './assets/img/projects/nextflix.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Javascript', 'React' ],
			group: [ this.groups['Web apps'] ]
		},
		{
			name: 'School City',
			image: './assets/img/projects/school-city.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Typescript', 'Angular' ],
			group: [ this.groups['Web apps'] ]
		},
		{
			name: 'AirCamp',
			image: './assets/img/projects/aircamp.png',
			link: 'https://github.com/nileshgp',
			category: [ 'PHP', 'MySQL', 'Jquery' ],
			group: [ this.groups['Web apps'] ]
		},
		{
			name: 'Museum of Sweets',
			image: './assets/img/projects/museum-of-sweets.png',
			link: 'https://github.com/nileshgp',
			category: [ 'HTML', 'CSS' ],
			group: [ this.groups['Desktop apps'] ]
		},
		{
			name: 'Icon Barbershop',
			image: './assets/img/projects/icon-barber.png',
			link: 'https://github.com/nileshgp',
			category: [ 'HTML', 'CSS' ],
			group: [ this.groups['Desktop apps'] ]
		},
		{
			name: 'Pawesome Treats',
			image: './assets/img/projects/pawesome.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Shopify' ],
			group: [ this.groups['Web apps'] ]
		},
		{
			name: 'DBZ-Club',
			image: './assets/img/projects/dbz-club.png',
			link: 'https://github.com/nileshgp',
			category: [ 'Wordpress' ],
			group: [ this.groups['Web apps'] ]
		}
	];

	getProjects() {
		return this.projects.slice();
	}
}
