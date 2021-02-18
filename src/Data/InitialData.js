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

export const projectTwo = {
	image: ['/images/madzita.jpg'],
	heroku: 'https://madzita.herokuapp.com/',
	git: 'https://github.com/Bosik-R/final__project',
	title: 'Simple online-shop',
	p1:
		'Build alone from the scrach a react online shop. This was a final project in the Web Developer bootcamp at "KODILLA".',
	p2:
		'In the shop you are routed throu diferent sub-pages. The dataBase is located on MongoDB cloud. The backend server response to get, getById and post requests. After sending order you get a response from server with your full order. I used brouser local storage to save cart content',
	p3:
		'technologies used: react, router, redux, axsios, thunk, express, mongoDB, mogoose, local storage',
	p4:
		'Im still improving this project. Comming next: Validation OAuth, React Trasition Group and others...',
};

export const projectOne = {
	image: ['/images/portfolio-1.jpg', '/images/portfolio-2.jpg'],
	heroku: 'https://portfolio-tomasz.herokuapp.com/',
	git: 'https://github.com/Bosik-R/react-styled-components',
	title: 'Portfolio',
	p1: 'This is my lates project, a react page using styled components.',
	p2:
		'It was my first react page using "styled components" that i kind of fall in love with. Its great how you kan handle syles thru props and states. I refactored it to my Portfolio page. I based it on function components wome times "stateless components" and react scrool that provides smoot scrool.',
	p3: 'technologies used: react, styled components, react scrool',
	p4: 'In the future, export dataBase to mongoDB cloud, add new content',
};
