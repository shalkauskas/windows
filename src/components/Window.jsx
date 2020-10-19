import React from 'react';

function Window(props) {
  return (
    <div
      class="window"
      style={{
        display: props.showWindow,
        width: props.windowWidth,
        height: props.windowHeight,
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div class="title-bar">
        <div class="title-bar-text">{props.windowTitle}</div>
        <div class="title-bar-controls">
          <button
            onClick={props.onHideWindow}
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div class="window-body">
        <p>
          {props.windowContent}
          {props.errorMessage}
        </p>
      </div>
    </div>
  );
}

export default Window;
