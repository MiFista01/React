import React, { useRef } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'
import AccordingBox from '../components/According'
import BannerBox from "../components/BannerBox"
import CardBox from "../components/CardBox"
export default function Home(){
    const accordingRef = useRef()
    const bannerRef = useRef()
    const cardRef = useRef()
    function accordingClick(){
        accordingRef.current.scrollIntoView({behavior:'smooth'})
    }
    function bannerClick(){
        bannerRef.current.scrollIntoView({behavior:'smooth'})
    }
    function cardClick(){
        cardRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    return(
        <>
            <Navbar expand="md" variant="dark" className='justify-content-end px-4' style={{
                backgroundColor:"#4b4b46",
                position:"fixed",
                right: "0px",
                bottom: "0px",
                zIndex:10
            }}>
                <Nav>
                    <Nav.Link onClick={scrollTop}>Top</Nav.Link>
                    <Nav.Link onClick={accordingClick}>According</Nav.Link>
                    <Nav.Link onClick={bannerClick}>Banner</Nav.Link>
                    <Nav.Link onClick={cardClick}>Cards</Nav.Link>
                </Nav>
            </Navbar>
            <div className='w-100'>
                <h2>Home page</h2>
                <CarouselBox />
                <section ref={accordingRef} className='pt-0'><AccordingBox /></section>
                <section ref={bannerRef} className='pt-5'><BannerBox /></section>
                <section ref={cardRef} className='pt-3'><CardBox /></section>
                
                
                
                
            </div>
        </>
    )
}