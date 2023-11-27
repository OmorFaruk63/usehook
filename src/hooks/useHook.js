import  { useEffect, useState } from 'react'

const useHook = (url) => {
 const [data,setData]=useState([])
 useEffect(()=>{
  fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.log(err.message))
 },[])
  return {data}
 
}
export default useHook