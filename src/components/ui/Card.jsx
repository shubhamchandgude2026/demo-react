import React from 'react'
const Card = ({title,dec,cat,}) => {
  return (
   <div className="card">
    <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{dec}</p>
        <p>category:{cat}</p>
        <button className="card-btn">Read More</button>
    </div>
</div>
  )
}

export default Card