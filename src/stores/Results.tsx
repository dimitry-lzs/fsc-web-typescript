import { makeAutoObservable } from 'mobx';
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
    pages: number[] = [];
    currentPageIdx = 0;
    searchError = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSearchTerm = (searchTerm: string) => {
        this.searchTerm = searchTerm;
    };

    search(searchTerm: string) {
        this.setError('');

        if (!searchTerm) return this.reset();

        api.call({
            s: searchTerm.trim(),
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
            });
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

    setPage = (page: number) => {
        this.currentPageIdx = this.pages.indexOf(page);
    };

    setError(error: string) {
        this.searchError = error;
    }

    reset() {
        this.searchResults = [];
        this.searchError = '';
        this.searchResults = [];
        this.pages = [];
    }
}

export default Results;
