import React from 'react';

import ReactMarkdown from 'react-markdown';

import 'github-markdown-css';

import './Readme.css';

function Readme() {

  const code = `# README.md
  ## Introduce to \`Effective-Wedding\`

  ## Quick start
  - 신랑: 김도영
  - 신부: 엄단희
  - 일시: 22.06.18 12:20
  - 장소: 잠실 더 컨벤션, 비스타홀

  😆😆😆😆😆😆😆😆
  https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/

  ## How to run
  `
  
  return (
    <div className='readme markdown-body'>
      <ReactMarkdown children={code}/>
    </div>
  );
};

export default Readme;
