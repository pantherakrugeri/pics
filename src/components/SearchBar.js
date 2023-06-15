import { useState } from 'react';

function SearchBar ({ onSubmit }) {
    const [term, setTerm] = useState('');
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    
    return (
        <>
            <div>Search</div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </>
    );
}

export default SearchBar;