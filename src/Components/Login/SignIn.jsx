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
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
    const [showPassword, setShowPassword] = useState(false);
    const [isCaptcha, setIsCaptcha] = useState(false)
    const router = useRouter()
    
    
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const captchaHandler = () => {
   setIsCaptcha(true)
  }
  const clickHandler = (data) => {
    console.log(data)
    if (isCaptcha === false) {
      swal({
        text : 'please do the Captcha',
        icon : 'warning',
        dangerMode : true
      })
    } else if (!errors.email || !errors.password || isCaptcha === true) {
        router.push('/')
    }
  }

    return(
        <>
        <div className="flex justify-center text-center mt-24">
            <Paper className={errors.email || errors.password ? 'h-[800px] w-600 rounded-3xl border-t-4 border-blue-500 max-[380px]:w-450 max-[380px]:ml-40': 'h-700 w-600 rounded-3xl border-t-4 border-blue-500 max-[380px]:w-450 max-[380px]:ml-40'}>
                <Typography variant="h4" className="mt-10">Sign In To Your Account</Typography>
                <Typography className="mt-5">Dont have account? Sign Up</Typography>
                <div className="flex flex-col mt-20">
                <TextField
                className="w-550 ml-6 max-[380px]:w-400"
                 id="outlined-multiline-flexible"
                 label="Email"
                 type='email'
                 {...register("email", {
                  required: 'email is require',
                  minLength:{
                   value : 3,
                   message: 'The number of email characters should not be less than 3'
                  },
                  maxLength:{
                    value: 30,
                    message: 'The number of email characters should not exceed 30'
                  },
                  pattern: {
                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                    message: 'email is not valid'
                  }
                
                })}
                 maxRows={4}
                />
                {errors.email && <p className="mt-3 text-red-500 text-[13px]">{errors.email.message}</p>}
         <FormControl className="mt-8 ml-6" sx={{ m: 1, width: '25ch' }} variant="outlined">
         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            className="w-550 max-[380px]:w-400"
            id="outlined-adornment-password"
            {...register("password",{
            required: 'password is require',
            minLength:{
              value:4,
              message: 'The number of password characters should not be less than 4'
            },
            maxLength: {
              value: 16,
              message:'The number of password characters should not exceed 16'
            },
            pattern:{
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
              message: 'The password must contain at least one uppercase character, one number and one character like ! Or ? or be @'
            }
            })}
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
          {errors.password && <p className="mt-3 text-red-500 text-[13px]">{errors.password.message}</p>}
                </div>
                <Typography className="float-left ml-6 mt-3">Forgot your password?</Typography>
                <FormControlLabel className="mt-5" control={<Checkbox defaultChecked />} label="Keep me signed in on this device (not suggested for public or shared)" />
                <div className="flex justify-center mt-10">
                <ReCAPTCHA
                className="text-center"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={captchaHandler}
                />
                </div>
                <Button onClick={handleSubmit(clickHandler)} className="bg-blue-500 text-white mt-20 w-500 p-2 mb-10" variant="contained">Sign In</Button>
            </Paper>
        </div>
        </>
    )
}

export default SignIn