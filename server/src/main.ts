import { ApolloServer, gql } from 'apollo-server';


const nutritions = [
  {
    dessert: "sss",
    nutritionInfo: {
      calories: 437,
      fat: 18,
      carb: 63,
      protein: 4,
    }
  },
  {
    dessert: "Nougat",
    nutritionInfo: {
      calories: 360,
      fat: 19,
      carb: 50,
      protein: 37,
    }
  },
];

const typeDefs = gql`
  type NutrationInfo {
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }

  type Nutrition {
    dessert: String
    nutritionInfo: NutrationInfo
  }

  type Query {
    getNutritions: [Nutrition]
  }
`;

const resolvers = {
  Query: {
    getNutritions: () => nutritions,
  },
};

const server = new ApolloServer({ cors: true, typeDefs, resolvers, mockEntireSchema: true, mocks: true });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
