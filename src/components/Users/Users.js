import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Total User: {users.length}</h2>
            <div className='users'>
            {
                users.map(user => <User user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;