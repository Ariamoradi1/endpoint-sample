import Box from '@mui/material/Box';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const Selection = () => {
    const [city, setCity] = useState('');

    const handleChange = (event) => {
      setCity(event.target.value);
    };
    return(
        <>
        <div className='flex justify-between p-32'>
            <Typography className='max-[380px]:text-xl mr-12' variant='h2'>Contact Us</Typography>
         <Box sx={{ minWidth: 120 }} className='w-80'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Arizona</MenuItem>
          <MenuItem value={20}>New York</MenuItem>
          <MenuItem value={30}>California</MenuItem>
          <MenuItem value={40}>Texas</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
        </>
    )
}

export default Selection