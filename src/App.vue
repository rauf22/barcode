<template>
  <div id="app">

    <div>
      <label for="code">Code</label>
      <input type="text" v-model="code" maxlength="19" placeholder="Enter code">
      <button @click="oninput">press me</button>
      <div class="code">
        {{code}}
      </div>
      <div class="codelen">
        {{code ? code.length : ""}}
      </div>
    </div>

    <div class="barcode">
      <div 
        v-for="bar in code"
        :key="bar"
        :class="`bar${bar}`"
      >{{bar}}
      </div>
      <p class="final">final</p>  
    </div>

  </div>
</template>

<script>
import {getSums, controlSum} from './func'

export default {

  name: 'App',
  components: {
    
  },
  data() {
    return {
      code: [],
    }
  },
  computed: {
    barClass (b) {
      let i = `bar${b}`
      return {i}
    }
  },

  methods: {
    oninput() {
      let cod = Array.from(this.code)

      let nech=cod.map(c => parseInt(c))
      .filter(function(v,i){
        if(i % 2 != 0) return v;
      })

      let chet=cod.map(c => parseInt(c))
      .filter(function(v,i){
        if(i % 2 == 0) return v;
      })

      let ostatok = ((getSums(chet) * 3 + getSums(nech))%10)
      let final = controlSum(ostatok)

      console.log(nech)
      console.log(chet)
      console.log(typeof(nech))
      console.log(getSums(nech))

      console.log(typeof(chet))
      console.log(getSums(chet))
      console.log(final)

      
    },
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.code {
  margin-top: 20px;
}
.codelen {
  margin-top: 20px;
}
.bar_exist {
  background: #aeaeae;
  cursor: pointer;
  color: #fff;
}
.barcode {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
}
.bar0 {
  height: 30px;
  width: 15px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar1 {
  height: 60px;
  width: 15px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar2 {
  height: 90px;
  width: 15px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar3 {
  height: 120px;
  width: 15px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar4 {
  height: 30px;
  width: 30px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar5 {
  height: 60px;
  width: 30px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar6 {
  height: 90px;
  width: 30px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar7 {
  height: 120px;
  width: 30px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar8 {
  height: 30px;
  width: 45px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar9 {
  height: 60px;
  width: 45px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: aqua;
}
.final {
  height: 120px;
  width: 30px;
  margin-right: 1px;
  border: solid 1px blue;
  background-color: white;
}

</style>
