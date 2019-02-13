/* global require */
import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { NavLink, withRouter } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core'

class SideBar extends Component {
  isCurrentRoute = (pathname) => this.props.location.pathname === `/${pathname}`

  render() {
    const { classes, routes } = this.props
    return (
      <Fragment>
        <List>
          {routes.map((route, index) => (
            <NavLink to={`/${route.path}`}
              className={classes.navLink}
              key={index}>
              <ListItem
                selected={this.isCurrentRoute(route.path)}
                button
                classes={{ button: classes.listItem, selected: classes.listItemSelected }}>
                <ListItemIcon
                  classes={{ root: classes.listItemIcon }}>
                  <Icon >{route.icon}</Icon>
                </ListItemIcon>
                <ListItemText
                  inset
                  primary={route.title}
                  classes={{ primary: classes.listItemText }} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Fragment>)
  }
}

SideBar.propTypes = {
  classes: PropTypes.object,
  routes: PropTypes.array.isRequired,
  location: PropTypes.object
}

const styles = theme => ({
  navLink: {
    textDecoration: 'none',
  },
  listItem: {
    color: theme.palette.primary.contrastText
  },
  listItemText: {
    color: 'inherit',
  },
  listItemIcon: {
    color: 'inherit',
  },
  listItemSelected: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `10px 0px 0px 0px ${theme.palette.secondary.main} inset`
  },
})

export default withStyles(styles)(withRouter(SideBar))