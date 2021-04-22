import React, { useState } from 'react';

const SingleColor = ({ color: { rgb, weight, hex }, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const bcgValue = rgbToHex(...rgb);

  const bcgValue = `#${hex}`;
  return (
    <article
      onClick={() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
        navigator.clipboard.writeText(bcgValue);
      }}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{bcgValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
