import { makeAutoObservable } from 'mobx';
import { MovieSearchResult } from '../Pages/Result';
import api from '../services/api';

interface SearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

class Results {
    searchTerm = '';
    searchResults: SearchResult[] = [];
    fetchedMovies: MovieSearchResult[] = [];
    pages: number[] = [];
    currentPageIdx = 0;
    searchError = '';
    loading = false;
    searchDelay?: NodeJS.Timeout = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    setPage = (page: number) => {
        this.currentPageIdx =
            (this.pages.length && this.pages.indexOf(page)) || 0;
        this.search();
    };

    setSearchTerm = (searchTerm: string) => {
        clearTimeout(this.searchDelay);
        this.searchTerm = searchTerm;
        this.currentPageIdx = 0;
        this.searchDelay = setTimeout(() => this.search(), 250);
    };

    search() {
        if (!this.searchTerm) return this.reset();

        this.searchError = '';
        this.setLoading(true);

        api.call({
            s: this.searchTerm.trim(),
            page: this.currentPageIdx + 1,
        })
            .then(({ data }) => {
                if (data.Response === 'True') {
                    this.setResults(data.Search);
                    this.setPages(data.totalResults);
                } else {
                    this.setError(data.Error);
                    this.setResults([]);
                    this.setPages(0);
                }
            })
            .catch(() => {
                this.reset();
            })
            .finally(() => {
                this.setLoading(false);
            });
    }

    async getResult(imdbID?: string) {
        if (!imdbID) return {};

        let movieResult = this.fetchedMovies.find(
            (movie) => movie.imdbID === imdbID
        );

        if (movieResult) return movieResult;
        this.setLoading(true);

        movieResult = (await api.call({ i: imdbID, plot: 'full' }))
            .data as MovieSearchResult;

        this.setLoading(false);
        this.fetchedMovies.push(movieResult);

        return movieResult;
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setResults(searchResults: SearchResult[]) {
        this.searchResults = searchResults;
    }

    setPages(totalResults: number) {
        this.pages = Array.from(
            { length: Math.ceil(totalResults / 10) },
            (_, i) => i + 1
        );
    }

    setError(error: string) {
        this.searchError = error;
    }

    reset() {
        this.searchResults = [];
        this.currentPageIdx = 0;
        this.searchError = '';
        this.searchResults = [];
        this.pages = [];
    }
}

export default Results;
