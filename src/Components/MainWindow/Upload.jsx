import axios from 'axios';
import React,{useEffect, useState} from 'react'

export default function Upload() {
    const [files,setFiles]=useState([])
    const haldleOnclick=(e)=>{
        e.preventDefault();
        var finalData=new FormData()
        for (let i=0;i<files.length;i++){
            finalData.append('file1',files[i])
        }
        axios.post('http://localhost:8000/sell',finalData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }

    useEffect(()=>{
        console.log(files)
    },[files])
  return (
    <div className="upload">
        <input type="file" multiple name='file1' onChange={e=>setFiles(e.target.files)} />
        <button onClick={haldleOnclick} >Upload</button>
    </div>
  )
}
