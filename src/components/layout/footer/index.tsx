import React from 'react'
import SubscribeForm from '../../subscribe-form'
import { Footer as FooterStyle } from './styles.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={FooterStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <SubscribeForm />
            </div>
            <div className="col-md-4 col-sm-6">
              <section className="widget text-3 widget_text">
                <div className="widget-inner">
                  <div className="textwidget">
                    <p>
                      <strong>LEGAL</strong>
                    </p>
                    <p>
                      <a
                        href="https://worldbrain.io/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                </a>
                    </p>
                    <p>
                      <a
                        href="https://worldbrain.io/tos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                </a>
                    </p>
                    <p>
                      <a
                        href="https://worldbrain.io/imprint"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Imprint
                </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4 col-sm-6">
              <section className="widget text-4 widget_text">
                <div className="widget-inner">
                  <div className="textwidget">
                    <p>
                      <strong>PRODUCT</strong>
                    </p>
                    <p>
                      <a
                        href="https://worldbrain.io/help"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Support
                </a>
                    </p>
                    <p>
                      <a
                        href="https://worldbrain.io/roadmap"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Roadmap
                </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/worldbrain"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                </a>
                    </p>
                  </div>
                </div>
              </section>
              <section className="widget widget-social">
                <div className="widget-inner">
                  <div className="soc-widget">
                    <a target="_blank" href="https://www.facebook.com/realworldbrain">
                      <i className="fa fa-facebook" />
                    </a>
                    <a target="_blank" href="https://twitter.com/worldbrain">
                      <i className="fa fa-twitter" />
                    </a>
                    <a target="_blank" href="https://github.com/worldbrain">
                      <i className="fa fa-github" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="footer-btm-bar">
          <div className="container">
            <div className="footer-copyright row">
              <div className="col-xs-12">
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
