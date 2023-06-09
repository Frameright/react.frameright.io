import React from 'react';

import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

import { ImageDisplayControl } from '@frameright/react-image-display-control';

import { CodeBlock } from './CodeBlock';
import { Mailchimp } from './Mailchimp';

import './App.css';

interface IdcStyle {
  width: string;
  height: string;
  borderRadius?: string;
}

let revealInitialized = false;
let stopAnimation = true;

export function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialIdcStyle: IdcStyle = {
    width: '18em',
    height: '12em',
  };
  const [idcStyle, setIdcStyle] = React.useState(initialIdcStyle);
  const [avoidNoRegion, setAvoidNoRegion] = React.useState('off');
  const [debug, setDebug] = React.useState('on');

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

    // Tweak the Skater's style based on which slide we're on:
    Reveal.on('slidechanged', (event) => {
      stopAnimation = true;
      if ('indexv' in event) {
        const newSlideNumber = (event.indexv as number) + 1;
        switch (newSlideNumber) {
          default:
            setAvoidNoRegion('off');
            setIdcStyle(initialIdcStyle);
            setDebug('on');
            break;

          case 2:
            setAvoidNoRegion('off');
            setIdcStyle(initialIdcStyle);
            setDebug('off');
            break;

          case 3:
            setAvoidNoRegion('off');
            setIdcStyle({
              width: '12em',
              height: '12em',
            });
            setDebug('off');
            break;

          case 4:
            setAvoidNoRegion('off');
            setIdcStyle(initialIdcStyle);
            setDebug('on');
            break;

          case 5:
            setIdcStyle({
              width: '18em',
              height: '6em',
            });
            setDebug('off');
            break;

          case 6:
            setAvoidNoRegion('on');
            (async () => {
              const firstStep = {
                width: '6em',
                height: '6em',
                debug: 'off',
              };
              const steps = [
                firstStep,
                {
                  width: '6em',
                  height: '12em',
                  debug: 'off',
                },
                firstStep,
                {
                  width: '18em',
                  height: '6em',
                  debug: 'off',
                },
                {
                  width: '6em',
                  height: '6em',
                  debug: 'on',
                },
                {
                  width: '6em',
                  height: '12em',
                  debug: 'on',
                },
                {
                  width: '6em',
                  height: '6em',
                  debug: 'on',
                },
                {
                  width: '18em',
                  height: '6em',
                  debug: 'on',
                },
              ];
              stopAnimation = false;
              while (!stopAnimation) {
                const nextStep = steps.shift() || firstStep;
                steps.push(nextStep);
                setIdcStyle({
                  width: nextStep.width,
                  height: nextStep.height,
                });
                setDebug(nextStep.debug);
                await new Promise((resolve) => setTimeout(resolve, 1000));
              }
            })();
            break;

          case 7:
          case 8:
            setAvoidNoRegion('off');
            setIdcStyle({
              width: '12em',
              height: '12em',
              borderRadius: '50%',
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
                      It is possible to add cropping regions to the{' '}
                      <b>metadata</b> of an image file.
                    </div>
                    <div className="appSlideText">
                      This demo showcases a <b>React</b> component that will
                      automatically and responsively display the best fitting
                      region based on the current element size and ratio.
                    </div>
                    <CodeBlock
                      language="bash"
                      code={`
npm i @frameright/react-image-display-control
`.trim()}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <CodeBlock
                      language="tsx"
                      code={`
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
    <div style={{ aspectRatio: 1 / 1 }}>

      <ImageDisplayControl>
        <img src={imageUrl} />
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
                      <img
                        className="logo"
                        src="https://iptc.org/wp-content/uploads/2019/03/iptc-logo.png"
                      />
                      <b>Image Display Control</b> regions in image metadata are
                      an{' '}
                      <a href="https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region">
                        open standard
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://avatars.githubusercontent.com/u/35964478?s=200&v=4"
                      />
                      Add regions to your own images for example at{' '}
                      <a href="https://frameright.app">
                        https://frameright.app
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <div className="appSlideText">Animate</div>
                    <CodeBlock
                      language="tsx"
                      code={`
const [containerStyle, setStyle] = useState({
  aspectRatio: 3 / 1,
});

useEffect(() => {
  // ...
  setStyle({ aspectRatio: 1 / 2 });
}, []);

return (
  <div style={containerStyle}>
    <ImageDisplayControl>
      <img src={imageUrl} />
    </ImageDisplayControl>
  </div>
);
`.trim()}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                      />
                      <a href="https://github.com/Frameright/react-image-display-control">
                        React component's source code
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://avatars.githubusercontent.com/u/35964478?s=200&v=4"
                      />
                      I don't use React:{' '}
                      <a href="https://docs.frameright.io/introduction">
                        other components
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                      />
                      <a href="https://github.com/Frameright/react.frameright.io/blob/main/src/App.tsx">
                        This demo's source code
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://avatars.githubusercontent.com/u/32880324?s=200&v=4"
                      />
                      Try it on{' '}
                      <a href="https://codesandbox.io/s/image-display-control-react-component-m6qj9r">
                        CodeSandbox
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://avatars.githubusercontent.com/u/35964478?s=200&v=4"
                      />
                      I want to add regions to my own images:{' '}
                      <a href="https://frameright.app">
                        https://frameright.app
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://iptc.org/wp-content/uploads/2019/03/iptc-logo.png"
                      />
                      <a href="https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region">
                        IPTC's open standard
                      </a>
                    </div>
                    <div className="appSlideText left">
                      <img
                        className="logo"
                        src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                      />
                      I have a question:{' '}
                      <a href="https://github.com/Frameright/react-image-display-control/discussions">
                        GitHub Discussions
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="appSlide">
                  <div>
                    <Mailchimp />
                    <a href="https://react.frameright.io">
                      <img
                        className="qr"
                        src="https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=https://react.frameright.io"
                      />
                      <div>react.frameright.io</div>
                    </a>
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
                src="/assets/pics/skater.jpg"
                srcSet="/assets/pics/skater_highres.jpg  4000w,
                        /assets/pics/skater.jpg          1500w"
                sizes="(max-width: 4000px) 100vw, 1500px"
                data-avoid-no-region={avoidNoRegion}
                data-debug-draw-regions={debug}
              />
            </ImageDisplayControl>
          </div>
        </div>
      </div>
    </div>
  );
}
