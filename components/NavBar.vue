<template>
  <!-- eslint-disable -->
  <div class="navbar">
    <div class="navbar-inner">
      <NuxtLink to="/" class="brand">5X5GUYS</NuxtLink>

      <div class="navbar-icons">
        <NuxtLink to="/attributes" class="navbar-link">ATTRIBUTES</NuxtLink>
        <NuxtLink to="/#about" class="navbar-link">ABOUT</NuxtLink>
        <NuxtLink to="/#mint" class="navbar-link">MINT</NuxtLink>
        <img
          alt="Wallet icon"
          src="@/assets/wallet-solid.svg"
          v-on:click="getWallet"
        />
      </div>
    </div>

    <!--<b-navbar-brand class = "navbar-text" href="../home">In Writing</b-navbar-brand>
        <b-navba class = "navbar-text" href="../home"><i class="fas fa-wallet"></i></b-navbar-brand>
        <i class="fas fa-wallet"></i>
        <p> Hello!!!</p>
    </b-navbar>
    -->
  </div>
</template>

<script>
/* eslint-disable */
import $ from "jquery";
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      accounts: [],
      current_address: null,

      action_register_text: null,
      action_register_icon: null,
    };
  },
  methods: {
    async getWallet() {
      const self = this;
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("accounts is", accounts);
        self.accounts = accounts;
        self.current_address = accounts[0];
        console.log("Current wallet address is " + self.current_address);
      } catch (e) {
        this.manageActionRegister(
          "❗️",
          "Error with connecting your wallet. Please try again and check console for more details."
        );
        console.log(e);
      }

      this.$emit("get-wallet", this.$data.current_address);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.actionRegistered {
  display: none;
}

img {
  height: 1vw;
  width: auto;
  top: 1vh;
  padding-top: 0.5vh;
}

@media only screen and (min-width: 601px) {
  a:hover {
    color: white;
  }

  .navbar {
    position: fixed;
    top: 0vw;
    width: 120vw;
    height: 5vh;
    background-color: #ff8080;
    padding-top: 2vh;
    margin-left: 0vw;
  }
  .navbar-inner {
    display: flex;
    gap: 60vw;
  }

  .navbar-icons {
    display: flex;
    gap: 3vw;
  }

  .brand {
    color: black;
    font-family: Futura;
    font-weight: bold;
    font-size: 2vw;
    margin-left: 2vw;
    text-decoration: none;
  }
  .navbar-link {
    color: black;
    font-family: Futura;
    font-weight: bold;
    font-size: 1vw;
    position: relative;
    top: 2vh;
    text-decoration: none;
  }

  img {
    height: 1.75vw;
    width: auto;
    top: 0.75vh;
    position: relative;
  }
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .navbar {
    position: fixed;
    top: 0vw;
    width: 100vw;
    height: 8vh;
    background-color: #ff8080;
    padding-top: 2vh;
    padding-left: 5vw;
  }
  .navbar-inner {
    display: flex;
    gap: 35vw;
  }
  .navbar-icons {
    display: inline-block;
  }
  .brand {
    color: black;
    font-family: Futura;
    font-weight: bold;
    font-size: 3vw;
    margin-left: 2vw;
    width: 15vw;
    margin-top: 0.3vh;
  }
  .navbar-link {
    color: black;
    font-family: Futura;
    font-weight: bold;
    font-size: 2.33vw;
    position: relative;
    top: 0vh;
    padding-left: 3vw;
  }

  img {
    height: 2.33vw;
    width: auto;
    top: 0vh;
    position: relative;
    padding-left: 3vw;
  }

  .titlediv {
    margin: auto;
    width: 100%;
    padding-top: 20vw;
  }
}
</style>
