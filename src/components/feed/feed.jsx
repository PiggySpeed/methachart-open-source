'use strict';
import './feed.less';
import React from 'react';

class Feed extends React.Component {
  render() {
    return(
      <section className="feed-container">
        {this.props.children}
      </section>
    );
  }
}

export default Feed;