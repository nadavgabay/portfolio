// import React, { useEffect, useRef, createRef } from "react"
// import PropTypes from "prop-types"
// // import Img from "gatsby-image"
// import anime from "animejs"
// import styles from "./skills.css.js"

// function AnimateItem({ type, title, image }) {
//   const imgArray = Array(4).fill("")
//   const ref = useRef(null)
//   const imageRef = useRef()
//   const imagesRef = useRef(imgArray.map(createRef))

//   useEffect(() => {
//     /**
//      * Run the animation on the child tags
//      *
//      * @param {*} e
//      * @param {*} callback "Animation to run"
//      * @param {boolean} [mEnter=true]
//      */
//     function animateItems(e, callback, mEnter = true) {
//       const { target } = e
//       if (mEnter) {
//         target.style.zIndex = 2
//       }
//       if (type === "static") {
//         for (let item of imagesRef.current) {
//           callback(item.current)
//         }
//       } else {
//         callback(imageRef.current)
//       }
//     }

//     function handleMouseEnter(e) {
//       // Set animation
//       animateItems(e, item => {
//         anime.remove(item)
//         type === "static"
//           ? anime({
//               targets: item,
//               translateX: () => {
//                 return anime.random(-60, 60)
//               },
//               translateY: () => {
//                 return anime.random(-60, 60)
//               },
//               rotateZ: () => {
//                 return anime.random(-10, 10)
//               },
//               duration: 1000,
//               easing: "cubicBezier(.2, 1, .2, 1)",
//               delay: 20,
//             })
//           : anime({
//               targets: item,
//               translateX: -50,
//               translateY: -50,
//             })
//       })
//     }

//     function handleMouseLeave(e) {
//       animateItems(
//         e,
//         item => {
//           anime.remove(item)
//           anime({
//             targets: item,
//             translateX: 0,
//             translateY: 0,
//             rotateZ: 0,
//             duration: 400,
//             easing:
//               type === "static" ? "easeInOutExpo" : "easeOutElastic(1, .5)",
//             complete: () => {
//               e.target.style.zIndex = 1
//             },
//           })
//         },
//         false
//       )
//     }

//     const node = ref.current
//     if (node) {
//       node.addEventListener("mouseenter", handleMouseEnter)
//       node.addEventListener("mouseleave", handleMouseLeave)

//       return () => {
//         node.removeEventListener("mouseenter", handleMouseEnter)
//         node.removeEventListener("mouseleave", handleMouseLeave)
//       }
//     }
//   }, [type])

//   return (
//     <li
//       css={type === "static" ? styles.gridItemStatic : styles.gridItem}
//       ref={ref}
//     >
//       <div css={styles.gridImgContainer}>
//         {type === "static" ? (
//           imgArray.map((_item, index) => (
//             <div
//               css={styles.gridImgStatic}
//               key={`anImg${index}`}
//               ref={imagesRef.current[index]}
//               style={
//                 index !== 0
//                   ? {
//                       position: "absolute",
//                       overflow: "visible",
//                     }
//                   : {
//                       overflow: "visible",
//                     }
//               }
//             >
//               <img src={"http://localhost:8000/static/7bc286d7d891a1ce709592e7219361d7/497c6/react.png"} alt={title} />
//             </div>
//           ))
//         ) : (
//           <>
//             <div css={styles.gridImg} ref={imageRef}>
//               <img
//                 src={"http://localhost:8000/static/7bc286d7d891a1ce709592e7219361d7/497c6/react.png"}
//                 style={{
//                   overflow: "visible",
//                 }}
//                 alt={title}
//               />
//             </div>
//             <span css={styles.gridTitle}>{title}</span>
//           </>
//         )}
//       </div>
//     </li>
//   )
// }
// AnimateItem.propTypes = {
//   type: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   image: PropTypes.object.isRequired,
// }

// export default AnimateItem



import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

export default Card
