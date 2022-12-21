import React from 'react'

const FeatureTitle = ({text, className}) => {
  return (
    <div>
      <h1 className={className + "text-xl text-gray-900 font-semibold"}>
        {text}
      </h1>
    </div>
  )
}

export default FeatureTitle
