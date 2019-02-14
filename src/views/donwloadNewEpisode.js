import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'
import { Paper, Grid, withStyles, Typography, TextField, Select, OutlinedInput, InputLabel, FormControl, MenuItem, Button } from '@material-ui/core'
import runPY from '../server/start'

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
    return (
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper>
            <div>
              <Typography variant='h4'>{'הוספת משתמש'}</Typography>
              <Grid container alignItems='center'>
                <Grid item xs={3}>
                  <TextField
                    onChange={this.handleChange('seriesName')}
                    id='soldier-id-txtbox'
                    label='שם סדרה'
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    value={this.state.season}
                    onChange={this.handleChange('season')}
                    type="number"
                    id='full-name-txtbox'
                    label='עונה'
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    value={this.state.episode}
                    onChange={this.handleChange('episode')}
                    type="number"
                    id='full-name-txtbox'
                    label='פרק'
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <Button onClick={this.startTrack} variant='outlined' color='primary'>
                    {'התחל מעקב'}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>);

  }
};

export default DownloadNewEpisode;