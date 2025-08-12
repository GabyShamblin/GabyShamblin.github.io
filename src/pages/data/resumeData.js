const experience = [
	// Johns Hopkins
	{
		title: "Programmer Analyst", 
		company: "Johns Hopkins University",
		location: "Remote",
		startDate: "Apr 2024",
		endDate: "",
		description: [
			"Develop immersive virtual reality training simulations for the da Vinci surgical system using Unity, C\#, and the Meta XR SDK to enhance user motor skills and procedural accuracy.",
			"Integrate advanced datasets, such as JIGSAWS, to create dynamic, interactive learning environments tailored to individual user needs, driving innovation in surgical education.",
			"Collaborate cross-functionally to design and implement scalable solutions, ensuring seamless functionality and user engagement for a professional audience."
		], 
		skills: ["Unity", "C#", "Meta XR SDK"],
	}, 
	// JP Morgan
	{
		title: "Software Engineering Intern", 
		company: "JP Morgan Chase & Co.",
		location: "Tampa, FL, USA",
		startDate: "Jun 2023",
		endDate: "Aug 2023",
		description: [
			"Designed and deployed an ADA-compliant user interface for an internal application using React.js and Springboot, supporting 30,000 users and enhancing accessibility.",
			"Communicated with shareholders about project specifications.",
			"Worked alongside six other people using Agile and Kanban development strategies."
		], 
		skills: ["React.js", "Springboot", "Jest", "Agile", "Scrum", "Kanban"],
	}, 
	// Trevor
	{
		title: "Full Stack Intern", 
		company: "Epic North LLC",
		location: "Remote",
		startDate: "Jun 2022",
		endDate: "Apr 2023",
		description: [
			"Optimized website functionality and repaired code by leveraging Angular, TypeScript, ASP.NET, and SQL, ensuring seamless client deliverables."
		], 
		skills: ["Angular", "TypeScript", "ASP.NET", "SQL", "Azure DevOps"],
	}, 
];

const teaching = [
	// TA
	{
		title: "Teaching Assistant", 
		company: "University of Central Florida",
		location: "Orlando, FL, USA",
		startDate: "Jul 2021",
		endDate: "Dec 2022",
		description: [
			"Led twice-weekly lab sessions for 20-30 students at a time, providing hands-on guidance in foundational topics such as variables, conditionals, loops, and functions.",
			"Hosted weekly virtual office hours to support student learning outside of class time and answer code-related questions.",
			"Graded assignments for about 80 students per semester, delivering timely and constructive feedback to reinforce core programming skills."
		], 
		skills: ["Python"],
	}, 
	// Camp TA
	{
		title: "Teaching Assistant", 
		company: "UCF Computer Science Summer Institute",
		location: "Orlando, FL, USA",
		startDate: "Jun 2021",
		endDate: "Jun 2021",
		description: [
			"Graded assignments and provided appropriate feedback in a timely manner.",
			"Taught topics in Python to a class of eight students and offered support with assignments."
		], 
		skills: ["Python", "PyGame"],
	},
];

const research = [
	{
		title: "Graduate Research Affiliate", 
		company: "Extended Reality and Artificial Intelligence (XRAI) Lab",
		location: "University of Central Florida",
		startDate: "Aug 2024",
		endDate: "",
		description: [
			"Participate in weekly lab meetings and presenting updates on independent research under Dr. Ryan McMahan."
		], 
		// skills: ["Unity", "C#", "Meta XR SDK"],
	}, 
	{
		title: "Undergraduate Research Assistant", 
		company: "Extended Reality and Traning (XRT) Lab",
		location: "Virginia Tech",
		startDate: "Jan 2022",
		endDate: "Jul 2024",
		description: [
			"Participated in weekly lab meetings directed by Dr. Ryan McMahan.",
			"Collaborated with other students on VR-based training prototypes.",
			"Reported on course-related technical progress and gained exposure to academic research progress."
		], 
		// skills: ["React.js", "Springboot", "Jest", "Agile", "Scrum", "Kanban"],
	}, 
];

