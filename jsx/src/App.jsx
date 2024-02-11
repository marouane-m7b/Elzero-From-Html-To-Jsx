import './css/master.css'
import './css/framework.css'
import './css/all.min.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<div>Home</div>}/>
    </Routes>
  )
}

export default App
