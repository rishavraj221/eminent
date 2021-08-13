import React from "react"

const SliderLeft = ({ color = "white", size = "250" }) => {
  return (
    <svg
      width={0.912 * size}
      height={size}
      viewBox="0 0 228 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="103" cy="125" r="124.5" stroke={color} />
      <path
        d="M156 125.258H60M60 125.258L68 117M60 125.258L68 133"
        stroke={color}
      />
    </svg>
  )
}

export default SliderLeft
