import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "./data";
import Person from "./Person";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
        let index = oldIndex + 1
        if(index > people.length - 1) index = 0 
        return index
    })
  }

  const prevSlide = () => {
    setIndex((oldIndex) => {
        let index = oldIndex - 1
        if(index < 0) index = people.length - 1 
        return index
    })
  }
  

//   useEffect(() => {
//     const lastIndex = people.length - 1
//     if(index < 0) setIndex(lastIndex)
//     if(index > lastIndex) setIndex(0)
//   },[index, setIndex])

  useEffect(() => {
    let slider = setInterval(() =>{
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if(index > people.length - 1) index = 0 
            return index
        })
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {people?.map((person, personIndex) => {
          let position = 'nextSlide'
          if(personIndex === index) position = 'activeSlide'
          if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) position = 'lastSlide'
          return <Person key={person.id} position={position} {...person}  />
        })}
      </div>
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft/>
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight/>
      </button>
    </section>
  );
}

export default App;