import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Swipe from '../../react-custom-swipe/src';
import ReactSwipe from 'react-custom-swipe';

import cat1 from './image/cat1.jpg';
import cat2 from './image/cat2.jpg';
import cat3 from './image/cat3.jpg';
import cat4 from './image/cat4.jpg';
import cat5 from './image/cat5.jpeg';
import cat6 from './image/cat6.jpeg';
import cat7 from './image/cat7.jpg';
import cat8 from './image/cat8.jpg';
import cat9 from './image/cat9.png';
import cat10 from './image/cat10.jpg';
import iu1 from './image/iu1.jpg';
import iu2 from './image/iu2.jpg';

const Style = createGlobalStyle`
  *{
    -webkit-user-drag: none;
  }
`;
const Wrap = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;
const dumy = [
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
  cat10,
  iu1,
  iu2,
];

const App: React.FC = () => {
  const [item, setItem] = useState(dumy);
  const handleAddItem = () => {
    setItem(prev => [...prev, ...dumy]);
  };

  return (
    <Wrap>
      <Style />
      <h1>
        swipe demo <button onClick={handleAddItem}>add item</button>
      </h1>
      <Swipe
        item={item.map((src, key) => (
          <div>
            <img
              key={key}
              src={src}
              alt={src}
              style={{ width: '100%', maxWidth: '100%' }}
            />
            <div>
              <h2>example {key}</h2>
              {Array.from({ length: 10 }, (_, key) => (
                <img
                  key={key}
                  src={src}
                  alt={src}
                  style={{ width: '100%', maxWidth: '100%' }}
                />
              ))}
            </div>
          </div>
        ))}
        itemProps={{ style: { border: '1px solid' } }}
      />
    </Wrap>
  );
};

export default App;
