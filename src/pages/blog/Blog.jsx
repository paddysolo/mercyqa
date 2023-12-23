import { CssBaseline } from "@mui/material"
import { CContainer } from "../../components/ui/CContainer"
import "./blog.css"



export const Blog = ()=>{


  return (
    <>
     <CssBaseline />
     <div  className="blog">
        <div className="aboutme">
         <CContainer>
          <p className="keep_calm">Keep Calm</p>
            <h1 className="coming_soon">Cooming Soon...</h1>
          </CContainer>
        </div>
     </div>
    
    </>
  )
}