import React from 'react';
import Comment from './Comment';
import request from 'request';

export default class CommentContainer extends React.Component {

    constructor(props){
        super(props);
        this.renderComments = this.renderComments.bind(this);
    }

    renderComments(){
        // const children = this.props.comments.filter((parent)=>{
        //     return parent === this.props.id;
        // });
        const children = Object.keys(this.props.comments).filter((key)=>{
            return this.props.comments[key].parent === this.props.id;
        });
        if(children.length === 0){
            console.log("These children empty");
        }  
        const childOffset = this.props.offset + 20;
        const result = children.map((id)=>{
            return (
              <CommentContainer id={id} key={id} offset={childOffset}/>
            );
        });

        return result;

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


    render(){
        if(typeof this.props.comments[this.props.id] !== "undefined" ){
            const {author, time, text} = this.props.comments[this.props.id];

            return(
                <Comment author={author} text={text} time={time}>
                    {this.renderComments()}
                </Comment>
            );
        }
        else
            return null;
    }
}