title: How to draw custom canvas shape with Svelte?
layout: svelte_page

---

To create a custom shape with `svelte-konva`, we should use `Shape` component.

When creating a custom shape, we need to define a drawing function that is passed a Konva.Canvas renderer.

We can use the renderer to access the HTML5 Canvas context, and to use special methods like `context.fillStrokeShape(shape)` which automatically handles filling, stroking, and applying shadows.

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/custom_shape?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
