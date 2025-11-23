export interface MultipleChoiceQuestion {
    question: string;
    options: string[];
    correctAnswers: string[];
    }
    
    export interface MultipleChoiceExercise {
    id: number;
    text: string;
    questions: MultipleChoiceQuestion[];
    }
    
    export const MultipleChoiceExercises: MultipleChoiceExercise[] = [
    {
    id: 1,
    text: `       Climate change has emerged as one of the most pressing challenges of the 21st century. 
          Rising global temperatures have caused ice caps to melt, leading to higher sea levels 
          and threatening coastal communities worldwide. Changes in weather patterns have increased 
          the frequency of extreme events such as hurricanes, droughts, and wildfires, causing 
          economic, environmental, and social consequences. Human activities, including deforestation, 
          industrial emissions, and over-reliance on fossil fuels, are primary contributors to these 
          environmental shifts. Governments, organizations, and individuals are working to mitigate 
          the effects by promoting renewable energy, sustainable agriculture, and conservation 
          initiatives. Public awareness campaigns emphasize the importance of reducing carbon 
          footprints, preserving biodiversity, and adapting urban infrastructure to withstand 
          environmental challenges. Scientists continue to study climate systems, aiming to predict 
          future trends and inform policy decisions. The collaboration between nations and communities 
          is essential to implement effective strategies and ensure a sustainable future for coming 
          generations.
        `,
    questions: [
    {
    question: "According to the passage, which of the following are consequences of climate change?",
    options: [
    "Rising sea levels",
    "Increased frequency of extreme weather events",
    "Industrial growth",
    "Threats to coastal communities",
    "Urbanization"
    ],
    correctAnswers: [
    "Rising sea levels",
    "Increased frequency of extreme weather events",
    "Threats to coastal communities"
    ]
    }
    ]
    },
    {
    id: 2,
    text: `       The history of human space exploration is marked by remarkable achievements and daring missions. 
          Since the launch of Sputnik 1 in 1957, humanity has sought to understand the cosmos, 
          expand technological capabilities, and explore beyond Earth. The Apollo program, most notably 
          Apollo 11 in 1969, landed the first humans on the Moon, showcasing extraordinary engineering, 
          scientific research, and international prestige. Over the decades, satellites, space probes, 
          and robotic missions have provided invaluable data about planets, asteroids, and distant stars. 
          The International Space Station has facilitated long-term studies on human health, microgravity, 
          and orbital operations, fostering collaboration among nations. Contemporary space exploration 
          focuses on Mars missions, asteroid mining, and the potential colonization of other celestial 
          bodies. Private companies now play an increasingly significant role, accelerating innovation 
          and reducing costs. Challenges such as radiation exposure, resource management, and life support 
          systems remain critical considerations for future interplanetary travel.
        `,
    questions: [
    {
    question: "Which of the following are highlighted as key aspects of space exploration?",
    options: [
    "Moon landing",
    "International collaboration",
    "Maritime navigation",
    "Robotic missions",
    "Agricultural development"
    ],
    correctAnswers: [
    "Moon landing",
    "International collaboration",
    "Robotic missions"
    ]
    }
    ]
    },
    {
    id: 3,
    text: `       Advances in artificial intelligence (AI) have transformed multiple industries, ranging from healthcare 
          and finance to transportation and education. Machine learning algorithms can analyze vast datasets, 
          identify patterns, and make predictions with remarkable accuracy. In medicine, AI supports diagnostic 
          tools, personalized treatment plans, and drug discovery, enhancing patient care and efficiency. 
          Autonomous vehicles leverage AI to interpret sensor data, navigate complex environments, and reduce 
          human error. Financial institutions employ AI to detect fraud, optimize trading strategies, and 
          improve customer service. Ethical considerations, including privacy, bias, and accountability, 
          accompany these technological advances. Governments and organizations are implementing regulations 
          and best practices to ensure AI is developed and deployed responsibly. The collaboration between 
          researchers, policymakers, and industry leaders is crucial to balance innovation with societal benefits, 
          ensuring that AI serves as a positive force in shaping the future of work, education, and daily life.
        `,
    questions: [
    {
    question: "Which of the following applications of AI are mentioned in the text?",
    options: [
    "Healthcare diagnostics",
    "Autonomous vehicles",
    "Financial fraud detection",
    "Space travel",
    "Climate modeling"
    ],
    correctAnswers: [
    "Healthcare diagnostics",
    "Autonomous vehicles",
    "Financial fraud detection"
    ]
    }
    ]
    }
    ];
    
    export default MultipleChoiceExercises;
    