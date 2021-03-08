import React from 'react'
import { Tooltip } from 'antd';
import Icon from '@ant-design/icons';

function LikeDislikes() {
    return (
        <div>
            <span key="comment-basic-like">
                <Tooltip title="like">
                    <Icon type="like" theme="filled" onClick />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}> 1 </span>
            </span>

            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <Icon type="dislike" theme="outlined" onClick />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}> 1 </span>
            </span>
        </div>
    )
}

export default LikeDislikes
