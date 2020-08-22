import { Author } from '../models/author.model';
import { SocialLink } from '../models/social-link.model';
import { Service } from '../models/service.model';
import { Skill } from '../models/skill.model';
import { Technology } from '../models/technology.model';

import { Experience } from '../models/experience.model';
import { Reference } from '../models/reference.model';
import { Tool } from '../models/tool.model';

export class HomeService {
	author: Author = {
		name: 'Nilesh',
		image: './assets/img/nilesh.png',
		job: 'Web Developer/Designer',
		bio:
			'Web Designing for nearly 5 years for talented people and small businesses. <br> The past 2-3 years I have been web developing for a multinational retailer. <br> I’m quietly confident, naturally curious and perpetually working on improving my chops one developer problem at a time.',
		// age: this.calculateAge('1991-09-10'),
		location: 'Leicester, England',
		email: 'nileshgpatel@outlook.com',
		website: 'https://github.com/nileshpdev',
		mobile: '+447399011663'
	};

	socials: SocialLink[] = [
		{ icon: 'github', link: 'https://github.com/nileshpdev' },
		{
			icon: 'id-card',
			link: 'https://github.com/nileshpdev'
		},
		{ icon: 'instagram', link: 'https://www.instagram.com/nileshpdev/' },
		{ icon: 'behance', link: 'https://www.behance.net/nileshpatel17' },
		{
			icon: 'linkedin',
			link: 'https://www.linkedin.com/in/nilesh-patel-3581a7a0/'
		}
	];

	services: Service[] = [
		{
			title: 'Front End Development',
			icon: 'desktop',
			description: 'Angular, VanillaJS, HTML5, CSS, Bootstrap, JavaScript / ES6, TypeScript, Jquery,'
		},
		{
			title: 'Back End Development',
			icon: 'cubes',
			description: 'NoSQL, MongoDB, CMS (Wordpress...), Node.js, Firebase, Rest API, Git, npm'
		},
		{
			title: 'Ui',
			icon: 'mobile',
			description: 'Adobe XD, Figma, Sketch, '
		}
	];

	skills: Skill[] = [
		{ name: 'Drinking Coffee', progress: 80 },
		{ name: 'Listening To JRE', progress: 95 },
		{ name: 'Running', progress: 85 },
		{ name: 'Lifting', progress: 70 },
		{ name: 'Designing', progress: 70, position: 'right' },
		{ name: 'Grinding Tekken', progress: 80, position: 'right' },
		{ name: 'Developing', progress: 60, position: 'right' },
		{ name: 'New Challanges', progress: 100, position: 'right' }
	];

	//   tools: Tool[] = [
	//     { name: "Visual Studio Code", image: "./assets/img/tools/vs-code.png" },
	//     { name: "Git", image: "./assets/img/tools/git.png" },
	//     { name: "NPM", image: "./assets/img/tools/npm.png" }
	//   ];

	technologies: Technology[] = [
		{ name: 'Angular', image: './assets/img/tech/angular.png' },
		{ name: 'TypeScript', image: './assets/img/tech/ts.png' },
		{ name: 'Wordpress', image: './assets/img/tech/wordpress.png' },
		{ name: 'Figma', image: './assets/img/tech/figma.png' },
		{ name: 'React', image: './assets/img/tech/react.png' },
		{ name: 'mongoDB', image: './assets/img/tech/mongodb.png' },
		{ name: 'Firebase', image: './assets/img/tech/firebase.png' },
		{ name: 'Javascript', image: './assets/img/tech/js.png' },
		{ name: 'jQuery', image: './assets/img/tech/jquery.png' },
		{ name: 'HTML', image: './assets/img/tech/html.png' },
		{ name: 'CSS', image: './assets/img/tech/css.png' },
		{ name: 'Bootstrap', image: './assets/img/tech/bootstrap.png' },
		{ name: 'Semantic UI', image: './assets/img/tech/semantic-ui.png' },
		// { name: 'Drupal', image: './assets/img/tech/drupal.png' },
		// { name: "Vue.js", image: "./assets/img/tech/vue.png" },
		// { name: 'Ajax', image: './assets/img/tech/ajax.png' },
		// { name: 'Riot JS', image: './assets/img/tech/riot.png' },
		// { name: "Sass", image: "./assets/img/tech/sass.png" },
		// { name: "Jekyll", image: "./assets/img/tech/jekyll.png" },
		// { name: 'PHP', image: './assets/img/tech/php.png' },
		// { name: "MySQL", image: "./assets/img/tech/mysql.png" },
		{ name: 'Node.js', image: './assets/img/tech/nodejs.png' }
	];

	experience: Experience[] = [
		{
			tag: 'Dixons Carphone',
			title: 'FrontEnd Developer',
			description: [
				'✔ Developing & Design web apps/websites using Angular, Bootstrap, VanillaJs, Typescript, CSS.',
				'✔ Primarily Working on Pinpoint.'
			],
			period: 'September 2017 - present'
		},
		{
			tag: 'Freelancer',
			title: 'Web Designer /  Learning Web Development',
			description: [
				'✔ Seeking out potential clients, and showing them way in which I would be able to improve their online presence',
				'✔ Creating mock-ups for clients using, Adobe XD',
				'✔ Creating Beautiful website for small and local businesses.',
				'✔ Maintaining and regularaly updating customers websites.'
			],
			period: 'April 2019 - July 2019',
			position: 'right'
		},
		{
			tag: 'Lifeways',
			title: 'Content Manager',
			description: [ '✔ Developing and maintaing thier blog website.', '✔', '✔ ', '✔ ' ],
			period: '2015 - 2017'
		},
		{
			tag: '',
			title: '',
			description: [ '✔ ', '✔ ' ],
			period: '',
			position: 'right'
		},
		{
			tag: '',
			title: '',
			description: [ '✔ ', '✔ ', '✔ ', '✔ ' ],
			period: ''
		},
		{
			tag: '',
			title: '',
			description: [ '' ],
			period: '',
			position: 'right'
		}
	];

	funFact: Reference[] = [
		{
			title: 'Love:',
			content: 'Interior Design <br> Coffee <br> Putting My Socks On'
		},
		{
			title: 'I Want:',
			content: 'To Meet Mike Tyson <br> Go Tokyo <br> Conquer My Fear of Spiders'
		},
		{
			title: 'Too Much:',
			content: 'JRE <br> Reddit <br> Spotify'
		}
	];

	private calculateAge(dateString) {
		const birthday = new Date(dateString);
		const ageDifMs = Date.now() - birthday.getTime();
		const ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getFullYear() - 1970);
	}
}
