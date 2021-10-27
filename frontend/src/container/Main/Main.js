import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import FirstView from "./FirstView.js";
import Contact from "./Contact.js";

import M_history from "../../images/M_history.PNG";
import M_contact from "../../images/M_contact.PNG";
import M_fv from "../../images/M_fv.PNG";
import M_post from "../../images/M_post.PNG";
import M_team from "../../images/M_team2.PNG";
import M_participate from "../../images/M_participate.PNG";
import M_ml from "../../images/M_ml.PNG";
import M_footer from "../../images/M_footer.PNG";
import M_info from "../../images/M_info.PNG";
import M_script from "../../images/M_script.PNG";


const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <FirstView />
      <div className="bg wrapper">
        <div className="main-contents">
          <div className="grids">
            <div data-aos="fade-up" className="boxes">
              <section id="nino-story">
                <div className="container">
                  <h2 className="nino-sectionHeading">
                    A Little Bit Of Information 
                  </h2>
                  <p className="nino-sectionDesc">
                    <strong>
                    "인공지능 회의 요약 서비스"
                    </strong>
                  </p> 
                  <p className="nino-sectionDesc">
                  "For MInutes" 는 음성 파일을 활용하여 회의록을 편리하게 <br/>작성할 수 있도록 돕는 인공 지능 회의록 요약 서비스이다.<br/><br/>
                  사용자로부터 회의의 정보와 음성 파일을 입력받으면 <br/>회의 전문 스크립트를 제공하고 <br/>사용자가 수정한 스크립트에서<br/> 회의의 주된 키워드와 요약문을 추출한다.<br/>
                  이를 기반으로 회의록을 작성하여 <br/>사용자에게 PDF 형식의 파일로 제공하는 서비스이다.
                  </p>
                </div>

                <div className="gallery">
               <div className="img">
                 <img src={M_fv}/>
               </div>
               <div className="img">
                 <img src={M_ml}/>
               </div>
               <div className="img">
                 <img src={M_contact}/>
               </div>
               <div className="img">
                 <img src={M_team}/>
               </div>
               <div className="img">
                 <img src={M_participate}/>
               </div>
               <div className="img">
                 <img src={M_post}/>
               </div>
               <div className="img">
                 <img src={M_history}/>
               </div>
               <div className="img">
                 <img src={M_footer}/>
               </div>
               <div className="img">
                 <img src={M_info}/>
               </div>
               {/* <div className="img">
                 <img src={M_script}/>
               </div> */}

             </div>
              </section>
            </div>

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
