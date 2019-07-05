import React from 'react'


const NavBar = () =>
(
<>
<header class="banner navbar navbar-default navbar-static-top" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            <div id="logo">
                <a href="https://worldbrain.io/"> <img class="logo-main logo-reg" src="https://worldbrain.io/wp-content/uploads/2019/04/logo_horizontal_small-164x40.png" height='40' width='164' alt="Memex by worldbrain.io" /> </a>
            </div>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul id="menu-main-menu-bar" class="nav navbar-nav">
                <li class="dropdown menu-about"><a class="dropdown-toggle">About <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li class="menu-jobs"><a href="https://www.notion.so/worldbrain/4d79e20aa01d4b9e8b8c12d88bb1b4ad">Jobs</a></li>
                        <li class="menu-faqs"><a href="https://worldbrain.io/faq/">FAQs</a></li>
                        <li class="menu-vision"><a href="https://medium.com/@WorldBrain/where-we-are-heading-with-worldbrain-65f244f540b8">Vision</a></li>
                        <li class="menu-roadmap"><a href="https://www.notion.so/worldbrain/Release-Notes-Roadmap-262a367f7a2a48ff8115d2c71f700c14">Roadmap</a></li>
                        <li class="menu-team"><a href="https://www.notion.so/worldbrain/TEAM-9ca5429f6a5c480289386a5cb49f173c">Team</a></li>
                    </ul>
                </li>
                <li class="menu-github"><a href="https://github.com/WorldBrain">GitHub</a></li>
                <li class="menu-upgrade"><a href="https://worldbrain.io/pricing/">Upgrade</a></li>
                <li class="menu-login"><a href="https://worldbrain.io/community/myreferrals/">Login</a></li>
            </ul>
        </nav>
    </div>
</header>
</>	
)

export default NavBar