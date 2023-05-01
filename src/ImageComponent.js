import React from 'react';
import { imageStyle } from './styles';
import mainImage from './ai_art.jpeg';

function ImageComponent () {
    return (
        <div className={imageStyle.headerComponent}>
            <p>Hello this is me</p>
            <img src={mainImage} class={imageStyle.imageSection}/>
        </div>
    )
}

export default ImageComponent;