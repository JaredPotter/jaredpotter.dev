
import React, { Component } from 'react';

import './Community.css';

class Community extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Community</h1>
            <h3>Speaking</h3>
            <ul className="links">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1rOHWvW4tAf2mpZ5QhWu2CbgWMRvT6rj6b8FBka0-wfY/edit?usp=sharing">Intro Vue.js - SLC Frontend Dev Meetup SLC, Mar 12th 2019</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/19Vy52JE4z9N9JMwSkv1H5Nm94_BcmBzHrPwPKa45ZIM/edit?usp=sharing">Image Optimization  - Vue.js Meetup SLC, Mar 6th 2019</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1RhgDgy6omuJh6EnAhQV2fLyGodLofOGWDoT8FdCkjW0/edit?usp=sharing">Nuxt.js - Vue.js Meetup SLC, Dec 5th 2018</a>
              </li>
            </ul>
            <h3>Writing</h3>
            <ul className="links">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jaredpotter1/connecting-puppeteer-to-existing-chrome-window-8a10828149e0">Connecting Puppeteer to Existing Chrome Window</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jaredpotter1/optimizing-images-for-the-web-part-1-aa88c1c6d80e">Optimizing Images for The Web — Part 1</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jaredpotter1/connecting-a-dev-domain-to-github-pages-with-https-f0c59fb62579">Connecting a .DEV Domain to Github Pages with HTTPS</a>
              </li>
            </ul>
            <h3>Volunteering</h3>
            <ul className="article-links">
              <li>
                First Lego League - Referee / Head Referee (2013 - Current)
              </li>
              <img src="/firstLegoLeague.jpg" alt="First Lego League" className="img"/>
            </ul>
          </header>
        </div>
      );
    }
  }
  
  export default Community;