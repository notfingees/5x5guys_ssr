<template>
  <!-- eslint-disable -->

  <div id="app">
    <div id="container">
      <div v-on:click="switch_donny" class="left">
        <pre id="landing_donny">{{
          five_hundred_nfts[current_landing_donny_index]
        }}</pre>
        <button
          @click="mint(five_hundred_nfts[current_landing_donny_index])"
          id="mint_button"
          class="hide-mobile"
        >
          MINT NOW
        </button>
      </div>

      <div class="right">
        <span class="header_span">
          <h1 class="header_text">5X5GUYS</h1>
          <pre class="header_icon">{{ header_icon }}</pre>
        </span>
        <h2 class="right_h2"><a href="#about">ABOUT</a></h2>
        <h2 class="right_h2"><a href="#faq">FAQ</a></h2>
        <h2 class="right_h2"><a href="#community">COMMUNITY</a></h2>
      </div>
    </div>

    <section id="about">
      <div class="about_container">
        <div class="fbf_left" id="hide-mobile">
          <h1 class="fivebyfive_header">ABOUT</h1>
          <h1 class="fivebyfive_header" style="font-size: 8vw">5x5</h1>

          <p class="fivebyfive_details">
            5X5GUYS are the first on chain text NFT collection. Each 5X5GUY is
            based on a 5 by 5 text character, and is stored directly (as text)
            on the Ethereum blockchain as an ERC721 NFT. <br /><br />There's no
            minting fees; learn more below and write your own 5X5GUY today!
          </p>
        </div>

        <div class="fbf_right">
          <div id="fivebyfive_right">
            <pre class="fivebyfive_nft">{{
              fivebyfive_animated[currently_shown_fivebyfive_animated_index]
            }}</pre>
          </div>
        </div>

        <div class="fbf_left" id="hide-desktop">
          <h1 class="fivebyfive_header">ABOUT</h1>
          <h1 class="fivebyfive_header" style="font-size: 16vw">5x5</h1>

          <p class="fivebyfive_details">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            eratidunt ut dolore magna aliquam erat
          </p>
        </div>
      </div>
    </section>

    <section id="about_stats">
      <div id="container">
        <div class="as_left">
          <pre class="stats_donny">
