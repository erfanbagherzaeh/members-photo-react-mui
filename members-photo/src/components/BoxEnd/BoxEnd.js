import './BoxEnd.css'
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Typography, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CategoryIcon from '@mui/icons-material/Category';

const CustomBox = () => {
    return (
        <>
            <div className='continior'>

                <div className='continior-child'>
                    <div className='left'>
                        <div className='photo-name'>
                            <div className='name'>
                                <h3> مهسامحرابی </h3>
                            </div>
                            <div className='photo'>
                            </div>

                        </div>
                    </div>

                    <div className='right'>
                        <div className='div-childs'>

                            <h3> حیران شو از این همه زیبایی </h3>
                            <div className='name-icon'>
                                استان اردبیل    <ChevronLeftIcon />ایران <RoomIcon />
                            </div>
                        </div>


                    </div>

                </div>


                <div className="row-icons">
                    <div className="icon1">
                        <IconButton>
                            <CalendarTodayIcon style={{ color: '#666', fontSize: '30px' }} />
                        </IconButton>
                        <Typography variant="body2" align="center" sx={{ color: '#666', fontFamily: 'font1', fontSize: '13px' }}>
                            انتشار: 29 بهمن 1396
                        </Typography>
                    </div>

                    <div className="icon1">
                        <IconButton>
                            <CameraAltIcon style={{ color: '#666', fontSize: '30px' }} />
                        </IconButton>
                        <Typography variant="body2" align="center" sx={{ color: '#666', fontFamily: 'font1', fontSize: '13px' }}>
                            iphone 6 plus
                        </Typography>
                    </div>

                    <div className="icon1">
                        <IconButton>
                            <CategoryIcon style={{ color: '#666', fontSize: '30px' }} />
                        </IconButton>
                        <Typography variant="body2" align="center" sx={{ color: '#666', fontFamily: 'font1', fontSize: '13px' }}>
                            طبیعت
                        </Typography>
                    </div>
                </div>



                <div className='endbox'>
                    <div className='box-photo-name'>
                    </div>
                    <div className='titr-p'>
                        <h4> مهسا محرابی </h4>
                        <p> نمایی از گردنه حیران از فراز جنگل فندقلو در شهر نمین خرداد 96 </p>
                        <input type="text" class="input-text" dir="rtl" placeholder="دیدگاه خود را بنویسید"/>


                    </div>



                </div>



            </div>
        </>
    );
};

export default CustomBox;
