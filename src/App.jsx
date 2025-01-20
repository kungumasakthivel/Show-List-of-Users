import ShowUsers from './components/ShowUsers'
import PageNotFound from './components/PageNotFound';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './components/UserDetails';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowUsers/>}/>
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
