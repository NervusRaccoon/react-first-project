import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={classes.profileInfo}>
            <div className={classes.userAvatar}>
                <img src={props.profile.photos.large === null ?
                    'https://sun9-51.userapi.com/impg/9izUnZrJGLRvf6l5_ZivPt1nsfr26TtYw9Psjg/XjwpKSwdc0w.jpg?size=1376x2048&quality=95&sign=2a493205ec633b5415b6589e854492d8&type=album'
                    : props.profile.photos.large} />
            </div>
            <div className={classes.userName}>
                    {props.profile.fullName}
            </div>
        </div>
    );
}

export default ProfileInfo;