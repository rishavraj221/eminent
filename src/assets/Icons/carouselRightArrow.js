import React from "react"

const CarouselRightArrow = ({ color = "#34342E", size = "104" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle cx="52" cy="44" r="36" fill="white" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.1357 36.4697C49.4286 36.1768 49.9035 36.1768 50.1963 36.4697L57.1963 43.4697C57.337 43.6103 57.416 43.8011 57.416 44C57.416 44.1989 57.337 44.3897 57.1963 44.5303L50.1963 51.5303C49.9035 51.8232 49.4286 51.8232 49.1357 51.5303C48.8428 51.2374 48.8428 50.7626 49.1357 50.4697L55.6054 44L49.1357 37.5303C48.8428 37.2374 48.8428 36.7626 49.1357 36.4697Z"
        fill={color}
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.172085 0 0 0 0 0.20938 0 0 0 0 0.341609 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default CarouselRightArrow
