import React, { useState } from 'react'

const ColorPicker = () => {
    const[col,setCol]=useState("fff")
    const[scol,setSCol]=useState("000")
    function colChange(event){
        setCol(event.target.value);
    }
    function ScolChange(event){
        setSCol(event.target.value);
    }
  return (
    <div className='flex flex-col border-4 h-lvh w-lvw justify-center items-center transition-all ease-in delay-200' style={{backgroundColor:col,color:scol}}>
        <h1 className='text-5xl text-center mb-12 transition-all ease-in delay-200'>COLOR PICKER</h1>
        <p className='text-center text-7xl transition-all ease-in delay-200' style={{backgroundColor:col}}>Selected Color:{col}</p>
        <div className='flex flex-col mt-8 gap-4 border-black border-2 p-3 bg-slate-800 font-bold '>
            <div className='flex gap-2 text-xl'>
                <label>Primary/Background Color:</label>
                <input className="p-0 cursor-pointer bg-slate-800" type='color' onChange={(e)=>colChange(e)}></input>
            </div>
            <div className='flex gap-2 text-xl'>
                <label>Secondary/Foreground Color:</label>
                <input className="p-0 cursor-pointer bg-slate-800" type='color' onChange={(e)=>ScolChange(e)}></input>
            </div>
        </div>
    </div>
  )
}

export default ColorPicker