import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://localhost:7257/api/Owner`)
    .then((response) => {
        setAPIData(response.data);
    })
}, [])

import { Table } from 'semantic-ui-react'

export default function Read() {
    const setData = (data) => {
        let { id, name } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);

    }

    const onDelete = (id) => {
        axios.delete(`https://localhost:7257/api/Owner/${id}`)
        .then(() => {
            getData();
        })
      }

    const getData = () => {
        axios.get(`https://localhost:7257/api/Owner`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
       }

    return (
        <div>
            <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Link to='/update'>
                            <Table.Cell> 
                                <Button onClick={() => setData(data)}>Update</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                        </Link>
                  </Table.Row>
                  
            )})}
            </Table.Body>
        </div>
    )
}