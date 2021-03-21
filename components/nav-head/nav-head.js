Component({
  mixins: [],
  data: {
    burgerHighLight: "highLight",
    mealHighLight: "none",
    sideHighLight: "none"
    },
  props: {
    onPageChangeView: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    changeView(event) {
      let info = event.target.id;
      this.props.onPageChangeView(info);
    },
    isHighLight(event){
      let select = event.target.id
      switch (select) {
        case "burgers":
          this.setData({burgerHighLight: "highLight", mealHighLight: "none", sideHighLight: "none"})
          break;
        case "meals":
          this.setData({burgerHighLight: "none", mealHighLight: "highLight", sideHighLight: "none"})
          break;
        case "sides":
          this.setData({burgerHighLight: "none", mealHighLight: "none", sideHighLight: "highLight"})
          break;
      
        default:
          break;
      }
    }
  },
});
