import React from 'react';
import { Toolbar, IconButton, Box, Typography } from '@mui/material';
import './Header.css';
import SearchBox from './searchBox/SearchBox';

import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import LocalSeeTwoToneIcon from '@material-ui/icons/LocalSeeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

const CustomAppBar = () => {
  return (
    <Toolbar className="org" position="static" dir="ltr">
      <Box sx={{ flexGrow: 1 }}>
        <img
          src="https://cdn.karnaval.ir/img/logo2.svg"
          alt="لوگو"
          style={{ height: 55, paddingLeft: '280px' }}
        />
      </Box>

      <SearchBox />

      <IconButton color="inherit" sx={{ flexDirection: 'column', alignItems: 'center', '&:hover': { backgroundColor: 'transparent' } }}>
        <ErrorTwoToneIcon style={{ fontSize: '30px' }} />
        <Typography variant="caption" style={{ fontFamily: 'font1' }}>کنترل سفر</Typography>
      </IconButton>

      <IconButton color="inherit" sx={{ flexDirection: 'column', alignItems: 'center', '&:hover': { backgroundColor: 'transparent' } }}>
        <SearchTwoToneIcon style={{ fontSize: '30px' }} />
        <Typography variant="caption" style={{ fontFamily: 'font1' }}>جستجو</Typography>
      </IconButton>

      <IconButton color="inherit" sx={{ flexDirection: 'column', alignItems: 'center', '&:hover': { backgroundColor: 'transparent' } }}>
        <LocalSeeTwoToneIcon style={{ fontSize: '30px' }} />
        <Typography variant="caption" style={{ fontFamily: 'font1' }}>عکاس خانه</Typography>
      </IconButton>

      <IconButton color="inherit" sx={{ flexDirection: 'column', alignItems: 'center', '&:hover': { backgroundColor: 'transparent' } }}>
        <WorkTwoToneIcon style={{ fontSize: '30px' }} />
        <Typography variant="caption" style={{ fontFamily: 'font1' }}>سفر های من</Typography>
      </IconButton>

      <IconButton color="inherit" sx={{ flexDirection: 'column', alignItems: 'center', '&:hover': { backgroundColor: 'transparent' } }}>
        <AccountCircleTwoToneIcon style={{ fontSize: '30px' }} />
        <Typography variant="caption" style={{ fontFamily: 'font1' }}>حساب کاربری</Typography>
      </IconButton>
    </Toolbar>
  );
};

export default CustomAppBar;
