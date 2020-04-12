import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text } from "../Components/ExperienceParalax/Text"
import Plane from "../Components/ExperienceParalax/Plane"
import { Block, useBlock } from "../Components/ExperienceParalax/blocks"
import state from "../Components/ExperienceParalax/store"
import "./ExperienceParalax.css"

const Startup = () => {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

const Paragraph = ({ image, index, offset, factor, header, aspect, text, years, link }) => {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#D40749" : "#2FE8C3"
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Dom
          style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
          position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
          <div tabIndex={index}>{text}</div>
          <a data-link={link} href={`/${link}`} style={{color: '#d40749', fontSize: '1.5em'}}>More details</a>
        </Dom>
        <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color="#fff" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1.2, -10]}>
            {years || (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>

          <Text left size={w * 0.08} position={[-w / 1.9, 0.6, -1]} color="#d40749">
          Work Experience
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom  center position={[null, -w * 0.13 + 0.25, -2]}>Here you can find information about my work experience, these are some companies in which I have had the privilege of working.
            {mobile ? <br /> : " "}
              <a className="frame__link" href={`#01`} />
          </Dom>
        </Block>

      </Block>
    
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
    </>
  )
}

const ExperienceParallax = () => {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop - 100)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas style={{height: '100vh', width: '100vw'}} className="canvas" concurrent pixelRatio={1} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
        
          <Content />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <>
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
          </>
        ))}
      </div>
    </>
  )
}

export default ExperienceParallax;
