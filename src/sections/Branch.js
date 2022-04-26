import { useState } from 'react';

import _ from 'lodash';

import ReactFlow from 'react-flow-renderer';

import './Branch.css';

const initialNodes = [
  // Doyoung
  {
    id: 'dy-1',
    type: 'input',
    data: { label: '[DY-9309] Create Doyoung' },
    position: { x: 0, y: 25 },
  },
  {
    id: 'dy-2',
    data: { label: '[DY-1202] Move to Seoul' },
    position: { x: 0, y: 125 },
  },
  {
    id: 'dy-3',
    data: { label: '[DY-1601] Join to Skelterlabs' },
    position: { x: 0, y: 250 },
  },
  {
    id: 'dy-4',
    data: { label: '[DY-1707] Start Overwatch' },
    position: { x: 0, y: 375 },
  },
  {
    id: 'dy-5',
    data: { label: '[DY-1709] Start dating with Danhee' },
    position: { x: 0, y: 475 },
  },
  {
    id: 'dy-6',
    data: { label: '[DY-2002] Join to Coupang' },
    position: { x: 0, y: 575 },
  },
  // Danhee
  {
    id: 'dh-1',
    type: 'input',
    data: { label: '[DH-9409] Create Danhee' },
    position: { x: 200, y: 75 },
  },
  {
    id: 'dh-2',
    data: { label: '[DH-1302] Move to Seoul' },
    position: { x: 200, y: 175 },
  },
  {
    id: 'dh-3',
    data: { label: '[DH-1607] Join to Skelterlabs' },
    position: { x: 200, y: 275 },
  },
  {
    id: 'dh-4',
    data: { label: '[DH-1707] Start Overwatch' },
    position: { x: 200, y: 375 },
  },
  {
    id: 'dh-5',
    data: { label: '[DH-1709] Start dating with Doyoung' },
    position: { x: 200, y: 475 },
  },
  {
    id: 'dh-6',
    data: { label: '[DH-2005] Join to Coupang' },
    position: { x: 200, y: 600 },
  },
  {
    id: 'merge',
    type: 'output',
    data: { label: "Merge branch 'Danhee' into 'Doyoung'" },
    position: {
      x: (0 + 200) / 2,
      y: 800,
    },
  }
];

const initialEdges = [
  { id: 'dy-e1', source: 'dy-1', target: 'dy-2' },
  { id: 'dy-e2', source: 'dy-2', target: 'dy-3' },
  { id: 'dy-e3', source: 'dy-3', target: 'dy-4' },
  { id: 'dy-e4', source: 'dy-4', target: 'dy-5' },
  { id: 'dy-e5', source: 'dy-5', target: 'dy-6' },
  { id: 'dh-e1', source: 'dh-1', target: 'dh-2' },
  { id: 'dh-e2', source: 'dh-2', target: 'dh-3' },
  { id: 'dh-e3', source: 'dh-3', target: 'dh-4' },
  { id: 'dh-e4', source: 'dh-4', target: 'dh-5' },
  { id: 'dh-e5', source: 'dh-5', target: 'dh-6' },
  { id: 'merge-e1', source: 'dy-6', target: 'merge', animated: true },
  { id: 'merge-e2', source: 'dh-6', target: 'merge', animated: true },
];

function Branch() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="branch">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        minZoom='1'
        maxZoom='1'
        defaultZoom='1'
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
      >
      </ReactFlow>
    </div>
  );
}

export default Branch;
