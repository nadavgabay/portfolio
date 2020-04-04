import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 6,
  pages: 7,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "INX Limited",
      image: "/INX5.png",
      aspect: 1.51,
      text: "Full Stack developer. Been the 3'rd developer in the company.",
      years: "2020-Today",
      link: "inx"
    },
    {
      offset: 2,
      factor: 2.0,
      header: "TradAir",
      image: "/tnet2.png",
      aspect: 1.5,
      text:
        "Full Stack Team Leader, and senior Front End developer.",
      years: "2017-2020",
      link: "tradair"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Duda",
      image: "/duda.png",
      aspect: 2.0037,
      text:
        "Full Stack developer, focused on the Front End side. And also a automation developer.",
      years: "2013-2017",
      link: "duda"
    },
    {
      offset: 4,
      factor: 2.0,
      header: "8200 Unit",
      image: "/8200.jpg",
      aspect: 1.665,
      text:
        "Backend developer, and Sigint specialist",
      years: "2007-2013",
      link: "8200"
    },
    
  ],
  stripes: [
    { offset: 0, color: "#fff", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  top: createRef()
}

export default state
