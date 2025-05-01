const projects = [
	// Thesis
	{
		title: "Thesis",
		dates: "Jan 2024 - Apr 2025",
		media: "thesis-thumb.png",
		description: [
			"A research project that aims to find how different controller visualizations impact how users follow a given movement.",
			"Results indicated that manual and animation type had a significant effect on accuracy, and manual and offset type had a significant effect on user preference."
		],
		skills: ["Unity", "C#", "Meta XR SDK", "R"],
		links: [
			{label: "Project Github", click: "https://github.com/GabyShamblin/Thesis-Project"},
			{label: "Data Github", click: "https://github.com/GabyShamblin/movement-visualization-data"},
			{label: "Thesis", click: ""}
		]
	},
	// Moon
	{
		title: "VR Moon Trip", 
		dates: "Jan - Apr 2024",
		media: "advvr-thumb.png", 
		description: [
			"A Unity project for CAP 6119: Advanced VR.",
			"Includes a scripted sequence meant mimic the ride Mission: Space.",
			"Walks player through the controls, takeoff, landing, and environmental interactions."
		], 
		skills: ["Unity", "C#", "XR Interaction Toolkit", "Blender"], 
		links: [
			{label: "Video", click: "https://youtu.be/YrPfZW1eUFg"}
		]
	}, 
	// Escape room
	{
		title: "VR Escape Room", 
		dates: "Jan - Apr 2024",
		media: "mr-thumb.png", 
		description: [
			"A group project with 5 people for CAP 6117: Mixed Reality Project.", 
			"Includes 4 different puzzles for the user to solve (estimated 30 minutes playtime).", 
			"Worked on environment and puzzle integration."
		], 
		skills: ["Unity", "C#", "XR Interaction Toolkit", "Blender"],
		links: [
			{label: "Playlist", click: "https://www.youtube.com/playlist?list=PLLAatflC7TYJv_3qfoBEn0L07dqsGpFvv"},
			{label: "Github", click: "https://github.com/GabyShamblin/Escape-Room"}
		]
	}, 
	// Thunderstorm
	{
		title: "Thunderstorm Simulation", 
		dates: "Aug - Dec 2023",
		media: "rain-project.png", 
		description: [
			"A project created for CAP 5727: Realistic Realtime Rendering.", 
			"Designed to mimic a real-world thunderstorm using Unreal Engine 5's Blueprints, Niagara particle system, and Lumen."
		], 
		skills: ["Unreal Engine 5"], 
		links: [
			{label: "Video", click: "https://youtu.be/mS35nARSo88?si=TscXleuAKQbuq2yM"},
			{label: "Github", click: "https://github.com/GabyShamblin/Realtime-Rendering"}
		]
	}, 
	// AR engineering
	{
		title: "Augmented Reality Engineering", 
		dates: "Aug - Dec 2023",
		media: "ar-thumb.png", 
		description: [
			"Six Unity projects on different topics created for CAP 6110: Augmented Reality Engineering.", 
			"Topics include tracking, visual coherence, situated visualization, interaction, navigation, and collaboration."
		], 
		skills: ["Unity", "C#", "Vuforia"], 
		links: [
			{label: "Playlist", click: "https://youtube.com/playlist?list=PLLAatflC7TYIysXY9DPVkXql6H-apHFQX&si=1AAebMOP9ndXdGL_"}
		]
	}, 
	// Senserator
	{
		title: "SenseRator", 
		dates: "Feb - Dec 2023",
		media: "senserator-thumb.jpg", 
		description: [
			"A group of 5 people for COP 4934/4935: Senior Design.", 
			"Uses lidar and a camera to capture the environment.", 
			"Performs object detection and semantic segmentation on camera data and displays output to the user on a custom interface.",
			"Worked on user interface."
		], 
		skills: ["Python", "PySimpleGUI", "Open3D"], 
		links: [
			{label: "Video", click: "https://youtu.be/rFd1qQmFYQ0?si=wPxdY7MrYtnJDtDm"}
		]
	}, 
	// Heart
	{
		title: "Heart Visualization Tool", 
		dates: "May 2023",
		media: "heart.jpg", 
		description: [
			"Heart visualization including labels for different parts of the human heart.", 
			"Allows user to click through labels, start and stop animation, rotate around subject, and zoom in and out.", 
			"Made following LinkedIn Learning tutorial by Alan Thorn"
		], 
		skills: ["Unity", "C#"], 
		links: [
			{label: "Try it for Windows", file: "./public/HeartWin64.zip"},
			{label: "Try it for Mac", file: "./public/HeartMac.zip"},
			{label: "Tutorial", click: "https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Funity-medical-visualization-01-preparation-and-design%3Ftrk%3Dshare_ent_url%26shareId%3DH7coBLC%252BRO%252BbCMm3BaxMFA%253D%253D"}
		]
	}, 
	// VR engineering
	{
		title: "Virtual Reality Engineering", 
		dates: "Jan - Apr 2023",
		media: "vr-thumb.png", 
		description: [
			"Six Unity projects on different topics created for CAP 5115: Virtual Reality Engineering.", 
			"Topics include virtual environments, traveling, interactions, pyhsics, animations, and user interactions."
		], 
		skills: ["Unity", "C#", "SteamVR"], 
		links: [
			{label: "Playlist", click: "https://youtube.com/playlist?list=PLLAatflC7TYJVc8Mac2dU3t1P8UZq8pqR"}
		]
	}, 
	// Topo schedule
	{
		title: "Top of the Schedule", 
		dates: "Feb - Apr 2022",
		media: "scheduler.jpg", 
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
	{
		title: "Knight's Contact Manager", 
		dates: "Feb 2022",
		media: "contactManager.jpg", 
		description: [
			"A group project with 4 people for COP 4311: Processes of Object-Oriented Software Development.", 
			"Users can login or register an account.", 
			"Allows a logged in user to create, search, update, and delete contacts.",
			"Worked on design and frontend."
		], 
		skills: ["HTML", "CSS", "Bootstrap"], 
		links: [
			{label: "Presentation", file: "./public/Small Project.pdf"}
		]
	}, 
	// Gray website
	{
		title: "emilygrayauthor.com", 
		dates: "Dec 2021 - Present",
		media: "grayWebsite.jpg", 
		description: [
			"Creation and maintenance of a website for a bestselling author."
		], 
		skills: ["HTML", "CSS"], 
		links: [
			{label: "Website", click: "https://emilygrayauthor.com/"}
		]
	}, 
	// Liar's dice
	{
		title: "Liar's Dice Game", 
		dates: "Nov 2021",
		media: "diceGame.jpg", 
		description: [
			"A group project with 4 people for KnightHacks 2021.", 
			"Worked on JavaScript for the base game rules.", 
			"Includes a game log to keep track of player's guesses and tally scores."
		], 
		skills: ["HTML", "CSS", "JavaScript"], 
		links: [
			{label: "Hackathon Page", click: "https://devpost.com/software/liar-s-dice-8qen14?ref_content=my-projects-tab&ref_feature=my_projects"}
		]
	}, 
	// Jeopardy
	{
		title: "Python Jeopardy Game", 
		dates: "Jun 2021",
		media: "pythonMenu.jpg", 
		description: [
			"Includes file to change questions and incorrect answer options are randomized.", 
			"Keeps track of answered questions and tallys score.", 
			"Contains multiple game screens for start menu, game menu, questions, and end menu.",
			"Created as an example game for the students of the UCF Computer Science Summer Institute."
		], 
		skills: ["Python", "PyGame"], 
		links: [
			{label: "Github", click: "https://github.com/GabyShamblin/Examples/tree/master/Python%20Jeopardy%20Game"}
		]
	}
];

export default projects;