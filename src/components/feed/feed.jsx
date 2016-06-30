'use strict';
import './feed.less';
import React from 'react';
import AlertMessage from 'components/alertmessage/alertmessage.jsx';

class Feed extends React.Component {
  render() {
    return(
      <section className="feed-container">
        {this.props.children}
        <AlertMessage />
      </section>
    );
  }
}

export default Feed;