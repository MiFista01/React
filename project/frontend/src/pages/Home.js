import React, { useRef } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
export default function Home(){
    const scrollTo = useRef()

    function Click(){
        scrollTo.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    return(
        <>
            {/* <Navbar expand="md" variant="dark" className='justify-content-end px-4' style={{
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
            </Navbar> */}
            <div className=''>
                <h2>Home page</h2>
                
            </div>
        </>
    )
}