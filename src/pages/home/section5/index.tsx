import React from 'react';

import { Section5 as SectionStyle } from './styles.scss';

export default class Section5 extends React.Component {
  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-md-9 all-devices">
              <h1>
                <img className="emoji" src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f4f1.svg" />
                {" "}Use Memex on All Devices

                <span className="tag tag-primary">COMING SOON</span>
              </h1>

              <h3>
                Save & search websites and add notes on the go.<br />
                Securely sync your Memex between browsers, iOS & Android devices.
              </h3>

              <img className="section-img" src="/images/mobileSync.png" alt="Use Memex on All Devices"/>
            </div>

            <div className="col-md-3 device">
              <img src="/images/device_people.svg"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
