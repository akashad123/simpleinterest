import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {

  const [interest, setInterest] = useState(0)
  const [principal, setPrincipal] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipal, setIsPrincipal] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
    
  const getValidate = (e)=> {
    const{name, value} = e.target
  /*  console.log(name,value); */
  /*  console.log(!!value.match(/^[0-9]$/)); // !! converts to boolean */
  if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
    if(name==='principal')
    {
      setPrincipal(value)
      setIsPrincipal(true)
    }
    else if(name==='rate')
    {
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
    else{
      if(name==='principal')
      {
        setPrincipal(value)
        setIsPrincipal(false)
      }
      else if(name==='rate')
      {
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
  }

  const handleCalculate = (e)=> {
    e.preventDefault()  // Prevents reloading
    if(!principal || !rate || !year){
      alert('Please fill the form')
    }
    else{
      setInterest(principal*rate*year/100)
    }
  }

  const handleReset = (e)=> {
    setInterest(0)
    setRate(0)
    setPrincipal(0)
    setYear(0)
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      
      <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Clalculate simple interest easily</p>

        <div className='bg-warning d-flex justify-content-center align-items-center w-100 rounded mt-4 p-3 flex-column shadow'>
          <h1>₹ {''} {interest}</h1>
          <p>Total simple interest</p>
        </div>

        <form className='mt-4' onSubmit={handleCalculate}>

          <div className='mb-3'>
          <TextField value={principal || ""} name='principal' onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Principal amount" variant="outlined" />
          </div>
          { !isPrincipal &&
            <div>
              <p className='text-danger'>* Invalid input</p>
            </div>
          }

          <div className='mb-3'>
          <TextField value={rate || ""} name="rate" onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Rate of interest" variant="outlined" />
          </div>
          { !isRate &&
            <div>
              <p className='text-danger'>* Invalid input</p>
            </div>
          }

          <div className='mb-3'>
          <TextField value={year || ""} name="year" onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Year" variant="outlined" />
          </div>
          { !isYear &&
            <div>
              <p className='text-danger'>* Invalid input</p>
            </div>
          }

          <Stack direction="row" spacing={2} className='mt-5'>
          <Button type='submit' disabled={isPrincipal && isRate && isYear?false:true} className='bg-success' style={{width:'200px', height:'50px'}} variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'200px', height:'50px'}} variant="outlined">Reset</Button>
          </Stack>

        </form>

      </div>
    </div>
  );
}

export default App;
