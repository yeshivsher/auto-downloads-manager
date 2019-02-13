import React from 'react'
import { theme } from '../appConfig'
import { MuiThemeProvider } from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { createGenerateClassName, jssPreset, withStyles } from '@material-ui/core/styles'
import MainRouter from './Router'

const styleNode = document.createComment('jss-insertion-point')
document.head.insertBefore(styleNode, document.head.firstChild)

const generateClassName = createGenerateClassName()
const jss = create({ ...jssPreset(), insertionPoint: 'jss-insertion-point',plugins: [...jssPreset().plugins, rtl()] })

const App = props => {
  const { classes } = props

  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.App}>
          <MainRouter />
        </div>
      </MuiThemeProvider>
    </JssProvider>
  )
}

const Styles = {
  App: {
  }
}

export default withStyles(Styles)(App)