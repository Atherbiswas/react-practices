import React from 'react';
import './User.css'

const User = (props) => {
    const {id, title,} = props.user;
    return (
        <div className='user'>
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
        </div>
    );
};

export default User;