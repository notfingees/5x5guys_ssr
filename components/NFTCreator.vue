<template>
  <!-- eslint-disable -->
  <div class="container">
    <div class="nft_creator">
      <div class="left">
        <pre class="current_donny">{{ current_donny }}</pre>
      </div>

      <div class="right">
        <div class="attribute_types">
          <p @click="expandOptions('ears')" class="attribute_type_description">
            Ears
          </p>
          <p @click="expandOptions('eyes')" class="attribute_type_description">
            Eyes
          </p>
          <p
            @click="expandOptions('facial_hair')"
            class="attribute_type_description"
          >
            Facial Hairs
          </p>
          <p @click="expandOptions('hair')" class="attribute_type_description">
            Hairs
          </p>
          <p @click="expandOptions('mouth')" class="attribute_type_description">
            Mouths
          </p>
        </div>

        <div
          class="facial_hair_options"
          v-bind:style="{ display: facial_hair_div_visible }"
        >
          <div v-for="(facial_hair_type, index) in facial_hair" :key="index">
            <pre
              class="fivebyfive_nft"
              @mouseleave="
                change_current_donny('facial_hair', chosen_facial_hair_index)
              "
              @mouseover="visualize_current_donny('facial_hair', index)"
              @click="change_current_donny('facial_hair', index)"
              >{{ facial_hair_type }}</pre
            >
          </div>
        </div>

        <div class="hair_options" v-bind:style="{ display: hair_div_visible }">
          <div v-for="(hair_type, index) in hair" :key="index">
            <pre
              class="fivebyfive_nft"
              @mouseleave="change_current_donny('hair', chosen_hair_index)"
              @mouseover="visualize_current_donny('hair', index)"
              @click="change_current_donny('hair', index)"
              >{{ hair_type }}</pre
            >
          </div>
        </div>

        <div class="eyes_options" v-bind:style="{ display: eyes_div_visible }">
          <div v-for="(eye_type, index) in eyes" :key="index">
            <pre
              class="fivebyfive_nft"
              @mouseleave="change_current_donny('eyes', chosen_eyes_index)"
              @mouseover="visualize_current_donny('eyes', index)"
              @click="change_current_donny('eyes', index)"
              >{{ eye_type }}</pre
            >
          </div>
        </div>

        <div class="ears_options" v-bind:style="{ display: ears_div_visible }">
          <div v-for="(ear_type, index) in ears" :key="index">
            <pre
              class="fivebyfive_nft"
              @mouseleave="change_current_donny('ears', chosen_ears_index)"
              @mouseover="visualize_current_donny('ears', index)"
              @click="change_current_donny('ears', index)"
              >{{ ear_type }}</pre
            >
          </div>
        </div>

        <div
          class="mouth_options"
          v-bind:style="{ display: mouth_div_visible }"
        >
          <div v-for="(mouth_type, index) in mouth" :key="index">
            <pre
              class="fivebyfive_nft"
              @mouseleave="change_current_donny('mouth', chosen_mouth_index)"
              @mouseover="visualize_current_donny('mouth', index)"
              @click="change_current_donny('mouth', index)"
              >{{ mouth_type }}</pre
            >
          </div>
        </div>
        <div id="buttons">
          <p>{{ current_guy_is_mintable ? "Available" : "Not Available" }}</p>
          <button id="randomize_button" @click="randomize_current_donny">
            RANDOMIZE
          </button>
          <button id="mint_button" @click="mint(current_donny)">
            MINT NOW
          </button>
        </div>
      </div>
    </div>

    <div class="spacer"></div>
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
export default {
  name: 'NFTCreator',

  data () {
    return {

    current_visualize_donny: '',

      current_DONNY: '    @,  \n   __@  \n  /-_|\\ \n  |/]v] \n  c  >| \n  *\\|.| \n  `--;\' \n        ',
      current_donny: '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ',
      base_donny: '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ',

      eyes_div_visible: "grid",
      ears_div_visible: "none",
      mouth_div_visible: "none",
      hair_div_visible: "none",
      facial_hair_div_visible: "none",

      

      chosen_eyes_index: 0,
      chosen_ears_index: 0,
      chosen_mouth_index: 0,
      chosen_hair_index: 24,
      chosen_facial_hair_index: 7,

      current_guy_is_mintable: false,

      est_gas_fee: 400000,


      hair: ['    @,  \n   __@  \n  / _|\\ \n  |/.v. \n  c  >| \n  |\\||| \n  `---\' \n        ', '    *   \n    /\\  \n   /--\\ \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n   ,--, \n  _|__|_\n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '  ,---, \n  |___| \n _|___|_\n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n //|||\\ \n|// , , \n||c  >| \n|||  -| \n/|`---` \n        ', '        \n        \n //|||\\ \n>o< , , \n||c  >| \n|||  -| \n  `---` \n        ', '        \n        \n  ///\\\\ \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  /\\\\\\\\ \n  / .\\\\ \n  c  >\\ \n  |  -| \n  `---\' \n        ', '        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,//// \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  /\\\\\\\\ \n  / . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,8888 \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  88888 \n  8 . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,nNNN \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  mMMMm \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '  =o=   \n  8888  \n  88888 \n  8 . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n    ,// \n  ,;//, \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '   o,   \n   /_\\  \n  (___) \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,@@@@ \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  @@@@@ \n  @ . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n __o__  \n(_____) \n||/ , , \n||c  >| \n|||  -| \n|/`---` \n        ', '        \n        \n ///`\\\\ \n\\\\\\ , , \n//c  >| \n\\\\|  -| \n//`---` \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n  ,,,,, \n  ===== \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n //\'\'\\\\ \n|// , , \n||c  >| \n|||  -| \n|/`---` \n        ', '        \n        \n />o<||\\\n |//, ,/\n |c  >| \n ||  -| \n |`---` \n        ', '  ,888, \n ;88888;\n  88888 \n  ; . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n ///\'\'\\ \n|// , , \n||c  >| \n|||  -| \n/|`---` \n        ', '        \n        \n  >o<\\\\ \n  //. . \n  c  >| \n  |  -| \n  `---` \n        ', '        \n   ___  \n  /___\\_\n  ; . . \n  c  >| \n  |  -| \n  `---` \n        '],
      hair_descriptions: ["Knight Helmet", "Party Hat", "Bowl Hat", "Top Hat", "Cap Covering Eyes", "Long Hair", "Long Hair with Bow", "Dopey Hair", "Emo Hair", "Shaggy Hair", "Cool Slick Back", "Skin Fade", "Combed Church Hair", "Tight Curls Fade", "Tight Curls", "Quiff", "Bowl Cut", "Beehive", "Mohawk", "Santa Hat", "Curly Hair Fade", "Curly Hair", "Beret", "Wavy Long Hair", "Walter White Bald", "Headband", "Long Straight Hair", "Tucked Back with Bow", "Afro", "Wavy Hair No Fringe", "Short Hair with Bow", "Cap"],

     asset_hair: ['    @,  \n   __@  \n  / _|\\ \n   / v  \n        \n   \\||  \n        \n        ', '    *   \n    /\\  \n   /  \\ \n        \n        \n        \n        \n        ', '        \n   ,--, \n  _|__|_\n        \n        \n        \n        \n        ', '  ,---, \n  |___| \n _|___|_\n        \n        \n        \n        \n        ', '        \n   ___  \n  /_/_\\ \n  ; \\__\\\n        \n        \n        \n        ', '        \n        \n //|||\\ \n|//     \n||      \n||      \n/|      \n        ', '        \n        \n //|||\\ \n>o<     \n||      \n||      \n        \n        ', '        \n        \n  ///\\\\ \n        \n        \n        \n        \n        ', '        \n        \n  /\\\\\\\\ \n  /  \\\\ \n      \\ \n        \n        \n        ', '        \n        \n  /|||\\ \n  /\\||\\ \n        \n        \n        \n        ', '        \n        \n   //// \n  ;     \n        \n        \n        \n        ', '        \n        \n        \n  ;     \n        \n        \n        \n        ', '        \n        \n  /\\\\\\\\ \n  /     \n        \n        \n        \n        ', '        \n        \n   8888 \n  ;     \n        \n        \n        \n        ', '        \n        \n  88888 \n  8     \n        \n        \n        \n        ', '        \n        \n   nNNN \n  ;     \n        \n        \n        \n        ', '        \n        \n  mMMMm \n  ;     \n        \n        \n        \n        ', '  =o=   \n  8888  \n  88888 \n  8     \n        \n        \n        \n        ', '        \n    ,// \n   ;//  \n  ;     \n        \n        \n        \n        ', '   o,   \n   /_\\  \n  (___) \n        \n        \n        \n        \n        ', '        \n        \n   @@@@ \n  ;     \n        \n        \n        \n        ', '        \n        \n  @@@@@ \n  @     \n        \n        \n        \n        ', '        \n __o__  \n(_____) \n||/     \n||      \n||      \n|/      \n        ', "        \n        \n ///'\\\\ \n\\\\\\     \n//      \n\\\\      \n//      \n        ", '        \n        \n        \n        \n        \n        \n        \n        ', '        \n  ,,,,, \n  ===== \n  ;     \n        \n        \n        \n        ', '        \n        \n //\'\'\\\\ \n|//     \n||      \n||      \n|/      \n        ', '        \n        \n />o<||\\\n |//   /\n |      \n |      \n |      \n        ', '  ,888, \n ;88888;\n  88888 \n  ;     \n        \n        \n        \n        ', '        \n        \n ///\'\'\\ \n|//     \n||      \n||      \n/|      \n        ', '        \n        \n  >o<\\\\ \n  //    \n        \n        \n        \n        ', '        \n   ___  \n  /___\\_\n  ;     \n        \n        \n        \n        '],
      mouth: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >|&\n  |  .=\'\n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  m| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  u| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  n| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  #| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  *| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  .| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  o| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  3| \n  `---\' \n        '],
      mouth_descriptions: ["Straight Mouth", "Smoking", "Small Mustache", "Smile", "Frown", "Taped Up", "Puckered", "Small Dot", "Open Mouth", "Kiss"],

        asset_mouth: ['        \n        \n        \n        \n        \n        \n        \n        ', '        \n        \n        \n        \n       &\n     .=\'\n        \n        ', '        \n        \n        \n        \n        \n     m  \n        \n        ', '        \n        \n        \n        \n        \n     u  \n        \n        ', '        \n        \n        \n        \n        \n     n  \n        \n        ', '        \n        \n        \n        \n        \n     #  \n        \n        ', '        \n        \n        \n        \n        \n     *  \n        \n        ', '        \n        \n        \n        \n        \n     .  \n        \n        ', '        \n        \n        \n        \n        \n     o  \n        \n        ', '        \n        \n        \n        \n        \n     3  \n        \n        '],
      ears: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  *  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  o  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  <  >| \n  |  -| \n  `---\' \n        '],
      ears_descriptions: ["Regular Ears", "Earrings", "Hoop Earings", "Elf Ears"],

    asset_ears: ['        \n        \n        \n        \n        \n        \n        \n        ', '        \n        \n        \n        \n        \n  *     \n        \n        ', '        \n        \n        \n        \n        \n  o     \n        \n        ', '        \n        \n        \n        \n  <     \n        \n        \n        '],

      eyes: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |-o-o \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | === \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ‘ , \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |{}{} \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ^ ^ \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | u u \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | - - \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ; ; \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | , , \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | T T \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | $ $ \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |<3<3 \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |-#-# \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | X X \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |[][] \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  |-O-O \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | ^ - \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | - . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | O o \n  c  >| \n  |  -| \n  `---\' \n        '],
      eyes_descriptions: ["Regular Eyes", "Round Glasses", "Robot Visor", "Goofy Eyes", "Funky Glasses", "Happy Eyes", "Closed, Content Eyes", "Squinting Eyes", "Crying Eyes", "Feminine Eyes", "T_T eyes", "Dollar $ign Eyes", "Heart Eyes", "Sunglasses", "Dead Eyes", "Square Glasses", "Oval Glasses", "Happy Wink", "Sly Wink", "O.o Eyes"],
    
    asset_eyes: ['        \n        \n        \n        \n        \n        \n        \n        ', '        \n        \n        \n   -o-o \n        \n        \n        \n        ', '        \n        \n        \n    === \n        \n        \n        \n        ', '        \n        \n        \n    ‘ , \n        \n        \n        \n        ', '        \n        \n        \n   {}{} \n        \n        \n        \n        ', '        \n        \n        \n    ^ ^ \n        \n        \n        \n        ', '        \n        \n        \n    u u \n        \n        \n        \n        ', '        \n        \n        \n    - - \n        \n        \n        \n        ', '        \n        \n        \n    ; ; \n        \n        \n        \n        ', '        \n        \n        \n    , , \n        \n        \n        \n        ', '        \n        \n        \n    T T \n        \n        \n        \n        ', '        \n        \n        \n    $ $ \n        \n        \n        \n        ', '        \n        \n        \n   <3<3 \n        \n        \n        \n        ', '        \n        \n        \n   -#-# \n        \n        \n        \n        ', '        \n        \n        \n    X X \n        \n        \n        \n        ', '        \n        \n        \n   [][] \n        \n        \n        \n        ', '        \n        \n        \n   -O-O \n        \n        \n        \n        ', '        \n        \n        \n    ^ - \n        \n        \n        \n        ', '        \n        \n        \n    - . \n        \n        \n        \n        ', '        \n        \n        \n    O o \n        \n        \n        \n        '],

      facial_hair: ['        \n        \n  ,---, \n  | . . \n  c  >| \n  |_/-\\_\n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | /-\\ \n  `-\\\\\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `-\\\\\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |\\\\-/ \n  `-\\/\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `--;\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | mmm \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | .-. \n  `-||| \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---\' \n        ', '        \n        \n  ,---, \n  | . . \n  c  >| \n  | :-: \n  `-\';\' \n        ', '\n        \n  ,---, \n  | . . \n  c  >| \n  ;\\\\-/ \n  `\\\\// \n    `\' \n        '],
      facial_hair_descriptions: ["Fancy Handlebar", "Long Goatee", "Chin Mustache", "Beard", "Goatee", "Mustache", "Scraggly Chin Mustache", "No Mustache", "Short Beard", "Long Beard"],
    
    asset_facial_hair: ['        \n        \n        \n        \n        \n   _/ \\_\n        \n        ', '        \n        \n        \n        \n        \n    / \\ \n    \\\\  \n        ', '        \n        \n        \n        \n        \n        \n    \\\\  \n        ', '        \n        \n        \n        \n        \n   \\\\ / \n    \\/  \n        ', '        \n        \n        \n        \n        \n        \n     ;  \n        ', '        \n        \n        \n        \n        \n    mmm \n        \n        ', '        \n        \n        \n        \n        \n    . . \n    ||| \n        ', '        \n        \n        \n        \n        \n        \n        \n        ', '        \n        \n        \n        \n        \n    : : \n    \'\'  \n        ', '        \n        \n        \n        \n        \n  ;\\\\ / \n  `\\\\// \n    `\'  '],
    }
  },

  methods: {

      async estimateGas (data) {

        try {

        console.log("in estimatedGas with", data)

        const API_URL = "https://eth-ropsten.alchemyapi.io/v2/DvWsjnC-R_avHhru9sO5aalRj283Cj1_"
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
    //  const contract = require("@/assets/_5x5guys.json")
      const contractAddress = "0x9B629a867C7CCDed073a298854aFC06D95B9f550"
   //   const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

     // const temp = 25e15; // It was 2 eth when I did it with 0.0025e18 - didn't have enough funds ;( @gieson
      



      var temp = parseInt(0)
      console.log("minting_cost is", temp)
      
     const est_tx = {
        from: this.$data.account,
        to: contractAddress,
        value: temp, 
        data: data,
      }
      var self = this
      await web3.eth.estimateGas(est_tx, function(error, hash){
        console.log("Error is: " + error)
        console.log("Estimated value is: " + hash)
       // self.est_gas_price = hash/1000000000
        self.est_gas_fee = hash

      })

      return this.$data.est_gas_fee
        }
        catch (error) {
          alert(error.message)
          //this.manageActionRegister('❌', 'Error: ' + error.message)
        }
      },

      async send_transaction_mint (tx, s){
          try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        // redirecting =========
        /*
        const encoded = Base64.encodeURI(s)
        console.log(encoded)
        */
        await console.log(txHash);
      //  window.location.href = "../success.html?string=" + encoded + "&txHash=" + txHash;
        // =====================
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" + txHash
            
        }
    } catch (error) {

     // this.manageActionRegister('❌', 'Error: ' + error.message)
     alert(error.message)
     console.log(error.message)
    
    }
      },

      unraw(str) {
    return str.replace("\\", String.raw`${"\\"}`)
},

      async mint(s){



    console.log("in mint with", s)
    console.log("length is", this.$data.current_donny.charAt(61))
    console.log("DNONY length is", this.$data.current_DONNY.charAt(61))
    
    //s = 'P   @,  \n   __@  \n  /-_|\\ \n  |/]v] \n  c  >| \n  *\\|.| \n  `--;\' \n        '

    if (window.ethereum){
      console.log('Metamask Installed');
    } else {
      console.log('Please install MetaMask!');
    }

    try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    this.$data.account = accounts[0]
    }
    catch (e) {

      alert('❗️', 'Error. Check to make sure you\'re logged in to MetaMask')
      console.log(e);
    }

    const API_URL = "https://eth-ropsten.alchemyapi.io/v2/DvWsjnC-R_avHhru9sO5aalRj283Cj1_"
      
      
      //const PUBLIC_KEY = "0x6D8D7C6092F802eb6a3409AE0C2E453dEc120783";

      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)

      const contract = require("@/assets/_5x5guys.json")
      const contractAddress = "0x9B629a867C7CCDed073a298854aFC06D95B9f550"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

    const nonce = await web3.eth.getTransactionCount(this.$data.account, "latest") //get latest nonce

      var temp = parseInt(0)// minting cost

      var tx = {}

      console.log("Lengtho f donny string is", s.length)

      const encodedTransaction = nftContract.methods.mint_5x5guy(s).encodeABI()
        console.log("ENCODED TRANSACTION", encodedTransaction)
        var estimatedGas = await this.estimateGas(encodedTransaction)

        console.log("nonce is", nonce)
        console.log('estimatedGas is', estimatedGas)
      // list price validation required
        tx = {
          from: this.$data.account,
          to: contractAddress,
          nonce: nonce.toString(16),
          gas: estimatedGas.toString(16),
          value: temp.toString(16),
          data: nftContract.methods.mint_5x5guy(s).encodeABI(),
        }

        this.send_transaction_mint(tx, s)

        





    },
  




      /* non mint related */

    visualize_current_donny(attribute_type, index){

        var nft = []

        if (attribute_type == "eyes"){
                nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[this.$data.chosen_hair_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[this.$data.chosen_ears_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[this.$data.chosen_mouth_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[this.$data.chosen_facial_hair_index]))
          }


        if (attribute_type == "hair"){
             // this.$data.chosen_hair_index = index
               nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[this.$data.chosen_eyes_index]))
               nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[index]))
               nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[this.$data.chosen_ears_index]))
               nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[this.$data.chosen_mouth_index]))
               nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[this.$data.chosen_facial_hair_index]))
          }
          
          if (attribute_type == "ears"){
                nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[this.$data.chosen_eyes_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[this.$data.chosen_hair_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[this.$data.chosen_mouth_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[this.$data.chosen_facial_hair_index]))
          }
          if (attribute_type == "mouth"){
              nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[this.$data.chosen_eyes_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[this.$data.chosen_hair_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[this.$data.chosen_ears_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[this.$data.chosen_facial_hair_index]))
          }
          if (attribute_type == "facial_hair"){
              nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[this.$data.chosen_eyes_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[this.$data.chosen_hair_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[this.$data.chosen_ears_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[this.$data.chosen_mouth_index]))
                nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[index]))
          }

          this.$data.current_donny = this.array_to_string(nft)
    },

      async change_current_donny(attribute_type, index){

          if (attribute_type == "hair"){
              this.$data.chosen_hair_index = index
          }
          if (attribute_type == "eyes"){
              this.$data.chosen_eyes_index = index
          }
          if (attribute_type == "ears"){
              this.$data.chosen_ears_index = index
          }
          if (attribute_type == "mouth"){
              this.$data.chosen_mouth_index = index
          }
          if (attribute_type == "facial_hair"){
              this.$data.chosen_facial_hair_index = index
          }

          var nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[this.$data.chosen_eyes_index]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[this.$data.chosen_hair_index]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[this.$data.chosen_ears_index]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[this.$data.chosen_mouth_index]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[this.$data.chosen_facial_hair_index]))
          this.$data.current_donny = this.array_to_string(nft)

         // var self = this

          var tID = await Promise.resolve($.post( "https://inwritingapi.com/inwriting/get_write_by_string.php", {string: this.$data.current_donny}, function( data ) {

        //  self.tokenID = data[0]['tokenID']
            return data[[0]['tokenID']]
            }, "json"));

        //self.$data.tokenID = tID[0]['tokenID']
        if (tID.length == 0){
            this.$data.current_guy_is_mintable = true
        }
        else {
            this.$data.current_guy_is_mintable = false
        }
        


      },

      getRandomInt(max) {
            return Math.floor(Math.random() * max);
      },

      randomize_current_donny(){

      
          var nft = this.add_layer(this.string_to_array(this.$data.base_donny), this.string_to_array(this.$data.asset_eyes[this.getRandomInt(20)]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_hair[this.getRandomInt(32)]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_ears[this.getRandomInt(4)]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_mouth[this.getRandomInt(10)]))
          nft = this.add_layer(nft, this.string_to_array(this.$data.asset_facial_hair[this.getRandomInt(10)]))
          this.$data.current_donny = this.array_to_string(nft)
      },



      add_layer(base_layer, layer_to_add){
          var nft = []

          for (var i = 0; i < layer_to_add.length; i++){
              if (base_layer[i] == layer_to_add[i] && layer_to_add[i] == " "){
                nft.push(layer_to_add[i])
              }
              else if (layer_to_add[i] != " "){
                nft.push(layer_to_add[i])
              }
              else {
                  nft.push(base_layer[i])
              }
          }
          return nft
      },
      
      array_to_string(char_array){
          var return_string = ""
          for (var i = 0; i < char_array.length; i++){
              return_string += char_array[i];
          }
          return return_string
      },

      string_to_array(s){
          var return_array = []
          for (var i = 0; i < s.length; i++){
              return_array.push(s[i])
          }
          return return_array
      },

      expandOptions(option){
        
        if (option == 'facial_hair'){
            this.$data.eyes_div_visible = "none"
            this.$data.ears_div_visible = "none"
            this.$data.mouth_div_visible = "none"
            this.$data.hair_div_visible = "none"
            this.$data.facial_hair_div_visible = "grid"
        }

        if (option == 'ears'){
            this.$data.eyes_div_visible = "none"
            this.$data.ears_div_visible = "grid"
            this.$data.mouth_div_visible = "none"
            this.$data.hair_div_visible = "none"
            this.$data.facial_hair_div_visible = "none"
        }

        if (option == 'hair'){
            this.$data.eyes_div_visible = "none"
            this.$data.ears_div_visible = "none"
            this.$data.mouth_div_visible = "none"
            this.$data.hair_div_visible = "grid"
            this.$data.facial_hair_div_visible = "none"
        }

        if (option == 'eyes'){
            this.$data.eyes_div_visible = "grid"
            this.$data.ears_div_visible = "none"
            this.$data.mouth_div_visible = "none"
            this.$data.hair_div_visible = "none"
            this.$data.facial_hair_div_visible = "none"
        }

        if (option == 'mouth'){
            this.$data.eyes_div_visible = "none"
            this.$data.ears_div_visible = "none"
            this.$data.mouth_div_visible = "grid"
            this.$data.hair_div_visible = "none"
            this.$data.facial_hair_div_visible = "none"
        }
        
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {
  width: 1vw;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  height: 10px;
  background: black;
}

::-webkit-scrollbar-thumb:hover {
  background: black;
}

.spacer {
  height: 15vh;
}

button {
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

#buttons {
  display: block;
  bottom: 0;
  right: 0;
  position: relative;
}

#mint_button {
  background-color: #ff8080;
  /*position: relative;
  bottom: 0;
  right: 0;
  */
}

