const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result(value) {
      if (value > 0) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
        }, 5000);
      }
    },
  },

  computed: {
    guessNumber() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much!";
      } else {
        return this.result;
      }
    },
  },
  methods: {
    add5() {
      this.result += 5;
    },
    add1() {
      this.result += 1;
    },
  },
});

app.mount("#assignment");
