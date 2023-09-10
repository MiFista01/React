
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './components/Content';
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
  const clicks = [homeClick, aboutClick, advantagesClick, galleryClick, signUpClick]
  return (
    <>
      
      <main className='w-100'><Content refs={refs} clicks={clicks} /></main>
      
    </>
  );
}

export default App;
