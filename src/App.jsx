import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Createpost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <Createpost></Createpost>
            )}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
