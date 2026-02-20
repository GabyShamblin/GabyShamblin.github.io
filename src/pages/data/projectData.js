const projects = [
	// Abby
	// {
	// 	title: "thelifeofacruiser.com", 
	// 	dates: "Jan 2026 - Present",
	// 	media: "", 
	// 	description: [
	// 		"Designed and maintain a live WordPress site for a content creator, integrating blog features, media embedding, and responsive layouts."
	// 	], 
	// 	skills: ["WordPress", "HTML", "CSS"], 
	// 	links: [
	// 		{label: "Website", click: "https://thelifeofacruiser.com/"}
	// 	]
	// }, 
	// Thesis
	{
		id: "thesis",
		title: "Thesis",
		dates: "Jan 2024 - Apr 2025",
		media: [
			"thesis-thumb.png"
		],
		summary: "\"The Impact of Visualization Styles on Movement Imitation Accuracy in Virtual Reality\"",
		description: [
			"Virtual reality (VR) has become a powerful tool for motor learning and skill acquisition, offering immersive environments for users to practice and refine movements. This thesis investigates how different visualization styles in VR affect movement imitation accuracy, specifically focusing on hand movements. While prior research has explored precise alignment and visualization individually, few studies have examined their combined impact. This study addresses that gap by evaluating the effectiveness of various visualization methods in relation to offset, animation, and manual type.\nWe developed an application to ensure all participants experienced each visualization factor as 12 combinations in varied sequences. The user study conducted with 30 participants combined performance data with responses from the qualification, between trial, and end of experiment questionnaires. Movement data assessed performance accuracy, and questionnaire data captured user perception.\nThe results indicate that manual type significantly affects user satisfaction and accuracy (p < 0.001), with the unimanual condition yielding the highest accuracy. Animation style also had a significant effect (p < 0.001), with discrete animations improving accuracy compared to continuous animations. Offset had no significant effect on accuracy, but users did prefer closer visualizations.\nThese findings provide valuable insights into VR-based motor learning applications. By using discrete animation and close-up visuals, developers can enhance the effectiveness of movement learning tools. This could have a direct impact on careers where muscle memory is a necessity. Future research could explore applications in rehabilitation, training, and remote teleoperation to optimize VR-guided motor tasks. Research could also evaluate the impact of visualization design in VR on real-world applications."
		],
		skills: ["Unity", "C#", "Meta XR SDK", "R"],
		links: [
			{label: "Project Github", click: "https://github.com/GabyShamblin/Thesis-Project"},
			{label: "Data Github", click: "https://github.com/GabyShamblin/movement-visualization-data"},
			{label: "Playlist", click: "https://youtube.com/playlist?list=PLLAatflC7TYJB53mKR1G8KydKI-Ah2_lr&si=__VKGtSEe6l4ivrp"},
			{label: "Thesis", click: "https://stars.library.ucf.edu/etd2024/224/"}
		]
	},
	// Moon
	// {
	// 	title: "VR Moon Trip", 
	// 	dates: "Jan - Apr 2024",
	// 	media: "advvr-thumb.png", 
	// 	description: [
	// 		"A Unity project for CAP 6119: Advanced VR.",
	// 		"Includes a scripted sequence meant mimic the ride Mission: Space.",
	// 		"Walks player through the controls, takeoff, landing, and environmental interactions."
	// 	], 
	// 	skills: ["Unity", "C#", "XR Interaction Toolkit", "Blender"], 
	// 	links: [
	// 		{label: "Video", click: "https://youtu.be/YrPfZW1eUFg"}
	// 	]
	// }, 
	// Escape room
	{
		id: "escape-room",
		title: "VR Escape Room", 
		dates: "Jan - Apr 2024",
		media: [
			"mr-thumb.png"
		], 
		summary: "A group virtual reality escape room project",
		description: [
			"A group project with 5 people for CAP 6117: Mixed Reality Project.", 
			"Includes 4 different puzzles for the user to solve (estimated 30 minutes playtime).", 
			"Was designated project manager and worked on puzzle integration and environment creation."
		], 
		skills: ["Unity", "C#", "XR Interaction Toolkit", "Blender"],
		links: [
			{label: "Playlist", click: "https://www.youtube.com/playlist?list=PLLAatflC7TYJv_3qfoBEn0L07dqsGpFvv"},
			{label: "Github", click: "https://github.com/GabyShamblin/Escape-Room"}
		]
	}, 
	// Thunderstorm
	// {
	// 	title: "Thunderstorm Simulation", 
	// 	dates: "Aug - Dec 2023",
	// 	media: "rain-project.png", 
	// 	description: [
	// 		"A project created for CAP 5727: Realistic Realtime Rendering.", 
	// 		"Designed to mimic a real-world thunderstorm using Unreal Engine 5's Blueprints, Niagara particle system, and Lumen."
	// 	], 
	// 	skills: ["Unreal Engine 5"], 
	// 	links: [
	// 		{label: "Video", click: "https://youtu.be/mS35nARSo88?si=TscXleuAKQbuq2yM"},
	// 		{label: "Github", click: "https://github.com/GabyShamblin/Realtime-Rendering"}
	// 	]
	// }, 
	// AR engineering
	{
		id: "ar",
		title: "Augmented Reality Engineering", 
		dates: "Aug - Dec 2023",
		media: [
			"ar-thumb.png"
		], 
		summary: "A series of six augmented reality projects covering multiple topics",
		description: [
			"Six Unity projects on different topics created for CAP 6110: Augmented Reality Engineering.", 
			"Topics include tracking, visual coherence, situated visualization, interaction, navigation, and collaboration/multiplayer."
		], 
		skills: ["Unity", "C#", "Vuforia"], 
		links: [
			{label: "Playlist", click: "https://youtube.com/playlist?list=PLLAatflC7TYIysXY9DPVkXql6H-apHFQX&si=1AAebMOP9ndXdGL_"}
		]
	}, 
	// Senserator
	{
		id: "sense-rator",
		title: "SenseRator", 
		dates: "Feb - Dec 2023",
		media: [
			"senserator-thumb.jpg"
		], 
		summary: "A group senior design project which performs object detection and semantic segmentation on camera data",
		description: [
			"A group project of 5 people for COP 4934/4935: Senior Design.", 
			"Uses lidar and a camera to capture the environment.", 
			"Performs object detection and semantic segmentation on camera data and displays output to the user on a custom interface.",
			"Worked on user interface and LiDAR display."
		], 
		skills: ["Python", "PySimpleGUI", "Open3D"], 
		links: [
			{label: "Video", click: "https://youtu.be/rFd1qQmFYQ0?si=wPxdY7MrYtnJDtDm"}
		]
	}, 
	// Heart (including tutorial projects not a good idea?)
	// {
	// 	title: "Heart Visualization Tool", 
	// 	dates: "May 2023",
	// 	media: "heart.jpg", 
	// 	description: [
	// 		"Heart visualization including labels for different parts of the human heart.", 
	// 		"Allows user to click through labels, start and stop animation, rotate around subject, and zoom in and out.", 
	// 		"Made following LinkedIn Learning tutorial by Alan Thorn"
	// 	], 
	// 	skills: ["Unity", "C#"], 
	// 	links: [
	// 		{label: "Try it for Windows", file: "./public/HeartWin64.zip"},
	// 		{label: "Try it for Mac", file: "./public/HeartMac.zip"},
	// 		{label: "Tutorial", click: "https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Funity-medical-visualization-01-preparation-and-design%3Ftrk%3Dshare_ent_url%26shareId%3DH7coBLC%252BRO%252BbCMm3BaxMFA%253D%253D"}
	// 	]
	// }, 
	// VR engineering
	{
		id: "vr",
		title: "Virtual Reality Engineering", 
		dates: "Jan - Apr 2023",
		media: [
			"vr-thumb.png"
		], 
		summary: "A series of six virtual reality projects covering multiple topics",
		description: [
			"Six Unity projects on different topics created for CAP 5115: Virtual Reality Engineering.", 
			"Topics include virtual environments, traveling, interactions, physics, animations, and user interactions."
		], 
		skills: ["Unity", "C#", "SteamVR"], 
		links: [
			{label: "Playlist", click: "https://youtube.com/playlist?list=PLLAatflC7TYJVc8Mac2dU3t1P8UZq8pqR"}
		]
	}, 
	// Topo schedule
	{
		id: "top-schedule",
		title: "Top of the Schedule", 
		dates: "Feb - Apr 2022",
		media: [
			"scheduler.jpg"
		], 
		summary: "A group project of a custom schedule builder for the UCF computer science program",
		description: [
			"A group project with 7 people for COP 4311: Processes of Object-Oriented Software Development.", 
			"Allows users to create a college career schedule for the UCF Computer Science undergraduate program.", 
			"Uses an algorithm based on the importance of classes to create the schedule.",
			"Worked on the database, algorithm, and class flowchart."
		], 
		skills: ["React", "MaterialUI", "JavaScript", "ExpressJS", "Mongoose", "MongoDB"], 
		links: [
			{label: "Presentation", file: "./public/Group 1 TOTS Presentation.pdf"}
		]
	}, 
	// Contact manager
	// {
	// 	title: "Knight's Contact Manager", 
	// 	dates: "Feb 2022",
	// 	media: "contactManager.jpg", 
	// 	description: [
	// 		"A group project with 4 people for COP 4311: Processes of Object-Oriented Software Development.", 
	// 		"Users can login or register an account.", 
	// 		"Allows a logged in user to create, search, update, and delete contacts.",
	// 		"Worked on design and frontend."
	// 	], 
	// 	skills: ["HTML", "CSS", "Bootstrap"], 
	// 	links: [
	// 		{label: "Presentation", file: "./public/Small Project.pdf"}
	// 	]
	// }, 
	// Gray website
	// {
	// 	title: "emilygrayauthor.com", 
	// 	dates: "Dec 2021 - Present",
	// 	media: "grayWebsite.jpg", 
	// 	description: [
	// 		"Creation and maintenance of a website for a bestselling author."
	// 	], 
	// 	skills: ["HTML", "CSS"], 
	// 	links: [
	// 		{label: "Website", click: "https://emilygrayauthor.com/"}
	// 	]
	// }, 
	// Liar's dice
	// {
	// 	title: "Liar's Dice Game", 
	// 	dates: "Nov 2021",
	// 	media: "diceGame.jpg", 
	// 	description: [
	// 		"A group project with 4 people for KnightHacks 2021.", 
	// 		"Worked on JavaScript for the base game rules.", 
	// 		"Includes a game log to keep track of player's guesses and tally scores."
	// 	], 
	// 	skills: ["HTML", "CSS", "JavaScript"], 
	// 	links: [
	// 		{label: "Hackathon Page", click: "https://devpost.com/software/liar-s-dice-8qen14?ref_content=my-projects-tab&ref_feature=my_projects"}
	// 	]
	// }, 
	// Jeopardy
	// {
	// 	title: "Python Jeopardy Game", 
	// 	dates: "Jun 2021",
	// 	media: "pythonMenu.jpg", 
	// 	description: [
	// 		"Includes file to change questions and incorrect answer options are randomized.", 
	// 		"Keeps track of answered questions and tallys score.", 
	// 		"Contains multiple game screens for start menu, game menu, questions, and end menu.",
	// 		"Created as an example game for the students of the UCF Computer Science Summer Institute."
	// 	], 
	// 	skills: ["Python", "PyGame"], 
	// 	links: [
	// 		{label: "Github", click: "https://github.com/GabyShamblin/Examples/tree/master/Python%20Jeopardy%20Game"}
	// 	]
	// }
];

const publications = [
	// Thesis
	{
		authors: "**Gabriela R. Shamblin**, Ryan P. McMahan, Joseph J. LaViola",
		year: "2026",
		title: "Show Me the Way: Investigating Gestures, Animations, and Spatial References for Acquiring Motor Skills in Virtual Reality",
		publisher: "Planned submission to *ACM Conference on Designing Interactive Systems (DIS)*",
		links: [
			// {label: "Project Github", click: "https://github.com/GabyShamblin/Thesis-Project"},
		]
	},
];

export { projects, publications };