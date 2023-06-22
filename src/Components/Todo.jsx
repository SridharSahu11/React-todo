import React from 'react';
import { useState } from 'react';
import './Todo.css';

const Todo = () => {
      //state to save all user input in an array
  const [tags, setTags] = useState([]);

  const handleAddTag = (e) => {
    //if key not enter then don't add it
    if (e.key !== "Enter") return;

    const input = e.target.value;

    //if input is empty or "" then don't add it
    if (!input) return;
    //if the input already been added
    if (tags.includes(input)) return;

    setTags([...tags, input]);
    e.target.value = "";
  };

  const onDeleteTag = (tag) => {
    const filteredTags = tags.filter((t) => t !== tag);
    setTags(filteredTags);
  };

  return (
    <div id='container'>
         <h2>ADD SKILLS</h2>
      {tags.map((tag) => (
        <span key={tag} onClick={() => onDeleteTag(tag)} id='displayContainer'>
          &#x2716; {tag}
        </span>
      ))}
      <input
        id='inputContainer'
        onKeyUp={(e) => handleAddTag(e)}
        type="text"
        placeholder="Enter value..."
      />
    </div>
  )
}

export default Todo