// @flow

/**
 * Module dependencies.
 */

import { iframeResizer } from 'iframe-resizer';
import React, { Component } from 'react';

/**
 * `Props` type.
 */

type Props = {
  className?: string,
  remarkboxKey: string,
  style?: Object,
  threadFragment?: string,
  threadUri: string,
};

/**
 * `Remarkbox` component.
 */

class Remarkbox extends Component<Props> {

  /**
   * Iframe reference.
   */

  iframe: ?HTMLIFrameElement = null;

  /**
   * On iframe reference.
   */

  onRef = (iframe: ?HTMLIFrameElement) => {
    this.iframe = iframe;
  };

  /**
   * Get Remarkbox URL.
   */

  getRemarkboxUrl(): string {
    const { remarkboxKey, threadUri } = this.props;

    return `https://my.remarkbox.com/embed?rb_owner_key=${remarkboxKey}&thread_uri=${encodeURIComponent(threadUri)}`;
  }

  /**
   * Component did mount.
   */

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

  /**
   * Render.
   */

  render() {
    const { className, style } = this.props;

    return (
      <iframe
        className={className}
        frameBorder={0}
        ref={this.onRef}
        scrolling={'no'}
        src={this.getRemarkboxUrl()}
        style={style}
        tabIndex={0}
        title={'Remarkbox'}
      />
    );
  }

}

/**
 * Export `Remarkbox` component.
 */

export default Remarkbox;
