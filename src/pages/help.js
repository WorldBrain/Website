import React from 'react'

export default () =>
(
<>
<div id="divJSErrors" style={{color: 'red', fontSize: '14px'}}></div>
<div class="main-wrapper ">
   <div class="main-wrapper_in">
      <div id="system_alert" class="informer" style={{display:'none'}}>
         <div class="informer__controls">
            <span class="btn-text" id="numAlerts"></span>
            <a class="btn btn_link disabled" >
            <i class="btn__icon fa fa-angle-left" id="prevAlert">&nbsp;</i>
            </a>
            <a class="btn btn_link disabled" >
            <i class="btn__icon fa fa-angle-right" id="nextAlert">&nbsp;</i>
            </a>
            <a class="btn btn_link">
            <i class="btn__icon close-tips" id="hideAlert">&nbsp;</i>
            </a>
         </div>
         <div class="informer__data">
            <p class="informer__txt">
               <b class="informer__ttl" id="system_alert_title"></b>
               <span id="system_alert_message"></span>
               <a href="#" onclick="javascript: return false;">Learn more</a>
            </p>
         </div>
      </div>

      <script
          dangerouslySetInnerHTML={{
              __html: `
                GUI.onDOMReady(function() {
		             new window.ActorInfo('website');
		         });
              `
          }}
      />

      <header class="header" role="heading">
         <div class="header__left">
            <a class="header__logo" href="https://worldbrain.helprace.com" target="_blank">
            <img src="//s3.amazonaws.com/chd-data/data/worldbrain/worldbrain_logoicon.png" alt="WorldBrain Community Hub" class="header__logo__thumb" />
            </a>
         </div>
         <div class="header__right">
            <nav id="auth-panel__auth-menu" class="header__nav" style={{display: 'none'}}>
               <span style={{display: 'none'}} id="auth-panel__loader" class="btn__label"><img src="https://d1culzimi74ed4.cloudfront.net/images/loading.gif" /></span>
               <a class="btn btn_simple" href="/search" title="Search">
               <i class="btn__icon fa fa-search"></i>
               </a>
               <a style={{display: 'none'}} class="btn btn_simple show_dialog" id="auth-panel__login-btn" href="" onclick="return false;" rel="dialog_1" title="Login">
               <span class="mobileShow_wide">
               <i class="btn__icon fa fa-sign-in"></i>
               </span>
               <span class="mobileHide_wide">
               <span class="btn__label">Login</span>
               </span>
               </a>
               <div style={{display: 'none'}} id="auth-panel__user-profile-dropdowrn-holder" class="layer-over btn_super-hover">
                  <div class="popup-menu">
                     <a id="auth-panel__user-profile-dropdown-btn" class="btn btn_simple btn_avatar btn_super-hover-item">
                     <span class="btn__icon">
                     </span>
                     </a>

                     <script
				          dangerouslySetInnerHTML={{
				              __html: `
				                window.adminPanelMenu = [];
				              `
				          }}
				      />

                  </div>
                  <div class="layer user-layer" id="auth-panel__user-profile-menu" style={{display: 'none'}}>
                  </div>
               </div>
            </nav>
         </div>
      </header>
      <nav class="breadcrumbs">
         <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item btn_super-hover">
               <div class="btns-group breadcrumbs__button">
                  <a class="btn btn_simple btn_super-hover-item" href="/">
                  <span class="btn__label">Home</span>
                  </a><a class="btn btn_simple btn_super-hover-item selected">
                  <i class="btn__icon next"><i class="breadcrumbs__menu-icon">&nbsp;</i></i>
                  </a>                
               </div>
               <ul class="breadcrumbs__dropdown">
                  <li class="breadcrumbs__dropdown__item"><a href="/people">People</a></li>
                  <li class="breadcrumbs__dropdown__item"><a href="/search">Search</a></li>
               </ul>
            </li>
         </ul>
      </nav>
      <div class="layout__data">
         <div class="layout__content" role="main">
            <div class="layout__content_in">
               <section class="search-result-input layout__list" id="search-widget">
                  <nav class="tabbar btns-list tabbar_widget" >
                     <a name="search-button-search" class="btn btn_tab_grey selected">
                     <i class="btn__icon fa fa-search"></i>
                     </a>
                     <a name="search-button-questions" id="search-button-questions" class="btn btn_tab_grey ">
                     <i class="btn__icon fa fa_icon_questions"></i>
                     <span class="btn__label">Ask a Question</span>
                     <span class="btn__label btn__label_min">
                     Question
                     </span>
                     </a>
                     <a name="search-button-ideas" id="search-button-ideas" class="btn btn_tab_grey ">
                     <i class="btn__icon fa fa_icon_ideas"></i>
                     <span class="btn__label">Share an Idea</span>
                     <span class="btn__label btn__label_min">
                     Idea
                     </span>
                     </a>
                     <a name="search-button-problems" id="search-button-problems" class="btn btn_tab_grey ">
                     <i class="btn__icon fa fa_icon_problems"></i>
                     <span class="btn__label">Report a Problem</span>
                     <span class="btn__label btn__label_min">
                     Problem
                     </span>
                     </a>
                     <a name="search-button-praise" id="search-button-praise" class="btn btn_tab_grey ">
                     <i class="btn__icon fa fa_icon_praise"></i>
                     <span class="btn__label">Praise</span>
                     <span class="btn__label btn__label_min">
                     Praise
                     </span>
                     </a>
                  </nav>
                  <div class="widget widget_has-tabs widget_has-tabs_both ">
                     <div class="widget__item" id="search-widget-bar">
                        <div class="widget__cp">
                           <div class="widget__cp-cell widget__cp-cell_main">
                              <div class="btns-group btns-group_wide btns-group_search">
                                 <i class="text-field_advanced text-field_advanced_large text-field_search text-field_size_wide">
                                    <i id="text-field-icon-clean" class="text-field__icon text-field__icon_clean" style={{display: 'none'}}></i>
                                    <i class="i-text-field">
                                       <input
                                          id="search-widget-input"
                                          name="searchField"
                                          type="text"
                                          value=""
                                          class="text-field text-field_large text-field_size_wide"
                                          dir="auto"
                                          placeholder="Search..."
                                          autocomplete="off"
                                          autofocus/>
                                       <div class="layer b-arrow b-arrow_top_left" id="search-field-hint" style={{display: 'none', position: 'absolute', top: '300px', left: '500px'}}>
                                          <div class="layer__item"></div>
                                       </div>
                                    </i>
                                 </i>
                                 <input type="hidden" id="search-widget-space-key" value="1" />
                                 <span class="b-text-field_combo_big b-text-field_combo_light btns-group__item_shrink" style={{display: 'none'}}>
                                    <select id="search-widget-combo-spaces" name="search-widget-combo-spaces" selectedSpace="general" icons="true" style={{width: 'auto', minWidth: '100px', maxWidth: '200px'}} listWidth="200">
                                       <option value="all" selected img="//s3.amazonaws.com/chd-data/defaults/space.svg">All Spaces</option>
                                       <option value="1" spacename="general"  selected img="//s3.amazonaws.com/chd-data/data/worldbrain/../../defaults/space.svg"
                                          >General</option>
                                    </select>
                                 </span>
                                 <div id="searchButtonContinue" class="btns-group__item btns-group__item_shrink btns-group__item_last">
                                    <a class="btn btn-large btn_search" name="search-button-continue">
                                    <i class="btn__icon fa fa-search"></i>
                                    </a>
                                 </div>
                                 <div id="searchButtonAgain" class="btns-group__item btns-group__item_shrink btns-group__item_last" style={{display: 'none'}}>
                                    <a class="btn btn-large btn_search" name="search-button-continue">
                                    <i class="btn__icon fa fa-search"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="ticketDescription" style={{display: 'none'}}>Submit Ticket</div>
                     <div class="widget__item" id="searchWidgetResults" style={{display: 'none'}}></div>
                  </div>
               </section>
               <section id="whats-new-block" class="content-block layout__list">
                  <header class="content-block__header">
                     <div class="content-block__header-main">
                        <h3>
                           <a href="/s1-general/all/new">                        What's New?                        </a>                    
                        </h3>
                        <a href="/s1-general/all/new?format=rss">
                        <i class="icon fa fa-rss fa_lighter fa_small"></i>
                        </a>
                     </div>
                  </header>
                  <div class="content-block__data">
                     <ul class="topic-list" id="topics-list">
                        <li class="topic-list__item btn_super-hover">
                           <div class="topic-list__cell cell__vote">
                              <div class="vote_block" id="item_custom-positive_168-activitynew">
                                 <a data-href="#"
                                    onClick="return false;"        rel="nofollow"
                                    class="btn btn_simple btn_simple_highlight btn_super-hover-item"
                                    id="vote_action_168-activitynew">
                                 <span class="btn__label">3</span>
                                 <i class="btn__icon fa fa-thumbs-up"></i></a>
                                 {/*On hover hint */}
                                 <div class="layer"
                                    id="popup-hover_custom-positive_168-activitynew"
                                    style={{display: 'none'}}>
                                    <i class="layer__arrowSpace"></i>
                                    <div class="layer__item">
                                       <span class="vote_positive">+3</span> votes
                                       from 1 person<br />
                                    </div>
                                 </div>
                                 {/*On click hint */}
                                 <div class="layer selected" id="popup-click_custom-positive_168-activitynew" style={{display: 'none'}}>
                                    <div class="layer__item">
                                       <i class="btn-icon">
                                       <i class="icon fa fa-thumbs-up fa_green"></i>
                                       </i>
                                       <div class="btns-group">
                                          <a class="btn button button_style_button" data-href="/vote-item/i168-in-search-overview-make-the-add-notes-textarea-appear-beneath-the-bookmark/1"
                                             onclick="return false;"
                                             rel="nofollow"
                                             id="vote_item_link_168">
                                          <span class="btn__label voting_small" id="vote_item_4">+1</span>
                                          </a>
                                          <a class="btn button button_style_button" data-href="/vote-item/i168-in-search-overview-make-the-add-notes-textarea-appear-beneath-the-bookmark/2"
                                             onclick="return false;"
                                             rel="nofollow"
                                             id="vote_item_link_168">
                                          <span class="btn__label voting_small" id="vote_item_5">+2</span>
                                          </a>
                                          <a class="btn button button_style_button" data-href="/vote-item/i168-in-search-overview-make-the-add-notes-textarea-appear-beneath-the-bookmark/3"
                                             onclick="return false;"
                                             rel="nofollow"
                                             id="vote_item_link_168">
                                          <span class="btn__label voting_small" id="vote_item_6">+3</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="topic-list__cell cell__text has-icon">
                              <h3 class="topic-list__title">
                                 <i class="topic-list__icon icon fa fa_icon_ideas fa_14"></i>
                                 <a href="/i168-in-search-overview-make-the-add-notes-textarea-appear-beneath-the-bookmark">In Search Overview, make the &quot;Add Notes&quot; textarea appear beneath the bookmark.</a>
                              </h3>
                           </div>
                        </li>
                        <li class="topic-list__item btn_super-hover">
                           <div class="topic-list__cell cell__vote">
                              <div class="vote_block" id="item_support_167-activitynew">
                                 <a            data-href="/vote-item/i167-add-all-tabs-in-window-does-not-work-in-second-window/1"
                                    onClick="return false;"
                                    rel="nofollow"
                                    class="btn btn_simple btn_simple_highlight btn_super-hover-item"
                                    id="vote_action_167-activitynew">
                                 <span class="btn__label">1</span>
                                 <i class="btn__icon fa fa-thumbs-up"></i></a>
                                 {/*On hover hint */}
                                 <div class="layer"
                                    id="popup-hover_support_167-activitynew"
                                    style={{position: 'absolute', display: 'none'}}>
                                    <i class="layer__arrowSpace"></i>
                                    <div class="layer__item">
                                       <span class="vote_positive">1</span> person supports this
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="topic-list__cell cell__text has-icon">
                              <h3 class="topic-list__title">
                                 <i class="topic-list__icon icon fa fa_icon_problems fa_14"></i>
                                 <a href="/i167-add-all-tabs-in-window-does-not-work-in-second-window">“Add all tabs in window” does not work in second window</a>
                              </h3>
                           </div>
                        </li>
                        <li class="topic-list__item btn_super-hover">
                           <div class="topic-list__cell cell__vote">
                              <div class="vote_block" id="item_support_166-activitynew">
                                 <a            data-href="/vote-item/i166-memex-sidebar-sometimes-makes-scroll-bar-unreachable/1"
                                    onClick="return false;"
                                    rel="nofollow"
                                    class="btn btn_simple btn_simple_highlight btn_super-hover-item"
                                    id="vote_action_166-activitynew">
                                 <span class="btn__label">2</span>
                                 <i class="btn__icon fa fa-thumbs-up"></i></a>
                                 {/*On hover hint */}
                                 <div class="layer"
                                    id="popup-hover_support_166-activitynew"
                                    style={{position: 'absolute', display: 'none'}}>
                                    <i class="layer__arrowSpace"></i>
                                    <div class="layer__item">
                                       <span class="vote_positive">2</span> people support this
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="topic-list__cell cell__text has-icon">
                              <h3 class="topic-list__title">
                                 <i class="topic-list__icon icon fa fa_icon_problems fa_14"></i>
                                 <a href="/i166-memex-sidebar-sometimes-makes-scroll-bar-unreachable">Memex sidebar sometimes makes scroll bar unreachable</a>
                              </h3>
                           </div>
                        </li>
                     </ul>
                  </div>
               </section>
            </div>
         </div>
         <aside class="layout__sidebar" role="complementary">
            <section id="side-space-combo" class="content-block layout__list">
               <div class="content-block__data">
                  <ul class="side-panel side-panel_main-nav side-panel_main-nav_list">
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/updates">
                           {/*<span class="btn__complex-c">*/}
                           <i class="btn__icon fa fa_icon_updates"></i>
                           <span class="btn__label">Updates</span>
                           {/*</span>
                              <span class="btn__complex-c">
                                  <i class="btn__icon next btn_super-hover-item_vh">&nbsp;</i>
                              </span>*/}
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/knowledgebase">
                           {/*<span class="btn__complex-c">*/}
                           <i class="btn__icon fa fa_icon_knowledgebase"></i>
                           <span class="btn__label">Knowledge Base</span>
                           {/*</span>
                              <span class="btn__complex-c">
                                  <i class="btn__icon next btn_super-hover-item_vh">&nbsp;</i>
                              </span>*/}
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/questions">
                           {/*<span class="btn__complex-c">*/}
                           <i class="btn__icon fa fa_icon_questions"></i>
                           <span class="btn__label">Questions</span>
                           {/*</span>
                              <span class="btn__complex-c">
                                  <i class="btn__icon next btn_super-hover-item_vh">&nbsp;</i>
                              </span>*/}
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/ideas">
                           {/*<span class="btn__complex-c">*/}
                           <i class="btn__icon fa fa_icon_ideas"></i>
                           <span class="btn__label">Ideas</span>
                           {/*</span>
                              <span class="btn__complex-c">
                                  <i class="btn__icon next btn_super-hover-item_vh">&nbsp;</i>
                              </span>*/}
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/problems">
                           {/*<span class="btn__complex-c">*/}
                           <i class="btn__icon fa fa_icon_problems"></i>
                           <span class="btn__label">Problems</span>
                           {/*</span>
                              <span class="btn__complex-c">
                                  <i class="btn__icon next btn_super-hover-item_vh">&nbsp;</i>
                              </span>*/}
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/praise">
                           {/*<span class="btn__complex-c">*/}
                           <i class="btn__icon fa fa_icon_praise"></i>
                           <span class="btn__label">Praise</span>
                           {/*</span>
                              <span class="btn__complex-c">
                                  <i class="btn__icon next btn_super-hover-item_vh">&nbsp;</i>
                              </span>*/}
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/all">
                        <i class="btn__icon fa fa-list-ul fa_14"></i>
                        <span class="btn__label">All Topics</span>
                        </a>
                     </li>
                     <li class="side-panel__item ">
                        <a class="btn btn-large btn_regular" href="/s1-general/all/activity">
                        <i class="btn__icon fa fa-calendar-alt"></i>
                        <span class="btn__label">Activity</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </section>
            <section id="we-are-here-to-help" class="content-block layout__list">
               <header class="content-block__header">
                  <h3>
                     <a href="/people"> We are Here to Help
                     </a>        
                  </h3>
               </header>
               <div class="content-block__data">
                  <ul class="side-panel">
                     <li class="side-panel__item">
                        <div class="user-info">
                           <a
                              id="we-are-here-to-help"        href="/u1-oliver-sauter"        class="avatar"
                              showProfileLayer="305244"    >
                              <img src="https://s3.amazonaws.com/chd-data/avatars/3b814d72366386f4d05d190404d6813c5a651162f2b71.png"
                                 alt=""
                                 width="40"
                                 onerror="onAvatarError(this)"
                                 />
                              <div class="avatar__status"></div>
                           </a>
                           <div class="user-info__data">
                              <a class="user-info__name" href="/u1-oliver-sauter" showProfileLayer="305244">Oliver Sauter</a>
                              <div class="user-info__info description" title="Job Title">Founder</div>
                           </div>
                        </div>
                     </li>
                     <li class="side-panel__item side-panel__item_small">
                        <p class="text_pale">+ 279 community members</p>
                     </li>
                  </ul>
               </div>
            </section>
         </aside>
      </div>
      <i class="clear"></i>
   </div>
   <footer class="footer" id="page_footer">
      <span class="footer__copy">
      <a class="link" href="http://helprace.com/it-service-desk">IT Service Desk</a> by <a class="link" href="http://helprace.com">Helprace</a>
      </span>
   </footer>
   <div id="auth-dialog_mask" class="mask" style={{display: 'none'}}></div>
   <div id="auth-dialog" class="dialog ui-draggable" style="display: none; ">
      <section class="content-block">
         <header class="content-block__header dialog__ttl">
            <h3 id="auth-dialog-caption">Dialog Caption</h3>
            <a class="btn btn_simple dialog__close" tabindex="3" id="auth-dialog_close-btn">
            <i class="btn__icon dialog-close">&nbsp;</i>
            </a>
         </header>
         {/* DIALOG CONTENT */}
         <div id="auth-dialog_login-form" class="login login_dialog" style={{display: 'none'}}>
            <footer class="content-block__footer align_center">
               <a id="login-dialog_register" tabindex="2" href="javascript:void(0);" class="login__create-account__txt">Sign Up</a>
               <a id="login-dialog_login-link" tabindex="2" href="javascript:void(0);" class="login__create-account__txt">Go back and try to login again</a>
            </footer>
         </div>
         <div id="auth-dialog_signup-form" class="login login_dialog" style={{display: 'none'}}>
            {/* register */}

            <script
		          dangerouslySetInnerHTML={{
		              __html: `
		                function submitSignUp() {
		                   Application.RegistrationForm.submit();
		               }
		              `
		          }}
		      />

            <form id="signup-form" action="/registration/submit" method="post">
               <div class="content-block__data" style={{width: '300px'}}>
                  <div class="dialog__data" id="registration-form-table">
                     <div class="dialog__item">
                        <label class="label-input">
                        <input autocomplete="off" name="name" id="registration-name" tabIndex="1" type="text" dir="auto" class="text-field text-field_size_wide" placeholder="Name" value="" />
                        </label>
                        <div id="registration-name-msg-holder" class="forms__notification">
                        </div>
                     </div>
                     <div class="dialog__item">
                        <label class="label-input">
                        <input name="email" tabIndex="1" id="registration-email" type="email" dir="auto" class="text-field text-field_size_wide" placeholder="Email" />
                        </label>
                        <div id="registration-email-msg-holder" class="forms__notification">
                        </div>
                     </div>
                     <div class="dialog__item">
                        <label class="label-input">
                        <input id="registration-password" tabIndex="1" id="registration-password" name="password" autocomplete="off" type="password" dir="auto" class="text-field text-field_size_wide" placeholder="Password" />
                        </label>
                        <div id="registration-password-msg-holder" class="forms__notification">
                        </div>
                     </div>
                     <div id="signUpReCaptcha"
                        class="g-recaptcha"
                        data-sitekey="6LclyS4UAAAAAL-hgjHiNSjtnKhxfbD63DwuAmXq"
                        data-callback="submitSignUp"
                        data-size="invisible"
                        data-badge="inline"></div>
                     <div class="dialog__item">
                        <input type="submit" tabIndex="1" id="registration-form-submit" name="submitForm" value="Sign Up" class="btn btn-blue btn_wide" />
                     </div>
                  </div>
               </div>
               <footer class="content-block__footer align_center">
                  <a id="registration-login-link" tabIndex="1" href="javascript:void(0);">Login</a>
               </footer>
            </form>
            {/* /register */}
         </div>
         {/* /DIALOG CONTENT */}
      </section>
   </div>
</div>
</>
)