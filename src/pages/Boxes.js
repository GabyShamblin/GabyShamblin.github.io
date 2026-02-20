import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, List, ListItem } from '@mui/material';
import './css/typing.css';

import { CustomBox, ListGrid, ListDate, SkillChip, TimelineCircle, Circle } from './Styled.js';



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

// Create the "from to" string
function CreateMonthString(startDate, endDate) {
	if (startDate == endDate) {
		return startDate + "";
	}
	else if (endDate == "") {
		return startDate + " - Present";
	}
	
	return startDate + " - " + endDate;
}

// Take markdown format and turn it into html tags
function FlairText(input) {
	const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

	let output = input.split(regex);

	return output.map((part, i) => {
		// Make bold text
		if (part.startsWith("**") && part.endsWith("**")) {
			return <strong key={i}>{part.slice(2, -2)}</strong>;
		}
		// Make italic text
		else if (part.startsWith("*") && part.endsWith("*")) {
			return <em key={i}>{part.slice(1, -1)}</em>;
		}
		else { return part; }
	});
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
					<Grid container spacing={1}>
						<Grid size={{xs: 12, md: 4}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
							<img src={require(`./public/thumbnails/${project.media}`)} id='thumbnail' alt='Project' className='center'/>
						</Grid>	
						<ListGrid size="grow" blue={true}>
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

function PublicationsBox(props) {
	const pub = props.pub;

	return (
		<div sx={{m: 'auto'}}>
			<CustomBox link={false} p={2} sx={{m: 'auto', textAlign: 'left'}}>
				<Grid container>
					<Grid size={12} justifyContent='center'>
						<div>
							{FlairText(pub.authors)} ({pub.year}). "{pub.title}". {FlairText(pub.publisher)}.
						</div>
					</Grid>	
					{pub.links ? 
						<Grid container spacing={2}>
							{pub.links.map(link => (
								<Grid>
									{link.file ? 
									<Link to={link.file} download target='_blank' rel="noopener noreferrer">
										<CustomButton>
											{link.label}
										</CustomButton>
									</Link>
									:
									<Link to={link.click} target="_blank" rel="noopener">
										<CustomButton>
											{link.label}
										</CustomButton>
									</Link>
									}
								</Grid>
							))}
						</Grid>
					: <div/>}
				</Grid>
			</CustomBox>
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
						{degree.degree}
					</div>
					<div>
						<i>{degree.school}</i>
					</div>
					<div>
						<i>{degree.location}</i>
					</div>
					<List dense className='text-desc'>
						{degree.extras.map(extra => (
							<ListItem>
								{extra}
							</ListItem>
						))}
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function TimelineJob(props) {
	const job = props.job;
	const monthsString = CreateMonthString(job.startDate, job.endDate);
	const timeString = CalculateMonthDiff(job.startDate, job.endDate);

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid size={2}>
					<div className='rel'>
						<ListDate>
							{monthsString}
						</ListDate>
						<ListDate className='subtitle-dark'>
							{timeString}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid size="grow" pl={2} ml={2} pb={4}>
					<div>
						{job.title}
					</div>
					<div>
						<i>{job.company}</i>
					</div>
					<div>
						<i>{job.location}</i>
					</div>
					<List className='text-desc'>
						{job.description.map(desc => (
							<ListItem>
								{desc}
							</ListItem>
						))}
						{job.skills ?
						<ListItem>
							<Grid container>
								{job.skills.map(skill => (
									<Grid>
										<SkillChip label={skill}/>
									</Grid>
								))}
							</Grid>
						</ListItem>
						: <div/>}
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
				<Circle>
					<img id='logo' src={skill.media} alt={skill.name}/>
				</Circle>) : (
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



export { ProjectsBox, PublicationsBox, TimelineDegree, TimelineJob, SkillSection, Logo, Cert };
