import * as React from 'react';
import Svg, { Circle, Path, Ellipse } from 'react-native-svg';

function Logo() {
  return (
    <Svg width={48} height={48} fill="none">
      <Circle cx={24} cy={24} r={24} fill="#A8DADC" />
      <Path
        d="M11.356 8.43h28.098v2.81H12.878c-1.522 0-1.552 1.022-1.522 2.809v5.62c.077 1.494 0 2.926 1.522 2.926h22.01c4.566 0 4.566.703 4.566 4.566v7.727c0 2.927 0 4.683-4.566 4.683H8.546v-2.81h25.171c2.81 0 2.81-1.288 2.81-2.81v-5.853c.186-1.653 0-2.693-2.81-2.693H11.356c-2.81 0-2.777-1.763-2.81-5.737v-5.62c.057-3.124 0-5.619 2.81-5.619z"
        fill="#1D3557"
      />
      <Path fill="#A8DADC" d="M16.273 19.727h15.22v8.429h-15.22z" />
      <Circle cx={23.883} cy={24} r={7.024} fill="#1D3557" />
      <Ellipse cx={23.883} cy={23.883} rx={4.098} ry={4.156} fill="#A8DADC" />
      <Path
        d="M25.405 16.273h-2.81v-2.458c0-2.576 2.81-2.81 2.81 0v2.458zM25.405 31.71h-2.81v2.46c0 2.575 2.81 2.81 2.81 0v-2.46zM30.15 19.477l-1.987-1.987L29.9 15.75c1.822-1.82 3.974 0 1.987 1.987l-1.738 1.739zM30.15 28.754l-1.987 1.987L29.9 32.48c1.822 1.82 3.974 0 1.987-1.987l-1.738-1.739zM19.373 17.495l-1.987 1.986-1.739-1.738c-1.82-1.821 0-3.974 1.987-1.987l1.739 1.739zM19.373 30.746l-1.987-1.987-1.739 1.738c-1.82 1.822 0 3.974 1.987 1.987l1.739-1.738z"
        fill="#1D3557"
      />
    </Svg>
  );
}

export default Logo;
