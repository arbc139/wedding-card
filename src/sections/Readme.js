import React from 'react';

import ReactMarkdown from 'react-markdown';

import 'github-markdown-css';

import './Readme.css';

function Readme() {

  const code = `# \`Effective-Wedding\`
  ## TL; DR;
  - π€΅ μ λ: κΉλμ
  - π° μ λΆ: μλ¨ν¬
  - β μΌμ: 22.06.18 12:20
  - π μ₯μ: μ μ€ λ μ»¨λ²€μ, λΉμ€νν

  ## Introduction π«
  \`\`\`
  κ°μ μ΄μ¬ν μ»€λ°νλ λ λ€μ μ§λ
  μ»¨νλ¦­μ΄ μΌμ΄λλ μ λ¦¬μ‘ΈλΈ νλ©°,
  μλ‘ λ€λ₯Έ λ λΈλμΉκ° λ¨Έμ§νλ €κ³  ν©λλ€.
  
  μ½κ² λ¦¬λ²νΈ νμ§ μλλ‘ 
  μμ€ν μΈμ°λ€μ λͺ¨μλ €κ³  νλ
  μλ¦¬λ₯Ό λΉλ΄μ£Όμ¬μ κ°μ¬λλ¦½λλ€.
  \`\`\`
  `
  
  return (
    <div className='readme markdown-body'>
      <ReactMarkdown children={code}/>
    </div>
  );
};

export default Readme;
