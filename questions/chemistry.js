//* Chemistry Questions

const chemistryQuestions = [
  {
    question: "What is the chemical symbol for sodium?",
    answers: [
      { text: "So", correct: false },
      { text: "S", correct: false },
      { text: "Na", correct: true },
      { text: "Sd", correct: false },
    ],
  },
  {
    question: "What is the pH of pure water at 25°C?",
    answers: [
      { text: "7", correct: true },
      { text: "0", correct: false },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Which gas makes up the largest percentage of Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    question: "What is the atomic number of carbon?",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "6", correct: true },
    ],
  },
  {
    question: "Which type of bond involves the sharing of electrons?",
    answers: [
      { text: "Covalent bond", correct: true },
      { text: "Ionic bond", correct: false },
      { text: "Metallic bond", correct: false },
      { text: "Hydrogen bond", correct: false },
    ],
  },
  {
    question: "What is the most abundant element in the universe?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Carbon", correct: false },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "Which acid is found in vinegar?",
    answers: [
      { text: "Hydrochloric acid", correct: false },
      { text: "Sulfuric acid", correct: false },
      { text: "Acetic acid", correct: true },
      { text: "Citric acid", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for methane?",
    answers: [
      { text: "CH₂", correct: false },
      { text: "C₂H₄", correct: false },
      { text: "C₂H₆", correct: false },
      { text: "CH₄", correct: true },
    ],
  },
  {
    question: "Which element has the highest electronegativity?",
    answers: [
      { text: "Fluorine", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "What is the process of a solid changing directly to a gas called?",
    answers: [
      { text: "Melting", correct: false },
      { text: "Sublimation", correct: true },
      { text: "Evaporation", correct: false },
      { text: "Condensation", correct: false },
    ],
  },
  {
    question: "Which catalyst is commonly used in the Haber process?",
    answers: [
      { text: "Platinum", correct: false },
      { text: "Palladium", correct: false },
      { text: "Iron", correct: true },
      { text: "Nickel", correct: false },
    ],
  },
  {
    question: "What is the molecular formula for glucose?",
    answers: [
      { text: "C₆H₁₂O", correct: false },
      { text: "C₅H₁₀O₅", correct: false },
      { text: "C₁₂H₂₂O₁₁", correct: false },
      { text: "C₆H₁₂O₆", correct: true },
    ],
  },
  {
    question: "Which law states that equal volumes of gases contain equal numbers of molecules?",
    answers: [
      { text: "Avogadro's law", correct: true },
      { text: "Boyle's law", correct: false },
      { text: "Charles's law", correct: false },
      { text: "Gay-Lussac's law", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for potassium?",
    answers: [
      { text: "Po", correct: false },
      { text: "K", correct: true },
      { text: "Pt", correct: false },
      { text: "P", correct: false },
    ],
  },
  {
    question: "Which type of reaction absorbs heat from the surroundings?",
    answers: [
      { text: "Exothermic", correct: false },
      { text: "Isothermic", correct: false },
      { text: "Endothermic", correct: true },
      { text: "Adiabatic", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Graphite", correct: false },
      { text: "Steel", correct: false },
      { text: "Diamond", correct: true },
    ],
  },
  {
    question: "Which noble gas is most commonly found in the atmosphere?",
    answers: [
      { text: "Argon", correct: true },
      { text: "Helium", correct: false },
      { text: "Neon", correct: false },
      { text: "Krypton", correct: false },
    ],
  },
  {
    question: "What is the chemical name for table salt?",
    answers: [
      { text: "Sodium bicarbonate", correct: false },
      { text: "Sodium chloride", correct: true },
      { text: "Calcium chloride", correct: false },
      { text: "Potassium chloride", correct: false },
    ],
  },
  {
    question: "Which element is liquid at room temperature besides mercury?",
    answers: [
      { text: "Gallium", correct: false },
      { text: "Cesium", correct: false },
      { text: "Bromine", correct: true },
      { text: "Francium", correct: false },
    ],
  },
  {
    question: "What is the oxidation number of oxygen in most compounds?",
    answers: [
      { text: "+2", correct: false },
      { text: "+1", correct: false },
      { text: "-1", correct: false },
      { text: "-2", correct: true },
    ],
  },
  {
    question: "Which acid is produced in the stomach?",
    answers: [
      { text: "Hydrochloric acid", correct: true },
      { text: "Sulfuric acid", correct: false },
      { text: "Nitric acid", correct: false },
      { text: "Phosphoric acid", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for ammonia?",
    answers: [
      { text: "NH₂", correct: false },
      { text: "NH₃", correct: true },
      { text: "NH₄", correct: false },
      { text: "N₂H₄", correct: false },
    ],
  },
  {
    question: "Which type of isomerism occurs when compounds have the same molecular formula but different connectivity?",
    answers: [
      { text: "Geometric isomerism", correct: false },
      { text: "Optical isomerism", correct: false },
      { text: "Structural isomerism", correct: true },
      { text: "Conformational isomerism", correct: false },
    ],
  },
  {
    question: "What is the name of the process where a liquid changes to vapor below its boiling point?",
    answers: [
      { text: "Sublimation", correct: false },
      { text: "Condensation", correct: false },
      { text: "Boiling", correct: false },
      { text: "Evaporation", correct: true },
    ],
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Silver", correct: false },
      { text: "Aluminum", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    question: "What is the principal quantum number that describes the size of an orbital?",
    answers: [
      { text: "l", correct: false },
      { text: "n", correct: true },
      { text: "m", correct: false },
      { text: "s", correct: false },
    ],
  },
  {
    question: "Which compound is known as laughing gas?",
    answers: [
      { text: "Carbon monoxide", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrous oxide", correct: true },
      { text: "Nitrogen dioxide", correct: false },
    ],
  },
  {
    question: "What is the maximum number of electrons in the d subshell?",
    answers: [
      { text: "2", correct: false },
      { text: "6", correct: false },
      { text: "14", correct: false },
      { text: "10", correct: true },
    ],
  },
  {
    question: "Which scientist proposed the modern atomic theory?",
    answers: [
      { text: "John Dalton", correct: true },
      { text: "Ernest Rutherford", correct: false },
      { text: "Niels Bohr", correct: false },
      { text: "J.J. Thomson", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for hydrogen peroxide?",
    answers: [
      { text: "HO", correct: false },
      { text: "H₂O", correct: false },
      { text: "H₃O", correct: false },
      { text: "H₂O₂", correct: true },
    ],
  },
   {
    question: "What is the most electronegative element?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Fluorine", correct: true },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Which gas is produced when an acid reacts with a metal?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for rust?",
    answers: [
      { text: "FeO", correct: false },
      { text: "Fe₂O₃", correct: true },
      { text: "Fe₃O₄", correct: false },
      { text: "FeO₂", correct: false },
    ],
  },
  {
    question: "Which type of solution has a pH less than 7?",
    answers: [
      { text: "Basic", correct: false },
      { text: "Neutral", correct: false },
      { text: "Alkaline", correct: false },
      { text: "Acidic", correct: true },
    ],
  },
  {
    question: "What is the molar mass of water (H₂O)?",
    answers: [
      { text: "18 g/mol", correct: true },
      { text: "16 g/mol", correct: false },
      { text: "20 g/mol", correct: false },
      { text: "22 g/mol", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 26?",
    answers: [
      { text: "Chromium", correct: false },
      { text: "Iron", correct: true },
      { text: "Nickel", correct: false },
      { text: "Cobalt", correct: false },
    ],
  },
  {
    question: "What is the name of the reaction where a compound breaks down into simpler substances?",
    answers: [
      { text: "Synthesis", correct: false },
      { text: "Combustion", correct: false },
      { text: "Decomposition", correct: true },
      { text: "Displacement", correct: false },
    ],
  },
  {
    question: "Which subatomic particle determines the chemical properties of an element?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Neutron", correct: false },
      { text: "Nucleus", correct: false },
      { text: "Electron", correct: true },
    ],
  },
  {
    question: "What is the process of a liquid turning into a solid called?",
    answers: [
      { text: "Freezing", correct: true },
      { text: "Melting", correct: false },
      { text: "Condensation", correct: false },
      { text: "Sublimation", correct: false },
    ],
  },
  {
    question: "Which gas law relates pressure and temperature?",
    answers: [
      { text: "Boyle's law", correct: false },
      { text: "Gay-Lussac's law", correct: true },
      { text: "Charles's law", correct: false },
      { text: "Avogadro's law", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for sulfuric acid?",
    answers: [
      { text: "HCl", correct: false },
      { text: "HNO₃", correct: false },
      { text: "H₂SO₄", correct: true },
      { text: "H₃PO₄", correct: false },
    ],
  },
  {
    question: "Which element is used in pencils?",
    answers: [
      { text: "Lead", correct: false },
      { text: "Carbon", correct: true },
      { text: "Silicon", correct: false },
      { text: "Tin", correct: false },
    ],
  },
  {
    question: "What is the unit for measuring the amount of substance?",
    answers: [
      { text: "Gram", correct: false },
      { text: "Liter", correct: false },
      { text: "Mole", correct: true },
      { text: "Joule", correct: false },
    ],
  },
  {
    question: "Which type of bond forms between a metal and a non-metal?",
    answers: [
      { text: "Covalent", correct: false },
      { text: "Metallic", correct: false },
      { text: "Van der Waals", correct: false },
      { text: "Ionic", correct: true },
    ],
  },
  {
    question: "What is the common name for sodium bicarbonate?",
    answers: [
      { text: "Baking soda", correct: true },
      { text: "Table salt", correct: false },
      { text: "Washing soda", correct: false },
      { text: "Epsom salt", correct: false },
    ],
  },
  {
    question: "Which scientist developed the periodic table?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Dmitri Mendeleev", correct: true },
      { text: "Antoine Lavoisier", correct: false },
      { text: "Robert Boyle", correct: false },
    ],
  },
  {
    question: "What is the name for compounds that have the same molecular formula but different arrangements?",
    answers: [
      { text: "Isotopes", correct: false },
      { text: "Allotropes", correct: false },
      { text: "Isomers", correct: true },
      { text: "Polymers", correct: false },
    ],
  },
  {
    question: "Which element is essential for combustion?",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Carbon", correct: false },
      { text: "Oxygen", correct: true },
    ],
  },
  {
    question: "What is the pH of a neutral solution?",
    answers: [
      { text: "7", correct: true },
      { text: "0", correct: false },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Which type of reaction involves the exchange of ions between compounds?",
    answers: [
      { text: "Synthesis", correct: false },
      { text: "Double displacement", correct: true },
      { text: "Single displacement", correct: false },
      { text: "Combustion", correct: false },
    ],
  },
  {
  question: "What is the pH of a neutral aqueous solution at 25°C?",
  answers: [
    { text: "7", correct: true },
    { text: "0", correct: false },
    { text: "14", correct: false },
    { text: "1", correct: false }
  ]
},
{
  question: "Atoms of the same element that have different numbers of neutrons are called what?",
  answers: [
    { text: "Isotopes", correct: true },
    { text: "Ions", correct: false },
    { text: "Allotropes", correct: false },
    { text: "Isomers", correct: false }
  ]
},
{
  question: "What type of chemical bond is formed by sharing electron pairs between atoms?",
  answers: [
    { text: "Covalent bond", correct: true },
    { text: "Ionic bond", correct: false },
    { text: "Metallic bond", correct: false },
    { text: "Hydrogen bond", correct: false }
  ]
},
{
  question: "Approximately how many particles are in one mole of a substance (Avogadro's number)?",
  answers: [
    { text: "6.022 × 10^23", correct: true },
    { text: "3.00 × 10^8", correct: false },
    { text: "1.67 × 10^-27", correct: false },
    { text: "9.81", correct: false }
  ]
},
{
  question: "Which element makes up the largest percentage by mass of Earth's crust?",
  answers: [
    { text: "Oxygen", correct: true },
    { text: "Hydrogen", correct: false },
    { text: "Carbon", correct: false },
    { text: "Nitrogen", correct: false }
  ]
},
{
  question: "What is the unit of concentration defined as moles of solute per liter of solution?",
  answers: [
    { text: "Molarity", correct: true },
    { text: "Molality", correct: false },
    { text: "Normality", correct: false },
    { text: "Mass percent", correct: false }
  ]
},
{
  question: "A catalyst speeds up a chemical reaction by lowering which quantity?",
  answers: [
    { text: "Activation energy", correct: true },
    { text: "Enthalpy change", correct: false },
    { text: "Equilibrium constant", correct: false },
    { text: "Reaction order", correct: false }
  ]
},
{
  question: "What is the term for the phase change when a solid turns directly into a gas?",
  answers: [
    { text: "Sublimation", correct: true },
    { text: "Condensation", correct: false },
    { text: "Deposition", correct: false },
    { text: "Vaporization", correct: false }
  ]
},
{
  question: "Which type of reaction is: A + BC → AC + B ?",
  answers: [
    { text: "Single displacement", correct: true },
    { text: "Synthesis", correct: false },
    { text: "Double displacement", correct: false },
    { text: "Combustion", correct: false }
  ]
},
{
  question: "In most compounds, what is the typical oxidation state of oxygen?",
  answers: [
    { text: "-2", correct: true },
    { text: "+2", correct: false },
    { text: "0", correct: false },
    { text: "-1", correct: false }
  ]
}
];