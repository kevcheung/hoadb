import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getComments, addComments, editComments, deleteComments} from '../../ducks/commentsReducer';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            commenttext:'',
            commentEditClick: false,
            commentid: null
        }
    }
    
enterTextHandler = e => {
    // console.log(e.target.value);
    this.setState({commenttext: e.target.value})
};
onEditCommentSubmitHandler = (id) => {
    this.props.editComments(id, this.state.commenttext).then(() => this.props.getComments(this.props.hoa.searchResult[0].id));
    this.setState({
      commentEditClick: false
    })
  };
onChangeCommentHandler = () =>{
    let newCommentText = this.refs.newCommentText.value;
    this.setState({
      commenttext: newCommentText,
    })
  };
editCommentClickHandler = (id, index) => {
    this.setState({
      commentEditClick: !this.state.commentEditClick,
      commentid: id,
      commenttext: this.props.comments.comments[index].comments
    })
  };

    render(){
        const commentRender = this.props.comments.comments.map((curr, index) => {
        //   console.log("state!!!!!!!!!!!!!!!!!!!!!!!!", this.state)
        return (
            <div key = {index}>
            {(this.state.commentEditClick && this.state.commentid === curr.commentsid) ? 
            <div>
              <input
                      ref="newCommentText"
                      value={this.state.commenttext}
                      onChange={this.onChangeCommentHandler}
                      type="text"
                      name="commenttext"
                  />
                  <button className="commentSaveChange" onClick={ () => this.onEditCommentSubmitHandler(curr.commentsid)}>Save Changes</button>
            </div> :
                <div>
                    <p className="username">{curr.name}</p>
                    <p className="comments"> {curr.comments}</p>
                    {(this.props.user.user.id === curr.userid) ? <button className="editComment" onClick={ () => this.editCommentClickHandler(curr.commentsid, index)}>Edit</button> : null}
                    {(this.props.user.user.id === curr.userid) ? <button className="deleteComment" onClick={ () => this.props.deleteComments(curr.comments)
                    .then(() => this.props.getComments(this.props.hoa.searchResult[0].id))}>Delete</button> : null}
                </div>}
            </div>
            )
        }) ;
        console.log(this.props)
        const { commenttext } = this.state;
        return(
            <div className="comments">
            {commentRender}
                <textarea
                    value={this.state.commenttext}
                    onChange={this.enterTextHandler}
                    type="text"
                    name="commenttext"
                />
                <div>
                <button 
                    className="addCommentsButton" 
                    onClick={ () => this.props.addComments(commenttext, this.props.user.user.id, this.props.hoa.searchResult[0].id)
                    .then(() => this.setState({commenttext:''}))
                    .then(() => this.props.getComments(this.props.hoa.searchResult[0].id))}>Add Comments</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state;

  export default connect(mapStateToProps, {getComments, addComments, editComments, deleteComments})(Comments);