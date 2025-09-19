//* Geology Questions

const geologyQuestions = [
  {
    question: "What is the study of earthquakes called?",
    answers: [
      { text: "Volcanology", correct: false },
      { text: "Petrology", correct: false },
      { text: "Seismology", correct: true },
      { text: "Mineralogy", correct: false },
    ],
  },
  {
    question: "Which type of rock is formed from cooled magma?",
    answers: [
      { text: "Igneous", correct: true },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: false },
      { text: "Crystalline", correct: false },
    ],
  },
  {
    question: "What is the hardest mineral on the Mohs scale?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Diamond", correct: true },
      { text: "Topaz", correct: false },
      { text: "Corundum", correct: false },
    ],
  },
  {
    question: "Which layer of Earth is liquid?",
    answers: [
      { text: "Crust", correct: false },
      { text: "Mantle", correct: false },
      { text: "Inner core", correct: false },
      { text: "Outer core", correct: true },
    ],
  },
  {
    question: "What is the most abundant mineral in Earth's crust?",
    answers: [
      { text: "Feldspar", correct: true },
      { text: "Quartz", correct: false },
      { text: "Mica", correct: false },
      { text: "Calcite", correct: false },
    ],
  },
  {
    question: "What type of boundary occurs when tectonic plates move apart?",
    answers: [
      { text: "Convergent", correct: false },
      { text: "Divergent", correct: true },
      { text: "Transform", correct: false },
      { text: "Subduction", correct: false },
    ],
  },
  {
    question: "Which scale is used to measure earthquake magnitude?",
    answers: [
      { text: "Mercalli scale", correct: false },
      { text: "Beaufort scale", correct: false },
      { text: "Richter scale", correct: true },
      { text: "Fujita scale", correct: false },
    ],
  },
  {
    question: "What is the name for molten rock beneath Earth's surface?",
    answers: [
      { text: "Tephra", correct: false },
      { text: "Obsidian", correct: false },
      { text: "Basalt", correct: false },
      { text: "Magma", correct: true },
    ],
  },
  {
    question: "Which type of volcano has the most explosive eruptions?",
    answers: [
      { text: "Stratovolcano", correct: true },
      { text: "Shield volcano", correct: false },
      { text: "Cinder cone", correct: false },
      { text: "Fissure volcano", correct: false },
    ],
  },
  {
    question: "What is the name of the supercontinent that existed about 200 million years ago?",
    answers: [
      { text: "Gondwana", correct: false },
      { text: "Pangaea", correct: true },
      { text: "Laurasia", correct: false },
      { text: "Rodinia", correct: false },
    ],
  },
  {
    question: "What is the process called that compacts and cements sediments to form sedimentary rock?",
    answers: [
      { text: "Lithification", correct: true },
      { text: "Metamorphism", correct: false },
      { text: "Erosion", correct: false },
      { text: "Crystallization", correct: false }
    ]
  },

  {
    question: "What is the process by which rocks are broken down by weather?",
    answers: [
      { text: "Erosion", correct: false },
      { text: "Deposition", correct: false },
      { text: "Sedimentation", correct: false },
      { text: "Weathering", correct: true },
    ],
  },
  {
    question: "Which era is known as the 'Age of Reptiles'?",
    answers: [
      { text: "Mesozoic", correct: true },
      { text: "Paleozoic", correct: false },
      { text: "Cenozoic", correct: false },
      { text: "Precambrian", correct: false },
    ],
  },
  {
    question: "What type of rock is marble?",
    answers: [
      { text: "Igneous", correct: false },
      { text: "Metamorphic", correct: true },
      { text: "Sedimentary", correct: false },
      { text: "Volcanic", correct: false },
    ],
  },
  {
    question: "Which gas is most commonly released during volcanic eruptions?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Sulfur dioxide", correct: false },
      { text: "Water vapor", correct: true },
      { text: "Methane", correct: false },
    ],
  },
  {
    question: "What is the deepest part of Earth called?",
    answers: [
      { text: "Mantle", correct: false },
      { text: "Outer core", correct: false },
      { text: "Asthenosphere", correct: false },
      { text: "Inner core", correct: true },
    ],
  },
  {
    question: "Which type of metamorphism occurs due to high pressure and temperature over large areas?",
    answers: [
      { text: "Regional metamorphism", correct: true },
      { text: "Contact metamorphism", correct: false },
      { text: "Hydrothermal metamorphism", correct: false },
      { text: "Dynamic metamorphism", correct: false },
    ],
  },
  {
    question: "What is the name for the boundary between two tectonic plates?",
    answers: [
      { text: "Fault line", correct: false },
      { text: "Plate boundary", correct: true },
      { text: "Rift valley", correct: false },
      { text: "Fracture zone", correct: false },
    ],
  },
  {
    question: "Which mineral group makes up most of Earth's crust?",
    answers: [
      { text: "Carbonates", correct: false },
      { text: "Oxides", correct: false },
      { text: "Silicates", correct: true },
      { text: "Sulfides", correct: false },
    ],
  },
  {
    question: "What is the name for the semi-liquid layer beneath the lithosphere?",
    answers: [
      { text: "Mesosphere", correct: false },
      { text: "Outer core", correct: false },
      { text: "Lower mantle", correct: false },
      { text: "Asthenosphere", correct: true },
    ],
  },
  {
    question: "Which type of coal has the highest carbon content?",
    answers: [
      { text: "Anthracite", correct: true },
      { text: "Bituminous", correct: false },
      { text: "Lignite", correct: false },
      { text: "Peat", correct: false },
    ],
  },
  {
    question: "What causes most tsunamis?",
    answers: [
      { text: "Volcanic eruptions", correct: false },
      { text: "Underwater earthquakes", correct: true },
      { text: "Landslides", correct: false },
      { text: "Meteorite impacts", correct: false },
    ],
  },
  {
    question: "Which rock type is formed from compressed organic matter?",
    answers: [
      { text: "Granite", correct: false },
      { text: "Sandstone", correct: false },
      { text: "Coal", correct: true },
      { text: "Shale", correct: false },
    ],
  },
  {
    question: "What is the name for the point on Earth's surface directly above an earthquake's focus?",
    answers: [
      { text: "Hypocenter", correct: false },
      { text: "Fault plane", correct: false },
      { text: "Seismic zone", correct: false },
      { text: "Epicenter", correct: true },
    ],
  },
  {
    question: "Which mineral is commonly known as 'fool's gold'?",
    answers: [
      { text: "Pyrite", correct: true },
      { text: "Chalcopyrite", correct: false },
      { text: "Galena", correct: false },
      { text: "Marcasite", correct: false },
    ],
  },
  {
    question: "What type of sedimentary rock is formed from evaporating seawater?",
    answers: [
      { text: "Limestone", correct: false },
      { text: "Evaporite", correct: true },
      { text: "Conglomerate", correct: false },
      { text: "Breccia", correct: false },
    ],
  },
  {
    question: "Which geological period is known for the mass extinction that killed the dinosaurs?",
    answers: [
      { text: "Jurassic", correct: false },
      { text: "Triassic", correct: false },
      { text: "Cretaceous", correct: true },
      { text: "Permian", correct: false },
    ],
  },
  {
    question: "What is the name for the zone where most earthquakes and volcanoes occur?",
    answers: [
      { text: "Mid-Atlantic Ridge", correct: false },
      { text: "San Andreas Fault", correct: false },
      { text: "Mariana Trench", correct: false },
      { text: "Ring of Fire", correct: true },
    ],
  },
  {
    question: "Which type of igneous rock cools slowly underground?",
    answers: [
      { text: "Intrusive", correct: true },
      { text: "Extrusive", correct: false },
      { text: "Volcanic", correct: false },
      { text: "Plutonic", correct: false },
    ],
  },
  {
    question: "What is the primary cause of continental drift?",
    answers: [
      { text: "Earth's rotation", correct: false },
      { text: "Convection currents in the mantle", correct: true },
      { text: "Gravitational forces", correct: false },
      { text: "Magnetic field changes", correct: false },
    ],
  },
  {
    question: "What is the hardest naturally occurring substance on Earth?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Corundum", correct: false },
      { text: "Diamond", correct: true },
      { text: "Topaz", correct: false },
    ],
  },
  {
    question: "Which type of rock forms from cooled lava?",
    answers: [
      { text: "Extrusive igneous", correct: true },
      { text: "Intrusive igneous", correct: false },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: false },
    ],
  },
  {
    question: "What is the most common type of volcano?",
    answers: [
      { text: "Shield volcano", correct: false },
      { text: "Stratovolcano", correct: true },
      { text: "Cinder cone", correct: false },
      { text: "Caldera", correct: false },
    ],
  },
  {
    question: "Which mineral is used to make glass?",
    answers: [
      { text: "Feldspar", correct: false },
      { text: "Mica", correct: false },
      { text: "Calcite", correct: false },
      { text: "Quartz", correct: true },
    ],
  },
  {
    question: "What is the name for the breaking and wearing away of rocks?",
    answers: [
      { text: "Erosion", correct: true },
      { text: "Weathering", correct: false },
      { text: "Deposition", correct: false },
      { text: "Sedimentation", correct: false },
    ],
  },
  {
    question: "Which scale measures the hardness of minerals?",
    answers: [
      { text: "Richter scale", correct: false },
      { text: "Mohs scale", correct: true },
      { text: "Mercalli scale", correct: false },
      { text: "Beaufort scale", correct: false },
    ],
  },
  {
    question: "What is molten rock called when it's underground?",
    answers: [
      { text: "Lava", correct: false },
      { text: "Magma", correct: true },
      { text: "Obsidian", correct: false },
      { text: "Basalt", correct: false },
    ],
  },
  {
    question: "Which type of plate boundary creates mountains?",
    answers: [
      { text: "Divergent", correct: false },
      { text: "Transform", correct: false },
      { text: "Convergent", correct: true },
      { text: "Collision", correct: false },
    ],
  },
  {
    question: "What is the study of fossils called?",
    answers: [
      { text: "Paleontology", correct: true },
      { text: "Archaeology", correct: false },
      { text: "Anthropology", correct: false },
      { text: "Geology", correct: false },
    ],
  },
  {
    question: "Which rock type is limestone?",
    answers: [
      { text: "Igneous", correct: false },
      { text: "Sedimentary", correct: true },
      { text: "Metamorphic", correct: false },
      { text: "Volcanic", correct: false },
    ],
  },
  {
    question: "What causes most landslides?",
    answers: [
      { text: "Earthquakes", correct: false },
      { text: "Volcanic activity", correct: false },
      { text: "Heavy rainfall", correct: true },
      { text: "Human activity", correct: false },
    ],
  },
  {
    question: "Which era came after the Paleozoic?",
    answers: [
      { text: "Precambrian", correct: false },
      { text: "Cenozoic", correct: false },
      { text: "Quaternary", correct: false },
      { text: "Mesozoic", correct: true },
    ],
  },
  {
    question: "What is the most abundant gas in volcanic emissions?",
    answers: [
      { text: "Water vapor", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Sulfur dioxide", correct: false },
      { text: "Hydrogen sulfide", correct: false },
    ],
  },
  {
    question: "Which mineral is the primary component of granite?",
    answers: [
      { text: "Quartz", correct: false },
      { text: "Feldspar", correct: true },
      { text: "Mica", correct: false },
      { text: "Hornblende", correct: false },
    ],
  },
  {
    question: "What type of rock is slate?",
    answers: [
      { text: "Igneous", correct: false },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: true },
      { text: "Composite", correct: false },
    ],
  },
  {
    question: "Which process forms sedimentary rocks?",
    answers: [
      { text: "Cooling", correct: false },
      { text: "Melting", correct: false },
      { text: "Metamorphism", correct: false },
      { text: "Compaction and cementation", correct: true },
    ],
  },
  {
    question: "What is the name for rocks that form deep underground?",
    answers: [
      { text: "Plutonic", correct: true },
      { text: "Volcanic", correct: false },
      { text: "Sedimentary", correct: false },
      { text: "Metamorphic", correct: false },
    ],
  },
  {
    question: "Which type of weathering involves chemical changes?",
    answers: [
      { text: "Physical weathering", correct: false },
      { text: "Chemical weathering", correct: true },
      { text: "Biological weathering", correct: false },
      { text: "Mechanical weathering", correct: false },
    ],
  },
  {
    question: "What is the name for the center of an earthquake?",
    answers: [
      { text: "Epicenter", correct: false },
      { text: "Fault", correct: false },
      { text: "Focus (hypocenter)", correct: true },
      { text: "Seismic zone", correct: false },
    ],
  },
  {
    question: "Which mineral is commonly found in metamorphic rocks?",
    answers: [
      { text: "Halite", correct: false },
      { text: "Gypsum", correct: false },
      { text: "Calcite", correct: false },
      { text: "Garnet", correct: true },
    ],
  },
  {
  question: "What type of rock forms when molten magma cools and solidifies?",
  answers: [
    { text: "Igneous rock", correct: true },
    { text: "Sedimentary rock", correct: false },
    { text: "Metamorphic rock", correct: false },
    { text: "Clastic rock", correct: false }
  ]
},
{
  question: "Which mineral is the main component of limestone?",
  answers: [
    { text: "Calcite", correct: true },
    { text: "Quartz", correct: false },
    { text: "Feldspar", correct: false },
    { text: "Mica", correct: false }
  ]
},
{
  question: "What is the scientific study of fossils called?",
  answers: [
    { text: "Paleontology", correct: true },
    { text: "Petrology", correct: false },
    { text: "Mineralogy", correct: false },
    { text: "Seismology", correct: false }
  ]
},
{
  question: "Which scale measures earthquake intensity based on observed effects and damage?",
  answers: [
    { text: "Mercalli scale", correct: true },
    { text: "Richter scale", correct: false },
    { text: "Moment magnitude (Mw)", correct: false },
    { text: "Beaufort scale", correct: false }
  ]
},
{
  question: "What is the outermost solid layer of the Earth called?",
  answers: [
    { text: "Crust", correct: true },
    { text: "Mantle", correct: false },
    { text: "Outer core", correct: false },
    { text: "Inner core", correct: false }
  ]
},
{
  question: "What process moves weathered rock and soil from one place to another by wind, water, or ice?",
  answers: [
    { text: "Erosion", correct: true },
    { text: "Deposition", correct: false },
    { text: "Weathering", correct: false },
    { text: "Lithification", correct: false }
  ]
},
{
  question: "Which type of rock is typically formed by compaction and cementation of sediments?",
  answers: [
    { text: "Sedimentary rock", correct: true },
    { text: "Igneous rock", correct: false },
    { text: "Metamorphic rock", correct: false },
    { text: "Volcanic rock", correct: false }
  ]
},
{
  question: "Which plate boundary is primarily responsible for forming mid-ocean ridges?",
  answers: [
    { text: "Divergent boundary", correct: true },
    { text: "Convergent boundary", correct: false },
    { text: "Transform boundary", correct: false },
    { text: "Passive margin", correct: false }
  ]
},
{
  question: "What was the name of the supercontinent that existed about 200 million years ago?",
  answers: [
    { text: "Pangaea", correct: true },
    { text: "Laurasia", correct: false },
    { text: "Gondwana", correct: false },
    { text: "Eurasia", correct: false }
  ]
},
{
  question: "What is the primary driving force behind plate tectonics in Earth's mantle?",
  answers: [
    { text: "Mantle convection", correct: true },
    { text: "Solar radiation", correct: false },
    { text: "Tidal forces", correct: false },
    { text: "Magnetic reversal", correct: false }
  ]
}
];