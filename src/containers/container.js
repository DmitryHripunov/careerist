import React from 'react';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import {addComment, removeComment} from '../actions';


let Container = ({ comments, addComment, removeComment }) => {

  return (
    <div>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} removeComment={removeComment} />
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
    removeComment: (id) => dispatch(removeComment(id)),
  }
};

Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)

export default Container;