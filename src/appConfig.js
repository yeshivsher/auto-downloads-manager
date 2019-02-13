import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      // light: '#3700B3',
      main: '#373737',

      // dark: '#3700B3',
      // contrastText: '#3700B3',
    },
    secondary: {
      // light: '#03DAC5',
      main: '#2196f3',
      // dark: '#03DAC5',
      // contrastText: '#03DAC5',
    },
    error: {
      // light: '#B00020',
      main: '#B00020',
      // dark: '#B00020',
      // contrastText: '#B00020',
    },
  },
})