import React, { Component } from 'react';
import StoryContainer from './StoryContainer';
import rp from 'request-promise';

class App extends Component {

  constructor(props){
    super(props);
    this.traversal = this.traversal.bind(this);
    this.makeCall = this.makeCall.bind(this);
  }

  componentDidMount(){
    rp(`${process.env['REACT_APP_API_ADDRESS']}/${process.env['REACT_APP_STORY_ID']}.json?print=pretty`).then((body)=>{
      const {by, descendants, kids, score, time, title, url} = JSON.parse(body);
      console.log("Initial length: " + kids.length + "\nTotal children: " + descendants);
      this.props.setStory(by, descendants, kids, score, time, title, url);
      const comments = [];
      this.traversal(kids, comments).then(()=>{
          this.props.setComments(comments);
          console.log("Done");
          console.log(this.props.comments.length);
      });
  
    });
  }

  traversal = async (ids=[], arr) => {
    if(ids.length > 0){
        console.log("Current length: " +  ids.length);
        const promises = [];
        ids.map((id)=>{
            return promises.push(this.makeCall(id));
        });
        const responses = await Promise.all(promises);
        const newIds = [];
        responses.map((body)=>{
          const {by, id, kids, parent, text, time} = JSON.parse(body);
          arr.push({author:by, id, children:kids, parent, text, time});
            if(kids)
                newIds.push(...kids);
          return "";
          
        });
        //console.log('Length: ' + this.props.comments.length);
        return await this.traversal(newIds, arr);
    }
  }

  makeCall = (id) => {
    return rp(`${process.env['REACT_APP_API_ADDRESS']}/${id}.json?print=pretty`);   
  }

  render() {
    return (
      <div>
        <StoryContainer {...this.props}/>
      </div>
    );
  }
}

export default App;
