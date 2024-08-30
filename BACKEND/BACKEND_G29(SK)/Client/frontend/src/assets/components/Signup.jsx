import React, { useState } from 'react'

export default function Signup() {
    const [formdata, setFormData] = useState({
        username: '',
        password: ''
    })
    async function handlesubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4003/data', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        console.log(response);
        const data = await response.json()
        console.log(data);
    }

    function inputdata(e) {
        e.preventDefault();
        setFormData({ ...formdata, [e.target.name]: e.target.value });
        console.log(formdata);
    }


    async function getdata() {
        const response = await fetch('http://localhost:4003/data')
        console.log(response);
        const data = await response.json()
        console.log(data);

    }
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" name="username" id="username" onChange={inputdata} />
                <input type="password" name="password" onChange={inputdata} />
                <button type='submit'>Save</button>
            </form>
            <button onClick={getdata}>Getdata</button>
        </div>
    )
}