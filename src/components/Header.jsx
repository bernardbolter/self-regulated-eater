import { useRef, useEffect, useState } from "react"
import jump from "jump.js"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Header = () => {
  gsap.registerPlugin(ScrollTrigger)
  const [isOpen, setIsOpen] = useState(false)
  const eaterRef = useRef(null)
  const regulatedRef = useRef(null)
  const theRef = useRef(null)
  const solidCircleRef = useRef(null)
  const borderCircleRef = useRef(null)
  const logoBackRef = useRef(null)
  const curveRef = useRef(null)

  const openMenu = () => {
    setIsOpen(state => !state.isOpen)
  }

  const jumpto = section => {
    jump(`#${section}`)
  }

  useEffect(() => {
    const eater = eaterRef.current
    const regulated = regulatedRef.current
    const the = theRef.current
    const solidCircle = solidCircleRef.current
    const borderCircle = borderCircleRef.current
    const logoBack = logoBackRef.current
    const curve = curveRef.current

  gsap.to(the, { x: 2, y: 2, scrollTrigger: { 
      trigger: the,
      scrub: 0.25,
      start: 'top +=10',
      end: 'top +=30'
  }})
  gsap.to(regulated, { x: 30, y: -15, scrollTrigger: { 
      trigger: regulated,
      scrub: 0.25,
      start: 'top +=15',
      end: 'top +=30'
  }})
  gsap.to(eater, { x: 72, y: -33, scrollTrigger: { 
      trigger: eater,
      scrub: 0.25,
      start: 'top +=30',
      end: 'top +=45'
  }})
 
  
  gsap.to(solidCircle, { opacity: 0, x: -50, y: -50, scrollTrigger: { 
      trigger: solidCircle,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=140'
  }})
  gsap.to(borderCircle, { opacity: 0, x: -100, y: -100, scrollTrigger: { 
      trigger: borderCircle,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=200'
  }})

  gsap.to(logoBack, { y: -29, scrollTrigger: { 
      trigger: logoBack,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=140'
  }})
  gsap.to(curve, { y: -29, scrollTrigger: { 
      trigger: curve,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=140'
  }})
  }, [])

  return (
      <section className="header">
        <div className="logo">
        <div className="logo-text">
          <div 
              className="logo-circle-solid"
              ref={solidCircleRef}
            ></div>
            <div className="logo-circle-border" ref={borderCircleRef}></div>
            <h1 className="the" ref={theRef}>THE</h1>
            <h1 className="self-regulated" ref={regulatedRef}>SELF-REGULATED</h1>
            <h1 className="eater" ref={eaterRef}>EATER</h1>
            <div className="logo-back" ref={logoBackRef}></div>
          
          <div className="logo-svg" ref={curveRef}>
            <svg viewBox="0 0 168 114">
              <path d="M168 66C-130 66 277 114 -0.0001688 114L-0.000174999 -1H168V66Z"/>
            </svg>
          </div>
        </div>
      </div>
        <div className="nav-button-container">
          <div id="nav-button" className={isOpen ? ' nav-button open' : 'nav-button'} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={isOpen ? 'nav nav-open' : 'nav'}>
            <h3 onClick={() => jumpto('the-book')}>The Book</h3>
            <h3 onClick={() => jumpto('about')}>About</h3>
            <h3 onClick={() => jumpto('the-bolters')}>The Bolters</h3>
            <h3 onClick={() => jumpto('contact')}>Contact</h3>
        </nav>
    </section>
  )
}

export default Header