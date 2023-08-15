import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setName(localStorage.getItem('Name'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://localhost:7257/api/Owner`, {
            id,
            name
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}