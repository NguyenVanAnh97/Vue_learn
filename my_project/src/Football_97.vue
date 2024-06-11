<template>
    <div class="football-field">
      <div class="line halfway-line"></div>
      <div class="line penalty-area top"></div>
      <div class="line penalty-area bottom"></div>
      <div class="line goal-area top"></div>
      <div class="line goal-area bottom"></div>
      <div class="line center-circle"></div>
      <div class="line center-spot"></div>
      <div v-for="position in positions" :key="position.id" :class="['player', position.class]">
        {{ position.name }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        positions: [
          { id: 1, name: 'Goalkeeper', class: 'goalkeeper' },
          { id: 2, name: 'Defender 1', class: 'defender-1' },
          { id: 3, name: 'Defender 2', class: 'defender-2' },
          { id: 4, name: 'Midfielder 1', class: 'midfielder-1' },
          { id: 5, name: 'Midfielder 2', class: 'midfielder-2' },
          { id: 6, name: 'Forward 1', class: 'forward-1' },
          { id: 7, name: 'Forward 2', class: 'forward-2' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .football-field {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: 800px;
    background-color: #4CAF50;
    border: 2px solid #fff;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  
  .line {
    position: absolute;
    background-color: #fff;
  }
  
  .halfway-line {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
  }
  
  .penalty-area {
    width: 80%;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .penalty-area.top {
    top: 15%;
  }
  
  .penalty-area.bottom {
    top: 85%;
  }
  
  .goal-area {
    width: 30%;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .goal-area.top {
    top: 5%;
  }
  
  .goal-area.bottom {
    top: 95%;
  }
  
  .center-circle {
    width: 15%;
    height: 15%;
    border-radius: 50%;
    border: 2px solid #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .center-spot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .player {
    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFD700;
    border-radius: 50%;
    border: 2px solid #fff;
    color: black;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .player:hover {
    transform: scale(1.1);
    background-color: #FFA500;
  }
  
  .goalkeeper {
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .defender-1 {
    top: 25%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  
  .defender-2 {
    top: 25%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  
  .midfielder-1 {
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  
  .midfielder-2 {
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  
  .forward-1 {
    top: 75%;
    left: 40%;
    transform: translate(-50%, -50%);
  }
  
  .forward-2 {
    top: 75%;
    left: 60%;
    transform: translate(-50%, -50%);
  }
  </style>
  