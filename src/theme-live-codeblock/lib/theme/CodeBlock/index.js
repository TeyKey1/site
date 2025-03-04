/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CodeBlock from '@theme-init/CodeBlock';
import { Sandpack } from '@codesandbox/sandpack-react';

export const Vanilla = ({ code }) => {
  return (
    <Sandpack
      options={{
        editorHeight: 400, // default - 300
      }}
      template="vanilla"
      customSetup={{
        dependencies: {
          konva: 'latest',
        },
      }}
      files={{
        'index.html': {
          code: `<style>body, html { margin: 0; padding: 0; }</style>
<div id='container'></div>`,
        },
        '/index.js': {
          code,
        },
      }}
    />
  );
};

export const ReactKonva = ({ code, metastring }) => {
  const deps = {};
  if (metastring.includes('use-image')) {
    // deps["use-image"] = "latest";
  }
  return (
    <Sandpack
      template="react"
      options={{
        editorHeight: 400, // default - 300
      }}
      customSetup={{
        dependencies: {
          react: '^18',
          'react-dom': '^18',
          'react-konva': '^18',
          'react-konva-utils': 'latest',
          konva: 'latest',
          'use-image': 'latest',
          ...deps,
        },
      }}
      files={{
        '/App.js': {
          code,
        },
        '/styles.css': {
          code: `body, html { margin: 0; padding: 0; }`,
          hidden: true,
        },
        '/index.js': {
          code: `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
          hidden: true,
        },
      }}
    />
  );
};

export const VueKonva = ({ code }) => {
  return (
    <Sandpack
      template="vue"
      options={{
        editorHeight: 400, // default - 300
      }}
      customSetup={{
        dependencies: {
          'vue-konva': '3.2.0',
          konva: 'latest',
        },
      }}
      files={{
        'src/App.vue': {
          code,
        },
        'src/styles.css': {
          code: `body, html { margin: 0; padding: 0; }`,
          hidden: true,
        },
        'src/main.js': {
          code: `
      import { createApp } from 'vue'
import App from './App.vue'
import VueKonva from 'vue-konva';
import './styles.css';

createApp(App).use(VueKonva).mount('#app')
      `,
        },
      }}
    />
  );
};

const SvelteKonva = ({ code }) => {
  return (
    <Sandpack
      template="svelte"
      options={{
        editorHeight: 400, // default - 300
      }}
      customSetup={{
        dependencies: {
          'svelte-konva': 'latest',
          konva: 'latest',
          svelte: '^4.0.0',
        },
      }}
      files={{
        'App.svelte': {
          code,
        },
        'styles.css': {
          code: `body, html { margin: 0; padding: 0; }`,
          hidden: true,
        },
        'main.js': {
          code: `
import App from './App.svelte';
import './styles.css';

const app = new App({
  target: document.getElementById('app')
});

export default app;
          `,
          hidden: true,
        },
      }}
    />
  );
};

const withLiveEditor = (Component) => {
  function WrappedComponent(props) {
    if (props.live && props.metastring.includes('vanilla')) {
      return <Vanilla {...props} code={props.children} />;
    }
    if (props.live && props.metastring.includes('react')) {
      return (
        <ReactKonva
          {...props}
          code={props.children}
          metastring={props.metastring}
        />
      );
    }
    if (props.live && props.metastring.includes('vue')) {
      return <VueKonva {...props} code={props.children} />;
    }
    if (props.live && props.metastring.includes('svelte')) {
      return <SvelteKonva {...props} code={props.children} />;
    }
    return <Component {...props} />;
  }
  return WrappedComponent;
};
export default withLiveEditor(CodeBlock);
