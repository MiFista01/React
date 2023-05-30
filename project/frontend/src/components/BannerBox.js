import React from 'react'
import { Container, Button } from 'react-bootstrap'


export default function AccordingBox(){
    return(
        <Container fluid className=' mt-5 w-100 bg-success text-white p-5 opacity-75' style={{
            backgroundImage:"url(https://www.physisscotland.co.uk/wp-content/uploads/2021/04/Newsletter-Growing-and-Developing-2021-1900-x-600.png)",
            height:400,
            backgroundSize: 'cover'
        }}>
            <Container className='p-5'>
                <h1>Example Banner</h1>
                <p>
                    Recusandae atque et consequatur maiores est quasi deleniti eligendi. Molestiae sequi minima rem expedita ut deleniti unde est. Molestias non veritatis voluptates sint natus et. Qui architecto qui ea tempora suscipit. Ratione aliquid omnis qui aut ab. Sint et molestiae expedita illum eos libero.Quisquam et est nobis consequatur. Quis ut velit repellendus aut modi eius consectetur sint. Voluptas quia reiciendis consequatur. Eum et minima molestiae autem at voluptas.
                </p>
                <p>
                    <Button className="primary"> Learn more</Button>
                </p>
            </Container>
        </Container>
        
    )
}