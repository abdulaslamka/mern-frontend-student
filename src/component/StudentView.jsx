import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

const Studentview = () => {

  var[Student,setStudents]=useState([]);
  var [selected,setSelected] =useState()
  var[update,setUpdate]=useState(false)
 
 
 
 
  const updatevalues =(row) =>{
    setSelected(row);
    setUpdate(true);
  }


 
  useEffect(() => {
  axios.get("http://localhost:3005/view")
  .then(response => {
    console.log(response.data)
    setStudents(response.data)
  })
  .catch(err => console.log(err))
},[])



    
  
  return(
  <div>
    <TableContainer component={Paper}>
   <Table sx={{ minWidth: 650 }} aria-label="simple table">
     <TableHead>
       <TableRow>
         
         <TableCell >Admission number</TableCell>
         <TableCell >name</TableCell>
         <TableCell >Age</TableCell>
         <TableCell>Course</TableCell>
         <TableCell>Edit</TableCell>
             
       </TableRow>
     </TableHead>
     <TableBody>
       {Student.map((value,index) =>{
         return(
            <TableRow key={index}
          
         >
           <TableCell component="th" scope="row">
             {value.admissionno}
           </TableCell>
           <TableCell >{value.name}</TableCell>
           <TableCell >{value.Age}</TableCell>
           <TableCell >{value.course}</TableCell>
           <TableCell><EditLocationAltIcon onClick={()=>updatevalues (value)}></EditLocationAltIcon></TableCell>
         </TableRow>
         )
       }

       
        
       )}
     </TableBody>
   </Table>
 </TableContainer>
 </div>)
}

export default Studentview