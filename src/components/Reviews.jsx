import { useState, useRef } from 'react'
import reviews from '../data/reviews.json'
import useWindowSize from '../helpers/useWindowSize'

const Reviews = () => {
  const size = useWindowSize()
  const containerRef = useRef()
  let [index, setIndex] = useState(0)

  const clickRight = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  
  const clickLeft = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div className="the-reviews" ref={containerRef}>
      <section 
          className="reviews-container"
          style={{ 
              width: size.width < 768 ? size.width * reviews.length : (size.width * .4) * reviews.length,
              transform: `translateX(-${size.width < 768 ? size.width * index : (size.width * .4) * index}px)`
          }}
      >
        {reviews.map((review, i) => (
          <div className="review" key={i}>
            <div className="quote-container">
              <svg className="quote first" viewBox="0 0 32 32" >
                <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
              </svg>
              <p>{ review.quote }</p>
              <svg className="quote last" viewBox="0 0 32 32" >
                <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
              </svg>
            </div>
            <div className="person">
              <h2>{ review.name } | <span>{ review.titles }</span></h2>
              <h4>{ review.position }</h4>
            </div>
          </div>
        ))}
      </section>
      <div className="review-buttons">
          <div onClick={() => clickLeft()}  className={ index === 0 ? 'not-visible arrow left' : 'arrow left' }>
            <svg version="1.1" viewBox="0 0 330 330">
              <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
            </svg>
          </div>
          <div onClick={() => clickRight()} className={ index > reviews.length - 2 ? 'not-visible arrow right' : 'arrow right' }>
            <svg version="1.1" viewBox="0 0 330 330">
              <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default Reviews
