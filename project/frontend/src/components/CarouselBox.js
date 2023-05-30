import React from 'react'
import { Carousel } from 'react-bootstrap'
import gif1 from '../assets/giphy (1).gif'
import gif2 from '../assets/giphy (2).gif'
import gif3 from '../assets/giphy (3).gif'
import gif4 from '../assets/giphy.gif'

export default function CarouselBox(){

    return(
        <Carousel className='w-100 backGround'>
          <Carousel.Item>
            <img className='d-block w-100' height={800} src={gif1} alt='aaa'/>
            <Carousel.Caption>
              <h3>GIF</h3>
              <p> LOREM</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' height={800} src={gif2} alt='aaa'/>
            <Carousel.Caption>
              <h3>GIF</h3>
              <p> LOREM</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' height={800} src={gif3} alt='aaa'/>
            <Carousel.Caption>
              <h3>GIF</h3>
              <p> LOREM</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' height={800} src={gif4} alt='aaa'/>
            <Carousel.Caption>
              <h3>GIF</h3>
              <p> LOREM</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
}