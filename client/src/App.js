import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/predict").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        // check if the data is correctly fetched 
        // console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.transactions == "undefined") ? (
        <p> loading </p>
      ): 
      (data.transactions.map((transactions, i) => (
        <p key={i}> transaction: {transactions}</p>
      )))}
    </div>
  );
}

export default App;
