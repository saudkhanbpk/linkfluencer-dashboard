import React from 'react';

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="100"
        height="100"
      >
        <circle
          fill="none"
          strokeOpacity="1"
          stroke="#58FF93"
          strokeWidth=".5"
          cx="100"
          cy="100"
          r="0"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            dur="2"
            values="1;80"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="stroke-width"
            calcMode="spline"
            dur="2"
            values="0;25"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="stroke-opacity"
            calcMode="spline"
            dur="2"
            values="1;0"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
