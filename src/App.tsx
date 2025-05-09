import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import type { Sub } from './types'

const InitialSubsMock: Sub[] = [
  {nick: "John", subMonths: 3, avatar: "https://i.pravatar.cc/150?u=1", description: "John is a subscriber"},
  {nick: "Jane", subMonths: 25, avatar: "https://i.pravatar.cc/150?u=2"},
]

function App() {

  const [subs, setSubs] = useState<Sub[]>([])
 
  useEffect(() => {
    setSubs(InitialSubsMock) 
  }, [subs])
  
  return (
    <>
      <List subs={subs}>
        <p>List of subs</p>
      </List>
      <Form />
    </>
  )
}

export default App
