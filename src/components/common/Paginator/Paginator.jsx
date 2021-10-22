import React, {useState} from "react";
import styles from './Paginator.module.css'

const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 3}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={styles.center}>
            <div className={styles.pagination}>
                {portionNumber > 1 &&
                <button className={styles.pagesNumber} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p, index) => {
                    return <span className={styles.pagesNumber} key={index} onClick={(e) => {
                        onPageChanged(p)
                    }
                    }>
                        <span className={currentPage ===p && styles.selectedPage}>{p}</span>
                    </span>
                })}

                {portionCount > portionNumber &&
                <button className={styles.pagesNumber} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
            </div>
        </div>
    )
}

export default Paginator;