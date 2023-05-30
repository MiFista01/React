import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
export default function Departments({depId, onClickDepartment}){
    const [department, setDepartment] = useState([])
    useEffect(()=>{
        const dep = async ()=>{
            const res = await axios.get(`http://localhost:5000/department`)
            setDepartment(res.data)
        }
        dep();
    },[])
    return(
        <>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem  style={{cursor:"pointer"}} key={0} onClick={()=> onClickDepartment(0)} className={depId === 0 ? 'active':''}>All</ListGroupItem>
                    {department.map((data) =>(
                        <ListGroupItem style={{cursor:"pointer"}} key={data.id} onClick={()=> onClickDepartment(data.id)} className={depId === data.id? 'active':''}>{data.name}</ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </>
    )
}