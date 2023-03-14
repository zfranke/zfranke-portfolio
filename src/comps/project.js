import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShieldIcon from '@mui/icons-material/Shield';
import CallIcon from '@mui/icons-material/Call';
import ConstructionIcon from '@mui/icons-material/Construction';

import projectsData from '../data/projects.json';
import workProjectsData from '../data/workProjects.json';

const Projects = () => {
    const handleClick = (link) => {
        window.open(link);
    };

    const getIcon = (icon) => {
        switch (icon) {
            case 'gaming':
                return <SportsEsportsIcon sx={{ fontSize: 100, color:"#02ab64" }} />;
            case 'language':
                return <MenuBookIcon sx={{ fontSize: 100, color:"#05deff" }} />;
            case 'call':
                return <CallIcon sx={{ fontSize: 100, color:"#05deff" }} />;
            case 'security':
                return <ShieldIcon sx={{ fontSize: 100, color:"#ff0000" }} />;
            case 'tool':
                return <ConstructionIcon sx={{ fontSize: 100, color:"#D6BF8D" }} />;
            default:
                return <FolderIcon sx={{ fontSize: 100, color:"#D6BF8D" }} />;
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: '#17191A',
                color: '#F2F2D5',
                minHeight: '89vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '@media (max-width:600px)': {
                    padding: '1.5rem',
                },
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: '4rem',
                    fontFamily: ['antique-olive'],
                    fontWeight: 500,
                    color: '#55FDB6',
                    marginBottom: '1.5rem',
                    '@media (max-width:600px)': {
                        fontSize: '2.5rem',
                        marginBottom: '1.5rem',
                    },
                }}
            >
                Projects
            </Typography>
            <Typography variant="body1" align="center" sx={{fontSize: "1.5rem"}}>
                Here are some of my personal projects
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
                                justifyContent: 'center',
                                p: 2,
                                backgroundColor: '#1A1D1E',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                                },
                            }}
                        >
                            {getIcon(project.icon)}
                            <Typography variant="h5" align="center">
                                {project.name}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {project.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <br />
            <br />
            <Typography variant="body1" align="center" sx={{fontSize: "1.5rem"}}>
                Here are some of my work-related projects
            </Typography>
            <br />
            <br />
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                {workProjectsData.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Box
                            onClick={() => handleClick(project.link)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2,
                                backgroundColor: '#1A1D1E',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                                },
                            }}
                        >
                            {getIcon(project.icon)}
                            <Typography variant="h5" align="center">
                                {project.name}
                            </Typography>
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

