// ============================
// Interfaces
// ============================

export interface ReorderParagraphItem {
    text: string;
    correctOrder: number;
  }
  
  export interface ReorderParagraphExercise {
    id: number;
    instructions: string;
    paragraphs: ReorderParagraphItem[];
  }
  
  // ============================
  // DATASET
  // ============================
  
  export const ReorderParagraphExercises: ReorderParagraphExercise[] = [
    {
      id: 1,
      instructions: "Reorder the sentences to form a coherent paragraph about learning styles.",
      paragraphs: [
        {
          text: "Today there are nine intelligences, and the possibility of others may eventually expand the list.",
          correctOrder: 2, // NUEVO ORDEN
        },
        {
          text: "Beyond these three categories, many theories of and approaches toward human learning potential have been established.",
          correctOrder: 4, // NUEVO ORDEN
        },
        {
          text: "Many of us are familiar with three broad categories in which people learn: visual learning, auditory learning, and kinesthetic learning.",
          correctOrder: 1, // NUEVO ORDEN
        },
        {
          text: "Gardner's early work in psychology and later in human cognition and human potential led to his development of the initial six intelligences.",
          correctOrder: 3, // NUEVO ORDEN
        },
        {
          text: "Among them is the theory of multiple intelligences developed by Howard Gardner at Harvard University.",
          correctOrder: 5, // NUEVO ORDEN
        },
      ],
    },
  
    // ID 2 – Se deja igual
    {
      id: 2,
      instructions: "Reorder the sentences to create a logical paragraph about climate change.",
      paragraphs: [
        {
          text: "Scientists continue to study climate systems to predict future trends and inform policy decisions.",
          correctOrder: 5,
        },
        {
          text: "Rising global temperatures have caused ice caps to melt and sea levels to rise.",
          correctOrder: 1,
        },
        {
          text: "Human activities such as deforestation and fossil fuel use contribute significantly to environmental changes.",
          correctOrder: 2,
        },
        {
          text: "Extreme weather events such as hurricanes and droughts have become more frequent.",
          correctOrder: 3,
        },
        {
          text: "Governments and organizations are working to mitigate the effects through renewable energy and conservation initiatives.",
          correctOrder: 4,
        },
      ],
    },
  
    // ID 3 – Igual
    {
      id: 3,
      instructions: "Reorder the sentences to form a paragraph about artificial intelligence.",
      paragraphs: [
        {
          text: "Machine learning allows computers to analyze data, identify patterns, and make predictions.",
          correctOrder: 1,
        },
        {
          text: "AI is transforming fields such as healthcare, finance, and transportation.",
          correctOrder: 2,
        },
        {
          text: "Autonomous vehicles use AI to navigate safely by interpreting complex sensor data.",
          correctOrder: 3,
        },
        {
          text: "However, ethical concerns such as privacy and bias must be addressed.",
          correctOrder: 4,
        },
        {
          text: "Researchers and policymakers are creating frameworks to ensure responsible AI development.",
          correctOrder: 5,
        },
      ],
    },
  ];
  
  export default ReorderParagraphExercises;
  