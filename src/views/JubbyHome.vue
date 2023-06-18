<template>
  <div class = "home">
  <div class="nav">
    <the-nav></the-nav>
  </div>
  <div class = "the-title">
  <span><h2>♦ JUBBLIER COMMISSIONS ♦</h2></span>
  </div>
    <base-button @click="twitter">Twitter</base-button>
    <base-button @click="email">Email</base-button>
    <base-button @click="tumblr" >Tumblr</base-button>
    <base-button @click="twitch">Twitch</base-button>
  <div class = "comms">
    <commissions />
  </div>
  <the-information />
  
  <base-button @click="waitlist">Here is the waitlist!</base-button>
</div>
</template>

<script>



export default {
    

}
</script>

<style scoped>
.the-title {
  background-color: #013747;
  color: #ff8a00;
  
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.075rem;
  width: calc(100% + 0.075rem);
  font-size: 1.75em;
  line-height: 1.75;
  font-weight: 600;
  Border-style: none;
  box-shadow: 3px 3px 3px 3px black;
  border-radius: 5px;
}



.comms img {
  height: auto;
  max-width: 50%;
  box-sizing: border-box;
}
</style>