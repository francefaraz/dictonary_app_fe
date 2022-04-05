import  Axios  from 'axios'
import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

var BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL ||
    "http://localhost:5000/api";
// console.log(BACKEND_URL)

const Addtext = () => {
    const [data,setData]=useState("")
    const [text,setText]=useState("ADD A WORD TO DICTONARY")
    const add=(e)=>{
        e.preventDefault();
        var body={
            word1:data,
        }
        Axios.post(`${BACKEND_URL}/add`,body)
        .then((response)=>{
            console.log(response,"res")
        })
        .catch((err)=>{
            console.log(err,"err")
        })
    }
    useEffect(()=>{

    },[data])
  return (
    <div>
        <div>
            <h1> {text}</h1>
          
                {/* <input type="text" value={data} onChange={e=>setData(e.target.value)}/> */}
                <TextField id="filled-basic" style={{marginBottom:"20px"}} label="ENTER A WORD" variant="filled" value={data} onChange={e=>setData(e.target.value)} />
    
          <br/>
            
{/* <button type="button" onClick={add}>Add</button> */}
<Button variant="contained" onClick={add}> Add Text</Button>

          
        </div>
    </div>
  )
}

export default Addtext