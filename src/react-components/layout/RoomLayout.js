import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./RoomLayout.scss";
import { Toolbar } from "./Toolbar";
import { FormattedMessage } from "react-intl";
import { Button } from "../input/Button";

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
  entered,
  isVideoStreaming,
  videoStreamingUrl,
  eventPopulation,
  onStreamingShow,
  onSplitScreen,
  isSplitScreen,
  viewportRef,
  ...rest
}) {
  return (
    <div className={classNames(styles.roomLayout, { [styles.objectFocused]: objectFocused }, className)} {...rest}>
      {sidebar && <div className={classNames(styles.sidebar, sidebarClassName)}>{sidebar}</div>}
      {entered && isVideoStreaming && (
        <div
          // className={classNames(styles.modalContainer, styles.viewport)}
          className={classNames(styles.videoStreamingOverlay, styles.viewport, {
            [styles.isVideoStreaming]: isVideoStreaming,
            [styles.isSplitScreen]: isSplitScreen
          })}
        >
          <Button preset="accent2" onClick={() => onSplitScreen()}>
            {entered &&
              isVideoStreaming &&
              (isSplitScreen ? (
                <FormattedMessage id="room.video-streaming-overlay-end" defaultMessage="Hide Stream" />
              ) : (
                <FormattedMessage id="room.video-streaming-overlay" defaultMessage="Watch Stream" />
              ))}
          </Button>
        </div>
      )}
      <div className={classNames(styles.modalContainer, styles.viewport)}>{modal}</div>
      {(toolbarLeft || toolbarCenter || toolbarRight) && (
        <Toolbar
          className={classNames(styles.main, styles.toolbar, toolbarClassName)}
          left={toolbarLeft}
          center={toolbarCenter}
          right={toolbarRight}
        />
      )}
      {isSplitScreen && (
        <div
          className={classNames(styles.main, styles.viewport, styles.videoStreamingOverlay, styles.videoStreamingBox)}
        >
          {/* <iframe
            src="https://youactors-backend.flumotion.com/api/v1/player_site/?asset=737303&player=762"
            title="Eventos virtuales 3D - Rhy Marketing"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          ></iframe> */}
          <iframe
            className={classNames(styles.videoStreamingFrame)}
            src={videoStreamingUrl}
            title="description"
          ></iframe>
        </div>
      )}

      {/* <div className={classNames(styles.main, styles.peopleCount)}>{eventPopulation?.toString()}/100</div> */}

      <div
        className={classNames(
          styles.main,
          styles.viewport,
          { [styles.streaming]: streaming, [styles.viewportSplit]: isSplitScreen },
          viewportClassName
        )}
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
  videoStreamingUrl: PropTypes.string,
  viewportRef: PropTypes.any
};
