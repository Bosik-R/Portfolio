export const links = {
	git: 'https://github.com/Bosik-R',
	linkedin: 'https://www.linkedin.com/in/tomasz-rosik-3b55381bb',
};

export const aboutMe = {
	myStory: 
		[
			`I'm Tom a Bootcamp went through, self-learned Web Developer. `,
			`I always had a passion for programming that's why I decided to make it my all-day work. Last year I completed a 9 month Web Developer Bootcamp. `,
		],
	myGool: 
		[
			`Apart from Bootcamp, I'm still learning new things. `,
			`I went through a couple of tutorials on YouTube. I'm now starting an Angular course on Udemy, and the next step will be a mobile UI framework React Nativ or Flutter. `,
		],
};

export const projects = [
	{
		title: 'Portfolio',
		invert: false,
		tech: [
			'react',
			'styled-components',
			'react-scroll',
			'pure-react-carousel',
		],
		description: [
			`This is my latest project, a react app using styled-components. `,
			`I based it on function components, sometimes stateless components. The styled elements are gathered in a separate File for each component and then imported, this gives a cleaner and more organized code. `,
			`React scroll provides smooth scroll and react pure carousel smooth image sliding. The contact form is linked through a PHP file with my hosting email account. `,
			`I used styled-components for the first time and I really liked that library. It's great how you can change styles through props and states.`,
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
			'react-bootstrap',
			'axios',
			'thunk',
			'node.js',
			'express.js',
			'mongoDB',
			'mongoose',
		],
		description: [
			`Built from scratch a React-based online shop. This was my final project in the Web Developer Bootcamp at "KODILLA". `,
			`In the shop, you are routed through different sub-pages via react-router.  The initial data is downloaded via Axios from a MongoDB cloud server and connected to the redux store. `,
			`The node.js server response to get, getById, and post requests. After receiving an order the server sends a response with your full order and a unique ID. I also used browser local storage to save cart content. `,
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
			`On my Bootcamp course, I took part in a developer work simulation that lasted 3 weeks. My group was put in the middle of project development. `, 
			`We were managing the work through Jira where we assigned tasks for ourselves. We had to write daily reports about our progress. We also had weekly online meetings. `,
			`I was responsible for adding new functionalities like state changes in the product data depending on the user choices. I added the whole Gallery components with styling and functionalities. `,
		],
		images: [
			'/images/furnitureShop1.jpg',
			'/images/furnitureShop2.jpg',
			'/images/furnitureShop3.jpg',
		],
		live: 'https://furniture.tomasz-rosik.eu/',
		git: 'https://github.com/Bosik-R/furniture-shop',
	},
	{
		title: 'To Do List',
		invert: true,
		tech: ['react', 'router', 'redux', ],

		description: [
			`This was my introduction to React and the moment I fall in love to React. A simple To-Do List using the redux store to get and handle data, and react-router to navigate between views. `,
		],
		images: [
			'/images/react-first-step1.jpg',
			'/images/react-first-step2.jpg',
			'/images/react-first-step3.jpg',
		],
		live: 'http://react-first-step.tomasz-rosik.eu/',
		git: 'https://github.com/Bosik-R/react-first-step',
	},
	{
		title: 'Guseppe Pizza',
		invert: false,
		tech: ['HTML', 'javascript', 'OOP', 'SASS', 'AJAX', ],

		description: [
			`Pizza ordering and table booking page. A project developed during the Bootcamp. This was the introduction to OOP (classes and instances) and AJAX. `,
			`The main focus was to learn the javascript OOP approach and build an ordering and booking page that sends data to a server. `,
		],
		images: [
			'/images/guseppe1.jpg',
			'/images/guseppe2.jpg',
			'/images/guseppe3.jpg',
			'/images/guseppe4.jpg',
		],
		live: 'https://guseppe.herokuapp.com/',
		git: 'https://github.com/Bosik-R/project-pizzeria',
	},
	{
		title: 'Landing Page',
		invert: true,
		tech: ['HTML', 'CSS', 'SASS', ],

		description: [
			`Pure HTML, CSS, SASS project made during the Bootcamp. The first one that I made almost alone following only design sheets and few tips given by KODILLA. `,
		],
		images: [
			'/images/second-project1.jpg',
			'/images/second-project2.jpg',
			'/images/second-project3.jpg',
		],
		live: 'http://second-project.tomasz-rosik.eu/',
	},

];




export const mySkills = [
	{
		title: 'Front-End',
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
		title: 'Back-End',
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
			'/images/skills/github.png',
			'/images/skills/webpack.png',
			'/images/skills/jira.png',
		],
	},
];
