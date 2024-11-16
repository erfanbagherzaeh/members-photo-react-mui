import React, { useState } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const LikeShareBox = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(37);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(likesCount + (liked ? -1 : 1)); // افزایش یا کاهش عدد لایک
  };

  return (
    <Box
      sx={{
        width: '80%',               // عرض باکس ۸۰٪
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',    // پس‌زمینه سفید
        color: '#000',              // رنگ متن سیاه
        padding: '10px 16px',
        borderRadius: '8px',
        margin: '30px auto',             // مرکز کردن باکس در صفحه
        borderRadius: '30px',
      }}
    >
      {/* دکمه اشتراک‌گذاری */}
      <Button
        variant="text"
        startIcon={<ShareIcon />}
        sx={{ color: '#000' ,
          borderRadius:"30px",
          border:'1px solid',
          fontFamily:'font1',
        }}
      >
        اشتراک‌گذاری
      </Button>

      {/* بخش لایک و تعداد */}
      <Typography variant="body1" sx={{ marginLeft: '560px' ,fontFamily:'font1', fontSize:'13px'}}>
          <span style={{color:'blue'}}>مهدی طاهری  </span>
          
           و {likesCount - 1} نفر دیگر این عکس را دوست داشتند
        </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'red', // پس‌زمینه قرمز
          padding: '4px 8px',
          color: '#fff', // رنگ سفید برای متن و آیکن‌ها
          borderRadius:'30px',
          fontFamily:'font1',
          width:'70px',
          textAlign:'center'
        }}
      >
        
          
          <Typography variant="body1" sx={{ fontFamily:'font1', }}>
          {likesCount}
        </Typography>
        <IconButton onClick={handleLike} sx={{ color: '#fff' }}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default LikeShareBox;
   