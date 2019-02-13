import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SideBar from './SideBar'
import AppBar from './AppBar'
import { Grid, withStyles } from '@material-ui/core'

import NewUsers from '../NewUsers/new-users'
import tvShows from '../views/tvShows'
import movies from '../views/movies'
import music from '../views/music'
import ebooks from '../views/ebooks'


const routes = [
  // {
  //   path: 'UsersManagement',
  //   component: UsersManagement,
  //   title: 'משתמשים',
  //   icon: 'verified_user',
  // },
  {
    path: 'NewUsers',
    component: NewUsers,
    title: 'משתמש חדש',
    icon: 'supervised_user_circle',
  },
  {
    path: 'tvShow',
    component: tvShows,
    title: 'סדרות',
    icon: 'live_tv',
  },
  {
    path: 'movies',
    component: movies,
    title: 'סרטים',
    icon: 'local_movies',
  },
  {
    path: 'music',
    component: music,
    title: 'מוזיקה',
    icon: 'music_note',
  },
  {
    path: 'ebooks',
    component: ebooks,
    title: 'ספרים',
    icon: 'chrome_reader_mode',
  }
]

const MainRouter = (props) => {
  const { classes } = props
  return (
  <div className={classes.root}>
    <Router>
      <Grid container>
        <Grid item xs={2} className={classes.sideBar}>
          <SideBar routes={routes} />
        </Grid>
        {/* <Grid item xs={10} className={classes.AppBar}>
          <AppBar routes={routes} />
        </Grid> */}
        <Grid item xs={10} className={classes.content}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/${route.path}`}
                exact
                component={route.component} />
            ))}
            <Redirect to={`/${routes[0].path}`} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  </div>
  )
}

MainRouter.propTypes = {
  classes: PropTypes.object
}

const styles = theme => ({
  root:{
    backgroundColor: "#8e8e8e",
  },
  sideBar: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
  },
  content: {
    height: '100vh',
    padding: '5vh 5vw 0 5vw'
  }
})

export default withStyles(styles)(MainRouter)
