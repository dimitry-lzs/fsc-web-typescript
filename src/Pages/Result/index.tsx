import { useLoaderData } from 'react-router';
import Layout from '../../components/Layout';
import './Result.less';

function Result() {
    let movie: any = useLoaderData();

    return (
        <Layout>
            <div className='Result'>
                <div className='SubHeader'>
                    <div className='GoBack'>{'<'}</div>
                </div>
                <div className='MovieHeader'>
                    <img className='MoviePoster' />
                    <div className='MovieDetails'>
                        <div className='MovieTitle'>{movie.Title}</div>
                        <div className='MovieYear'>{movie.Year}</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Result;
