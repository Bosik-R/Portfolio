export const skillsHard = [
	{
		name: 'Frontend',
		skills: [
			'JavaScript',
			'HTML',
			'CSS',
			'SASS',
			'Handlebars',
			'RWD',
			'React',
			'React Redux',
			'React Router',
			'Styled Components',
			'GIT',
		],
	},
	{
		name: 'Backend',
		skills: ['Node.js', 'Express', 'Websocket', 'MongoDB', 'Mongoose'],
	},
];

export const skillsSoft = [
	{ name: 'communication', img: `/images/communication.jpg` },
	{ name: 'problem solving', img: `/images/problem-solving.jpg` },
	{ name: 'responsibility', img: `/images/responsibility.jpg` },
	{ name: 'self motivation', img: `/images/self-motivation.jpg` },
	{ name: 'team worker', img: `/images/team-worker.jpg` },
	{ name: 'work under pressure', img: `/images/under-pressure.jpg` },
];

export const aboutMe = {
	image: '/images/tom.jpg',
	title: `Hi !  I'm Tom a bootcamp went through, self-learned Junior Web Developer.`,
	paragraph: [
		`My journey with programming started 10 years ago with building and deploying a HTML web page that I made for a friend. Since then I didn't have the courage to follow that path professionally. And so was until last year when I discovered that you don't need a special degree to be a web developer.`,
		`I have started a Web Developer bootcamp at KODILLA in March and succesfully finished it in December.`,
		`I worked on 2 extra projects made by myself and a 3 weeks work simulation as an developer.`,
		`Apart from bootcamp I participated in a couple of courses and tutorials on YouTube and other sites.`,
		`This year of learning has lighten my passion for coding. Every minute of my free time I spend on learning and practising.`,
	],
};

export const myWork = [
	{
		title: 'Portfolio',
		paragraph: [
			`This is my latest project, a react page using styled components.`,
			`I used styled components for the first time and I really liked that library. It's great how you can handle styles through props and states. I refactored it to my Portfolio page. I based it on function components, sometimes "stateless components" and react scrool that provides smooth scrool. Contact form sends message to a mongoDB cloud dataBase.`,
			`technologies used: react, styled components, react scrool, axios, express, mongoDB, mongoose.`,
			`In the future: export initialData to mongoDB cloud, add new content.`,
		],
		image: ['/images/portfolio1.jpg', '/images/portfolio2.jpg'],
		git: 'https://github.com/Bosik-R/Portfolio',
	},
	{
		title: 'Online-shop',
		paragraph: [
			`I built from scrach a react based online shop. This was a final project in the Web Developer bootcamp at "KODILLA".`,
			`In the shop you are routed through different sub-pages. The dataBase is located on MongoDB cloud. The backend server response to get, getById and post requests. After sending an order you get a response from server with your full order. I used brouser local storage to save cart content.`,
			`technologies used: react, router, redux, axsios, thunk, express, mongoDB, mogoose, local storage`,
			`I'm still improving this project. Comming next: Validation OAuth, React Trasition Group and others...`,
		],
		image: ['/images/madzita1.jpg', '/images/madzita2.jpg'],
		heroku: 'https://madzita.herokuapp.com/',
		git: 'https://github.com/Bosik-R/final__project',
	},
	{
		title: 'Furniture shop',
		paragraph: [
			`This is my team project.`,
			`On my bootcamp course I took part in a developer work simulation that lasted 3 weeks. My group was involved into a project in progress, what was overwelming us at the beginning. We were managing the work through Jira. We had to do daily reports and weekly online meetings.`,
			`I was responsible for adding new functionalities, components and styling. At that time the challenge for me was to add the fade-in fade-out effect on picture change. I used a react spring library but now I think I would choose react transition group. I would also do differently the dropdown menu. But this is the learning process leading to self-improvement.`,
			`When I find the time I will fix some "team mistakes :)" to make it look awesome.`,
		],
		image: ['/images/furnitureShop.jpg'],
		heroku: 'https://furniture-tomasz.herokuapp.com/',
		git: 'https://github.com/Bosik-R/furniture-shop',
	},
];

export const projects = [
	{
		title: 'Portfolio',
		tech: [
			'react',
			'styled components',
			'react scrool',
			'axios',
			'node.js',
			'express',
			'mongoDB',
			'mongoose',
		],
		description: [
			`This is my latest project, a react page using styled components.`,
			`I used styled components for the first time and I really liked that library. It's great how you can handle styles through props and states. I refactored it to my Portfolio page. I based it on function components, sometimes "stateless components" and react scrool that provides smooth scrool. Contact form sends message to a mongoDB cloud dataBase.`,
			`In the future: export initialData to mongoDB cloud, add new content.`,
		],
		images: ['/images/portfolio1.jpg'],
		git: 'https://github.com/Bosik-R/Portfolio',
	},
	{
		title: 'Madzita',
		tech: [
			'react',
			'router',
			'redux',
			'axios',
			'thunk',
			'node.js',
			'express',
			'mongoDB',
			'mogoose',
		],
		description: [
			`I built from scrach a react based online shop. This was a final project in the Web Developer bootcamp at "KODILLA".`,
			`In the shop you are routed through different sub-pages. The dataBase is located on MongoDB cloud. The backend server response to get, getById and post requests. After sending an order you get a response from server with your full order. I used brouser local storage to save cart content.`,
			`I'm still improving this project. Comming next: Validation OAuth, React Trasition Group and others...`,
		],
		images: [
			'/images/madzita1.jpg',
			'/images/madzita2.jpg',
			'/images/madzita3.jpg',
			'/images/madzita4.jpg',
			'/images/madzita5.jpg',
		],
		live: 'https://madzita.herokuapp.com/',
		git: 'https://github.com/Bosik-R/final__project',
	},
	{
		title: 'Furniture shop',
		tech: ['react', 'router', 'redux', 'react-spring'],

		description: [
			`This is my team project.`,
			`On my bootcamp course I took part in a developer work simulation that lasted 3 weeks. My group was involved into a project in progress, what was overwelming us at the beginning. We were managing the work through Jira. We had to do daily reports and weekly online meetings.`,
			`I was responsible for adding new functionalities, components and styling. At that time the challenge for me was to add the fade-in fade-out effect on picture change. I used a react spring library but now I think I would choose react transition group. I would also do differently the dropdown menu. But this is the learning process leading to self-improvement.`,
			`When I find the time I will fix some "team mistakes :)" to make it look awesome.`,
		],
		images: ['/images/furnitureShop1.jpg', '/images/furnitureShop2.jpg'],
		live: 'https://furniture-tomasz.herokuapp.com/',
		git: 'https://github.com/Bosik-R/furniture-shop',
	},
];
