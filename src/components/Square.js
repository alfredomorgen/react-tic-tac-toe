import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

export default class Square extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.node.isRequired,
  };

  render() {
    const { onClick, value } = this.props;
    return (
      <button className={'square'} onClick={onClick}>
        {value}
      </button>
    );
  }
}
