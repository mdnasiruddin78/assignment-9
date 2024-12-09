import Carosel from './Carosel';
import Adventure from './Adventure';
import Somequestion from './Somequestion';
import { Helmet } from 'react-helmet-async';
import Contract from './Contract';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";


const Home = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
          <section>
              <Carosel></Carosel>
          </section>
          <section className='py-20'>
              <Adventure></Adventure>
          </section>
          <section>
            <Somequestion></Somequestion>
          </section>
          <section className='py-20'>
                <Contract></Contract>
          </section>
        </div>
    );
};

export default Home;