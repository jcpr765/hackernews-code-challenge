import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import renderHTML from 'react-render-html';

const Comment = (props) => {

    const style = {
        fontSize: "1em",
        marginLeft: props.offset,
    };

    const orange = {
        color: "#ff6600",
    };
    

    return (
        <div>
            <div style={style}>
                <div className="user-info">
                    <span style={orange}>
                        <FontAwesome name="user"/>
                        {props.author}&nbsp;
                    </span>
                    <i className="far fa-hourglass"></i>
                    {moment.unix(props.time).format('LL')}
                </div>
                <div className="user-comment">{renderHTML(props.text)}</div>
            </div>
            {(typeof props.children !== "undefined") ? props.children:null}
        </div>
    );
}

export default Comment;