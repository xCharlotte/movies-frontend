import React, { ComponentProps } from "react";

export default function HalfStar(props: ComponentProps<any>) {
  const { className } = props;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 19 19"
      >
        <defs>
          <linearGradient id="half">
            <stop offset="0%" stopColor="#FFB605" />
            <stop offset="50%" stopColor="#FFB605" />
            <stop offset="50%" stopColor="rgb(115,115,115)" />
            <stop offset="100%" stopColor="rgb(115,115,115)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="m10 14.844-5.817 3.058 1.111-6.477L.588 6.838l6.504-.945L10 0l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z"
        />
      </svg>
    </div>
  );
}
