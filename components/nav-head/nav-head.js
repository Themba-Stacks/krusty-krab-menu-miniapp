Component({
  mixins: [],
  data: {},
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
    }
  },
});
