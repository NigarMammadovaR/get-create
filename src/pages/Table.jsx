import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Base_URL } from '../utils/constantas';




export default function DataTable() {

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'surname', headerName: 'Surname', width: 200 },
    {
      field: 'username',
      headerName: 'Username',
      type: 'number',
      width: 200,
    },
    {
      field: 'password',
      headerName: 'Password',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
  ];


  
const [data, setData] = useState([]);

useEffect (()=>{
  axios.get(`${Base_URL}/get-data`) 
  .then((res)=>{
    setData(res.data.data);
  })
},[])
console.log(data);


function generateRandom() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

  return (
    <div className="container">
      <div style={{ height: 400, width: '100%', marginTop: 50}}>
      <DataGrid
        rows= {data}
        columns={columns}
        getRowId={(row: any ) =>  generateRandom()}
    
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
    
  );
}

