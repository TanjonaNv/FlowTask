import './App.css';
import Home from './components/Home/Home';
import Header from './components/HeaderPage/Header'
import Footer from './components/Footer/Footer';
import Register from './components/RegisterPage/Register';
import Login from './components/LoginPage/Login';
import DashBoard from './components/DashboardPage/DashBoard';



function App() {
    return(
        <div className='flex flex-col w-full'>
            <Header/>
            <DashBoard/>
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <Home/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default App;