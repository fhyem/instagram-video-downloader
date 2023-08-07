import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

const DownloadButton = ({ onClick, disabled }) => (
  <button
    style={{
      width: "22%",
      height: "50px",
      backgroundColor: "#0070f3",
      color: "white",
      borderColor: "#0070f3",
    }}
    onClick={onClick}
    disabled={disabled}>
    Download
  </button>
);

export default function Home() {
  const [url, setUrl] = useState("");

  const encodedParams = new URLSearchParams();
  encodedParams.set("url", url);

  const options = {
    method: "POST",
    url: 'https://instagram-video-or-images-downloader.p.rapidapi.com/',
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "34098b8d1fmsh2af458679d4a0fbp150b9fjsn1c783bf2b607",
      "X-RapidAPI-Host": "instagram-video-or-images-downloader.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.request(options);
      console.log("response", response);
      const response = await axios.request(options);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = () => {
    fetchVideos();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Download <p>Instagram Videos!</p>
        </h1>

        <div
          style={{
            backgroundColor: "red",
            width: "800px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <input
            style={{ width: "78%", height: "50px" }}
            placeholder="Please paste the video URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <DownloadButton onClick={handleSubmit} disabled={false} />
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
