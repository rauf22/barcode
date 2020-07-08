<template>
  <div id="app">

    <div>
      <label for="code">Code</label>
      <input type="text" v-model="code" maxlength="19" @keyup="oninput" placeholder="Enter code">
      <!-- <button @click="oninput">press me</button> -->
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
      ><span class="barChild">{{bar}}</span> 
      </div>
      <span class="final">{{final}}</span>
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
      final: '',
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
     this.final = controlSum(ostatok,this.code)

      console.log(nech)
      console.log(chet)
      console.log(typeof(nech))
      console.log(getSums(nech))

      console.log(typeof(chet))
      console.log(getSums(chet))
      // console.log(final)

      
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
  /* flex-wrap: wrap; */
  justify-content: center;
  margin-top: 100px;
  
}
.bar0 {
  height: 30px;
  width: 15px;
  margin: 28px 1px 10px;
  padding-top: 6px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar1 {
  height: 60px;
  width: 15px;
  margin: 1px 1px 40px;
  padding-top: 33px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar2 {
  height: 90px;
  width: 15px;
  margin: -30px 1px -45px;
  padding-top: 65px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar3 {
  height: 120px;
  width: 15px;
  margin: -60px 1px -60px;
  padding-top: 95px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar4 {
  height: 30px;
  width: 30px;
  margin: 28px 1px 10px;
  padding-top: 6px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar5 {
  height: 60px;
  width: 30px;
  margin: 1px 1px 40px;
  padding-top: 32px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar6 {
  height: 90px;
  width: 30px;
  margin: -30px 1px -45px;
  padding-top: 65px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar7 {
  height: 120px;
  width: 30px;
  margin: -60px 1px -60px;
  padding-top: 95px;
  border: solid 1px blue;
  background-color: aqua;
}

.bar8 {
  height: 30px;
  width: 45px;
  margin: 28px 1px 10px;
  padding-top: 6px;
  border: solid 1px blue;
  background-color: aqua;
}
.bar9 {
  height: 60px;
  width: 45px;
  margin: 1px 1px 40px;
  padding-top: 32px;
  border: solid 1px blue;
  background-color: aqua;
}
.final {
  height: 120px;
  width: 30px;
  margin: -60px 1px -60px;
  padding-top: 95px;
  border: solid 1px blue;
  background-color: white;
}

</style>
