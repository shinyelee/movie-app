import React, { useState } from 'react';
import {Icon} from 'antd';
// 나중에 Happy Coding 옆에 아이콘 넣기 <Icon type="smile" />

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Happy Coding </p>
        </div>
    )
}

export default Footer
