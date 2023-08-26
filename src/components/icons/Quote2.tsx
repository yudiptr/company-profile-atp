import React from 'react'

interface QuoteProps {
  className?: string
}

export const Quote2: React.FC<QuoteProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="&#240;&#159;&#167;&#172; quote - Dark" opacity="0.5">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.4014 8.18652C19.3067 8.18652 17.6054 9.93586 17.6054 12.0932C17.6054 14.2492 19.3067 15.9999 21.4014 15.9999C25.0001 15.9999 22.9147 22.7839 18.3761 23.4905C18.1619 23.523 17.9665 23.6311 17.8251 23.7952C17.6838 23.9593 17.6058 24.1686 17.6054 24.3852C17.6054 24.9399 18.1014 25.3785 18.6507 25.2945C26.9001 24.0439 29.8334 8.18786 21.4014 8.18786V8.18652ZM10.4641 8.18652C8.36675 8.18652 6.66675 9.93452 6.66675 12.0932C6.66675 14.2479 8.36675 15.9972 10.4641 15.9972C14.0614 15.9972 11.9761 22.7839 7.43741 23.4905C7.2235 23.523 7.02823 23.6309 6.8869 23.7947C6.74557 23.9585 6.66748 24.1675 6.66675 24.3839C6.66675 24.9385 7.16275 25.3772 7.71075 25.2932C15.9627 24.0425 18.8961 8.18652 10.4641 8.18652Z"
          fill="#9FADBC"
        />
      </g>
    </svg>
  )
}