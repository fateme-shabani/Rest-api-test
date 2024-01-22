import React from 'react'

const Card = ({data}) => {
  return (
    <div>
         <p>{data.name}</p>
          <p>{data.description}</p>
    </div>
  )
}

export default Card