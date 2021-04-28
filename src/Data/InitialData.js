export const links = {
	git: 'https://github.com/Bosik-R',
	linkedin: 'https://www.linkedin.com/in/tomasz-rosik-3b55381bb',
};

export const aboutMe = {
	myStoryColor: `I'm Tom a bootcamp went through, self-learned Web Developer. `,
	myStory: `I always had a passion for programming that's why I dicided to make it my all day work. Last year I complited a 9 month Web Developer bootcamp. `,

	myGoolColor: `Apart from bootcamp I'm sill learning new things. `,
	myGool: `I went though a couple of tutorials on YouTube. I'm now starting a Angular course on Udemy, and the next step will be a mobile UI framework React Nativ or Flutter. `,
};

export const projects = [
	{
		title: 'Portfolio',
		invert: false,
		tech: [
			'react',
			'styled components',
			'react scrool',
			'pure-react-carousel',
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
		images: ['/images/portfolio1.jpg', '/images/portfolio2.jpg'],
		git: 'https://github.com/Bosik-R/Portfolio',
	},
	{
		title: 'Madzita',
		invert: true,
		tech: [
			'react',
			'router',
			'redux',
			'axios',
			'thunk',
			'node.js',
			'express',
			'mongoDB',
			'mongoose',
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
		invert: false,
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

export const mySkills = [
	{
		title: 'Front End',
		width: '100%',
		skills: [
			'/images/skills/html5.png',
			'/images/skills/css.png',
			'/images/skills/javascript.png',
			'/images/skills/sass.png',
			'/images/skills/es6.png',
			'/images/skills/bootstrap.png',
			'/images/skills/handlebars.png',
			'/images/skills/react.png',
			'/images/skills/react redux.png',
			'/images/skills/axios.png',
			'/images/skills/styled components.png',
		],
	},
	{
		title: 'Back End',
		width: '55%',
		skills: [
			'/images/skills/nodeJS.png',
			'/images/skills/expressJS.png',
			'/images/skills/websocket.png',
			'/images/skills/mongoDB.png',
		],
	},
	{
		title: 'Build and Management',
		width: '42%',
		skills: [
			'/images/skills/npm.png',
			'/images/skills/gitHub.png',
			'/images/skills/webpack.png',
			'/images/skills/jira.png',
		],
	},
];
