import React from "react";
import styles from './Users.module.css'
import UserItem from "./UserItem/UserItem";

const Users = (props) => {

    let pages = [];
    let startPageNumber = props.currentPage === 1 ? 1 : props.currentPage-1;
    let finishPageNumber = props.currentPage + props.maxUsersPagesCount;
    for (let i = startPageNumber; i < finishPageNumber; i++) {
        pages.push(i);
    }

    return <div className={styles.content}>
        <div>
            {props.users.map(x => <UserItem {...props} userData={x} />)}
        </div>
        <div className={styles.pageNumbers}>
            {pages.map(p =>
                <button className={p === props.currentPage ? styles.checkedPageNumber : styles.uncheckedPageNumber} onClick={() => props.onPageChanged(p)}>{p}</button>
            )}
        </div>
    </div>
}

export default Users;