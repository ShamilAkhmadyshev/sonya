import React from "react"; // Add missing import statement

import "./App.css";
import p1 from "./imgs/1.jpg";
import p2 from "./imgs/2.JPG";
import p3 from "./imgs/3.JPG";
import p4 from "./imgs/4.JPG";
import p5 from "./imgs/5.jpg";
import p6 from "./imgs/6.jpg";
import p7 from "./imgs/7.jpg";
import p8 from "./imgs/8.jpg";
import p9 from "./imgs/9.jpg";
import p10 from "./imgs/10.jpg";
import p11 from "./imgs/11.jpg";
import p12 from "./imgs/12.jpg";
import p13 from "./imgs/13.jpg";
import p14 from "./imgs/14.jpg";
import p15 from "./imgs/15.jpg";
import p16 from "./imgs/16.jpg";
import p17 from "./imgs/17.jpg";
import p18 from "./imgs/18.jpg";
import p19 from "./imgs/19.jpg";
import p20 from "./imgs/20.jpg";
import p21 from "./imgs/21.jpg";
import p22 from "./imgs/22.jpg";
import p23 from "./imgs/23.jpg";
import p24 from "./imgs/24.jpg";
import p25 from "./imgs/25.jpg";
import p26 from "./imgs/26.jpg";
import p27 from "./imgs/27.jpg";
import p28 from "./imgs/28.jpg";
import p29 from "./imgs/29.jpeg";
import p30 from "./imgs/30.jpeg";
import p31 from "./imgs/31.jpeg";
import p32 from "./imgs/32.jpeg";
import p33 from "./imgs/33.jpeg";
import p34 from "./imgs/34.jpeg";
import p35 from "./imgs/35.jpeg";
import p36 from "./imgs/36.jpeg";
import p37 from "./imgs/37.jpeg";
import p38 from "./imgs/38.jpeg";
import p39 from "./imgs/39.jpeg";
import p40 from "./imgs/40.jpeg";
import p41 from "./imgs/41.jpeg";
import p42 from "./imgs/42.jpeg";
import p43 from "./imgs/43.jpeg";
import p44 from "./imgs/44.jpeg";
import p45 from "./imgs/45.jpeg";
import p46 from "./imgs/46.jpeg";
import p47 from "./imgs/47.jpeg";
import p48 from "./imgs/48.jpeg";
import p49 from "./imgs/49.jpeg";
import p50 from "./imgs/50.jpeg";
import p51 from "./imgs/51.jpeg";
import p52 from "./imgs/52.jpeg";
import p53 from "./imgs/53.jpeg";
import p54 from "./imgs/54.jpeg";
import p55 from "./imgs/55.jpeg";
import p56 from "./imgs/56.jpeg";
import p57 from "./imgs/57.jpeg";
import p58 from "./imgs/58.jpeg";

function App() {
  const photos = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p29,
    p30,
    p31,
    p32,
    p33,
    p34,
    p35,
    p36,
    p37,
    p38,
    p39,
    p40,
    p41,
    p42,
    p43,
    p44,
    p45,
    p46,
    p47,
    p48,
    p49,
    p50,
    p51,
    p52,
    p53,
    p54,
    p55,
    p56,
    p57,
    p58,
  ];

  return (
    <>
      <section id="muron" class="muron">
        <div class="muron__container container">
          <div class="muron__text text">С днём рождения, пупс &#10084;</div>
          <div class="muron__gallery">
            <div class="muron__items items">
              {photos.map((photo, index) => {
                const itemClass =
                  index % 4 === 2 || index % 4 === 3
                    ? "muron__item item left"
                    : "muron__item item";
                return (
                  <div class={itemClass}>
                    <img src={photo} loading="lazy" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
