import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make a GET request to your API endpoint
        axios.get('/api/data')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Data from MongoDB Atlas</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        Name: {item.name}<br />
                        Email: {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
