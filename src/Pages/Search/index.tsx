import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import SearchResult from '../../components/SearchResult';
import api from '../../services/api';
import './Search.less';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [pages, setPages] = useState<number[]>([]);
    const [activePageIndex, setActivePageIndex] = useState(0);

    const setPage = (page: number) => setActivePageIndex(pages.indexOf(page));

    useEffect(() => {
        setError('');

        if (!searchTerm) return;

        const requestDelay = setTimeout(() => {
            api.call({
                s: searchTerm,
                page: activePageIndex + 1,
            }).then(({ data }) => {
                if (data.Response === 'True') {
                    setSearchResults(data.Search);
                    setPages(
                        Array.from(
                            { length: Math.ceil(data.totalResults / 10) },
                            (_, i) => i + 1
                        )
                    );
                } else {
                    setError(data.Error);
                    setSearchResults([]);
                    setPages([]);
                    setActivePageIndex(0);
                }
            });
        }, 200);
        return () => clearTimeout(requestDelay);
    }, [searchTerm, activePageIndex]);

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

                    {pages.length > 1 && (
                        <Pagination
                            pages={pages.slice(
                                activePageIndex >= 5 ? activePageIndex - 5 : 0,
                                activePageIndex + 5
                            )}
                            activePage={pages[activePageIndex]}
                            setPage={setPage}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Search;
