import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate= useNavigate();

  var [inputs, setInputs] = useState({
    admissionno: "",
    name: "",
    Age: "",
    course: "",
  });



var[selectedimage,setSelectedimage]=useState(null);


  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };



  const handleimage=(event)=>{
    const file=event.target.files[0];
setSelectedimage(file)
    inputs.image1=file;
  }

  // const addHandler = () => {
  //   console.log("clicked");
  //   console.log(inputs);
  //   axios
  //     .post("http://localhost:3005/new", inputs)
  //     .then((response) => {
  //       console.log(response)
  //       alert("Record saved");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const saveData=()=>{
    const formdata=new FormData();
    formdata.append('admissionno',inputs.admissionno);
    formdata.append('name',inputs.name);
    formdata.append('Age',inputs.Age);
    formdata.append('course',inputs.course);
    formdata.append('image1',selectedimage);



 fetch('http://localhost:3005/new',{
 method:'post',
 body:formdata,
})
.then((response)=>response.json())
.then((data)=>{
  alert('Record Saved')
}) 
 
.catch((err)=>{
  console.log("error")
})
  }

  const viewHandler =() =>
  {
    navigate("/Studentview");
  }


  return (
    <div>
      STUDENT REGISTRATION FORM
      <br></br>
      <TextField
        id="outlined-basic"
        label="Admission no"
        name="admissionno"
        value={inputs.admissionno}
        onChange={inputHandler}
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="name"
        name="name"
        value={inputs.name}
        onChange={inputHandler}
        variant="outlined"
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Age"
        name="Age"
        value={inputs.Age}
        onChange={inputHandler}
        variant="outlined"
      />
      <br></br>
    
      <InputLabel id="demo-simple-select-label">course</InputLabel>
      <br></br>
      <Select name="course" value={inputs.course} label="course" onChange={inputHandler}>
        <MenuItem value="BCA">BCA</MenuItem>
        <MenuItem value="BBA">BBA</MenuItem>
        <MenuItem value="B.ed">B.ed</MenuItem>
        </Select>
        <br></br>
    <label>choose file to upload</label>
    <input type="file" onChange={handleimage}></input>
      <br></br>
      <Button variant="contained" onClick={saveData}>SUBMITT</Button>
      <Button variant="contained" onClick={viewHandler}>View</Button>
    </div>
  );
};

export default Student;
