import React from 'react';

import { Section1 as SectionStyle } from './styles.scss';

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 intro">
              <h1>
                The Power Upgrade for your Browser
              </h1>
              <h2>
                A privacy focused extension to annotate, search and organize what you've seen online.
              </h2>

              <a href="#" className="btn btn-primary btn-large cta-install">
                Download for free
              </a>

              <p className="guide-text">
                Get started in less than 30 seconds.<br />
                No account necessary. All data stored locally.
              </p>
            </div>

            <div className="col-md-8">
              <img className="section-img" src="/images/main_screen_new-1240x798.png" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
