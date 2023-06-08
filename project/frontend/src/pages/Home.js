import React from 'react'
import aboutBack from '../assets/aboutBack.png'
import adventBack from '../assets/adventBack.png'
import galleryBack from '../assets/galleryBack.png'
import homeImg from "../assets/homeImg.png"
import hand from "../assets/carousel/hand.png"
import adventages from "../assets/adventages.json"
import { Accordion} from 'react-bootstrap'
import AccordingBox from '../components/AccordingBox'
import CarouselBox from '../components/CarouselBox'
export default function Home({homeRef, aboutRef, advantagesRef, galleryRef, signUpRef}){
    adventages[0].forEach(element => {
        console.log(element.key)
    });
    return(
        <>
            <section ref={homeRef} className='element white to-row ft-big first'>
                <p className='col-3'>Learn to transform people into something beautiful.</p>
                <img src={homeImg} className='homeImg img-fluid col-5' alt=''/>
                <p className='col-3'>Learn how to become a hairdresser in Jõhvi at IVKHK</p>
            </section>
            <section ref={aboutRef} className='element black to-row' style={{backgroundImage:'url('+aboutBack+')', backgroundPosition:'center', backgroundSize:'cover'}}>
                <div className='w-50'>
                    <h1 className='ft-large '>About</h1>
                    <p className='ft-middle'>We are located in Estonia in the city of Jõhvi. We teach the craft of a hairdresser. We will show you all the charms and subtleties of this case. The profession is suitable for those who love to communicate, create and fantasize. Study 2 and 3 years of study, all in Estonian. Come try it, you won't regret it</p>
                </div>
            </section>
            <section ref={advantagesRef} className='element black to-row justify-content-start' style={{backgroundImage:'url('+adventBack+')', backgroundPosition:'center', backgroundSize:'cover'}}>
                <div className='d-flex w-50 ms-5 h-100 align-items-center'>
                    <div className='w-50'>
                        <Accordion>
                            {adventages[0].map((data) => (
                                <AccordingBox data={data}  className="m-2"/>
                            ))}
                        </Accordion>
                    </div>
                    <div className='w-50'>
                        <Accordion>
                            {adventages[1].map((data) => (
                                <AccordingBox data={data} />
                                
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
            <section ref={galleryRef} className='element black to-row' style={{backgroundImage:'url('+galleryBack+')', backgroundPosition:'center', backgroundSize:'cover'}}>
                <div style={{width:"100vmin"}}>
                    <CarouselBox />
                </div>
                <img src={hand} alt='sad'  className='hand'/>
            </section>
        </>
    )
}