import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SearchResult from '../../components/SearchResult';
import './Search.less';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setError('');
        if (!searchTerm) return;
        const requestDelay = setTimeout(() => {
            fetch(`http://www.omdbapi.com/?apikey=247de336&s=${searchTerm}`)
                .then((response) => {
                    response
                        .json()
                        .then((data) => {
                            if (data.Response === 'True') {
                                setSearchResults(data.Search);
                            } else {
                                setError(data.Error);
                                setSearchResults([]);
                            }
                        })
                        .catch();
                })
                .catch((err) => console.log(err));
        }, 200);
        return () => clearTimeout(requestDelay);
    }, [searchTerm]);

    return (
        <Layout>
            <div className='MovieSearch'>
                <div className='SearchLabel'>Search movie</div>

                <div className='Search'>
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search...'
                    />
                    <div className='SearchButton' />
                </div>

                <div className='SearchResults'>
                    {error && <div className='SearchError'>{error}</div>}

                    {searchResults.map((searchResult, idx) => (
                        <SearchResult searchResult={searchResult} key={idx} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Search;
