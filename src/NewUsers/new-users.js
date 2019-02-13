import React from 'react'
import ReactDOM from 'react-dom'
import { Paper, Grid, withStyles, Typography, TextField, Select, OutlinedInput, InputLabel, FormControl, MenuItem, Button } from '@material-ui/core'

const roles = [{name:'תפקיד ראשון', id: '1'},{name:'תפקיד שני', id: '2'},{name:'תפקיד שלישי', id: '3'},]

const NewUsersPage = (props) => {
  const [state, setState] = React.useState({
    role: '',
    name: 'hai',
    labelWidth: 0,
  });
  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {setState({ ...state, labelWidth: ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth })}, [])

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })}

  const { classes } = props
  
  return (
    <Grid container>
      <Grid item xs={1}/>
      <Grid item xs={10}>
        <Paper className={classes.form}>
          <div className={classes.userPanel }>
            <Typography variant='h4'>{'הוספת משתמש'}</Typography>
            <Grid container alignItems='center'>
              <Grid item xs={3}>
                <TextField
                  id='soldier-id-txtbox'
                  label='מספר אישי'
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={3}>
                <TextField
                  id='full-name-txtbox'
                  label='שם מלא'
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={3}>
                <Button variant='outlined' color='primary' className={classes.button}>{'הוסף משתמש'}</Button>
              </Grid>
            </Grid>
          </div>
          <div className={classes.rolePanel}>
            <Typography variant='h4'>{'הוספת הרשאה'}</Typography>
            <Grid container alignItems='center'>
              <Grid item xs={3}>
                <TextField
                  id='soldier-id-txtbox'
                  label='מספר אישי'
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={3}>
              <FormControl variant='outlined' className={classes.roleSelect}>
                <InputLabel ref={inputLabelRef} htmlFor='role-select'>
                  {'תפקיד'}
                </InputLabel>
                <Select
                  value={state.role}
                  onChange={handleChange}
                  input={
                    <OutlinedInput 
                    labelWidth={state.labelWidth}
                    name='role'
                    id='role-select' />}>
                  }>
                  {roles.map((role, index) => <MenuItem key={index} value={role.id}>{role.name}</MenuItem>)}
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={3}>
                <Button variant='outlined' color='primary' className={classes.button}>{'הוסף תפקיד'}</Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

const styles = theme => ({
  form: {
    height: '85vh',
    padding: 20
  },
  userPanel: {
    height: 150
  },
  rolePanel: {
    height: 150
  },
  roleSelect: {
    width: '100%'
  }
});

export default withStyles(styles)(NewUsersPage);