import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Chip, Grid, Typography, List, ListItem } from '@mui/material';
// import SkillSlider from './SkillSlider';
import './css/typing.css';

import CircleIcon from '@mui/icons-material/Circle';



const CustomButton = styled(Button)(() => ({
	minWidth: 200,
	backgroundColor: "rgba(2, 232, 232, 0.2)", 
	color: '#02e8e8', 
	border: '2px solid #02e8e8',
	borderRadius: 50,
	'&:hover': {
		backgroundColor: "rgba(2, 232, 232, 0)",
	}
}));

const CustomBox = styled(Box)(({link = false}) => ({
	maxWidth: 1200, 
	color: 'white',
	m: 'auto',
	p: 1,
	fontSize: '18px',
	borderRadius: 10,
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		backgroundColor: link ? 'rgba(3, 152, 175, 0.15)' : 'rgba(3, 152, 175, 0)'
	},
	// border: '2px dashed red'
}));

const ListGrid = styled(Grid)(({project = false}) => ({
	textAlign: 'left', 
	borderLeft: project ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(2, 232, 232, 0.5)',
}));

const ListDate = styled('div')(() => ({
	color: '#d1d1d1',
	fontSize: '16px',
	textAlign: 'right'
}));

const SkillChip = styled(Chip)(() => ({
	margin: 3,
	color: '#1efc0f',
	backgroundColor: 'rgba(30, 252, 15, 0.2)',
	border: '2px solid #1efc0f',
}));

const TimelineCircle = styled(CircleIcon)(() => ({
	position: 'absolute',
	color: '#027f8c',
	top: 0,
	right: '-31px',
}));

const LogoCircle = styled('div')(() => ({
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white',
	borderRadius: 50
}));

const MenuText = styled(Typography)(() => ({
	position: 'absolute',
	top: 15,
	left: 50,
	maxWidth: 100,
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	},
}));

// Using the first three letters of the mont, return the index of that month (0-11)
function StringToDate(month) {
	switch(month) {
		case "Jan": return 0;
		case "Feb": return 1;
		case "Mar": return 2;
		case "Apr": return 3;
		case "May": return 4;
		case "Jun": return 5;
		case "Jul": return 6;
		case "Aug": return 7;
		case "Sep": return 8;
		case "Oct": return 9;
		case "Nov": return 10;
		case "Dec": return 11;
		default: return 0;
	}
}

// Using two strings (in the format "Aaa 0000"), calculate the difference between the two dates and return a string displaying it (in the format "X years, X months"). The string differs based on the amount of years and months
function CalculateMonthDiff(startDate, endDate) {
	let dateSplit = startDate.split(" ");
	let start = new Date(dateSplit[1], StringToDate(dateSplit[0]));
	let end = new Date();
	if (endDate != "") {
		dateSplit = endDate.split(" ");
		end = new Date(dateSplit[1], StringToDate(dateSplit[0]));
	}

	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth() + 1;

	let time = {
		years: years,
		months: months
	};

	let timeString = "";
	if (time.years == 1) {
		timeString += time.years + " year";
	}
	else if (time.years > 1) {
		timeString += time.years + " years";
	}

	if (time.years > 0 && time.months > 0) {
		timeString += ", ";
	} 

	if (time.months == 1) {
		timeString += time.months + " month";
	}
	else if (time.months > 1) {
		timeString += time.months + " months";
	}

	return timeString;
}


function ProjectsBox(props) {
	const project = props.project;

	if (project.media === "") {
		project.media = "placeholder.png";
	}

	return (
		<div sx={{m: 'auto'}}>
			<Link to={`/projects/${project.id}`} className='no-underline'>
				<CustomBox link={true} p={2} sx={{m: 'auto', textAlign: 'left'}}>
					<Grid container>
						<Grid size={{xs: 12, sm: 2}} justifyContent='center'>
							<img src={require(`./public/thumbnails/${project.media}`)} id='thumbnail' alt='Project' className='center'/>
						</Grid>	
						<ListGrid size="grow" project={true} pl={2} ml={2}>
							<div>
								{project.title}
							</div>
							<div className="subtitle">
								{project.summary}
							</div>
							{/* <List className='text-desc'>
								{project.description.map((desc, index) => (
									<ListItem key={index}>{desc}</ListItem>
								))}
								<ListItem>
									<Grid container>
										{project.skills.map(skill => (
											<Grid>
												<SkillChip label={skill}/>
											</Grid>
										))}
									</Grid>
								</ListItem>
							</List> */}
						</ListGrid>	
					</Grid>
				</CustomBox>
			</Link>
		</div>
	);
}


function TimelineDegree(props) {
	const degree = props.degree;

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid size={2}>
					<div className='rel'>
						<ListDate>
							{degree.graduation}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid size="grow" pl={2} ml={2} pb={4}>
					<div>
						{degree.degree} | <i>{degree.school}</i>
					</div>
					<List dense className='text-desc'>
						{degree.concentration ? (
							<ListItem>
								{degree.concentration}
							</ListItem>
						) : (<div/>)}
						{degree.gpa ? (
							<ListItem>
								GPA: {degree.gpa}
							</ListItem>
						) : (
							<div/>
						)}
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function TimelineJob(props) {
	const job = props.job;
	const timeString = CalculateMonthDiff(job.startDate, job.endDate);

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid size={2}>
					<div className='rel'>
						<ListDate>
							{job.startDate} - {job.endDate == "" ? "Present" : job.endDate}
						</ListDate>
						<ListDate className='subtitle-dark'>
							{timeString}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid size="grow" pl={2} ml={2} pb={4}>
					<div>
						{job.title} | <i>{job.company}</i>
					</div>
					<List className='text-desc'>
						{job.description.map(desc => (
							<ListItem>
								{desc}
							</ListItem>
						))}
						<ListItem>
							<Grid container>
								{job.skills.map(skill => (
									<Grid>
										<SkillChip label={skill}/>
									</Grid>
								))}
							</Grid>
						</ListItem>
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function SkillSection(props) {
	const field = props.field;

	return (
		<React.Fragment>
			<Typography>{field.title}</Typography>
			<Grid container spacing={1.5} justifyContent='center' sx={{pb: 4}}>
				{field.section.map(skill => (
					<Logo skill={skill}/>
				))}
			</Grid>
		</React.Fragment>
	)
}

function Logo(props) {
	const skill = props.skill;

	if (skill.media === "") {
		skill.media = "placeholder.png";
	}

	return (
		<Grid direction="row">
			{skill.background ? (
				<LogoCircle>
					<img id='logo' src={skill.media} alt={skill.name}/>
				</LogoCircle>) : (
				<img id='logo' src={skill.media} alt={skill.name}/>
			)}
			<Typography>{skill.name}</Typography>
		</Grid>
	)
}

function Cert(props) {
	const cert = props.cert;

	return (
		<Grid sx={{textAlign: 'center'}}>
			<Link to={cert.link} target="_blank" rel="noopener" style={{textDecoration:"none", color: 'white',}}>
				<img id='cert' src={require(`./public/logos/aws.png`)} alt={cert.name}/>
				<Typography>{cert.name}</Typography>
			</Link>
		</Grid>
	);
}



export { ProjectsBox, TimelineDegree, TimelineJob, SkillSection, Logo, Cert };
