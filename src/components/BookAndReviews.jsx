import Reviews from './Reviews'
import Book from './Book'

const BookAndReviews = () => {
  return (
    <section className="the-book-container" id="the-book">
    <div className="written-by">
      <p>written by:</p>
      <h2 className="written-indent">Kay Bolter, <span>PhD</span></h2>
      <h2>Nicole Bolter, <span>PhD</span></h2>
    </div>
    <div className="book-container">
      <Book></Book>
    </div>
    <div className="reviews-container">
      <Reviews></Reviews>
    </div>
  </section>
  )
}

export default BookAndReviews
