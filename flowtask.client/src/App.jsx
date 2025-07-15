import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header'



function App() {
    return(
        <div className='flex flex-col'>
            <Header/>
            <Home/>
        </div>
    )
}

export default App;