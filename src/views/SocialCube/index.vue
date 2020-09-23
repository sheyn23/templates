<template>
  <div class="social-cube" @mousedown="inDrag" @mousemove="rotate" @mouseup="outDrag">
    <back />
    <div class="cube" :style="{ transform }">
      <div class="cube__side top"><span>top</span></div>
      <div class="cube__side bottom"><span>bottom</span></div>
      <div class="cube__side left"><span>left</span></div>
      <div class="cube__side right"><span>right</span></div>
      <div class="cube__side front">
        <logo-r :color="'maroon'"/>
      </div>
      <div class="cube__side back">
        <social-media />
      </div>
    </div>
  </div>
</template>

<script>
import LogoR from "@/components/SocialCube/LogoR";
import SocialMedia from "@/components/SocialCube/SocialMedia";
import Back from "@/components/backToHome";

export default {
  name: "SocialCube",
  components: {
    LogoR,
    SocialMedia,
    Back,
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
    inDrag(e) {
      this.drag = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    rotate(e) {
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
    },
    outDrag() {
      this.drag = false;
    }
  }
}
</script>

<style lang="sass">
  $cubeBorder: 5px
  $side: 300px
  $color: maroon
  $sideTranslate: translateZ($side/2 + $cubeBorder)

  .social-cube
    display: flex
    height: 100vh
    width: 100vw
    background: #ffffff
    position: relative
    perspective: 500px

    .cube
      margin: auto
      transform-style: preserve-3d
      width: $side
      height: $side

    .cube__side
      position: absolute
      display: flex
      width: $side
      height: $side
      background: rgba(255, 255, 255, .9)
      color: #505050
      border: $cubeBorder solid $color

      &.front
        transform: $sideTranslate
      &.back
        transform: rotateY(180deg) $sideTranslate
      &.right
        transform: rotateY(90deg) $sideTranslate
      &.left
        transform: rotateY(-90deg) $sideTranslate
      &.top
        transform: rotateX(90deg) $sideTranslate
      &.bottom
        transform: rotateX(-90deg) $sideTranslate

      span
        margin: auto

</style>
