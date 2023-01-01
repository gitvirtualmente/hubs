import React, { useRef } from "react";
import PropTypes from "prop-types";
import { RoomLayout } from "../layout/RoomLayout";
import { useResizeViewport } from "./useResizeViewport";

export function RoomLayoutContainer({
  store,
  scene,
  isVideoStreaming,
  videoStreamingUrl,
  entered,
  isSplitScreen,
  onStreamingShow,
  eventPopulation,
  onSplitScreen,
  ...rest
}) {
  const viewportRef = useRef();

  useResizeViewport(viewportRef, store, scene);
  // useStreamingOverlay(viewportRef, store);

  return (
    <RoomLayout
      entered={entered}
      isVideoStreaming={isVideoStreaming}
      videoStreamingUrl={videoStreamingUrl}
      onStreamingShow={onStreamingShow}
      isSplitScreen={isSplitScreen}
      onSplitScreen={onSplitScreen}
      eventPopulation={eventPopulation}
      viewportRef={viewportRef}
      {...rest}
    />
  );
}

RoomLayoutContainer.propTypes = {
  store: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired
};
