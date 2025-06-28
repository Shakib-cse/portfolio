import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Outlet } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';


const HomeLayout = () => {

      useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

    return (
        <section>
            <header id='home'>
                <Header />
            </header>
           <main className="bg-gradient-to-b from-[#acb3c6] via-[#E6ECFF] to-white">
  <Introduction />
  <About />
  <Skills data-aos="fade-up" data-aos-delay="300"/>
  <Education />
  <Projects />
  <Contact />
  <Outlet/>
</main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default HomeLayout;