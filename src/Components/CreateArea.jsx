import React from "react";

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    content : ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return{
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    event.preventDefault();
    setNote({
      title: "",
      content : ""
    })
    props.onAdd(note);
  }

  return (
    <div>
      <form>
        <input name="title" value = {note.title} onChange = {handleChange} placeholder="Title" />
        <textarea name="content" value = {note.content} onChange = {handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
