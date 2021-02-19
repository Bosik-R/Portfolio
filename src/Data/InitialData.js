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
]

export const skillsSoft = [
	{ name: 'communication', img: `/images/communication.jpg` },
	{ name: 'problem solving', img: `/images/problem-solving.jpg` },
	{ name: 'responsibility', img: `/images/responsibility.jpg` },
	{ name: 'self motivation', img: `/images/self-motivation.jpg` },
	{ name: 'team worker', img: `/images/team-worker.jpg` },
	{ name: 'work under pressure', img: `/images/under-pressure.jpg` },
]

export const myWork = {
	madzita: {
		image: ['/images/madzita-1.jpg', '/images/madzita-2.jpg'],
		heroku: 'https://madzita.herokuapp.com/',
		git: 'https://github.com/Bosik-R/final__project',
		title: 'Online-shop',
		paragraph: [
			'Build alone from scrach, a react based online shop. This was a final project in the Web Developer bootcamp at "KODILLA".',
			'In the shop you are routed throu diferent sub-pages. The dataBase is located on MongoDB cloud. The backend server response to get, getById and post requests. After sending order you get a response from server with your full order. I used brouser local storage to save cart content',
			'technologies used: react, router, redux, axsios, thunk, express, mongoDB, mogoose, local storage',
			'Im still improving this project. Comming next: Validation OAuth, React Trasition Group and others...',
		],
	},

	portfolio: {
		image: ['/images/portfolio-1.jpg', '/images/portfolio-2.jpg'],
		heroku: 'https://portfolio-tomasz.herokuapp.com/',
		git: 'https://github.com/Bosik-R/react-styled-components',
		title: 'Portfolio',
		paragraph: [
			'This is my lates project, a react page using styled components.',
			'It was my first react page using "styled components" that i kind of fall in love with. Its great how you kan handle syles thru props and states. I refactored it to my Portfolio page. I based it on function components wome times "stateless components" and react scrool that provides smoot scrool.',
			'technologies used: react, styled components, react scrool',
			'In the future, export initialData to mongoDB cloud, add new content',
		],
	},

	furnitureShop: {
		image: ['/images/furniture-shop.jpg'],
		heroku: 'https://portfolio-tomasz.herokuapp.com/',
		git: 'https://github.com/Varenthein/WDP-2008-02',
		title: 'Furniture shop',
		paragraph: [
			'This is my team project.',
			'On my bootcamp course I took part in a developer work simulation that last 3 weeks. My group was put into a work in progress project, wich was at start overwelming for us. I needed to make a picture of it',
			'I was responsible for adding new functionalities and components. Also some simple styling. At that time the chalege for my was to add the fade in fade out effect on picture change. I used react spring library but now i think i would chose react transition group. Also the dropdown menu i would do diferent. But this is the learning process, to self improve',
			'wen i find the time for it i will fix som "team mistakes :)" to make this look awsome',
		],
	},
}
export const aboutMe = {
	image: '/images/tom.jpg',
	title:
		'Hi !  Im Tom a bootcamp went through, self-learned Junior Web Developer.',
	p1:
		'My jurney with programing started 10 years ago with building and deploying a HTML web page that i made for a frend.Back then i didnt have the curage to fallou that path. And so was it until last year as i discovered that you dont need a colage degree to be a web developer ???? and didnt procied to be one, but I was ready to try it.',
	p2: 'On March I started a Web Developer bootcamp at KODILLA.',
	p3:
		'Since then i finish the bootcamp, where I worked on 2 projects build by my self and a 3 weeks teamwork simulation throu "Jira" working on a project with daylys, code reviw and weekly meetings.',
	p4:
		'Besides bootcamp I was learning by my self throu couple of courses and tuturials on youTube. So thats my a ambitus, self motivated, eager to lern person',
}
