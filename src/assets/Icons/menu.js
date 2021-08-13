import React from "react"

const Menu = ({ color = "#34342E", size = "15" }) => {
  return (
    <svg
      width={2.4 * size}
      height={size}
      viewBox="0 0 36 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="1" fill={color} />
      <rect y="14" width="36" height="1" fill={color} />
      <rect y="7" width="24" height="1" fill={color} />
    </svg>
  )
}

export default Menu
