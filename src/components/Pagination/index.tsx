import * as C from './styles'

type PaginationProps = {
    pages: number;
    currentPage: number;
    onUpdatePage: (page: number) => void;
}

export const Pagination = ({ pages, onUpdatePage, currentPage }: PaginationProps) => {
    return (
            <C.PaginationButton className={`${currentPage == pages ? 'active' : ''}`} onClick={() => onUpdatePage(pages)}>
                {pages}
            </C.PaginationButton>
    )
}