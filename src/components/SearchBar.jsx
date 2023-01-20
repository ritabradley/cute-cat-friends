const SearchBar = ({ searchChange }) => {
    return (
        <div className='p-4'>
            <input
                className='p-3 border border-pink-400 bg-violet-100 rounded-md shadow-md'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBar;
