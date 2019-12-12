import React from 'react';

import { Section4 as SectionStyle } from './styles.scss';

export default class Section4 extends React.Component {
  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-md-3 book">
              <img src="/images/book_person.svg"/>
            </div>

            <div className="col-md-9 organize-discoveries">
              <h1>
                <img className="emoji" alt="🔍" src="https://s.w.org/images/core/emoji/12.0.0-1/svg/26a1.svg" />
                {" "}Organize your Discoveries Fast and Flexibly
              </h1>

              <h3>
                Tag and sort what you find online into full-text searchable collections.<br />
                Automatically sync with your browser's bookmarks and use keyboard shortcuts for everything.
              </h3>
              <img className="section-img" src="/images/organisation.gif" alt="Organize your Discoveries Fast and Flexibly"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
