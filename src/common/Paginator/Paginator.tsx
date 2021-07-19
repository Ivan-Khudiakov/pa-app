import React from "react"
import styles from "./Paginator.module.css"

type PropsPaginatorType ={
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const Paginator: React.FC<PropsPaginatorType> = React.memo((
    {pageSize, totalCount, currentPage, setCurrentPage}) => {

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.paginatorContainer}>
            <ul className="pagination">
                {
                    pages.map(num => (
                        <li key={num} className={ num === currentPage ? "active" : "waves-effect"}>
                            <a onClick={() => paginate(num)} href="#!">{num}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
})
