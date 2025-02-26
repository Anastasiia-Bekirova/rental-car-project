import { Route, Routes } from 'react-router-dom';
import  Layout  from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CarPage from './pages/CarPage/CarPage';






import './App.css'

function App() {
  

  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
         <Route path="/catalog/:id" element={<CarPage />} />
         
          
        </Routes>

      </Layout>
     
    
  )
}

export default App;
