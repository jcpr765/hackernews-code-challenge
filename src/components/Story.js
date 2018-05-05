import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import '../css/story.css'

const style ={
    backgroundColor: "#ff6600",
    color: "white",
    fontFamily: "Verdana, Geneva, sans-serif",
    score: {
        color: "gray",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
}


const Story = ({story}) => {

    const {title, score, author, time, descendants, url} = story;

    return(
        <Container fluid style={style}>
            <Row>
                <Col>{title}</Col>
            </Row>
            <br/>
            <Row>
                <Col xs="12" md="6" className="details">
                <span className="score">{score}</span>
                &nbsp;{author}
                &nbsp;{moment.unix(time).format('LL') + "   "}
                <FontAwesome name="comment"/>
                &nbsp;{descendants}
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col xs="12" md="12" className="links">
                    <i className="fas fa-external-link-alt"></i>
                    <a className="links" href={url}>
                        {url}
                    </a>
                </Col>
            &nbsp;
            <Col xs="12" md="12" className="links">
                <i className="fas fa-external-link-alt"></i>
                <a className="links" href={url}>
                    {`${process.env['REACT_APP_HNEWS_ADDRESS']}?/
                        ${process.env['REACT_APP_STORY_ID']}`}
                </a>
            </Col>
            </Row>
        </Container>
    );
};

export default Story;