#randomize_button {
  background-color: #ff8080;
}

.container {
  text-align: center;
}

h2 {
  font-family: Futura;
  font-weight: bold;
  font-size: 2vw;
  color: black;
}

p {
  font-family: Futura;
  font-weight: normal;
  font-size: 1vw;
  color: black;
}

pre {
  font-family: Menlo;
}

.current_donny {
  font-size: 5vw;
  text-align: center;
  margin-top: -3vh;
  margin-left: -3vw;
}

.facial_hair_options,
.hair_options,
.mouth_options,
.ears_options,
.eyes_options {
  padding-left: 1vw;
  padding-right: 1vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 13vh 13vh 13vh 13vh 13vh;
  height: 60vh;
}

.hair_options {
  overflow-y: scroll;
}

.fivebyfive_nft {
  font-size: 0.75vw;
}

.attribute_types {
  display: flex;
  gap: 2vw;
  padding-left: 2vw;
  padding-right: 2vw;
  justify-content: center;
}

.nft_creator {
  display: flex;
  padding-bottom: 0vh;
}
.left {
  width: 50%;
  height: 90vh;
}
.right {
  width: 50%;
  height: 90vh;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .facial_hair_options,
  .hair_options,
  .mouth_options,
  .ears_options,
  .eyes_options {
    padding-left: 1vw;
    padding-right: 1vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 8vh 8vh 8vh 8vh 8vh 8vh 8vh;
    height: 70vh;
  }

  .right {
    width: 70%;
    height: 90vh;
  }

  .fivebyfive_nft {
    font-size: 2vw;
  }

  #mint_button {
    display: none;
  }

  #randomize_button {
  }

  .nft_creator {
    display: flex;
    padding-bottom: 0vh;
    margin-bottom: -30vh;
  }
}
</style>
