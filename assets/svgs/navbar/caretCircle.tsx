import * as React from "react";

function Circle(props: any) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_21_352)">
        <path
          d="M17.719 9A8.717 8.717 0 009 .281 8.717 8.717 0 00.281 9 8.717 8.717 0 009 17.719 8.717 8.717 0 0017.719 9zM9 16.594c-4.173 0-7.594-3.379-7.594-7.594 0-4.173 3.379-7.594 7.594-7.594 4.173 0 7.594 3.379 7.594 7.594 0 4.173-3.379 7.594-7.594 7.594zm1.125-4.219L6.75 9l3.375-3.375v6.75zm1.125-6.75c0-.998-1.213-1.505-1.92-.795L5.955 8.205c-.439.44-.439 1.154 0 1.593l3.375 3.375c.707.707 1.92.207 1.92-.794V5.625z"
          fill="#C4C4C4"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_352">
          <path fill="#fff" transform="rotate(90 9 9)" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Circle;
