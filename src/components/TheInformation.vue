<template>
    
    <div class = "rules">
  <div class = "main-information">
    <h2>PLEASE HAVE THE FOLLOWING READY BEFORE COMMISSIONING</h2>
    <ul>
    <li><h3>Commission Type</h3>(ie waist-up sketch, fullbody full colour, etc.)</li>
    <li><h3>References</h3>Make sure you include reference of anything important you would like drawn.</li>
    <li><h5 class="notice">-- If there are no complete image references of the character, there will be a design fee. Design fee may vary depending on complexity. This applies to written descriptions and separate reference images (ie. Google images of clothing, hair, etc. Anything I will be piecing together or designing.)</h5></li>
    <li><h3>What are the characters like?</h3>Any important personality traits/expressions that you would like depicted? Please keep this short and sweet.</li>
    <li><h3>Any specific posing?</h3>Though you can leave this up to me if you don’t have anything specific in mind.</li>
    <li><h3>Your email address</h3>I will need this for invoicing.</li>
    </ul>
  </div>
  <div class = "other-information">
    <h2>Other Important Information</h2>
    <ul>
    <li>Commissions will be paid for through paypal, all prices are in Canadian dollars. <h4 class="notice2">Paypal’s service fee of 4% will be added to the total cost on the invoice.</h4></li>
    <li><h4 class="notice2">Commissions must be paid in full before I begin!</h4> If you are in the commission queue, I will not send the invoice until I am one commission away from getting to yours. The only exception would be for particularly large commissions and would only be upon request.</li>
    <li><h4 class="notice2">There will be no refunds once I have begun drawing!</h4></li>
    <li>on the commission, I will send progress shots before I send the completed file! <h4 class="notice2">Sketches will only have one opportunity for edits.</h4></li>
    <li>There is a chance I will be streaming work on your commission on my twitch channel! If you do not want this, please let me know ahead of time.</li>
    <li><h4 class="notice2">If you have any questions, please don't hesitate to ask! I'm happy to help wherever I can!</h4></li>
    </ul>
  </div>
  </div>
  <div class = "waitlist">
  <p>If you are on the waitlist, please refer to my Trello before messaging me asking when I will be able to begin work. I keep fairly organized, I won’t forget about you once you’re on the list and will let you know as soon as I’m ready to begin work on your commission!</p>
  
  </div>
    
</template>

<script>
export default {
  
};
</script>

<style scoped>

.the-title {
  color: #ff8a00;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.075rem;
  width: calc(100% + 0.075rem);
  font-size: 1.75em;
  line-height: 1.75;
  font-weight: 600;
  
}
.rules {
  display: flex;
  color: white;
  border-style: none;
  box-shadow: 1px 1px 1px 1px black;
  border-radius: 15px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #013747;
  
  
}
@media (max-width: 800px) {
  .rules {
    flex-direction: column;
    padding-left: none;
    padding-right: none;
  }
}

.comms img {
  height: auto;
  max-width: 60%;
}

.main-information {
  flex: 1;
  margin-right: 20px;

  
}

.other-information {
  flex: 1;
 
}

li {
  text-align: left;
  /* background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cpolygon%20points%3D%2220%2C1%2027%2C12.3%2040%2C15.5%2031.4%2C25.7%2032.4%2C39%2020%2C34%207.6%2C39%208.6%2C25.7%200%2C15.5%2013%2C12.3%22%20fill%3D%22%2326A3AB%22%20%2F%3E%3C%2Fsvg%3E");
  background-position: left 60%;
  background-size: contain;
  background-repeat: no-repeat; */
  list-style: none;
  padding-bottom: 5px;
  /* line-height: 0.984375rem;
  height: 0.984375rem;
  min-width: 0.46142578125rem; */
}

h3 {
  display: inline;
  padding-right: 4px;
  color: #ff8a00;
}

.notice {
  color: #ffe091;
  background-color: transparent;
}

.notice2 {
  color: #ff8787;
  background-color: transparent;
}

.main-information h2 {
  color: #ff8a00;
  background-color: transparent;
}

.other-information h2 {
  color: red;
}

.waitlist p {
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  
}
</style>