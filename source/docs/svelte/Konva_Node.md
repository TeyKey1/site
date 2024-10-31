title: Accessing the Konva node
layout: svelte_page

---

In some cases you might need to access the underlying Konva node of the svelte-konva component directly. You can do this by accessing the `handle` property of the corresponding component instance or by accessing it in the payload of a Konva event.

**Caution:** The node is initially undefined and becomes defined one tick after the component has been mounted. If you want to access the node directly after component mounting you need to await a Svelte `tick()` before the handle prop becomes defined. This is caused due to the Stage component waiting for its div wrapper to become rendered before attaching its children nodes.

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/konva_node?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
