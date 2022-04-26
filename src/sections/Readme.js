import React from 'react';

import ReactMarkdown from 'react-markdown';

import 'github-markdown-css';

import './Readme.css';

function Readme() {

  const code = `# \`Effective-Wedding\`
  ## TL; DR;
  - 🤵 신랑: 김도영
  - 👰 신부: 엄단희
  - ⌚ 일시: 22.06.18 12:20
  - 💒 장소: 잠실 더 컨벤션, 비스타홀

  ## Introduction 👫
  \`\`\`
  각자 열심히 커밋하던 날들을 지나
  컨플릭이 일어나도 잘 리졸브 하며,
  서로 다른 두 브랜치가 머지하려고 합니다.
  
  쉽게 리버트 하지 않도록 
  소중한 인연들을 모시려고 하니
  자리를 빛내주심에 감사드립니다.
  \`\`\`
  `
  
  return (
    <div className='readme markdown-body'>
      <ReactMarkdown children={code}/>
    </div>
  );
};

export default Readme;
