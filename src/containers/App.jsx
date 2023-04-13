import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchTerm } from '../actions';

function App({ searchTerm, onSearchChange }) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setCats(users);
            });
    }, []);

    const filteredCats = cats.filter((cat) => {
        return cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return !cats.length ? (
        <h1>Loading...</h1>
    ) : (
        <div className='mt-5 text-center font-sans'>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-pink-300 font-heading text-5xl'>
                Cute Cat Friends
            </h1>
            <SearchBar searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList cats={filteredCats} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchTerm(event.target.value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
