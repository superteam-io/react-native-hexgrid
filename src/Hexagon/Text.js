import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Svg } from 'expo';

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
class Text extends Component {
  static propTypes = {
    children: PropTypes.string,
    x: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    y: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string
  };

  render() {
    const { children, x, y, className } = this.props;
    return (
      <Svg.Text x={x || 0} y={y ? y : '0.3em'} className={className} textAnchor="middle">{children}</Svg.Text>
    );
  }
}

export default Text;
