import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header'
import QuemSomos from './assets/components/Quem_Somos'
import Instrumentos from './assets/components/Instrumentos'
import Endereco from './assets/components/Endereco'
import Contato from './assets/components/Contato'
import Footer from './assets/components/Footer'
import './App.css'

function App() {

  return (
    <>
      <body className='imgbody'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <QuemSomos />
                <Instrumentos />
                <Endereco />
                <Contato />
              </>
            } />
            <Route path='/quem-somos' element={<QuemSomos />} />
            <Route path='/instrumentos' element={<Instrumentos />} />
            <Route path='/endereco' element={<Endereco />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
          <Footer />
        </Router>
      </body>
    </>
  )
}

export default App
