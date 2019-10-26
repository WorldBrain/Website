import React from 'react';

import { Section7 as SectionStyle } from './styles.scss';

export default class Section7 extends React.Component {
  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <h1>
            Data Ownership, Privacy &<br />
            Freedom by design
          </h1>
          <h2>Import your existing bookmarks & web history from Pocket, Diigo, Raindrop.io and many more.</h2>

          <div className="privacy-competencies">
            <div className="row row-eq-height">
              <div className="col-sm-6">
                <h3>
                  All data stored locally - offline first
                </h3>
                <p>
                  Nobody has access to your data unless you share it with someone. Your data is not our business model. Learn More >>
                </p>
              </div>
              <div className="col-sm-6">
                <h3>Open Source & here to stay</h3>
                <p>Copy. Modify. Innovate. Adapt Memex' code and easily move your data to a version that suits your needs the best.</p>
              </div>
            </div>
            <div className="row row-eq-height">
              <div className="col-sm-6">
                <h3>No VC Money, No-Lock-ins</h3>
                <p>We don't want to lock-in our users for the sake of growth and maximising shareholder value. We are a Steward Ownership company that wants to be successful if we provide real value to our users, not by hyping up our valuation.</p>
              </div>
              <div className="col-sm-6">
                <h3>Backup to your cloud or computer</h3>
                <p>Backup (and soon sync) your data to any of your favourite cloud providers or to your local filesystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
