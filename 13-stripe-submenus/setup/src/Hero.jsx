import React from "react"
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./context"
const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            ex, illo dolore iusto quos assumenda! Atque ipsum perferendis ad
            quisquam commodi eligendi, iste illo perspiciatis sequi, error
            voluptate quis excepturi.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero
