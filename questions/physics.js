//* Physics Questions

const physicsQuestions = [
  {
    question: "After nitrogen and oxygen, what is the third most abundant gas in the Earth's atmosphere?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Helium", correct: false },
      { text: "Argon", correct: true },
      { text: "Neon", correct: false },
    ],
  },
  {
    question: "What term describes the scattering of a high frequency photon after interacting with a charged particle?",
    answers: [
      { text: "Rayleigh scattering", correct: false },
      { text: "Compton scattering", correct: true },
      { text: "Thomson scattering", correct: false },
      { text: "Mie scattering", correct: false },
    ],
  },
  {
    question: "What is the name of the donut-shaped ring of objects, orbiting the sun just beyond the orbit of Neptune?",
    answers: [
      { text: "The Asteroid Belt", correct: false },
      { text: "The Kuiper Belt", correct: true },
      { text: "The Oort Cloud", correct: false },
      { text: "The Scattered Disk", correct: false },
    ],
  },
  {
    question: "In the formula n=c/v, what does 'n' stand for?",
    answers: [
      { text: "Frequency", correct: false },
      { text: "Refractive index", correct: true },
      { text: "Wavelength", correct: false },
      { text: "Optical density", correct: false },
    ],
  },
  {
    question: "What is the heaviest stable element in the periodic table?",
    answers: [
      { text: "Uranium", correct: false },
      { text: "Bismuth", correct: false },
      { text: "Lead", correct: true },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "In order for an object to keep moving in a circle, a force has to act on it that is directed towards the centre of the circle. What is the name of that force?",
    answers: [
      { text: "Centrifugal force", correct: false },
      { text: "Centripetal force", correct: true },
      { text: "Tangential force", correct: false },
      { text: "Normal force", correct: false },
    ],
  },
  {
    question: "When an object falls at a steady speed, what is gravitational potential energy converted into?",
    answers: [
      { text: "Kinetic energy", correct: false },
      { text: "Heat energy", correct: true },
      { text: "Sound energy", correct: false },
      { text: "Elastic potential energy", correct: false },
    ],
  },
  {
    question: "Which of Newton's laws is being described in the following statement: when walking my dog on a lead, the tension that the lead is acting on me as my dog pulls forwards, is the same as the tension that I am acting on the lead as I pull my dog back.",
    answers: [
      { text: "Newton's first law", correct: false },
      { text: "Newton's second law", correct: false },
      { text: "Newton's third law", correct: true },
      { text: "Newton's law of universal gravitation", correct: false },
    ],
  },
  {
    question: "What is Young's modulus a measure of?",
    answers: [
      { text: "Hardness", correct: false },
      { text: "Stiffness (how much strain a material will undergo)", correct: true },
      { text: "Brittleness", correct: false },
      { text: "Toughness", correct: false },
    ],
  },
  {
    question: "What kind of lens might be used in reading glasses?",
    answers: [
      { text: "Convex", correct: true },
      { text: "Concave", correct: false },
      { text: "Cylindrical", correct: false },
      { text: "Bifocal", correct: false },
    ],
  },
  {
    question: "In the formula s=d/t, what does 's' stand for?",
    answers: [
      { text: "Distance", correct: false },
      { text: "Speed", correct: true },
      { text: "Acceleration", correct: false },
      { text: "Time", correct: false },
    ],
  },
  {
    question: "Protons, neutrons and electrons all orbit the ____.",
    answers: [
      { text: "Nucleus", correct: true },
      { text: "Electron shell", correct: false },
      { text: "Atomic center", correct: false },
      { text: "Ion core", correct: false },
    ],
  },
  {
    question: "As an ambulance drives past, you notice the pitch of its siren changing. This is caused by the ___ effect.",
    answers: [
      { text: "Doppler", correct: true },
      { text: "Photoelectric", correct: false },
      { text: "Compton", correct: false },
      { text: "Zeeman", correct: false },
    ],
  },
  {
    question: "What are sounds below 20 Hz known as?",
    answers: [
      { text: "Ultrasound", correct: false },
      { text: "Infrasound", correct: true },
      { text: "Subsonic", correct: false },
      { text: "Low frequency", correct: false },
    ],
  },
  {
    question: "What does a vector quantity have that a scalar quantity lacks?",
    answers: [
      { text: "Magnitude", correct: false },
      { text: "A direction", correct: true },
      { text: "Units", correct: false },
      { text: "Mathematical properties", correct: false },
    ],
  },
  {
    question: "What is the most common unit for measuring pressure?",
    answers: [
      { text: "Pascals", correct: true },
      { text: "Newtons", correct: false },
      { text: "Atmospheres", correct: false },
      { text: "Bars", correct: false },
    ],
  },
  {
    question: "What is the property of an object that can return to its original shape after deformation?",
    answers: [
      { text: "Plasticity", correct: false },
      { text: "Elasticity", correct: true },
      { text: "Malleability", correct: false },
      { text: "Ductility", correct: false },
    ],
  },
  {
    question: "What type of electromagnetic radiation has the lowest frequency?",
    answers: [
      { text: "Microwaves", correct: false },
      { text: "Radio waves", correct: true },
      { text: "Infrared", correct: false },
      { text: "Visible light", correct: false },
    ],
  },
  {
    question: "Lubrication can be used to limit the ____ between two objects.",
    answers: [
      { text: "Contact", correct: false },
      { text: "Friction", correct: true },
      { text: "Pressure", correct: false },
      { text: "Heat transfer", correct: false },
    ],
  },
  {
    question: "Which element has an atomic number of 1?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Helium", correct: false },
      { text: "Lithium", correct: false },
      { text: "Deuterium", correct: false },
    ],
  },
  {
    question: "A convex lens is ___ at the centre than it is at the ends.",
    answers: [
      { text: "Thinner", correct: false },
      { text: "Wider", correct: true },
      { text: "Smoother", correct: false },
      { text: "Clearer", correct: false },
    ],
  },
  {
    question: "Amperes and volts both measures of what?",
    answers: [
      { text: "Electricity", correct: true },
      { text: "Kinetic energy", correct: false },
      { text: "Height", correct: false },
      { text: "Velocity", correct: false },
    ],
  },
  {
    question: "In the equation for Newton’s Second Law of Motion, F=ma, what does a represent?",
    answers: [
      { text: "Absorption", correct: false },
      { text: "Pressure", correct: false },
      { text: "Acceleration", correct: true },
      { text: "Nothing", correct: false },
    ],
  },
  {
    question: "The sun is mainly composed of which two elements?",
    answers: [
      { text: "Hydrogen and Carbon", correct: false },
      { text: "Oxygen and Helium", correct: false },
      { text: "Helium and Argon", correct: false },
      { text: "Hydrogen and Helium", correct: true },
    ],
  },
  {
    question: "What is measured using an Ohmmeter?",
    answers: [
      { text: "Friction", correct: false },
      { text: "Air pressure", correct: false },
      { text: "Radioactivity", correct: false },
      { text: "Electrical resistance", correct: true },
    ],
  },
  {
    question: "What type of energy can be calculated using the formula U=mgh?",
    answers: [
      { text: "Kinetic energy", correct: false },
      { text: "Heat energy", correct: false },
      { text: "Gravitational potential energy", correct: true },
      { text: "Sound energy", correct: false },
    ],
  },
  {
    question: "In 1901, Wilhelm Conrad Röntgen won the first Nobel Prize for physics. What did he discover to earn him this prestigious award?",
    answers: [
      { text: "black-body radiation", correct: false },
      { text: "X-rays", correct: true },
      { text: "The Electron", correct: false },
      { text: "Electromagnetic waves", correct: false },
    ],
  },
  {
    question: "A region in a fluid in which the flow revolves around an axis line is known as a ___.",
    answers: [
      { text: "Vortex", correct: true },
      { text: "Cyclone", correct: false },
      { text: "Drain", correct: false },
      { text: "Helix", correct: false },
    ],
  },
  {
    question: "Which of the following is the most electrically conductive?",
    answers: [
      { text: "Copper", correct: false },
      { text: "Iron", correct: false },
      { text: "Mercury", correct: false },
      { text: "Silver", correct: true },
    ],
  },
  {
    question: "If two wave sources have an identical frequency and waveform, they are ___.",
    answers: [
      { text: "Contingent", correct: false },
      { text: "Cohensive", correct: false },
      { text: "Combative", correct: false },
      { text: "Coherent", correct: true },
    ],
  },
  {
    question: "What is the SI unit of electric current?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Watt", correct: false },
      { text: "Ohm", correct: false },
      { text: "Ampere", correct: true },
    ],
  },
  {
    question: "Which law states that the current through a conductor is proportional to the voltage across it?",
    answers: [
      { text: "Ohm's law", correct: true },
      { text: "Faraday's law", correct: false },
      { text: "Lenz's law", correct: false },
      { text: "Kirchhoff's law", correct: false },
    ],
  },
  {
    question: "What happens to the wavelength of light when it enters a denser medium?",
    answers: [
      { text: "It increases", correct: false },
      { text: "It decreases", correct: true },
      { text: "It remains the same", correct: false },
      { text: "It doubles", correct: false },
    ],
  },
  {
    question: "Which particle has no electric charge?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Electron", correct: false },
      { text: "Neutron", correct: true },
      { text: "Alpha particle", correct: false },
    ],
  },
  {
    question: "What is the speed of light in vacuum?",
    answers: [
      { text: "3 × 10⁸ m/s", correct: true },
      { text: "3 × 10⁶ m/s", correct: false },
      { text: "3 × 10⁷ m/s", correct: false },
      { text: "3 × 10⁹ m/s", correct: false },
    ],
  },
  {
    question: "Which phenomenon explains why the sky appears blue?",
    answers: [
      { text: "Reflection", correct: false },
      { text: "Rayleigh scattering", correct: true },
      { text: "Refraction", correct: false },
      { text: "Absorption", correct: false },
    ],
  },
  {
    question: "What is the formula for kinetic energy?",
    answers: [
      { text: "mgh", correct: false },
      { text: "½mv²", correct: true },
      { text: "F × d", correct: false },
      { text: "P × t", correct: false },
    ],
  },
  {
    question: "Which type of wave requires a medium to travel through?",
    answers: [
      { text: "Light wave", correct: false },
      { text: "Radio wave", correct: false },
      { text: "X-ray", correct: false },
      { text: "Sound wave", correct: true },
    ],
  },
  {
    question: "What is absolute zero in Celsius?",
    answers: [
      { text: "-273.15°C", correct: true },
      { text: "-100°C", correct: false },
      { text: "-200°C", correct: false },
      { text: "-300°C", correct: false },
    ],
  },
  {
    question: "Which law explains the relationship between pressure and volume of a gas?",
    answers: [
      { text: "Charles's law", correct: false },
      { text: "Boyle's law", correct: true },
      { text: "Gay-Lussac's law", correct: false },
      { text: "Avogadro's law", correct: false },
    ],
  },
  {
    question: "What is the unit of power?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Newton", correct: false },
      { text: "Watt", correct: true },
      { text: "Pascal", correct: false },
    ],
  },
  {
    question: "Which color of light has the highest frequency?",
    answers: [
      { text: "Red", correct: false },
      { text: "Green", correct: false },
      { text: "Blue", correct: false },
      { text: "Violet", correct: true },
    ],
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    answers: [
      { text: "9.8 m/s²", correct: true },
      { text: "8.9 m/s²", correct: false },
      { text: "10.2 m/s²", correct: false },
      { text: "9.0 m/s²", correct: false },
    ],
  },
  {
    question: "Which material is the best conductor of electricity?",
    answers: [
      { text: "Aluminum", correct: false },
      { text: "Silver", correct: true },
      { text: "Gold", correct: false },
      { text: "Copper", correct: false },
    ],
  },
  {
    question: "What is the change in momentum called?",
    answers: [
      { text: "Force", correct: false },
      { text: "Acceleration", correct: false },
      { text: "Impulse", correct: true },
      { text: "Velocity", correct: false },
    ],
  },
  {
    question: "Which principle explains how airplanes generate lift?",
    answers: [
      { text: "Archimedes' principle", correct: false },
      { text: "Pascal's principle", correct: false },
      { text: "Newton's third law", correct: false },
      { text: "Bernoulli's principle", correct: true },
    ],
  },
  {
    question: "What is the SI unit of frequency?",
    answers: [
      { text: "Hertz", correct: true },
      { text: "Decibel", correct: false },
      { text: "Watt", correct: false },
      { text: "Joule", correct: false },
    ],
  },
  {
    question: "Which type of lens converges light rays?",
    answers: [
      { text: "Concave", correct: false },
      { text: "Convex", correct: true },
      { text: "Cylindrical", correct: false },
      { text: "Plano", correct: false },
    ],
  },
  {
    question: "What is the relationship between wavelength and frequency?",
    answers: [
      { text: "Directly proportional", correct: false },
      { text: "Exponentially related", correct: false },
      { text: "Inversely proportional", correct: true },
      { text: "No relationship", correct: false },
    ],
  },
  {
    question: "Which effect describes the change in frequency due to relative motion?",
    answers: [
      { text: "Photoelectric effect", correct: false },
      { text: "Compton effect", correct: false },
      { text: "Hall effect", correct: false },
      { text: "Doppler effect", correct: true },
    ],
  },
  {
    question: "What is the force that opposes motion between surfaces?",
    answers: [
      { text: "Tension", correct: false },
      { text: "Normal force", correct: false },
      { text: "Friction", correct: true },
      { text: "Weight", correct: false },
    ],
  },
  {
    question: "Which law states that energy cannot be created or destroyed?",
    answers: [
      { text: "Second law of thermodynamics", correct: false },
      { text: "First law of thermodynamics", correct: true },
      { text: "Newton's first law", correct: false },
      { text: "Law of universal gravitation", correct: false },
    ],
  },
  {
    question: "What is the unit of electric charge?",
    answers: [
      { text: "Ampere", correct: false },
      { text: "Volt", correct: false },
      { text: "Coulomb", correct: true },
      { text: "Farad", correct: false },
    ],
  },
  {
    question: "Which state of matter has particles with the highest kinetic energy?",
    answers: [
      { text: "Solid", correct: false },
      { text: "Liquid", correct: false },
      { text: "Gas", correct: false },
      { text: "Plasma", correct: true },
    ],
  },
  {
    question: "What is the bending of light when it passes through different media called?",
    answers: [
      { text: "Refraction", correct: true },
      { text: "Reflection", correct: false },
      { text: "Diffraction", correct: false },
      { text: "Interference", correct: false },
    ],
  },
  {
    question: "Which particle mediates the electromagnetic force?",
    answers: [
      { text: "Gluon", correct: false },
      { text: "Photon", correct: true },
      { text: "W boson", correct: false },
      { text: "Higgs boson", correct: false },
    ],
  },
  {
    question: "What is the measure of how much matter an object contains?",
    answers: [
      { text: "Weight", correct: false },
      { text: "Volume", correct: false },
      { text: "Mass", correct: true },
      { text: "Density", correct: false },
    ],
  },
  {
    question: "Which law describes the motion of planets around the sun?",
    answers: [
      { text: "Newton's law of gravitation", correct: false },
      { text: "Coulomb's law", correct: false },
      { text: "Hooke's law", correct: false },
      { text: "Kepler's laws", correct: true },
    ],
  },
  {
    question: "What is the SI unit of magnetic field strength?",
    answers: [
      { text: "Tesla", correct: true },
      { text: "Weber", correct: false },
      { text: "Henry", correct: false },
      { text: "Gauss", correct: false },
    ],
  },
  {
    question: "Which phenomenon occurs when two waves meet?",
    answers: [
      { text: "Refraction", correct: false },
      { text: "Reflection", correct: false },
      { text: "Absorption", correct: false },
      { text: "Interference", correct: true },
    ],
  },
];