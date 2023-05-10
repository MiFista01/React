import React from 'react'
import { Carousel } from 'react-bootstrap'

const fs = require('fs');
const path = require('path');
const directory = './';
export default function CarouselBox(){
    let filesDir = []
    fs.readdir(directory, (err, files) => {
        files.forEach(file => {
          // get the details of the file 
          let fileDetails = fs.lstatSync(path.resolve(directory, file));
          // check if the file is directory 
          if (!fileDetails.isDirectory()) {
            filesDir.push(file)
          }
        });
      })
    // use readdir method to read the files of the direcoty 
    
    return(
        
    //    <Carousel>
    //     filenames.map((filenames) =>{
            filesDir.map((element) =>{})
    //     })
    //    </Carousel>
    )
}