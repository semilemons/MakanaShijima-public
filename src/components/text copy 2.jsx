import axios from "axios";
import React, { useState, useEffect } from 'react';
const Test = () => {

  const [fileData, setFileData] = useState(null);

  const handleClick = () => {
    axios
      .get("https://api.github.com/repos/octocat/Hello-World/contents/README.md")
      .then((response) => {
        setFileData(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>ファイルを取得</button>
      {fileData && (
        <pre>{fileData}</pre>
      )}
    </div>
  );
  
}


export default Test;



