import * as React from 'react';
import { useEffect } from 'react';
import './css/App.css';
import './css/typing.css';

import { projects } from './data/projectData.js';



function Projects() {
	useEffect(() => {
		document.title = 'Projects | Gabriela Shamblin';
	});

  return (
		<React.Fragment>
			<div className="App">

				<div className='wrapper'>
					<div className='page-header typing-projects'>
						/* Projects */
					</div>
				</div>

				{projects.map(p => (
					<ProjectBox project={p}/>
				))}
				
				<div className='spacer'></div>
			</div>
		</React.Fragment>
  );
}

export default Projects;
