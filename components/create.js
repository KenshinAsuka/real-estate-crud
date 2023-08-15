import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [name, setName] = useState('');
    const postData = () => {
        axios.post(`https://localhost:7257/api/Owner`, {
            name
        })
    }  
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