,---,
|-O-O
c  >|
|  -|
`---'
        </pre
          >
        </div>

        <div class="as_right">
          <span class="stats_span"
            ><p class="stats_number">5555</p>
            <p class="stats_description">SUPPLY</p></span
          >
          <span class="stats_span"
            ><p class="stats_number">{{ 5555 - number_minted }}</p>
            <p class="stats_description">REMAINING</p></span
          >
          <span class="stats_span"
            ><p class="stats_number">{{ minting_cost }}Ξ</p>
            <p class="stats_description">MINT PRICE*</p>
            <p
              style="margin-top: -1vh"
              id="about_stats_asterix"
              class="hide-mobile"
            >
              Not counting In Writing, Ethereum (gas) fees
            </p></span
          >
          <span class="stats_span"
            ><p class="stats_number">100%</p>
            <p class="stats_description">ON CHAIN</p></span
          >
          <span class="stats_span">
            <!--<p class="stats_number">6</p>
           <p class="stats_description">TOTAL TRANSACTIONS</p></span
          > -->
            <p class="stats_number">{{ number_minted }}</p>
            <p class="stats_description">TOTAL MINTED</p></span
          >
          <!--
          <span class="stats_span"
            ><p class="stats_number">1.4Ξ</p>
            <p class="stats_description">TOTAL SALES</p></span
          >
          -->
        </div>
      </div>
    </section>

    <section id="community">
      <h1 id="faq_header">Join our community</h1>
    </section>

    <section id="mint">
      <div class="mint_div">
        <NFTCreator />
      </div>
    </section>

    <section id="community">
      <div class="community_grid">
        <div v-for="(nft, index) in three_row_pattern" :key="index">
          <pre class="fivehundred_nft">{{ nft }}</pre>
        </div>
      </div>
    </section>

    <section id="faq">
      <h1 id="faq_header">FAQ</h1>

      <h2 id="faq_question">How do I mint a 5X5GUY?</h2>
      <p id="faq_answer">
        As long as you have a Metamask wallet, you can mint a 5X5GUY on this
        page by <a href="#mint">clicking here!</a> Customize your 5X5GUY and
        press mint--we'll prompt you to connect your Metamask wallet and then
        mint your 5X5GUY for you with our custom smart contract.
      </p>

      <p id="faq_answer">
        Note that there are no fees (beyond gas and In Writing fees*) to mint,
        buy, trade, view, or sell 5X5GUYS! We also never see your private
        information—<a
          href="https://www.inwriting.io/about/#security"
          target="_blank"
          >learn more about blockchain and wallet security here.</a
        >
      </p>
      <p id="faq_asterix">
        *Gas fees are Ethereum network fees you pay to transact on the Ethereum
        blockchain, and In Writing fees are the minting fee for minting text
        NFTs)
      </p>

      <h2 id="faq_question">How are the 5X5GUYS stored?</h2>
      <p id="faq_answer">
        5X5GUYS are stored 100% on chain as text NFTs through the In Writing
        API. That means your 5X5GUY NFTs will always have inherent value.
        5X5GUYS are ERC721 compliant, and you can buy, sell, list, and trade
        5X5GUYS through the In Writing marketplace, OpenSea, or any other NFT
        marketplace.
        <a target="_blank" href="https://www.inwriting.io/about/#technology"
          >Learn about In Writing and OpenSea compatibility here.</a
        >
      </p>

      <h2 id="faq_question">What are the 5X5GUYS traits?</h2>
      <p id="faq_answer">
        5X5GUYS vary in 5 attributes: hair, eyes, mouth, ears, and facial hair.
        You can combine types of attributes to
        <a href="#mint">create your own 5X5GUY here</a>, and
        <a href="attributes.html">see every variation here.</a>
      </p>
    </section>

    <NavBar v-on:get-wallet="getAccount" />
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import NFTCreator from "../components/NFTCreator.vue";
import $ from "jquery";
import { Base64 } from "js-base64";

export default {
  name: "App",
  components: {
    NavBar,
    NFTCreator,
    Footer,
  },
  data() {
    return {
      faq_questions: [
        "How do I mint a 5X5GUY?",
        "What are the 5X5GUYS traits?",
        "How are the 5X5GUYS stored?",
      ],
      faq_answers: [
        "As long as you have a Metamask wallet, you can mint a 5X5GUY on this page by clicking here! Customize your 5X5GUY and press mint--we'll prompt you to connect your Metamask wallet and then mint your 5X5GUY for you with our custom smart contract.<br>Note that there are no fees (beyond gas and In Writing fees*) to mint, buy, trade, view, or sell 5X5GUYS! We also never see your private information—learn more about blockchain and wallet security here.*Gas fees are Ethereum network fees you pay to transact on the Ethereum blockchain, and In Writing fees are the minting fee for minting text NFTs)",
        "5X5GUYS vary in 5 attributes: hair, eyes, mouth, ears, and facial hair. You can combine types of attributes to create your own 5X5GUY here, and see every variation here.",
        "5X5GUYS are stored 100% on chain as text NFTs through the In Writing API. That means your 5X5GUY NFTs will always have inherent value. 5X5GUYS are ERC721 compliant, and you can buy, sell, list, and trade 5X5GUYS through the In Writing marketplace, OpenSea, or any other NFT marketplace. Learn about In Writing and OpenSea compatibility here.",
      ],

      facial_hairs: [
        "        \n        \n        \n        \n        \n   _/ \\_\n        \n        ",
        "        \n        \n        \n        \n        \n    / \\ \n    \\\\  \n        ",
        "        \n        \n        \n        \n        \n        \n    \\\\  \n        ",
        "        \n        \n        \n        \n        \n   \\\\ / \n    \\/  \n        ",
        "        \n        \n        \n        \n        \n        \n     ;  \n        ",
        "        \n        \n        \n        \n        \n    mmm \n        \n        ",
        "        \n        \n        \n        \n        \n    . . \n    ||| \n        ",
        "        \n        \n        \n        \n        \n        \n        \n        ",
        "        \n        \n        \n        \n        \n    : : \n    ''  \n        ",
        "        \n        \n        \n        \n        \n  ;\\\\ / \n  `\\\\// \n    `'  ",
      ],

      eyes: [
        "        \n        \n        \n        \n        \n        \n        \n        ",
        "        \n        \n        \n   -o-o \n        \n        \n        \n        ",
        "        \n        \n        \n    === \n        \n        \n        \n        ",
        "        \n        \n        \n    ' , \n        \n        \n        \n        ",
        "        \n        \n        \n   {}{} \n        \n        \n        \n        ",
        "        \n        \n        \n    ^ ^ \n        \n        \n        \n        ",
        "        \n        \n        \n    u u \n        \n        \n        \n        ",
        "        \n        \n        \n    - - \n        \n        \n        \n        ",
        "        \n        \n        \n    ; ; \n        \n        \n        \n        ",
        "        \n        \n        \n    , , \n        \n        \n        \n        ",
        "        \n        \n        \n    T T \n        \n        \n        \n        ",
        "        \n        \n        \n    $ $ \n        \n        \n        \n        ",
        "        \n        \n        \n   <3<3 \n        \n        \n        \n        ",
        "        \n        \n        \n   -#-# \n        \n        \n        \n        ",
        "        \n        \n        \n    X X \n        \n        \n        \n        ",
        "        \n        \n        \n   [][] \n        \n        \n        \n        ",
        "        \n        \n        \n   -O-O \n        \n        \n        \n        ",
        "        \n        \n        \n    ^ - \n        \n        \n        \n        ",
        "        \n        \n        \n    - . \n        \n        \n        \n        ",
        "        \n        \n        \n    O o \n        \n        \n        \n        ",
      ],

      ears: [
        "        \n        \n        \n        \n        \n        \n        \n        ",
        "        \n        \n        \n        \n        \n  *     \n        \n        ",
        "        \n        \n        \n        \n        \n  o     \n        \n        ",
        "        \n        \n        \n        \n  <     \n        \n        \n        ",
      ],

      mouths: [
        "        \n        \n        \n        \n        \n        \n        \n        ",
        "        \n        \n        \n        \n       &\n     .='\n        \n        ",
        "        \n        \n        \n        \n        \n     m  \n        \n        ",
        "        \n        \n        \n        \n        \n     u  \n        \n        ",
        "        \n        \n        \n        \n        \n     n  \n        \n        ",
        "        \n        \n        \n        \n        \n     #  \n        \n        ",
        "        \n        \n        \n        \n        \n     *  \n        \n        ",
        "        \n        \n        \n        \n        \n     .  \n        \n        ",
        "        \n        \n        \n        \n        \n     o  \n        \n        ",
        "        \n        \n        \n        \n        \n     3  \n        \n        ",
      ],

      hairs: [
        "    @,  \n   __@  \n  / _|\\ \n   / v  \n        \n   \\||  \n        \n        ",
        "    *   \n    /\\  \n   /  \\ \n        \n        \n        \n        \n        ",
        "        \n   ,--, \n  _|__|_\n        \n        \n        \n        \n        ",
        "  ,---, \n  |___| \n _|___|_\n        \n        \n        \n        \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n        \n        \n        \n        ",
        "        \n        \n //|||\\ \n|//     \n||      \n||      \n/|      \n        ",
        "        \n        \n //|||\\ \n>o<     \n||      \n||      \n        \n        ",
        "        \n        \n  ///\\\\ \n        \n        \n        \n        \n        ",
        "        \n        \n  /\\\\\\\\ \n  /  \\\\ \n      \\ \n        \n        \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n        \n        \n        \n        ",
        "        \n        \n   //// \n  ;     \n        \n        \n        \n        ",
        "        \n        \n        \n  ;     \n        \n        \n        \n        ",
        "        \n        \n  /\\\\\\\\ \n  /     \n        \n        \n        \n        ",
        "        \n        \n   8888 \n  ;     \n        \n        \n        \n        ",
        "        \n        \n  88888 \n  8     \n        \n        \n        \n        ",
        "        \n        \n   nNNN \n  ;     \n        \n        \n        \n        ",
        "        \n        \n  mMMMm \n  ;     \n        \n        \n        \n        ",
        "  =o=   \n  8888  \n  88888 \n  8     \n        \n        \n        \n        ",
        "        \n    ,// \n   ;//  \n  ;     \n        \n        \n        \n        ",
        "   o,   \n   /_\\  \n  (___) \n        \n        \n        \n        \n        ",
        "        \n        \n   @@@@ \n  ;     \n        \n        \n        \n        ",
        "        \n        \n  @@@@@ \n  @     \n        \n        \n        \n        ",
        "        \n __o__  \n(_____) \n||/     \n||      \n||      \n|/      \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\     \n//      \n\\\\      \n//      \n        ",
        "        \n        \n        \n        \n        \n        \n        \n        ",
        "        \n  ,,,,, \n  ===== \n  ;     \n        \n        \n        \n        ",
        "        \n        \n //''\\\\ \n|//     \n||      \n||      \n|/      \n        ",
        "        \n        \n />o<||\\\n |//   /\n |      \n |      \n |      \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;     \n        \n        \n        \n        ",
        "        \n        \n ///''\\ \n|//     \n||      \n||      \n/|      \n        ",
        "        \n        \n  >o<\\\\ \n  //    \n        \n        \n        \n        ",
        "        \n   ___  \n  /___\\_\n  ;     \n        \n        \n        \n        ",
      ],

      landing_donny:
        "        \n        \n  ,---, \n  | . . \n  c  >| \n  |  -| \n  `---' \n        ",
      header_icon: "|",
      header_text_has_blink: false,
      fivebyfive_display: [
        "    *   \n    /\\  \n  ,/--\\ \n  |-#-# \n  <  >| \n  |  -| \n  `-\\\\' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; === \n  c  >| \n  *  .| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; ^ - \n  <  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  | mmm \n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | T T \n  c  >| \n  o  m| \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; - - \n  c  >| \n  o  u| \n  `-\\\\' \n        ",
        "        \n        \n  ,---, \n  |-O-O \n  c  >| \n  |\\\\o/ \n  `-\\/' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | $ $ \n  c  >| \n  ;\\\\u/ \n  `\\\\// \n    `'  ",
        "        \n        \n //|||\\ \n|// ^ - \n||c  >| \n|||  o| \n/|`-\\\\' \n        ",
        "        \n        \n  ,8888 \n  ; - . \n  c  >| \n  | :-: \n  `-''' \n        ",
        "        \n        \n  ,nNNN \n  ; T T \n  <  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / . . \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ;-o-o \n  c  >| \n  *  .| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; $ $ \n  c  >| \n  | ... \n  `-||| \n        ",
        "        \n        \n  mMMMm \n  ; - - \n  c  >|&\n  ;\\\\./'\n  `\\\\// \n    `'  ",
        "        \n        \n ///'\\\\ \n\\\\\\ O o \n//c  >| \n\\\\| .#. \n//`-||| \n        ",
        "        \n        \n  ,---, \n  | ‘ , \n  c  >| \n  | .*. \n  `-||| \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ ^ - \n//c  >| \n\\\\o  *| \n//`---' \n        ",
        "        \n        \n  ,---, \n  | . . \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  | === \n  <  >| \n  |_/#\\_\n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/TvT \n  c  >| \n  |\\|o| \n  `---' \n        ",
        "        \n        \n //''\\\\ \n|// . . \n||c  >| \n|||  m| \n|/`---' \n        ",
        "        \n        \n //|||\\ \n|// u u \n||c  >| \n||| ... \n/|`-||| \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | === \n  c  >| \n  |  #| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;[][] \n  c  >| \n  |  *| \n  `---' \n        ",
      ],

      fivebyfive_animated: [
        "                 *                       ,888,                   \n                 /\\                     ;88888;         ,//      \n  ,---,        ,/--\\        ,---,        88888        ,;//,      \n  ;-o-o        | ===        | ; ;        ; ^ -        ; ^ -      \n  c  >|        c  >|        c  >|        c  >|        c  >|      \n  o .m.        | :-:        | .m.        |\\\\-/        | /#\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                 /\\                     ;88888;         ,//      \n  ,---,        ,/--\\        ,---,        88888        ,;//,      \n  ;-o-o        | ===        | ; ;        ; ^ -        ; ^ -      \n  c  >|        c  >|        c  >|        c  >|        c  >|      \n  o .m.        | :-:        | .m.        |\\\\-/        | /#\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n  ,---,        ,/--\\        ,---,        88888        ,;//,      \n  ;-o-o        | ===        | ; ;        ; ^ -        ; ^ -      \n  c  >|        c  >|        c  >|        c  >|        c  >|      \n  o .m.        | :-:        | .m.        |\\\\-/        | /#\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n  ;-o-o        | ===        | ; ;        ; ^ -        ; ^ -      \n  c  >|        c  >|        c  >|        c  >|        c  >|      \n  o .m.        | :-:        | .m.        |\\\\-/        | /#\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n  c  >|        c  >|        c  >|        c  >|        c  >|      \n  o .m.        | :-:        | .m.        |\\\\-/        | /#\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n  o .m.        | :-:        | .m.        |\\\\-/        | /#\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n  `-|||        `-'''        `-|||        `-\\/'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n                                                     __o__       \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n ///'\\\\        /\\\\\\\\        /\\\\\\\\        >o<\\\\      (_____)      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n\\\\\\ ^ -        / u\\\\        / - -        //^ -      ||/ ===      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n//c  >|        c  >\\        c  >|        c  >|      ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n\\\\;\\\\-/        |  o|        |  #|        |  n|      |||  .|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n//`\\\\//        `---'        `--;'        `---'      |/`---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n    `'                                                           \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n               ,888,        ,---,                                \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n              ;88888;       |___|                                \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  ,////        88888       _|___|_       ///\\\\       //|||\\      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-O-O        ; , ,        | ; ;        | ^ ^      >o<<3<3      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >|        c  >|        c  >|      ||c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  | .n.        | .-.        ;\\\\m/        |  #|      ||| :m:      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `-|||        `-|||        `\\\\//        `---'        `-'''      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                              `'                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                                 \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n                                        __o__                    \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  ,nNNN       ///''\\        ///\\\\      (_____)       />o<||\\     \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  ; ^ ^      |// T T        |-o-o      ||/ T T       |//- ./     \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  <  >|      ||<  >|        c  >|      ||c  >|       |c  >|      \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  |  *|      ||;\\\\./        |  n|      |||  m|       ||  n|      \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'      /|`\\\\//        `---'      |/`-\\\\'       |`---'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                 `'                                              \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n               ,,,,,                                 ;88888;     \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n    /\\          ,--,                                    ,//      \n ///''\\        =====       ///''\\        /\\\\\\\\        88888      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n    /\\          ,--,                                    ,//      \n  ,/--\\        _|__|_       >o<\\\\       //|||\\        ,;//,      \n|//-o-o        ;-o-o      |// ; ;        / =\\\\        ; O o      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n    /\\          ,--,                                    ,//      \n  ,/--\\        _|__|_       >o<\\\\       //|||\\        ,;//,      \n  | ^ -        | . .        //X X      >o< ===        ; ^ ^      \n||c  >|        c  >|&     ||c  >|        c  >\\        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n    /\\          ,--,                                    ,//      \n  ,/--\\        _|__|_       >o<\\\\       //|||\\        ,;//,      \n  | ^ -        | . .        //X X      >o< ===        ; ^ ^      \n  c  >|        c  >|        c  >|      ||c  >|        c  >|      \n||;\\\\#/        |  .='     |||  #|        |  #|        ;\\\\n/      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n    /\\          ,--,                                    ,//      \n  ,/--\\        _|__|_       >o<\\\\       //|||\\        ,;//,      \n  | ^ -        | . .        //X X      >o< ===        ; ^ ^      \n  c  >|        c  >|        c  >|      ||c  >|        c  >|      \n  ;\\\\*/        *  *|        |  *|      ||| .-.        |  n|      \n/|`\\\\//        `---'      /|`--;'        `--;'        `\\\\//      \n    `'                                                  `'       ",
        "                                                       o,        \n                                                       /_\\       \n //|||\\       //''\\\\        ///\\\\       //|||\\        (___)      \n|// - -      |// ===        | . .      >o< ; ;        | $ $      \n||c  >|      ||c  >|        c  >|      ||<  >|        c  >|      \n|||  n|      |||  o|        o  o|      |||  -|        o /3\\      \n/|`-\\\\'      |/`---'        `---'        `-\\\\'        `-\\\\'      \n                                                                 \n                                                                 \n   ___                                                           \n  /___\\_       88888        ,////        ,nNNN       //|||\\      \n  ; ‘ ,        8 - .        ; ^ -        ; ^ ^      >o< T T      \n  c  >|        c  >|&       c  >|        c  >|&     ||c  >|      \n  o .-.        o\\\\./'       |\\\\*/        |  .='     |||  -|      \n  `-|||        `-\\/'        `-\\/'        `--;'        `---'      \n                                                                 \n                                                                 \n  ,,,,,                                                          \n  =====        /\\\\\\\\        ,nNNN       ///'\\\\        88888      \n  ;-#-#        / ^\\\\        ; ‘ ,      \\\\\\-o-o        8 , ,      \n  c  >|        c  >\\&       c  >|      //<  >|        c  >|      \n  |  #|        *  .='       |  m|      \\\\|  o|        |\\\\#/      \n  `---'        `---'        `---'      //`---'        `-\\/'      \n                                                                 \n                                                      ,888,      \n   ,--,                                              ;88888;     \n  _|__|_      />o<||\\      ///'\\\\       ///'\\\\        88888      \n  |[][]       |//O o/     \\\\\\-#-#      \\\\\\ , ,        ; u u      \n  c  >|&      |c  >|      //c  >|      //c  >|&       c  >|&     \n  o  .='      ||  m|      \\\\|  .|      \\\\*  .='       |\\\\./'     \n  `---'       |`---'      //`---'      //`---'        `-\\/'      \n                                                                 \n    *                                                            \n    /\\          ,--,                                    ,//      \n  ,/--\\        _|__|_       >o<\\\\       //|||\\        ,;//,      \n  | ^ -        | . .        //X X      >o< ===        ; ^ ^      \n  c  >|        c  >|        c  >|      ||c  >|        c  >|      \n  ;\\\\*/        *  *|        |  *|      ||| .-.        |  n|      \n  `\\\\//        `---'        `---'        `-|||        `---'      \n    `'                                                  `'       ",
      ],
      currently_shown_fivebyfive_animated_index: 0,

      five_hundred_nfts: [
        "        \n        \n  ,@@@@ \n  ; === \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\{}{} \n//c  >| \n\\\\|  *| \n//`---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\-o-o \n//c  >| \n\\\\| :m: \n//`-''' \n        ",
        "        \n    ,// \n  ,;//, \n  ; ; ; \n  c  >| \n  | :*: \n  `-''' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/3v3 \n  c  >|&\n  o\\|.='\n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< - - \n||c  >| \n|||  o| \n  `-\\\\' \n        ",
        "        \n        \n  ,8888 \n  ;-o-o \n  c  >| \n  |  #| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 , , \n  <  >| \n  |  3| \n  `-\\\\' \n        ",
        "        \n __o__  \n(_____) \n||/ $ $ \n||c  >| \n|||  .| \n|/`--;' \n        ",
        "        \n        \n  ///\\\\ \n  |[][] \n  c  >| \n  |  o| \n  `--;' \n        ",
        "        \n        \n  @@@@@ \n  @-#-# \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; - - \n  c  >| \n  ;\\\\./ \n  `\\\\// \n    `'  ",
        "        \n        \n  /\\\\\\\\ \n  / X\\\\ \n  c  >\\ \n  |  o| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; ^ ^ \n  c  >| \n  o  n| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/[][] \n||c  >| \n||o  *| \n|/`---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8{}{} \n  c  >| \n  |  -| \n  `-\\\\' \n        ",
        "        \n        \n  ,//// \n  ; $ $ \n  c  >| \n  o  3| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; ^ ^ \n  c  >|&\n  |\\\\./'\n  `-\\/' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; ^ - \n  c  >| \n  ;\\\\o/ \n  `\\\\// \n    `'  ",
        "  =o=   \n  8888  \n  88888 \n  8-#-# \n  c  >| \n  | :o: \n  `-''' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ^\\\\ \n  c  >\\ \n  *  .| \n  `-\\\\' \n        ",
        "        \n        \n  >o<\\\\ \n  //}{} \n  <  >| \n  |  -| \n  `-\\\\' \n        ",
        "        \n        \n  88888 \n  8 X X \n  <  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ;\\\\ \n  c  >\\ \n  |  -| \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  |-#-# \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// u u \n||c  >| \n||| .*. \n/|`-||| \n        ",
        "        \n        \n //''\\\\ \n|//-O-O \n||<  >| \n||| .n. \n|/`-||| \n        ",
        "        \n        \n  @@@@@ \n  @ ; ; \n  c  >| \n  ;\\\\#/ \n  `\\\\// \n    `'  ",
        "        \n        \n  mMMMm \n  ;-o-o \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; $ $ \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n   ___  \n  /___\\_\n  ; . . \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// === \n||c  >| \n||o  u| \n/|`---' \n        ",
        "        \n        \n  ///\\\\ \n  | X X \n  c  >| \n  |  m| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8[][] \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //- . \n  c  >| \n  *  n| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// === \n||c  >| \n||o  *| \n/|`-\\\\' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  n| \n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | ^ - \n  c  >| \n  |  #| \n  `--;' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / u\\\\ \n  <  >\\ \n  | .n. \n  `-||| \n        ",
        "        \n   ,--, \n  _|__|_\n  | - - \n  c  >| \n  o  n| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ ; ; \n  <  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  /{}\\\\ \n  c  >\\ \n  |  .| \n  `-\\\\' \n        ",
        "        \n        \n  ,8888 \n  ; X X \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; $ $ \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ;{}{} \n  <  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n />o<||\\\n |//. ./\n |c  >| \n || /m\\ \n |`-\\\\' \n        ",
        "        \n        \n  ,8888 \n  ; ; ; \n  c  >| \n  o /.\\ \n  `-\\\\' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | ‘ , \n  c  >| \n  o  *| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / T T \n  c  >| \n  *\\\\u/ \n  `-\\/' \n        ",
        "        \n        \n  88888 \n  8 ^ - \n  <  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ; , , \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ , , \n  c  >| \n  o  u| \n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  | ‘ , \n  <  >| \n  |_/-\\_\n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ,\\\\ \n  c  >\\ \n  |_/o\\_\n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; ^ - \n  c  >| \n  ;\\\\*/ \n  `\\\\// \n    `'  ",
        "        \n        \n  ,//// \n  ; . . \n  <  >| \n  |  .| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/ , , \n||c  >| \n||o  *| \n|/`---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / =\\\\ \n  c  >\\&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ,//// \n  ; u u \n  c  >| \n  *  o| \n  `-\\\\' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  | .m. \n  `-||| \n        ",
        "        \n        \n  ,//// \n  ; , , \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / u u \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  o  .| \n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  |-o-o \n  c  >| \n  |_/u\\_\n  `---' \n        ",
        "        \n        \n ///''\\ \n|//-#-# \n||<  >| \n|||  m| \n/|`--;' \n        ",
        "        \n        \n  ,---, \n  | T T \n  <  >| \n  |  3| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;-O-O \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; ^ - \n  c  >| \n  o  m| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/TvT \n  c  >| \n  |\\mmm \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/=v= \n  c  >| \n  *\\\\n/ \n  `-\\/' \n        ",
        "        \n        \n  ///\\\\ \n  | . . \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n  ,---, \n  ;-O-O \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|//-o-o \n||c  >| \n|||_/m\\_\n/|`---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; X X \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ; ‘ , \n  c  >|&\n  *  .='\n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  |{}{} \n  c  >| \n  o  3| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  /{}\\\\ \n  c  >\\ \n  |  o| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | O o \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  |{}{} \n  c  >| \n  |  3| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  |<3<3 \n  c  >| \n  *  #| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | ‘ , \n  c  >| \n  |\\\\-/ \n  `-\\/' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / $ $ \n  c  >| \n  |  u| \n  `--;' \n        ",
        "        \n   ___  \n  /___\\_\n  ;-O-O \n  c  >| \n  o mmm \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  |{}{} \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; - - \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ ‘ , \n  <  >| \n  |\\\\*/ \n  `-\\/' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; === \n  c  >|&\n  *_/.\\_\n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; . . \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< $ $ \n||c  >| \n||;\\\\-/ \n  `\\\\// \n    `'  ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / =\\\\ \n  c  >\\ \n  |  #| \n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | O o \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// O o \n||c  >| \n|||  o| \n/|`---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; - . \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ;<3<3 \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ - . \n//c  >| \n\\\\* mmm \n//`---' \n        ",
        "        \n        \n  ,---, \n  | ^ ^ \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  | T T \n  c  >| \n  *  m| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; $ $ \n  c  >| \n  |  -| \n  `--;' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 - - \n  c  >| \n  |  m| \n  `--;' \n        ",
        "        \n   ___  \n  /___\\_\n  ;[][] \n  c  >| \n  |\\\\n/ \n  `-\\/' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/}v} \n  c  >| \n  |\\|.| \n  `---' \n        ",
        "        \n    ,// \n  ,;//, \n  ; ‘ , \n  c  >| \n  o  .| \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ . . \n  c  >| \n  *  #| \n  `---' \n        ",
        "        \n    ,// \n  ,;//, \n  ;-#-# \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 X X \n  <  >| \n  |_/*\\_\n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  /<3<3 \n  c  >| \n  |\\\\o/ \n  `-\\/' \n        ",
        "        \n        \n  ,8888 \n  ; X X \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 . . \n  c  >| \n  o  3| \n  `--;' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ O o \n//c  >| \n\\\\|  #| \n//`---' \n        ",
        "        \n        \n  ,@@@@ \n  ; , , \n  c  >| \n  o  #| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// . . \n||c  >| \n|||  *| \n/|`--;' \n        ",
        "        \n        \n />o<||\\\n |//O o/\n |c  >| \n ||  #| \n |`---' \n        ",
        "        \n        \n  ,//// \n  ; $ $ \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o<-o-o \n||c  >| \n|||  n| \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //=== \n  c  >| \n  *  -| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; - . \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; , , \n  <  >|&\n  |  .='\n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/XvX \n  c  >| \n  |\\|3| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @-o-o \n  c  >| \n  | :m: \n  `-''' \n        ",
        "        \n        \n  mMMMm \n  ;-#-# \n  c  >| \n  |  *| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 T T \n  c  >|&\n  o  .='\n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; u u \n  <  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; === \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / - - \n  <  >| \n  ;\\\\-/ \n  `\\\\// \n    `'  ",
        "        \n   ,--, \n  _|__|_\n  |-#-# \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|// X X \n||c  >| \n|||  -| \n/|`---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ;-#-# \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @[][] \n  c  >| \n  |  n| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | - . \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  | $ $ \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; - . \n  <  >| \n  | :3: \n  `-''' \n        ",
        "        \n        \n  ,---, \n  | ; ; \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ;{}{} \n  c  >| \n  |  o| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | === \n  <  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 $ $ \n  c  >| \n  |_/u\\_\n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/^v^ \n  <  >| \n  |\\|o| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// u u \n||c  >| \n||*  u| \n/|`---' \n        ",
        "        \n        \n  ,---, \n  |[][] \n  c  >| \n  |  #| \n  `-\\\\' \n        ",
        "        \n        \n  88888 \n  8[][] \n  c  >| \n  o\\\\-/ \n  `-\\/' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / O o \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n />o<||\\\n |//‘ ,/\n |c  >| \n |;\\\\-/ \n |`\\\\// \n    `'  ",
        "        \n        \n ///''\\ \n|// ^ - \n||<  >| \n|||  n| \n/|`---' \n        ",
        "        \n        \n  ,---, \n  ; O o \n  c  >|&\n  | :.:'\n  `-''' \n        ",
        "        \n        \n //|||\\ \n>o< ^ ^ \n||c  >| \n||| mmm \n  `---' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  o  -| \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; O o \n  <  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ - - \n  c  >| \n  o  *| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; . . \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ ^ ^ \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  | /n\\ \n  `-\\\\' \n        ",
        "        \n        \n ///''\\ \n|// O o \n||c  >| \n|||\\\\./ \n/|`-\\/' \n        ",
        "        \n __o__  \n(_____) \n||/ - - \n||<  >| \n||| /o\\ \n|/`-\\\\' \n        ",
        "        \n        \n  mMMMm \n  ; ^ - \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  ,---, \n  | ^ - \n  c  >|&\n  |_/.\\_\n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @<3<3 \n  c  >| \n  |  o| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 ^ - \n  <  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ ^ ^ \n  <  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 X X \n  <  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< O o \n||c  >| \n||*\\\\m/ \n  `-\\/' \n        ",
        "        \n   ___  \n  /___\\_\n  ; , , \n  c  >| \n  o .o. \n  `-||| \n        ",
        "        \n __o__  \n(_____) \n||/ === \n||c  >| \n||o  *| \n|/`---' \n        ",
        "        \n        \n  >o<\\\\ \n  //X X \n  c  >| \n  | /*\\ \n  `-\\\\' \n        ",
        "        \n        \n  ,//// \n  ; - - \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/ ^ ^ \n||<  >| \n|||  o| \n|/`---' \n        ",
        "        \n        \n ///''\\ \n|//<3<3 \n||c  >| \n|||  3| \n/|`-\\\\' \n        ",
        "        \n        \n  ,---, \n  ;{}{} \n  c  >|&\n  |  .='\n  `-\\\\' \n        ",
        "        \n        \n ///''\\ \n|//-o-o \n||c  >| \n|||  *| \n/|`-\\\\' \n        ",
        "        \n        \n  ///\\\\ \n  | . . \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  |{}{} \n  c  >| \n  |  m| \n  `--;' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\-O-O \n//c  >| \n\\\\;\\\\-/ \n//`\\\\// \n    `'  ",
        "        \n        \n  /\\\\\\\\ \n  / ^ - \n  c  >| \n  o_/*\\_\n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / O\\\\ \n  c  >\\ \n  |\\\\3/ \n  `-\\/' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | O o \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< u u \n||<  >| \n|||  o| \n  `---' \n        ",
        "        \n   ___  \n  /___\\_\n  ;-O-O \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; T T \n  c  >|&\n  |  .='\n  `-\\\\' \n        ",
        "        \n        \n  /\\\\\\\\ \n  /{}{} \n  <  >| \n  | .u. \n  `-||| \n        ",
        "        \n        \n //|||\\ \n|// ^ ^ \n||c  >| \n|||  #| \n/|`---' \n        ",
        "        \n        \n  @@@@@ \n  @-#-# \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; ^ - \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ,8888 \n  ; ‘ , \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  o\\\\m/ \n  `-\\/' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ^ - \n  c  >| \n  *  u| \n  `--;' \n        ",
        "        \n        \n  ,---, \n  |-#-# \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/ T T \n||c  >| \n||* :3: \n|/`-''' \n        ",
        "        \n        \n  >o<\\\\ \n  //X X \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 - - \n  c  >| \n  |  m| \n  `--;' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  |-o-o \n  c  >| \n  o  n| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  |[][] \n  <  >| \n  |  m| \n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | ; ; \n  c  >| \n  o  u| \n  `---' \n        ",
        "        \n        \n //''\\\\ \n|// ^ ^ \n||c  >| \n||o  #| \n|/`-\\\\' \n        ",
        "        \n        \n  ,//// \n  ;<3<3 \n  <  >| \n  |  3| \n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | - . \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; - . \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  /<3<3 \n  c  >| \n  *  *| \n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  |-o-o \n  c  >| \n  o mmm \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //O-O \n  c  >|&\n  o  .='\n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; - - \n  c  >| \n  o  u| \n  `---' \n        ",
        "        \n        \n //''\\\\ \n|// ^ ^ \n||c  >| \n||| /-\\ \n|/`-\\\\' \n        ",
        "        \n        \n //|||\\ \n|//<3<3 \n||c  >| \n|||  o| \n/|`---' \n        ",
        "        \n        \n  88888 \n  8 . . \n  c  >|&\n  |\\\\./'\n  `-\\/' \n        ",
        "        \n        \n  ,---, \n  ;-o-o \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n        \n //''\\\\ \n|//<3<3 \n||c  >| \n|||  *| \n|/`---' \n        ",
        "        \n        \n  ,8888 \n  ; $ $ \n  <  >|&\n  |_/.\\_\n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; u u \n  <  >| \n  |  #| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8{}{} \n  <  >| \n  ;\\\\#/ \n  `\\\\// \n    `'  ",
        "    *   \n    /\\  \n  ,/--\\ \n  | O o \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; ‘ , \n  c  >| \n  | :n: \n  `-''' \n        ",
        "        \n        \n  mMMMm \n  ;-#-# \n  c  >| \n  * mmm \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ ^ ^ \n  c  >| \n  | :3: \n  `-''' \n        ",
        "        \n        \n  ,8888 \n  ; O o \n  c  >| \n  | /o\\ \n  `-\\\\' \n        ",
        "        \n        \n  ,8888 \n  ; === \n  c  >|&\n  | mmm'\n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  |-O-O \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ;{}{} \n  c  >| \n  |  m| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/OvO \n  c  >| \n  |\\|m| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 ^ - \n  c  >| \n  | :o: \n  `-''' \n        ",
        "        \n   ,--, \n  _|__|_\n  | === \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  | O o \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  |  -| \n  `--;' \n        ",
        "        \n __o__  \n(_____) \n||/ , , \n||c  >| \n|||  3| \n|/`-\\\\' \n        ",
        "        \n   ,--, \n  _|__|_\n  |-#-# \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; , , \n  c  >| \n  |\\\\-/ \n  `-\\/' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / -\\\\ \n  c  >\\ \n  |\\\\-/ \n  `-\\/' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ $ $ \n//c  >| \n\\\\|  -| \n//`--;' \n        ",
        "        \n   ___  \n  /___\\_\n  ; T T \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ; . . \n  c  >|&\n  | :.:'\n  `-''' \n        ",
        "        \n        \n  mMMMm \n  ;-#-# \n  c  >| \n  |_/#\\_\n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 , , \n  c  >| \n  o .m. \n  `-||| \n        ",
        "        \n        \n  ///\\\\ \n  | , , \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/-O-O \n||c  >| \n||o /u\\ \n|/`-\\\\' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | - . \n  <  >| \n  | mmm \n  `---' \n        ",
        "        \n    ,// \n  ,;//, \n  ; ; ; \n  c  >| \n  *  m| \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ;-\\__\\\n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; . . \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //; ; \n  c  >| \n  *  -| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | T T \n  c  >| \n  |  #| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; , , \n  c  >| \n  o  3| \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; $ $ \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n />o<||\\\n |//o-o/\n |c  >| \n || .u. \n |`-||| \n        ",
        "        \n        \n  ,---, \n  ; , , \n  <  >|&\n  |  .='\n  `-\\\\' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8-O-O \n  <  >| \n  |\\\\3/ \n  `-\\/' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ^ ^ \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  ;\\\\#/ \n  `\\\\// \n    `'  ",
        "        \n        \n />o<||\\\n |//‘ ,/\n |c  >| \n |*  m| \n |`---' \n        ",
        "        \n        \n ///''\\ \n|//[][] \n||c  >| \n||*_/m\\_\n/|`---' \n        ",
        "        \n   ___  \n  /___\\_\n  ; , , \n  c  >| \n  |  *| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/,v, \n  c  >| \n  *\\mmm \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 . . \n  c  >| \n  | mmm \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 === \n  <  >| \n  |  m| \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  <  >| \n  | /u\\ \n  `-\\\\' \n        ",
        "        \n        \n //|||\\ \n>o<-o-o \n||c  >| \n||| /-\\ \n  `-\\\\' \n        ",
        "        \n        \n />o<||\\\n |//X X/\n |c  >| \n ||  #| \n |`---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  |-o-o \n  c  >| \n  |  o| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | ‘ , \n  c  >| \n  |\\\\./ \n  `-\\/' \n        ",
        "        \n        \n  ,---, \n  |-O-O \n  c  >| \n  o  -| \n  `---' \n        ",
        "        \n   ___  \n  /___\\_\n  ;[][] \n  c  >| \n  |  -| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/}v} \n  c  >| \n  |_/3\\_\n  `---' \n        ",
        "        \n   ___  \n  /___\\_\n  ;-o-o \n  c  >| \n  |  #| \n  `--;' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ^\\\\ \n  c  >\\ \n  *  m| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// === \n||c  >|&\n||;\\\\./'\n/|`\\\\// \n    `'  ",
        "        \n        \n //|||\\ \n|// X X \n||c  >| \n||o ... \n/|`-||| \n        ",
        "        \n        \n //|||\\ \n|// ; ; \n||<  >|&\n||| ...'\n/|`-||| \n        ",
        "        \n        \n //|||\\ \n>o< O o \n||c  >| \n|||  *| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; T T \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/ T T \n||c  >| \n||| .-. \n|/`-||| \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; - . \n  c  >| \n  o  .| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;-#-# \n  c  >| \n  |\\\\*/ \n  `-\\/' \n        ",
        "        \n        \n  >o<\\\\ \n  //o-o \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @-o-o \n  <  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; T T \n  c  >| \n  ;\\\\./ \n  `\\\\// \n    `'  ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/,v, \n  <  >| \n  |\\|m| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | - . \n  <  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|// $ $ \n||c  >| \n|||  3| \n/|`---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; X X \n  c  >| \n  o /n\\ \n  `-\\\\' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  |<3<3 \n  c  >| \n  ;\\\\*/ \n  `\\\\// \n    `'  ",
        "        \n   ,--, \n  _|__|_\n  |-#-# \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; T T \n  c  >| \n  | mmm \n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | $ $ \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|// $ $ \n||c  >| \n||*  u| \n/|`---' \n        ",
        "        \n   ,--, \n  _|__|_\n  |-#-# \n  <  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 ^ ^ \n  c  >| \n  ;\\\\./ \n  `\\\\// \n    `'  ",
        "        \n        \n  ,---, \n  |-o-o \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //$ $ \n  <  >| \n  | .n. \n  `-||| \n        ",
        "        \n        \n  ,//// \n  ; $ $ \n  c  >| \n  |\\\\u/ \n  `-\\/' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  <  >| \n  |  o| \n  `-\\\\' \n        ",
        "        \n        \n  ,---, \n  ; === \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ,---, \n  | , , \n  c  >| \n  | .3. \n  `-||| \n        ",
        "        \n        \n  mMMMm \n  ;<3<3 \n  c  >|&\n  | ...'\n  `-||| \n        ",
        "        \n    ,// \n  ,;//, \n  ;{}{} \n  c  >| \n  | :.: \n  `-''' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ , , \n//c  >| \n\\\\| mmm \n//`---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | O o \n  c  >| \n  ;\\\\./ \n  `\\\\// \n    `'  ",
        "        \n        \n //|||\\ \n|// ^ - \n||c  >|&\n|||  .='\n/|`---' \n        ",
        "        \n        \n  ,---, \n  | ^ ^ \n  c  >| \n  o  o| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|// O o \n||c  >| \n||| mmm \n/|`---' \n        ",
        "        \n        \n //|||\\ \n>o< - - \n||<  >|&\n||| mmm'\n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  |-#-# \n  c  >| \n  o  #| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;-o-o \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\-#-# \n//c  >| \n\\\\*  *| \n//`---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ;[\\__\\\n  c  >| \n  | .m. \n  `-||| \n        ",
        "        \n   ___  \n  /___\\_\n  ;{}{} \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //O o \n  <  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ,8888 \n  ;<3<3 \n  c  >| \n  o .u. \n  `-||| \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |\\\\o/ \n  `-\\/' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  o mmm \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\{}{} \n//c  >| \n\\\\o mmm \n//`---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; O o \n  c  >| \n  * :u: \n  `-''' \n        ",
        "        \n        \n ///''\\ \n|//-o-o \n||c  >| \n|||  o| \n/|`---' \n        ",
        "        \n        \n  ,8888 \n  ; ‘ , \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; . . \n  c  >| \n  *  u| \n  `---' \n        ",
        "        \n        \n  ,---, \n  | ^ - \n  <  >| \n  |\\\\3/ \n  `-\\/' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 ^ ^ \n  c  >| \n  |  o| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;[][] \n  <  >| \n  | :-: \n  `-''' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  |<3<3 \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; X X \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  /[]\\\\ \n  c  >\\ \n  |  #| \n  `-\\\\' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ; ; \n  c  >| \n  *  o| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ $ $ \n  c  >| \n  |  *| \n  `-\\\\' \n        ",
        "        \n        \n  ,---, \n  | u u \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< u u \n||c  >| \n||* mmm \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; - . \n  c  >| \n  | /*\\ \n  `-\\\\' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; . . \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|//-o-o \n||c  >| \n|||  *| \n/|`--;' \n        ",
        "        \n        \n  ,8888 \n  ;[][] \n  c  >|&\n  *  .='\n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ^\\\\ \n  c  >\\ \n  |  #| \n  `---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ X X \n//c  >| \n\\\\|  u| \n//`---' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ;-#-# \n  c  >| \n  o  3| \n  `---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\-O-O \n//<  >| \n\\\\|  n| \n//`---' \n        ",
        "        \n        \n ///''\\ \n|// ^ - \n||c  >| \n|||  #| \n/|`-\\\\' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | - . \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; ‘ , \n  c  >| \n  |  m| \n  `--;' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ;-#-# \n  c  >| \n  |  .| \n  `-\\\\' \n        ",
        "        \n        \n //|||\\ \n>o< ‘ , \n||c  >| \n|||  u| \n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  | O o \n  c  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / ^ - \n  c  >| \n  o  u| \n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  | ‘ , \n  c  >| \n  *  o| \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //- - \n  c  >| \n  ;\\\\#/ \n  `\\\\// \n    `'  ",
        "   o,   \n   /_\\  \n  (___) \n  | O o \n  c  >| \n  ;\\\\o/ \n  `\\\\// \n    `'  ",
        "        \n        \n //|||\\ \n>o< - - \n||<  >| \n|||  #| \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //=== \n  c  >| \n  |  *| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 ^ - \n  c  >| \n  |  n| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | ; ; \n  c  >| \n  |\\\\-/ \n  `-\\/' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/-v- \n  c  >| \n  *\\|.| \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; $ $ \n  c  >| \n  o\\\\*/ \n  `-\\/' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; X X \n  c  >| \n  o :#: \n  `-''' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ O o \n//c  >| \n\\\\;\\\\n/ \n//`\\\\// \n    `'  ",
        "        \n   ___  \n  /_/_\\ \n  ;{\\__\\\n  c  >| \n  |  u| \n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | === \n  c  >|&\n  |  .='\n  `-\\\\' \n        ",
        "        \n   ___  \n  /___\\_\n  ; - . \n  c  >| \n  |  .| \n  `-\\\\' \n        ",
        "        \n        \n  @@@@@ \n  @-o-o \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; . . \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|//-O-O \n||c  >| \n|||  u| \n/|`---' \n        ",
        "        \n        \n  ,8888 \n  ; O o \n  c  >| \n  | mmm \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | ^ ^ \n  c  >| \n  |\\\\n/ \n  `-\\/' \n        ",
        "        \n        \n //|||\\ \n>o<-o-o \n||c  >| \n||| mmm \n  `---' \n        ",
        "        \n        \n  88888 \n  8 ‘ , \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / -\\\\ \n  c  >\\ \n  |\\\\*/ \n  `-\\/' \n        ",
        "        \n __o__  \n(_____) \n||/-o-o \n||c  >| \n||o  #| \n|/`---' \n        ",
        "        \n   ,--, \n  _|__|_\n  | . . \n  c  >| \n  |  .| \n  `-\\\\' \n        ",
        "        \n   ___  \n  /___\\_\n  ;-O-O \n  c  >| \n  *  n| \n  `---' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ;[][] \n  <  >| \n  |  3| \n  `--;' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | X X \n  c  >| \n  *  .| \n  `---' \n        ",
        "        \n  ,,,,, \n  ===== \n  ; . . \n  c  >| \n  |  #| \n  `-\\\\' \n        ",
        "        \n        \n ///''\\ \n|// u u \n||c  >| \n|||  *| \n/|`--;' \n        ",
        "        \n        \n //|||\\ \n>o< === \n||c  >| \n|||  o| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 . . \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; $ $ \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o<{}{} \n||c  >| \n|||  o| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|//<3<3 \n||c  >| \n|||  #| \n/|`---' \n        ",
        "        \n        \n  @@@@@ \n  @ - . \n  c  >| \n  ;\\\\./ \n  `\\\\// \n    `'  ",
        "        \n        \n  ,---, \n  ; $ $ \n  c  >| \n  | /o\\ \n  `-\\\\' \n        ",
        "        \n        \n  ,8888 \n  ;[][] \n  c  >|&\n  o  .='\n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  |-O-O \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; ^ - \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/ u u \n||c  >| \n||o  -| \n|/`---' \n        ",
        "        \n        \n  ,//// \n  ; O o \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ X X \n  c  >| \n  o .*. \n  `-||| \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | ; ; \n  <  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ,---, \n  ;[][] \n  <  >| \n  |  *| \n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | ^ - \n  c  >| \n  |_/u\\_\n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< ^ ^ \n||c  >| \n||*  m| \n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | T T \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n />o<||\\\n |//; ;/\n |c  >| \n ||  m| \n |`---' \n        ",
        "        \n        \n  88888 \n  8 X X \n  c  >| \n  * :*: \n  `-''' \n        ",
        "        \n        \n  ,8888 \n  ; $ $ \n  <  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n //''\\\\ \n|//{}{} \n||c  >| \n|||  #| \n|/`---' \n        ",
        "        \n        \n  ///\\\\ \n  | X X \n  c  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; O o \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  mMMMm \n  ; - - \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ,---, \n  ; ^ ^ \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; . . \n  <  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< === \n||c  >| \n||;\\\\u/ \n  `\\\\// \n    `'  ",
        "        \n        \n />o<||\\\n |//o-o/\n |<  >| \n ||  .| \n |`---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ - . \n//c  >| \n\\\\o  o| \n//`---' \n        ",
        "        \n   ___  \n  /___\\_\n  ; X X \n  c  >| \n  *  .| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// $ $ \n||c  >| \n|||  -| \n/|`--;' \n        ",
        "        \n        \n  ,8888 \n  ;-o-o \n  c  >| \n  |  #| \n  `--;' \n        ",
        "        \n    ,// \n  ,;//, \n  ; - . \n  <  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  @@@@@ \n  @ - - \n  c  >| \n  | /#\\ \n  `-\\\\' \n        ",
        "        \n        \n //|||\\ \n|// ‘ , \n||c  >| \n||*  m| \n/|`---' \n        ",
        "        \n        \n  >o<\\\\ \n  //- - \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  ,---, \n  |-o-o \n  c  >| \n  |  -| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; ; ; \n  c  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 - . \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //O-O \n  c  >| \n  o  m| \n  `-\\\\' \n        ",
        "        \n        \n  /|||\\ \n  /\\||\\ \n  <  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  ,---, \n  ; === \n  c  >| \n  |  o| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/-v. \n  c  >| \n  |_/#\\_\n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/XvX \n  c  >| \n  |\\|*| \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; - . \n  c  >| \n  ;\\\\u/ \n  `\\\\// \n    `'  ",
        "        \n        \n  ,//// \n  ;{}{} \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  ,//// \n  ; , , \n  c  >| \n  o  #| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/^v- \n  c  >| \n  |\\||| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / , , \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n  ,@@@@ \n  ; - . \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n />o<||\\\n |//^ -/\n |c  >| \n ||  o| \n |`---' \n        ",
        "        \n    ,// \n  ,;//, \n  ;-O-O \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ;<\\__\\\n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/ X X \n||c  >| \n|||_/m\\_\n|/`---' \n        ",
        "        \n        \n  >o<\\\\ \n  //O-O \n  <  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n ///''\\ \n|// - - \n||c  >| \n||*  3| \n/|`---' \n        ",
        "        \n   ___  \n  /___\\_\n  ;-o-o \n  c  >| \n  *  u| \n  `---' \n        ",
        "        \n        \n  ,---, \n  | - - \n  c  >|&\n  |  .='\n  `---' \n        ",
        "        \n        \n  ///\\\\ \n  |<3<3 \n  c  >| \n  * /-\\ \n  `-\\\\' \n        ",
        "        \n        \n //|||\\ \n|// O o \n||<  >| \n|||  m| \n/|`---' \n        ",
        "        \n        \n  ,---, \n  |-#-# \n  c  >| \n  |  u| \n  `--;' \n        ",
        "        \n        \n />o<||\\\n |//‘ ,/\n |c  >| \n ||\\\\-/ \n |`-\\/' \n        ",
        "        \n   ___  \n  /___\\_\n  ; O o \n  c  >| \n  | mmm \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// , , \n||c  >| \n||| :u: \n/|`-''' \n        ",
        "        \n __o__  \n(_____) \n||/ ^ ^ \n||c  >| \n||o  .| \n|/`---' \n        ",
        "        \n        \n  ///\\\\ \n  | ^ - \n  c  >| \n  |  n| \n  `---' \n        ",
        "        \n        \n  >o<\\\\ \n  //‘ , \n  c  >| \n  |  #| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / , , \n  <  >| \n  | /.\\ \n  `-\\\\' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | O o \n  c  >| \n  o  o| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|// - . \n||c  >| \n||*\\\\./ \n/|`-\\/' \n        ",
        "        \n        \n  @@@@@ \n  @ - - \n  c  >| \n  *  u| \n  `-\\\\' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 u u \n  c  >| \n  | ... \n  `-||| \n        ",
        "        \n        \n  ///\\\\ \n  | === \n  c  >| \n  *  -| \n  `---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | X X \n  c  >|&\n  | /.\\'\n  `-\\\\' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  ;\\\\*/ \n  `\\\\// \n    `'  ",
        "        \n __o__  \n(_____) \n||/ T T \n||<  >| \n|||  m| \n|/`---' \n        ",
        "        \n        \n  >o<\\\\ \n  //o-o \n  c  >|&\n  |_/.\\_\n  `---' \n        ",
        "  ,---, \n  |___| \n _|___|_\n  | ; ; \n  c  >| \n  * mmm \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  | ^ ^ \n  c  >| \n  | :*: \n  `-''' \n        ",
        "        \n   ,--, \n  _|__|_\n  | - . \n  c  >| \n  |  u| \n  `---' \n        ",
        "        \n        \n  88888 \n  8 ‘ , \n  <  >| \n  |  3| \n  `---' \n        ",
        "        \n        \n //|||\\ \n|//-O-O \n||c  >| \n||*\\\\o/ \n/|`-\\/' \n        ",
        "        \n        \n  ,nNNN \n  ; ‘ , \n  <  >| \n  |  o| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8 X X \n  c  >| \n  *  #| \n  `---' \n        ",
        "        \n   ___  \n  /___\\_\n  ;-o-o \n  c  >| \n  o  .| \n  `---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/]v] \n  <  >| \n  |\\|o| \n  `---' \n        ",
        "    *   \n    /\\  \n  ,/--\\ \n  | ‘ , \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  ,8888 \n  ; ‘ , \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n  88888 \n  8{}{} \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n />o<||\\\n |//T T/\n |<  >| \n || .o. \n |`-||| \n        ",
        "        \n   ___  \n  /_/_\\ \n  ;-\\__\\\n  c  >| \n  |  u| \n  `--;' \n        ",
        "        \n        \n //|||\\ \n>o< . . \n||c  >| \n|||  u| \n  `---' \n        ",
        "        \n        \n  ,---, \n  | . . \n  c  >| \n  ;\\\\./ \n  `\\\\// \n    `'  ",
        "        \n   ___  \n  /_/_\\ \n  ;{\\__\\\n  c  >| \n  |  m| \n  `-\\\\' \n        ",
        "        \n    ,// \n  ,;//, \n  ; ^ ^ \n  <  >| \n  |  -| \n  `---' \n        ",
        "        \n    ,// \n  ,;//, \n  ; . . \n  c  >| \n  *  u| \n  `---' \n        ",
        "        \n    ,// \n  ,;//, \n  ; - - \n  <  >| \n  | /3\\ \n  `-\\\\' \n        ",
        "        \n    ,// \n  ,;//, \n  ;-O-O \n  c  >| \n  |_/-\\_\n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; - - \n  c  >| \n  | /m\\ \n  `-\\\\' \n        ",
        "        \n        \n  ,//// \n  ; T T \n  c  >| \n  o  .| \n  `-\\\\' \n        ",
        "        \n        \n />o<||\\\n |//===/\n |c  >| \n ||  .| \n |`---' \n        ",
        "        \n        \n  ,---, \n  ;<3<3 \n  <  >| \n  |_/m\\_\n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  | ^ ^ \n  c  >| \n  |  n| \n  `--;' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  | . . \n  c  >| \n  |  u| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; ; ; \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n  ,---, \n  | ^ ^ \n  c  >| \n  | :3: \n  `-''' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  *  m| \n  `---' \n        ",
        "        \n   ___  \n  /_/_\\ \n  ; \\__\\\n  c  >| \n  |  m| \n  `---' \n        ",
        "  ,888, \n ;88888;\n  88888 \n  ; - . \n  <  >| \n  |  o| \n  `---' \n        ",
        "        \n        \n //|||\\ \n>o< - - \n||c  >| \n||;\\\\m/ \n  `\\\\// \n    `'  ",
        "        \n        \n ///''\\ \n|// ‘ , \n||c  >| \n|||  3| \n/|`---' \n        ",
        "        \n        \n  ,@@@@ \n  ; - . \n  c  >| \n  |  *| \n  `---' \n        ",
        "        \n        \n ///''\\ \n|// . . \n||c  >| \n||*  .| \n/|`---' \n        ",
        "        \n   ___  \n  /___\\_\n  ; . . \n  c  >|&\n  *  .='\n  `---' \n        ",
        "        \n        \n  ,8888 \n  ; ^ - \n  c  >| \n  |  o| \n  `--;' \n        ",
        "        \n        \n //''\\\\ \n|// - . \n||c  >| \n|||  3| \n|/`---' \n        ",
        "   o,   \n   /_\\  \n  (___) \n  |-O-O \n  c  >| \n  o  3| \n  `---' \n        ",
        "        \n        \n  /\\\\\\\\ \n  / O o \n  <  >| \n  |  m| \n  `---' \n        ",
        "        \n        \n  ,nNNN \n  ; $ $ \n  c  >| \n  |  -| \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  |{}{} \n  c  >| \n  *  -| \n  `---' \n        ",
        "        \n   ,--, \n  _|__|_\n  |-O-O \n  <  >| \n  |  u| \n  `---' \n        ",
        "        \n __o__  \n(_____) \n||/[][] \n||c  >| \n|||  3| \n|/`---' \n        ",
        "        \n        \n ///''\\ \n|// u u \n||c  >| \n|||  -| \n/|`---' \n        ",
        "        \n        \n />o<||\\\n |//- ./\n |c  >|&\n |*  .='\n |`--;' \n        ",
        "        \n   ,--, \n  _|__|_\n  |-#-# \n  c  >| \n  |  .| \n  `---' \n        ",
        "        \n        \n //''\\\\ \n|//-O-O \n||c  >| \n|||_/o\\_\n|/`---' \n        ",
        "        \n        \n ///'\\\\ \n\\\\\\ ^ - \n//c  >| \n\\\\| /*\\ \n//`-\\\\' \n        ",
        "        \n        \n //''\\\\ \n|// O o \n||c  >| \n||*  n| \n|/`---' \n        ",
        "    @,  \n   __@  \n  /-_|\\ \n  |/uvu \n  c  >| \n  |\\||| \n  `---' \n        ",
        "  =o=   \n  8888  \n  88888 \n  8[][] \n  <  >| \n  |  .| \n  `---' \n        ",
      ],
      current_landing_donny_index: 0,

      account: null,
      est_gas_fee: null,

      number_minted: null,
      minting_cost: null,
    };
  },

  methods: {
    getAccount(value_from_child) {
      this.$data.account = value_from_child;
      console.log("got from child", value_from_child);
    },

    getRandomInt: function (max) {
      return Math.floor(Math.random() * max);
    },

    switch_donny: function () {
      var error = false;
      for (var i = 0; i < this.$data.five_hundred_nfts.length; i++) {
        if (this.$data.five_hundred_nfts[i].length != 71) {
          alert("error");
          console.log("error with:", this.$data.five_hundred_nfts[i].length);
          console.log(this.$data.five_hundred_nfts[i]);
          error = true;
          break;
        }
      }
      console.log("error:", error);
      this.$data.current_landing_donny_index = this.getRandomInt(500);
    },

    handleTopWriteScroll: function () {
      //console.log("in handleTopWriteScroll outside")

      var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

      var scrollPercent = (s / (d - c)) * 100;
      //  this.$data.currently_shown_fivebyfive_animated_index += 1;

      if (parseInt(scrollPercent) >= 0) {
        //  console.log(parseInt(scrollPercent))

        if (parseInt(scrollPercent) < 36) {
          //   console.log("in the else if")
          this.$data.currently_shown_fivebyfive_animated_index =
            (parseInt(scrollPercent) % 36) + 1;
        } else {
          //  console.log("in the else")
          this.$data.currently_shown_fivebyfive_animated_index = 39;
        }
      }
    },

    async estimateGas(data) {
      try {
        console.log("in estimatedGas with", data);

        const API_URL =
          "https://eth-ropsten.alchemyapi.io/v2/DvWsjnC-R_avHhru9sO5aalRj283Cj1_";
        const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
        const web3 = createAlchemyWeb3(API_URL);
        //  const contract = require("@/assets/_5x5guys.json")
        const contractAddress = "0x9B629a867C7CCDed073a298854aFC06D95B9f550";
        //   const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

        // const temp = 25e15; // It was 2 eth when I did it with 0.0025e18 - didn't have enough funds ;( @gieson
        // var temp = await nftContract.methods.get_minting_cost().call()
        var temp = parseInt(0);
        console.log("minting_cost is", temp);

        const est_tx = {
          from: this.$data.account,
          to: contractAddress,
          value: temp,
          data: data,
        };
        var self = this;
        await web3.eth.estimateGas(est_tx, function (error, hash) {
          console.log("Error is: " + error);
          console.log("Estimated value is: " + hash);
          // self.est_gas_price = hash/1000000000
          self.est_gas_fee = hash;
        });

        return this.$data.est_gas_fee;
      } catch (error) {
        alert(error.message);
        //this.manageActionRegister('❌', 'Error: ' + error.message)
      }
    },

    change_header_text: function () {
      if (this.$data.header_text_has_blink) {
        this.$data.header_icon = "|";
        this.$data.header_text_has_blink = false;
      } else {
        this.$data.header_icon = " ";
        this.$data.header_text_has_blink = true;
      }
    },

    async send_transaction_mint(tx, s) {
      try {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [tx],
        });
        // redirecting =========
        const encoded = Base64.encodeURI(s);
        console.log(encoded);
        await console.log(txHash);
        //  window.location.href = "../success.html?string=" + encoded + "&txHash=" + txHash;
        // =====================
        return {
          success: true,
          status:
            "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
            txHash,
        };
      } catch (error) {
        // this.manageActionRegister('❌', 'Error: ' + error.message)
        alert(error.message);
        console.log(error.message);
      }
    },

    unraw(str) {
      return str.replace("\\", String.raw`${"\\"}`);
    },

    async mint(s) {
      // console.log("s is", s);
      // console.log("unrawed is", this.unraw(s));
      // s = String.raw`${this.unraw(
      //   this.$data.five_hundred_nfts[this.$data.current_landing_donny_index]
      // )}`;
      // console.log("raw s is", s);
      // console.log(String.raw`${s}`);

      // s = String.raw`${"        \n        \n  ,//// \n  ;{}{} \n  c  >| \n  |  .| \n  `-\\\\' \n        "}`;

      // console.log("final s");
      // console.log(s);

      if (window.ethereum) {
        console.log("Metamask Installed");
      } else {
        console.log("Please install MetaMask!");
      }

      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts != null && accounts != undefined) {
          this.$data.account = accounts[0];
        }
      } catch (e) {
        alert(
          "Please log into your Metamask wallet by clicking on the wallet icon in the top right."
        );
        console.log(e);
      }

      /*
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        this.$data.account = accounts[0];
      } catch (e) {
        alert("❗️", "Error. Check to make sure you're logged in to MetaMask");
        console.log(e);
      }

      */

      const API_URL =
        "https://eth-ropsten.alchemyapi.io/v2/DvWsjnC-R_avHhru9sO5aalRj283Cj1_";

      //const PUBLIC_KEY = "0x6D8D7C6092F802eb6a3409AE0C2E453dEc120783";

      const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
      const web3 = createAlchemyWeb3(API_URL);

      const contract = require("@/assets/_5x5guys.json");
      const contractAddress = "0x9B629a867C7CCDed073a298854aFC06D95B9f550";
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

      const nonce = await web3.eth.getTransactionCount(
        this.$data.account,
        "latest"
      ); //get latest nonce

      var temp = parseInt(0); // minting cost

      var tx = {};

      const encodedTransaction = nftContract.methods.mint_5x5guy(s).encodeABI();
      const estimatedGas = await this.estimateGas(encodedTransaction);

      // list price validation required
      tx = {
        from: this.$data.account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: estimatedGas.toString(16),
        value: temp.toString(16),
        data: nftContract.methods.mint_5x5guy(s).encodeABI(),
      };

      this.send_transaction_mint(tx, s);
    },
  },

  computed: {
    three_row_pattern: function () {
      var return_array = [];
      for (var i = 0; i < 60; i++) {
        return_array.push(this.$data.five_hundred_nfts[i]);
      }
      return return_array;
    },
  },

  mounted: async function () {
    //this.$gtag.pageview({ page_path: '/home' })

    this.switch_donny();

    setInterval(this.change_header_text, 750);
    document.addEventListener("scroll", this.handleTopWriteScroll);

    const API_URL =
        "https://eth-ropsten.alchemyapi.io/v2/DvWsjnC-R_avHhru9sO5aalRj283Cj1_";

      //const PUBLIC_KEY = "0x6D8D7C6092F802eb6a3409AE0C2E453dEc120783";

      const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
      const web3 = createAlchemyWeb3(API_URL);

      const contract = require("@/assets/_5x5guys.json");
      const contractAddress = "0x9B629a867C7CCDed073a298854aFC06D95B9f550";
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

    this.$data.minting_cost = await nftContract.methods.get_minting_cost().call()
      this.$data.number_minted = await nftContract.methods.get_number_minted().call()


  },
};
</script>

