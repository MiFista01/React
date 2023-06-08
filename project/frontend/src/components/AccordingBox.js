import React from 'react'
import { Accordion } from 'react-bootstrap'


export default function AccordingBox({data}){
    let textResult = [];
    if(typeof data.text[0] === 'string'){
        textResult = <><p className='ft-5'>{data.text[0]}</p></>
    }else{
        for(let i of data.text){
            textResult.push(getList(i))
        }
    }
    return(
        <>
            <Accordion.Item eventKey={data.key} className='m-2'>
                <Accordion.Header>
                    {data.header}
                </Accordion.Header>
                <Accordion.Body>{textResult}</Accordion.Body>
            </Accordion.Item>
        </>
    )
}
function getList(array){
    let header = array.slice(0,1);
    let arrayText = array.slice(1,-1)
    let text =  <>
        <p>{header}</p>
        <ul>
        {arrayText.map((data) => (
            
                <li>
                    {data}
                </li>
        ))}
    </ul>
    </>
    return text;
}