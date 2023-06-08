import { Highlight, themes } from 'prism-react-renderer';

export function CodeBlock({ language = '', code = '' }) {
  // See https://github.com/FormidableLabs/prism-react-renderer
  return (
    <Highlight theme={themes.jettwaveDark} language={language} code={code}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
