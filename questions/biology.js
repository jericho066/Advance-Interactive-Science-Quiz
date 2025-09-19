//* Biology Questions

const biologyQuestions = [
  {
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "Nucleus", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Endoplasmic reticulum", correct: false },
    ],
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: [
      { text: "O negative", correct: true },
      { text: "AB positive", correct: false },
      { text: "A positive", correct: false },
      { text: "B negative", correct: false },
    ],
  },
  {
    question: "What is the study of fungi called?",
    answers: [
      { text: "Botany", correct: false },
      { text: "Mycology", correct: true },
      { text: "Zoology", correct: false },
      { text: "Microbiology", correct: false },
    ],
  },
  {
    question: "How many chambers does a human heart have?",
    answers: [
      { text: "Two", correct: false },
      { text: "Three", correct: false },
      { text: "Five", correct: false },
      { text: "Four", correct: true },
    ],
  },
  {
    question: "Which organelle is responsible for protein synthesis?",
    answers: [
      { text: "Ribosome", correct: true },
      { text: "Lysosome", correct: false },
      { text: "Golgi apparatus", correct: false },
      { text: "Vacuole", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "Which process do plants use to make their own food?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Fermentation", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Digestion", correct: false },
    ],
  },
  {
    question: "What is the basic unit of heredity?",
    answers: [
      { text: "Chromosome", correct: false },
      { text: "DNA", correct: false },
      { text: "Protein", correct: false },
      { text: "Gene", correct: true },
    ],
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    answers: [
      { text: "Cerebellum", correct: true },
      { text: "Cerebrum", correct: false },
      { text: "Medulla", correct: false },
      { text: "Hypothalamus", correct: false },
    ],
  },
  {
    question: "What type of blood vessel carries blood away from the heart?",
    answers: [
      { text: "Vein", correct: false },
      { text: "Artery", correct: true },
      { text: "Capillary", correct: false },
      { text: "Venule", correct: false },
    ],
  },
  {
    question: "Which biomolecule stores genetic information?",
    answers: [
      { text: "Protein", correct: false },
      { text: "Lipid", correct: false },
      { text: "DNA", correct: true },
      { text: "Carbohydrate", correct: false },
    ],
  },
  {
    question: "What is the process by which cells divide to form gametes?",
    answers: [
      { text: "Mitosis", correct: false },
      { text: "Binary fission", correct: false },
      { text: "Cytokinesis", correct: false },
      { text: "Meiosis", correct: true },
    ],
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Adrenaline", correct: false },
      { text: "Thyroxine", correct: false },
      { text: "Cortisol", correct: false },
    ],
  },
  {
    question: "What is the scientific name for humans?",
    answers: [
      { text: "Homo erectus", correct: false },
      { text: "Homo sapiens", correct: true },
      { text: "Homo habilis", correct: false },
      { text: "Homo neanderthalensis", correct: false },
    ],
  },
  {
    question: "Which type of cell lacks a nucleus?",
    answers: [
      { text: "Eukaryotic cell", correct: false },
      { text: "Plant cell", correct: false },
      { text: "Prokaryotic cell", correct: true },
      { text: "Animal cell", correct: false },
    ],
  },
  {
    question: "What is the main function of red blood cells?",
    answers: [
      { text: "Fight infection", correct: false },
      { text: "Clot blood", correct: false },
      { text: "Regulate temperature", correct: false },
      { text: "Carry oxygen", correct: true },
    ],
  },
  {
    question: "Which structure controls what enters and leaves the cell?",
    answers: [
      { text: "Cell membrane", correct: true },
      { text: "Cell wall", correct: false },
      { text: "Cytoplasm", correct: false },
      { text: "Nuclear membrane", correct: false },
    ],
  },
  {
    question: "What is the process of programmed cell death called?",
    answers: [
      { text: "Necrosis", correct: false },
      { text: "Apoptosis", correct: true },
      { text: "Mitosis", correct: false },
      { text: "Lysis", correct: false },
    ],
  },
  {
    question: "Which part of the flower produces pollen?",
    answers: [
      { text: "Pistil", correct: false },
      { text: "Sepal", correct: false },
      { text: "Stamen", correct: true },
      { text: "Petal", correct: false },
    ],
  },
  {
    question: "What is the hardest substance in the human body?",
    answers: [
      { text: "Bone", correct: false },
      { text: "Cartilage", correct: false },
      { text: "Keratin", correct: false },
      { text: "Tooth enamel", correct: true },
    ],
  },
  {
    question: "Which system is responsible for producing hormones?",
    answers: [
      { text: "Endocrine system", correct: true },
      { text: "Nervous system", correct: false },
      { text: "Circulatory system", correct: false },
      { text: "Digestive system", correct: false },
    ],
  },
  {
    question: "What is the liquid part of blood called?",
    answers: [
      { text: "Serum", correct: false },
      { text: "Plasma", correct: true },
      { text: "Lymph", correct: false },
      { text: "Hemoglobin", correct: false },
    ],
  },
  {
    question: "Which organelle breaks down waste materials in the cell?",
    answers: [
      { text: "Mitochondria", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Lysosome", correct: true },
      { text: "Chloroplast", correct: false },
    ],
  },
  {
    question: "What is the study of insects called?",
    answers: [
      { text: "Herpetology", correct: false },
      { text: "Ornithology", correct: false },
      { text: "Ichthyology", correct: false },
      { text: "Entomology", correct: true },
    ],
  },
  {
    question: "Which muscle is involuntary and found in the heart?",
    answers: [
      { text: "Cardiac muscle", correct: true },
      { text: "Skeletal muscle", correct: false },
      { text: "Smooth muscle", correct: false },
      { text: "Striated muscle", correct: false },
    ],
  },
  {
    question: "What is the process by which plants lose water through their leaves?",
    answers: [
      { text: "Osmosis", correct: false },
      { text: "Transpiration", correct: true },
      { text: "Diffusion", correct: false },
      { text: "Evaporation", correct: false },
    ],
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin K", correct: false },
    ],
  },
  {
    question: "What is the smallest bone in the human body?",
    answers: [
      { text: "Femur", correct: false },
      { text: "Tibia", correct: false },
      { text: "Radius", correct: false },
      { text: "Stapes", correct: true },
    ],
  },
  {
    question: "Which process converts glucose into energy without oxygen?",
    answers: [
      { text: "Aerobic respiration", correct: false },
      { text: "Fermentation", correct: true },
      { text: "Photosynthesis", correct: false },
      { text: "Glycolysis", correct: false },
    ],
  },
  {
    question: "What is the term for animals that are active at night?",
    answers: [
      { text: "Diurnal", correct: false },
      { text: "Crepuscular", correct: false },
      { text: "Cathemeral", correct: false },
      { text: "Nocturnal", correct: true },
    ],
  },
  {
    question: "What is the process by which plants absorb water through their roots?",
    answers: [
      { text: "Active transport", correct: false },
      { text: "Diffusion", correct: false },
      { text: "Osmosis", correct: true },
      { text: "Facilitated diffusion", correct: false },
    ],
  },
  {
    question: "Which organ produces bile?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Pancreas", correct: false },
      { text: "Gallbladder", correct: false },
      { text: "Stomach", correct: false },
    ],
  },
  {
    question: "What is the functional unit of the kidney?",
    answers: [
      { text: "Glomerulus", correct: false },
      { text: "Nephron", correct: true },
      { text: "Tubule", correct: false },
      { text: "Collecting duct", correct: false },
    ],
  },
  {
    question: "Which vitamin deficiency causes scurvy?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B12", correct: false },
      { text: "Vitamin D", correct: false },
      { text: "Vitamin C", correct: true },
    ],
  },
  {
    question: "What is the longest bone in the human body?",
    answers: [
      { text: "Femur", correct: true },
      { text: "Tibia", correct: false },
      { text: "Humerus", correct: false },
      { text: "Fibula", correct: false },
    ],
  },
  {
    question: "Which blood component is responsible for clotting?",
    answers: [
      { text: "Red blood cells", correct: false },
      { text: "Platelets", correct: true },
      { text: "White blood cells", correct: false },
      { text: "Plasma", correct: false },
    ],
  },
  {
    question: "What is the study of birds called?",
    answers: [
      { text: "Herpetology", correct: false },
      { text: "Ichthyology", correct: false },
      { text: "Ornithology", correct: true },
      { text: "Mammalogy", correct: false },
    ],
  },
  {
    question: "Which organelle contains digestive enzymes?",
    answers: [
      { text: "Ribosome", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Golgi apparatus", correct: false },
      { text: "Lysosome", correct: true },
    ],
  },
  {
    question: "What is the normal human body temperature in Fahrenheit?",
    answers: [
      { text: "98.6°F", correct: true },
      { text: "97.8°F", correct: false },
      { text: "99.2°F", correct: false },
      { text: "100.4°F", correct: false },
    ],
  },
  {
    question: "Which part of the eye controls the amount of light entering?",
    answers: [
      { text: "Cornea", correct: false },
      { text: "Iris", correct: true },
      { text: "Lens", correct: false },
      { text: "Retina", correct: false },
    ],
  },
  {
    question: "What is the chemical messenger that travels through the bloodstream?",
    answers: [
      { text: "Enzyme", correct: false },
      { text: "Antibody", correct: false },
      { text: "Hormone", correct: true },
      { text: "Neurotransmitter", correct: false },
    ],
  },
  {
    question: "Which gas do plants release during photosynthesis?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Oxygen", correct: true },
    ],
  },
  {
    question: "What is the process of cell eating called?",
    answers: [
      { text: "Phagocytosis", correct: true },
      { text: "Pinocytosis", correct: false },
      { text: "Exocytosis", correct: false },
      { text: "Endocytosis", correct: false },
    ],
  },
  {
    question: "Which structure connects muscle to bone?",
    answers: [
      { text: "Ligament", correct: false },
      { text: "Tendon", correct: true },
      { text: "Cartilage", correct: false },
      { text: "Fascia", correct: false },
    ],
  },
  {
    question: "What is the main component of plant cell walls?",
    answers: [
      { text: "Chitin", correct: false },
      { text: "Protein", correct: false },
      { text: "Cellulose", correct: true },
      { text: "Starch", correct: false },
    ],
  },
  {
    question: "Which type of immunity is acquired through vaccination?",
    answers: [
      { text: "Innate immunity", correct: false },
      { text: "Natural immunity", correct: false },
      { text: "Passive immunity", correct: false },
      { text: "Active immunity", correct: true },
    ],
  },
  {
    question: "What is the space between neurons called?",
    answers: [
      { text: "Synapse", correct: true },
      { text: "Axon", correct: false },
      { text: "Dendrite", correct: false },
      { text: "Cell body", correct: false },
    ],
  },
  {
    question: "Which organ filters waste from the blood?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Kidney", correct: true },
      { text: "Spleen", correct: false },
      { text: "Pancreas", correct: false },
    ],
  },
  {
    question: "What is the study of classification of organisms called?",
    answers: [
      { text: "Ecology", correct: false },
      { text: "Genetics", correct: false },
      { text: "Taxonomy", correct: true },
      { text: "Physiology", correct: false },
    ],
  },
  {
    question: "Which molecule carries genetic information from DNA to ribosomes?",
    answers: [
      { text: "tRNA", correct: false },
      { text: "rRNA", correct: false },
      { text: "Protein", correct: false },
      { text: "mRNA", correct: true },
    ],
  },
  {
  question: "Which organelle is primarily responsible for producing ATP (the cell's main energy currency)?",
  answers: [
    { text: "Mitochondrion", correct: true },
    { text: "Ribosome", correct: false },
    { text: "Golgi apparatus", correct: false },
    { text: "Lysosome", correct: false }
  ]
},
{
  question: "Enzymes are biological molecules made mostly of which macromolecule?",
  answers: [
    { text: "Proteins", correct: true },
    { text: "Carbohydrates", correct: false },
    { text: "Lipids", correct: false },
    { text: "Nucleic acids", correct: false }
  ]
},
{
  question: "What is the basic structural and functional unit of all living organisms?",
  answers: [
    { text: "Cell", correct: true },
    { text: "Tissue", correct: false },
    { text: "Organ", correct: false },
    { text: "Organ system", correct: false }
  ]
},
{
  question: "Which blood cells are primarily responsible for transporting oxygen throughout the body?",
  answers: [
    { text: "Red blood cells", correct: true },
    { text: "White blood cells", correct: false },
    { text: "Platelets", correct: false },
    { text: "Plasma cells", correct: false }
  ]
},
{
  question: "What is the name of the process that breaks glucose into pyruvate and yields ATP without requiring oxygen?",
  answers: [
    { text: "Glycolysis", correct: true },
    { text: "Krebs cycle", correct: false },
    { text: "Electron transport chain", correct: false },
    { text: "Photosynthesis", correct: false }
  ]
},
{
  question: "In eukaryotic cells, where does transcription (DNA → RNA) primarily take place?",
  answers: [
    { text: "Nucleus", correct: true },
    { text: "Cytoplasm", correct: false },
    { text: "Mitochondrion", correct: false },
    { text: "Ribosome", correct: false }
  ]
},
{
  question: "What process during meiosis increases genetic variation by exchanging segments between homologous chromosomes?",
  answers: [
    { text: "Crossing over", correct: true },
    { text: "Binary fission", correct: false },
    { text: "Independent assortment", correct: false },
    { text: "Cytokinesis", correct: false }
  ]
},
{
  question: "Which molecule carries genetic information in most organisms?",
  answers: [
    { text: "DNA", correct: true },
    { text: "RNA", correct: false },
    { text: "Protein", correct: false },
    { text: "Lipid", correct: false }
  ]
},
{
  question: "Organisms that lack a nucleus and membrane-bound organelles belong to which group?",
  answers: [
    { text: "Prokaryotes", correct: true },
    { text: "Eukaryotes", correct: false },
    { text: "Archaea only", correct: false },
    { text: "Protists", correct: false }
  ]
},
{
  question: "Which kingdom contains multicellular, photosynthetic organisms that have cell walls made of cellulose?",
  answers: [
    { text: "Plantae", correct: true },
    { text: "Animalia", correct: false },
    { text: "Fungi", correct: false },
    { text: "Protista", correct: false }
  ]
}
];