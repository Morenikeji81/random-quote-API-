import React, {useState, useEffect} from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function Quote() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState("")
//   const [counter, setCounter] = useState(60);
 
// useEffect(() =>{
//   const timer =
//       counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//   }, [counter]
// )  

useEffect(() => {
  fetch("http://api.quotable.io/random")
  .then(response => response.json())
  .then(
    (data => {
setQuote(data.content);
setTags(data.tags);
setAuthor(`${data.results.author}`)
    })
  )}, []) 


let fetchNewQuote = () => {
  fetch("http://api.quotable.io/random")
  .then(response => response.json())
  .then(
    (data => {
setQuote(data.content);
setTags(data.tags);
setAuthor(`${data.author}`)
    })
  )
}
  return (
    <div className='App'>
      <div className='quote'>
      <ImQuotesLeft /> 
      <p>Tag: {tags} </p>
      <br/>
      <h2>Quote:  {quote} </h2>
        <br/>
        <small>Author: {author}  </small>
        <ImQuotesRight/>
      </div>
      <br/>
      <br/>
      <Link to='/'><button className='btn' >Home Page</button></Link>
      <br/>
      <button className='btn' onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  )
}
// {counter}




