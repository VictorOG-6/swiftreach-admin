import React from 'react'

const colorMap = {
    white: 'bg-white',
    black: 'bg-black',
  };
  
  const textColorMap = {
    white: 'text-white',
    black: 'text-black',
  };

const Button = ({ backgroundcolor, textcolor, text}) => {

  const bgClass = colorMap[backgroundcolor] || 'bg-default';
  const textClass = textColorMap[textcolor] || 'text-default';

  return (
    <div className={`${bgClass} p-2 rounded-3xl border border-black`}>
        <h3 className={`${textClass}`}>{text}</h3>
    </div>
  )
}

export default Button