const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      variant: null,
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },

  mounted() {
    if (this.variants[0]) {
      this.variant = this.variants[0];
      this.image = this.variant.image;
    }
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart = Math.max(this.cart - 1, 0);
    },
    updateVariant(variant, preview = false) {
      if (!preview && variant) {
        this.variant = variant;
        this.image = this.variant.image;
      } else if (variant) {
        this.image = variant.image;
      }
    },
    restoreVariant() {
      if (this.variant) {
        this.image = this.variant.image;
      }
    },
  },
});
