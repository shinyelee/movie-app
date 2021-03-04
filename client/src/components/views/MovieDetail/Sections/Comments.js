import React, { useState }  from 'react'
import { Button, Input, Typography } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';

const { TextArea } = Input;
const { Title } = Typography;

function Comments(props) {

    // const movieId = props.postId;

    const user = useSelector(state => state.user);
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId 
        }
        console.log(variables)

        axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success) {
                console.log(response.data.result)
                setComment("")
                props.refreshFunction(response.data.result)
            } else {
                alert('댓글 저장에 실패했습니다.')
            }
        })
    }

    return (
        <div>
            <br />
            <Title level={3} > Share your opinions about {props.movieTitle} </Title>
            <hr />

            {/* Coment Lists */}
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                    </React.Fragment>
                )
            ))}
            
            {props.CommentLists && props.CommentLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px'}} >
                    Be the first one who shares your thought about this movie
                </div>
            }

            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="댓글을 작성해 주세요"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}> Submit </Button>
            </form>

        </div>
    )
}

export default Comments
