import React from "react"

const Instagram = ({ color = "#34342E", size = "16" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0H4C1.8002 0 0 1.79941 0 4V12C0 14.1998 1.8002 16 4 16H12C14.1998 16 16 14.1998 16 12V4C16 1.79941 14.1998 0 12 0ZM8 11.3332C6.15879 11.3332 4.6666 9.84039 4.6666 8C4.6666 6.15879 6.15879 4.6666 8 4.6666C9.84039 4.6666 11.3334 6.15879 11.3334 8C11.3334 9.84039 9.84039 11.3332 8 11.3332ZM12.3334 4.6666C11.7806 4.6666 11.3334 4.21879 11.3334 3.6666C11.3334 3.11441 11.7806 2.6666 12.3334 2.6666C12.8862 2.6666 13.3334 3.11441 13.3334 3.6666C13.3334 4.21879 12.8862 4.6666 12.3334 4.6666Z"
        fill={color}
      />
    </svg>
  )
}

export default Instagram
