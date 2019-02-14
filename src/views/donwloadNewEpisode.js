import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'
import { Paper, Grid, withStyles, Typography, TextField, Select, OutlinedInput, InputLabel, FormControl, MenuItem, Button } from '@material-ui/core'
import runPY from '../server/start'
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {

    flexGrow: 1,
    background: '#8e8e8e'
  },
  paper: {
    height: 140,
    width: "100%",
    textAlign: 'center'
  },
  fields:{
    marginLeft: '10%',
    // background:'#616161',
  },
  pyButton:{
    // height: 90,
    // width: 120,
    // marginTop: -18,
    // textSize: 19,
    // background:'#8e8e8e',
  },
  control: {
    padding: theme.spacing.unit * 3,
  },
});

class DownloadNewEpisode extends Component {
  state = {
    seriesName: '',
    season: '',
    episode: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  startTrack = () => {
    const { seriesName, season, episode } = this.state;
    if (seriesName && season && episode && season > 0 && episode > 0) {
      let logres
      const url = 'http://localhost:8080/runpy'
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({srsName: seriesName, season: season, episode: episode})
      }).then((result) => {
        logres = result
      }, (err) => {
        console.error(err)
      })
    
      //runPY(seriesName, season, episode);
      console.log(logres)
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.paper}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper>
            <div className={classes.paper}>
              <Typography variant='h4'>{'הכנס פרק למעקב'}</Typography>
              <Grid container alignItems='center' className={classes.fields}>
                <Grid item xs={0}>
                  <TextField
                    value={this.state.seriesName}
                    onChange={this.handleChange('seriesName')}
                    id='soldier-id-txtbox'
                    label='שם סדרה'
                    margin='normal'
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={1}/>      
                <br />          
                <Grid item xs={1}>
                  <TextField
                    value={this.state.season}
                    onChange={this.handleChange('season')}
                    type="number"
                    id='full-name-txtbox'
                    label='עונה'
                    margin='normal'
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={1} />
                <br />
                <Grid item xs={1}>
                  <TextField
                    value={this.state.episode}
                    onChange={this.handleChange('episode')}
                    type="number"
                    id='full-name-txtbox'
                    label='פרק'
                    margin='normal'
                    variant='standard'
                  />
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={3}>
                  <Button onClick={this.startTrack} variant='outlined' color='primary' className={classes.pyButton}>
                    {'התחל מעקב'}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>);

  }
};

DownloadNewEpisode.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadNewEpisode)
