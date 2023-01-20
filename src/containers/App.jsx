import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setRobots(users);
            });
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
        <h1>Loading...</h1>
    ) : (
        <div className='mt-5 text-center font-sans'>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-pink-300 font-heading text-5xl'>
                Cute Cat Friends
            </h1>
            <SearchBar searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;
