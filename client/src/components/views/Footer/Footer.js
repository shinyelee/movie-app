import React from 'react';
import { VideoCameraOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> <VideoCameraOutlined /> https://github.com/shinyelee/Movie-ing </p>
        </div>
    )
}

export default Footer
