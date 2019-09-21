import _ from 'lodash'
import './style.css'
import myimg from './my-image.jpg'
import data from './data.xml'

function component() {
    const element = document.createElement('div');

    element.classList.add('hello')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    

    let myImage = new Image();
    myImage.src = myimg;
    element.appendChild(myImage);

    console.log(data);

    return element;
  }
  
  document.body.appendChild(component());