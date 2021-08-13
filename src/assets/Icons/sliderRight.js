import React from "react"

const SliderRight = ({ color = "white", size = "250" }) => {
  return (
    <svg
      width={0.912 * size}
      height={size}
      viewBox="0 0 228 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="125" cy="125" r="124.5" stroke={color} />
      <path
        d="M72 125.258H168M168 125.258L160 117M168 125.258L160 133"
        stroke={color}
      />
    </svg>
  )
}

export default SliderRight
