import React from 'react'
import StarRating from './StarRating'

const Testimonials = ({item}) => {
  return (
    <div className="testimonial">
        <div className="quote-icon">
            <i className="fa-sharp fa-solid fa-quote-left"></i>
        </div>
            
            <StarRating starRating={item.starRating}/>
            <p>{item.comment}</p>
            <div className="testimonial-author">
                <img className="profile" src={item.avatarUrl} alt={item.author} />
                <div className="author">
                    <h6 className="name">{item.author}</h6>
                    <p className="role">{item.jobRole}</p>
                </div>
            </div>
    </div>
  )
}

export default Testimonials