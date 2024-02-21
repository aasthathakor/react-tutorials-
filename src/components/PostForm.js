import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


function PostForm() {
    const url ="https://cdae-2405-201-2006-7d89-65a7-42-9b41-4f7c.ngrok-free.app/Create"
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            date: data.date,
            user: parseInt(data.user)
        })
        .then(res=>{
            console.log(res.data)
        })
    }
    
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
        <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=>handle(e)} id='name' value={data.name} type='text' placeholder='name'></input>
            <input onChange={(e)=>handle(e)} id='date' value={data.date} type='date' placeholder='date'></input>
            <input onChange={(e)=>handle(e)} id='user' value={data.user} type='number' placeholder='user'></input>
            <button>Submit</button>

        </form>
        </div>
    );
}

export default PostForm