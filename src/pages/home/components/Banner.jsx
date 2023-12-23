import { Grid } from "@mui/material";
import {ReactComponent as IntroText} from "./../../../assets/productanimateui.svg";
import arrowback from "./../../../assets/arrowbackui.svg";
import mercyImage from "./../../../assets/mercyokoduwa.png";
import EastIcon from '@mui/icons-material/East';
import arrow from "./../../../assets/arrowlook.png"
import "./component.css"
import { ScrollDown } from "../../../components/ui/ScrollDown";
export const Banner = ()=>{
    return (
        <Grid  container spacing={2}>
           <Grid item xs={6}>
              <div className="left">
                <div className="av-work">Available for work.</div>
                <div className="textContent">
                    <h1 className="intro-text">Hi, I’m Mercy, a <br/>QA Software Engineer</h1>
                    {/* <IntroText/> */}
                    <img className="arrowBack" src={arrowback} alt="" />
                </div>
               <p className="invite">I am a QA Engineer accompanied by a self-motivated passion for excellent delivery of all tasks,a fervid team player, skilled team manager, and experience in automation testing with a strong focus on quality results.</p>
                {/* <p className="invite">Interested in making delightful custom and user-friendly digital <br/> products, mobile application and motion designs.</p> */}
                <button className="getInBtn">Get in touch
                <EastIcon className="eastIcon"/>
                </button>
                {/* <ArrowBack/> */}
               
              </div>
            </Grid>
            <Grid item xs={6}>
             <div className="right">
                <img className="productImage" src={mercyImage} alt="" />
                <span  className="scrollingdown"><ScrollDown arrow={arrow}/></span>
             </div>
            </Grid>
        </Grid>
    );
}