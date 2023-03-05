import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Base_URL } from '../utils/constantas';
import {useState} from "react";
import axios from 'axios';
import swal from 'sweetalert';




const Register = () => {
  
        const [userData, setUserData] = useState({
            name :"",
            surname :"",
            username : "",
            password :""
        })

        const onChange = (e) =>{
            setUserData ({...userData, [e.target.name]:e.target.value})
        }

        const {name, surname, username, password} = userData;

    const onClick = () => {
      
      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
       
        if (willDelete) {
          swal("Good! Your data has been saved!", {
            icon: "success",
          });
          axios.post(`${Base_URL}/create-data`, userData).then((res) =>{
            console.log(res);
          
        })
        } else {
          swal("Your data hasn't been saved!");
        }
     
      });
       
    }


  return (
    <div className='form'>
       <form
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" name="name" onChange={onChange}/>
      <TextField id="outlined-basic" label="Surname" variant="outlined" name="surname" onChange={onChange} />
      <TextField id="outlined-basic" label="Username" variant="outlined" name="username" onChange={onChange} />
      <TextField id="outlined-basic" type="password" label="Password" variant="outlined" name="password"onChange={onChange} />
      <Button variant="contained" onClick={onClick}>Register</Button>
      
    </form>
    </div>
  )
}

export default Register