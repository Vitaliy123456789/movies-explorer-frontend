import React from "react";
import "./App.css";
import { Main } from "../Main/Main";
import { PageNot } from "../Page404/Page404";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Routes, Route } from "react-router-dom";
function App() {
  const [isEditProfileButton, setisEditProfileButton] = React.useState(false);
  const [isInput, setisInput] = React.useState(true);
  const handleProfileButtonClick = React.useCallback(() => {
    setisEditProfileButton(true);
    setisInput(false);
  });
  const closeProfileButtonClick = React.useCallback(() => {
    setisEditProfileButton(false);
    setisInput(true);
  });
  return (
    <main className="Page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route
          path="/profile"
          element={
            <Profile
              isdisabled={isInput}
              isOpen={isEditProfileButton}
              isClose={closeProfileButtonClick}
              Menu={handleProfileButtonClick}
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNot />} />
      </Routes>
    </main>
  );
}

export default App;
