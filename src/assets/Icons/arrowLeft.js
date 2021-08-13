import React from "react"

const ArrowLeft = ({ color = "#34342E", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.333 1.13619L9.99967 10.2271L18.333 18.1816" stroke={color} />
      <path d="M10 1.13619L1.66667 10.2271L10 18.1816" stroke={color} />
    </svg>
  )
}

export default ArrowLeft
