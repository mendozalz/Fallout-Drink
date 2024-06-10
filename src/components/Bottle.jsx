import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { GenerateInitMaterials, LoadAnimations, LoadTextures } from '../utils/Util';
import { useFrame, useThree } from '@react-three/fiber';
import gsap, {Power4} from 'gsap';
import { lerp } from 'three/src/math/MathUtils.js';

export function Bottle(props) {
  const { nodes } = useGLTF('/models/Bottle.glb');
  const scene = useThree((state)=>state.scene);
  const timeLine = gsap.timeline(
    {
      defaults: { duration: 2, ease: Power4.easeInOut}
      }
      );
      const colorsMaterial = {
        cristal: "#8c8c8c",
        soda: "#000",
        };
        const scroll = useScroll();
        const {cristalMaterial, sodaMaterial, brandMaterial} = GenerateInitMaterials();

  useLayoutEffect(()=>{
    const textures = LoadTextures(["FalloutBoy", "Classic", "Quantum", "Sunset"]);
    const animations = LoadAnimations(scene, colorsMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
    animations.map(animation=>{
      timeLine.to(
        animation.target,
        {...animation.animationsProperties},
        animation.pointTime
      )
    })
  },[]);

  useFrame(()=>{
    if (timeLine) {
      // Definir el valor de destino (por ejemplo, 0 para inicio y 1 para final)
      const targetValue = scroll.offset;

      // Obtener el valor actual (por ejemplo, el valor actual de la animación)
      const currentValue = timeLine.duration() * scroll.offset;

      // Utilizar lerp para interpolar suavemente entre el valor actual y el valor de destino
      const interpolatedValue = lerp(currentValue, targetValue, 0.1); // 0.1 es un factor de suavizado, puedes ajustarlo según tus necesidades

      // Establecer el valor interpolado en la animación o donde lo necesites
      timeLine.seek(interpolatedValue);
    }
  });

  return (
    <group name='BottleGroup' {...props} dispose={null} position={[0,-2,0]}>
      <mesh name="Bottle" castShadow receiveShadow geometry={nodes.Bottle.geometry} material={cristalMaterial} />
      <mesh name="Soda" castShadow receiveShadow geometry={nodes.Soda.geometry} material={sodaMaterial} />
      <mesh name="Brand" castShadow receiveShadow geometry={nodes.Brand.geometry} material={brandMaterial} />
      <mesh name="Cap" castShadow receiveShadow geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  )
}

useGLTF.preload('/models/Bottle.glb')
