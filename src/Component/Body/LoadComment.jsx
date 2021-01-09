import React from 'react';

const LoadComment = (props) => {
 
    
    return (
        props.comment.map((comment)=> {
        return(
        <div>
            <h5>{comment.author}</h5>
            <h6>{comment.rating}</h6>
            <p>{comment.comment}</p>
            <p>{comment.date}</p>
        </div>
        )
    })

    );
};

export default LoadComment;