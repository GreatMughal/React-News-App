import React from 'react'

const Card = ({title, description, src, url}) => {
  return (
    <>
      <div className="card bg-dark text-light p-2 mb-3 d-inline-block my-3 mx-4" style={{maxWidth: "250px"}}>
        <img src={src} style={{height: "150px", width: "233px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 35) : "There is an amaizing news for you"}</h5>
          <p className="card-text">{description ? description.slice(0, 65) : "Amaizing News is waiting for you check it out"}</p>
          <a href={url} className="btn btn-primary">Read More.</a>
        </div>
      </div>
    </>
  )
}

export default Card