import React, { Component } from 'react'
import imgnotfound from "./imgnotfound.jpg"

export class Newsitem extends Component {
 
    render() {
        let {title,description,image,more,key}=this.props
        return (
            <>
            <div className="card" key={key} style={{width: '18rem'}}>
               
  <img src={!image?imgnotfound:image} className="card-img-top" alt='...'/>
  <div className="card-body">
    <h5 className="card-title">{title}.....</h5>
    <p className="card-text">{description}.....</p>
    <a href={more} className='btn btn-primary'>Read More</a>
  </div>
  
</div>

</>
        )
    }
}

export default Newsitem
