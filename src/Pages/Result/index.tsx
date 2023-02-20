import { useLoaderData } from 'react-router';
import Layout from '../../components/Layout';
import './Result.less';

interface MovieScore {
    Source: string;
    Value: string;
}

interface MovieSearchResult {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: MovieScore[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    Error: string;
}

function Result() {
    const movie = useLoaderData() as MovieSearchResult;
    const { Poster, Title, Year, Genre, Ratings, Plot } = movie;

    return (
        <Layout>
            <div className='Result'>
                <div className='SubHeader'>
                    <div className='GoBack'>{'<  Back to results'}</div>
                </div>
                <div className='Movie'>
                    <img
                        className='MoviePoster'
                        src={Poster}
                        alt={`${Title} poster`}
                    />
                    <div className='MovieDetails'>
                        <div className='MovieTitle'>{Title}</div>
                        <div className='MovieYearGenre'>
                            {Year} - {Genre}
                        </div>
                        <div className='Ratings'>
                            {Ratings.map((score, index: number) => (
                                <div key={index} className='Score'>
                                    {score.Source} - {score.Value}
                                </div>
                            ))}
                        </div>
                        <div className='MoviePlot'>{Plot}</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Result;
