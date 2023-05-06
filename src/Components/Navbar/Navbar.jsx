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
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

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
    const [openMenu, setOpenMenu] = useState(false)
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
    const clickOpenHandler = () => {
      setOpenMenu(true)
    }
    const closeHandler = () => {
      setOpenMenu(false)
    }
    const closeLinkHandler = () => {
      setOpenMenu(false)
    }
    return(
        <>
        <nav className='mt-4 ml-4'>
        <ul className='flex'>
            <li className='list-none'><img src="logo.svg" alt="logo" /></li>
            {myOption.map(item => (
                <>
                <Button
        className='bg-white text-black hover:bg-white max-md:hidden'
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
            <MenuIcon onClick={clickOpenHandler} className='hidden max-md:block max-[390px]:relative left-64 top-3'></MenuIcon>
            <div className="flex ml-80 mt-2 cursor-pointer max-md:hidden">
          <Link href='/Login'><Typography className='mr-5 hover:text-blue-400'>signIn</Typography></Link>
          <Link href='Contact'><Typography className='hover:text-blue-400'>Contact Us</Typography></Link>
            </div>
        </ul>
        </nav>
        {openMenu && <>
        <Paper className='w-500 h-600'>
        <CloseIcon onClick={closeHandler} className='float-right mr-4 mt-5 text-3xl'></CloseIcon>
        <div className='flex flex-wrap justify-between relative text-xl'>
        <ul className='p-8'>
          <li className='font-medium'>Solutions</li>
          <li className='mt-4'>Buyers & Sellers</li>
          <li className='mt-4'>Agents</li>
          <li className='mt-4'>Propetch</li>
        </ul>
        <ul className='p-8'>
          <li className='font-medium'>Products</li>
          <li className='mt-4'>Platforms</li>
          <li className='mt-4'>Api</li>
        </ul>
        <ul className='p-8'>
          <li className='font-medium'>Company</li>
          <li className='mt-4'>About Us</li>
          <li className='mt-4'>Careers</li>
          <li className='mt-4'>Newsroom</li>
        </ul>
        <ul className='p-8'>
          <li className='font-medium'>Resources</li>
          <li className='mt-4'>Blog</li>
          <li className='mt-4'>White Papers</li>
          <li className='mt-4'>Closing Guide</li>
        </ul>
        </div>
        <div className='flex justify-around mt-12'>
         <Link onClick={closeLinkHandler} href='/Login'><button className='bg-white text-blue-500 p-4 rounded-xl border-2 border-blue-500'>Sign In</button></Link>
         <Link href='/Contact'> <button className='bg-white text-blue-500 p-4 rounded-xl border-2 border-blue-500'>Contact Us</button></Link>
        </div>
        </Paper>
        </>
        }
        </>
    )
}

export default Navbar;
