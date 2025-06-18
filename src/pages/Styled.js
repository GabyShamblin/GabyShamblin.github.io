import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Chip, Grid, IconButton, TextField, Typography } from '@mui/material';
// import SkillSlider from './SkillSlider';
import './css/typing.css';

import CircleIcon from '@mui/icons-material/Circle';


/* ----- Buttons ----- */

// Text for a button menu
const MenuText = styled(Typography)(() => ({
  width: 125,
	fontSize: 20,
	color: "#a3aab4",
	textAlign: 'left',
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		'> div': {
			backgroundColor: '#ffffff',
			width: '100%',
		},
	},
	// border: '1px dashed #ffffff',
}));

// A line that expands when hovered over when paired with MenuText
const MenuLine = styled('div')(({chars = 0}) => ({
	height: '2px',
	width: `${chars}ch`,
	backgroundColor: '#a3aab4',
	transition: '0.2s',
}));

// Centered text for a button menu
const CenterMenuText = styled(Typography)(() => ({
  width: 150,
	margin: 'auto',
	color: "#a3aab4",
	textAlign: 'center',
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		'> div': {
			backgroundColor: '#ffffff',
			width: '100%',
		},
	},
	// border: '1px dashed #ffffff',
}));

// A centered line that expands when hovered over when paired with CenterMenuText
const CenterMenuLine = styled('div')(({chars = 0}) => ({
	height: '2px',
	margin: 'auto',
	width: `${chars}ch`,
	backgroundColor: '#a3aab4',
	transition: '0.2s',
}));

// A blue button
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

// A circular icon button
const CustomIconButton = styled(IconButton)(() => ({
	color: "#d1d1d1", 
	borderRadius: 50,
	'&:hover': {
		color: "white", 
	}
}));


/* ----- Organization ----- */

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

const ListGrid = styled(Grid)(({blue = false}) => ({
	textAlign: 'left', 
	borderLeft: blue ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(2, 232, 232, 0.5)',
}));


/* ----- Text ----- */

const Text = styled(Typography)(() => ({
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

const CustomTextField = styled(TextField)(() => ({
	input: {
		color: 'white'
	},
	"& .MuiInput-root": {
		color: "#000",
		fontFamily: "Arial",
		fontWeight: "bold",
		// Bottom border
		"&:before": {
			borderColor: "#d1d1d1",
			borderWidth: "2px",
		},
		// Border on focus
		"&:after": {
			borderColor: "white",
			borderWidth: "3px",
		},
		":hover:not(.Mui-focused)": {
			"&:before": {
				borderColor: "#fff",
				borderWidth: "2px",
			},
		},
	},
	// Label
	"& .MuiInputLabel-standard": {
		color: "#d1d1d1",
		fontWeight: "bold",
		"&.Mui-focused": {
			color: "white",
		},
		":hover:not(.Mui-focused)": {
			"&:before": {
				color: "#fff",
			},
		},
	},
}));


/* ----- Other ----- */

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



export { MenuText, MenuLine, CenterMenuText, CenterMenuLine, CustomIconButton, CustomBox, CustomButton, CustomTextField, ListGrid, ListDate, SkillChip, TimelineCircle, LogoCircle };
