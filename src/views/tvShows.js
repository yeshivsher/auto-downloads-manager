import React from 'react'
import MUIDataTable from 'mui-datatables'

const columns = [
  {
    name: 'Name',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'Company',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'City',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'State',
    options: {
      filter: true,
      sort: false,
    }
  },
]

const data = [
  ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
  ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
  ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
  ['James Houston', 'Test Corp', 'Dallas', 'TX'],
]

const options = {
  filterType: 'checkbox',
  print: false,
  download: false,
}

const NewUsersPage = props => {
  return (<MUIDataTable
    title={'סדרות'}
    data={data}
    columns={columns}
    options={options}
  />)
}

export default NewUsersPage