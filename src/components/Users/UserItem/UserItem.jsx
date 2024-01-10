import styles from './UserItem.module.css'
import userDefaultPhoto from '../../../assets/images/avatar.png'
import { NavLink } from "react-router-dom";

const UserItem = (props) => {
    return <div className={styles.content}>
        <span>
            <div className={styles.userPhoto}>
                <NavLink to={'/profile/' + props.userData.id}>
                    <img src={(props.userData.photos.small) ? props.userData.photos.small : userDefaultPhoto} />
                </NavLink>
            </div>
            <div className={styles.followButton}>
                {
                    props.userData.followed
                        ? <button onClick={() => props.unfollow(props.userData.id)} className={styles.unfollow}>Unfollow</button>
                        : <button onClick={() => props.follow(props.userData.id)} className={styles.follow}>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div className={styles.userName}>{props.userData.name}</div>
                <div className={styles.userStatus}>{(!props.userData.status) ? '...' : props.userData.status}</div>
            </span>
        </span>
    </div>
}

export default UserItem;