import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../modules/notes/pages/Home'
import ViewNote from '../modules/notes/pages/ViewNote'
import AddNote from '../modules/notes/pages/AddNote'
import EditNote from '../modules/notes/pages/EditNote'
function App() {
  return (
    <>
      <nav>
            <Link to='/'>Home</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to='/addNote'>Add Note</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to='/viewNote'>View Note</Link>
        </nav>
        <hr />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/viewNote' element={<ViewNote/>}/>
            <Route path='/addNote' element={<AddNote/>}/>
            <Route path='/edit' element={<EditNote/>}/>
        </Routes>
    </>
  )
}

export default App
