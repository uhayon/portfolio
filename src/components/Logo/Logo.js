import React from 'react';

const Logo = ({ height, prefixColor, suffixColor }) => {
  return (
    <div style={{height: height || '100%', width: 'auto'}}>
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='81' viewBox='0 0 200 81' style={{ width: 'auto', height: '100%' }}>
        <path 
          d='M13.561-58H29.14L22.049-24.451a26.973,26.973,0,0,0-.828,6.113q0,6.319,5.59,6.319,4.762,0,8.644-5.857t6.107-16.337L46.634-58H62.213L49.946-.563h-11.9L39.129-11.2h-.311Q31.313.465,20.444.465,13.3.465,9.523-3.773T5.745-16.026A56.131,56.131,0,0,1,6.987-26.968Zm77.9,15.669h4.037q6.78,0,10.559-2.928T109.83-54.2q0-4.213-2.458-6.319t-7.738-2.106H95.8ZM88.713-29.383,82.554-.563H66.768L82.761-75.67h18.581q12.267,0,18.426,5.24t6.159,15.361a22.863,22.863,0,0,1-4.3,13.948,25.154,25.154,0,0,1-12.37,8.656L122.77-.563H105.586L94.872-29.383Z'
          transform="translate(-5.745 80.535)"
          fill={prefixColor || '#f0f0f0'} />
        <path
          d='M16.666-71.489q0-4.471,2.458-6.759t6.961-2.287a8.951,8.951,0,0,1,5.745,1.593A5.546,5.546,0,0,1,33.8-74.368a9.6,9.6,0,0,1-2.277,6.656q-2.277,2.544-7.039,2.544Q16.666-65.168,16.666-71.489ZM17.494-.563H1.915L14.182-58.024H29.761ZM58.072-12.024a25.88,25.88,0,0,0,8.385-1.8V-2.259A31.9,31.9,0,0,1,52.689.465q-7.764,0-11.413-3.238T37.628-12.8a30.364,30.364,0,0,1,.621-5.756l5.952-27.7H36.334l1.5-7.555,10.145-4.317,6.832-12.129H64.853L62.316-58.024H76.964l-2.588,11.77H59.78l-5.952,27.7a14,14,0,0,0-.311,2.724Q53.518-12.024,58.072-12.024Z'
          transform="translate(123.036 80.535)"
          fill={suffixColor || '#d12c2c'}/>
      </svg>
    </div>
  );
};

export default Logo;