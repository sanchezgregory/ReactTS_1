import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form_React18 from './components/Form_React18'
import List from './components/List'
import type { Sub, SubsResponse } from './types'

function App() {

  const [subs, setSubs] = useState<Sub[]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponse> => { 
      return fetch('http://localhost:3001/subs').then(res => res.json() as Promise<SubsResponse>) // Indica que sabemos que json tiene esa repsuesta)
    } 

    const mapApiSubsToSubs = (apiResponse: SubsResponse): Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi
        return {
          id: subFromApi.id.toString(),
          nick,
          subMonths,
          avatar,
          description
        }
      }) 
    }
    
    fetchSubs()
      .then(mapApiSubsToSubs)
      .then(setSubs)
  }, [])

  const handleNewSub: (newSub: Sub) => void = (newSub: Sub) => {
    setSubs(subs => [...subs, {...newSub, id: crypto.randomUUID()}])
    divRef.current?.scrollIntoView({ behavior: "smooth" })
    
  }
  
  return (
    <div className="p-4" ref={divRef}> 
      <List subs={subs}>
        <p>List of subs</p>
      </List>
      {/* <Form_React18  onNewSub={setSubs}/>  No se recomienda pasar la funcion del useState, es mejor crear una funcion y usarla */}
      <Form_React18  onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
