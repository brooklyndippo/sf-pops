/* eslint-disable react/prop-types */
import React from 'react';
// import './POPOSFeature.css'

function getFeature(str) {
  switch (str) {
    case 'outdoors':
      return '🌳';
    case 'coffee':
      return '☕️';
    case 'art':
      return '🎨';
    case 'toilet':
      return '🚻';
    case 'power':
      return '🔌';
    default:
      return '？';
  }
}

export default function POPOSFeature(props) {
  const { feature, showText } = props;
  const emoji = getFeature(feature);
  return (
    <div className="POPOSFeature">
      {emoji}
      {' '}
      {showText ? `${feature}` : ''}
    </div>
  );
}
