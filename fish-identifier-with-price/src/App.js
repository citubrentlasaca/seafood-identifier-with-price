import { useEffect, useState } from "react";
import MainScreen from "./Components/MainScreen";
import Loading from "./Components/Loading";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous process (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the data is fetched or any other loading logic is completed
    }, 5000); // Adjust the timeout value as per your needs
  }, []);

  return (
    <div 
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      {isLoading ? <Loading/> : <MainScreen />}
    </div>
  );
}

export default App;
