import React from 'react';

const DraggableCard = ({ card }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('card', JSON.stringify(card));
  };

  return (
    <div
      className="p-4 bg-blue-500 text-white rounded cursor-pointer"
      draggable
      onDragStart={handleDragStart}
    >
      <p>{card.title}</p>
    </div>
  );
};

export default DraggableCard;