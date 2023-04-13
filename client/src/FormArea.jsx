import {useState} from 'react';
import {useForm} from 'react-hook-form';
import { Button , TextField , Select, InputLabel , FormControl, MenuItem} from '@mui/material';
import "./css/formArea.css";
import SubmitMsg from "./SubmitMsg"

function FormArea() {
  const {register , handleSubmit , formState : {}} = useForm();
  const [submitMsg , setSubmitMsg] = useState(false);
  const [formData , setFormData] = useState({});
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const mins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
  function test(formData) {
    setSubmitMsg(true);
    setFormData(formData);
    console.log(formData);
  }
  return (
    <div id="form">
    {
      submitMsg &&
      <SubmitMsg formData={formData}/>
    } 
    <form onSubmit={handleSubmit(test)}>
      <TextField label="Pickup Location" className="formInput" style={{margin:"1.5vh 0px"}} {...register("pickup" , {required : true})} /> 
      <TextField label="Drop Location" className="formInput" style={{margin:"1.5vh 0px"}}{...register("drop" , {required : true})} />     
      <TextField label="Date" type="date" className="formInput" placeholder=" NULL" InputLabelProps={{ shrink: true }} style={{margin:"1.5vh 0px"}} {...register("date" , {required : true})} />
      
      <FormControl sx={{minWidth : "40%" , margin:"1.5vh 5%"}}>
      <InputLabel id="hh" > Hours </InputLabel> 
      <Select labelId="hh"  className="formInput" placeholder=" NULL"  {...register("hh" , {required:true})} >
        {
        hours.map(data => {
              return <MenuItem value={data}>
              {data} </MenuItem>
            })
        }
      </Select>
      </FormControl >

      <FormControl sx={{minWidth : "40%", margin:"1.5vh 5%"}}> 
      <InputLabel id="mm" > Minutes </InputLabel> 
      <Select labelId="mm"  className="formInput" placeholder=" NULL"  {...register("mm" , {required:true})} >
        {
        mins.map(data => {
              return <MenuItem value={data} sx={{width: "100%"}}>
              {data} </MenuItem>
            })
        }
      </Select>
      </FormControl >

      <Button className="subBut"
          type="submit" 
          variant="contained"
      >
        Submit
      </Button>
    </form>

    </div>
  )
}

export default FormArea;
