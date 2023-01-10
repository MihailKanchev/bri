import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
function App() {
  const queryClient = new QueryClient();
  return (
    
        <div className="App">
          <QueryClientProvider client={queryClient}>
            <Router>
              <NavBar/>
              <Routes>
                <Route exact  path="/" element={<FrontPage/>}/>
                <Route exact  path="/about" element={<AboutPage/>}/>
                <Route exact  path="/products/:id" element={<ProductPage/>}/>
              </Routes>
            </Router>
          </QueryClientProvider>
        </div>

        
        
    
  );
}

export default App;
