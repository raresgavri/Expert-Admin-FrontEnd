import {Routes, Route, Navigate} from "react-router-dom";
import "./App.css"
import {LoginPage} from "./pages/login";
import {RecordingsDashboardPage} from "./pages/recordings-dashboard";
import {UsersDashboardPage} from "./pages/users-dashboard";
import {useCookies} from "react-cookie";

export const App = () => {

    const [cookie] = useCookies(['fiiHealthyToken'])

    return (
        <Routes>
            <Route exact path={'/'} element={<Navigate to={!cookie.fiiHealthyToken ? '/login' : '/users-dashboard'}/>}/>
            <Route exact path={'/login'} element={!cookie.fiiHealthyToken ? <LoginPage/> : <Navigate to={'/users-dashboard'}/>}/>
            <Route exact path={'/recordings-dashboard'} element={cookie.fiiHealthyToken ? <RecordingsDashboardPage/> : <Navigate to={'/login'}/>}/>
            <Route exact path={'/users-dashboard'} element ={cookie.fiiHealthyToken ? <UsersDashboardPage/> : <Navigate to={'/login'}/>}/>
        </Routes>
    );
}