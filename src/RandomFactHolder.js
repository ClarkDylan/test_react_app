import './RandomFactHolder.css'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Refresh from './RefreshButton.png'

function RandomFactHolder() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClicked, setisClicked] = useState(false)
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFacts(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [isClicked])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <img src={Refresh} alt='refresh' onClick={() => setisClicked(!isClicked)} />
        <p>{facts.text}</p>
      </>
    );
  }
}

export default RandomFactHolder
