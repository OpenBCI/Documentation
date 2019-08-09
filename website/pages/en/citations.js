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
          <div className="citationSection">
            <div className="prose">
<<<<<<< HEAD
              <h1>OpenBCI Citation List</h1>
              <p>Here is a list of research papers and articles that have used OpenBCI hardware and software for their research</p>
            </div>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3k7GrXAZDcGHLbT979YeCQH0HcfpkHCrlmIfgrY2snD5arry17GG_nHxopxnapZHrEeB4eeazdbXh/pubhtml?widget=true&amp;headers=false" width='100%' height='1000'></iframe>
            <p>Are you using OpenBCI for research?</p>
=======
              <h1>Who is Using This?</h1>
              <p>We compiled a list of research papers and articles that have used OpenBCI hardware and Software for their research</p>
            </div>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3k7GrXAZDcGHLbT979YeCQH0HcfpkHCrlmIfgrY2snD5arry17GG_nHxopxnapZHrEeB4eeazdbXh/pubhtml?widget=true&amp;headers=false" width='100%' height='800'></iframe>
            <p>Are you using this project?</p>
>>>>>>> 03f8ee2f20e00725edba64c34e582009d4eec0e0
            <a href={editUrl} className="button">
              Let us know!!!
            </a>
          </div>
      </div>
    );
  }
}

module.exports = Citations;
