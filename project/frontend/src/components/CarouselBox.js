import React from 'react'
import { Carousel } from 'react-bootstrap'
import p1 from '../assets/carousel/1.jpeg'
import p2 from '../assets/carousel/2.jpeg'
import p3 from '../assets/carousel/3.jpeg'
import p4 from '../assets/carousel/4.jpg'
import p5 from '../assets/carousel/5.jpeg'
import p6 from '../assets/carousel/6.jpeg'
import p7 from '../assets/carousel/7.jpeg'



export default function CarouselBox(){

    return(
        <Carousel className='w-100 backGround' interval={3000} pause={false}>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p1} alt='aaa'/>
          </Carousel.Item>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p2} alt='aaa'/>
          </Carousel.Item>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p3} alt='aaa'/>
          </Carousel.Item>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p4} alt='aaa'/>
          </Carousel.Item>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p5} alt='aaa'/>
          </Carousel.Item>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p6} alt='aaa'/>
          </Carousel.Item>
          <Carousel.Item className='size-carousel'>
            <img className='d-block w-100' src={p7} alt='aaa'/>
          </Carousel.Item>
        </Carousel>
    )
}