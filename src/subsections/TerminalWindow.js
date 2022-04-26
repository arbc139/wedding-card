import React, { useState } from 'react';

import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

function TerminalWindow() {
  const [terminalLineData] = useState([
    {type: LineType.Input, value: 'git commit -m "[Marry]"'},
    {type: LineType.Output, value: '[master 809719d] Implements readme, introduce page.'},
    {type: LineType.Output, value: 'Date: Tue Apr 26 23:29:42 2022 +0900'},
    {type: LineType.Output, value: '9 files changed, 2206 insertions(+), 69 deletions(-)'},
    {type: LineType.Output, value: 'create mode 100644 src/sections/Introduce.css'},
    {type: LineType.Output, value: 'create mode 100644 src/sections/Readme.css'},
    {type: LineType.Output, value: 'create mode 100644 src/sections/Readme.js'},
  ]);

  return (
    <div className="introduce">
      <Terminal name='~/Repos/invitation/.git/COMMIT_EDITMSG'
          colorMode={ ColorMode.Light }
          lineData={ terminalLineData }
          onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }
      />
    </div>
  );
}

export default TerminalWindow;
