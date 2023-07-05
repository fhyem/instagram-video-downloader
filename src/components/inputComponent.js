import React, { useState } from "react";

const DownloadButton = ({ onClick, disabled }) => (
  <button
    style={{ backgroundColor: "#4CAF50", color: "white" }}
    onClick={onClick}
    disabled={disabled}>
    Download
  </button>
);

const URLInput = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setTimeout(() => {
      console.log("sublmit");
      setLoading(false);
    }, 4000);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        style={{ fontSize: 32, width: "100%" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <DownloadButton onClick={() => handleSubmit(url)} disabled={loading} />
    </div>
  );
};

export default URLInput;
