// FillInTheBlanksDrag.ts
export interface BlankOptionDrag {
    correct: string;
  }
  
  export interface ExerciseDrag {
    id: number;
    text: string[];
    blanks: BlankOptionDrag[];
    draggableOptions: string[];
  }
  
  export const FillInTheBlanksDrag: ExerciseDrag[] = [
    {
      id: 1,
      text: [
        "The sun had barely risen over the horizon when the travelers reached the ancient forest. The air was filled with the ",
        " of pine and the soft hum of the ",
        " that inhabited the dense trees. Each step they took revealed a hidden ",
        " that told stories of centuries past, and they could not help but feel a sense of ",
        " and wonder as they continued along the winding path."
      ],
      blanks: [
        { correct: "scent" },
        { correct: "birds" },
        { correct: "clearing" },
        { correct: "awe" }
      ],
      draggableOptions: ["scent", "smell", "birds", "wind", "clearing", "river", "awe", "fear"]
    },
  
    {
      id: 2,
      text: [
        "During the industrial revolution, many cities experienced a dramatic ",
        " in population as people migrated from rural areas in search of ",
        " and improved living conditions. Factories grew rapidly, and the need for skilled ",
        " increased. However, this period was also marked by poor working conditions and ",
        " that led to the formation of early labor unions and social reform movements."
      ],
      blanks: [
        { correct: "growth" },
        { correct: "employment" },
        { correct: "labor" },
        { correct: "exploitation" }
      ],
      draggableOptions: ["growth", "decline", "employment", "leisure", "labor", "medicine", "exploitation", "innovation"]
    },
  
    {
      id: 3,
      text: [
        "In the realm of astronomy, understanding the behavior of distant galaxies requires precise observation and careful analysis. Scientists use powerful telescopes to capture light that has traveled millions of ",
        " across the universe. By studying this light, they can determine the composition, motion, and ",
        " of celestial bodies, gaining insights into the origins of the cosmos and the ",
        " of matter that governs the universe."
      ],
      blanks: [
        { correct: "years" },
        { correct: "properties" },
        { correct: "laws" }
      ],
      draggableOptions: ["years", "days", "properties", "motions", "laws", "chaos", "planets", "stars"]
    },
  
    {
      id: 4,
      text: [
        "Climate change has become one of the most pressing challenges of the 21st century. Rising global temperatures have led to the melting of polar ice caps, causing ",
        " levels to rise and threatening coastal communities. Extreme weather events, such as ",
        " storms and prolonged droughts, are becoming more frequent, impacting agriculture, economies, and human health. Scientists emphasize the importance of reducing greenhouse gas emissions and adopting sustainable ",
        " practices to mitigate these effects and preserve the planet for future generations."
      ],
      blanks: [
        { correct: "sea" },
        { correct: "intense" },
        { correct: "farming" }
      ],
      draggableOptions: ["sea", "river", "intense", "mild", "farming", "industry", "fishing", "transport"]
    },
  
    {
      id: 5,
      text: [
        "Throughout history, great civilizations have risen and fallen due to a complex combination of political, economic, and social factors. Leaders who failed to address inequality and maintain ",
        " often faced revolts and the eventual collapse of their societies. Cultural achievements, such as art, architecture, and literature, reflect the values and aspirations of people living in those eras, providing invaluable ",
        " that continue to influence modern societies."
      ],
      blanks: [
        { correct: "stability" },
        { correct: "insights" }
      ],
      draggableOptions: ["stability", "chaos", "insights", "data", "knowledge", "ignorance"]
    }
  ];
  
  export default FillInTheBlanksDrag;
  