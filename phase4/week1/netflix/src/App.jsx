
import { BrowserRouter } from 'react-router'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner/>
    </BrowserRouter>
  )
}

export default App