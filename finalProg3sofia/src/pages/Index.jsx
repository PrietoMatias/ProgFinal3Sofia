// client/src/pages/Index.jsx
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import esperanza from './formatos/esperanza.gif';
import peces from './formatos/peces.png';
import hilos from './formatos/hilos.jpg';
import airelibre from './formatos/airelibre.jpg';
import bolos from './formatos/bolos.jpg';
import personas from './formatos/personassm.jpg';
import pinpom from './formatos/pinpomjpg.jpg';
import grupo from './formatos/grupolove.jpg';
import globos from './formatos/globos.jpg';
import directora from './formatos/personal/directora.jpeg';
import jfemfermera from './formatos/personal/jfemfermera.jpeg';
import jfemfermeros from './formatos/personal/jfemfermeros.jpg';
import neurologo from './formatos/personal/neurologo.jpeg';
import psicologa from './formatos/personal/psicologa.jpeg';
import whats from './formatos/contactos/whats.png';
import call from './formatos/contactos/call.png';
import email from './formatos/contactos/email.png';
import ig from './formatos/contactos/ig.png';
import maps from './formatos/contactos/maps.png';
import './styles/Index.css';

const images = [
  { original: hilos, thumbnail: hilos },
  { original: airelibre, thumbnail: airelibre },
  { original: bolos, thumbnail: bolos },
  { original: personas, thumbnail: personas },
  { original: pinpom, thumbnail: pinpom },
  { original: grupo, thumbnail: grupo },
  { original: globos, thumbnail: globos },
];

const Index = () => {
  return (
    <div className='body'>
      <div>
        <div className='menu'>
          <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '0px' }}>
            <a href="#acerca">Acerca de Nosotros</a>
            <a href="#nosotros">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a href="./LoginAdmin"><img src={peces} alt='logo' /></a>
          </nav>
        </div>

        <div className='gif'>
          <img src={esperanza} alt='gif' />
        </div>

        <div className='acerca' id="acerca" style={{ height: '500px', padding: '20px' }}>
          <h2>Bienvenidos a Esperanza: Tu Centro de Salud Integral</h2>
          <p>
            En Esperanza, nos dedicamos a brindar atención médica de calidad con un enfoque integral y humano. Nuestro compromiso es ofrecer servicios de salud personalizados que promuevan el bienestar físico, emocional y mental de nuestros pacientes. Con un equipo de profesionales altamente capacitados y tecnología de punta, en Esperanza encontrarás el apoyo necesario para cuidar de tu salud y la de tus seres queridos. Ven y descubre un lugar donde tu bienestar es nuestra prioridad.
          </p>

          <div className='carrusel'>
            <ImageGallery items={images}
              showPlayButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
              slideInterval={2500}
              slideDuration={1000}
              thumbnailPosition='left'
            />
          </div>
        </div>

        <hr className="divisoria" />

        <div className='personal' id="nosotros" style={{ height: '500px', padding: '20px' }}>
          <div className='imagen-box'>
            <img src={directora} alt='directora' />
            <div className='contenido'>
              <h3>Sandra Salvatierra</h3>
              <p>DIRECTORA</p>
            </div>
          </div>
          <div className='imagen-box'>
            <img src={neurologo} alt='neurologo' />
            <div className='contenido'>
              <h3>David Hoft</h3>
              <p>Especialista en neurología</p>
            </div>
          </div>
          <div className='imagen-box'>
            <img src={psicologa} alt='psicologa' />
            <div className='contenido'>
              <h3>Julieta Suarez</h3>
              <p>Terapeuta general</p>
            </div>
          </div>
          <div className='imagen-box'>
            <img src={jfemfermeros} alt='jfemfermeros' />
            <div className='contenido'>
              <h3>Pedro Capo</h3>
              <p>Encargado de enfermeros - turnos nocturnos -</p>
            </div>
          </div>
          <div className='imagen-box'>
            <img src={jfemfermera} alt='jfemfermera' />
            <div className='contenido'>
              <h3>Kun chin Ga</h3>
              <p>Encargada de enfermeras</p>
            </div>
          </div>
        </div>

        <hr className="divisoria" />

        <div className='contacto' id="contacto">
      
      <div className='iconos'>
        <div className='maps'>
          <a href='https://maps.app.goo.gl/B7N1q5ZHZ3p1Wige8' target="_blank">
            <img src={maps} alt='maps' />
          </a>
        </div>
        <div className='call'>
          <a href='tel:+543815741573' target="_blank">
            <img src={call} alt='call' />
          </a>
        </div>
        <div className='email'>
          <a href='karenbarraza152@gmail.com' target="_blank">
            <img src={email} alt='email' />
          </a>
        </div>
        <div className='whats'>
          <a href='https://wa.me/3815741573' target="_blank">
            <img src={whats} alt='whats' />
          </a>
        </div>
        <div className='ig'>
          <a href='https://www.instagram.com/karenb2976' target="_blank" rel="noopener noreferrer">
            <img src={ig} alt='ig' />
          </a>
        </div>
      </div>
    </div>


      </div>
    </div>
  );
};

export default Index;
