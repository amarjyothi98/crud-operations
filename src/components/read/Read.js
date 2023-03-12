import React, { useEffect, useState } from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Read() {

    const [apiData, setApiData] = useState([]); 

    useEffect(() => {
      axios.get('https://640c44e5a3e07380e8f04e21.mockapi.io/curd')
      .then((getData) => {
        setApiData(getData.data);
      })
    })

    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id)
    }
    

  return (
    <div>
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>

                {apiData.map((data) => {
                    return (
                        <Table.Row>

                            <Table.Cell>
                            <Label ribbon>{data.id}</Label>
                            </Table.Cell>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>
                                <Link to='/update' >
                                    <Button color='green' onClick={() => setID(data.id)} >Update</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell> 
                                <Link to='/delete' > 
                                   <Button color='red'>Delete</Button>
                                </Link>
                            </Table.Cell>
                        </Table.Row> 
                    )
                })}
            
            </Table.Body>
        </Table>
    </div>
  )
}
