<script>
    import { onMount } from "svelte";
    import { Stage, Layer, Ring } from "svelte-konva";

    const stageConfig = $state({
        width: 0,
        height: 0,
    });

    let yellowRingConfig = $state({
        x: 150,
        y: 150,
        innerRadius: 80,
        outerRadius: 120,
        fill: "yellow",
        draggable: true,
    });

    const redRingConfig = $state({
        x: 350,
        y: 150,
        innerRadius: 80,
        outerRadius: 120,
        fill: "red",
        draggable: true,
    });

    const greenRingConfig = $state({
        x: 250,
        y: 350,
        innerRadius: 80,
        outerRadius: 120,
        fill: "green",
        draggable: true,
    });

    const redRingConfigActual = $state({
        x: redRingConfig.x,
        y: redRingConfig.y,
    });

    onMount(() => {
        stageConfig.width = window.innerWidth;
        stageConfig.height = window.innerHeight;
    });

    function getActualConfigValues() {
        redRingConfigActual.x = redRingConfig.x;
        redRingConfigActual.y = redRingConfig.y;
    }
</script>

<div>
    <Stage config={stageConfig}>
        <Layer>
            <Ring config={yellowRingConfig} />
            <Ring config={redRingConfig} ondragend={getActualConfigValues} />
            <Ring config={greenRingConfig} staticConfig />
        </Layer>
    </Stage>

    <div class="positions">
        <p>
            <b>yellow ring (bound):</b> x: {yellowRingConfig.x}, y: {yellowRingConfig.y}
        </p>
        <p>
            <b>red ring (not bound):</b> reactive x: {redRingConfig.x}, reactive
            y: {redRingConfig.y}, actual x: {redRingConfigActual.x}, actual y: {redRingConfigActual.y}
        </p>
        <p>
            <b>green ring (staticConfig):</b> x: {greenRingConfig.x}, y: {greenRingConfig.y}
        </p>
    </div>
</div>

<style>
    .positions {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
