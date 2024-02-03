import Layoutdashboard from "../layout/layoutdashboard"
import starImage from "../img/star.png";


export default function Dashboard(){
    return <Layoutdashboard> 
        <div className="im1d">
        <img src={starImage} alt="" className="img1" />
        </div>
    </Layoutdashboard>
}