import React, { useState } from "react";
import axios from "axios";

const DownloadButton = (onClick, disabled) => {
  return (
    <button
      style={{ backgroundColor: "#4CAF50", color: "white" }}
      onClick={onClick}
      disabled={disabled}>
      Download
    </button>
  );
};

const URLInput = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const encodedParams = new URLSearchParams();
  encodedParams.set("url", url);

  const options = {
    method: "POST",
    url,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "34098b8d1fmsh2af458679d4a0fbp150b9fjsn1c783bf2b607",
      "X-RapidAPI-Host": "instagram-video-or-images-downloader.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    console.log("sublmit", url);
    // setTimeout(() => {
    //   console.log("sublmit");
    //   fetchVideos();
    //   setLoading(false);
    // }, 4000);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        style={{ fontSize: 32, width: "100%" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <DownloadButton onClick={handleSubmit} disabled={false} />
    </div>
  );
};

export default URLInput;
