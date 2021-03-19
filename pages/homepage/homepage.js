Page({
  data: {
    burger:[{ img: '/assets/pictures/krabby_patty.png',
    title: 'Krabby Patty',
    calories: '124KCal',
    ingredients: 'patty pickles kelp leaves tomatoes sea cheese ketchup mustard and onions'
  },
{ img: '/assets/pictures/Double_Krabby_patty.png',
    title: 'Double Krabby Patty',
    calories: '230KCal',
    ingredients: 'two patties pickles kelp leaves tomatoes sea cheese ketchup mustard and onions'
  },
{ img: '/assets/pictures/tripple_krabby_patty.png',
    title: 'Tripple Krabby Patty',
    calories: '368KCal',
    ingredients: 'three patties pickles kelp leaves tomatoes sea cheese ketchup mustard and onions'
  }],
  conditionalView: "burgers",
  burgerView: true,
  mealView: false,
  sideView: false
   },
  onLoad() {},
  onPageChangeView(selectedView) {
    switch (selectedView) {
      case "burgers":
          this.setData({burgerView: true, mealView: false, sideView: false});
        break;
      case "meals":
        this.setData({burgerView: false, mealView: true, sideView: false});
        break;
      case "sides":
        this.setData({burgerView: false, mealView: false, sideView: true});
        break;
      default:
        this.setData({burgerView: true, mealView: false, sideView: false});
        break;
    }
  }
});
