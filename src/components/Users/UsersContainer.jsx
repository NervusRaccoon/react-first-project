import { followAC as follow, setCurrentPageAC as setCurrentPage, setTotalUsersCountAC as setTotalUsersCount, setUsersAC as setUsers, toggleIsFetchingAC as toggleIsFetching, unfollowAC as unfollow } from '../../redux/users_reducer';
import Users from './Users'
import { connect } from 'react-redux';
import axios from "axios";
import React from "react";
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + this.props.currentPage + '&count=' + this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + pageNumber + '&count=' + this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching })(UsersContainer);