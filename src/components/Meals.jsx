import { useEffect, useState } from 'react';
import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';

const requestConfig = {};
// creating config obj outside the component function to avoid infinite loops
// Since config is added as a dependency in useHttp
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
