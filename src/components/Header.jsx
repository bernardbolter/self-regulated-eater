import { useRef, useEffect, useState } from "react"
import jump from "jump.js"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const eater = useRef(null)
  const regulated = useRef(null)
  const the = useRef(null)
  const solidCircle = useRef(null)
  const borderCricle = useRef(null)
  const logoBack = useRef(null)
  const curve = useRef(null)

  const openMenu = () => {
    setIsOpen(state => !state.isOpen)
  }

  const jumpto = section => {
    jump(`#${section}`)
  }

  useEffect(() => {
    gsap.to(eater.value, { x: 92, y: -62, scrollTrigger: { 
      trigger: eater.value,
      scrub: 0.25,
      start: 'top +=67',
      end: 'top +=30'
  }})
  gsap.to(regulated.value, { x: 36, y: -34, scrollTrigger: { 
      trigger: regulated.value,
      scrub: 0.25,
      start: 'top +=30',
      end: 'top +=30'
  }})
  gsap.to(the.value, { x: 0, y: -10, scrollTrigger: { 
      trigger: the.value,
      scrub: 0.25,
      start: 'top +=10',
      end: 'top +=30'
  }})
  gsap.to(solidCircle.value, { opacity: 0, x: -50, y: -50, scrollTrigger: { 
      trigger: solidCircle.value,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=140'
  }})
  gsap.to(borderCricle.value, { opacity: 0, x: -150, y: -150, scrollTrigger: { 
      trigger: borderCricle.value,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=140'
  }})
  gsap.to(logoBack.value, { y: -29, scrollTrigger: { 
      trigger: logoBack.value,
      scrub: 0.25,
      start: 'top -=100',
      end: 'top -=140'
  }})
  gsap.to(curve.value, { y: -29, scrollTrigger: { 
      trigger: curve.value,
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
              ref={solidCircle}
            ></div>
            <div className="logo-circle-border" ref={borderCricle}></div>
            <h1 className="the" ref={the}>THE</h1>
            <h1 className="self-regulated" ref={regulated}>SELF-REGULATED</h1>
            <h1 className="eater" ref={eater}>EATER</h1>
            <div className="logo-back" ref={logoBack}></div>
          
          <div className="logo-svg" ref={curve}>
            <svg viewBox="0 0 168 114">
              <path d="M168 66C-130 66 277 114 -0.0001688 114L-0.000174999 -1H168V66Z"/>
            </svg>
          </div>
        </div>
      </div>
        <div className="nav-button-container">
          <div id="nav-button" className={isOpen ? ' nav-button open' : 'nav-button'} onClick={() => openMenu}>
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