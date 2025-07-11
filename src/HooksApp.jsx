import { CounterApp } from "./components/CounterApp"
import { FetchApp } from "./components/FetchApp"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
  return (
    <>
        <h1>Aplicacion de Hooks</h1>
        <hr />             

        <FormsApp />
        <hr />
        <CounterApp />
        <hr />
        <FetchApp />
    </>
  )
}
