import React from 'react'
import { Accordion, Col, Container, ListGroup, ListGroupItem, Nav, NavLink, Navbar, Row } from 'react-bootstrap'
import parse from 'html-react-parser'


let key = 0
export default function AccordingBox({key, header, text}){
    let textResult = [];
    if(typeof text[0] === 'string'){
        textResult = text[0]
    }else{
        for(let i of text){
            textResult.push(getList(i))
        }
    }
    const isAccordionItemActive = false;
    return(
        <Accordion>
            <Accordion.Item eventKey={key} key={key} active={isAccordionItemActive} className='expanded'>
                <Accordion.Header>
                    {header}
                </Accordion.Header>
                <Accordion.Body>{textResult}</Accordion.Body>
                </Accordion.Item>
        </Accordion>
    )
}
function getList(array){
    let header = array.slice(0,1);
    let arrayText = array.slice(1,-1)
    let text =  <>
        <h5>{header}</h5>
        <ul>
        {arrayText.map((data) => (
            
                <li>
                    {data}
                </li>
            
        ))}
    </ul>
    </>
    console.log(header)
    return text;
}