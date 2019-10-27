import React from 'react';

import { Section6 as SectionStyle } from './styles.scss';

export default class Section6 extends React.Component {
  render() {
    return (
      <section className={SectionStyle}>
        <div className="container-fluid">
          <h1>
            Get started in less than 30 seconds. No account necessary.
          </h1>
          <h2>Import your existing bookmarks & web history from Pocket, Diigo, Raindrop.io and many more.</h2>

          <a href="#" className="btn btn-primary btn-large">
            Download for Free
          </a>
        </div>
      </section>
    );
  }
}
