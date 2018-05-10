import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BigPicture from 'bigpicture';

export default class BPYoutube extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };

  zoomHandle = () => {
    BigPicture({
      el: this.link,
      vidSrc: this.props.src,
    });
  }

  render() {
    return (
      <div
        className="bigpicture link video"
        onClick={ this.zoomHandle }
        ref={ (node) => { this.link = node } }
        caption={ this.props.caption }
        style={{ display: 'inline-block' }}
      >
        { this.props.children }
      </div>
    )
  }
}