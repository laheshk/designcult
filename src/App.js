import React, { Component } from "react";
import apple from "./apple.svg";
import google from "./google.svg";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="base">
        <div className="container">
          <div className="row">
            {/* Left side */}
            <div className="col-md-6 left">
              <div className="mainTitle">DesignCult.</div>
              <div className="description">
                Sri Lanka's first design dedicated, edutainment podcast. Hosted
                by{" "}
                <a href="http://www.madebylahesh.com" target="_blank">
                  Lahesh
                </a>{" "}
                and{" "}
                <a href="https://malankara.online/" target="_blank">
                  Malan
                </a>
                .{" "}
                <p>
                  We talk everything about design and chat with leading design
                  minds, academics and proffessionals to deliver thoughtful
                  content; consisted of areas like digital product design, design
                  processes, creative thinking and design sustainability.
                  Episodes are recorded and issued monthly.
                </p>
              </div>
              <div className="appleLogo">
                <a
                  href="https://itunes.apple.com/us/podcast/designcast/id1401315842?mt=2&uo=4"
                  target="_blank"
                >
                  <img src={apple} height="34px" />
                </a>
              </div>
              <div className="googleLogo">
                <a
                  href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81MDNmMjNjL3BvZGNhc3QvcnNz"
                  target="_blank"
                >
                  <img src={google} height="34px" />
                </a>
              </div>
              <div className="info">
                <div>
                  // <a href="#">Buy us a Coffee</a>
                </div>
                <div>
                  // Tweet to us <a href="#">@designcult</a>
                </div>
                <div className="footer">
                  Made in-house Designcult | © Copyright 2019
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="col-md-6 right">
              <div className="title">Episodes List</div>

              {/* Episode card start*/}
              <div className="episode">
                <iframe
                  className="player"
                  src="https://anchor.fm/designcast/embed/episodes/Episode-1-e1mbo7"
                  frameborder="0"
                  scrolling="no"
                />
                <div className="num">01</div>
                <div className="innerContent">
                  <div className="epiTitle">The Introduction</div>
                  <div className="epiContent">
                    In this episode we are talking about what is design and
                    design education in Sri Lanka.
                  </div>
                </div>
              </div>

              <div className="episode">
                <iframe
                  className="player"
                  src="https://anchor.fm/designcast/embed/episodes/Episode-1-e1mbo7"
                  frameborder="0"
                  scrolling="no"
                />
                <div className="num">02</div>
                <div className="innerContent">
                  <div className="epiTitle">Science of Design</div>
                  <div className="epiContent">
                    In this episode we are talking about what is design and
                    design education in Sri Lanka.
                  </div>
                </div>
              </div>

              <div className="episode">
                <iframe
                  className="player"
                  src="https://anchor.fm/designcast/embed/episodes/Episode-1-e1mbo7"
                  frameborder="0"
                  scrolling="no"
                />
                <div className="num">03</div>
                <div className="innerContent">
                  <div className="epiTitle">Is Design even matter?</div>
                  <div className="epiContent">
                    In this episode we are talking about what is design and
                    design education in Sri Lanka.
                  </div>
                </div>
              </div>
              {/* Episode card end */}
            </div>
          </div>
        </div>
        <div className="footer-mobile">
          Made in-house Designcult | © Copyright 2019
        </div>
      </div>
    );
  }
}

export default App;
