import React from 'react';

import { Section2 as SectionStyle } from './styles.scss';

export default class Section2 extends React.Component {
  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <h1>
            Tired of bookmarking, re-googling & copy-pasting notes?
          </h1>
          <h2>
            Memex organizes your web-research so you can utilize the power of your brain: thinking in associations.
          </h2>
          <div className="separator" />
          <div className="row row-eq-height">
            <div className="col-md-3 intro">
              <img src="/images/search_person.svg"/>
            </div>

            <div className="col-md-9 full-text-search">
              <h1>
                <img className="emoji" alt="🔍" src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f50d.svg" />
                {" "}Full-Text Search your Web History & Bookmarks
              </h1>

              <h3>
                Instantly recover anything you've seen before without doing any upfront work.<br />
                Even if you just remember a single word, the time frame or the domain.
              </h3>
              <img className="section-img" src="/images/search-1270-760.gif" alt="Full text search and filter"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
