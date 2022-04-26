import React, { useState } from 'react';

import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

function TerminalWindow() {
  const [terminalLineData] = useState([
    {type: LineType.Output, value: 'When: 22.06.18'},
    {type: LineType.Output, value: 'WHERE: 잠실 더 컨벤션, 비스타홀'},
  ]);

  return (
    <div className="introduce">
      <Terminal name='Marry DY and DH'
          colorMode={ ColorMode.Light }
          lineData={ terminalLineData }
          onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }
      />
    </div>
  );
}

export default TerminalWindow;
