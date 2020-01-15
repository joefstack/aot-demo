import React from "react";

import JSMpeg from "@cycjimmy/jsmpeg-player";

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamWindow: null
    };
  }
  componentDidMount() {
    let videoUrl = "ws://localhost:9999";
    let videoWrapper = document.getElementById("videoWrapper");
    console.log(videoWrapper);
    const options = {
      autoplay: true
    };
    new JSMpeg.VideoElement(videoWrapper, videoUrl, options);
  }

  handleData = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        {/* <video id="video"></video> */}
        <div id="videoWrapper" style={{ width: "500px", height: "500px" }} />
      </div>
    );
  }
}

export default Stream;
