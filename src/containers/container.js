import React from 'react';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import {addComment, getComments} from '../actions';


let Container = ({ comments, addComment }) => {
  // console.log(getComments)
  return (
    <div>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    comments: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, text) => dispatch(addComment(name, text)),
    // getComments: (state) => dispatch(getComments(state)),
  }
};

Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)

export default Container;