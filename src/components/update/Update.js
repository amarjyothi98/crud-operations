import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'; 

export default function Update() {

    const [firstName, setFirstName] = useState(''); 
    
    const [lastName, setLastName] = useState(''); 

    const [ID, setID] = useState(null); 
    
    console.log(firstName); 
    console.log(lastName); 

    const sendDataToApi = () => { 
        axios.put(`https://640c44e5a3e07380e8f04e21.mockapi.io/curd/${ID}`, {
            firstName, 
            lastName
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName')); 
        setLastName(localStorage.getItem('lastName')); 
        setID(localStorage.getItem('ID'))
    }, [])

  return (
    <div>
        <Form>
            <Form.Field>
            <label>First Name</label>
            <input 
                name='fname' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input 
                name='lname' 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
                placeholder='Last Name' />
            </Form.Field>
            
            <Button type='submit' onClick={sendDataToApi}>Update</Button>
        </Form>
    </div>
  )
}
