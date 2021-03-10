import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';

function ReplyComment(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)
   
    useEffect(() => {
        
        let commentNumber = 0;
        props.CommentLists.map((comment, i) => {

            if(comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)
    }, [props.CommentLists, props.parentCommentId])

    let renderReplyComment = (parentCommentId) => 
        props.CommentLists.map((comment, index) => (
        
            <React.Fragment key={comment._id}>
                {
                    comment.responseTo === parentCommentId &&
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment parentCommentId={comment._id} CommentLists={props.CommentLists} postId={props.postId} refreshFunction={props.refreshFunction} />
                    </div>
                }
            </React.Fragment>
        ))
    

    const handleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
    }

    return (
        <div>

            {ChildCommentNumber > 0 &&
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }}
                   onClick={handleChange} >
                    View {ChildCommentNumber} more comment(s)
                </p>
            }

            {OpenReplyComments && renderReplyComment(props.parentCommentId)}

        </div>
    )
}

export default ReplyComment