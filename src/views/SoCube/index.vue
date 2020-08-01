<template>
  <div class="soCube" @mousedown="compDrag" @mousemove="compRotate" @mouseup="drag = false">
    <div class="cube" :style="{ transform }">
      <div class="side top"><span>top</span></div>
      <div class="side bottom"><span>bottom</span></div>
      <div class="side left"><span>left</span></div>
      <div class="side right"><span>right</span></div>
      <div class="side front">
        <logo-r :color="'maroon'"/>
      </div>
      <div class="side back">
        <social-media />
      </div>
    </div>
  </div>
</template>

<script>
import logoR from "@/components/SocialCube/logoR";
import socialMedia from "@/components/SocialCube/socialMedia";

export default {
  name: "index",
  components: {
    logoR,
    socialMedia,
  },
  data() {
    return {
      drag: false,
      transform: '',
      rotateX: 0,
      rotateY: 0,
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    compDrag(e) {
      this.drag = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    compRotate(e) {
      if (this.drag === true) {
        if(this.mouseX < e.clientX) this.rotateX += 2;
        else if(this.mouseX > e.clientX) this.rotateX -= 2;

        if(this.mouseY < e.clientY) this.rotateY -= 2;
        else if(this.mouseY > e.clientY) this.rotateY += 2;
        this.transform = 'rotateX(' + this.rotateY + 'deg) ' +
                         'rotateY(' + this.rotateX + 'deg)';
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      }
    }
  }
}
</script>

<style scoped>
  .soCube {
    font-family: sans-serif;
    display: flex;
    height: 100vh;
    width: 100vw;
    background: #ffffff;
    position: relative;
    perspective: 500px;
  }

  .cube {
    margin: auto;
    transform-style: preserve-3d;
    width: 300px;
    height: 300px;
  }

  .side {
    position: absolute;
    display: flex;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, .9);
    color: #505050;
    border: 5px solid maroon;
  }

  .front {
    transform: translateZ(155px);
  }

  .back {
    transform: rotateY(180deg) translateZ(155px);
  }

  .right {
    transform: rotateY(90deg) translateZ(155px);
  }

  .left {
    transform: rotateY(-90deg) translateZ(155px);
  }

  .top {
    transform: rotateX(90deg) translateZ(155px);
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(155px);
  }

  .logo-r {
    margin: auto;
    color: white;
    width: 200px;
    height: 200px;
  }

  .side span {
    margin: auto;
  }
</style>
