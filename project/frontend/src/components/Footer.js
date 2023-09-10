import React from 'react'
import footer from "../assets/footer.png"
import { Container} from 'react-bootstrap'
export default function Footer({homeClick, aboutClick, advantagesClick, galleryClick}){
    return(
        <footer className='footer w-100 d-flex align-items-center' style={{backgroundImage:"url("+footer+")", backgroundSize:"cover"}}>
           <p className='col-2 ft-small'>IVKHK is the best institution for acquiring a profession</p>
           <ul className='ft-small'>
                <li onClick={homeClick}><p>Home</p></li>
                <li onClick={aboutClick}><p>About</p></li>
                <li onClick={advantagesClick}><p>Advantages</p></li>
                <li onClick={galleryClick}><p>Gallery</p></li>
           </ul>
           <div className='d-flex'>
                <p className='ft-small'>
                    Additional Information:
                    <br/>
                    mailto:vastuvott@ivkhk.ee
                </p>
                <p className='ft-small'>
                    Valentina Gorohh, head of specialties:
                    <br/>
                    mailto:valentina.goroh@ivkhk.ee
                    <br/>
                    +372 5234 757
                </p>
           </div>
        </footer>
    )
}