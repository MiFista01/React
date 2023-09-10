import React, { useEffect, useRef, useState } from 'react'
import aboutBack from '../assets/aboutBack.png'
import adventBack from '../assets/adventBack.png'
import galleryBack from '../assets/galleryBack.png'
import formBack from '../assets/formBack.png'
import homeImg from "../assets/homeImg.png"
import woman from "../assets/woman.png"
import ivkhk from "../assets/ivkhk.png"
import adventages from "../assets/adventages.json"
import { Accordion, Form} from 'react-bootstrap'
import AccordingBox from '../components/AccordingBox'
import CarouselBox from '../components/CarouselBox'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
export default function Home({homeRef, aboutRef, advantagesRef, galleryRef, signUpRef, formClick}){
    const navigate = useNavigate();
    const handRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handElement = handRef.current;
        const parentElement = galleryRef.current;

        function updateHandPosition() {
            const parentWidth = parentElement.clientWidth;
            const parentHeight = parentElement.clientHeight;
            let width = window.screen.width
            let height= window.screen.height

            let desireW = 100-(1/(width/parentWidth))*100
            let desireH = 100-(1/(height/parentHeight))*100
            let womanR = -desireW+0.95

            parentElement.style.backgroundPosition = `${desireW}% center`;
            parentElement.style.top = `${desireH}% center`;
            handElement.style.right = `${womanR}%`
        }

        updateHandPosition();

        window.addEventListener('resize', updateHandPosition);
    }, []);
    const clear = () => {
        // Отправка данных на сервер
      
        // Сброс состояния формы и ошибок
        setForm({
          name: '',
          date: '',
          phone: '',
          email: '',
          education: '',
          message: ''
        });
      
        setErrors({
          name: false,
          date: false,
          phone: false,
          email: false,
          education: false,
          message: false
        });
      };
    const [form, setForm] = useState({
        name: '',
        date: '',
        phone: '',
        email:'',
        education: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        date:false,
        phone: false,
        email: false,
        education: false,
        message: false
    });
    const handleChange = (e) => {
        setForm((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
          }));
        
          setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: e.target.value !== '' && e.target.value !== ' ' && e.target.value !== '--'
          }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Отправка данных формы или другая обработка
        let correct = 0
        for(let i in errors) {
            if(errors[i] === true){
                correct += 1
            }
        }
        if(correct === 6){
            axios.request({url:'http://localhost:5000/applications',
                            method:"post",
                            data: form,
                            responseType: 'status'})
            .then(response => {
                // Обработка успешного ответа от сервера
                clear()
            })
            .catch(error => {
                // Обработка ошибок
                console.error(error);
            });
        }
    };
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal(false);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleShow = () => {
        setShowModal(true);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        let data = {}
        
        data.name = email;
        data.password = password;
        axios.request({url:'http://localhost:5000/admin/login',
                            method:"post",
                            data: data,
                            responseType: 'json'}).then(response => {
                                localStorage.setItem('token', response.data.token);
                                return navigate('/admin');
                            })
        // Сброс формы
        setEmail('');
        setPassword('');
    
        // Закрытие модального окна
        setShowModal(false);
      };
    return(
        <>
            <div style={{position:"fixed", right:"0px", bottom:"0px", zIndex:"10"}}>
                <Button variant="primary" onClick={handleShow}>
                    Admin
                </Button>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="email">
                        <Form.Label>User</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter user"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Login
                        </Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <section ref={homeRef} className='element white to-row ft-big first home'>
                <p className='col-3 ft-2'>Learn to transform people into something beautiful.</p>
                <img src={homeImg} className='homeImg img-fluid col-5' alt=''/>
                <p className='col-3'>Learn how to become a hairdresser in Jõhvi at IVKHK</p>
                <button type="button" class="btn btn-dark btn-form" onClick={formClick}>Move to form</button>
            </section>
            <section ref={aboutRef} className='element black to-row' style={{backgroundImage:'url('+aboutBack+')'}}>
                <div className='w-50'>
                    <h1 className='ft-large '>About</h1>
                    <p className='ft-middle'>We are located in Estonia in the city of Jõhvi. We teach the craft of a hairdresser. We will show you all the charms and subtleties of this case. The profession is suitable for those who love to communicate, create and fantasize. Study 2 and 3 years of study, all in Estonian. Come try it, you won't regret it</p>
                </div>
                <button type="button" class="btn btn-dark btn-form" onClick={formClick}>Move to form</button>
            </section>
            <section ref={advantagesRef} className='element black to-row justify-content-start' style={{backgroundImage:'url('+adventBack+')', paddingRight:"35%"}}>
                <div className='d-flex w-100 ms-5 h-100 align-items-center'>
                    <div className='w-50'>
                        <Accordion style={{width:"100%"}}>
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
                <button type="button" class="btn btn-dark btn-form" onClick={formClick}>Move to form</button>
            </section>
            <section ref={galleryRef} className='element black' id='carousel-block' style={{backgroundImage:'url('+galleryBack+')', backgroundPosition:"right center"}}>
                <div className='slider' ref={sliderRef}>
                    <CarouselBox />
                </div>
                <img src={woman} alt='sad' ref={handRef}  className='woman' id='hand'/>
            </section>
            <section ref={signUpRef} className='element black to-row flex-column' style={{backgroundImage:'url('+formBack+')'}}>
                
                <Form onSubmit={handleSubmit} className='sign needs-validation'>
                <h1>Register for an interview</h1>
                    <div className='data'>
                        <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            name="name"
                            value={form.name}
                            className={`form-control-lg ${errors.name ? "is-valid" : "is-invalid"}`}
                            onChange={handleChange}
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="date">
                        <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                            type="date"
                            name="date"
                            value={form.date}
                            className={`form-control-lg ${errors.date ? "is-valid" : "is-invalid"}`}
                            onChange={handleChange}
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                            <Form.Control
                            type="phone"
                            name="phone"
                            value={form.phone}
                            className={`form-control-lg ${errors.phone ? "is-valid" : "is-invalid"}`}
                            onChange={handleChange}
                            required
                            />
                        </Form.Group>
                    </div>
                    <div className='data'>
                        <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={form.email}
                            className={` form-control-lg ${errors.email ? "is-valid" : "is-invalid"}`}
                            onChange={handleChange}
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="education">
                        <Form.Label>Education</Form.Label>
                            <Form.Select 
                            name='education' 
                            custom className={`form-control-lg ${errors.education ? "is-valid" : "is-invalid"}`}
                            onChange={handleChange}
                            value={form.education}
                            required>
                            <option value="" selected disabled >Select education</option>
                            <option value="1">elementary education</option>
                            <option value="2">secondary education</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className='w-100 align-items-end letter'>
                        <Form.Group controlId="message" className='w-75'>
                        <Form.Label>Message</Form.Label>
                            <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={form.message}
                            style={{ resize: 'none', height:"25vh" }}
                            placeholder='Additional information (motivation letter)'
                            className={`form-control-lg ${errors.message ? "is-valid" : "is-invalid"}`}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit" className='ft-middle'>Submit</Button>
                    </div>
                    
                </Form>
                <img src={ivkhk}  alt='ivkhk' className='ico-ivkhk'/>
            </section>
        </>
    )
}