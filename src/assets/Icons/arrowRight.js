import React from "react"

const ArrowRight = ({ color = "#34342E", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66699 18.8638L10.0003 9.7729L1.66699 1.81836"
        stroke={color}
      />
      <path d="M10 18.8638L18.3333 9.7729L10 1.81836" stroke={color} />
    </svg>
  )
}

export default ArrowRight