<style>
::-webkit-scrollbar {
  background-color: #ff8080;
}

::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
}
</style>

<style scoped>
::-webkit-scrollbar {
  background-color: #ff8080;
}

::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
}

#faq a {
  text-decoration: underline;
}

.spacer {
  height: 15vh;
}

/* NFT Creator */

.mint_div {
  padding-left: 15vw;
  padding-right: 15vw;
}

/* Community */

#community {
  padding-left: 15vw;
  padding-right: 15vw;
}
.community_grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 10vh 10vh 10vh;
}
.fivehundred_nft {
  font-size: 0.5vw;
}

/* FAQ */

#faq {
  padding-left: 15vw;
  padding-right: 15vw;
  margin-top: -1vh;
  padding-bottom: 10vh;
}

#faq_header {
  font-family: Futura;
  color: black;
  font-weight: bold;
  font-size: 4vw;
}

#faq_question {
  font-family: Futura;
  color: black;
  font-weight: bold;
  font-size: 2vw;
}

#faq_answer {
  font-family: Futura;
  color: black;
  font-weight: normal;
  font-size: 1vw;
}

#faq_asterix {
  font-family: Futura;
  color: black;
  font-weight: normal;
  font-size: 0.75vw;
}

/* About Stats */

#about_stats_asterix {
  color: white;
  font-family: Futura;
  font-weight: normal;
  font-size: 1vw;
  line-height: 0vw;
}

