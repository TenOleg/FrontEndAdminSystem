import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const SidebarData = [
    {
        id: 1,
        title: 'Analytics',
        icon: <AnalyticsIcon/>,
        link: '/analytics'
    },
    {
        id: 2,
        title: 'List of Users',
        icon: <PeopleIcon/>,
        link: '/users'
    },
    {
        id: 3,
        title: 'List of Posts',
        icon: <AutoAwesomeMotionIcon/>,
        link: '/posts'
    }
]