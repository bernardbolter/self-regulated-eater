"use client"

import About from "@/components/About"
import Contact from "@/components/Contact"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import TheBolters from "@/components/TheBolters"
import BookAndReviews from "@/components/BookAndReviews"

const Home = () => {
  return (
    <main>
      <Header />
      <BookAndReviews />
      <Heading />
      <About />
      <TheBolters />
      <Contact />
    </main>
  )
}

export default Home