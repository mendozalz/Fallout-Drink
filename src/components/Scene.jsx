import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Bottle } from './Bottle'

const Scene = () => {
  return (
    <div id='scene' className='container-3d canvas'>
        <Canvas camera={{fov:35, position:[0,2,10]}}>
        <ambientLight intensity={0.8} color={0xffffff}/>
        {/* <OrbitControls target={[0,2,0]} enableZoom={false} enableRotate={false}/> */}
        <Environment files={"./models/snowy_park_01_1k.hdr"} blur={0.5}/>
        <ScrollControls pages={8} damping={0.5}>
            <Bottle/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Scene