.stats_span {
  display: block;
}

.stats_number {
  color: white;
  font-weight: bold;
  font-family: Futura;
  font-size: 4vw;
  display: inline;
  line-height: 15vh;
}

.stats_description {
  color: white;
  font-weight: bold;
  font-family: Futura;
  font-size: 2vw;
  display: inline;
}

.as_left {
  margin-top: 8vh;
  padding-left: 15vw;
  width: 50vw;
}

.as_right {
  width: 50vw;
  color: black;
  margin-top: 10vh;
  padding-right: 0vw;
  text-align: left;
  line-height: 10vh;
}

/* About */

.fivebyfive_header {
  font-family: Futura;
  font-weight: bold;
  color: black;
  font-size: 4vw;
  line-height: 1vh;
}

.fivebyfive_details {
  color: white;
  font-size: 1.5vw;
  font-family: Futura;
  width: 25vw;
}

#fivebyfive_right {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 18vh 18vh 18vh 18vh 18vh;
}

.fivebyfive_nft {
  font-size: 1vw;
  font-family: Menlo;
}

.about_container {
  display: flex;
}

.fbf_left {
  padding-left: 15vw;
  width: 40vw;
  margin-top: 10vh;
}

.fbf_right {
  width: 50vw;
  color: black;
  padding-right: 5vw;
  text-align: right;
  margin-left: 1vw;
}

