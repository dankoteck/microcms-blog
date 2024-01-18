<script setup lang="ts">
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Offset = {
  min: number;
  max: number;
};

const animated = (target: HTMLElement, xOffset: Offset, yOffset: Offset) => {
  gsap.to(target, {
    x: gsap.utils.random(xOffset.min, xOffset.max, 1),
    y: gsap.utils.random(yOffset.min, yOffset.max, 1),
    duration: gsap.utils.random(3, 8, 0.75),
    opacity: gsap.utils.random(0.3, 1, 0.3),
    ease: Linear.easeInOut,
    onComplete: animated,
    onCompleteParams: [target, xOffset, yOffset],
  });
};

onMounted(() => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperBounds = wrapper!.getBoundingClientRect();
  const maxXOffset = wrapperBounds.width;
  const maxYOffset = wrapperBounds.height;
  const animationState = [
    {
      x: { min: 315, max: maxXOffset - 315 },
      y: { min: 315, max: maxYOffset - 315 },
    },
    {
      x: { min: -maxXOffset + 315, max: -315 },
      y: { min: 315, max: maxYOffset - 315 },
    },
    {
      x: { min: 380, max: maxXOffset - 380 },
      y: { min: -maxYOffset + 380, max: -380 },
    },
  ];

  gsap.utils.toArray<HTMLElement>(".circle").forEach((ele, idx) => {
    animated(ele, animationState[idx].x, animationState[idx].y);
  });
});
</script>

<template>
  <div class="wrapper">
    <div class="circle circle-top-left"></div>
    <div class="circle circle-top-right"></div>
    <div class="circle circle-bottom-left"></div>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  width: 100vw;
  height: 900px;
  overflow: hidden;
}

.circle {
  z-index: -1;
  position: absolute;
  border-radius: 50%;
  display: inline-block;
  filter: blur(120px);
  width: 313px;
  height: 313px;
}

.circle-top-left {
  left: -5%;
  top: 0;
  background: linear-gradient(
    136deg,
    #cf93ff 28.23%,
    #4dd0f9 47.72%,
    #86ccff 64.52%,
    #004cad 77.97%
  );
}

.circle-top-right {
  right: 2%;
  top: 15%;
  background: linear-gradient(
    136deg,
    #0030ad 11.43%,
    #004cad 23.53%,
    #acebff 47.72%,
    #77c5f1 62.17%,
    #168ade 77.97%
  );
}

.circle-bottom-left {
  width: 379px;
  height: 379px;
  left: 20%;
  bottom: 0;
  background: linear-gradient(
    136deg,
    #cf93ff 28.23%,
    #4dd0f9 47.72%,
    #86ccff 64.52%,
    #004cad 77.97%
  );
}
</style>
