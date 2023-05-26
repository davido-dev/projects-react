import './App.css'

export default function Square() {

  return (
    <>
      <h1>TIC-TAC-TOE</h1>
      <div className='board'> 
        <button className="square">🐸</button>
        <button className="square">🐸</button>
        <button className="square">🐸</button>

        <button className="square">🦊</button>
        <button className="square">🦊</button>
        <button className="square">🦊</button>

        <button className="square">🦊</button>
        <button className="square">🦊</button>
        <button className="square">🦊</button>
      </div>
    </>
  )
}