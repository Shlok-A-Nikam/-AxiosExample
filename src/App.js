import { createContext } from "react";
import "./App.css";
import APICall from "./Components/APICall";
import AxiosAPICall from "./Components/AxiosAPICall";
import Conditional from "./Components/Conditional";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SinglePost from "./Components/SinglePost";
import LoginContextProvider from "./Contexts/LoginContextProvider";
import RefComp from "./Components/RefComp";
import ReducerEx from "./Components/ReducerEx";
import Todos from "./Components/Todos";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Signup from "./Components/Signup";
import FirebaseTodos from "./Components/FirebaseTodos";
import Signin from "./Components/Signin";
import FirebaseProvider from "./Contexts/FirebaseProvider";
import WeatherApp from "./Components/WeatherApp";
import Weather from "./Components/Weather";


function App() {
  return (
    <Provider store={store}>
      <LoginContextProvider>
        <div>
          <Router>
            <div className="flex">
              {/* Sidebar */}
              <div className="w-52 p-5 bg-gray-100">
                <h2 className="text-lg font-semibold mb-4">Menu</h2>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/" className="text-blue-500 hover:underline">
                        Header
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Home"
                        className="text-blue-500 hover:underline"
                      >
                        Conditional
                      </Link>
                    </li>
                    <li>
                      <Link to="/api" className="text-blue-500 hover:underline">
                        API
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/axios"
                        className="text-blue-500 hover:underline"
                      >
                        API call using Axios
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/context"
                        className="text-blue-500 hover:underline"
                      >
                        Use Context
                      </Link>
                    </li>
                    <li>
                      <Link to="/ref" className="text-blue-500 hover:underline">
                        Use Ref
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/reducer"
                        className="text-blue-500 hover:underline"
                      >
                        Use Reducer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/redux"
                        className="text-blue-500 hover:underline"
                      >
                        Redux Toolkit
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Signup"
                        className="text-blue-500 hover:underline"
                      >
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Signin"
                        className="text-blue-500 hover:underline"
                      >
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FirebaseTodos"
                        className="text-blue-500 hover:underline"
                      >
                        firebase todos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/weatherapp"
                        className="text-blue-500 hover:underline"
                      >
                        weatherapp
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/weather"
                        className="text-blue-500 hover:underline"
                      >
                        weather
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-5">
                <Routes>
                  <Route index element={<Header />} />
                  <Route path="/Home" element={<Conditional />} />
                  <Route path="/api" element={<APICall />} />
                  <Route path="/axios" element={<AxiosAPICall />} />
                  <Route path="/context" element={<SinglePost />} />
                  <Route path="/ref" element={<RefComp />} />
                  <Route path="/reducer" element={<ReducerEx />} />
                  <Route path="/redux" element={<Todos />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/Signin" element={<Signin />} />
                  <Route path="/FirebaseTodos" element={<FirebaseProvider><FirebaseTodos /></FirebaseProvider>} />
                  <Route path="/weatherapp" element={<WeatherApp />} />
                  <Route path="/weather" element={<Weather />} />
                </Routes>
              </div>
            </div>
          </Router>
        </div> 
      </LoginContextProvider>
    </Provider>
  );
}

export default App;
