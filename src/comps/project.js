import React from 'react';
import { Grid, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/material';

import projectsData from '../data/projects.json';

const Projects = () => {

    const handleClick = (link) => {
        window.open(link);
    }

    return (
        <Box sx={{ backgroundColor: '#232323', color: '#fff', py: 2 }}>
            <Typography variant="h2" align="center">
                Projects
            </Typography>
            <Typography variant="body1" align="center">
                Here are some of my projects
            </Typography>
            <br />
            <br />
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                {projectsData.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Box
                            onClick={() => handleClick(project.link)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 2,
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                                }
                            }}
                        >
                            <Typography variant="h5" align="center">
                                {project.name}
                            </Typography>
                            <FolderIcon sx={{ fontSize: 100 }} />
                            <Typography variant="body1" align="center">
                                {project.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};


export default Projects;
