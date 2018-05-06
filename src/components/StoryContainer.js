import React from 'react';
import request from 'request';
import Story from './Story';
import CommentContainer from './CommentContainer';

export default class StoryContainer extends React.Component {

    constructor(props){
        super(props);
        this.renderTopLevelComments = this.renderTopLevelComments.bind(this);
      }

    renderTopLevelComments(){
        const {children} = this.props.story;
        const result = children.map((id)=>{
          return (
            <CommentContainer id={id} key={id} offset={0} {...this.props}/>
          )
        });
        return result;
      }


    componentDidMount(){
        request.get(`${process.env['REACT_APP_API_ADDRESS']}/${process.env['REACT_APP_STORY_ID']}.json?print=pretty`, (err, res, body) =>{
                if(!err){
                    const {by, descendants, kids, score, time, title, url} = JSON.parse(body);
                    this.props.setStory(by, descendants, kids, score, time, title, url);
                }
            });
    }


    render(){
        const {story} = this.props;
        return(
            <div>
                <Story story={story}/>
                <div style={{paddingTop: 170}}>
                    {this.renderTopLevelComments()}
                </div>
            </div>
        );
    }
}