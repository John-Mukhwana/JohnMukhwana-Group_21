import Achievements from "../components/Achievements";
import ScrollableBadges from "../components/Certification";
import Technologies from "../components/Technologies";


const AchievementPage = () =>{

    return(
        <>
            <div><Achievements/></div>
            <div><Technologies/></div>
            <div><ScrollableBadges/></div>
        </>
    )
        
}

export default AchievementPage;