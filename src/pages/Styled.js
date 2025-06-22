import { styled } from '@mui/material/styles';
import { Box, Button, Chip, Grid, IconButton, TextField, Typography } from '@mui/material';
import './css/typing.css';

import CircleIcon from '@mui/icons-material/Circle';



/* ----- Buttons ----- */

// A blue button
const CustomButton = styled(Button)(() => ({
	minWidth: 150,
	backgroundColor: "rgba(2, 232, 232, 0.2)", 
	color: '#02e8e8', 
	border: '2px solid #02e8e8',
	borderRadius: 50,
	transition: '0.2s',
	'&:hover': {
		backgroundColor: "rgba(2, 232, 232, 0)",
	}
}));

// A circular icon button
const CustomIconButton = styled(IconButton)(() => ({
	color: "#d1d1d1", 
	borderRadius: 50,
	transition: '0.2s',
	'&:hover': {
		color: "white", 
	}
}));

// Centered text for a button menu
const CenterMenuText = styled(Typography)(() => ({
	width: '100%',
	minWidth: '10vw',
	fontSize: 'calc(15px + 0.5vw)',
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


/* ----- Organization ----- */

// Box for keeping things uniform
const CustomBox = styled(Box)(({link = false}) => ({
	maxWidth: '95vw',
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

// Grid used for keeping lists organized
const ListGrid = styled(Grid)(({blue = false}) => ({
	textAlign: 'left', 
	borderLeft: blue ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(2, 232, 232, 0.5)',
}));


/* ----- Text ----- */

// Keep text uniform
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

// Colored text field for text input
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

// Organizes dates on the left of timelines
const ListDate = styled('div')(() => ({
	color: '#d1d1d1',
	fontSize: '16px',
	textAlign: 'right'
}));

// A non-clickable chip for displaying small bits of information
const SkillChip = styled(Chip)(() => ({
	color: '#1efc0f',
	backgroundColor: 'rgba(30, 252, 15, 0.2)',
	border: '2px solid #1efc0f',
}));

// A circle icon for timelines
const TimelineCircle = styled(CircleIcon)(() => ({
	position: 'absolute',
	color: '#027f8c',
	top: 0,
	right: '-31px',
}));

// A white circle to put behind transparent images if they are too dark
const Circle = styled('div')(() => ({
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white',
	borderRadius: 50
}));



export { MenuText, MenuLine, CenterMenuText, CenterMenuLine, CustomIconButton, CustomBox, CustomButton, CustomTextField, ListGrid, ListDate, SkillChip, TimelineCircle, Circle };
