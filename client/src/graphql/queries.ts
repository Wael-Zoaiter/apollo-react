import { gql } from '@apollo/client';

export const getNutritionsQuery = gql`
  query getNutritions {
    getNutritions {
      dessert
      nutritionInfo {
        calories
        carb
        fat
        protein
      }
    }
  }
`;
