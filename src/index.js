import { iframeResizer } from 'iframe-resizer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

function getRemarkboxUrl(remarkboxKey, threadUri) {
  return `https://my.remarkbox.com/embed?rb_owner_key=${remarkboxKey}&thread_uri=${encodeURIComponent(threadUri)}`;
}

class Remarkbox extends Component {

  static propTypes = {
    className: PropTypes.string,
    remarkboxKey: PropTypes.string.isRequired,
    style: PropTypes.object,
    threadFragment: PropTypes.string,
    threadUri: PropTypes.string.isRequired,
  };

  iframe = null;

  onRef = iframe => {
    this.iframe = iframe;
  };

  componentDidMount() {
    if (!this.iframe) {
      return;
    }

    const { threadFragment } = this.props;

    iframeResizer({
      checkOrigin: ['https://my.remarkbox.com'],
      inPageLinks: true,
      initCallback: event => {
        if (threadFragment) {
          event.iFrameResizer.moveToAnchor(threadFragment);
        }
      },
    }, this.iframe);
  }

  render() {
    const { className, style } = this.props;

    return (
      <iframe
        className={className}
        frameBorder={0}
        ref={this.onRef}
        scrolling={'no'}
        src={getRemarkboxUrl()}
        style={style}
        tabIndex={0}
        title={'Remarkbox'}
      />
    );
  }

}

export default Remarkbox;
