import Footer from "./components/Footer";
import Main from "./components/Main";
import MainInfo from "./components/MainInfo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex justify-center">
      <div>
        <Navbar />
          <div className="flex justify-center">
            <div className="App xl:w-[1250px] lg:w-[1020px] md:w-[760px]">
              <Main />
              <MainInfo />
              <MainInfo />
              <MainInfo />
              <MainInfo />
            </div>
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
