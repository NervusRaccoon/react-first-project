import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users_reducer';
import Users from './Users'
import { connect } from 'react-redux';
import axios from "axios";
import React from "react";

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + this.props.currentPage + '&count=' + this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + pageNumber + '&count=' + this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <Users totalUsersCount={this.props.users.totalUsersCount}
    pageSize={this.props.users.pageSize}
    currentPage={this.props.users.currentPage}
    users={this.props.users.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    onPageChanged={this.onPageChanged}/>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsersCount: (usersCount) => {
      dispatch(setTotalUsersCountAC(usersCount))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);