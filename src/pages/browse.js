import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-map';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  // console.log(films);
  return <p>Hello Browse</p>;
}
