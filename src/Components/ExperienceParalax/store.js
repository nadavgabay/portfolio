import { createRef } from "react"

const state = {
  sections: 5,
  pages: 5,
  zoom: 50,
  paragraphs: [
    {
      offset: 1,
      factor: 1.3,
      header: "INX Limited",
      image: "/INX5.png",
      aspect: 1.51,
      text: "Full Stack developer. 3rd developer to join the company.",
      years: "2020-Today",
      link: "inx"
    },
    {
      offset: 2,
      factor: 1.75,
      header: "TradAir",
      image: "/tnet2.png",
      aspect: 1.5,
      text:
        "Full Stack Team Leader, and Senior Front End developer.",
      years: "2017-2020",
      link: "tradair"
    },
    {
      offset: 3,
      factor: 1.75,
      header: "Duda",
      image: "/duda.png",
      aspect: 1.51,
      text:
        "Full Stack developer, focused on the Front End side. And also a automation developer.",
      years: "2013-2017",
      link: "duda"
    },
    {
      offset: 4,
      factor: 1,
      header: "8200 Unit",
      image: "/8200.jpg",
      aspect: 1.965,
      text:
        "Backend developer and SIGINT specialist",
      years: "2010-2013",
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
