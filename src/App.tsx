import { useEffect, useState } from 'react'
import './App.css'
import Form_React18 from './components/Form_React18'
import List from './components/List'
import type { Sub } from './types'

const InitialSubsMock: Sub[] = [
  {nick: "John", subMonths: 3, avatar: "https://i.pravatar.cc/150?u=1", description: "John is a subscriber"},
  {nick: "Jane", subMonths: 25, avatar: "https://i.pravatar.cc/150?u=2", description: "Jane is a subscriber"},
  {nick: "JohnQ", subMonths: 12, avatar: "https://i.pravatar.cc/150?u=3", description: "JohnQ is a subscriber"},
]

function App() {

  const [subs, setSubs] = useState<Sub[]>([])
 
  useEffect(() => {
    setSubs(InitialSubsMock) 
  }, [])

  const handleNewSub: (newSub: Sub) => void = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub])
  }
  
  return (
    <>
      <List subs={subs}>
        <p>List of subs</p>
      </List>
      {/* <Form_React18  onNewSub={setSubs}/>  No se recomienda pasar la funcion del useState, es mejor crear una funcion y usarla */}
      <Form_React18  onNewSub={handleNewSub}/>
    </>
  )
}

export default App
