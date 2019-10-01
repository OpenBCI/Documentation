/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="52"
                height="52"
              />
            )}
          </a>
          <div>
            <h5>Site</h5>
            <a href="https://openbci.com">
              OpenBCI Website
            </a>
            <a href="https://shop.openbci.com">
              OpenBCI Store
            </a>
            <a href="https://openbci.com/opportunities">
              Opportunities
            </a>
            <a href="https://openbci.com/donation">
              Downloads
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://twitter.com/OpenBCI?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              Twitter
            </a>
            <a href="https://www.instagram.com/openbci/">
              Instagram
            </a>
            <a href="https://www.facebook.com/OpenBCI/">
              Facebook
            </a>
            <a href="https://www.linkedin.com/company/openbci/">
              LinkedIn
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/OpenBCI">GitHub</a>
            <a href="https://openbci.com/community/">Community</a>
            <a href="https://openbci.com/forum/">Forum</a>
            <a href="https://openbci.com/index.php/contact">Contact</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
