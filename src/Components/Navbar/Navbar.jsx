import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as React from 'react';
import { Typography } from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
  ))
(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [selectedOption, setSelectedOption] = React.useState(null);

    const [myOption, setMyOption] = React.useState([
        {id:1, name:"Solutions", option1:"Buyers & Sellers", option2:"Agents", option3:"Propetch", option4:"Lenders"},
        {id:2, name:"Products", option1:"Platforms", option2:"Api", option3:"Jot"},
        {id:3, name:"Company", option1:"About Us", option2:"Careers", option3:"Newsroom", option4:"ContactUs"},
        {id:4, name:"Resources", option1:"Blog", option2:"White Papers", option3:"Closing Guide", option4:"Glossary"},
    ])
    const handleClick = (event,item) => {
        setAnchorEl( event.currentTarget);
      
      setSelectedOption(item);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSelectedOption(null);
    
    };
    return(
        <>
        <nav className=' mt-4 ml-4'>
        <ul className='flex'>
            <li className='list-none'><img src="logo.svg" alt="logo" /></li>
            {myOption.map(item => (
                <>
                <Button
        className='bg-white text-black hover:bg-white '
        id={`demo-customized-button-${item.id}`}
        aria-controls={`demo-customized-menu-${item.id}`}
        aria-haspopup="true"
        aria-expanded={!!anchorEl ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={(e) => handleClick(e,item)}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {item.name}
      </Button>
      <StyledMenu
        id={`demo-customized-button-${item.id}`}
        MenuListProps={{
          'aria-labelledby': `demo-customized-button-${item.id}`,
        }}
        anchorEl={anchorEl}
        open={selectedOption === item}
        onClose={handleClose}


      >
        {console.log(selectedOption,item)}
        {console.log("-------------------------------")}
        <MenuItem onClick={handleClose} disableRipple>
          {item.option1}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          {item.option2}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          {item.option3}
        </MenuItem>
      </StyledMenu>
                </>
            ))}
            <div className="flex ml-80 mt-2 cursor-pointer">
            <Typography className='mr-5 hover:text-blue-400'>signIn</Typography>
            <Typography className='hover:text-blue-400'>Contact Us</Typography>
            </div>
        </ul>
        </nav>
        </>
    )
}

export default Navbar;
