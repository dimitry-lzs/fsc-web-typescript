import Layout from '../../components/Layout';
import SearchResult from '../../components/SearchResult';
import './Search.less';

function Search() {
    return (
        <Layout>
            <div className='MovieSearch'>
                <div className='SearchLabel'>Search movie</div>

                <div className='Search'>
                    <input placeholder='Search...' />
                </div>

                <div className='SearchResults'>
                    <SearchResult />
                    <SearchResult />
                </div>

            </div>
        </Layout>
    );
}

export default Search;
