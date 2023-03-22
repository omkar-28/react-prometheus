import { Stage, usePerformanceMark } from '@cabify/prom-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((resp) => resp.json())
            .then((result) => setTodos(result?.slice(0, 10)))
            .finally(() => setIsLoading(false));
    }, [])
    usePerformanceMark(isLoading ? Stage.Usable : Stage.Complete, 'main-page');
    return (
        <div>
            <h2 className="heading">Welcome to the Redux toolkit store</h2>
            <Link to={'/products'} className="btn">
                Products Page
            </Link>

            <ul>
                {isLoading ? <h2>Loading todos...</h2> : todos.map((list) => <li key={list.id}>{list.title}</li>)}
            </ul>
        </div>
    );
};

export default Home;
