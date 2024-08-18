class UberPriceCalculator {
    constructor(pricePerKilometer, numberOfKilometers) {
      this.pricePerKilometer = pricePerKilometer;
      this.numberOfKilometers = numberOfKilometers;
    }
  
    calculatePrice() {
      const distanceCost = this.pricePerKilometer * this.numberOfKilometers;
      
      const totalPrice = distanceCost ;
      return totalPrice;
    }
    }
  
  const uberCalculator = new UberPriceCalculator(2.00, 15);
  console.log('Total Price: $${uberCalculator.calculatePrice().toFixed(2)}');