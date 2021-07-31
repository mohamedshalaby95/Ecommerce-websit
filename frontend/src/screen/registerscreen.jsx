import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../index.css'
import {userRegister} from '../action/userlogin'

import { useDispatch,useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp() {

    const user=useSelector((state)=> console.log(state.userRigester))
    console.log(user)
    // const { error,loading,user}=user
    const dispatch=useDispatch()
const [name,setName]=useState()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const [confirmPassword,setConfirmPassword]=useState()
const [message,setMessage]=useState()
const handelRegisterSubmit=(e)=>{
    e.preventDefault()
    if(password !==confirmPassword){
        setMessage("The Password not match confirm")
    }
    else{
        dispatch(userRegister(name,email,password))
    

}
}

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handelRegisterSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
             <Grid item xs={12}>
                 <label>Name</label>
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              placeholder="Your Name"
              name="name"
             
              autoFocus
              onChange={(e)=> setName(e.target.value)}
             
            />
             </Grid>
            
            <Grid item xs={12}>
            <label className="mb-2">Email</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <label className="mb-2">Password</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=> setPassword(e.target.value)}
              />
            </Grid>
            {message&&<p className="message_danger">{message}</p>}
            <Grid item xs={12}>
            <label className="mb-2">Confirm Password</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder=" confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=> setConfirmPassword(e.target.value)}
              />
            </Grid>
            {message&&<p className="message_danger">{message}</p>}
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Nav>
                <Nav.Link as={Link} to='/login' variant="body2">
                  
                <p className="goRegister">  Already have an account? Sign in</p> 
                </Nav.Link>
                </Nav>
               
             
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}