/* Landing */

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

#mint_button {
  background-color: #ff8080;
  position: relative;
  top: -27.5vh;
}

a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: white;
  width: auto;
}

body,
html {
  width: 100%;
}

#shuffle {
  margin-top: 15vh;
  padding-bottom: 1.5vh;
}

template {
  margin: 0 !important;
  padding: 0 !important;
}
body {
  background-color: #ff8080;
  width: 120%;
  min-height: auto;
  margin: -5vw !important;
  padding: -5vw !important;
}

#app {
  position: absolute;
  background-color: #ff8080;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  overflow-x: hidden;
}

#landing_donny {
  margin-left: -3vw;
  margin-top: -12vh;
}

#container {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Futura;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
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
  right: 13.5vw;
  top: 45vh;
}
.header_icon {
  font-family: Futura;
  color: white;
  font-size: 4vw;
  display: inline;
  position: absolute;
  right: 12vw;
  top: 41.5vh;
}
h2 {
  font-size: 1.5vw;
  font-weight: medium;
}
.left {
  margin-top: -0vh;
  padding-left: 5vw;
  width: 50vw;
  text-align: center;
}

pre {
  font-size: 6vw;
  font-family: Menlo;
}
.right {
  width: 50vw;
  color: black;
  padding-top: 60vh;
  padding-right: 13vw;
  text-align: right;
}

