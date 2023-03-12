import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'; 

export default function Create() {

    const [firstName, setFirstName] = useState(''); 
    
    const [lastName, setLastName] = useState(''); 
    
    console.log(firstName); 
    console.log(lastName); 

    const sendDataToApi = () => { 
        axios.post('https://640c44e5a3e07380e8f04e21.mockapi.io/curd', {
            firstName, 
            lastName
        })
    }

  return (
    <div>
        <Form>
            <Form.Field>
            <label>First Name</label>
            <input 
            name='fname' 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder='First Name' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input 
            name='lname' 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder='Last Name' />
            </Form.Field>
            
            <Button type='submit' onClick={sendDataToApi}>Submit</Button>
        </Form>
    </div>
  )
}
