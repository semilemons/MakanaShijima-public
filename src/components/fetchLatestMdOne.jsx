import axios from "axios";
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const baseApiUrl = `https://api.github.com/repos/semilemons/ShijimaMakana-Publish/contents/markdown-pages`;

const FetchLatestMdOne = () => {
  const [fileData, setFileData] = useState(null);

  // GitHubリポジトリ内のファイルを再帰的に取得する関数
  const fetchFiles = async (url) => {
    let allMdFiles = [];
    const queue = [url];

    while (queue.length > 0) {
      const currentUrl = queue.shift();
      const response = await axios.get(currentUrl);
      const files = response.data;

      for (const file of files) {
        if (file.type === 'file' && file.name.endsWith('.md')) {
          allMdFiles.push(file);
        } else if (file.type === 'dir') {
          queue.push(file.url); // サブディレクトリをキューに追加
        }
      }
    }

    return allMdFiles;
  };

  useEffect(() => {
    const cachedFile = localStorage.getItem('cachedFile');

    fetchFiles(baseApiUrl)
      .then(mdFiles => {
        if (mdFiles.length === 0) {
          throw new Error('Markdownファイルが見つかりません。');
        }
        const latestFile = mdFiles.reduce((a, b) => (a.name > b.name ? a : b));

        if (cachedFile && JSON.parse(cachedFile).name === latestFile.name) {
          // キャッシュされたファイルを使用
          setFileData(JSON.parse(cachedFile).data);
          console.log('Data is from the cache');
        } else {
          // 新しいファイルを取得してキャッシュを更新
          return axios.get(latestFile.download_url).then(response => {
            const fileData = response.data;
            setFileData(fileData);
            localStorage.setItem('cachedFile', JSON.stringify({ name: latestFile.name, data: fileData }));
            console.log('Data is from Server.')
          });
        }
      })
      .catch(error => {
        console.error(error);
        // エラーハンドリング
      });
  }, []);

  return (
    <div>
      {fileData ? (
        <ReactMarkdown>{fileData}</ReactMarkdown>
      ) : (
        <p>データを読み込んでいます...</p> 
      )}
    </div>
  );
};

export default FetchLatestMdOne;