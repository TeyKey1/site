title: Getting started with Svelte and canvas via Konva
layout: svelte_page

---

## How to use canvas with Svelte?

`svelte-konva` is a JavaScript library for drawing complex canvas graphics using Svelte.

GitHub: https://github.com/konvajs/svelte-konva

It provides declarative and reactive bindings to the [Konva Framework](https://konvajs.org/).

All `svelte-konva` components correspond to `Konva` components of the same name. All the parameters available for `Konva` objects can be added as `config` prop for corresponding `svalte-konva` components.

To get more info about `Konva` you can read [Konva Overview](https://konvajs.org/docs/overview.html).

## Quick Start

### 1 Install via npm

```npm
npm i svelte-konva konva
```

### 2 Import and use svelte konva components

```js
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';
</script>

<Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
  <Layer>
    <Rect config={{ x: 100, y: 100, width: 400, height: 200, fill: 'blue' }} />
  </Layer>
</Stage>
```

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/basic_demo?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
