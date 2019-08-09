/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Citations extends React.Component {
  render() {
    const {config: siteConfig} = this.props;

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;

    return (
      <div className="mainContainer">
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using This?</h1>
              <p>We compiled a list of research papers and articles that have used OpenBCI hardware and Software for their research</p>
            </div>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3k7GrXAZDcGHLbT979YeCQH0HcfpkHCrlmIfgrY2snD5arry17GG_nHxopxnapZHrEeB4eeazdbXh/pubhtml?widget=true&amp;headers=false" width='100%' height='500'></iframe>
            <p>Are you using this project?</p>
            <a href={editUrl} className="button">
              Let us know!!!
            </a>
          </div>
      </div>
    );
  }
}

module.exports = Citations;
