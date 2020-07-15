<template>
  <div class="login">
    <div class="svgContainer">
      <div>
        <Icon :emailFocus="emailFocus" :passwordFocus="passwordFocus"/>
      </div>
    </div>
    <div class="inputGroup" :class="{focusWithText: emailFocus}">
      <label for="loginEmail" id="loginEmailLabel" @click="onEmailLabelClick">Email</label>
      <input
        type="email"
        id="loginEmail"
        maxlength="254"
        @focus="onEmailFocus"
        @blur="onEmailBlur"
        v-model="email"
        ref="email"
        autocomplete="off"
        disableautocomplete
      />
      <p class="helper">email@domain.com</p>
    </div>
    <div class="inputGroup">
      <label for="loginPassword" id="loginPasswordLabel">Password</label>
      <input
        type="password"
        id="loginPassword"
        @focus="onPasswordFocus"
        @blur="onPasswordBlur"
        v-model="password"
      />
      <label id="showPasswordToggle" for="showPasswordCheck">
        Show
        <input id="showPasswordCheck" type="checkbox" />
        <div class="indicator"></div>
      </label>
    </div>
    <div class="inputGroup">
      <button id="loginBtn">Log in</button>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: {
    Icon
  },
  name: "Login",
  data() {
    return {
      emailScrollMax: 0,
      emailFocus: false,
      passwordFocus: false,
      email: "",
      password: ""
    };
  },
  created() {},
  mounted() {
    this.emailScrollMax = this.$refs.email.scrollWidth;
  },
  methods: {
    onEmailFocus() {
      this.emailFocus = true;
    },
    onEmailBlur() {
      this.emailFocus = false;
    },
    onEmailLabelClick() {
      this.emailFocus = true;
    },
    onPasswordFocus() {
      this.passwordFocus = true;
    },
    onPasswordBlur() {
      this.passwordFocus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: "Source Sans Pro", sans-serif;

  .svgContainer {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 1em;
    border-radius: 50%;
    pointer-events: none;

    > div {
      position: relative;
      width: 100%;
      height: 0;
      overflow: hidden;
      border-radius: 50%;
      padding-bottom: 100%;

      .mySVG {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: inherit;
      height: inherit;
      box-sizing: border-box;
      border: solid 2.5px #217093;
      border-radius: 50%;
    }
  }

  .inputGroup {
    margin: 0 0 2em 0;
    padding: 0;
    position: relative;

    &:nth-child(2) {
      .helper {
        position: absolute;
        z-index: 1;
        font-family: inherit;
        top: 0;
        left: 0;
        -webkit-transform: translate(1em, 2.2em) scale(1);
        transform: translate(1em, 2.2em) scale(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        color: #217093;
        font-size: 1.55em;
        font-weight: 400;
        opacity: 0.65;
        pointer-events: none;
        -webkit-transition: opacity 0.2s linear, -webkit-transform 0.2s ease-out;
        transition: opacity 0.2s linear, -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out, opacity 0.2s linear;
        transition: transform 0.2s ease-out, opacity 0.2s linear,
          -webkit-transform 0.2s ease-out;
      }
    }

    &.focusWithText {
      &:nth-child(2) {
        .helper {
          -webkit-transform: translate(1em, 1.55em) scale(0.6);
          transform: translate(1em, 1.55em) scale(0.6);
          opacity: 1;
        }
      }
    }

    &:nth-child(3) {
      input[type="password"] {
        padding: 0.4em 1em 0.5em;
      }

      input[type="text"] {
        padding: 0.025em 1em 0;
      }

      #showPasswordToggle {
        display: block;
        padding: 0 0 0 1.45em;
        position: absolute;
        top: 0.25em;
        right: 0;
        font-size: 1em;
        height: 1em;
        line-height: 1em;

        input {
          position: absolute;
          z-index: -1;
          opacity: 0;

          &:checked {
            ~ .indicator:after {
              visibility: visible;
            }
          }

          &:focus,
          &:hover {
            ~ .indicator {
              border-color: #4eb8dd;
            }
          }

          &:disabled {
            ~ .indicator {
              opacity: 0.5;

              &:after {
                visibility: hidden;
              }
            }
          }
        }

        .indicator {
          position: absolute;
          top: 0;
          left: 0;
          height: 0.85em;
          width: 0.85em;
          background-color: #f3fafd;
          border: solid 2px #217093;
          border-radius: 3px;

          &:after {
            content: "";
            position: absolute;
            left: 0.25em;
            top: 0.025em;
            width: 0.2em;
            height: 0.5em;
            border: solid #217093;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            visibility: hidden;
          }
        }
      }
    }

    &:nth-child(4) {
      margin-bottom: 0;
    }

    label {
      margin: 0 0 12px;
      display: block;
      font-size: 1.25em;
      color: #217093;
      font-weight: 700;
      font-family: inherit;
    }

    input[type="email"],
    input[type="text"],
    input[type="password"] {
      display: block;
      margin: 0;
      padding: 0 1em 0;
      padding: 0.875em 1em 0;
      background-color: #f3fafd;
      border: solid 2px #217093;
      border-radius: 4px;
      -webkit-appearance: none;
      box-sizing: border-box;
      width: 100%;
      height: 65px;
      font-size: 1.55em;
      color: #353538;
      font-weight: 600;
      font-family: inherit;
      -webkit-transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
      transition: box-shadow 0.2s linear, border-color 0.25s ease-out;

      &:focus {
        outline: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        border: solid 2px #4eb8dd;
      }
    }

    button {
      display: block;
      margin: 0;
      padding: 0.65em 1em 1em;
      background-color: #4eb8dd;
      border: none;
      border-radius: 4px;
      box-sizing: border-box;
      box-shadow: none;
      width: 100%;
      height: 65px;
      font-size: 1.55em;
      color: #fff;
      font-weight: 600;
      font-family: inherit;
      -webkit-transition: background-color 0.2s ease-out;
      transition: background-color 0.2s ease-out;

      &:hover,
      &:active {
        background-color: #217093;
      }
    }
  }
}
</style>
