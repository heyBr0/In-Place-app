import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersLandingPage from "./components/UsersLandingPage";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import HomePage from "./components/HomePage";
import Profile from "./components/ProfilePage";
import Notes from "./components/Notes.js";
import TodoList from "./components/TodoList.js";
import EditProfileUser from "./components/EditProfilePage.js";
import Kanban from "./components/Kanban";
import SingleNote from "./components/SingleNote";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Register />} />
        </Route>

        <Route path="/home" element={<UsersLandingPage />}>
          <Route path="/home" element={<Kanban />}></Route>
          <Route path="/home/profile" element={<Profile />}></Route>
          <Route path="/home/editprofile" element={<EditProfileUser />} />
          <Route path="/home/kanban" element={<Kanban />}></Route>
          <Route path="/home/todo" element={<TodoList />}></Route>
          <Route path="/home/notes" element={<Notes />}></Route>
          <Route path="/home/notes/:id" element={<SingleNote />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
