<template>
    <div class="container">
      <base-card :title="sketch">
        <div></div>
      </base-card>
      <base-card :title="cSketch">
        <div></div>
      </base-card>
      <base-card :title="fColor">
        <div></div>
      </base-card>
      <base-card :title="chibi">
        <div>
          <img src="../assets/images/chibi.png" />
        </div>
      </base-card>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      sketch: "Sketch",
      cSketch: "Coloured Sketch",
      fColor: "Full Color",
      chibi: "Chibis",
    }),
  };
  </script>
  
  <style scoped>
  .title {
    color: white;
    text-shadow: -1px 0 #e8562d, 0 2px #e8562d, 2px 0 #e8562d, 0 -1px #e8562d;
  }
  
  .container {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  img {
    max-width: 200px;
    height: auto;
    object-fit: contain;
    margin-top: 55px;
  }
  </style>