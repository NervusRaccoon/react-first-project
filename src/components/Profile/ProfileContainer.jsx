import Profile from "./Profile";
import React from "react";
import { setUserProfile } from "../../redux/profile_reducer";
import axios from "axios";
import { connect } from 'react-redux';
import withRouter from "../common/Preloader/WithRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));