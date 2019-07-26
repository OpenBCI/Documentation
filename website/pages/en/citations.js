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
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQpWB4OA38W_xK3uG7PwkF2mspHsiFSofnlVh7gqLfbesC33-fTxDe_TRoCXpfBGmcvPf5Z5SVMfn_b/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width='1000' height='500'></iframe>
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
