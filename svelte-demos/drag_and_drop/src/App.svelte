<script>
    import { Stage, Layer, Text } from "svelte-konva";

    let isDragging = $state(false);

    let config = $state({
        text: "Draggable Text",
        x: 50,
        y: 50,
        fill: "black",
        draggable: true,
    });

    $effect(() => {
        config.fill = isDragging ? "green" : "black";
    });
</script>

<Stage config={{ width: window.innerWidth, height: window.innerHeight }}>
    <Layer>
        <Text
            {config}
            ondragstart={() => (isDragging = true)}
            ondragend={() => (isDragging = false)}
        />
    </Layer>
</Stage>
