//useFetch.js
import {useEffect, useState} from 'react'
import axios from 'axios'

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({labels:"",datasets:[{label:"test",data:[]}]})
  const [error, setError] = useState('') 
  console.log("URL",url)
  useEffect(() => {
    const fetchData = async()=>{
      const{tt}= setData(await axios.get(url))
      console.log("dd",tt)
    }
    fetchData()
  },[url])
//     setIsLoading(true)
//     axios.get("https://nchu2022-bee.onrender.com/hiveData/5?limit=3")
//     .then((res) => res.json()) 
//     .then((data) => setData(data))
//     .catch((err) => setError(err))
//     .finally(() => setIsLoading(false))
//   },[url])
  console.log("data",data)
//   console.log("error",error)
//   console.log("isLoading",isLoading)
  return {data, error, isLoading}
}

export default useFetch;