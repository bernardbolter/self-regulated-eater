import { useState } from 'react'

const Book = () => {
  const [hovered, setHovered] = useState(false)
  const [flipBook, setFlipBook] = useState(false)

  const handleMouseOver = () => {
    setHovered(true)
  }

  const handleMouseOut = () => {
    setHovered(false)
  }

  const handleFlipBook = () => {
    setFlipBook(!flipBook)
    setHovered(false)
  }

  return (
    <>
      <div className="book-wrapper">
        <div className="perspective">
          <div 
            className={hovered ? "book-wrap rotate" : flipBook ? "book-wrap flip" : "book-wrap"}
          >
            <div 
              className="book-front"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}  
              onClick={() => handleFlipBook()}
            />
            <div className="book-spine" />
            <div 
              className="book-back"
              onClick={() => handleFlipBook()}  
            />
          </div>
        </div>
      </div>
      <div className="buy-button">
        <h2>Buy Now</h2>
        <p>From Amazon</p>
      </div>
    </>
  )
}

export default Book
