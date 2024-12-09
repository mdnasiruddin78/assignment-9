import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Mainlayout = () => {
      
    return (
        <div>
            <nav className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </nav>
            <main className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer> 
            </footer>
        </div>
    );
};

export default Mainlayout;