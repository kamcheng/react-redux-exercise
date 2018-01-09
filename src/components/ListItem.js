import React from 'react';

const ListItem = ({choice, onAnswerClick}) => {
  const choiceItems = choice.map((choice, i) => {
    return <button className="button" onClick={onAnswerClick} data-answer={i} key={i}>{choice}</button>
  });

  return (
    <div>{choiceItems}</div>
  );
};

export default ListItem;