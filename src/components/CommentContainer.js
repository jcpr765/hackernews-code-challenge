import React from 'react';
//import Comment from './Comment';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import renderHTML from 'react-render-html';

export default class CommentContainer extends React.Component {

    constructor(props){
        super(props);
        this.renderComments = this.renderComments.bind(this);
    }


    // renderComments(){
    //     const currentComment = this.props.comments[this.props.id];
    //     if(currentComment){
    //         const {author,children, text, time} = currentComment;
    //         const offset = this.props.offset + 20;
    //         let subComments = null;
    //         if(currentComment.children){
    //             subComments = children.map((id)=>{
    //                 return (
    //                     <CommentContainer id={id} key={id} offset={offset} {...this.props}/>
    //                 );
    //             });   
    //         }
    //         return (
    //             <Comment author={author} text={text}  time={time}>
    //                 {subComments}
    //             </Comment>
    //         );
    //     }
    //     return null;
    // }

    renderComments(){

    }

    // componentDidMount(){
    //     request.get(`${process.env['REACT_APP_API_ADDRESS']}/${this.props.id}.json?print=pretty`, (err, res, body) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             const {by, id, kids, parent, text, time} = JSON.parse(body);
    //             this.props.addComment(by, id, kids, parent, text, time);
    //         }
    //     });
    // }
    
    // render(){
    //     return this.renderComments()
    // }

    render(){
        const style = {
            fontSize: "1em",
            marginLeft: this.props.offset,
        };
    
        const orange = {
            color: "#ff6600",
        };

        const thisComment = this.props.comment;
        
        const subComments = this.props.comments.filter((comment)=>{
            return comment.parent === this.props.comment.id;
        });

        return(
            <div>
                <div style={style}>
                    <div className="user-info">
                        <span style={orange}>
                            <FontAwesome name="user"/>
                            {thisComment.author}&nbsp;
                        </span>
                        <i className="far fa-hourglass"></i>
                        {moment.unix(thisComment.time).format('LL')}
                    </div>
                    <div className="user-comment">{renderHTML(thisComment.text)}</div>
                </div>
            </div>
        );
    }
}