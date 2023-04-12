const SearchBar = ({ searchChange }) => {
    return (
        <div className='p-4'>
            <input
                className='p-3 border border-pink-400 bg-violet-100 rounded-md shadow-md outline-violet-400'
                type='search'
                placeholder='search cats'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBar;
