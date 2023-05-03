import { memo } from "react";
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }: any)=>{
    return (
        <>
        <Handle
            type="target"
            position={Position.Left}
            style={{ background: '#555'}}
            onConnect={(params: any)=> console.log('handle onConnect', params)}
            isConnectable={isConnectable}
            
        />
              <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input type="color" onChange={data.onChange} defaultValue={data.color}/>
        </>
    )
})