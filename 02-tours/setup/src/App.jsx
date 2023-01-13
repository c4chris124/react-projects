import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((t) => t.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return loading ? (
    <main>
      <Loading />
    </main>
  ) : (
    (!tours.length) ? 
    <main>
      <div className="title"><h2>no tours left</h2>
      <button className="btn" onClick={fetchTours}>refresh</button>
      </div>
    </main>
    :
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
