import MailchimpSubscribe from "react-mailchimp-subscribe"
const url = "https://self-regulated-eater.us8.list-manage.com/subscribe/post?u=6b3815a742cce779a1c13a864&amp;id=9cfd5d21bd&amp;f_id=009702e0f0"
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h3 className="subscribe">Subscribe to our newsletter</h3>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <>
                        <SimpleForm class="news-input" onSubmitted={formData => subscribe(formData)} />
                        {status === "sending" && <p className="news-sending">sending...</p>}
                        {status === "error" && <p class="news-error" dangerouslySetInnerHTML={{__html: message}} />}
                        {status === "success" && <p className="news-success">Subscribed !</p>}
                    </>
                )}
            />
        </div>
    )
}

export default Newsletter