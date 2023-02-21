import { observer } from 'mobx-react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import SearchResult from '../../components/SearchResult';
import { results } from '../../stores';
import './Search.less';

function Search() {
    const {
        searchTerm,
        setSearchTerm,
        searchResults,
        pages,
        setPage,
        currentPageIdx,
        searchError,
    } = results;

    useEffect(() => {
        const requestDelay = setTimeout(() => {
            results.search(searchTerm);
        }, 200);
        return () => clearTimeout(requestDelay);
    }, [searchTerm, currentPageIdx]);

    return (
        <Layout>
            <div className='MovieSearch'>
                <div className='SearchLabel'>Search movie</div>

                <div className='Search'>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search...'
                    />
                    <div className='SearchButton' />
                </div>

                <div className='SearchResults'>
                    {searchError && (
                        <div className='SearchError'>{searchError}</div>
                    )}

                    {searchResults.map((searchResult, idx) => (
                        <SearchResult searchResult={searchResult} key={idx} />
                    ))}

                    {pages.length > 1 && (
                        <Pagination
                            pages={pages.slice(
                                currentPageIdx >= 5 ? currentPageIdx - 5 : 0,
                                currentPageIdx + 5
                            )}
                            activePage={pages[currentPageIdx]}
                            setPage={setPage}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default observer(Search);
