import React from "react"

const CarouselLeftArrow = ({ color = "#34342E", size = "104" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle r="36" transform="matrix(-1 0 0 1 52 44)" fill="white" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.8643 36.4697C54.5714 36.1768 54.0965 36.1768 53.8037 36.4697L46.8037 43.4697C46.663 43.6103 46.584 43.8011 46.584 44C46.584 44.1989 46.663 44.3897 46.8037 44.5303L53.8037 51.5303C54.0965 51.8232 54.5714 51.8232 54.8643 51.5303C55.1572 51.2374 55.1572 50.7626 54.8643 50.4697L48.3946 44L54.8643 37.5303C55.1572 37.2374 55.1572 36.7626 54.8643 36.4697Z"
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

export default CarouselLeftArrow
