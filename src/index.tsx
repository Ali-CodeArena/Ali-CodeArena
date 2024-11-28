import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import Leaderboard from "./LeaderboardComp"
import 'ag-grid-enterprise'

import "./index.css"

import mockDataComplete from "./mocks/code_complete.json"

import 'ag-grid-enterprise'

const LeaderboardTabs = () => {
  // State to track the currently selected tab
  const [activeTab, setActiveTab] = useState('tab1');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render the leaderboard based on the selected tab
  const renderLeaderboard = () => {
    // console.log(activeTab);
    switch (activeTab) {
      case 'tab1':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataComplete, "complete"]} />;
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <div className="tabs-container">
      <div className="tab-content">
        {renderLeaderboard()}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <section className="hero">
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns  is-fullwidth">
            <div style={{ backgroundColor: 'lightorange', width: '100%' }}>
            <div className="column has-text-centered is-fullwidth">
              {/* <h1 className="title is-1 publication-title">
                ⚔️CodeArena: Real-world Coding Tasks<br />Aligning Human Preferences and Model Generation
              </h1> */}
              <h1 className="title publication-title" style={{ fontSize: '2.5rem' }}>⚔️CodeArena</h1>
              <h2 className="title is-3 publication-title">Real-world Coding Tasks</h2>
              <h2 className="title is-3 publication-title">Aligning Human Preferences and Model Generation</h2>
            <div className="is-5 publication-authors">
            <span className="author-block publication-title-Cinzel">
                <a href="">Jian Yang</a><sup>1</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Jiaxi Yang</a><sup>2,3</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Ke Jin</a><sup></sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Yibo Miao</a><sup>4</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Lei Zhang</a><sup>2,3</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Liqun Yang</a><sup></sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Zeyu Cui</a><sup>1</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Yichang Zhang</a><sup>1</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Binyuan Hui</a><sup>1</sup>,</span>
              <span className="author-block publication-title-Cinzel">
                <a href="">Junyang Lin</a><sup>1</sup>,</span>
            </div>

            <div className="is-5 publication-authors">
              <span className="author-block publication-title-Cinzel"><sup>1</sup>Alibaba Group;</span><br />
              <span className="author-block publication-title-Cinzel"><sup>2</sup>Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences;</span><br />
              <span className="author-block publication-title-Cinzel"><sup>3</sup>University of Chinese Academy of Sciences;</span><br />
              <span className="author-block publication-title-Cinzel"><sup>4</sup>Shanghai Jiao Tong University;</span>
            </div>

              <div className="column has-text-centered">
                <div className="publication-links">
                  <span className="link-block">
                    <a href=""
                      className="external-link button is-large is-rounded is-dark">
                      <span className="icon">
                        <i className="fas fa-file-pdf "></i>
                      </span>
                      <span className='publication-title-Cinzel'>Paper</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a href=""
                      className="external-link button is-large is-rounded is-dark">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span className='publication-title-Cinzel'>Code</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a href=""
                      className="external-link button is-large is-rounded is-dark">
                      <span className="icon">
                        <i className="far fa-images"></i>
                      </span>
                      <span  className='publication-title-Cinzel'>Evaluation Data</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a
                      href=""
                      className="external-link button is-large is-rounded is-dark"
                    >
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span  className='publication-title-Cinzel'>Home</span>
                    </a>
                  </span>

                </div>
              </div>
              </div>
              <div className="column has-text-centered">
                <LeaderboardTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
)