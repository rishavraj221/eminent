import React from "react"

const Dash = ({ color = "#C19A5B", width = "44" }) => {
  return (
    <svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M0 0.5H${width}`} stroke={color} />
    </svg>
  )
}

export default Dash
