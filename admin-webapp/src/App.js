import {Routes, Route} from "react-router-dom";
import "./App.css"
import {LoginPage} from "./pages/login";
import {RecordingsDashboardPage} from "./pages/recordings-dashboard";
import {UsersDashboardPage} from "./pages/users-dashboard";

export const App = () => {

    return (
        <Routes>
            <Route exact path={'/login'} element={<LoginPage/>}/>
            <Route exact path={'/recordings-dashboard'} element={<RecordingsDashboardPage/>}/>
            <Route exact path={'/users-dashboard'} element ={<UsersDashboardPage/>}/>
        </Routes>
    );
}