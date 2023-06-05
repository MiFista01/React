
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useRef } from 'react';
function App() {
  const HomeRef = useRef();
  const AboutRef =  useRef();
  const AdvantagesRef =  useRef();
  const GalleryRef = useRef();
  const SignUpRef = useRef();

  function homeClick(){
    HomeRef.current.scrollIntoView({behavior:'smooth'})
  }
  function aboutClick(){
      AboutRef.current.scrollIntoView({behavior:'smooth'})
  }
  function advantagesClick(){
      AdvantagesRef.current.scrollIntoView({behavior:'smooth'})
  }
  function galleryClick(){
      GalleryRef.current.scrollIntoView({behavior:'smooth'})
  }
  function signUpClick(){
      SignUpRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrollTop = ()=>{
      window.scrollTo({
          top: 0,
          behavior:'smooth'
      })
  }
  const refs = [HomeRef, AboutRef,AdvantagesRef, GalleryRef, SignUpRef,]
  return (
    <>
      <Header homeClick={homeClick} aboutClick={aboutClick} advantagesClick={advantagesClick} galleryClick={galleryClick} signUpClick={signUpClick} />
      <main className='w-100'><Content refs={refs} /></main>
      <Footer />
    </>
  );
}

export default App;
