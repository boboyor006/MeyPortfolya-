
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import CallIcon from '@mui/icons-material/Call';
import BarChartIcon from '@mui/icons-material/BarChart';


const NavData = [
    {
        title: "Home",
        icons: <HomeIcon/>,
        link: "/"
    },
    {
        title: "About",
        icons: <GroupsIcon/>,
        link: "/about"
    },
    {
        title: "Skills",
        icons: <BarChartIcon/>,
        link: "/skills"
    },
    {
        title: "Contact",
        icons: <CallIcon/>,
        link: "/contact"
    },
]


export default NavData;