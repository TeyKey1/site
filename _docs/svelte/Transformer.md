title: How to resize and rotate canvas shapes with Svelte and Konva?
layout: svelte_page

---

You can use the transformer tool by using the svelte-konva transformer component. Generally this approach requires some interfacing with the native Konva API. You can attach shapes to the transformer by manually attaching their handles to the transformer using the `nodes()` function. svelte-konva also automatically keeps your config in sync with the Konva node on `transformend`. See the [bindings](/docs/svelte/Bindings.html) doc page for more details.

For a more detailed example with select & transform functionality see the [example](https://github.com/konvajs/svelte-konva/blob/master/src/routes/examples/transform/Transform.svelte) in the svelte-konva repo.

Instructions: click on shape to select it.

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/transformer?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
