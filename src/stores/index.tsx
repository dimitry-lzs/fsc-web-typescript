import Results from './Results';

declare global {
    interface Window {
        results: Results;
    }
}

const results = new Results();

window.results = results;

export { results };
