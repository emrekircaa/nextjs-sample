import * as React from "react";

function CourseSvg(props: any) {
  return (
    <svg
      width={12}
      height={15}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_17_26)">
        <path
          d="M1.5 0h9c.828 0 1.5.63 1.5 1.406V15l-6-3.281L0 15V1.406C0 .63.672 0 1.5 0zM1 13.368l5-2.735 5 2.735V1.406c0-.258-.224-.468-.5-.468h-9c-.276 0-.5.21-.5.468v11.962z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="clip0_17_26">
          <path
            fill="#fff"
            transform="matrix(-1 0 0 1 12 0)"
            d="M0 0H12V15H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CourseSvg;
