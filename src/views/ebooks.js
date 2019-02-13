import React from 'react'
import MUIDataTable from 'mui-datatables'

const columns = [
  {
    name: 'שם',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'מחבר',
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'הוצאה לאור',
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
}

const NewUsersPage = props => {
  return (<MUIDataTable
    title={'ספרים'}
    data={data}
    columns={columns}
    options={options}
  />)
}

export default NewUsersPage