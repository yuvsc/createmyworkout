<template>
  <div id="app" >
    <header>
      <h1>Welcome to CreateMyWorkout!</h1>
    </header>
    <main>
      <nav>
      <select v-model="select">
        <option v-for="part in parts" v-bind:value="part">{{part}}</option>
      </select>

      <br/><br/><br/>

      </nav>

      <button v-on:click="calculate(select, myworkouts)">Get me a workout</button>

      <p id="mymessage"></p>

    </main>
  </div>
</template>

<script>
export default{
  name:'app',
  data(){
  return{
    parts: ['Legs', 'Upper_Body', 'Full_Body'],
   
   Legs: ["Front Squats", "Deadlifts", "Wall Sit", "Reverse Lunge", "Kettlebell Swings", "Single Leg Deadlift", "Sumo Squats", "Jumping Lunges", "Side to Side Lunge", "Step Up", "Curtsy Lunge", "Hamstring Curls", "Bulgarian Split Squat", "Donkey Kicks", "Frog Bridges", "Single Leg Bridge", "Jump Squat - Explosive"],

    Upper_Body:["Pushups", "Overhead Tricep Extension","Front Raises", "Lateral Raises", "Bent Over Rows", "Arnold Press", "Bench Press", "Bicep Curls", "Reverse Flys", "Dips", "Squat Sholder Press", "Pull Ups", "Back Extensions", "Incline Fly", "Seated Dumbell Overhead"],

    myworkouts: {
        "Legs":["Front Squats", "Deadlifts", "Wall Sit", "Reverse Lunge", "Kettlebell Swings", "Single Leg Deadlift", "Sumo Squats", "Jumping Lunges", "Side to Side Lunge", "Step Up", "Curtsy Lunge", "Hamstring Curls", "Bulgarian Split Squat", "Donkey Kicks", "Frog Bridges", "Single Leg Bridge", "Jump Squat - Explosive"],
        
        "Upper_Body": ["Pushups", "Overhead Tricep Extension","Front Raises", "Lateral Raises", "Bent Over Rows", "Arnold Press", "Bench Press", "Bicep Curls", "Reverse Flys", "Dips", "Squat Sholder Press", "Pull Ups", "Back Extensions", "Incline Fly", "Seated Dumbell Overhead"],
        
        "Full_Body": ["Front Squats", "Deadlifts", "Wall Sit", "Reverse Lunge", "Kettlebell Swings", "Single Leg Deadlift", "Sumo Squats", "Jumping Lunges", "Side to Side Lunge", "Step Up", "Curtsy Lunge", "Hamstring Curls", "Bulgarian Split Squat", "Donkey Kicks", "Frog Bridges", "Single Leg Bridge", "Jump Squat - Explosive", "Pushups", "Overhead Tricep Extension","Front Raises", "Lateral Raises", "Bent Over Rows", "Arnold Press", "Bench Press", "Bicep Curls", "Reverse Flys", "Dips", "Squat Sholder Press", "Pull Ups", "Back Extensions", "Incline Fly", "Seated Dumbell Overhead"],
        
       

        "Cardio":["1 minute rope jump", "3 minute treadmill sprint", "1 minute explosive squats", "3 minute jumping jacks"]
      },
    message: ""
  }
  },
  methods: {
    calculate: function(select, myworkouts){
      var finalworkout = "Warm Up:<br>10 Minutes on Treadmil"

      var promise1 = new Promise(function(resolve, reject) {
        var i;
        for (i = 0; i < 3; i++) {
          setTimeout(1)
          finalworkout += "<br><br>3x <br>";
          var z;
          for (z = 0; z < 3; z++) {
            var selection = select.toString()
            setTimeout(1)
            var selectedArray = myworkouts[selection]
            setTimeout(1)
            var randnum = Math.floor(Math.random() * selectedArray.length)
            setTimeout(1)
            finalworkout += "12 " + selectedArray[randnum] + "<br>";
            setTimeout(1)
          }
          if(i!=2){
            var randnum = Math.floor(Math.random() * myworkouts["Cardio"].length)
              finalworkout += "<br>" + myworkouts["Cardio"][randnum];
          }
        }
        resolve("success")
      });
    
    promise1.then(function(value) {
      document.getElementById("mymessage").innerHTML = finalworkout +"</br> STRETCH"
    });
      
    }
  }
}
</script>