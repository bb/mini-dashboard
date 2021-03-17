import * as React from 'react'

function MSLogo({ size, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 339 339"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M269.252 43.641l-79.53-33.758c-56.636-24.041-122.039 2.383-146.08 59.02l-33.758 79.53c-24.04 56.637 2.383 122.039 59.02 146.08l79.53 33.758c56.637 24.041 122.039-2.383 146.08-59.02l33.758-79.53c24.041-56.637-2.383-122.039-59.02-146.08z"
          fill="url(#prefix__paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.358 44.172l41.729-17.713c36.37-15.439 53.46-17.732 71.569-16.104 18.109 1.629 34.608 8.295 48.765 19.703 14.158 11.408 24.858 24.93 40.296 61.3l17.713 41.729c15.438 36.37 17.732 53.46 16.103 71.568-1.628 18.109-8.294 34.608-19.702 48.766-11.408 14.158-24.93 24.858-61.3 40.296l-41.729 17.713c-36.37 15.438-53.46 17.732-71.569 16.103-18.109-1.628-34.608-8.294-48.765-19.702-14.158-11.408-24.858-24.93-40.296-61.3l-17.713-41.729c-15.438-36.37-17.732-53.46-16.104-71.569 1.629-18.109 8.295-34.608 19.703-48.765 11.408-14.158 24.93-24.858 61.3-40.296z"
          fill="url(#prefix__paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M213.685 113.564c25.695 0 44.744 18.828 44.744 49.395v61.357h-36.105v-55.598c0-15.283-7.31-22.593-19.271-22.593-5.538 0-11.075 2.437-16.391 8.86.221 2.658.443 5.316.443 7.974v61.357h-35.884v-55.598c0-15.283-7.531-22.593-19.271-22.593-5.538 0-10.854 2.658-16.17 9.525v68.666H79.897v-107.43h35.883v6.424c7.31-6.202 14.841-9.746 26.802-9.746 13.512 0 25.03 5.094 33.004 14.398 11.297-9.968 22.151-14.398 38.099-14.398z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={103.981}
          y1={-26.512}
          x2={250.984}
          y2={371.801}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E41359" />
          <stop offset={1} stopColor="#F23C79" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={112.222}
          y1={35.315}
          x2={225.667}
          y2={302.573}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24222F" />
          <stop offset={1} stopColor="#2B2937" />
        </linearGradient>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h338.163v338.163H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MSLogo
