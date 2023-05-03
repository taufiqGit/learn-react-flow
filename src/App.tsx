import { useCallback, useEffect, useState } from 'react'
import ReactFlow, {  Background, Controls, applyNodeChanges, applyEdgeChanges, addEdge, useEdges } from 'reactflow'
import "reactflow/dist/style.css"

  const initialNodes: any = [
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 120, y: -20 },
      type: 'input',
    },
    // {
    //   id: '2',
    //   data: { label: 'World' },
    //   position: { x: 100, y: 100 },
    // },
    // {
    //   id: '3',
    //   data: { label: 'Mintzzzz' },
    //   position: { x: 330, y: 40 },
    // },
  ];

  const initialEdges: any = [
    // { id: '1-2', source: '1', target: '2' }, { id: '2-3', source: '3', target: '2'}
  ];

function App() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const edgesss = useEdges()
  useEffect(()=>{
console.log(edgesss, 'aaaa');

  }, [edgesss])

  const addNode = ()=> {
    const nodeNew = {
      id: `${+new Date()}`,
      data: { label: "ngelu"},
      position: { x: 200, y: 20}
    }
    setNodes((current: any)=> [...current, nodeNew])
  }
  const onNodeChange = useCallback((change: any)=> setNodes((nds: any)=> applyNodeChanges(change, nds)), [])
  const onEdgeChange = useCallback((change: any)=> setEdges((eds: any)=> applyEdgeChanges(change, eds)), [])

  const onConnect = useCallback((param: any)=> setEdges((eds: any)=> addEdge(param, eds)), [])

  return (
    <div style={{ width: '100%', height: '500px'}}>
      <button onClick={addNode}>Add Node</button>
      {/* <button onClick={getEdge}>Get Edge</button> */}
      <ReactFlow nodes={nodes} onNodesChange={onNodeChange} edges={edges} onEdgesChange={onEdgeChange} onConnect={onConnect}>
        <Background/>
        <Controls/>
      </ReactFlow>
    </div>
  )
}

export default App
