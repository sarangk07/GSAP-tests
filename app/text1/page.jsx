'use client'

// Import necessary libraries
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'; // For optimized images

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');
    const panelsContainer = document.querySelector('#panels-container');

    // GSAP animation for scrolling through panels
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#panels-container',
        pin: true,
        start: 'top top',
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
      },
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('.anchor').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElem = document.querySelector(e.target.getAttribute('href'));
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          const totalScroll = gsap.getProperty(panelsContainer, "scrollWidth") - window.innerWidth;
          const y = Math.round((targetElem.offsetLeft / totalScroll) * totalScroll);
          gsap.to(window, {
            scrollTo: { y, autoKill: false },
            duration: 1,
          });
        }
      });
    });
  }, []);

  return (
    <div id="page" className="site">
      <div id="feather" className="feather"></div>

      <header id="masthead" className="site-header fixed z-50">
        <nav className="anchor-nav" role="navigation">
          <a href="#intro" className="anchor px-4 py-2">Home</a>
          <a href="#panel-1" className="anchor px-4 py-2">Panel 1</a>
          <a href="#panel-3" className="anchor px-4 py-2">Panel 3</a>
          <a href="#panel-5" className="anchor px-4 py-2">Panel 5</a>
          <a href="#map" className="anchor px-4 py-2">Map</a>
        </nav>
      </header>

      <main id="content" className="site-content">
        <section id="intro" className="full-screen pt-5 bg-gradient-to-b from-orange-400 to-orange-600 flex flex-col justify-center items-center text-black">
          <h1>A title</h1>
          <div id="clouds-layer-1" className="clouds"></div>
          <div id="clouds-layer-2" className="clouds"></div>
        </section>

        <section id="panels">
          <div id="panels-container" className="flex overflow-hidden">
            {[...Array(5)].map((_, index) => (
              <article key={index} id={`panel-${index + 1}`} className={`panel full-screen bg-gradient-to-b ${index % 2 === 0 ? 'from-green-400 to-green-600' : 'from-blue-400 to-blue-600'} flex items-center`}>
                <div className="container mx-auto flex flex-row">
                  <div className="w-1/2">
                    <Image src="/path/to/image.jpg" alt="" layout='responsive' width={500} height={300} />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <h2>Panel {index + 1}</h2>
                    <p className="step-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className={`panels-navigation ${index === 0 ? 'text-right' : ''}`}>
                      {index > 0 && (
                        <div className="nav-panel"><a href={`#panel-${index}`} className="anchor">Prev</a></div>
                      )}
                      {index < 4 && (
                        <div className="nav-panel"><a href={`#panel-${index + 2}`} className="anchor">Next</a></div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="map" className="full-screen bg-gradient-to-b from-orange-400 to-orange-600"></section>
      </main>
    </div>
  );
}
