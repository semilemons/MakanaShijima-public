import axios from "axios";
import React, { useState, useEffect } from 'react';

const Test = () => {
  const [fileData, setFileData] = useState(null);
  const currentOrigin = window.location.origin;


  const handleClick = () => {
    axios
      .get("https://github.com/semilemons/ShijimaMakana-Publish/blob/makana/README.md")
      .then((response) => {
        const content = response.data.content;
        const decodedContent = atob(content.replace(/\s/g, '')); // Base64デコード
        setFileData(decodedContent);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {currentOrigin}
      <button onClick={handleClick}>ファイルを取得</button>
      {fileData && (
        <pre>{fileData}</pre>
      )}
    </div>
  );
};

export default Test;



