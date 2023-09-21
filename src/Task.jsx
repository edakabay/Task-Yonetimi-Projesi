import React from 'react';

export default function Task(props) {
  const deleteClick = () => {
    props.delete(props.id);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="contentDiv">
        <h4>{props.title}</h4>
        <h5>{props.titlee}</h5>
        <p>{props.content}</p>
        <button className="btn btn-danger" onClick={deleteClick}>
          Sil
        </button>
      </div>
    </div>
  );
}
