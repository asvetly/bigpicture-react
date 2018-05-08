(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('bigpicture')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'bigpicture'], factory) :
  (factory((global.Example = {}),global.React,global.PropTypes,global.BigPicture));
}(this, (function (exports,React,PropTypes,BigPicture) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  BigPicture = BigPicture && BigPicture.hasOwnProperty('default') ? BigPicture['default'] : BigPicture;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var BPImage = function (_PureComponent) {
    inherits(BPImage, _PureComponent);

    function BPImage() {
      classCallCheck(this, BPImage);

      var _this = possibleConstructorReturn(this, (BPImage.__proto__ || Object.getPrototypeOf(BPImage)).call(this));

      _this.zoomHandle = function () {
        BigPicture({
          el: _this.linkRef,
          imgSrc: _this.props.src
        });
      };

      _this.linkRef = React__default.createRef();
      return _this;
    }

    createClass(BPImage, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          {
            className: 'bigpicture link picture',
            onClick: this.zoomHandle,
            ref: this.linkRef,
            title: this.props.caption,
            style: { display: 'inline-block' }
          },
          this.props.children
        );
      }
    }]);
    return BPImage;
  }(React.PureComponent);

  BPImage.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string
  };

  var BPVideo = function (_PureComponent) {
    inherits(BPVideo, _PureComponent);

    function BPVideo() {
      classCallCheck(this, BPVideo);

      var _this = possibleConstructorReturn(this, (BPVideo.__proto__ || Object.getPrototypeOf(BPVideo)).call(this));

      _this.zoomHandle = function () {
        BigPicture({
          el: _this.linkRef,
          vidSrc: _this.props.src
        });
      };

      _this.linkRef = React__default.createRef();
      return _this;
    }

    createClass(BPVideo, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          {
            className: 'bigpicture link video',
            onClick: this.zoomHandle,
            ref: this.linkRef,
            title: this.props.caption,
            style: { display: 'inline-block' }
          },
          this.props.children
        );
      }
    }]);
    return BPVideo;
  }(React.PureComponent);

  BPVideo.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string
  };

  var BPVimeo = function (_PureComponent) {
    inherits(BPVimeo, _PureComponent);

    function BPVimeo() {
      classCallCheck(this, BPVimeo);

      var _this = possibleConstructorReturn(this, (BPVimeo.__proto__ || Object.getPrototypeOf(BPVimeo)).call(this));

      _this.zoomHandle = function () {
        BigPicture({
          el: _this.linkRef,
          vidSrc: _this.props.src
        });
      };

      _this.linkRef = React__default.createRef();
      return _this;
    }

    createClass(BPVimeo, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          {
            className: 'bigpicture link video',
            onClick: this.zoomHandle,
            ref: this.linkRef,
            title: this.props.caption,
            style: { display: 'inline-block' }
          },
          this.props.children
        );
      }
    }]);
    return BPVimeo;
  }(React.PureComponent);

  BPVimeo.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string
  };

  var BPYoutube = function (_PureComponent) {
    inherits(BPYoutube, _PureComponent);

    function BPYoutube() {
      classCallCheck(this, BPYoutube);

      var _this = possibleConstructorReturn(this, (BPYoutube.__proto__ || Object.getPrototypeOf(BPYoutube)).call(this));

      _this.zoomHandle = function () {
        BigPicture({
          el: _this.linkRef,
          vidSrc: _this.props.src
        });
      };

      _this.linkRef = React__default.createRef();
      return _this;
    }

    createClass(BPYoutube, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          {
            className: 'bigpicture link video',
            onClick: this.zoomHandle,
            ref: this.linkRef,
            title: this.props.caption,
            style: { display: 'inline-block' }
          },
          this.props.children
        );
      }
    }]);
    return BPYoutube;
  }(React.PureComponent);

  BPYoutube.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string
  };

  exports.BPImage = BPImage;
  exports.BPVideo = BPVideo;
  exports.BPVimeo = BPVimeo;
  exports.BPYoutube = BPYoutube;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
