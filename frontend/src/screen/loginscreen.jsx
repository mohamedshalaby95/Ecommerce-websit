import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux'
import{userLogin} from '../action/userlogin'
import {  Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import Loading from '../components/loading'
import '../index.css'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({history,location}) {
  const classes = useStyles();

  const user=useSelector((state)=>  state.userLogin)
  
  const {userInf,loading,error}=user
 
  const dispatch=useDispatch()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const handelsubmit=(e)=>{
    e.preventDefault()
   dispatch(userLogin(email,password))
  }
  const redirect=location.search?location.search.split('=')[1]:'/'
  useEffect(()=>{
    if(userInf){
      history.push(redirect)
    }

  },[userInf,dispatch,redirect])


  return (
    <>
    {loading&&<Loading />}
    <Grid container  component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
             <LockOutlinedIcon /> 
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handelsubmit} className={classes.form} noValidate>
              <label> Email</label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{ setEmail(e.target.value)}}
            />
            {error&&<p style={{color:'red'}}>{error}</p>}
            <label className='m-1'>Password</label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            {error&&<span  style={{color:'red'}}>{error}</span>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              <Nav>
                <Nav.Link as={Link} to='/register' variant="body2">
                <p className="goRegister"> Forget Password</p> 
                </Nav.Link>
                </Nav>
              </Grid>
              <Grid item>
                <Nav>
                <Nav.Link as={Link} to='/register' variant="body2">
                  
                <p className="goRegister"> Don't have an account? Sign Up</p> 
                </Nav.Link>
                </Nav>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </>

  );
}