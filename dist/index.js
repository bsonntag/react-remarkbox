'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _iframeResizer = require('iframe-resizer');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getRemarkboxUrl(remarkboxKey, threadUri) {
  return 'https://my.remarkbox.com/embed?rb_owner_key=' + remarkboxKey + '&thread_uri=' + encodeURIComponent(threadUri);
}

var Remarkbox = function (_Component) {
  _inherits(Remarkbox, _Component);

  function Remarkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Remarkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Remarkbox.__proto__ || Object.getPrototypeOf(Remarkbox)).call.apply(_ref, [this].concat(args))), _this), _this.iframe = null, _this.onRef = function (iframe) {
      _this.iframe = iframe;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Remarkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.iframe) {
        return;
      }

      var threadFragment = this.props.threadFragment;


      (0, _iframeResizer.iframeResizer)({
        checkOrigin: ['https://my.remarkbox.com'],
        inPageLinks: true,
        initCallback: function initCallback(event) {
          if (threadFragment) {
            event.iFrameResizer.moveToAnchor(threadFragment);
          }
        }
      }, this.iframe);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;


      return _react2.default.createElement('iframe', {
        className: className,
        frameBorder: 0,
        ref: this.onRef,
        scrolling: 'no',
        src: getRemarkboxUrl(),
        style: style,
        tabIndex: 0,
        title: 'Remarkbox'
      });
    }
  }]);

  return Remarkbox;
}(_react.Component);

Remarkbox.propTypes = {
  className: _propTypes2.default.string,
  remarkboxKey: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  threadFragment: _propTypes2.default.string,
  threadUri: _propTypes2.default.string.isRequired
};
exports.default = Remarkbox;