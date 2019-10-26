import React from 'react'

import { Header as HeaderClass } from './styles.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={HeaderClass} role="banner">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            <div id="logo">
              <a href="/">
                <img width="164" height="40" src="/images/logo_horizontal_small-164x40.png" alt="Memex by worldbrain.io" />
              </a>
            </div>
          </div>
          <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul id="menu-main-menu-bar" className="nav navbar-nav">
              <li className="dropdown menu-about"><a className="dropdown-toggle">About</a>
                <ul className="dropdown-menu">
                  <li className="menu-jobs"><a href="https://www.notion.so/worldbrain/4d79e20aa01d4b9e8b8c12d88bb1b4ad">Jobs</a></li>
                  <li className="menu-faqs"><a href="/faq">FAQs</a></li>
                  <li className="menu-vision"><a href="https://medium.com/@WorldBrain/where-we-are-heading-with-worldbrain-65f244f540b8">Vision</a></li>
                  <li className="menu-roadmap"><a href="https://www.notion.so/worldbrain/Release-Notes-Roadmap-262a367f7a2a48ff8115d2c71f700c14">Roadmap</a></li>
                  <li className="menu-team"><a href="https://www.notion.so/worldbrain/TEAM-9ca5429f6a5c480289386a5cb49f173c">Team</a></li>
                </ul>
              </li>
              <li className="menu-github"><a href="https://github.com/WorldBrain">GitHub</a></li>
              <li className="menu-upgrade"><a href="/pricing">Upgrade</a></li>
              <li className="menu-login"><a href="/user">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}