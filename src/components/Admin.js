import React, { useState } from 'react';
import './Admin.css';

function Admin() {
    const [listData, setListData] = useState([
        'Name', 'Phone'
    ]);

const handleDelete = (index) => {

};

const handleSuccess = (index) => {

};

  return (
    <ul>
        {listData.map((item, index)=>
        (
            <li key={index}>
                {item}
                <button onClick={() => handleSuccess(index)}>Accept</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
        ))}
    </ul>
  );
};

export default Admin;
