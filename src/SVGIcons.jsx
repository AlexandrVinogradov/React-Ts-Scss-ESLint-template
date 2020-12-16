import React from 'react'

const getViewBox = (name) => {
  switch (name) {
    case 'mail-icon':
      return '0 0 20 16'
    default:
      return '0 0 24 24'
  }
}

const getPath = (name, props) => {
  switch (name) {
    case 'mail-icon':
      return (
        <>
          <path
            {...props}
            d='M2 0C0.895431 0 0 0.895431 0 2V2.1316L9.99998 8.79826L20 2.13158V2C20 0.895431 19.1046 0 18 0H2Z'
            fill='#00A523'
          />
          <path
            {...props}
            d='M20 4.53528L10.5547 10.8322C10.2188 11.0561 9.78118 11.0561 9.44528 10.8322L0 4.5353V14C0 15.1046 0.895431 16 2 16H18C19.1046 16 20 15.1046 20 14V4.53528Z'
            fill='#00A523'
          />
        </>
      )

    default:
      return <path />
  }
}

const SVGIcon = ({ name = '', style = {}, viewBox = '', width = '100%', className = '', height = '100%' }) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    {getPath(name)}
  </svg>
)

export default SVGIcon
