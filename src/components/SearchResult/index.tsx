import { useNavigate } from 'react-router';

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
    const navigate = useNavigate();

    const { searchResult } = props;
    const { Poster, Title, Year, imdbID } = searchResult;

    return (
        <button
            onClick={() => navigate(`/result/${imdbID}`)}
            className='SearchResult'
        >
            <img src={Poster} alt={`${Title} poster`} className='MoviePoster' />
            <div className='MovieDetails'>
                <div className='MovieTitle'>{Title}</div>
                <div className='MovieYear'>{Year}</div>
            </div>
        </button>
    );
}

export default SearchResult;
