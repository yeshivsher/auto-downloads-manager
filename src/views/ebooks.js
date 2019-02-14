import React from 'react'
import MUIDataTable from 'mui-datatables'
import bookList from '../localStorage/booksList.json'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const columns = [
  {
    name: 'מחבר',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'מדינה',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'קישור לתמונה',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'שפה',
    options: {
      filter: true,
      sort: false,
    }
  }
  ,
  {
    name: 'קישור',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'מספר דפים',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'שם הספר',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'שנה',
    options: {
      filter: true,
      sort: false,
    }
  },
]

// const n = Object.values(bookList);
const convertedToArray = bookList.map( function (index) {return Object.values(index);});

const data =  convertedToArray;

const options = {
  filterType: 'checkbox',
  print: false,
  download: false,
  rowsPerPageOptions:false,
  rowsPerPage: 10,
  responsive: "scroll",
  
}

const getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        // backgroundColor: "#FF0000"
      }
    // },
    // MUIDataTableHead: {
    //   root: {
    //     backgroundColor: "#FF0000"
    //   }
    }
  }
})

const NewUsersPage = props => {
  return (<MuiThemeProvider theme={getMuiTheme()}>
    <MUIDataTable
      title={'ספרים'}
      data={data}
      columns={columns}
      options={options}
    />
  </MuiThemeProvider>)
}

export default NewUsersPage