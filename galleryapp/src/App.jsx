import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Cards';
const App = () => {

const [userData, setUserData] = useState([])
const [index, setindex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data) 
  }

  useEffect(() => {
    getdata()
  }, [index])

  let printUserData = <h3 className='text-white text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (

    <div  className = 'bg-cover bg-center h-screen overflow-auto bg-black text-white p-4' style={{ backgroundImage: `url(${userData[Math.floor(Math.random() * userData.length)]?.download_url})` }} >

      <button onClick={getdata} 
      className='bg-black text-sm cursor-pointer active:scale-95 text-white rounded px-4 py-2  font-semibold shadow-md'>Change Background</button>

      <div className='flex h-{82%} flex-wrap gap-10 p-3'>
        {printUserData}
      </div>

    <div className='flex justify-center gap-6 items-center p-4'>
      <button className='bg-sky-400 text-black cursor-pointer active:scale-95 rounded px-4 py-2 semi-gold'
      onClick={()=>{ 
        if(index > 1){
          setindex(index-1)
          setUserData([])
        }}}>
        Prev</button>
        <h4>Page {index}</h4>
      <button className='bg-sky-400 text-black cursor-pointer active:scale-95 rounded px-4 py-2 text-sm semi-gold'
      onClick={()=>{
        setindex(index+1)
        setUserData([])
      }}>
        Next</button>
    </div>
</div>
  )
}

export default App 