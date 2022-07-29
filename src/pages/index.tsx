import * as React from "react"
import { TwicImg } from "@twicpics/components/react";

// styles
const main = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "1em"
}



// markup
const IndexPage = () => {
  return (
    <main style={main}>
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" placeholder="preview"/>
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" ratio="4/3"/>
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" preTransform="flip=x"/>
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" preTransform="turn=left"/>
        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" preTransform="flip=x/turn=left"/>
    </main>
  )
}

export default IndexPage
