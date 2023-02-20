import { Link } from 'react-router-dom';
import './SearchResult.less';

interface SearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

type SearchResultProps = {
    searchResult: SearchResult;
};

function SearchResult(props: SearchResultProps) {
    const { searchResult } = props;
    const { Poster, Title, Year, imdbID } = searchResult;

    return (
        <div className='SearchResult'>
            <img src={Poster} alt={`${Title} poster`} className='MoviePoster' />
            <div className='MovieDetails'>
                <Link to={`/result/${imdbID}`}>
                    <div className='MovieTitle'>{Title}</div>
                </Link>
                <div className='MovieYear'>{Year}</div>
            </div>
        </div>
    );
}

export default SearchResult;
