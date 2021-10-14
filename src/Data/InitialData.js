export const links = {
	git: 'https://github.com/Bosik-R',
	linkedin: 'https://www.linkedin.com/in/tomasz-rosik-3b55381bb',
	resume: 'https://drive.google.com/file/d/1GyjY_gwvbXY-d1Cds1bwQJF5_tThEw2T/view?usp=sharing',
};

export const aboutMe = {
	myStory: [
		`I always liked building and creating things, that's why coding gives me so much joy. `,
		`I decided to make it my all-day work and do for living something that I'm passionate about. `,
	],
	myGool: [
		`For a start, I completed a Web Developer Bootcamp. `,
		`Apart from it I'm constantly improving my skills and learning new ones. I'm truly motivated and focused on reaching my goal to work as a full-time developer. `,
	],
};

export const projects = [
	{
		title: 'Next-ts',
		invert: true,
		tech: ['react', 'next.js', 'typescript', 'styled-components', 'mongoDB'],
		description: [
			`This is my first Next.js and Typescript app. It is exciting to learn a new approach to react. `,
			`The data used in this project is inspired by a browser extension 'daily.dev' that I love and recommend. The data is fetched from MongoDB cloud and used in the app through useContext hook. `,
			`With the next.js file structure the home and details page with all possible paths are pre-rendered on the server. `,
		],
		images: ['/images/next-ts-sc1.jpg', '/images/next-ts-sc2.jpg', '/images/next-ts-sc3.jpg', '/images/next-ts-sc4.jpg'],
		live: 'https://next-ts-xi.vercel.app/',
		git: 'https://github.com/Bosik-R/next-ts',
	},
	{
		title: 'Posts Typescript',
		invert: false,
		tech: ['react', 'typescript', 'styled-components', 'restAPI', 'react skeleton'],
		description: [
			`Using React and Typescript I built an app to fetch Posts data from the JSON Placeholder server. By turning the edit mode on, the user can manipulate the individual post content. `,
			`The response from the server is faked but I created a state management through the useContext hook which is updated globally to simulate the real server response. `,
			`React skeleton provides a nice loading animation during the data fetching. `,
		],
		images: [
			'/images/post-api1.jpg',
			'/images/post-api2.jpg',
			'/images/post-api3.jpg',
			'/images/post-api4.jpg',
			'/images/post-api5.jpg',
			'/images/post-api6.jpg',
		],
		live: 'https://post-api.tomasz-rosik.pl/',
		git: 'https://github.com/Bosik-R/typescript-post-api',
	},

	{
		title: 'Digit Span',
		invert: true,
		tech: ['react', 'styled-components'],
		description: [
			`This is my latest project, a react and styled-components based app to test your memory. `,
			`It is a clone of a Cambrige Memory test.`,
			`In the project, insted of using Redux I decided to use a react state management hook: 'useReducer'. It is much more time-saving than Redux`,
		],
		images: ['/images/memory_test1.png', '/images/memory_test2.png', '/images/memory_test3.png'],
		live: 'https://digit-span.tomasz-rosik.pl/',
		git: 'https://github.com/Bosik-R/memory-test',
	},
	{
		title: 'Portfolio',
		invert: false,
		tech: ['react', 'styled-components', 'react-scroll', 'pure-react-carousel'],
		description: [
			`My first react project that I created using styled-components. `,
			`I based it on function components. The styled elements are gathered in a separate File for each component and then imported. This gives a cleaner and more organized code. `,
			`React scroll provides smooth scroll and react pure carousel gives images a sleek sliding. The contact form is linked through PHP with my email account. `,
			`I used styled-components for the first time and I really liked that library. It's great how you can change styles through props and states.`,
		],
		images: ['/images/portfolio1.jpg', '/images/portfolio2.jpg'],
		git: 'https://github.com/Bosik-R/Portfolio',
	},
	{
		title: 'Madzita',
		invert: true,
		tech: ['react', 'router', 'redux', 'react-bootstrap', 'axios', 'thunk', 'node.js', 'express.js', 'mongoDB', 'mongoose'],
		description: [
			`Built from scratch a React-based online shop. This was my final project in the Web Developer Bootcamp. `,
			`In the shop, you are routed through different sub-pages via react-router.  The initial data is downloaded via Axios from a MongoDB cloud server and connected to the redux store. `,
			`The node.js server response to get, getById, and post requests. After receiving an order the server sends a response with your full order and a unique ID created on the mongo cloud server. I also used browser local storage to save cart content. `,
		],
		images: ['/images/madzita1.jpg', '/images/madzita2.jpg', '/images/madzita3.jpg', '/images/madzita4.jpg', '/images/madzita5.jpg'],
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
		images: ['/images/furnitureShop1.jpg', '/images/furnitureShop2.jpg', '/images/furnitureShop3.jpg'],
		live: 'https://furniture.tomasz-rosik.eu/',
		git: 'https://github.com/Bosik-R/furniture-shop',
	},
	{
		title: 'To Do List',
		invert: true,
		tech: ['react', 'router', 'redux'],

		description: [
			`This was my introduction to React and it was the moment I fell in love with React. I made a simple To-Do List using the redux store to get and handle data and react-router to navigate between views. `,
		],
		images: ['/images/react-first-step1.jpg', '/images/react-first-step2.jpg', '/images/react-first-step3.jpg'],
		live: 'http://react-first-step.tomasz-rosik.eu/',
		git: 'https://github.com/Bosik-R/react-first-step',
	},
	{
		title: 'Guseppe Pizza',
		invert: false,
		tech: ['HTML', 'javascript', 'OOP', 'SASS', 'AJAX'],

		description: [
			`Pizza ordering and table booking page. A project which was developed during the Bootcamp. This was the introduction to OOP (classes and instances) and AJAX. `,
			`The main focus was to learn the javascript OOP approach and build an ordering and booking page that sends data to a server. `,
		],
		images: ['/images/guseppe1.jpg', '/images/guseppe2.jpg', '/images/guseppe3.jpg', '/images/guseppe4.jpg'],
		live: 'https://guseppe.herokuapp.com/',
		git: 'https://github.com/Bosik-R/project-pizzeria',
	},
	{
		title: 'Landing Page',
		invert: true,
		tech: ['HTML', 'CSS', 'SASS'],

		description: [
			`Pure HTML, CSS, SASS project made during the Bootcamp. The first one that I made almost alone using only design sheets and few tips given by KODILLA. `,
		],
		images: ['/images/second-project1.jpg', '/images/second-project2.jpg', '/images/second-project3.jpg'],
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
			'/images/skills/typescript.png',
			'/images/skills/react.png',
			'/images/skills/react redux.png',
			'/images/skills/axios.png',
			'/images/skills/styled components.png',
		],
	},
	{
		title: 'Back-End',
		width: '55%',
		skills: ['/images/skills/nodeJS.png', '/images/skills/expressJS.png', '/images/skills/websocket.png', '/images/skills/mongoDB.png'],
	},
	{
		title: 'Build and Management',
		width: '42%',
		skills: ['/images/skills/npm.png', '/images/skills/github.png', '/images/skills/webpack.png', '/images/skills/jira.png'],
	},
];
