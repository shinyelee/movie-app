import React, { useState }  from 'react'

function Comments() {

    const [commentValue, setcommentValue] = useState("")

    // const handleClick = (event) => {
    //     setcommentValue(event.currentTarget.value)
    // }

    return (
        <div>
            <br />
            <p> Replies </p>
            <hr />

            {/* Coment Lists */}

            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit>
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    // onChange={handleClick}
                    value
                    placeholder="댓글을 작성해 주세요"
                />
                <br />
                <button style={{ width: '20%', height: '52px' }} onClick> Submit </button>
            </form>

        </div>
    )
}

export default Comments
