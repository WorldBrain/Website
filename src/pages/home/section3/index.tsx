import React from 'react';

import { Section3 as SectionStyle } from './styles.scss';

export default class Section3 extends React.Component {
  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-md-9 highlight-note">
              <h1>
                <img className="emoji" alt="🔍" src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f4dd.svg" />
                {" "}Add Highlights and Notes on any Web Page
              </h1>

              <h3>
                No more copy-pasting of important pieces and thoughts. Highlight, click, done.<br />
                Keep your thoughts organized with their original context.
              </h3>

              <img className="section-img" src="/images/annotate_raw1270x760.gif" alt="Add highlights and notes on any Web page"/>
            </div>

            <div className="col-md-3 stick">
              <img src="/images/notes_person.svg"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
