import React from "react"

const Search = ({ color = "#34342E", size = "20" }) => {
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
        d="M3.25 9.16667C3.25 5.89898 5.89898 3.25 9.16667 3.25C12.4344 3.25 15.0833 5.89898 15.0833 9.16667C15.0833 12.4344 12.4344 15.0833 9.16667 15.0833C5.89898 15.0833 3.25 12.4344 3.25 9.16667ZM9.16667 1.75C5.07055 1.75 1.75 5.07055 1.75 9.16667C1.75 13.2628 5.07055 16.5833 9.16667 16.5833C10.9446 16.5833 12.5764 15.9577 13.854 14.9147L16.1363 17.197C16.4292 17.4899 16.9041 17.4899 17.197 17.197C17.4899 16.9041 17.4899 16.4292 17.197 16.1363L14.9147 13.854C15.9577 12.5764 16.5833 10.9446 16.5833 9.16667C16.5833 5.07055 13.2628 1.75 9.16667 1.75Z"
        fill={color}
      />
    </svg>
  )
}

export default Search
