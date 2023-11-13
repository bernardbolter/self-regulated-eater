import ContactForm from "./ContactForm"
import Newsletter from "./Newsletter"

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="news-container">
        <Newsletter />
        <div className="contact-info">
          <h1>For speaking engagments, book club discussions, and interviews</h1>
          <h1>email us at</h1>
          <h1>contact@self-regulated-eater.com</h1>
          <h1>Or send us a message with our contact form.</h1>
        </div>
      </div>
      <div className="form-container">
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact