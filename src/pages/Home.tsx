
import BlogComponent from "../components/blog";
import Profile from "../components/profile";
import AboutPage from "./about";
import AchievementPage from "./achievements";
import ContactMePage from "./contactMePage";
import EducationPage from "./education";
import ProjectsPage from "./Projects";


const  Home = () =>{

    return(

        <>
            <div><Profile/></div>
            <div><AboutPage/></div>
            <div><ProjectsPage/></div>
            <div><EducationPage/></div>
            <div><AchievementPage/></div>
            <div><BlogComponent/></div>
            <div><ContactMePage/></div>
        </>
    )
}

export default Home;