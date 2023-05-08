import { Paper, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useRouter } from "next/router";
import { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import swal from 'sweetalert';


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const clickHandler = () => {
    if (email.length < 4 || password.length < 8) {
        swal({
          text : 'please incorrect type',
          icon : 'warning',
          dangerMode : true
        })
    } else {
        router.push('/')
    }
  }

    return(
        <>
        <div className="flex justify-center text-center mt-24">
            <Paper className="w-600 h-600 rounded-3xl border-t-4 border-blue-500 max-[380px]:w-450 max-[380px]:ml-40">
                <Typography variant="h4" className="mt-10">Sign In To Your Account</Typography>
                <Typography className="mt-5">Dont have account? Sign Up</Typography>
                <div className="flex flex-col mt-20">
                <TextField
                className="w-550 ml-6 max-[380px]:w-400"
                 id="outlined-multiline-flexible"
                 label="Email"
                 type='email'
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 maxRows={4}
                />
         <FormControl className="mt-8 ml-6" sx={{ m: 1, width: '25ch' }} variant="outlined">
         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            className="w-550 max-[380px]:w-400"
            id="outlined-adornment-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>
                </div>
                <Typography className="float-left ml-6 mt-3">Forgot your password?</Typography>
                <FormControlLabel className="mt-5" control={<Checkbox defaultChecked />} label="Keep me signed in on this device (not suggested for public or shared)" />
                <Button onClick={clickHandler} className="bg-blue-500 text-white mt-20 w-500 p-2" variant="contained">Sign In</Button>
            </Paper>
        </div>
        </>
    )
}

export default SignIn