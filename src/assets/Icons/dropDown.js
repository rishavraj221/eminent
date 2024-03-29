import React from "react"

const DropDown = ({ color = "#34342E", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L10 11.4393L14.4697 6.96967C14.7626 6.67678 15.2374 6.67678 15.5303 6.96967C15.8232 7.26256 15.8232 7.73744 15.5303 8.03033L10.5303 13.0303C10.2374 13.3232 9.76256 13.3232 9.46967 13.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967Z"
        fill={color}
      />
    </svg>
  )
}

export default DropDown
