import { useState } from 'react';
// material
import { styled, alpha } from '@mui/material/styles';
// import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
import { InputBase } from '@mui/material';
// component
// import Iconify from '../../components/Iconify';
import SearchIcon from '@mui/icons-material/Search';

// ----------------------------------------------------------------------

// const APPBAR_MOBILE = 64;
// const APPBAR_DESKTOP = 92;

// const SearchbarStyle = styled('div')(({ theme }) => ({
//   top: 0,
//   left: 0,
//   zIndex: 99,
//   width: '100%',
//   display: 'flex',
//   position: 'absolute',
//   alignItems: 'center',
//   height: APPBAR_MOBILE,
//   backdropFilter: 'blur(6px)',
//   WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
//   padding: theme.spacing(0, 3),
//   boxShadow: theme.customShadows.z8,
//   backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
//   [theme.breakpoints.up('md')]: {
//     height: APPBAR_DESKTOP,
//     padding: theme.spacing(0, 5),
//   },
// }));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: 'white',
  marginLeft: 0,
  width: '100%',
  margin: '2px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
}
