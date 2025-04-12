import React, { useState } from 'react';
import DragDropContainer from './DragDropContainer';
import DraggableCard from './DraggableCard';

const App = () => {
  const [availableCards, setAvailableCards] = useState([
    { title: 'Hej' },
    { title: 'Kort 2' },
    { title: 'Kort 3' },
  ]);

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl mb-6">Drag och släpp kort</h1>
      <div className="flex space-x-6 mb-10">
        {availableCards.map((card, index) => (
          <DraggableCard key={index} card={card} />
        ))}
      </div>
      <DragDropContainer availableCards={availableCards} setAvailableCards={setAvailableCards} />
    </div>
  );
};

export default App;