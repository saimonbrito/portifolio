'use client'
 import React from 'react';
import { Carousel } from 'antd';
import { Ivimg } from '../Main/styles';
import Image from 'next/image'


const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const Slideres: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
      <Ivimg> 
        
            <Image 

              src="/so.png"
              width={800}
              height={400}
              alt="Picture of the author"
          />
       </Ivimg>
      
      
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
     
      <Ivimg> 
      
            <Image 
              src="/sistema-vendas.png"
              width={400}
              height={400}
              alt="Picture of the author"
          />
          
       </Ivimg>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Slideres;