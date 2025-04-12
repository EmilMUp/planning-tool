import React, { useState } from 'react';

const DragDropContainer = ({ availableCards, setAvailableCards }) => {
  const [droppedCards, setDroppedCards] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedCard = JSON.parse(e.dataTransfer.getData('card'));
    
    // Ta bort det droppade kortet från availableCards
    setAvailableCards((prevCards) => prevCards.filter(card => card.title !== droppedCard.title));

    // Lägg till kortet i droppedCards
    setDroppedCards((prevCards) => [...prevCards, droppedCard]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full h-96 border-2 border-dashed border-gray-400 flex items-center justify-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="absolute">
        {droppedCards.length === 0 ? (
          <p className="text-center text-gray-400">Inga kort har släppts än.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {droppedCards.map((card, index) => (
              <div key={index} className="p-4 border bg-blue-200 rounded">
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDropContainer;