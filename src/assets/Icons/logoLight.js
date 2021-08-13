import React from "react"

const LogoLight = ({ size = "60" }) => {
  return (
    <svg
      width={2.057 * size}
      height={size}
      viewBox="0 0 144 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="144" height="70" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0"
            transform="translate(0 -0.00634308) scale(0.0019305 0.00397132)"
          />
        </pattern>
        <image
          id="image0"
          width="518"
          height="255"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default LogoLight
