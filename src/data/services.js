const services = [
  {
    id: 1,
    partNumber: "rot1234",
    name: "Rotors Turned",
    price: "$15.00",
    warranty: "30 day",
    image: require('../images/brakeRotorResurface.jpg'),
    imageAlt: "rotor picture",
    details: "Rick's Auto Parts can resurface your vehicle's drums and rotors if they measure within specs and aren't showing signs of extreme wear. Surface finish is crucial to proper vehicle braking and pad life and should always be part of a complete brake job."
  },
    {
    id: 2,
    partNumber: "alt7172",
    name: "Alternator Testing",
    price: "Free",
    warranty: "none",
    image: require('../images/alternatorTesting.jpg'),
    imageAlt: "alternator testing picture",
    details: "To maintain the battery and keep up with the electrical system demands of your vehicle, the alternator has to put out between 13.5 and 14.8 volts. If you are having charging system issues and suspect the alternator, Rick's Auto Parts can test it for you."
  },
  {
    id: 3,
    partNumber: "recycle-7",
    name: "Oil Recycling",
    price: "Free",
    warranty: "none",
    image: require('../images/oilRecycling.jpg'),
    imageAlt: "oil recycling logo",
    details: "Up to 5 gallons per day."
  },
];

export default services;