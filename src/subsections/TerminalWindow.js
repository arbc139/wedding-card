import React from 'react';

import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

function TerminalWindow() {
  const terminalLineData = [
    {type: LineType.Input, value: 'git checkout -b merge/wedding origin/danhee'},
    {type: LineType.Input, value: 'git merge --no-ff origin/doyoung'},
    {type: LineType.Output, value: "Merge made by the 'recursive' strategy"},
    {type: LineType.Output, value: '  when.txt | 1 +'},
    {type: LineType.Output, value: '  where.txt | 2 +'},
    {type: LineType.Output, value: '  2 files changed, 3 insertion(+)'},
    {type: LineType.Output, value: '  create mode 102736 when.txt'},
    {type: LineType.Output, value: '  create mode 100644 where.txt'},
    {type: LineType.Input, value: 'cat when.txt'},
    {type: LineType.Output, value: '2022-06-18T12:20:00+09:00'},
    {type: LineType.Input, value: 'cat where.txt'},
    {type: LineType.Output, value: 'The Convention - Vista hall'},
    {type: LineType.Output, value: '319, Olympic-ro, Songpa-gu, Seoul, Republic of Korea'},
    // {type: LineType.Input, value: 'git commit -m "[Marry]"'},
    // {type: LineType.Output, value: '[master 809719d] Implements readme, introduce page.'},
    // {type: LineType.Output, value: 'Date: Tue Apr 26 23:29:42 2022 +0900'},
    // {type: LineType.Output, value: '9 files changed, 2206 insertions(+), 69 deletions(-)'},
    // {type: LineType.Output, value: 'create mode 100644 src/sections/Introduce.css'},
    // {type: LineType.Output, value: 'create mode 100644 src/sections/Readme.css'},
    // {type: LineType.Output, value: 'create mode 100644 src/sections/Readme.js'},
  ];

  return (
    <div className="introduce">
      <Terminal name='~/Repos/wedding_card/.git/MERGE_MSG'
          colorMode={ ColorMode.Light }
          lineData={ terminalLineData }
          onInput={ _ => _ }
      />
    </div>
  );
}

export default TerminalWindow;
