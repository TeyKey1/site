title: Drag and drop canvas shapes with Svelte
layout: svelte_page

---

To enable drag&drop for any node on canvas you just need to pass the `draggable=true` prop to the component.

svelte-konva is able to automatically keep affected props (x, y) in sync with the Konva node on `dragend`. See the [bindings](/docs/svelte/Bindings.html) doc page for more details.

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/drag_and_drop?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
