import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BigPicture from 'bigpicture';

export default class BPImage extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };

  zoomHandle = () => {
    BigPicture({
      el: this.link,
      imgSrc: this.props.src,
    });
  };

  render() {
    return (
      <div
        className="bigpicture link picture"
        onClick={ this.zoomHandle }
        ref={ (node) => { this.link = node } }
        caption={ this.props.caption }
        style={{ display: 'inline-block' }}
      >
        { this.props.children }
      </div>
    );
  }
}
