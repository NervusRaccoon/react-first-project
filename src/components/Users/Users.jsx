import React from "react";
import styles from './Users.module.css'
import userDefaultPhoto from '../../assets/images/avatar.png'
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p =>
                <span className={p === props.currentPage ? styles.checkedPageNumber : styles.uncheckedPageNumber} onClick={() => props.onPageChanged(p)}>{p}</span>
            )}
        </div>
        <div>
            {props.users.map(x => <div key={x.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + x.id}>
                        <img src={x.photos.small !== null ? x.photos.small : userDefaultPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            x.isFollowed
                                ? <button onClick={() => props.unfollow(x.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(x.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{x.name}</div>
                        <div>{x.status}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    </div>
}

export default Users;