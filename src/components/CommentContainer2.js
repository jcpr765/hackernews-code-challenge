import React from 'react';
import Comment from './Comment';
import request from 'request';

export default class CommentContainer2 extends React.Component {

    constructor(props){
        super(props);
        this.renderTopLevelComments = this.renderTopLevelComments.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    renderTopLevelComments(children){
        if(typeof children !== "undefined"){
            console.log("Not")
            const offset = this.props.offset + 20;
            const result = children.map((id)=>{
                return (
                    <CommentContainer2 id={id} key={id} offset={offset} {...this.props}/>
                );
            });
            return result;
        }
        return null;
    }

    renderComments(){
        const currentComment = this.props.comments[this.props.id];
        if(typeof currentComment !== "undefined"){
            const {author,children, text, time} = currentComment;
            const offset = this.props.offset + 20;
            let subComments = null;
            if(typeof currentComment.children !== "undefined"){
                console.log(currentComment.parent);
                subComments = children.map((id)=>{
                    return (
                        <CommentContainer2 id={id} key={id} offset={offset} {...this.props}/>
                    );
                });   
            }
            return (
                <Comment author={author} text={text}  time={time}>
                    {subComments}
                </Comment>
            );
        }
        return null;
    }

    componentDidMount(){
        request.get(`${process.env['REACT_APP_API_ADDRESS']}/${this.props.id}.json?print=pretty`, (err, res, body) => {
            if(err){
                console.log(err);
            }
            else{
                const {by, id, kids, parent, text, time} = JSON.parse(body);
                this.props.addComment(by, id, kids, parent, text, time);
            }
        });
    }

    // componentDidMount(){
    //     request.get(`${process.env['REACT_APP_API_ADDRESS']}/${this.props.id}.json?print=pretty`, (err, res, body) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             const {by, id, kids, parent, text, time} = JSON.parse(body);
    //             this.props.addComment(by, id, kids, parent, text, time);
    //             const promises = kids.map((childId) => {
    //                 request.get(`${process.env['REACT_APP_API_ADDRESS']}/${childId}.json?print=pretty`, (err, res, body) => {
    //                     if(!err){
    //                         const {by, id, kids, parent, text, time} = JSON.parse(body);
    //                         this.props.addComment(by, id, kids, parent, text, time);
    //                     }
    //                 });
    //             });
    //             Promise.all(promises).then(()=>{
    //                 console.log("Set of children added");
    //             });
    //         }
    //     });
    // }


    // render(){
    //     if(typeof this.props.comments[this.props.id] !== "undefined" ){
    //         const {author, time, text, children} = this.props.comments[this.props.id];

    //         return(
    //             <Comment author={author} text={text} time={time}>
    //                 {this.renderTopLevelComments(children)}
    //             </Comment>
    //         );
    //     }
    //     else
    //         return null;
    // }

    render(){
        return this.renderComments()
    }
}