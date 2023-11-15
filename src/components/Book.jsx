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
      <a
        href="https://www.amazon.com/Self-Regulated-Eater-Kay-Bolter/dp/1643437186/ref=sr_1_1?crid=1ZA4QX1T0LIXI&keywords=self+regulated+eater+book&qid=1699991628&sprefix=self+regulated+eater+book%2Caps%2C185&sr=8-1"
        className="buy-button"
      >
        <h2>Purchase</h2>
        <p>From Amazon</p>
      </a>
    </>
  )
}

export default Book