const education = [
	{
		school: "University of Central Florida", 
		location: "Orlando, FL, USA",
		graduation: "May 2025",
		degree: "M.S. Computer Science",
		extras: [
			"Thesis: \"The Impact of Visualization Styles on Movement Imitation Accuracy in Virtual Reality\"",
			"Advisor: Dr. Joseph J. LaViola",
			"Mixed Reality Graduate Certificate",
			"GPA: 3.6/4.0"
		],
		link: "https://www.parchment.com/u/award/edfa02d6d8bcc242dbdee5a440db63c7"
	}, {
		school: "University of Central Florida", 
		location: "Orlando, FL, USA",
		graduation: "Dec 2023",
		degree: "B.S. Computer Science",
		extras: [
			"GPA: 3.7/4.0"
		],
		link: "https://www.parchment.com/u/award/4bbe704c6e51d502b40acd5392d7172c"
	}
];

const courses = [
	"Virtual Reality Engineering",
	"Augmented Reality Engineering",
	"Mixed Reality Engineering",
	"Realistic Real-Time Rendering",
	"Advanced Virtual Reality",
	"Artificial Intelligence",
	"Machine Learning",
	"AR, VR, & MR in Healthcare"
]

// Icons: https://devicon.dev/
const skills = [
	{
		title: "Front-End",
		section: [
			{
				name: "Angular",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
			}, {
				name: "CSS",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
			}, {
				name: "HTML",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
			}, {
				name: "JavaScript",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
			}, {
				name: "MaterialUI",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
			}, {
				name: "React",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
			}, {
				name: "TypeScript",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
			},
		]
	}, {
		title: "Back-End",
		section: [
			{
				name: "ASP.NET",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
			}, {
				name: "C",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
			}, {
				name: "MongoDB",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
			}, {
				name: "Python",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
			}, {
				name: "SQL",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
			}, {
				name: "Java",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
			},
		]
	}, {
		title: "Games/Virtual Reality",
		section: [
			{
				name: "Blender",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
			}, {
				name: "C#",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
			}, {
				name: "C++",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
			}, {
				name: "Unity",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
				background: true
			}, {
				name: "Unreal",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg",
				background: true
			},
		]
	}, {
		title: "Other",
		section: [
			{
				name: "Git",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
			}, {
				name: "Github",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
				background: true
			}, {
				name: "Haskell",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg"
			}, {
				name: "JSON",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
				background: true
			}, {
				name: "Jupyter",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg"
			}, {
				name: "Markdown",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
				background: true
			}, 
			// {
			// 	name: "npm",
			// 	media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
			// }, 
			{
				name: "Numpy",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
			}, {
				name: "Pandas",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
				background: true
			}, {
				name: "R",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
			}, {
				name: "Visual Studio",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
			}, {
				name: "Visual Studio Code",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
			}, {
				name: "Windows",
				media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
			}
		]
	},
];

const oldSkills = [
	{
		name: "Angular",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
	}, {
		name: "ASP.NET",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
	}, {
		name: "Blender",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
	}, {
		name: "C",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
	}, {
		name: "C#",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
	}, {
		name: "C++",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
	}, {
		name: "CSS",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
	}, {
		name: "Git",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
	}, {
		name: "Github",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
		background: true
	}, {
		name: "Haskell",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg"
	}, {
		name: "HTML",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
	}, {
		name: "Java",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
	}, {
		name: "JavaScript",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
	}, {
		name: "JSON",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
		background: true
	}, {
		name: "Jupyter",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg"
	}, {
		name: "Markdown",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
		background: true
	}, {
		name: "MaterialUI",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
	}, {
		name: "MongoDB",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
	}, {
		name: "npm",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
	}, {
		name: "Numpy",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
	}, {
		name: "Pandas",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
		background: true
	}, {
		name: "Python",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
	}, {
		name: "React",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
	}, {
		name: "SQL",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
	}, {
		name: "TypeScript",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
	}, {
		name: "Unity",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
		background: true
	}, {
		name: "Unreal",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg",
		background: true
	}, {
		name: "Visual Studio",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
	}, {
		name: "Visual Studio Code",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
	}, {
		name: "Windows",
		media: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
	}
];

const certs = [
	{
		name: "AWS Certified Cloud Practitioner",
		media: "aws.png",
		link: "https://www.credly.com/badges/c7d70e24-8de8-4d28-83c7-c630f578d737/public_url"
	}
]

export { experience, teaching, research, education, skills, certs };