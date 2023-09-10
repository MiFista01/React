import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import { Button, Modal } from 'react-bootstrap';
export default function Admin(){
    const navigate = useNavigate();
    const [applications, setApplications] = useState(null);
    useEffect(() => {
        // Проверка авторизации при загрузке страницы
        const isLoggedIn = localStorage.getItem('user');
        axios.get('http://localhost:5000/admin',{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                navigate("/")
            });
    }, []);
    const handleLogOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    };
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const handleRowClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    };
    const [data, setData] = useState(null);
    const handleStatus = (e) => {
        axios.post('http://localhost:5000/admin/status',{id: e.target.id, status: e.target.value, email: e.target.getAttribute('email')})
            .then(response => {
                setData("Updated");
            })
            .catch(error => {
                setData("Error");
            });
    };
    return(
        <>
        <div style={{position:"fixed", right:"0px", bottom:"0px", zIndex:"10"}}>
                <Button variant="primary" onClick={handleLogOut}>
                    LogOut
                </Button>
            </div>
            <div className='w-75 m-auto admin'>
            {applications &&applications.map((data) => (
                <>
                    <div className='w-100 d-flex flex-wrap justify-content-between' key={data.id} onClick={() => handleRowClick(data)}>
                        <h2 className='w-100'>{data.name}</h2>
                        <div className='d-flex align-items-center'>
                            <div className='pe-5'>
                                <p className='m-0'>Phone: {data.phone}</p>
                                <p className='m-0'>Email: {data.email}</p>
                            </div>
                            <div>
                                <p>{data.education === 1? "elementary education": "secondary education"}</p>
                                <p>{data.date}</p>
                            </div>
                            
                        </div>
                        
                        <p className='date'>{dateFormat(data.createdAt, 'yyyy-mm-dd HH:MM:ss')}</p>
                    </div>
                </>
            ))}
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedUser && (
                    <div className='w-100 d-flex flex-wrap justify-content-between'>
                        <h2 className='w-100'>{selectedUser.name}</h2>
                        <div className='d-flex align-items-center'>
                            <div className='pe-5'>
                                <p className='m-0'>Phone: {selectedUser.phone}</p>
                                <p className='m-0'>Email: {selectedUser.email}</p>
                            </div>
                            <div>
                                <p>{selectedUser.education === 1? "elementary education": "secondary education"}</p>
                                <p>Date of burn: {selectedUser.date}</p>
                            </div>
                            
                        </div>
                        
                        <p className='date'>Applications created: {dateFormat(selectedUser.createdAt, 'yyyy-mm-dd HH:MM:ss')}</p>
                        
                        <div className='btns d-flex '>
                            <div className="form-check d-flex flex-column-reverse align-items-center me-3">
                                <input className="form-check-input" type="radio" name="status" checked={selectedUser.status === true? true: false} id={selectedUser.id} email={selectedUser.email} value={true} onChange={handleStatus}/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Accept
                                </label>
                            </div>
                            <div className="form-check d-flex flex-column-reverse align-items-center">
                                <input className="form-check-input" type="radio" name="status" checked={selectedUser.status === false? true: false} id={selectedUser.id} email={selectedUser.email} value={false} onChange={handleStatus}/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Reject
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                <p>{data}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}