@media only screen and (min-width: 601px) {
  #hide-desktop {
    display: none;
  }
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .hide-mobile {
    display: none;
  }
  #hide-mobile {
    display: none;
  }

  #container {
    display: block;
  }

  .left {
    width: 70vw;
    padding-top: 0vh;
    padding-right: 0vw;
    text-align: center;
    margin: auto;
  }

  #mint_button {
    top: -5vh;
  }

  .right {
    width: 100vw;
    padding-top: 1vh;
    padding-right: 0vw;
    margin: auto;
    text-align: center;
  }
  #landing_donny {
    margin-top: 5vh;
    margin-right: 5vw;
  }

  .header_text {
    font-family: Futura;
    font-weight: bold;
    color: white;
    font-size: 12vw;
    display: inline;
    position: absolute;
    right: 22vw;
    top: 33vh;
  }
  .header_icon {
    font-family: Futura;
    color: white;
    font-size: 12vw;
    display: inline;
    position: absolute;
    right: 17vw;
    top: 30.5vh;
  }

  .right_h2 {
    font-size: 5vw;
    line-height: 2vh;
  }

  /* fivebyfive header */

  .fivebyfive_header {
    font-family: Futura;
    font-weight: bold;
    color: black;
    font-size: 4vw;
    line-height: 1vh;
  }

  .fivebyfive_details {
    color: white;
    font-size: 1.5vw;
    font-family: Futura;
    width: 25vw;
  }

  #fivebyfive_right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 18vh 18vh 18vh 18vh 18vh;
  }

  .fivebyfive_nft {
    font-size: 1vw;
    font-family: Menlo;
  }

  .about_container {
    display: block;
  }

  .fbf_left {
    padding-left: 30vw;
    width: 100vw;

    margin-top: -40vh;
  }

  .fivebyfive_header {
    font-size: 6vw;
  }

  .fbf_right {
    width: 50vw;
    color: black;
    text-align: right;
    margin: auto;
    padding-right: 25vw;
  }

  .fivebyfive_nft {
    font-size: 2vw;
  }

  .fivebyfive_details {
    font-size: 6vw;
    width: 50vw;
  }

  /* about stats */

  #about_stats_asterix {
    color: white;
    font-family: Futura;
    font-weight: normal;
    font-size: 1vw;
    line-height: 0vw;
  }

  .stats_span {
    display: block;
    line-height: 1vh;
  }

  .stats_number {
    color: white;
    font-weight: bold;
    font-family: Futura;
    font-size: 16vw;
    display: block;
  }

  .stats_description {
    color: white;
    font-weight: bold;
    font-family: Futura;
    font-size: 6vw;
    display: inline;
  }

  .as_left {
    margin-top: 10vh;
    padding-left: 20vw;
    width: 50vw;
  }

  .as_right {
    width: 100vw;
    color: black;
    margin-top: 10vh;
    padding-right: 0vw;
    text-align: center;
    line-height: 10vh;
  }

  .stats_donny {
    margin-top: -15vh;
    text-align: center;
    padding-left: 10vw;
  }

  pre {
    font-size: 8vw;
  }

  #faq {
    margin-top: 8vh;
  }

  #faq_header {
    font-size: 12vw;
    text-align: center;
  }

  /* community */

  #community {
    padding-left: 15vw;
    padding-right: 15vw;
  }
  .community_grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh;
  }
  .fivehundred_nft {
    font-size: 1vw;
  }
}
</style>
