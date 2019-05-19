import React from 'react';
import { TileContainer } from './TileContainer';
import { AppHeader } from './static/AppHeader';

const QuestionContainer = () => {
  const limit = [
    {
      id: '3',
      question: 'Which is the best UI framework',
      options: [
        {
          oId: '001',
          label: 'Angular',
          count: '20',
        },
        {
          oId: '002',
          label: 'React',
          count: '10',
        },
        {
          oId: '003',
          label: 'Vue.js',
          count: '30',
        },
      ],
    },
    {
      id: '1',
      question: 'Who will win in next election',
      options: [
        {
          oId: '001',
          label: 'Narendra Modi',
          count: '20',
        },
        {
          oId: '002',
          label: 'Rahul Gandhi',
          count: '20',
        },
      ],
    },
    {
      id: '4',
      question: 'Which is the best IDE',
      options: [
        {
          oId: '001',
          label: 'Visual Studio',
          count: '20',
        },
        {
          oId: '002',
          label: 'Atom',
          count: '20',
        },
      ],
    },
    {
      id: '2',
      question: 'Which car is best in India',
      options: [
        {
          oId: '001',
          label: 'BMW',
          count: '20',
        },
        {
          oId: '002',
          label: 'Benz',
          count: '20',
        },
      ],
    },
  ];
  return (
    <div>
      <AppHeader />
      <TileContainer
        limit={limit}
      />
    </div>
  );
};

export default QuestionContainer;
