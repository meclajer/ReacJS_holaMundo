import React from "react";

const SingleComment = (props) => {
    return (
        <div className="comment">
            <a href='/' className="avatar">
                <img src={props.profilepecture} alt="Imagen de perfil" />
            </a>
            <div className='content'>
                <a href='/' className="author">{props.name}</a>
                <div className="metadata">
                    <div className="date">{props.date}</div>
                </div>
                <div className="text">
                    {props.textcomment}
                </div>
            </div>
        </div>
    )
}

export default SingleComment;