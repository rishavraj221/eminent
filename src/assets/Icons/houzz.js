import React from "react"

const Houzz = ({ color = "#34342E", size = "16" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.7875 16H15.1668V6.91133L4.3995 3.83067V0H0.833496V16H6.21283V10.9627H9.7875V16Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Houzz
