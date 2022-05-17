import React from 'react';
const player = (props) => {
   return (
      <>
         <p>Player name: {props.name} <br /> Player score: {props.score}</p>
         {props.children}
      </>
   );
}
export default player;