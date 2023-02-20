import './SearchResult.less';

function SearchResult() {
    return (
        <div className='SearchResult'>
            <img src='https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg' className='MoviePoster' />
            <div className='MovieDetails'>
                <div className='MovieTitle'>Titanic</div>
                <div className='MovieDescription'>A Great Movie about boat that sunk in the middle of the Atlantic Ocean</div>
            </div>
        </div>
    );
}

export default SearchResult;
