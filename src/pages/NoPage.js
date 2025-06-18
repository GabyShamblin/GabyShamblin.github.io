import * as React from 'react';
import { Box, Typography} from '@mui/material';
import { flexbox } from '@mui/system';

import SearchIcon from '@mui/icons-material/Search';



const NoPage = () => {
	console.log("Theres nothing");
  return (
		<div className="App">
			<Box sx={{
				display: flexbox,
				justifyContent: 'center',
				px: 2, py: 1, color:'#ffffff'}}>
				<Typography variant='h2' sx={{fontSize: 30, p: 10, pb: 2}}>
					Nothing to see here
				</Typography>
				<SearchIcon sx={{fontSize: 70}}/>
			</Box>
		</div>
	);
};

export default NoPage;
