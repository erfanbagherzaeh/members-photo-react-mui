import React, { useState } from 'react';
import { Box, CircularProgress, IconButton, Dialog } from '@mui/material';
import OpenWithIcon from '@material-ui/icons/OpenWith';
const FullWidthBoxWithLoader = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '600px',
          backgroundColor: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // برای جایگذاری آیکن Open With
        }}
      >
        <CircularProgress size={50} /> {/* آیکن چرخشی لودینگ */}

        {/* آیکن Open With در پایین سمت چپ */}
        <IconButton
          onClick={handleClickOpen}
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            color:'#fff',
            // backgroundColor: '#fff',
            '&:hover': { backgroundColor: '#555' },
          }}
        >
          <OpenWithIcon /> {/* آیکن Open With */}
        </IconButton>
      </Box>

      {/* مودال برای نمایش تصویر */}
      <Dialog open={open} onClose={handleClose}>
        <img
          src="https://your-image-url.com/sample.jpg" // آدرس تصویر
          alt="Sample"
          style={{ width: '100%', height: 'auto' }}
        />
      </Dialog>
    </>
  );
};

export default FullWidthBoxWithLoader;
