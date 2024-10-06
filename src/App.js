import "./App.css";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCards from "./TinderCards";
import PetDetails from "./PetDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <div>
                <Header />
                <TinderCards />
              </div>
            }
          />
          {/* Chats */}
          <Route
            path="/chat"
            element={
              <div>
                <Header backButton="/" />
                <Chats />
              </div>
            }
          />
          {/* Individual chat screen */}
          <Route
            path="/chat/:person"
            element={
              <div>
                <Header backButton="/chat" />
                <ChatScreen />
              </div>
            }
          />
          {/* Left panel "Go to profile" buttons */}
          <Route
            path="/pet"
            element={
              <div>
                <Header backButton="/" />
              </div>
            }
          />
          {/* Display of pet details */}
          <Route
            path="pet/:id"
            element={
              <div>
                <Header backButton="/" />
                <PetDetails />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
