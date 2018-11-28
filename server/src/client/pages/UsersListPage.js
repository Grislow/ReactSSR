import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return (
                <li key={user.id}>{user.name}</li>
            );
        })
    }

    render(){
        return (
            <div>
                <ul>
                    <h5>List of users</h5>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}   

const loadData = (store) => {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
}