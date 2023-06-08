import React from 'react';

import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

// Note: this requires noImplicitAny=false in tsconfig.json because of missing
// type definitions:
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

import 'highlight.js/styles/a11y-dark.css';

import { ImageDisplayControl } from '@frameright/react-image-display-control';

import './App.css';

let revealInitialized = false;

export function App() {
  React.useEffect(() => {
    if (revealInitialized) return;
    Reveal.initialize({
      plugins: [RevealHighlight],
      controlsLayout: 'edges',
      controlsTutorial: true,
      controlsBackArrows: 'faded',
      progress: true,
      mouseWheel: true,
      touch: true,
      disableLayout: true,
      transition: 'slide',
    });
    revealInitialized = true;
  }, []);

  return (
    <div className="app">
      <span className="topbar">
        <a href="https://frameright.io">
          <img
            className="logo"
            src="https://avatars.githubusercontent.com/u/35964478?s=200&v=4"
          />
        </a>
        <a href="https://github.com/Frameright/react-image-display-control">
          <img
            className="logo"
            src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
          />
        </a>
      </span>
      <div className="flexContainer">
        <div className="reveal">
          <div className="slides">
            <section>
              <section>
                <div className="appSlide">
                  <div>
                    <p>
                      Leverage <b>Image Display Control</b> metadata in React
                    </p>
                    <pre>
                      <code className="language-tsx">
                        {`
// npm i @frameright/react-image-display-control
import {ImageDisplayControl} from
  "@frameright/react-image-display-control";

// Image's metadata contain several regions
import imageUrl from "./assets/skater.jpg";

export function MyApp() {
  // Will responsively zoom in on a meaningful
  // region:
  return (
    <ImageDisplayControl>
      <img src={imageUrl}
           width="300" height="200" />
    </ImageDisplayControl>
  );
}
`.trim()}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <p>2nd slide</p>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <p>3rd slide</p>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div data-idc-parent>
          <ImageDisplayControl>
            <img
              src="https://webc.frameright.io/assets/pics/skater.jpg"
              data-avoid-no-region="off"
            />
          </ImageDisplayControl>
        </div>
      </div>
    </div>
  );
}
