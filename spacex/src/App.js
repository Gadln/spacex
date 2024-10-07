import { useQuery, gql } from "@apollo/client";
import './App.css';

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  //loading: nous permet de savoir si la requête est en train d'être executée
  //error: nous permet de savoir si la requête a provoqué une erreur
  //data: va contenir le résultat de la requête
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error !</p>;
    return (
      <div className="App">
        {data.launches.map((launch) => (
          <li>{launch.launch_date_utc}</li>
        ))}
      </div>
    );
  }

export default App;
