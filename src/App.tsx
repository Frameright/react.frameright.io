import React from 'react';

import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

import { ImageDisplayControl } from '@frameright/react-image-display-control';

import { CodeBlock } from './CodeBlock';

import './App.css';

let revealInitialized = false;

export function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialIdcStyle = {
    width: '18em',
    height: '12em',
  };
  const [idcStyle, setIdcStyle] = React.useState(initialIdcStyle);
  const [debug, setDebug] = React.useState('off');

  React.useEffect(() => {
    if (revealInitialized) return;

    Reveal.initialize({
      controlsLayout: 'bottom-right',
      controlsTutorial: true,
      controlsBackArrows: 'faded',
      progress: true,
      mouseWheel: true,
      touch: true,
      disableLayout: true,
      transition: 'slide',
    });

    Reveal.on('slidechanged', (event) => {
      if ('indexv' in event) {
        const newSlideNumber = (event.indexv as number) + 1;
        switch (newSlideNumber) {
          case 1:
            setIdcStyle(initialIdcStyle);
            setDebug('off');
            break;

          case 2:
            setIdcStyle({
              width: '6em',
              height: '12em',
            });
            setDebug('off');
            break;

          case 3:
            setIdcStyle(initialIdcStyle);
            setDebug('on');
            break;

          case 4:
            setIdcStyle({
              width: '18em',
              height: '6em',
            });
            setDebug('off');
            break;
        }
      }
    });

    revealInitialized = true;
  }, [initialIdcStyle]);

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
                    <div className="appSlideText">
                      Simply leverage <b>Image Display Control</b> metadata in
                      React
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`
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
      <img src={imageUrl} />
    </ImageDisplayControl>
  );
}
`.trim()}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <div className="appSlideText">
                      Carelessly add size/ratio constraints
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`
export function MyApp() {
  // Will responsively zoom in on a meaningful
  // region:
  return (
    <div style={{ aspectRatio: 1 / 2 }}>

      <ImageDisplayControl>
        <img src={imageUrl}
             style={{ width:  "100%",
                      height: "100%" }} />
      </ImageDisplayControl>

    </div>
  );
}
`.trim()}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <div className="appSlideText">Easily inspect regions</div>
                    <CodeBlock
                      language="tsx"
                      code={`
export function MyApp() {
  return (
      <ImageDisplayControl>

        <img src={imageUrl}
             data-debug-draw-regions="on" />

      </ImageDisplayControl>
  );
}
`.trim()}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <div className="appSlideText left">
                      <b>Image Display Control</b> regions in image metadata is
                      an{' '}
                      <a href="https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region">
                        open standard
                      </a>
                    </div>
                    <div className="appSlideText left">
                      Add regions to your own images for example with{' '}
                      <a href="https://frameright.app">frameright.app</a>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className="idcContainer">
          <div data-idc-parent style={idcStyle}>
            <ImageDisplayControl>
              <img
                src="https://webc.frameright.io/assets/pics/skater.jpg"
                data-avoid-no-region="off"
                data-debug-draw-regions={debug}
              />
            </ImageDisplayControl>
          </div>
        </div>
      </div>
    </div>
  );
}
