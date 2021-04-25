import React from 'react';

const CommentForm = ({ addComment}) => {
  let inputName;
  let inputText;  
  return (
    <form className="comments-form"  
        onSubmit={e => {
        e.preventDefault()
        if (!inputName.value.trim() || !inputText.value.trim()) {
          alert('заполните все поля')
          return
        }
        addComment(inputName.value, inputText.value)
        inputName.value = '';
        inputText.value = ''
        }}
      >
      <label className="comments-form-label">
        <input className={"comments-form-input"}
          placeholder="Введите имя"
          type="text"
          ref={name => {
            inputName = name
          }}
        />
      </label>

      <label className="comments-form-label">
        <textarea className="comments-form-textarea"
          placeholder="Ваш комментарий"
          name="comment"
          ref={text => {
            inputText = text
          }}
        >
        </textarea>
      </label>

      <button className="comments-form-btn"
        type="submit" 
      >
        Добавить комментарий
      </button>
    </form>
  )
};

export default CommentForm;
