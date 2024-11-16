import React, { useState } from 'react';
import { TextField, Popper, List, ListItem, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
 

// استایل دادن به باکس جستجو
const SearchBox = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent', // پس زمینه شفاف
    borderRadius: 50,
    width: '400px', // عرض باکس جستجو 400px
    height: '50px',
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    '& fieldset': {
      borderColor: '#888', // حاشیه طوسی پررنگ
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333', // رنگ حاشیه در حالت فوکوس
    },
  },
}));

const cities = [
  "تهران", "مشهد", "شیراز", "اصفهان", "تبریز",
  "رشت", "کرمانشاه", "اهواز", "قم", "کرمان",
  "یزد", "زنجان", "ارومیه", "سنندج", "قزوین",
  "بوشهر", "بندرعباس", "همدان", "اراک", "گرگان"
];

const CustomSearch = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // باز و بسته کردن پنجره
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setAnchorEl(null); // بسته شدن پنجره پس از انتخاب شهر
  };

  const open = Boolean(anchorEl);
  const id = open ? 'city-popper' : undefined;

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 , marginLeft:'70px' }}>
        <SearchBox
          placeholder="کجا می‌خواهید بروید؟"
          variant="outlined"
          onClick={handleClick}
          value={selectedCity}
          inputProps={{ 'aria-label': 'search' }}
           
        />
        <IconButton onClick={handleClick} sx={{ ml: -6 }}>
        </IconButton>
      </Box>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" style={{ zIndex: 1300, }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
          height: 300,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          mt: 1,
          p: 1,
          overflowY: 'auto',
        }}>
          <List sx={{ width: '100%', p: 0 }}>
            {cities.map((city, index) => (
              <ListItem
                key={index}
                button
                onClick={() => handleSelectCity(city)}
                sx={{
                  borderBottom: '1px solid #eee',
                  '&:last-child': { borderBottom: 'none' },
                  py: 1.5,
                  px: 2,
                  '&:hover': { backgroundColor: '#f0f0f0' },
                }}
              >
      
      <Typography variant="body2" sx={{ textAlign: 'center', width: '100%'  ,fontFamily:'font1' }}>
                  {city}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Popper>
    </div>
  );
};

export default CustomSearch;
