import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup'

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'0 auto',
    marginTop:40,
    textAlign:'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
    

  },
}));
export const Cards = (props) => {

    const classes = useStyles();
    if (!props.apiData['confirmed']){
      return ''
      // return 'Loading...'
      //  return props.apiData['confirmed']={}
      // return 'props.apiData'
        // props.apiData['confirmed']
    }
    // console.log(props.apiData['confirmed'])
    return (
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          
          <Paper className={classes.paper}>
            <h2>Total Confirmed Case</h2>
            <CountUp
            start={0}
            end={props.apiData['confirmed'].value}
            delay = {2.5}
            separator=","
          /></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          
          <Paper className={classes.paper}>
          <h2>Total Recovered</h2>
          <CountUp
            start={0}
            end={props.apiData['recovered'].value}
            delay = {2.5}
            separator=","
          />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>Total Deaths</h2>
            <CountUp
            start={0}
            end={props.apiData['deaths'].value}
            delay = {2.5}
            separator=","
          />
          </Paper>
        </Grid>
        
      </Grid>
    </div>
    )
}


