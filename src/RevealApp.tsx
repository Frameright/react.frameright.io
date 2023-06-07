import React from 'react';

import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

import { ImageDisplayControl } from '@frameright/react-image-display-control';

import './RevealApp.css';

export function App() {
  React.useEffect(() => {
    Reveal.initialize({
      controlsLayout: 'edges',
      controlsTutorial: false,
      controlsBackArrows: 'hidden',
      progress: true,
      mouseWheel: true,
      disableLayout: true,
      transition: 'none',
    });
    return () => {
      try {
        Reveal.destroy();
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <section>
            <div className="slide first"></div>
          </section>
        </section>
      </div>
    </div>
  );
}
