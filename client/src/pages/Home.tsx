import { useQuery } from '@apollo/client';
import { getNutritionsQuery } from '../graphql';


function Home() {
  const { data, loading, error } = useQuery(getNutritionsQuery);

  return (
    <div>
      {JSON.stringify({loading}, null, 2)}
      {JSON.stringify(data, null, 2)}
      {JSON.stringify({error}, null, 2)}
    </div>
  );
}

export default Home;
