import type { JSX } from "react";
import type { Sub } from "../types";

interface Props {
    subs: Sub[], // o puede ser tbn: Array<Sub>
    children: React.ReactNode
}

const List: React.FC<Props> = ({subs, children}) => {

    console.log('list', subs)
    const renderLIst = (): JSX.Element[] => {
        return subs.map((sub) => {
            return (
                <li key={sub.id}>
                    <img src={sub.avatar} alt={sub.nick} />
                    <h2>{sub.nick} (<small>{sub.subMonths} months</small>)</h2>
                    <p>{sub.description?.substring(0, 100)}</p>
                </li>
            )
        })
    }

  return (
    <>
        <h1>{children}</h1>
        <ul>
            {renderLIst()}
        </ul>
    </>
  )
}

export default List
