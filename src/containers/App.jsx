import { useState } from 'react';
import CardList from '../components/CardList';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='font-sans'>
            <h1 className='font-heading'>Cute Cat Friends</h1>
            <CardList />
        </div>
    );
}

export default App;
