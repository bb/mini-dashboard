import * as React from 'react'

function Search({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.36.852C5.052.852.75 5.172.75 10.5c0 5.328 4.303 9.648 9.611 9.648 2.27 0 4.357-.79 6.002-2.112l3.124 3.128.083.072c.29.215.701.191.963-.073a.745.745 0 000-1.051l-3.088-3.091a9.633 9.633 0 002.528-6.521c0-5.329-4.304-9.648-9.612-9.648zm0 1.486c4.49 0 8.131 3.654 8.131 8.162 0 4.508-3.64 8.162-8.13 8.162-4.492 0-8.132-3.654-8.132-8.162 0-4.508 3.64-8.162 8.131-8.162z"
        fill="#A7AEC0"
      />
      <path
        d="M16.361 18.036l.354-.353-.317-.317-.35.28.314.39zm3.125 3.128l-.354.354.013.012.014.012.327-.378zm.083.072l-.327.378.014.012.015.011.298-.4zm.963-.073l-.354-.353.354.353zm0-1.051l-.355.353.354-.353zm-3.088-3.091l-.37-.337-.322.352.338.338.354-.353zM1.249 10.5c0-5.054 4.08-9.148 9.111-9.148v-1C4.774.352.25 4.897.25 10.5h1zm9.111 9.148c-5.03 0-9.111-4.094-9.111-9.148h-1c0 5.603 4.525 10.148 10.111 10.148v-1zm5.688-2.001a9.048 9.048 0 01-5.688 2v1c2.389 0 4.585-.83 6.315-2.22l-.627-.78zm3.791 3.164l-3.124-3.128-.707.707 3.124 3.128.707-.707zm.057.047l-.084-.072-.653.756.083.072.654-.756zm.282-.048a.238.238 0 01-.311.025l-.596.802c.486.362 1.176.321 1.616-.122l-.71-.705zm0-.345a.245.245 0 010 .345l.71.705a1.245 1.245 0 00-.003-1.756l-.708.706zm-3.088-3.09l3.087 3.09.708-.706-3.088-3.091-.707.706zm2.382-6.875a9.134 9.134 0 01-2.397 6.184l.738.674a10.134 10.134 0 002.659-6.858h-1zM10.36 1.352c5.03 0 9.112 4.094 9.112 9.148h1C20.472 4.897 15.946.352 10.36.352v1zm8.631 9.148c0-4.782-3.862-8.662-8.63-8.662v1c4.212 0 7.63 3.428 7.63 7.662h1zm-8.63 8.662c4.768 0 8.63-3.88 8.63-8.662h-1c0 4.233-3.418 7.662-7.63 7.662v1zM1.728 10.5c0 4.782 3.862 8.662 8.631 8.662v-1c-4.213 0-7.631-3.429-7.631-7.662h-1zm8.631-8.662c-4.769 0-8.631 3.88-8.631 8.662h1c0-4.234 3.418-7.662 7.631-7.662v-1z"
        fill="#E4E7EE"
      />
    </svg>
  )
}

export default Search