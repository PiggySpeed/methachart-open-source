'use strict';
import React, { Component, PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionPrint from 'material-ui/svg-icons/action/print';
import RaisedButton from 'material-ui/RaisedButton';
import { ViewRow } from '../';

const style = {
  container: {
    flex: 'none',
    justifyContent: 'space-between',
    height: '50px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #B6B6B6'
  },
  print: {
    marginRight: '10px'
  }
};

class Footer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ViewRow style={style.container}>

        <span>
          <IconButton onClick={() => this.props.changeRoute("/")} tooltip="Log Builder" tooltipPosition="top-right">
            <ActionViewList />
          </IconButton>
          <IconButton onClick={() => this.props.changeRoute("/about")} tooltip="About" tooltipPosition="top-right">
            <ActionInfo />
          </IconButton>
        </span>

        { this.props.printErrorText !== ''
          ? <h4 style={{ color: '#f41d1b' }} className='fade-in-out-opacity'>{this.props.printErrorText}</h4>
          : null
        }

        <RaisedButton
          style={style.print}
          onClick={this.props.onPrintClick}
          label="PRINT"
          backgroundColor="#212121"
          labelColor="#FFFFFF"
        />

      </ViewRow>
    )
  }
}
Footer.propTypes = {
  printErrorText: PropTypes.string.isRequired,
  changeRoute: PropTypes.func.isRequired,
  onPrintClick: PropTypes.func.isRequired,
  onDeletePrintError: PropTypes.func.isRequired
};

export default Footer;