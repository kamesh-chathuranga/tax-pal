import React from 'react'
import './Review.css'

const ReviewCard = ({text, name, position, profileImg}) => {
  return (
    <div className="review-card-wrapper">
        <div className="review-card">
            <div className="review-text">
                <p>{text}</p>
            </div>
            <div className="reviewer">
                <div className="name">
                    <h4>{name}</h4>
                    <h4 className="position">{position}</h4>
                </div>
                <div className="profile">
                    <img src={`/images/profile/${profileImg}.webp`} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard