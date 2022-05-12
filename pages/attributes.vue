<template>
<!-- eslint-disable -->
<body>
  
<div id="app">
  
  <h1 style="margin-top:10vh;">Attributes</h1>
  <div class="wrapper_div">
  
    <h2>Hair</h2>
   <div class="attribute_div">
     
           

        <div v-for="(hair_type, index) in hair" :key="index">
          
                     <p class="attribute_description">{{hair_descriptions[index]}}</p>
                     <pre class="fivebyfive_nft">{{hair_type}}</pre>
                </div>

    </div>

    <h2>Ears</h2>
    <div class="attribute_div" style="height:30vh;">
           

        <div v-for="(ears_type, index) in ears" :key="index">
          
                     <p class="attribute_description">{{ears_descriptions[index]}}</p>
                     <pre class="fivebyfive_nft">{{ears_type}}</pre>
                </div>
    </div>


    <h2>Eyes</h2>
    <div class="attribute_div" style="height:120vh;">
           

        <div v-for="(eyes_type, index) in eyes" :key="index">
          
                     <p class="attribute_description">{{eyes_descriptions[index]}}</p>
                     <pre class="fivebyfive_nft">{{eyes_type}}</pre>
                </div>
    </div>

    <h2>Mouth</h2>
    <div class="attribute_div" style="height:60vh;">
     
           

        <div v-for="(mouth_type, index) in mouth" :key="index">
          
                     <p class="attribute_description">{{mouth_descriptions[index]}}</p>
                     <pre class="fivebyfive_nft">{{mouth_type}}</pre>
                </div>
    </div>


    
    <h2>Facial Hair</h2>
     <div class="attribute_div" style="height:60vh;">
           

        <div v-for="(facial_hair_type, index) in facial_hair" :key="index">
          
                     <p class="attribute_description">{{facial_hair_descriptions[index]}}</p>
                     <pre class="fivebyfive_nft">{{facial_hair_type}}</pre>
                </div>
    </div>
    

  
   </div>
   <Footer/>
  </div>
  
  <NavBar v-bind:is_home="false"/>
  
  
  </body>
</template>

<script>
/* eslint-disable */
//import $ from 'jquery';
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data () {
    return {
      hair: ['    @,  \n   __@  \n  / _|\\ \n  |/.v. \n  c  >| \n  |\\||| \n  `---\' \n        ', '    *   \n    /\\  \n   /--\\ \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n   ,--, \n  _|__|_\n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '  ,---, \n  |___| \n _|___|_\n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n //|||\\ \n|// , , \n||c  >| \n|||  -| \n/|`---` \n        ', '        \n        \n //|||\\ \n>o< , , \n||c  >| \n|||  -| \n  `---` \n        ', '        \n        \n  ///\\\\ \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  /\\\\\\\\ \n  / .\\\\ \n  c  >\\ \n  |  -| \n  `---\' \n        ', '        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,//// \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  /\\\\\\\\ \n  / . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,8888 \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  88888 \n  8 . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,nNNN \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  mMMMm \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '  =o=   \n  8888  \n  88888 \n  8 . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n    ,// \n  ,;//, \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '   o,   \n   /_\\  \n  (___) \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,@@@@ \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  @@@@@ \n  @ . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n __o__  \n(_____) \n||/ , , \n||c  >| \n|||  -| \n|/`---` \n        ', '        \n        \n ///`\\\\ \n\\\\\\ , , \n//c  >| \n\\\\|  -| \n//`---` \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n  ,,,,, \n  ===== \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n //\'\'\\\\ \n|// , , \n||c  >| \n|||  -| \n|/`---` \n        ', '        \n        \n />o<||\\\n |//, ,/\n |c  >| \n ||  -| \n |`---` \n        ', '  ,888, \n ;88888;\n  88888 \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n ///\'\'\\ \n|// , , \n||c  >| \n|||  -| \n/|`---` \n        ', '        \n        \n  >o<\\\\ \n  //. . \n  c  >| \n  |  -| \n  `---` \n        ', '        \n   ___  \n  /___\\_\n  ; . . \n  c  >| \n  |  -| \n  `---` \n        '],
      hair_descriptions: ["Knight Helmet", "Party Hat", "Bowl Hat", "Top Hat", "Cap Covering Eyes", "Long Hair", "Long Hair with Bow", "Dopey Hair", "Emo Hair", "Shaggy Hair", "Cool Slick Back", "Skin Fade", "Combed Church Hair", "Tight Curls Fade", "Tight Curls", "Quiff", "Bowl Cut", "Beehive", "Mohawk", "Santa Hat", "Curly Hair Fade", "Curly Hair", "Beret", "Wavy Long Hair", "Walter White Bald", "Headband", "Long Straight Hair", "Tucked Back with Bow", "Afro", "Wavy Hair No Fringe", "Short Hair with Bow", "Cap"],

      mouth: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >|&\n  |  .=\'\n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  m| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  u| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  n| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  #| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  *| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  .| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  o| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  3| \n  `---\' \n        '],
      mouth_descriptions: ["Straight Mouth", "Smoking", "Small Mustache", "Smile", "Frown", "Taped Up", "Puckered", "Small Dot", "Open Mouth", "Kiss"],

      ears: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  *  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  o  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  <  >| \n  |  -| \n  `---\' \n        '],
      ears_descriptions: ["Regular Ears", "Earrings", "Hoop Earings", "Elf Ears"],

      eyes: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |-o-o \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | === \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ‘ , \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |{}{} \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ^ ^ \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | u u \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | - - \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ; ; \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | , , \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | T T \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | $ $ \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |<3<3 \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |-#-# \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | X X \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |[][] \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |-O-O \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ^ - \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | - . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | O o \n  c  >| \n  |  -| \n  `---\' \n        '],
      eyes_descriptions: ["Regular Eyes", "Round Glasses", "Robot Visor", "Goofy Eyes", "Funky Glasses", "Happy Eyes", "Closed, Content Eyes", "Squinting Eyes", "Crying Eyes", "Feminine Eyes", "T_T eyes", "Dollar $ign Eyes", "Heart Eyes", "Sunglasses", "Dead Eyes", "Square Glasses", "Oval Glasses", "Happy Wink", "Sly Wink", "O.o Eyes"],
    
      facial_hair: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |_/-\\_\n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | /-\\ \n  `-\\\\\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `-\\\\\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |\\\\-/ \n  `-\\/\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `--;\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | mmm \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | .-. \n  `-||| \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | :-: \n  `-\';\' \n        ', '\n        \n  ,---, \n  | . . \n  c  >| \n  ;\\\\-/ \n  `\\\\// \n    `\' \n        '],
      facial_hair_descriptions: ["Fancy Handlebar", "Long Goatee", "Chin Mustache", "Beard", "Goatee", "Mustache", "Scraggly Chin Mustache", "No Mustache", "Short Beard", "Long Beard"],
    
    }
  },

  







}
</script>

<style scoped>

::-webkit-scrollbar {
    background-color: #FF8080;
}

::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
}


.attribute_description {
  font-family: Futura;
  font-size: 1vw;
  font-weight: bold;
  text-align: left;
}
.attribute_div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 30vh 30vh 30vh 30vh 30vh;
  width: 70vw;
}

h1{
  font-family: Futura;
  font-size: 2vw;
  padding-left: 15vw;
}

h2{
  font-family: Futura;
  font-size: 4vw;
}
.ia_th {
  text-align: left;
}
.ia_th, .ia_tr{
  min-width: 20vw;
}
.ia_th, .ia_tr, .ia_td {
  font-family: Futura;
  color: black;
}
.wrapper_div {
  padding-left: 15vw;
  padding-right: 15vw;
    display: block;
    width: 100%;
}
.spacer {
  height: 15vh;
}

.fivebyfive_nft {
  font-size: 1vw;
  font-family: Menlo;
}

/* Landing */

button{
  font-family: Futura;
  font-weight: bold;
  background-color: transparent;
  color: black;
  font-size: 1.5vw;
  border: 0.5vw black solid;

}


button:hover {
  color: white;
  border: 0.5vw white solid;
}


body {
  background-color: #FF8080;
  width: 120%;
  min-height: auto;
  margin: -5vw !important;
  padding: -5vw !important;
}

template {
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  position: absolute;
  background-color: #FF8080;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  overflow-x: hidden;

}
#container {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Futura;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100vw;
  height: 100%;
}
.header_span {
  display: inline-block;
}

.copyright_text {
  color: white;
  font-family: Futura;
}

.header_text {
  font-family: Futura;
  font-weight: bold;
  color: white;
  font-size: 4vw;
  display: inline;
  position: absolute;
  right: 14vw;
  top: 35vh;
}
.header_icon {
  font-family: Futura;
  color: white;
  font-size: 4vw;
  display: inline;
  position: absolute;
  right: 12.5vw;
  top: 31.5vh;
}
h2 {
  font-size: 1.5vw;
  font-weight: medium;
}
.left {
margin-top: -5vh;
  padding-left: 15vw;
  width: 50vw;

}

pre {
  font-size: 7vw;
  font-family: Menlo;
}
.right {
  width: 50vw;
  color: black;
  padding-top: 50vh;
  padding-right: 15vw;
  text-align: right;
}

</style>
