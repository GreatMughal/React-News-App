import React, {useState} from 'react'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <>
    <Navbar setCategory={setCategory} />
    <NewsContainer category={category} />
    </>
  )
}

export default App