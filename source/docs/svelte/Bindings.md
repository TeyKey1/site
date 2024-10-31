title: Binding the config prop
layout: svelte_page

---

Svelte-Konva is able to keep certain props in sync with the internal state of Konva (position, rotation, scale, ...) after `dragend` and `transformend` events in case the prop is bound.

### Disabling automatic syncing
In most cases this default behavior of svelte-konva listening to the `dragend` and `transformend` events is what you want. In some cases this might not be beneficial though (mainly for performance reasons). In such cases you can opt out of this behavior by passing the `staticConfig` prop to the component, in which case svelte-konva will not listen to those events and update the bound props:
```
<script>
  import { Stage, Layer, Rect } from 'svelte-konva';

  // x and y values will not be synced with actual position after dragend
  const config = { x: 100, y: 100, width: 400, height: 200, fill: 'blue', draggable: true };
</script>

<Stage width={window.innerWidth} height={window.innerHeight}>
  <Layer>
    <Rect {...config} staticConfig />
  </Layer>
</Stage>
```
Keep in mind that svelte-konva will evaluate the `staticConfig` prop only once during component mounting. Changing the `staticConfig` prop after the component has mounted will not have any effect.

Drag the different rings and observe the reactive changes triggered by Svelte. Note that only the bound ring (yellow) changes the coordinates on `dragend` automatically.

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/bindings?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
