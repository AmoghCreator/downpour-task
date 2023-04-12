import {useState} from 'react';
import {useForm} from 'react-hook-form';
import { Button , TextField , Select, InputLabel , FormControl} from '@mui/material/';
import "./css/formArea.css";

function FormArea() {
  const {register , handleSubmit , formState : {}} = useForm();
  function test(formData) {
    console.log(formData);
  }
  return (
    <div id="form">
      
    <form onSubmit={handleSubmit(test)}>
      <TextField label="Pickup Location" className="formInput" style={{margin:"1.5vh 0px"}} {...register("pickup" , {required : true})} /> 
      <TextField label="Drop Location" className="formInput" style={{margin:"1.5vh 0px"}}{...register("drop" , {required : true})} />     
      <TextField label="Date" type="date" className="formInput" placeholder=" NULL" style={{margin:"1.5vh 0px"}} {...register("date" , {required : true})} />
        <FormControl fullWidth>
      <InputLabel id="hh" > Hours </InputLabel> 
      <Select labelId="hh"  className="formInput" placeholder=" NULL" style={{margin:"1.5vh 10% 1vh 0" , width : "40%"}} {...register("time" , {required:true})} >
      </Select>
      </FormControl >

      <FormControl fullWidth>
      <InputLabel id="mm" > Minutes </InputLabel> 
      <Select labelId="mm"  className="formInput" placeholder=" NULL" style={{margin:"1.5vh 10% 1vh 0" , width : "40%"}} {...register("time" , {required:true})} >
      </Select>
      </FormControl >
      <Button className="subBut"
          type="submit" 
          variant="contained"
        >Submit</Button>
    </form>
    </div>
  )
}

export default FormArea;
