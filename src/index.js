import 'shared/styles/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes.jsx';

ReactDOM.render( routes, document.getElementById('content') );

//var ProfilePage = React.createClass({
//  propTypes: {
//    userId: PropTypes.number.isRequired,
//    user: PropTypes.object // note that user is now a prop
//  },
//
//  render() {
//    var { user } = this.props; // get user from props
//    return <div>{user ? user.name : 'Loading'}</div>;
//  }
//});
//
//// Now wrap ProfilePage using a higher-order component:
//
//ProfilePage = connectToStores(ProfilePage, [UserStore], props => ({
//  user: UserStore.get(props.userId)
//});
//
