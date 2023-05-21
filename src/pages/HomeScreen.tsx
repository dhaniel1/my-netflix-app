import { Navbar } from "../components";
import { Banner } from "../components/banner";
import Row from "../components/rows/rows";
import requests from "../api/requests";

const HomeScreen = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        {requests.map((request) => (
          <Row
            key={request.title}
            movieTitle={request.title}
            fetchUrl={request.url}
          />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
