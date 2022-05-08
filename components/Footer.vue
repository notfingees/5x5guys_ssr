<template>
<!-- eslint-disable -->
  <div class="footer">
      <div class="logo">

  
      <h2>5X5GUYS</h2>
      
      
      <div class="About"><p>An entirely generative, on-chain, text-based NFT collection inspired by <a style="text-decoration:underline;" target='_blank' href='https://www.larvalabs.com/cryptopunks'>CryptoPunks</a> and powered by <a style="text-decoration:underline;" target='_blank' href='https://inwriting.io'>In Writing</a></p></div>
      
      <div class="contacts">
          <a href="https://discord.gg/4N3ZTcmbnW" target="_blank"><img alt="Discord icon" class="icon" src="../assets/discord.svg"></a>
          <a target="_blank" href="https://twitter.com/inwritingio"><img alt="Twitter icon" class="icon" src="../assets/twitter.svg"></a>
          <a target="_blank" href="https://www.instagram.com/inwriting.io"><img alt="Instagram icon" class="icon" src="../assets/instagram.svg"></a>
          <a href="mailto:admin@inwriting.io"><img alt="Email icon" class="icon" src="../assets/email.svg"></a>
      </div>

      <h4 class="hide-mobile">© 2021 - 2022 Sunrises LLC</h4>
      </div>

      <div class="marketplace">


      <h4 class="hide-desktop">© 2021 - 2022 Sunrises LLC</h4>
      </div>

      <div class="resources">
    <h3>Resources</h3>
      <NuxtLink to="/#about">About</NuxtLink><br>
      <NuxtLink to="/#faq">FAQ</NuxtLink><br>
      <NuxtLink to="/#faq">Contact</NuxtLink><br>
      <a target="_blank" href="https://etherscan.io/address/0x20111434640CDeD801f3C170FDe4a4934DEFb41a">Etherscan</a><br>
      <a target="_blank" href="https://inwriting.io">In Writing</a><br>
      <a target="_blank" href="https://opensea.io/collection/inwriting">OpenSea</a><br>
      </div>

        <div class="resources">
    <h3>Legal</h3>
      <NuxtLink to="/tos">Terms of Service</NuxtLink><br>
      <NuxtLink to="/privacy">Privacy Policy</NuxtLink><br>

      </div>

      

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
    z-index: 0;
}
@media only screen and (min-width: 601px) {


h4 {
    font-size: 1vw;
    color: black;
    font-family:Futura;
    margin-top: 10vh;
}
.icon {
  width: 1.5vw;
}
.contacts {
  display: flex;
  gap: 1vw;
  justify-content: left;
  width: 100%;
}

.footer {
    background-color: #FF8080;
    width: 100%;
    height: auto;
    position: relative;
    bottom: 0;
    display: flex;
    
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 3vw;
    padding-bottom: 3vw;
    
    gap: 10vw;
}
h2 {
    color: black;
    font-family: Futura;
    font-size: 1.75vw;
}
h3 {
    color: black;
    font-family: Futura;
    font-size: 1.15vw;
}
p {
    color: black;
    font-family: Futura;
    font-size: 1.15vw;
    line-height: 1.5vw;
}
.logo {
    width: 25%;
    text-align: left;
}
.marketplace {
    text-align: left;
    line-height: 2vw;
}
.resources {
    text-align: left;
    line-height: 2vw;
}

a{
    color: black;
    font-family: Futura;
    font-size: 1.15vw;
    line-height: 1.5vw;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.hide-desktop {
    display: none;
}

}

/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {

.hide-mobile {
    display: none;
}
    .icon {
  width: 4vw;
}
.contacts {
  display: flex;
  gap: 2.5vw;
  justify-content: left;
  width: 100%;
  padding-bottom: 3vh;
}

h4 {
    font-size: 2vw;
    color: black;
    font-family:Futura;
    margin-top: 7vh;
}

    .footer {

    background-color: #FF8080;
    width: 100%;
    height: auto;
    position: relative;
    bottom: 0;
    display: flex;
    padding-left: 16vw;
    padding-right: 16vw;
    padding-top: 3vw;
    padding-bottom: 10vw;
    gap: 10vw;
    flex-wrap: wrap;
    column-gap: 15vw;
    row-gap: 0vw;
    
}
h2 {
    color: black;
    font-family:Futura;
    font-weight: bold;
    font-size: 5.25vw;
}
h3 {
    color: black;
    font-family:Futura;
    font-weight: bold;
    font-size: 2.625vw;
}
p {
    color: black;
    font-family:Futura;
    font-size: 2.625vw;
}
.logo {
    padding-top: 3vh;
    width: 80%;
    text-align: left;
}
.marketplace {
    text-align: left;
    width: 25vw;
}
.resources {
    text-align: left;
    width: 25vw;
}

a{
    color: black;
    font-family:Futura;
    font-size: 2.625vw;
    text-decoration: none;
}

}

</style>
