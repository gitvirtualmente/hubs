import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./RoomLayout.scss";
import { Toolbar } from "./Toolbar";
import { FormattedMessage } from "react-intl";

export function RoomLayout({
  className,
  viewportClassName,
  sidebar,
  sidebarClassName,
  toolbarLeft,
  toolbarCenter,
  toolbarRight,
  toolbarClassName,
  modal,
  viewport,
  objectFocused,
  streaming,
  isVideoStreaming,
  onStreamingShow,
  onSplitScreen,
  isSplitScreen,
  viewportRef,
  ...rest
}) {
  return (
    <div className={classNames(styles.roomLayout, { [styles.objectFocused]: objectFocused }, className)} {...rest}>
      {sidebar && <div className={classNames(styles.sidebar, sidebarClassName)}>{sidebar}</div>}
      {
        <div
          // className={classNames(styles.modalContainer, styles.viewport)}
          className={classNames(styles.videoStreamingOverlay, styles.viewport, {
            [styles.isVideoStreaming]: isVideoStreaming
          })}
        >
          <button
            onClick={() =>
              // alert("om namo narayananaya ; Om shri chinmaya Sadgurave namah; om Namah Shivay; Om Ganaganapte namah")
              onSplitScreen()
            }
          >
            {isVideoStreaming && <FormattedMessage id="room.video-streaming-overlay" defaultMessage="Watch Stream" />}
          </button>
        </div>
      }
      <div className={classNames(styles.modalContainer, styles.viewport)}>{modal}</div>
      {(toolbarLeft || toolbarCenter || toolbarRight) && (
        <Toolbar
          className={classNames(styles.main, styles.toolbar, toolbarClassName)}
          left={toolbarLeft}
          center={toolbarCenter}
          right={toolbarRight}
        />
      )}
      <div
        className={classNames(styles.main, styles.viewport, { [styles.streaming]: streaming , [styles.viewportSplit]: isSplitScreen}, viewportClassName)}
        ref={viewportRef}
      >
        {viewport}
      </div>
    </div>
  );
}

RoomLayout.propTypes = {
  className: PropTypes.string,
  viewportClassName: PropTypes.string,
  sidebar: PropTypes.node,
  sidebarClassName: PropTypes.string,
  toolbarLeft: PropTypes.node,
  toolbarCenter: PropTypes.node,
  toolbarRight: PropTypes.node,
  toolbarClassName: PropTypes.string,
  modal: PropTypes.node,
  viewport: PropTypes.node,
  objectFocused: PropTypes.bool,
  streaming: PropTypes.bool,
  isVideoStreaming: PropTypes.bool,
  viewportRef: PropTypes.any
};
