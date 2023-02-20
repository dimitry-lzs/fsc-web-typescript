import './Pagination.less';

interface PaginationProps {
    pages: number[];
    activePage: number;
    setPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
    const { setPage, pages, activePage } = props;
    return (
        <div className='Pagination'>
            <button
                className='page'
                onClick={() => activePage > 1 && setPage(activePage - 1)}
            >
                {'<<'}
            </button>
            {pages.map((page, idx) => (
                <button
                    key={idx}
                    onClick={() => setPage(page)}
                    className={`page ${activePage === page ? 'active' : ''}`}
                >
                    {page}
                </button>
            ))}
            <button
                className='page'
                onClick={() =>
                    pages.indexOf(activePage + 1) > -1 &&
                    setPage(activePage + 1)
                }
            >
                {'>>'}
            </button>
        </div>
    );
}
