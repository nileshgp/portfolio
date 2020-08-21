import { Project } from '../models/project.model';

export class PortfolioService {
	// Where all the projects go!!!!

	// List of projects groups
	groups = {
		'Web apps': 'web-apps',
		'Static sites': 'static-site',
		'Responsive apps': 'responsive-apps',
		'CMS sites': 'cms-sites',
		'Tests sites': 'test-apps'
	};

	// https://mighty-mesa-84652.herokuapp.com/

	private projects: Project[] = [
		{
			name: 'Cloud Canine',
			image: './assets/img/projects/cloudcanine.png',
			link: 'https://github.com/nileshgp/cloudcanine',
			live: '#',
			category: [ 'deploy issue (important)', 'NodeJs', 'Express' ],
			group: [ this.groups['Web apps'], this.groups['Responsive apps'] ]
		},
		{
			name: 'PawPal | WoofFinders',
			image: './assets/img/projects/pawpal.png',
			link: 'https://github.com/nileshgp/pawpal',
			live: 'https://pawpal-a7046.web.app',
			category: [ 'Javascript', 'React' ],
			group: [ this.groups['Web apps'], this.groups['Responsive apps'] ]
		},
		{
			name: 'Nilesh Portfolio',
			image: './assets/img/projects/portfolio.png',
			link: 'https://github.com/nileshgp/portfolio',
			live: 'https://ng-portfolio-98ad2.web.app',
			category: [ 'Typescript', 'Angular' ],
			group: [ this.groups['Web apps'], this.groups['Responsive apps'] ]
		},
		{
			name: 'Cov19 Near Me',
			image: './assets/img/projects/cov19-near-me.png',
			link: 'https://github.com/nileshgp/cov19nearme',
			live: 'https://cov19nearme.web.app',
			category: [ 'Javascript', 'React' ],
			group: [ this.groups['Web apps'] ]
		},
		{
			name: 'Nextflix',
			image: './assets/img/projects/nextflix.png',
			link: 'https://github.com/nileshgp/nextflix',
			live: 'https://nextflix-354ef.web.app/',
			category: [ 'Javascript', 'React' ],
			group: [ this.groups['Web apps'], this.groups['Responsive apps'] ]
		},
		{
			name: 'School City',
			image: './assets/img/projects/school-city.png',
			link: 'https://github.com/nileshgp/school-city',
			live: 'https://education-city-907b4.web.app',
			category: [ 'Typescript', 'Angular' ],
			group: [ this.groups['Tests sites'], this.groups['Web apps'] ]
		},
		{
			name: 'Pawesome Treats',
			image: './assets/img/projects/pawesome.png',
			link: '#',
			live: 'https://www.pawesometreat.com/',
			category: [ 'Shopify' ],
			group: [ this.groups['CMS sites'], this.groups['Responsive apps'] ]
		},
		{
			name: 'Circles',
			image: './assets/img/projects/circles.jpg',
			link: 'https://github.com/nileshgp/nileshgp.github.io',
			live: 'https://nileshgp.github.io/circles/',
			category: [ 'HTML', 'CSS', 'JS' ],
			group: [ this.groups['Static sites'] ]
		},
		{
			name: 'Icon Barbershop',
			image: './assets/img/projects/icon-barber.png',
			link: 'https://github.com/nileshgp/nileshgp.github.io',
			live: 'https://nileshgp.github.io/icon-barber/',
			category: [ 'HTML', 'CSS' ],
			group: [ this.groups['Static sites'], this.groups['Responsive apps'] ]
		},
		{
			name: 'Museum of Sweets',
			image: './assets/img/projects/museum-of-sweets.png',
			link: 'https://github.com/nileshgp/nileshgp.github.io',
			live: 'https://nileshgp.github.io/museum-of-sweets/',
			category: [ 'HTML', 'CSS' ],
			group: [ this.groups['Static sites'], this.groups['Responsive apps'] ]
		},
		{
			name: 'Hipster Photography Site',
			image: './assets/img/projects/photography-site.png',
			link: 'https://github.com/nileshgp/nileshgp.github.io',
			live: 'https://nileshgp.github.io/photography-site/',
			category: [ 'HTML', 'CSS' ],
			group: [ this.groups['Static sites'], this.groups['Responsive apps'] ]
		},
		{
			name: 'AirCamp',
			image: './assets/img/projects/aircamp.png',
			link: 'https://github.com/nileshgp/AirCamp',
			live: 'https://whispering-garden-41522.herokuapp.com/',
			category: [ 'NodeJs', 'Express', 'EJS' ],
			group: [ this.groups['Web apps'], this.groups['Responsive apps'] ]
		},
		{
			name: 'DBZ-Club',
			image: './assets/img/projects/dbz-club.png',
			link: '#',
			live: 'https://www.dbz-club.com/',
			category: [ 'Wordpress' ],
			group: [ this.groups['CMS'], this.groups['Responsive apps'] ]
		}
	];

	getProjects() {
		return this.projects.slice();
	}
}
