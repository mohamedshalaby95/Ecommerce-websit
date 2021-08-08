import React,{useState} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {ShippingSaveData} from '../action/cart'

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Checkout from '../components/checkout'

import '../index.css'


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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Shippingscreen({history}) {

    const shipping=useSelector(state => state.cart)
    const {shippingData}=shipping
    
    const dispatch=useDispatch()
const [address,setAdress]=useState(shippingData.address)
const [country,setCountry]=useState(shippingData.country)
const [city,setCity]=useState(shippingData.city)
const [postCode,setPostCode]=useState(shippingData.postCode)

const handelRegisterSubmit=(e)=>{
    e.preventDefault()
    dispatch(ShippingSaveData({address,country,city,postCode}))
    history.push('/payment')
   
}

  const classes = useStyles();

  return (
   <div className="background">
   <div className='m-5 p-5'><Checkout step1 step2 /></div>
   
    <Container component="main" maxWidth="xs">
    
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          Shipping
        </Typography>
        <form onSubmit={handelRegisterSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
             <Grid item xs={12}>
                 <label>Adress</label>
             <TextField
              variant="outlined"
              margin="normal"
              value={address}
              required
              fullWidth
              id="adress"
              placeholder="Your Adress"
             name="adress"
             
              autoFocus
              onChange={(e)=> setAdress(e.target.value)}
             
            />
             </Grid>
            
            <Grid item xs={12}>
            <label className="mb-2">Country</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={country}
                id="country"
                placeholder="Country "
                name="country"
               
                onChange={(e)=> setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <label className="mb-2">City</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={city}
                name="city"
                placeholder="City"
                type="text"
                id="city"
                autoComplete="current-City"
                onChange={(e)=> setCity(e.target.value)}
              />
            </Grid>
        
            <Grid item xs={12}>
            <label className="mb-2">post Code</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={postCode}
                name="postCode"
                placeholder=" post Code"
                type="number"
                id="postcode"
               
                onChange={(e)=> setPostCode(e.target.value)}
              />
            </Grid>
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Continue
          </Button>
        
        </form>
      </div>
     
    </Container>
    </div>);
}
