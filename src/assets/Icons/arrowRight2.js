import React from "react"

const ArrowRight = ({ color = "#34342E", size = "24" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75L5 12.75C4.5858 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.5858 11.25 5 11.25L17.1893 11.25L12.4697 6.5303C12.1768 6.2374 12.1768 5.7626 12.4697 5.4697C12.7626 5.1768 13.2374 5.1768 13.5303 5.4697L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowRight
