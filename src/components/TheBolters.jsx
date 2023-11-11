import Image from 'next/image'
import KayPic from '../../public/kay.jpg'
import NicolePic from '../../public/nicole.jpg'

const TheBolters = () => {
  return (
    <section className="the-bolters-container" id="the-bolters">
    <div className="author">
        <div className="photo">
            <img src="/kay.jpg"  alt="photo of Kay Bolter, PhD" />
        </div>
        <div className="text">
            <h1 className="author-name">Kay Bolter, <span>PhD</span></h1>
            <h2 className="text-paragraph">is a clinical psychologist with 30+ years of experience specializing in the treatment of eating disorders. Using the therapeutic approach illustrated in <span className="author-italic">The Self-Regulated Eater</span>, Dr. Bolter has treated hundreds of clients struggling with emotional and binge eating.</h2>
        </div>
        <div className="author-socials">
            <p>connect with me on linkedin &rarr;</p>
            <a className="author-linked" href="https://www.linkedin.com/in/kay-bolter-ph-d-68656821/">
                <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                </svg>
            </a>
        </div>
    </div>
    <div className="author">
        <div className="photo">
            <img src="/nicole.jpg" alt="photo of Nicole Bolter, PhD" />
        </div>
        <div className="text">
            <h1 className="author-name">Nicole Bolter, <span>PhD</span></h1>
            <h2 className="text-paragraph">is a professor in the kinesiology department at San Francisco State University, with expertise in sport and exercise psychology.  Her recent research centered on combating weight stigma through pedagogical interventions for future allied heath professionals.</h2>
        </div>
        <div className="author-socials">
        <p>connect with me on linkedin &rarr;</p>
            <a className="author-linked" href="https://www.linkedin.com/in/nicole-bolter-a84636285/">
                <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                </svg>
            </a>
        </div>
    </div>
  </section>
  )
}

export default TheBolters