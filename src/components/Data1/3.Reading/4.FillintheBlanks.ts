// FillInTheBlanksDrag.ts CHATGPT ME AYUDO A HACERLO
export interface BlankOptionDrag {
    correct: string;
  }
  
  export interface ExerciseDrag {
    id: number;
    text: string[];
    blanks: BlankOptionDrag[];
    draggableOptions: string[];
    explanation: string[];
  }
  
  export const FillInTheBlanksDrag: ExerciseDrag[] = [
    {
      "id": 1,
      "text": [
        "The small coastal village had long depended on fishing as its main source of income. Families faced harsh seas for generations, relying on their knowledge of tides and winds. Recently, overfishing and climate change started to ",
        " fish populations, threatening the community's livelihood. Local authorities and environmental groups implemented ",
        " programs and provided alternative income sources. Workshops taught sustainable ",
        " techniques, and young people were encouraged to study marine biology and oceanography. These actions not only aimed to preserve marine life but also fostered a sense of ",
        " and collective responsibility. Community meetings encouraged ",
        " among villagers regarding conservation and environmental care."
      ],
      "blanks": [
        { "correct": "deplete" },
        { "correct": "conservation" },
        { "correct": "fishing" },
        { "correct": "stewardship" },
        { "correct": "awareness" },
        { "correct": "communication" }
      ],
      "draggableOptions": ["deplete", "increase", "conservation", "farming", "fishing", "stewardship", "awareness", "communication", "ignorance"],
      "explanation": [
        "1. deplete → first blank\nJustification: 'Overfishing and climate change started to ___ fish populations' indicates a negative impact. 'Deplete' fits.\nWhy not other options: 'Increase' is opposite; 'farming' or 'ignorance' do not fit.",
        "2. conservation → second blank\nJustification: 'Implemented ___ programs' suggests protection. 'Conservation' is correct.\nWhy not other options: 'Farming' does not indicate protection; 'deplete' already used.",
        "3. fishing → third blank\nJustification: 'Teach sustainable ___ techniques' refers to the community's main activity. 'Fishing' fits.\nWhy not other options: 'Farming' or 'stewardship' are not techniques; 'awareness' is abstract.",
        "4. stewardship → fourth blank\nJustification: 'Fostered a sense of ___ and collective responsibility' needs a noun showing care. 'Stewardship' fits.\nWhy not other options: 'Awareness' comes later; others irrelevant.",
        "5. awareness → fifth blank\nJustification: Complements 'stewardship', indicating recognition of environmental importance.\nWhy not other options: Other words do not fit semantically in this final phrase.",
        "6. communication → sixth blank\nJustification: Community meetings promoted 'communication', emphasizing exchange of ideas.\nWhy not other options: 'Stewardship' is used; 'fishing' irrelevant."
      ]
    },
    {
      "id": 2,
      "text": [
        "Urban areas face traffic congestion, air pollution, and noise, affecting residents' quality of life. City planners are implementing ",
        " solutions such as bicycle lanes, pedestrian zones, and electric public transport. Additionally, urban greenery projects improve air quality and reduce heat. Governments also incentivize ",
        " vehicles to lower emissions. Public awareness campaigns encourage ",
        " behavior like carpooling and recycling, promoting sustainable cities."
      ],
      "blanks": [
        { "correct": "sustainable" },
        { "correct": "electric" },
        { "correct": "eco-friendly" },
        { "correct": "responsible" }
      ],
      "draggableOptions": ["sustainable", "traditional", "electric", "fossil", "eco-friendly", "wasteful", "responsible", "careless"],
      "explanation": [
        "1. sustainable → first blank\nJustification: 'Implementing ___ solutions' refers to environmentally safe planning. 'Sustainable' fits.\nWhy not other options: 'Traditional' doesn't imply environmental benefits.",
        "2. electric → second blank\nJustification: Incentives for ___ vehicles reduce emissions. 'Electric' fits.\nWhy not other options: 'Fossil' is opposite; 'sustainable' already used.",
        "3. eco-friendly → third blank\nJustification: Incentives promote environmentally friendly options. 'Eco-friendly' fits.\nWhy not other options: 'Wasteful' is opposite; 'careless' illogical.",
        "4. responsible → fourth blank\nJustification: Campaigns encourage ___ behavior. 'Responsible' fits.\nWhy not other options: 'Careless' contradicts intent; 'traditional' irrelevant."
      ]
    },
    {
      "id": 3,
      "text": [
        "In the field of astronomy, scientists study distant galaxies using powerful telescopes that capture light traveling millions of ",
        " across space. By analyzing this light, they can determine the composition, movement, and ",
        " of celestial bodies. Observing these phenomena allows researchers to understand the ",
        " governing the universe, as well as the formation and evolution of stars and planets."
      ],
      "blanks": [
        { "correct": "years" },
        { "correct": "properties" },
        { "correct": "laws" },
        { "correct": "processes" }
      ],
      "draggableOptions": ["years", "days", "properties", "motions", "laws", "chaos", "planets", "processes"],
      "explanation": [
        "1. years → first blank\nJustification: 'Light traveling millions of ___' indicates time. 'Years' fits.\nWhy not other options: 'Days' too short; 'motions' irrelevant.",
        "2. properties → second blank\nJustification: Determine composition and ___ of celestial bodies. 'Properties' fits.\nWhy not other options: 'Motions' is partial; 'chaos' inappropriate.",
        "3. laws → third blank\nJustification: 'Understanding the ___ governing the universe' requires scientific principles. 'Laws' fits.\nWhy not other options: 'Chaos' is opposite; 'planets' irrelevant.",
        "4. processes → fourth blank\nJustification: Formation and evolution of stars involve 'processes'.\nWhy not other options: 'Properties' already used; 'motions' partial."
      ]
    },
    {
      "id": 4,
      "text": [
        "Throughout the history of human society, technological advancements have transformed communication. The invention of the printing press in the 15th century allowed for widespread ",
        " of knowledge. In the 19th century, the telegraph enabled faster ",
        " across vast distances. The 20th century brought radio, television, and eventually the internet, all of which increased access to information and global ",
        ". Modern digital tools require responsible ",
        " by users to ensure privacy and security."
      ],
      "blanks": [
        { "correct": "dissemination" },
        { "correct": "communication" },
        { "correct": "connectivity" },
        { "correct": "usage" }
      ],
      "draggableOptions": ["dissemination", "suppression", "communication", "silence", "connectivity", "isolation", "usage", "abuse"],
      "explanation": [
        "1. dissemination → first blank\nJustification: Printing press allowed widespread ___ of knowledge. 'Dissemination' fits.\nWhy not other options: 'Suppression' is opposite; 'silence' irrelevant.",
        "2. communication → second blank\nJustification: Telegraph enabled faster ___. 'Communication' fits.\nWhy not other options: 'Silence' or 'isolation' contradict meaning.",
        "3. connectivity → third blank\nJustification: Modern inventions increased global ___. 'Connectivity' fits.\nWhy not other options: 'Isolation' opposite; 'usage' fits later blank.",
        "4. usage → fourth blank\nJustification: Digital tools require responsible ___. 'Usage' fits.\nWhy not other options: 'Abuse' is opposite; others irrelevant."
      ]
    },
    {
      "id": 5,
      "text": [
        "In agriculture, soil health is vital for sustainable food production. Continuous monocropping can ",
        " nutrients from the soil, leading to poor yields. Farmers are encouraged to adopt crop rotation, organic fertilizers, and cover crops to maintain soil ",
        ". Integrated pest management reduces chemical usage and promotes ",
        " ecosystems. Knowledge-sharing and farmer education programs increase ",
        " about environmentally friendly practices."
      ],
      "blanks": [
        { "correct": "deplete" },
        { "correct": "fertility" },
        { "correct": "balanced" },
        { "correct": "awareness" }
      ],
      "draggableOptions": ["deplete", "fertility", "balanced", "awareness", "pollution", "destruction", "ignorance", "chaos"],
      "explanation": [
        "1. deplete → first blank\nJustification: Monocropping can ___ nutrients. 'Deplete' fits.\nWhy not other options: 'Pollution' unrelated; 'destruction' too vague.",
        "2. fertility → second blank\nJustification: Farmers adopt methods to maintain soil ___. 'Fertility' fits.\nWhy not other options: 'Awareness' is abstract; 'chaos' irrelevant.",
        "3. balanced → third blank\nJustification: Integrated pest management maintains ___ ecosystems. 'Balanced' fits.\nWhy not other options: 'Destruction' is opposite; 'ignorance' irrelevant.",
        "4. awareness → fourth blank\nJustification: Education increases ___ of practices. 'Awareness' fits.\nWhy not other options: 'Fertility' used; 'pollution' opposite."
      ]
    },
      {
        "id": 6,
        "text": [
          "Global climate change is causing significant alterations in weather patterns. Rising temperatures have led to more ",
          " heatwaves, while polar ice caps are melting at an accelerated pace, resulting in higher ",
          " levels. Coastal cities face increasing risks of flooding and erosion. Governments are implementing renewable energy solutions, including solar and wind power, to reduce ",
          " emissions. Public campaigns aim to increase citizens’ ",
          " and encourage eco-friendly practices, such as recycling, energy conservation, and sustainable transport."
        ],
        "blanks": [
          { "correct": "intense" },
          { "correct": "sea" },
          { "correct": "carbon" },
          { "correct": "awareness" }
        ],
        "draggableOptions": ["intense", "mild", "sea", "river", "carbon", "oxygen", "awareness", "ignorance"],
        "explanation": [
          "1. intense → first blank\nJustification: Rising temperatures lead to more ___ heatwaves. 'Intense' fits.\nWhy not other options: 'Mild' is opposite; 'sea' irrelevant.",
          "2. sea → second blank\nJustification: Melting ice caps cause higher ___ levels. 'Sea' fits.\nWhy not other options: 'River' incorrect; 'carbon' unrelated here.",
          "3. carbon → third blank\nJustification: Renewable energy reduces ___ emissions. 'Carbon' fits.\nWhy not other options: 'Oxygen' opposite; 'awareness' not a pollutant.",
          "4. awareness → fourth blank\nJustification: Campaigns increase ___ among citizens. 'Awareness' fits.\nWhy not other options: 'Ignorance' is opposite; others irrelevant."
        ]
      },
      {
        "id": 7,
        "text": [
          "In modern education, digital technologies play a crucial role. Online learning platforms allow students to access lectures, assignments, and resources at any time. Interactive simulations help learners understand complex scientific ",
          " and mathematical ",
          ". Teachers are encouraged to integrate technology into their curriculum to improve engagement, foster critical thinking, and encourage ",
          " among students. Digital literacy is becoming an essential skill, requiring students to practice safe internet ",
          " and evaluate online sources carefully."
        ],
        "blanks": [
          { "correct": "concepts" },
          { "correct": "problems" },
          { "correct": "collaboration" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["concepts", "ideas", "problems", "games", "collaboration", "isolation", "behavior", "ignorance"],
        "explanation": [
          "1. concepts → first blank\nJustification: Simulations help understand scientific ___. 'Concepts' fits.\nWhy not other options: 'Ideas' too vague; 'games' unrelated.",
          "2. problems → second blank\nJustification: Math simulations help with ___. 'Problems' fits.\nWhy not other options: 'Games' irrelevant; 'concepts' already used.",
          "3. collaboration → third blank\nJustification: Technology encourages student ___. 'Collaboration' fits.\nWhy not other options: 'Isolation' opposite; 'behavior' fits next blank.",
          "4. behavior → fourth blank\nJustification: Digital literacy includes safe internet ___. 'Behavior' fits.\nWhy not other options: 'Ignorance' is opposite; 'collaboration' already used."
        ]
      },
      {
        "id": 8,
        "text": [
          "Urban wildlife faces numerous challenges due to expanding cities and human activity. Animals such as birds, foxes, and raccoons must adapt to limited natural habitats. Green corridors and protected areas are established to maintain biodiversity and prevent ",
          " of species. Human education programs encourage respectful interactions with wildlife and discourage illegal ",
          " or feeding that could harm animals. Observing animal behavior in these spaces provides valuable ",
          " for ecologists, helping them develop strategies to sustain healthy urban ecosystems."
        ],
        "blanks": [
          { "correct": "extinction" },
          { "correct": "hunting" },
          { "correct": "data" }
        ],
        "draggableOptions": ["extinction", "population", "hunting", "feeding", "data", "knowledge", "chaos"],
        "explanation": [
          "1. extinction → first blank\nJustification: Green corridors prevent ___ of species. 'Extinction' fits.\nWhy not other options: 'Population' too general; 'feeding' unrelated.",
          "2. hunting → second blank\nJustification: Programs discourage illegal ___. 'Hunting' fits.\nWhy not other options: 'Feeding' can be legal; 'chaos' irrelevant.",
          "3. data → third blank\nJustification: Observing animals provides valuable ___. 'Data' fits.\nWhy not other options: 'Knowledge' is broader; 'chaos' unrelated."
        ]
      },
      {
        "id": 9,
        "text": [
          "Healthcare systems worldwide are facing increased pressure from aging populations. Chronic diseases, such as diabetes and heart conditions, require regular monitoring and care. Governments invest in preventative measures, including vaccination campaigns and health education programs, to reduce the incidence of preventable illnesses. Technology is increasingly used for patient ",
          " and remote consultations. Furthermore, medical research contributes to the development of new ",
          " and treatments. Public awareness campaigns promote healthy ",
          " habits, encouraging regular exercise, balanced diets, and mental health support."
        ],
        "blanks": [
          { "correct": "monitoring" },
          { "correct": "medications" },
          { "correct": "lifestyle" }
        ],
        "draggableOptions": ["monitoring", "medications", "tracking", "lifestyle", "work", "exercise"],
        "explanation": [
          "1. monitoring → first blank\nJustification: Technology is used for patient ___. 'Monitoring' fits.\nWhy not other options: 'Tracking' is possible but less formal; 'work' irrelevant.",
          "2. medications → second blank\nJustification: Research develops new ___ and treatments. 'Medications' fits.\nWhy not other options: 'Exercise' is a habit, not treatment; 'work' irrelevant.",
          "3. lifestyle → third blank\nJustification: Campaigns promote healthy ___. 'Lifestyle' fits.\nWhy not other options: 'Exercise' is part of lifestyle; 'tracking' not broad enough."
        ]
      },
      {
        "id": 10,
        "text": [
          "Renewable energy is becoming a priority for governments seeking to combat climate change. Solar panels and wind turbines generate electricity with minimal greenhouse gas emissions. Large-scale adoption reduces dependence on fossil fuels and lowers ",
          " costs over time. Investments in energy storage systems, such as batteries, improve ",
          " and reliability. Community engagement programs raise public ",
          " about sustainable energy solutions and encourage households to adopt eco-friendly ",
          "."
        ],
        "blanks": [
          { "correct": "operating" },
          { "correct": "efficiency" },
          { "correct": "awareness" },
          { "correct": "practices" }
        ],
        "draggableOptions": ["operating", "maintenance", "efficiency", "reliability", "awareness", "ignorance", "practices", "behaviors"],
        "explanation": [
          "1. operating → first blank\nJustification: Adoption reduces ___ costs. 'Operating' fits.\nWhy not other options: 'Maintenance' is specific; 'awareness' unrelated.",
          "2. efficiency → second blank\nJustification: Energy storage improves ___. 'Efficiency' fits.\nWhy not other options: 'Reliability' is related but efficiency is exact.",
          "3. awareness → third blank\nJustification: Programs raise public ___. 'Awareness' fits.\nWhy not other options: 'Ignorance' is opposite; others irrelevant.",
          "4. practices → fourth blank\nJustification: Encourages households to adopt eco-friendly ___. 'Practices' fits.\nWhy not other options: 'Behaviors' is similar but less formal; 'awareness' already used."
        ]
      },

      {
        "id": 11,
        "text": [
          "Renewable agriculture is gaining attention worldwide as a method to produce food while preserving the environment. Farmers are encouraged to use crop rotation and organic fertilizers to improve soil ",
          " and reduce dependence on chemical pesticides. Planting diverse crops enhances ecosystem ",
          " and attracts beneficial insects that act as natural pest control. Water management techniques, such as drip irrigation and rainwater harvesting, ensure optimal ",
          " use. Education programs inform farmers about sustainable practices and the importance of ",
          " to protect future generations from environmental degradation."
        ],
        "blanks": [
          { "correct": "fertility" },
          { "correct": "biodiversity" },
          { "correct": "water" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["fertility", "productivity", "biodiversity", "ecosystem", "water", "soil", "stewardship", "ignorance"],
        "explanation": [
          "1. fertility → first blank\nJustification: Organic fertilizers improve soil ___. 'Fertility' fits perfectly.\nWhy not other options: 'Productivity' is an outcome, not the soil property; 'soil' too general.",
          "2. biodiversity → second blank\nJustification: Diverse crops enhance ___. 'Biodiversity' is correct.\nWhy not other options: 'Ecosystem' is broader; 'fertility' already used.",
          "3. water → third blank\nJustification: Techniques ensure optimal ___ use. 'Water' fits.\nWhy not other options: 'Soil' already mentioned; 'stewardship' abstract, not measurable here.",
          "4. stewardship → fourth blank\nJustification: Education promotes ___. 'Stewardship' fits as responsible care.\nWhy not other options: 'Ignorance' opposite; others do not convey responsibility."
        ]
      },
      {
        "id": 12,
        "text": [
          "Artificial intelligence (AI) is transforming multiple industries, including healthcare, finance, and transportation. Machine learning algorithms can analyze vast amounts of data to detect patterns and improve decision-making accuracy. In healthcare, AI assists in disease ",
          " by identifying symptoms and predicting risks. Financial institutions use AI to detect fraudulent ",
          " and enhance customer services. Autonomous vehicles rely on AI to navigate and avoid obstacles, improving overall road ",
          ". Ethics and transparency are essential to ensure AI systems do not unintentionally introduce ",
          " or bias into decision-making processes."
        ],
        "blanks": [
          { "correct": "diagnosis" },
          { "correct": "activities" },
          { "correct": "safety" },
          { "correct": "errors" }
        ],
        "draggableOptions": ["diagnosis", "activities", "fraud", "safety", "errors", "security", "bias", "data"],
        "explanation": [
          "1. diagnosis → first blank\nJustification: AI assists in disease ___ by analyzing symptoms. 'Diagnosis' fits.\nWhy not other options: 'Fraud' unrelated; 'activities' too vague.",
          "2. activities → second blank\nJustification: Detect fraudulent ___. 'Activities' fits contextually.\nWhy not other options: 'Fraud' is a general noun; 'errors' unrelated here.",
          "3. safety → third blank\nJustification: AI navigation improves road ___. 'Safety' is precise.\nWhy not other options: 'Security' is broader; 'bias' irrelevant.",
          "4. errors → fourth blank\nJustification: AI must avoid introducing ___. 'Errors' fits.\nWhy not other options: 'Bias' is specific type of error; 'data' not fitting directly."
        ]
      },
      {
        "id": 13,
        "text": [
          "Urban planning is crucial to create livable cities. The integration of green spaces, efficient public transport, and sustainable energy solutions helps reduce pollution and improve citizens’ quality of life. Bike lanes and pedestrian-friendly roads encourage alternative transportation and reduce traffic congestion. Effective waste management, including recycling programs and composting initiatives, supports environmental ",
          ". Public awareness campaigns promote responsible consumption and proper ",
          ". Community involvement in decision-making fosters civic ",
          " and strengthens social cohesion. Long-term urban planning considers population growth, economic development, and climate resilience to ensure sustainable ",
          "."
        ],
        "blanks": [
          { "correct": "sustainability" },
          { "correct": "disposal" },
          { "correct": "engagement" },
          { "correct": "development" }
        ],
        "draggableOptions": ["sustainability", "pollution", "disposal", "waste", "engagement", "interest", "development", "chaos"],
        "explanation": [
          "1. sustainability → first blank\nJustification: Waste management supports environmental ___. 'Sustainability' fits.\nWhy not other options: 'Pollution' negative; 'waste' too specific.",
          "2. disposal → second blank\nJustification: Campaigns promote proper ___. 'Disposal' fits.\nWhy not other options: 'Waste' is a general concept; 'engagement' unrelated here.",
          "3. engagement → third blank\nJustification: Community involvement fosters civic ___. 'Engagement' fits.\nWhy not other options: 'Interest' less formal; 'chaos' opposite meaning.",
          "4. development → fourth blank\nJustification: Planning ensures sustainable ___. 'Development' fits.\nWhy not other options: 'Sustainability' used; 'chaos' irrelevant."
        ]
      },
      {
        "id": 14,
        "text": [
          "Space exploration has significantly expanded human knowledge of the universe. Satellites provide valuable data about planetary climates, stars, and cosmic phenomena. Missions to Mars and other celestial bodies aim to understand planetary ",
          " and the potential for life beyond Earth. Astronomers use telescopes to observe distant galaxies, analyze stellar ",
          ", and study cosmic events. Advances in rocketry, propulsion systems, and satellite technology improve mission ",
          " and increase scientific discoveries. Public outreach programs raise awareness about space science and inspire future ",
          " to pursue careers in STEM fields."
        ],
        "blanks": [
          { "correct": "environments" },
          { "correct": "composition" },
          { "correct": "efficiency" },
          { "correct": "generations" }
        ],
        "draggableOptions": ["environments", "conditions", "composition", "structure", "efficiency", "success", "generations", "students"],
        "explanation": [
          "1. environments → first blank\nJustification: Missions study planetary ___. 'Environments' fits.\nWhy not other options: 'Conditions' too general; 'Structure' less precise.",
          "2. composition → second blank\nJustification: Telescopes analyze stellar ___. 'Composition' fits.\nWhy not other options: 'Structure' less precise; 'efficiency' unrelated.",
          "3. efficiency → third blank\nJustification: Advances improve mission ___. 'Efficiency' fits.\nWhy not other options: 'Success' broader; 'generations' unrelated here.",
          "4. generations → fourth blank\nJustification: Outreach inspires future ___. 'Generations' fits.\nWhy not other options: 'Students' acceptable but 'generations' better contextually."
        ]
      },
      {
        "id": 15,
        "text": [
          "Ocean conservation is critical to maintain marine biodiversity. Coral reefs, seagrass beds, and mangroves provide habitats for countless species. Overfishing, pollution, and climate change threaten these ecosystems, causing a decline in fish ",
          " and overall marine health. International treaties and protected marine areas aim to reduce illegal fishing and prevent environmental ",
          ". Community engagement programs educate people about the importance of marine ",
          " and promote sustainable ",
          " practices, such as responsible seafood consumption and waste reduction."
        ],
        "blanks": [
          { "correct": "populations" },
          { "correct": "degradation" },
          { "correct": "conservation" },
          { "correct": "management" }
        ],
        "draggableOptions": ["populations", "species", "degradation", "destruction", "conservation", "protection", "management", "oversight"],
        "explanation": [
          "1. populations → first blank\nJustification: Threats cause a decline in fish ___. 'Populations' fits.\nWhy not other options: 'Species' too general; 'management' unrelated here.",
          "2. degradation → second blank\nJustification: Treaties prevent environmental ___. 'Degradation' fits.\nWhy not other options: 'Destruction' stronger; 'protection' already implied in measures.",
          "3. conservation → third blank\nJustification: Programs educate about marine ___. 'Conservation' fits.\nWhy not other options: 'Protection' is close but less formal; 'oversight' is procedural.",
          "4. management → fourth blank\nJustification: Promotes sustainable ___ practices. 'Management' fits.\nWhy not other options: 'Oversight' less practical; 'conservation' already used."
        ]
      },
      {
        "id": 16,
        "text": [
          "Renewable energy technology continues to evolve rapidly. Solar panels, wind turbines, and hydroelectric systems generate electricity with minimal greenhouse gas emissions. Research focuses on improving energy storage, grid ",
          ", and generation efficiency. Governments provide incentives to increase public and private sector investment, while community programs encourage households to adopt renewable energy and practice energy ",
          ". Innovation in this field is crucial to reducing reliance on fossil fuels and combating global ",
          "."
        ],
        "blanks": [
          { "correct": "stability" },
          { "correct": "conservation" },
          { "correct": "warming" }
        ],
        "draggableOptions": ["stability", "efficiency", "conservation", "behavior", "warming", "pollution", "energy"],
        "explanation": [
          "1. stability → first blank\nJustification: Storage and grids need ___. 'Stability' fits.\nWhy not other options: 'Efficiency' fits partially but grid stability is technical focus; 'behavior' irrelevant.",
          "2. conservation → second blank\nJustification: Households encouraged to practice energy ___. 'Conservation' fits.\nWhy not other options: 'Behavior' vague; 'efficiency' more technical.",
          "3. warming → third blank\nJustification: Goal is combating global ___. 'Warming' fits.\nWhy not other options: 'Pollution' relevant but 'warming' is specific focus of energy transition."
        ]
      },
      {
        "id": 17,
        "text": [
          "Artificial ecosystems, such as vertical farms and controlled-environment greenhouses, offer solutions to food production challenges in urban areas. These systems allow precise control of temperature, light, and water, maximizing plant growth and minimizing resource ",
          ". Vertical farms reduce land use while enabling year-round crop production, addressing food ",
          " and urban sustainability. Research explores integrating renewable energy sources and automated systems to improve operational ",
          " and efficiency. Public engagement campaigns encourage consumers to support these sustainable ",
          " and innovative approaches."
        ],
        "blanks": [
          { "correct": "consumption" },
          { "correct": "security" },
          { "correct": "management" },
          { "correct": "practices" }
        ],
        "draggableOptions": ["consumption", "resources", "security", "management", "efficiency", "practices", "behavior", "innovation"],
        "explanation": [
          "1. consumption → first blank\nJustification: Minimizing resource ___. 'Consumption' fits.\nWhy not other options: 'Resources' is general; 'management' fits later.",
          "2. security → second blank\nJustification: Addresses food ___. 'Security' fits.\nWhy not other options: 'Resources' too vague; 'management' fits technical process.",
          "3. management → third blank\nJustification: Automated systems improve ___. 'Management' fits.\nWhy not other options: 'Efficiency' possible but 'management' refers to overall operations.",
          "4. practices → fourth blank\nJustification: Encourage consumers to support sustainable ___. 'Practices' fits.\nWhy not other options: 'Behavior' vague; 'innovation' already implied."
        ]
      },
      {
        "id": 18,
        "text": [
          "Public transportation systems are essential for reducing traffic congestion and environmental pollution in cities. Investments in electric buses, metro lines, and bike-sharing programs improve mobility and reduce greenhouse gas ",
          ". Comprehensive planning ensures connectivity between neighborhoods and encourages commuters to reduce car ",
          ". Real-time scheduling apps enhance commuter experience and system ",
          ". Educational campaigns promote environmentally responsible ",
          " and the social benefits of collective transport."
        ],
        "blanks": [
          { "correct": "emissions" },
          { "correct": "use" },
          { "correct": "efficiency" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["emissions", "pollution", "use", "dependency", "efficiency", "management", "behavior", "practices"],
        "explanation": [
          "1. emissions → first blank\nJustification: Transportation reduces greenhouse gas ___. 'Emissions' fits.\nWhy not other options: 'Pollution' general; 'dependency' irrelevant.",
          "2. use → second blank\nJustification: Reduce car ___. 'Use' fits.\nWhy not other options: 'Dependency' similar but less direct; 'pollution' already implied.",
          "3. efficiency → third blank\nJustification: Real-time apps improve system ___. 'Efficiency' fits.\nWhy not other options: 'Management' broader; 'behavior' used elsewhere.",
          "4. behavior → fourth blank\nJustification: Campaigns promote responsible ___. 'Behavior' fits.\nWhy not other options: 'Practices' close but less formal; 'efficiency' already used."
        ]
      },
      {
        "id": 19,
        "text": [
          "Water conservation is crucial to ensure sustainable supply in both urban and rural areas. Rainwater harvesting, efficient irrigation, and greywater recycling reduce unnecessary ",
          " and ensure adequate availability for agriculture, industry, and households. Governments implement policies to prevent water ",
          " and over-extraction of groundwater. Education programs aim to raise public ",
          " about responsible water use. Collaboration between stakeholders helps improve water ",
          " and resilience in the face of climate change and growing population demands."
        ],
        "blanks": [
          { "correct": "consumption" },
          { "correct": "pollution" },
          { "correct": "awareness" },
          { "correct": "management" }
        ],
        "draggableOptions": ["consumption", "pollution", "awareness", "management", "waste", "resources", "behavior", "sustainability"],
        "explanation": [
          "1. consumption → first blank\nJustification: Reduce unnecessary ___. 'Consumption' fits.\nWhy not other options: 'Waste' possible but 'consumption' more precise; 'resources' too general.",
          "2. pollution → second blank\nJustification: Prevent water ___ and over-extraction. 'Pollution' fits.\nWhy not other options: 'Waste' less specific; 'resources' general.",
          "3. awareness → third blank\nJustification: Programs raise public ___. 'Awareness' fits.\nWhy not other options: 'Behavior' less formal; 'sustainability' broader.",
          "4. management → fourth blank\nJustification: Collaboration improves water ___. 'Management' fits.\nWhy not other options: 'Sustainability' is outcome; 'resources' too general."
        ]
      },
      {
        "id": 20,
        "text": [
          "Cybersecurity has become a top priority for individuals and organizations due to increasing digital threats. Companies invest in firewalls, encryption, and secure networks to prevent data ",
          " and system breaches. Employees are trained in safe online practices to reduce human error. Governments enforce regulations and policies to enhance ",
          " and protect critical infrastructure. Public awareness campaigns educate citizens about phishing, malware, and online privacy to encourage responsible digital ",
          ". Continuous monitoring and research help improve threat detection and system ",
          "."
        ],
        "blanks": [
          { "correct": "theft" },
          { "correct": "security" },
          { "correct": "behavior" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["theft", "breach", "security", "behavior", "resilience", "management", "privacy", "protection"],
        "explanation": [
          "1. theft → first blank\nJustification: Prevent data ___ and breaches. 'Theft' fits.\nWhy not other options: 'Breach' describes event; 'protection' action, not loss.",
          "2. security → second blank\nJustification: Regulations enhance ___. 'Security' fits.\nWhy not other options: 'Privacy' is part; 'management' less precise.",
          "3. behavior → third blank\nJustification: Citizens encouraged responsible digital ___. 'Behavior' fits.\nWhy not other options: 'Privacy' specific aspect; 'resilience' refers to system.",
          "4. resilience → fourth blank\nJustification: Monitoring improves system ___. 'Resilience' fits.\nWhy not other options: 'Security' already used; 'management' less precise."
        ]
      },
      {
        "id": 21,
        "text": [
          "Urban greenery and public parks play a vital role in enhancing city livability. Green spaces provide recreational areas, improve air quality, and support urban ",
          " by reducing the heat island effect. Trees and shrubs also contribute to noise ",
          " and provide habitats for birds and insects. Community-led gardening projects encourage social ",
          " and foster a sense of belonging among residents. Integrating greenery into urban planning ensures environmental ",
          " and mental well-being while promoting sustainable development."
        ],
        "blanks": [
          { "correct": "biodiversity" },
          { "correct": "pollution" },
          { "correct": "interaction" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["biodiversity", "ecology", "pollution", "noise", "interaction", "engagement", "sustainability", "development"],
        "explanation": [
          "1. biodiversity → first blank\nJustification: Green spaces support urban ___. 'Biodiversity' fits perfectly.\nWhy not other options: 'Ecology' too broad; 'development' unrelated.",
          "2. pollution → second blank\nJustification: Trees reduce noise and ___. 'Pollution' fits the context.\nWhy not other options: 'Noise' is already implied; 'engagement' unrelated.",
          "3. interaction → third blank\nJustification: Gardening projects encourage social ___. 'Interaction' fits.\nWhy not other options: 'Engagement' possible but less specific; 'development' unrelated.",
          "4. sustainability → fourth blank\nJustification: Integrating greenery ensures environmental ___. 'Sustainability' fits.\nWhy not other options: 'Development' general; 'biodiversity' already used."
        ]
      },
      {
        "id": 22,
        "text": [
          "The rise of e-commerce has transformed consumer habits, making online shopping more convenient and efficient. Businesses leverage data analytics to personalize marketing and improve customer ",
          " . Fast delivery systems, automated warehouses, and inventory management tools enhance supply chain ",
          " , ensuring timely product availability. However, the growth of online shopping also increases packaging waste and carbon ",
          " from delivery vehicles. Companies are exploring sustainable packaging solutions and green logistics to reduce environmental ",
          " and maintain customer loyalty."
        ],
        "blanks": [
          { "correct": "experience" },
          { "correct": "efficiency" },
          { "correct": "emissions" },
          { "correct": "impact" }
        ],
        "draggableOptions": ["experience", "service", "efficiency", "performance", "emissions", "impact", "sustainability", "waste"],
        "explanation": [
          "1. experience → first blank\nJustification: Personalizing marketing improves customer ___. 'Experience' fits.\nWhy not other options: 'Service' possible but less holistic; 'performance' unrelated.",
          "2. efficiency → second blank\nJustification: Supply chain ___ improved by automated tools. 'Efficiency' fits.\nWhy not other options: 'Performance' broader; 'sustainability' relates to environment, not process.",
          "3. emissions → third blank\nJustification: Delivery vehicles produce carbon ___. 'Emissions' fits.\nWhy not other options: 'Waste' not specific to carbon; 'impact' comes later.",
          "4. impact → fourth blank\nJustification: Solutions reduce environmental ___. 'Impact' fits.\nWhy not other options: 'Sustainability' is broader; 'emissions' already used."
        ]
      },
      {
        "id": 23,
        "text": [
          "Advances in biotechnology are revolutionizing medicine and agriculture. Gene editing and molecular diagnostics allow for early detection and targeted treatment of diseases, improving patient ",
          " and outcomes. In agriculture, genetically modified crops can increase yield and resist pests, enhancing food ",
          " . Ethical considerations, regulatory frameworks, and public ",
          " are crucial to ensure safe application of biotechnology. Continuous research and investment foster innovation, strengthen global competitiveness, and contribute to scientific ",
          " and societal progress."
        ],
        "blanks": [
          { "correct": "care" },
          { "correct": "security" },
          { "correct": "awareness" },
          { "correct": "knowledge" }
        ],
        "draggableOptions": ["care", "treatment", "security", "safety", "awareness", "engagement", "knowledge", "innovation"],
        "explanation": [
          "1. care → first blank\nJustification: Biotechnology improves patient ___. 'Care' fits.\nWhy not other options: 'Treatment' narrower; 'safety' too general.",
          "2. security → second blank\nJustification: Crops increase food ___. 'Security' fits.\nWhy not other options: 'Safety' less comprehensive; 'innovation' unrelated here.",
          "3. awareness → third blank\nJustification: Ethical considerations require public ___. 'Awareness' fits.\nWhy not other options: 'Engagement' possible but less precise; 'knowledge' too technical.",
          "4. knowledge → fourth blank\nJustification: Research fosters scientific ___. 'Knowledge' fits.\nWhy not other options: 'Innovation' outcome; 'awareness' already used."
        ]
      },
      {
        "id": 24,
        "text": [
          "Climate adaptation strategies are essential for mitigating the effects of extreme weather events. Building resilient infrastructure, restoring wetlands, and implementing flood control systems reduce the risk of property ",
          " . Communities are educated on emergency preparedness, evacuation plans, and sustainable ",
          " practices. Monitoring systems track weather patterns to provide early warnings, helping protect lives and economic ",
          " . Government policies support disaster risk reduction and foster social ",
          " and collaboration among local stakeholders."
        ],
        "blanks": [
          { "correct": "damage" },
          { "correct": "agriculture" },
          { "correct": "loss" },
          { "correct": "cohesion" }
        ],
        "draggableOptions": ["damage", "loss", "agriculture", "farming", "cohesion", "unity", "prevention", "security"],
        "explanation": [
          "1. damage → first blank\nJustification: Resilient infrastructure reduces property ___. 'Damage' fits.\nWhy not other options: 'Loss' broader; 'prevention' action, not result.",
          "2. agriculture → second blank\nJustification: Sustainable ___ practices educated. 'Agriculture' fits.\nWhy not other options: 'Farming' possible but narrower; 'security' unrelated.",
          "3. loss → third blank\nJustification: Early warnings protect economic ___. 'Loss' fits.\nWhy not other options: 'Damage' used already; 'security' broader.",
          "4. cohesion → fourth blank\nJustification: Policies foster social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' possible but less formal; 'prevention' action, not social quality."
        ]
      },
      {
        "id": 25,
        "text": [
          "Digital literacy is essential in today’s information-driven society. Citizens need skills to evaluate online content, detect misinformation, and ensure data ",
          " . Educational programs teach safe password management, responsible social media use, and ethical online ",
          " . Enhancing digital literacy promotes informed decision-making, reduces cyber ",
          " , and fosters a culture of responsible ",
          " in digital environments."
        ],
        "blanks": [
          { "correct": "privacy" },
          { "correct": "behavior" },
          { "correct": "crime" },
          { "correct": "engagement" }
        ],
        "draggableOptions": ["privacy", "security", "behavior", "practice", "crime", "fraud", "engagement", "interaction"],
        "explanation": [
          "1. privacy → first blank\nJustification: Skills needed to ensure data ___. 'Privacy' fits.\nWhy not other options: 'Security' broader; 'protection' not listed.",
          "2. behavior → second blank\nJustification: Teach ethical online ___. 'Behavior' fits.\nWhy not other options: 'Practice' possible but less precise; 'interaction' too general.",
          "3. crime → third blank\nJustification: Literacy reduces cyber ___. 'Crime' fits.\nWhy not other options: 'Fraud' narrower; 'engagement' unrelated.",
          "4. engagement → fourth blank\nJustification: Fosters responsible digital ___. 'Engagement' fits.\nWhy not other options: 'Interaction' general; 'behavior' already used."
        ]
      },
      {
        "id": 26,
        "text": [
          "Sustainable tourism aims to minimize environmental impact while maximizing social and economic benefits. Eco-friendly accommodations, responsible wildlife encounters, and cultural heritage tours provide positive experiences without harming local ",
          " . Tourists are encouraged to reduce energy and water ",
          " , support local businesses, and participate in community projects. Governments implement policies to monitor environmental ",
          " and protect natural resources. Education and awareness campaigns ensure travelers understand ethical ",
          " and respect local customs and ecosystems."
        ],
        "blanks": [
          { "correct": "ecosystems" },
          { "correct": "consumption" },
          { "correct": "impact" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["ecosystems", "environment", "consumption", "use", "impact", "effect", "behavior", "ethics"],
        "explanation": [
          "1. ecosystems → first blank\nJustification: Tourism should not harm local ___. 'Ecosystems' fits.\nWhy not other options: 'Environment' broader; 'impact' is an effect, not location.",
          "2. consumption → second blank\nJustification: Reduce energy and water ___. 'Consumption' fits.\nWhy not other options: 'Use' possible but less formal; 'effect' unrelated.",
          "3. impact → third blank\nJustification: Policies monitor environmental ___. 'Impact' fits.\nWhy not other options: 'Effect' similar but 'impact' more common in policy context; 'consumption' already used.",
          "4. behavior → fourth blank\nJustification: Travelers should follow ethical ___. 'Behavior' fits.\nWhy not other options: 'Ethics' concept, not action; 'effect' unrelated."
        ]
      },
      {
        "id": 27,
        "text": [
          "Modern education emphasizes critical thinking, problem-solving, and collaborative skills. Interactive lessons, project-based learning, and technology-enhanced classrooms encourage active student ",
          " . Teachers provide guidance while promoting independent ",
          " and inquiry. Assessment systems evaluate both academic performance and personal ",
          " , such as creativity, resilience, and teamwork. Inclusive education policies ensure equal opportunities for students of all backgrounds, fostering social ",
          " and a supportive learning environment."
        ],
        "blanks": [
          { "correct": "engagement" },
          { "correct": "learning" },
          { "correct": "growth" },
          { "correct": "cohesion" }
        ],
        "draggableOptions": ["engagement", "participation", "learning", "development", "growth", "progress", "cohesion", "unity"],
        "explanation": [
          "1. engagement → first blank\nJustification: Lessons encourage active student ___. 'Engagement' fits.\nWhy not other options: 'Participation' narrower; 'learning' broader.",
          "2. learning → second blank\nJustification: Promote independent ___. 'Learning' fits.\nWhy not other options: 'Development' too general; 'progress' outcome-oriented.",
          "3. growth → third blank\nJustification: Assess personal ___. 'Growth' fits.\nWhy not other options: 'Development' similar but 'growth' more individual; 'progress' too general.",
          "4. cohesion → fourth blank\nJustification: Policies foster social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' possible but less formal; 'engagement' already used."
        ]
      },
      {
        "id": 28,
        "text": [
          "Global health initiatives focus on preventing disease outbreaks, improving sanitation, and promoting vaccination programs. Access to clean water and adequate nutrition enhances population ",
          " . Health workers educate communities on hygiene practices and early disease detection, reducing infection ",
          " . International cooperation strengthens healthcare system ",
          " and provides resources during emergencies. Awareness campaigns encourage responsible ",
          " and personal preventive measures to protect public health."
        ],
        "blanks": [
          { "correct": "well-being" },
          { "correct": "rates" },
          { "correct": "capacity" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["well-being", "health", "rates", "capacity", "behavior", "practices", "safety", "prevention"],
        "explanation": [
          "1. well-being → first blank\nJustification: Clean water and nutrition improve ___. 'Well-being' fits.\nWhy not other options: 'Health' possible but less specific; 'capacity' unrelated.",
          "2. rates → second blank\nJustification: Reduce infection ___. 'Rates' fits.\nWhy not other options: 'Capacity' unrelated; 'practices' action, not measurement.",
          "3. capacity → third blank\nJustification: Cooperation strengthens system ___. 'Capacity' fits.\nWhy not other options: 'Resources' broader; 'safety' outcome, not system property.",
          "4. behavior → fourth blank\nJustification: Campaigns encourage responsible ___. 'Behavior' fits.\nWhy not other options: 'Practices' possible but less formal; 'prevention' action, not habit."
        ]
      },
      {
        "id": 29,
        "text": [
          "Renewable water management is vital for communities facing drought and climate variability. Techniques such as rainwater collection, aquifer recharge, and efficient irrigation reduce water ",
          " and ensure supply for agriculture, industry, and households. Policymakers implement regulations to prevent water ",
          " and encourage equitable distribution. Public campaigns educate citizens on conservation and responsible consumption to foster environmental ",
          " and resilience against future water scarcity challenges."
        ],
        "blanks": [
          { "correct": "wastage" },
          { "correct": "pollution" },
          { "correct": "stewardship" },
          { "correct": "management" }
        ],
        "draggableOptions": ["wastage", "loss", "pollution", "stewardship", "management", "use", "consumption", "oversight"],
        "explanation": [
          "1. wastage → first blank\nJustification: Efficient techniques reduce water ___. 'Wastage' fits.\nWhy not other options: 'Loss' possible but less direct; 'use' action, not reduction.",
          "2. pollution → second blank\nJustification: Regulations prevent water ___. 'Pollution' fits.\nWhy not other options: 'Loss' narrower; 'oversight' general process.",
          "3. stewardship → third blank\nJustification: Campaigns foster environmental ___. 'Stewardship' fits.\nWhy not other options: 'Management' later; 'oversight' procedural.",
          "4. management → fourth blank\nJustification: Ensure resilience against scarcity. 'Management' fits.\nWhy not other options: 'Oversight' less formal; 'stewardship' already used."
        ]
      },
      {
        "id": 30,
        "text": [
          "Renewable transport solutions, including electric vehicles, bicycles, and public transit, aim to reduce carbon ",
          " and improve urban air quality. Governments incentivize adoption through subsidies, infrastructure investment, and policy ",
          " . Smart traffic management systems increase route ",
          " and reduce congestion. Awareness campaigns encourage responsible commuter ",
          " and the use of sustainable transport alternatives, contributing to environmental ",
          " and long-term urban livability."
        ],
        "blanks": [
          { "correct": "emissions" },
          { "correct": "measures" },
          { "correct": "efficiency" },
          { "correct": "behavior" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["emissions", "pollution", "measures", "actions", "efficiency", "productivity", "behavior", "conduct", "sustainability", "management"],
        "explanation": [
          "1. emissions → first blank\nJustification: Transport solutions reduce carbon ___. 'Emissions' fits.\nWhy not other options: 'Pollution' general; 'management' unrelated.",
          "2. measures → second blank\nJustification: Governments incentivize adoption through policy ___. 'Measures' fits.\nWhy not other options: 'Actions' possible but less formal; 'management' procedural.",
          "3. efficiency → third blank\nJustification: Smart systems improve route ___. 'Efficiency' fits.\nWhy not other options: 'Productivity' general; 'sustainability' broader.",
          "4. behavior → fourth blank\nJustification: Campaigns encourage responsible commuter ___. 'Behavior' fits.\nWhy not other options: 'Conduct' possible but less common; 'actions' too general.",
          "5. sustainability → fifth blank\nJustification: Contributes to environmental ___. 'Sustainability' fits.\nWhy not other options: 'Management' procedural; 'efficiency' already used."
        ]
      },

      {
        "id": 31,
        "text": [
          "Artificial intelligence is increasingly integrated into healthcare, transforming diagnostics, treatment planning, and patient monitoring. Machine learning algorithms analyze vast datasets to detect patterns, predict disease progression, and suggest personalized ",
          " . Remote monitoring devices collect real-time health data, enabling timely medical interventions and improving overall patient ",
          " . Ethical guidelines ensure responsible AI use, protect patient ",
          " , and prevent algorithmic bias. Continuous innovation in AI contributes to medical ",
          " and enhances the efficiency of healthcare systems worldwide."
        ],
        "blanks": [
          { "correct": "care" },
          { "correct": "outcomes" },
          { "correct": "privacy" },
          { "correct": "research" }
        ],
        "draggableOptions": ["care", "treatment", "outcomes", "results", "privacy", "security", "research", "knowledge"],
        "explanation": [
          "1. care → first blank\nJustification: AI suggests personalized ___. 'Care' fits the medical context.\nWhy not other options: 'Treatment' narrower; 'research' unrelated here.",
          "2. outcomes → second blank\nJustification: AI improves patient ___. 'Outcomes' fits.\nWhy not other options: 'Results' possible but less formal; 'care' already used.",
          "3. privacy → third blank\nJustification: Guidelines protect patient ___. 'Privacy' fits.\nWhy not other options: 'Security' narrower; 'knowledge' unrelated.",
          "4. research → fourth blank\nJustification: Innovation contributes to medical ___. 'Research' fits.\nWhy not other options: 'Knowledge' broader; 'care' already used."
        ]
      },
      {
        "id": 32,
        "text": [
          "Renewable energy technologies, such as solar panels, wind turbines, and hydroelectric systems, play a key role in reducing greenhouse gas ",
          " . Governments offer financial incentives and regulatory support to encourage investment in clean energy infrastructure. Technological advancements increase energy conversion ",
          " and storage efficiency, enabling better integration into national grids. Public awareness campaigns educate citizens about the benefits of renewable energy, promoting responsible consumption and environmental ",
          " . International cooperation and knowledge sharing accelerate the global transition toward low-carbon economies and long-term ",
          " ."
        ],
        "blanks": [
          { "correct": "emissions" },
          { "correct": "efficiency" },
          { "correct": "stewardship" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["emissions", "pollution", "efficiency", "performance", "stewardship", "management", "sustainability", "development"],
        "explanation": [
          "1. emissions → first blank\nJustification: Renewable energy reduces greenhouse gas ___. 'Emissions' fits.\nWhy not other options: 'Pollution' general; 'management' unrelated.",
          "2. efficiency → second blank\nJustification: Technology increases energy ___. 'Efficiency' fits.\nWhy not other options: 'Performance' possible but broader; 'stewardship' unrelated.",
          "3. stewardship → third blank\nJustification: Promotes environmental ___. 'Stewardship' fits.\nWhy not other options: 'Management' procedural; 'sustainability' used later.",
          "4. sustainability → fourth blank\nJustification: Long-term low-carbon transition ensures ___. 'Sustainability' fits.\nWhy not other options: 'Development' broader; 'efficiency' already used."
        ]
      },
      {
        "id": 33,
        "text": [
          "Urban transportation planning focuses on improving mobility, reducing congestion, and enhancing air quality. Integrated transit systems, cycling lanes, and pedestrian-friendly streets increase commuter ",
          " and encourage active travel. Advanced traffic management technologies improve route ",
          " , minimizing delays and fuel consumption. Environmental regulations limit vehicle emissions, reducing air pollution and carbon ",
          " . Community initiatives promote sustainable transport behavior, raising public ",
          " and support for low-emission alternatives."
        ],
        "blanks": [
          { "correct": "accessibility" },
          { "correct": "efficiency" },
          { "correct": "emissions" },
          { "correct": "awareness" }
        ],
        "draggableOptions": ["accessibility", "mobility", "efficiency", "productivity", "emissions", "pollution", "awareness", "engagement"],
        "explanation": [
          "1. accessibility → first blank\nJustification: Integrated transit increases commuter ___. 'Accessibility' fits.\nWhy not other options: 'Mobility' possible but less formal; 'efficiency' different concept.",
          "2. efficiency → second blank\nJustification: Traffic management improves route ___. 'Efficiency' fits.\nWhy not other options: 'Productivity' unrelated; 'mobility' already covered.",
          "3. emissions → third blank\nJustification: Regulations reduce vehicle ___. 'Emissions' fits.\nWhy not other options: 'Pollution' broader; 'awareness' unrelated.",
          "4. awareness → fourth blank\nJustification: Initiatives raise public ___. 'Awareness' fits.\nWhy not other options: 'Engagement' possible but less precise; 'efficiency' already used."
        ]
      },
      {
        "id": 34,
        "text": [
          "Water conservation is critical in regions facing scarcity due to climate change and population growth. Strategies such as rainwater harvesting, efficient irrigation systems, and wastewater recycling reduce water ",
          " and ensure availability for households, agriculture, and industry. Educational programs raise public ",
          " and encourage responsible water use. Policy frameworks regulate extraction and allocation, preventing overuse and environmental degradation. Community involvement fosters social ",
          " and resilience, ensuring sustainable management of freshwater resources."
        ],
        "blanks": [
          { "correct": "wastage" },
          { "correct": "awareness" },
          { "correct": "cohesion" },
          { "correct": "management" }
        ],
        "draggableOptions": ["wastage", "loss", "awareness", "education", "cohesion", "unity", "management", "stewardship"],
        "explanation": [
          "1. wastage → first blank\nJustification: Strategies reduce water ___. 'Wastage' fits.\nWhy not other options: 'Loss' possible but less formal; 'management' action, not reduction.",
          "2. awareness → second blank\nJustification: Programs raise public ___. 'Awareness' fits.\nWhy not other options: 'Education' possible but 'awareness' is broader; 'stewardship' is action-focused.",
          "3. cohesion → third blank\nJustification: Involvement fosters social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' possible but less formal; 'management' unrelated here.",
          "4. management → fourth blank\nJustification: Ensures sustainable freshwater ___. 'Management' fits.\nWhy not other options: 'Stewardship' similar but already implied; 'cohesion' used."
        ]
      },
      {
        "id": 35,
        "text": [
          "Climate-resilient agriculture combines innovative techniques and sustainable practices to maintain productivity under changing weather patterns. Crop rotation, soil conservation, and drought-resistant varieties increase yield while reducing environmental ",
          " . Farmers adopt water-efficient irrigation and renewable energy solutions to optimize resource ",
          " . Education programs raise farmer ",
          " and understanding of climate risks. Policy support, market incentives, and technological access strengthen agricultural ",
          " and rural livelihoods."
        ],
        "blanks": [
          { "correct": "impact" },
          { "correct": "use" },
          { "correct": "awareness" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["impact", "effect", "use", "consumption", "awareness", "knowledge", "resilience", "capacity"],
        "explanation": [
          "1. impact → first blank\nJustification: Techniques reduce environmental ___. 'Impact' fits.\nWhy not other options: 'Effect' similar but 'impact' formal; 'use' unrelated.",
          "2. use → second blank\nJustification: Optimize resource ___. 'Use' fits.\nWhy not other options: 'Consumption' possible but less direct; 'resilience' outcome.",
          "3. awareness → third blank\nJustification: Programs raise farmer ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' possible but 'awareness' emphasizes perception and understanding.",
          "4. resilience → fourth blank\nJustification: Strengthen agricultural ___. 'Resilience' fits.\nWhy not other options: 'Capacity' possible but less specific; 'impact' already used."
        ]
      },
      {
        "id": 36,
        "text": [
          "Public health campaigns promote vaccination, hygiene, and nutrition to prevent disease and improve overall population ",
          " . Mobile health units deliver care to remote areas, while telemedicine enhances medical ",
          " . Policy frameworks monitor outbreaks and ensure adequate resource ",
          " during emergencies. Community participation strengthens social ",
          " , empowering citizens to take proactive measures for disease prevention and well-being."
        ],
        "blanks": [
          { "correct": "well-being" },
          { "correct": "access" },
          { "correct": "allocation" },
          { "correct": "cohesion" }
        ],
        "draggableOptions": ["well-being", "health", "access", "availability", "allocation", "distribution", "cohesion", "unity"],
        "explanation": [
          "1. well-being → first blank\nJustification: Campaigns improve population ___. 'Well-being' fits.\nWhy not other options: 'Health' general; 'access' unrelated here.",
          "2. access → second blank\nJustification: Telemedicine enhances medical ___. 'Access' fits.\nWhy not other options: 'Availability' possible but less personal; 'allocation' refers to resources, not patient access.",
          "3. allocation → third blank\nJustification: Ensure adequate resource ___. 'Allocation' fits.\nWhy not other options: 'Distribution' similar but 'allocation' more precise; 'access' already used.",
          "4. cohesion → fourth blank\nJustification: Community participation strengthens social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' less formal; 'well-being' already used."
        ]
      },
      {
        "id": 37,
        "text": [
          "Digital innovation drives economic growth, competitiveness, and productivity. Companies adopt cloud computing, data analytics, and automation to streamline operations and improve decision-making. Investments in cybersecurity protect sensitive data and ensure operational ",
          " . Technology adoption enhances workforce skills, encourages continuous ",
          " , and increases overall business ",
          " . Governments support innovation through policies, research funding, and public-private partnerships, fostering knowledge exchange and long-term ",
          " ."
        ],
        "blanks": [
          { "correct": "resilience" },
          { "correct": "learning" },
          { "correct": "efficiency" },
          { "correct": "growth" }
        ],
        "draggableOptions": ["resilience", "security", "learning", "training", "efficiency", "productivity", "growth", "development"],
        "explanation": [
          "1. resilience → first blank\nJustification: Cybersecurity ensures operational ___. 'Resilience' fits.\nWhy not other options: 'Security' narrower; 'efficiency' unrelated here.",
          "2. learning → second blank\nJustification: Technology adoption encourages continuous ___. 'Learning' fits.\nWhy not other options: 'Training' narrower; 'development' broader.",
          "3. efficiency → third blank\nJustification: Improves overall business ___. 'Efficiency' fits.\nWhy not other options: 'Productivity' similar but 'efficiency' emphasizes processes; 'growth' outcome.",
          "4. growth → fourth blank\nJustification: Policies foster long-term ___. 'Growth' fits.\nWhy not other options: 'Development' broader; 'learning' already used."
        ]
      },
      {
        "id": 38,
        "text": [
          "Marine conservation efforts aim to protect ocean biodiversity and maintain ecosystem services. Marine protected areas, sustainable fishing regulations, and pollution reduction initiatives preserve critical habitats and prevent overexploitation. Scientific monitoring evaluates fish stocks and coral health, guiding adaptive management and policy ",
          " . Public education raises environmental ",
          " and encourages responsible behavior. International agreements facilitate collaborative research, strengthen enforcement, and foster collective ",
          " to address global marine challenges."
        ],
        "blanks": [
          { "correct": "decisions" },
          { "correct": "awareness" },
          { "correct": "commitment" }
        ],
        "draggableOptions": ["decisions", "policies", "awareness", "knowledge", "commitment", "cooperation", "engagement", "strategy"],
        "explanation": [
          "1. decisions → first blank\nJustification: Monitoring guides adaptive management ___. 'Decisions' fits.\nWhy not other options: 'Policies' possible but less direct; 'strategy' outcome, not process.",
          "2. awareness → second blank\nJustification: Education raises public ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' more technical; 'engagement' action-focused.",
          "3. commitment → third blank\nJustification: Agreements foster collective ___. 'Commitment' fits.\nWhy not other options: 'Cooperation' process; 'engagement' less formal."
        ]
      },
      {
        "id": 39,
        "text": [
          "Sustainable urban development integrates environmental, social, and economic objectives. Energy-efficient buildings, green spaces, and multimodal transport reduce carbon ",
          " and enhance quality of life. Inclusive planning ensures access to housing, education, and healthcare, fostering social ",
          " . Waste management, recycling programs, and circular economy initiatives reduce environmental ",
          " and promote resource efficiency. Collaboration among government, private sector, and communities strengthens governance and long-term ",
          " ."
        ],
        "blanks": [
          { "correct": "emissions" },
          { "correct": "cohesion" },
          { "correct": "impact" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["emissions", "pollution", "cohesion", "unity", "impact", "effect", "sustainability", "development"],
        "explanation": [
          "1. emissions → first blank\nJustification: Energy-efficient measures reduce carbon ___. 'Emissions' fits.\nWhy not other options: 'Pollution' general; 'impact' different meaning.",
          "2. cohesion → second blank\nJustification: Inclusive planning fosters social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' possible but less formal; 'sustainability' unrelated here.",
          "3. impact → third blank\nJustification: Recycling reduces environmental ___. 'Impact' fits.\nWhy not other options: 'Effect' similar but 'impact' formal; 'sustainability' later.",
          "4. sustainability → fourth blank\nJustification: Collaboration ensures long-term ___. 'Sustainability' fits.\nWhy not other options: 'Development' broader; 'impact' already used."
        ]
      },
      {
        "id": 40,
        "text": [
          "Food security depends on sustainable agricultural practices, equitable distribution, and resilient supply chains. Crop diversification, soil enrichment, and climate-smart techniques increase production while reducing environmental ",
          " . Policy support ensures fair access to markets, stabilizes prices, and encourages smallholder ",
          " . Technological innovation improves storage, transportation, and food ",
          " , minimizing waste and post-harvest losses. Education programs raise farmer ",
          " and promote informed decision-making, enhancing community resilience and long-term food ",
          " ."
        ],
        "blanks": [
          { "correct": "impact" },
          { "correct": "livelihoods" },
          { "correct": "security" },
          { "correct": "awareness" },
          { "correct": "security" }
        ],
        "draggableOptions": ["impact", "effect", "livelihoods", "income", "security", "safety", "awareness", "knowledge"],
        "explanation": [
          "1. impact → first blank\nJustification: Practices reduce environmental ___. 'Impact' fits.\nWhy not other options: 'Effect' similar but less formal; 'security' unrelated here.",
          "2. livelihoods → second blank\nJustification: Policies support smallholder ___. 'Livelihoods' fits.\nWhy not other options: 'Income' narrower; 'security' different context.",
          "3. security → third blank\nJustification: Innovation improves food ___. 'Security' fits.\nWhy not other options: 'Safety' different; 'awareness' unrelated here.",
          "4. awareness → fourth blank\nJustification: Programs raise farmer ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' technical; 'security' used elsewhere.",
          "5. security → fifth blank\nJustification: Enhances long-term food ___. 'Security' fits.\nWhy not other options: 'Safety' narrower; 'livelihoods' already used."
        ]
      },

      {
        "id": 41,
        "text": [
          "Global supply chains are increasingly interconnected, relying on logistics, transportation, and trade networks to deliver goods efficiently. Disruptions such as natural disasters, political instability, or pandemics can impact supply chain ",
          " , causing delays, increased costs, and product shortages. Companies adopt risk management strategies, diversify suppliers, and implement digital tracking systems to improve ",
          " and maintain operational continuity. Regulatory compliance ensures legal and ethical practices, while innovation and technology adoption enhance productivity, competitiveness, and long-term ",
          " ."
        ],
        "blanks": [
          { "correct": "resilience" },
          { "correct": "efficiency" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["resilience", "stability", "efficiency", "productivity", "sustainability", "growth", "security"],
        "explanation": [
          "1. resilience → first blank\nJustification: Disruptions impact supply chain ___. 'Resilience' fits.\nWhy not other options: 'Stability' possible but less dynamic; 'security' not exact meaning.",
          "2. efficiency → second blank\nJustification: Digital tracking improves operational ___. 'Efficiency' fits.\nWhy not other options: 'Productivity' possible but broader; 'growth' outcome, not process.",
          "3. sustainability → third blank\nJustification: Innovation ensures long-term ___. 'Sustainability' fits.\nWhy not other options: 'Growth' is narrower; 'efficiency' already used."
        ]
      },
      {
        "id": 42,
        "text": [
          "Mental health awareness is critical for individual well-being and social development. Stress management programs, counseling services, and community support networks provide tools to enhance psychological ",
          " and resilience. Workplace initiatives promote healthy work-life balance, while school programs teach emotional intelligence, coping strategies, and social ",
          " . Reducing stigma, promoting open conversations, and increasing access to professional support improves overall mental health outcomes and community ",
          " ."
        ],
        "blanks": [
          { "correct": "health" },
          { "correct": "skills" },
          { "correct": "cohesion" }
        ],
        "draggableOptions": ["health", "well-being", "skills", "knowledge", "cohesion", "unity", "resilience"],
        "explanation": [
          "1. health → first blank\nJustification: Programs enhance psychological ___. 'Health' fits.\nWhy not other options: 'Well-being' broader but 'health' more specific; 'resilience' already covered later.",
          "2. skills → second blank\nJustification: School programs teach emotional ___. 'Skills' fits.\nWhy not other options: 'Knowledge' general; 'cohesion' unrelated here.",
          "3. cohesion → third blank\nJustification: Open support improves community ___. 'Cohesion' fits.\nWhy not other options: 'Unity' possible but less formal; 'health' already used."
        ]
      },
      {
        "id": 43,
        "text": [
          "Renewable transportation initiatives reduce reliance on fossil fuels, decrease carbon emissions, and improve air quality. Electric vehicles, public transit networks, and cycling infrastructure increase accessibility and commuter ",
          " . Charging stations and maintenance facilities support technological adoption, while financial incentives encourage public investment. Policy frameworks ensure safety standards, emissions regulation, and equitable access, promoting environmental ",
          " and community ",
          " . Urban planning integrates multimodal transport, walkable neighborhoods, and green spaces to strengthen resilience and long-term "
        ],
        "blanks": [
          { "correct": "mobility" },
          { "correct": "stewardship" },
          { "correct": "cohesion" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["mobility", "accessibility", "stewardship", "management", "cohesion", "unity", "sustainability", "development"],
        "explanation": [
          "1. mobility → first blank\nJustification: Initiatives increase commuter ___. 'Mobility' fits.\nWhy not other options: 'Accessibility' possible but 'mobility' broader.",
          "2. stewardship → second blank\nJustification: Policies promote environmental ___. 'Stewardship' fits.\nWhy not other options: 'Management' narrower; 'sustainability' used later.",
          "3. cohesion → third blank\nJustification: Promotes social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' less formal; 'stewardship' already used.",
          "4. sustainability → fourth blank\nJustification: Long-term planning ensures ___. 'Sustainability' fits.\nWhy not other options: 'Development' broader; 'cohesion' already used."
        ]
      },
      {
        "id": 44,
        "text": [
          "Ocean plastic pollution threatens marine life, ecosystems, and human health. Single-use plastics, improper disposal, and industrial waste accumulate in oceans, creating environmental ",
          " and harming species. International agreements, recycling programs, and public campaigns aim to reduce plastic production, promote sustainable alternatives, and raise public ",
          " . Scientific monitoring tracks microplastic concentrations and evaluates the effectiveness of mitigation measures, guiding policy ",
          " and collective ",
          " toward ocean protection."
        ],
        "blanks": [
          { "correct": "impact" },
          { "correct": "awareness" },
          { "correct": "decisions" },
          { "correct": "commitment" }
        ],
        "draggableOptions": ["impact", "effect", "awareness", "knowledge", "decisions", "policies", "commitment", "cooperation"],
        "explanation": [
          "1. impact → first blank\nJustification: Pollution creates environmental ___. 'Impact' fits.\nWhy not other options: 'Effect' similar but 'impact' formal; 'decisions' unrelated.",
          "2. awareness → second blank\nJustification: Campaigns raise public ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' more technical; 'commitment' action-focused.",
          "3. decisions → third blank\nJustification: Monitoring guides policy ___. 'Decisions' fits.\nWhy not other options: 'Policies' possible but less direct; 'commitment' attitude, not action.",
          "4. commitment → fourth blank\nJustification: Collective ___. 'Commitment' fits.\nWhy not other options: 'Cooperation' process; 'decisions' already used."
        ]
      },
      {
        "id": 45,
        "text": [
          "Biodiversity conservation protects ecosystems, species, and genetic diversity. Habitat restoration, anti-poaching measures, and sustainable land use reduce threats and support population recovery. Scientific research identifies vulnerable species, monitors trends, and informs adaptive management and policy ",
          " . Environmental education fosters public ",
          " and encourages responsible behavior. Collaboration across nations enhances resource allocation, funding, and technical ",
          " , promoting long-term ecological ",
          " ."
        ],
        "blanks": [
          { "correct": "decisions" },
          { "correct": "awareness" },
          { "correct": "expertise" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["decisions", "policies", "awareness", "knowledge", "expertise", "skills", "sustainability", "stewardship"],
        "explanation": [
          "1. decisions → first blank\nJustification: Research informs policy ___. 'Decisions' fits.\nWhy not other options: 'Policies' possible but less precise; 'awareness' unrelated here.",
          "2. awareness → second blank\nJustification: Education fosters public ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' technical; 'expertise' professional.",
          "3. expertise → third blank\nJustification: Collaboration enhances technical ___. 'Expertise' fits.\nWhy not other options: 'Skills' possible but broader; 'stewardship' attitude, not technical support.",
          "4. sustainability → fourth blank\nJustification: Promotes long-term ecological ___. 'Sustainability' fits.\nWhy not other options: 'Stewardship' narrower; 'expertise' already used."
        ]
      },
      {
        "id": 46,
        "text": [
          "Urban green spaces improve air quality, reduce heat islands, and enhance mental health. Parks, tree-lined streets, and community gardens provide recreational opportunities and encourage physical activity, contributing to overall ",
          " . Strategic urban planning integrates biodiversity, green roofs, and permeable surfaces to reduce flooding, manage stormwater, and increase ecological ",
          " . Community participation ensures maintenance, social ",
          " , and public engagement. Long-term environmental ",
          " requires continuous monitoring, investment, and adaptive management."
        ],
        "blanks": [
          { "correct": "well-being" },
          { "correct": "resilience" },
          { "correct": "cohesion" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["well-being", "health", "resilience", "strength", "cohesion", "unity", "sustainability", "management"],
        "explanation": [
          "1. well-being → first blank\nJustification: Green spaces contribute to overall ___. 'Well-being' fits.\nWhy not other options: 'Health' general; 'resilience' different focus.",
          "2. resilience → second blank\nJustification: Urban planning increases ecological ___. 'Resilience' fits.\nWhy not other options: 'Strength' vague; 'sustainability' used later.",
          "3. cohesion → third blank\nJustification: Participation strengthens social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' less formal; 'well-being' already used.",
          "4. sustainability → fourth blank\nJustification: Long-term environmental ___. 'Sustainability' fits.\nWhy not other options: 'Management' process-focused; 'resilience' already used."
        ]
      },
      {
        "id": 47,
        "text": [
          "Global warming has caused glaciers to melt, sea levels to rise, and weather patterns to become unpredictable. Climate scientists study temperature records, ice cores, and ocean currents to understand changes and predict future impacts on ecosystems and human ",
          " . Renewable energy adoption, reforestation, and emission reduction strategies mitigate these impacts. Policy interventions regulate greenhouse gas emissions, support climate adaptation, and encourage international ",
          " . Public engagement campaigns raise awareness, foster behavior change, and promote collective ",
          " toward climate action."
        ],
        "blanks": [
          { "correct": "societies" },
          { "correct": "cooperation" },
          { "correct": "commitment" }
        ],
        "draggableOptions": ["societies", "communities", "cooperation", "collaboration", "commitment", "engagement", "awareness"],
        "explanation": [
          "1. societies → first blank\nJustification: Impacts affect human ___. 'Societies' fits.\nWhy not other options: 'Communities' narrower; 'awareness' unrelated.",
          "2. cooperation → second blank\nJustification: Policies encourage international ___. 'Cooperation' fits.\nWhy not other options: 'Collaboration' possible but less formal; 'commitment' attitude.",
          "3. commitment → third blank\nJustification: Campaigns foster collective ___. 'Commitment' fits.\nWhy not other options: 'Engagement' possible but less strong; 'cooperation' already used."
        ]
      },
      {
        "id": 48,
        "text": [
          "Digital literacy is essential for effective participation in modern society. Skills in online research, cybersecurity, and information evaluation empower individuals to navigate digital environments safely and responsibly. Education programs enhance critical thinking, problem-solving, and digital ",
          " . Public awareness campaigns encourage ethical behavior, data protection, and privacy, promoting online ",
          " . Equitable access to technology bridges the digital divide and strengthens social ",
          " , enabling communities to benefit from technological advancements."
        ],
        "blanks": [
          { "correct": "competence" },
          { "correct": "safety" },
          { "correct": "cohesion" }
        ],
        "draggableOptions": ["competence", "skills", "safety", "security", "cohesion", "unity", "knowledge"],
        "explanation": [
          "1. competence → first blank\nJustification: Programs enhance digital ___. 'Competence' fits.\nWhy not other options: 'Skills' general; 'knowledge' less applied.",
          "2. safety → second blank\nJustification: Campaigns promote online ___. 'Safety' fits.\nWhy not other options: 'Security' technical; 'competence' already used.",
          "3. cohesion → third blank\nJustification: Access strengthens social ___. 'Cohesion' fits.\nWhy not other options: 'Unity' less formal; 'safety' already used."
        ]
      },
      {
        "id": 49,
        "text": [
          "Renewable agriculture practices, such as agroforestry, organic farming, and permaculture, support soil health, biodiversity, and climate resilience. Crop diversification reduces vulnerability to pests and environmental stress. Farmers adopt water-efficient irrigation, composting, and natural pest control to increase productivity while reducing environmental ",
          " . Education programs raise farmer ",
          " and enable informed decision-making. Policy support provides incentives, market access, and research funding, promoting long-term agricultural ",
          " and community ",
          " ."
        ],
        "blanks": [
          { "correct": "impact" },
          { "correct": "awareness" },
          { "correct": "sustainability" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["impact", "effect", "awareness", "knowledge", "sustainability", "development", "resilience", "capacity"],
        "explanation": [
          "1. impact → first blank\nJustification: Practices reduce environmental ___. 'Impact' fits.\nWhy not other options: 'Effect' similar but less formal; 'sustainability' used later.",
          "2. awareness → second blank\nJustification: Programs raise farmer ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' technical; 'resilience' outcome.",
          "3. sustainability → third blank\nJustification: Policies promote long-term ___. 'Sustainability' fits.\nWhy not other options: 'Development' broader; 'resilience' already used.",
          "4. resilience → fourth blank\nJustification: Community benefits from long-term ___. 'Resilience' fits.\nWhy not other options: 'Capacity' possible but less specific; 'awareness' already used."
        ]
      },
      {
        "id": 50,
        "text": [
          "Energy efficiency in buildings reduces costs, carbon emissions, and energy consumption. Smart thermostats, LED lighting, and insulation improvements increase energy ",
          " , comfort, and overall building performance. Renewable energy integration, such as solar panels and wind turbines, supports environmental ",
          " . Policies, incentives, and certifications promote sustainable construction practices and raise public ",
          " , while technological innovation drives continuous improvement and long-term ",
          " in the building sector."
        ],
        "blanks": [
          { "correct": "efficiency" },
          { "correct": "stewardship" },
          { "correct": "awareness" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["efficiency", "performance", "stewardship", "management", "awareness", "knowledge", "sustainability", "development"],
        "explanation": [
          "1. efficiency → first blank\nJustification: Measures increase energy ___. 'Efficiency' fits.\nWhy not other options: 'Performance' broader; 'stewardship' unrelated here.",
          "2. stewardship → second blank\nJustification: Renewable energy supports environmental ___. 'Stewardship' fits.\nWhy not other options: 'Management' narrower; 'sustainability' used later.",
          "3. awareness → third blank\nJustification: Policies raise public ___. 'Awareness' fits.\nWhy not other options: 'Knowledge' technical; 'sustainability' already later.",
          "4. sustainability → fourth blank\nJustification: Drives long-term ___. 'Sustainability' fits.\nWhy not other options: 'Development' broader; 'efficiency' already used."
        ]
      },
      {
        "id": 51,
        "text": [
          "In the late 20th century, many countries began to notice a shift in global economic trends. Rapid technological advances, increased international trade, and evolving financial systems led to a marked ",
          " in market dynamics. Economists observed that traditional industries were being replaced by emerging sectors, and this shift demanded a new set of skills from the workforce. Governments implemented policies to encourage ",
          " and entrepreneurship. Additionally, international organizations promoted ",
          " to facilitate cross-border collaborations and knowledge sharing. The social implications were equally significant, as communities had to adapt to changing employment patterns and ensure ",
          " among citizens during times of economic transformation."
        ],
        "blanks": [
          { "correct": "change" },
          { "correct": "innovation" },
          { "correct": "cooperation" },
          { "correct": "equity" }
        ],
        "draggableOptions": ["change", "stability", "innovation", "tradition", "cooperation", "competition", "equity", "poverty"],
        "explanation": [
          "1. change → first blank\nJustification: The sentence talks about a shift in global economic trends, indicating a transformation. 'Change' fits perfectly.\nWhy not other options: 'Stability' or 'tradition' contradict the idea of a shift.",
          "2. innovation → second blank\nJustification: Emerging sectors required new skills, so governments promoted 'innovation' and entrepreneurship.\nWhy not other options: 'Tradition' does not encourage new skills; 'competition' does not fully capture government support.",
          "3. cooperation → third blank\nJustification: International organizations promoted 'cooperation' to facilitate cross-border collaboration.\nWhy not other options: 'Competition' would hinder collaboration; 'innovation' is already used.",
          "4. equity → fourth blank\nJustification: Communities needed to ensure 'equity' among citizens during economic change.\nWhy not other options: 'Poverty' is a negative outcome; 'stability' is less precise here."
        ]
      },
      {
        "id": 52,
        "text": [
          "Urbanization has accelerated globally over the last century, leading to profound changes in social, economic, and environmental structures. Cities expanded rapidly, causing ",
          " in housing, transportation, and public services. Policymakers responded by investing in sustainable urban planning and introducing regulations to control ",
          " growth. Environmental considerations became critical, with initiatives to reduce carbon emissions, increase green spaces, and improve water and air ",
          ". Socially, governments sought to foster community engagement and ",
          " to ensure that rapid urban growth did not marginalize vulnerable populations."
        ],
        "blanks": [
          { "correct": "pressure" },
          { "correct": "unplanned" },
          { "correct": "quality" },
          { "correct": "participation" }
        ],
        "draggableOptions": ["pressure", "peace", "unplanned", "controlled", "quality", "quantity", "participation", "isolation"],
        "explanation": [
          "1. pressure → first blank\nJustification: Rapid urban expansion caused 'pressure' on housing, transportation, and services.\nWhy not other options: 'Peace' is unrelated; 'isolation' does not fit context.",
          "2. unplanned → second blank\nJustification: Policies were needed to control 'unplanned' growth.\nWhy not other options: 'Controlled' is the goal, not the problem itself.",
          "3. quality → third blank\nJustification: Initiatives aimed to improve water and air 'quality'.\nWhy not other options: 'Quantity' does not convey environmental concern.",
          "4. participation → fourth blank\nJustification: Governments encouraged 'participation' to engage communities.\nWhy not other options: 'Isolation' is the opposite effect; 'peace' is too general."
        ]
      },
      {
        "id": 53,
        "text": [
          "Renewable energy adoption has surged in response to environmental concerns and the need for energy security. Solar, wind, and hydroelectric power have become more accessible, but technological and financial ",
          " remain barriers to widespread implementation. Governments provide incentives to promote ",
          " development and reduce reliance on fossil fuels. Research institutions focus on improving ",
          " efficiency and storage capabilities, while private companies invest in infrastructure and innovation. The shift toward renewables also affects employment, creating opportunities in manufacturing, installation, and ",
          ". Public awareness campaigns aim to cultivate environmental consciousness and encourage ",
          " among citizens."
        ],
        "blanks": [
          { "correct": "constraints" },
          { "correct": "technology" },
          { "correct": "energy" },
          { "correct": "maintenance" },
          { "correct": "participation" }
        ],
        "draggableOptions": ["constraints", "opportunities", "technology", "energy", "maintenance", "employment", "participation", "ignorance"],
        "explanation": [
          "1. constraints → first blank\nJustification: Barriers are described, making 'constraints' appropriate.\nWhy not other options: 'Opportunities' is the opposite meaning; 'employment' does not fit context.",
          "2. technology → second blank\nJustification: Incentives promote 'technology' development.\nWhy not other options: 'Energy' is too broad; 'maintenance' is not promoted by incentives.",
          "3. energy → third blank\nJustification: Research improves 'energy' efficiency and storage.\nWhy not other options: 'Technology' is already used; 'employment' is unrelated here.",
          "4. maintenance → fourth blank\nJustification: Companies invest in infrastructure and 'maintenance'.\nWhy not other options: 'Participation' is social, not technical; 'technology' already used.",
          "5. participation → fifth blank\nJustification: Public awareness campaigns encourage 'participation'.\nWhy not other options: 'Employment' is economic; 'constraints' is negative."
        ]
      },
      {
        "id": 54,
        "text": [
          "The study of ancient civilizations relies on the analysis of artifacts, architecture, and written records. Historians seek to reconstruct past societies and understand the evolution of political systems, religious beliefs, and ",
          ". Archaeological excavations reveal insights into daily life, trade networks, and agricultural practices, often highlighting the ",
          " between social classes. New technologies, including satellite imagery and 3D modeling, allow researchers to examine sites without extensive physical disturbance, and advanced dating methods provide greater ",
          ". Such comprehensive study fosters ",
          " and appreciation of human history among scholars and the public."
        ],
        "blanks": [
          { "correct": "culture" },
          { "correct": "inequality" },
          { "correct": "accuracy" },
          { "correct": "understanding" }
        ],
        "draggableOptions": ["culture", "inequality", "accuracy", "understanding", "ignorance", "trade", "technology", "communication"],
        "explanation": [
          "1. culture → first blank\nJustification: Historians study political systems, religion, and 'culture'.\nWhy not other options: 'Trade' is specific; 'technology' is modern and unrelated.",
          "2. inequality → second blank\nJustification: Excavations reveal disparities between social classes, i.e., 'inequality'.\nWhy not other options: 'Trade' or 'communication' are not contrasts between classes.",
          "3. accuracy → third blank\nJustification: Advanced dating methods improve 'accuracy'.\nWhy not other options: 'Understanding' is a result, not a measurement of method precision.",
          "4. understanding → fourth blank\nJustification: Comprehensive study fosters 'understanding'.\nWhy not other options: 'Ignorance' is the opposite; 'accuracy' is methodological, not conceptual."
        ]
      },
      {
        "id": 55,
        "text": [
          "Global health initiatives have increasingly emphasized the importance of preventive care, vaccination campaigns, and education to reduce the spread of infectious diseases. The World Health Organization collaborates with national governments to strengthen healthcare systems and provide resources to regions with limited access. Challenges include insufficient ",
          " infrastructure, shortage of trained medical professionals, and cultural resistance to medical interventions. Strategies to improve outcomes focus on community ",
          ", awareness campaigns, and the provision of essential medicines. International aid and technological innovations, such as telemedicine, also play a vital role in ",
          " health services and improving patient care. Such coordinated efforts aim to achieve ",
          " in global health and reduce mortality rates worldwide."
        ],
        "blanks": [
          { "correct": "healthcare" },
          { "correct": "engagement" },
          { "correct": "expanding" },
          { "correct": "equity" }
        ],
        "draggableOptions": ["healthcare", "education", "engagement", "participation", "expanding", "reducing", "equity", "inequality"],
        "explanation": [
          "1. healthcare → first blank\nJustification: Challenges include insufficient 'healthcare' infrastructure.\nWhy not other options: 'Education' is related but not the system infrastructure itself.",
          "2. engagement → second blank\nJustification: Strategies focus on community 'engagement'.\nWhy not other options: 'Participation' is similar but less active; 'education' is a method rather than community involvement.",
          "3. expanding → third blank\nJustification: Telemedicine and aid help in 'expanding' services.\nWhy not other options: 'Reducing' is opposite; 'equity' is an outcome, not a process.",
          "4. equity → fourth blank\nJustification: Efforts aim to achieve 'equity' in global health.\nWhy not other options: 'Inequality' is negative; 'expanding' refers to service provision, not fairness."
        ]
      },

      {
        "id": 56,
        "text": [
          "Modern transportation systems have transformed the way people and goods move across cities and countries. The expansion of highways, railways, and airports has led to increased ",
          " in commerce and social mobility. However, rapid development has also caused environmental ",
          ", congestion, and increased carbon emissions. Governments are now investing in public transportation, electric vehicles, and sustainable infrastructure to mitigate these challenges. Urban planners emphasize the need for integrated transport networks that reduce travel time and promote ",
          " while maintaining safety standards. Citizens are encouraged to adopt eco-friendly travel habits and participate in community initiatives to improve local ",
          " and quality of life."
        ],
        "blanks": [
          { "correct": "efficiency" },
          { "correct": "pollution" },
          { "correct": "connectivity" },
          { "correct": "mobility" },
          { "correct": "environment" }
        ],
        "draggableOptions": ["efficiency", "pollution", "connectivity", "mobility", "environment", "traffic", "transportation", "safety"],
        "explanation": [
          "1. efficiency → first blank\nJustification: Transportation systems improve 'efficiency' in commerce and mobility.\nWhy not other options: 'Pollution' is negative; 'traffic' is a consequence, not a benefit.",
          "2. pollution → second blank\nJustification: Rapid development causes environmental 'pollution'.\nWhy not other options: 'Safety' or 'connectivity' do not reflect environmental impact.",
          "3. connectivity → third blank\nJustification: Integrated networks promote 'connectivity' across urban areas.\nWhy not other options: 'Mobility' is broader; 'efficiency' already used.",
          "4. mobility → fourth blank\nJustification: Sustainable transport improves social 'mobility'.\nWhy not other options: 'Environment' is impacted but not the social benefit.",
          "5. environment → fifth blank\nJustification: Citizens adopt habits to improve local 'environment'.\nWhy not other options: 'Safety' is important but the text emphasizes ecological aspects."
        ]
      },
      {
        "id": 57,
        "text": [
          "Digital communication has reshaped personal, professional, and educational interactions worldwide. Email, instant messaging, and video conferencing allow rapid exchange of information, increasing ",
          " and collaboration across diverse teams. At the same time, challenges such as cybersecurity threats, misinformation, and data privacy concerns have arisen. Organizations invest in robust security measures and training programs to enhance ",
          " literacy. Additionally, educators emphasize critical thinking and responsible use of technology to foster ",
          " and maintain social cohesion. Research indicates that successful digital engagement depends on both technical competence and ethical ",
          " to ensure meaningful participation and trust in online communities."
        ],
        "blanks": [
          { "correct": "efficiency" },
          { "correct": "digital" },
          { "correct": "communication" },
          { "correct": "responsibility" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["efficiency", "digital", "communication", "responsibility", "behavior", "awareness", "trust", "skills"],
        "explanation": [
          "1. efficiency → first blank\nJustification: Rapid information exchange increases 'efficiency'.\nWhy not other options: 'Trust' is important but not the immediate effect; 'skills' are needed but result, not effect.",
          "2. digital → second blank\nJustification: Organizations improve 'digital' literacy.\nWhy not other options: 'Communication' is broader; 'behavior' is an ethical component, not skill.",
          "3. communication → third blank\nJustification: Critical thinking and technology foster 'communication'.\nWhy not other options: 'Responsibility' is ethical, not interactive skill; 'awareness' is more general.",
          "4. responsibility → fourth blank\nJustification: Ethics and critical thinking foster 'responsibility'.\nWhy not other options: 'Behavior' is outcome, not goal; 'digital' already used.",
          "5. behavior → fifth blank\nJustification: Ethical 'behavior' ensures trust and meaningful online engagement.\nWhy not other options: 'Awareness' is abstract; 'communication' already covered."
        ]
      },
      {
        "id": 58,
        "text": [
          "Environmental conservation has become a global priority due to increasing threats from climate change, deforestation, and pollution. Governments, NGOs, and communities collaborate to implement initiatives that protect biodiversity and natural resources. Policies encourage sustainable agriculture, reforestation, and waste ",
          " management, while technological innovations support renewable energy, water purification, and eco-friendly manufacturing. Public participation and education programs raise awareness about conservation ethics and the importance of ",
          " resources responsibly. International agreements, such as the Paris Climate Accord, aim to reduce greenhouse gas emissions and promote ",
          " among nations. Conservation efforts not only preserve ecosystems but also contribute to human health, economic stability, and overall ",
          " of life."
        ],
        "blanks": [
          { "correct": "disposal" },
          { "correct": "using" },
          { "correct": "cooperation" },
          { "correct": "quality" },
          { "correct": "resources" }
        ],
        "draggableOptions": ["disposal", "using", "cooperation", "quality", "resources", "pollution", "technology", "efficiency"],
        "explanation": [
          "1. disposal → first blank\nJustification: Waste 'disposal' management is critical in environmental initiatives.\nWhy not other options: 'Pollution' is a problem, not a management practice; 'technology' is supportive, not disposal.",
          "2. using → second blank\nJustification: Education programs raise awareness about 'using' resources responsibly.\nWhy not other options: 'Resources' is object, not action; 'cooperation' is social, not individual behavior.",
          "3. cooperation → third blank\nJustification: International agreements require 'cooperation' among nations.\nWhy not other options: 'Efficiency' is indirect; 'quality' is environmental but not political.",
          "4. quality → fourth blank\nJustification: Conservation enhances 'quality' of life.\nWhy not other options: 'Resources' is preserved but 'quality' is the impact; 'technology' already used.",
          "5. resources → fifth blank\nJustification: Conserved 'resources' support economic and human health.\nWhy not other options: 'Disposal' already used; 'cooperation' is social, not tangible."
        ]
      },
      {
        "id": 59,
        "text": [
          "Artificial intelligence (AI) has transformed numerous industries by automating tasks, improving decision-making, and predicting future trends. Companies integrate AI to enhance operational ",
          ", reduce costs, and analyze large datasets for actionable insights. In healthcare, AI supports diagnostics, treatment planning, and patient monitoring. Despite these benefits, ethical and regulatory concerns arise regarding data privacy, bias, and potential unemployment. Policymakers advocate for guidelines that ensure responsible AI use, fairness, and ",
          " protection. Educational programs prepare professionals with technical skills, critical thinking, and ethical ",
          " to meet the demands of AI-driven workplaces. Collaboration among researchers, developers, and governments ensures ",
          " innovation while minimizing societal risks."
        ],
        "blanks": [
          { "correct": "efficiency" },
          { "correct": "privacy" },
          { "correct": "behavior" },
          { "correct": "sustainable" },
          { "correct": "ethics" }
        ],
        "draggableOptions": ["efficiency", "privacy", "behavior", "sustainable", "ethics", "technology", "skills", "guidelines"],
        "explanation": [
          "1. efficiency → first blank\nJustification: AI improves operational 'efficiency'.\nWhy not other options: 'Technology' is too general; 'skills' are for humans, not operations.",
          "2. privacy → second blank\nJustification: Guidelines protect 'privacy' regarding AI data.\nWhy not other options: 'Ethics' is broader; 'behavior' is output, not protection.",
          "3. behavior → third blank\nJustification: Professionals need ethical 'behavior' in AI contexts.\nWhy not other options: 'Skills' are technical; 'technology' is already used.",
          "4. sustainable → fourth blank\nJustification: Collaboration ensures 'sustainable' innovation.\nWhy not other options: 'Ethics' is already mentioned; 'privacy' is narrower.",
          "5. ethics → fifth blank\nJustification: Ethical standards guide AI implementation.\nWhy not other options: 'Guidelines' are procedural, 'behavior' is individual."
        ]
      },
      {
        "id": 60,
        "text": [
          "Global trade networks have evolved dramatically due to advancements in transportation, communication, and digital technology. The movement of goods and services across countries has increased economic ",
          ", facilitated cultural exchange, and created complex interdependencies. However, global commerce also exposes nations to financial risks, supply chain disruptions, and regulatory challenges. Trade agreements, economic policies, and technological infrastructure help manage these issues, promote fair ",
          ", and enhance international ",
          ". Businesses invest in logistics, risk management, and digital platforms to maintain competitiveness, while governments monitor compliance, taxation, and ",
          " standards to safeguard citizens and the environment."
        ],
        "blanks": [
          { "correct": "growth" },
          { "correct": "competition" },
          { "correct": "relations" },
          { "correct": "quality" },
          { "correct": "standards" }
        ],
        "draggableOptions": ["growth", "competition", "relations", "quality", "standards", "efficiency", "equity", "innovation"],
        "explanation": [
          "1. growth → first blank\nJustification: Trade increases economic 'growth'.\nWhy not other options: 'Competition' is an effect, not outcome; 'equity' is social, not economic.",
          "2. competition → second blank\nJustification: Trade agreements promote fair 'competition'.\nWhy not other options: 'Growth' already used; 'innovation' is indirect.",
          "3. relations → third blank\nJustification: Trade enhances international 'relations'.\nWhy not other options: 'Standards' are regulatory, not diplomatic.",
          "4. quality → fourth blank\nJustification: Logistics and risk management maintain 'quality'.\nWhy not other options: 'Standards' is broader, overlaps with fifth blank.",
          "5. standards → fifth blank\nJustification: Governments monitor 'standards' for safety and environment.\nWhy not other options: 'Quality' is operational, 'relations' is diplomatic."
        ]
      },

      {
        "id": 61,
        "text": [
          "Urban green spaces play a vital role in improving quality of life in cities. Parks, gardens, and natural reserves provide residents with areas for recreation, relaxation, and exercise, while also supporting biodiversity and ecological balance. They help regulate ",
          " levels, reduce urban heat islands, and improve air quality. Community programs encourage citizens to participate in planting trees, maintaining gardens, and promoting environmental ",
          ". Local governments often allocate budgets and policies to preserve these spaces, ensuring they are accessible and well-maintained. Educational campaigns raise awareness about the importance of green spaces and inspire responsible ",
          " practices. Well-planned green infrastructure also contributes to aesthetic appeal, social cohesion, and overall public ",
          "."
        ],
        "blanks": [
          { "correct": "pollution" },
          { "correct": "stewardship" },
          { "correct": "behavior" },
          { "correct": "health" },
          { "correct": "environment" }
        ],
        "draggableOptions": ["pollution", "stewardship", "behavior", "health", "environment", "traffic", "community", "aesthetics"],
        "explanation": [
          "1. pollution → first blank\nJustification: Green spaces help reduce 'pollution' levels in cities.\nWhy not other options: 'Traffic' is a consequence, not directly regulated by greenery.",
          "2. stewardship → second blank\nJustification: Community programs promote environmental 'stewardship'.\nWhy not other options: 'Behavior' is broader; 'aesthetics' is an effect, not engagement.",
          "3. behavior → third blank\nJustification: Educational campaigns encourage responsible 'behavior'.\nWhy not other options: 'Streets' or 'community' do not fit in the context of personal responsibility.",
          "4. health → fourth blank\nJustification: Green infrastructure improves public 'health'.\nWhy not other options: 'Environment' is indirect here; 'behavior' already covered.",
          "5. environment → fifth blank\nJustification: Green spaces enhance overall 'environment' quality.\nWhy not other options: 'Aesthetics' is only visual, not ecological; 'health' already used."
        ]
      },
      {
        "id": 62,
        "text": [
          "Renewable energy technologies are crucial in addressing climate change and reducing dependence on fossil fuels. Solar panels, wind turbines, and hydroelectric plants provide sustainable electricity while minimizing ",
          " emissions. Governments and private sectors invest in research to improve efficiency, lower costs, and expand accessibility of clean energy systems. Public awareness campaigns encourage households and businesses to adopt energy-saving practices and implement eco-friendly ",
          " measures. Integration of smart grids, energy storage, and monitoring technologies helps optimize energy consumption and maintain ",
          " reliability. Moreover, international cooperation and policy frameworks facilitate knowledge-sharing, technological advancement, and financial support for developing countries, promoting ",
          " energy equity and environmental sustainability."
        ],
        "blanks": [
          { "correct": "carbon" },
          { "correct": "conservation" },
          { "correct": "grid" },
          { "correct": "access" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["carbon", "conservation", "grid", "access", "sustainability", "pollution", "electricity", "efficiency"],
        "explanation": [
          "1. carbon → first blank\nJustification: Renewable energy reduces 'carbon' emissions.\nWhy not other options: 'Pollution' is generic; 'electricity' is the product, not emission type.",
          "2. conservation → second blank\nJustification: Eco-friendly practices promote energy 'conservation'.\nWhy not other options: 'Grid' is technical, not behavioral; 'access' is unrelated to practices.",
          "3. grid → third blank\nJustification: Smart grids integrate renewable sources for efficiency.\nWhy not other options: 'Access' is social; 'sustainability' is broader outcome.",
          "4. access → fourth blank\nJustification: Ensuring energy 'access' is key for equity.\nWhy not other options: 'Sustainability' is final goal; 'conservation' already used.",
          "5. sustainability → fifth blank\nJustification: Renewable energy promotes long-term 'sustainability'.\nWhy not other options: 'Grid' is technical, not outcome; 'carbon' already used."
        ]
      },
      {
        "id": 63,
        "text": [
          "The expansion of the internet and digital platforms has transformed the global economy. E-commerce, online banking, and remote work opportunities provide convenience, enhance efficiency, and broaden ",
          " across regions. However, cybersecurity threats, hacking, and identity theft have raised concerns about data protection and user ",
          ". Companies implement robust encryption, firewalls, and secure protocols to safeguard sensitive information. Policies and training programs promote responsible online ",
          " while supporting innovation. Consumers are encouraged to adopt safe practices, report suspicious activity, and respect digital ",
          " to ensure trust in virtual marketplaces."
        ],
        "blanks": [
          { "correct": "connectivity" },
          { "correct": "privacy" },
          { "correct": "behavior" },
          { "correct": "ethics" },
          { "correct": "security" }
        ],
        "draggableOptions": ["connectivity", "privacy", "behavior", "ethics", "security", "efficiency", "technology", "access"],
        "explanation": [
          "1. connectivity → first blank\nJustification: Digital platforms increase global 'connectivity'.\nWhy not other options: 'Efficiency' is indirect; 'technology' is tool, not scope.",
          "2. privacy → second blank\nJustification: Cybersecurity threats compromise user 'privacy'.\nWhy not other options: 'Security' is general; 'ethics' is behavioral, not direct protection.",
          "3. behavior → third blank\nJustification: Responsible online 'behavior' is encouraged through policies.\nWhy not other options: 'Ethics' is broader; 'connectivity' already used.",
          "4. ethics → fourth blank\nJustification: Promoting responsible 'ethics' supports innovation.\nWhy not other options: 'Security' is technical; 'privacy' already used.",
          "5. security → fifth blank\nJustification: Respecting digital 'security' ensures trust in virtual marketplaces.\nWhy not other options: 'Behavior' is covered; 'connectivity' is outcome."
        ]
      },
      {
        "id": 64,
        "text": [
          "Healthcare systems worldwide face challenges due to aging populations, chronic diseases, and rising costs. Governments invest in medical infrastructure, preventive care, and technological solutions to improve ",
          " and patient satisfaction. Telemedicine, electronic health records, and wearable devices enhance diagnostic accuracy and treatment monitoring. Public health campaigns encourage healthy lifestyles, vaccination, and awareness about disease ",
          ". Ethical guidelines, privacy protection, and professional training ensure responsible patient care and data management. Collaboration among hospitals, researchers, and policymakers fosters ",
          ", innovation, and equitable access to healthcare services, ultimately improving overall public ",
          "."
        ],
        "blanks": [
          { "correct": "efficiency" },
          { "correct": "prevention" },
          { "correct": "standards" },
          { "correct": "collaboration" },
          { "correct": "health" }
        ],
        "draggableOptions": ["efficiency", "prevention", "standards", "collaboration", "health", "quality", "innovation", "privacy"],
        "explanation": [
          "1. efficiency → first blank\nJustification: Investments improve system 'efficiency'.\nWhy not other options: 'Health' is final outcome; 'innovation' is supportive, not operational.",
          "2. prevention → second blank\nJustification: Campaigns focus on disease 'prevention'.\nWhy not other options: 'Standards' or 'privacy' are regulatory, not preventive.",
          "3. standards → third blank\nJustification: Ethical guidelines maintain care 'standards'.\nWhy not other options: 'Collaboration' is organizational; 'innovation' is process.",
          "4. collaboration → fourth blank\nJustification: Hospitals and policymakers promote 'collaboration'.\nWhy not other options: 'Efficiency' already used; 'health' is outcome.",
          "5. health → fifth blank\nJustification: Overall public 'health' improves with efficient, collaborative systems.\nWhy not other options: 'Standards' is subset; 'prevention' is partial."
        ]
      },
      {
        "id": 65,
        "text": [
          "Education is a cornerstone of societal development, shaping knowledge, critical thinking, and civic engagement. Schools and universities provide curricula that foster ",
          ", creativity, and problem-solving skills, while extracurricular activities develop social, emotional, and leadership abilities. Technology integration, such as online learning platforms and digital libraries, enhances learning opportunities and ",
          ". Teachers play a crucial role in mentoring students, promoting ethical values, and encouraging responsible ",
          ". Government policies, teacher training, and community involvement support equitable access, quality education, and lifelong ",
          " for all citizens."
        ],
        "blanks": [
          { "correct": "intellectual" },
          { "correct": "access" },
          { "correct": "behavior" },
          { "correct": "engagement" },
          { "correct": "learning" }
        ],
        "draggableOptions": ["intellectual", "access", "behavior", "engagement", "learning", "skills", "creativity", "ethics"],
        "explanation": [
          "1. intellectual → first blank\nJustification: Education fosters 'intellectual' growth.\nWhy not other options: 'Skills' is partial; 'creativity' is component, not overall growth.",
          "2. access → second blank\nJustification: Technology enhances 'access' to learning.\nWhy not other options: 'Learning' is outcome; 'engagement' is social, not opportunity.",
          "3. behavior → third blank\nJustification: Students encouraged towards responsible 'behavior'.\nWhy not other options: 'Engagement' is participation, not ethics; 'ethics' is broader.",
          "4. engagement → fourth blank\nJustification: Schools promote civic 'engagement'.\nWhy not other options: 'Learning' is general, 'access' already used.",
          "5. learning → fifth blank\nJustification: Lifelong 'learning' is an educational goal.\nWhy not other options: 'Skills' is subset; 'behavior' already addressed."
        ]
      },
      {
        "id": 71,
        "text": [
          "Artificial intelligence (AI) is transforming industries by automating tasks, enhancing decision-making, and providing new insights from large datasets. Machine learning algorithms analyze patterns to predict consumer ",
          ", optimize logistics, and improve product quality. However, AI also raises concerns about job displacement, ethical decision-making, and data ",
          ". Organizations must implement transparent policies, responsible AI guidelines, and employee training to ensure ethical usage. Public discourse encourages awareness about AI's societal implications and fosters ",
          " among researchers, policymakers, and the general public. Collaborative efforts can ensure that AI contributes to sustainable development, innovation, and equitable ",
          " opportunities across regions and sectors."
        ],
        "blanks": [
          { "correct": "behavior" },
          { "correct": "privacy" },
          { "correct": "collaboration" },
          { "correct": "access" },
          { "correct": "innovation" }
        ],
        "draggableOptions": ["behavior", "privacy", "collaboration", "access", "innovation", "security", "efficiency", "ethics"],
        "explanation": [
          "1. behavior → first blank\nJustification: AI predicts consumer 'behavior'.\nWhy not other options: 'Security' or 'efficiency' are secondary; 'privacy' fits later blank.",
          "2. privacy → second blank\nJustification: Ethical concerns include data 'privacy'.\nWhy not other options: 'Behavior' already used; 'innovation' is positive outcome, not concern.",
          "3. collaboration → third blank\nJustification: Awareness fosters 'collaboration' between stakeholders.\nWhy not other options: 'Access' is later; 'innovation' is result, not process.",
          "4. access → fourth blank\nJustification: AI should provide equitable 'access'.\nWhy not other options: 'Collaboration' already used; 'privacy' already covered.",
          "5. innovation → fifth blank\nJustification: AI contributes to 'innovation'.\nWhy not other options: 'Behavior' and 'privacy' already used; 'collaboration' is process."
        ]
      },
      {
        "id": 72,
        "text": [
          "Sustainable agriculture integrates modern technology, ecological knowledge, and community practices to increase productivity while preserving natural resources. Crop rotation, organic fertilizers, and water-efficient irrigation systems reduce soil degradation, minimize chemical ",
          ", and enhance soil health. Farmers are trained to implement sustainable ",
          " methods and participate in knowledge-sharing networks. Policies support market access for eco-friendly products and provide incentives for conservation practices. Community involvement promotes environmental ",
          " and encourages farmers to adopt innovative approaches. Education and monitoring ensure that agricultural development balances economic growth with ecological ",
          "."
        ],
        "blanks": [
          { "correct": "pollution" },
          { "correct": "farming" },
          { "correct": "stewardship" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["pollution", "farming", "stewardship", "sustainability", "innovation", "efficiency", "technology"],
        "explanation": [
          "1. pollution → first blank\nJustification: Reducing chemical 'pollution' is a goal of sustainable agriculture.\nWhy not other options: 'Innovation' is result, not harm; 'efficiency' is indirect.",
          "2. farming → second blank\nJustification: Farmers use sustainable 'farming' methods.\nWhy not other options: 'Stewardship' is broader concept; 'technology' is tool.",
          "3. stewardship → third blank\nJustification: Community promotes environmental 'stewardship'.\nWhy not other options: 'Sustainability' is outcome; 'pollution' already used.",
          "4. sustainability → fourth blank\nJustification: Agriculture balances economic growth with ecological 'sustainability'.\nWhy not other options: 'Farming' already used; 'stewardship' is process."
        ]
      },
      {
        "id": 73,
        "text": [
          "Space exploration has expanded humanity's understanding of the universe. Satellites provide weather forecasting, GPS navigation, and communication services, while telescopes and space probes uncover the mysteries of distant stars, planets, and galaxies. International collaboration facilitates knowledge ",
          ", technological advancement, and resource-sharing. Challenges include high costs, technical risks, and environmental concerns related to space debris. Innovative solutions such as reusable rockets and artificial intelligence enhance mission ",
          ", increase efficiency, and reduce operational hazards. Scientific discoveries inspire education, public interest, and technological ",
          " in multiple sectors."
        ],
        "blanks": [
          { "correct": "sharing" },
          { "correct": "safety" },
          { "correct": "innovation" },
          { "correct": "collaboration" }
        ],
        "draggableOptions": ["sharing", "safety", "innovation", "collaboration", "efficiency", "research", "technology"],
        "explanation": [
          "1. sharing → first blank\nJustification: Collaboration facilitates knowledge 'sharing'.\nWhy not other options: 'Research' is an activity, not process of distribution; 'innovation' is result.",
          "2. safety → second blank\nJustification: Reusable rockets and AI improve mission 'safety'.\nWhy not other options: 'Efficiency' is secondary; 'collaboration' already used elsewhere.",
          "3. innovation → third blank\nJustification: Technological 'innovation' results from space programs.\nWhy not other options: 'Efficiency' is tool, not outcome; 'research' is process, not final achievement.",
          "4. collaboration → fourth blank\nJustification: International 'collaboration' drives space exploration.\nWhy not other options: 'Sharing' already used; 'technology' is tool."
        ]
      },
      {
        "id": 74,
        "text": [
          "Cultural heritage preservation maintains the identity, history, and values of societies. Museums, monuments, and historical sites safeguard artifacts and traditional knowledge. Restoration projects address deterioration and damage caused by weather, pollution, or human activity. Legal frameworks, government funding, and community involvement ensure proper management and ",
          " of heritage sites. Educational initiatives foster appreciation, intercultural understanding, and social ",
          ". Technological tools such as digital archiving and 3D modeling increase accessibility and long-term preservation. Public engagement strengthens civic ",
          " and encourages individuals to participate actively in protecting cultural assets."
        ],
        "blanks": [
          { "correct": "conservation" },
          { "correct": "cohesion" },
          { "correct": "responsibility" },
          { "correct": "awareness" }
        ],
        "draggableOptions": ["conservation", "cohesion", "responsibility", "awareness", "education", "ethics", "protection"],
        "explanation": [
          "1. conservation → first blank\nJustification: Management ensures 'conservation' of heritage sites.\nWhy not other options: 'Protection' is similar but less formal; 'education' is initiative, not management.",
          "2. cohesion → second blank\nJustification: Education fosters social 'cohesion'.\nWhy not other options: 'Responsibility' is outcome of engagement; 'awareness' is complementary, not direct.",
          "3. responsibility → third blank\nJustification: Engagement encourages civic 'responsibility'.\nWhy not other options: 'Awareness' is knowledge, not action; 'cohesion' already used.",
          "4. awareness → fourth blank\nJustification: Digital tools increase public 'awareness'.\nWhy not other options: 'Education' is process; 'conservation' already covered."
        ]
      },
      {
        "id": 75,
        "text": [
          "Urban transportation planning addresses traffic congestion, pollution, and mobility challenges. Implementation of public transit systems, bike lanes, and pedestrian-friendly infrastructure reduces carbon ",
          " and enhances travel efficiency. Smart traffic management, data analytics, and route optimization improve service ",
          " while minimizing travel time. Policies supporting carpooling, electric vehicles, and ride-sharing promote sustainable ",
          " and reduce environmental impact. Community engagement and awareness campaigns encourage responsible commuting and increase public ",
          " for transportation planning decisions."
        ],
        "blanks": [
          { "correct": "emissions" },
          { "correct": "quality" },
          { "correct": "behavior" },
          { "correct": "support" },
          { "correct": "efficiency" }
        ],
        "draggableOptions": ["emissions", "quality", "behavior", "support", "efficiency", "pollution", "transportation", "congestion"],
        "explanation": [
          "1. emissions → first blank\nJustification: Transportation reduces carbon 'emissions'.\nWhy not other options: 'Pollution' is general; 'congestion' is problem, not output.",
          "2. quality → second blank\nJustification: Systems improve service 'quality'.\nWhy not other options: 'Efficiency' is related but broader; 'behavior' is personal action.",
          "3. behavior → third blank\nJustification: Policies encourage sustainable commuting 'behavior'.\nWhy not other options: 'Support' is community, not individual action; 'efficiency' is system metric.",
          "4. support → fourth blank\nJustification: Public 'support' aids policy implementation.\nWhy not other options: 'Behavior' already used; 'quality' is service metric.",
          "5. efficiency → fifth blank\nJustification: Optimized systems enhance operational 'efficiency'.\nWhy not other options: 'Behavior' and 'support' already used; 'quality' covered."
        ]
      },
      {
        "id": 76,
        "text": [
          "Ocean conservation initiatives address declining marine biodiversity, overfishing, and pollution. Marine protected areas, habitat restoration, and sustainable fishing practices safeguard ecosystems and contribute to food security. Educational programs raise public ",
          " about the importance of healthy oceans and promote responsible consumption of seafood. International agreements, research collaborations, and policy frameworks support knowledge ",
          ", resource allocation, and regulatory compliance. Scientific monitoring of water quality, species populations, and human impact enhances evidence-based management and long-term ",
          " of marine environments."
        ],
        "blanks": [
          { "correct": "awareness" },
          { "correct": "sharing" },
          { "correct": "stewardship" },
          { "correct": "sustainability" }
        ],
        "draggableOptions": ["awareness", "sharing", "stewardship", "sustainability", "conservation", "education", "protection"],
        "explanation": [
          "1. awareness → first blank\nJustification: Programs raise public 'awareness' about oceans.\nWhy not other options: 'Conservation' is action, not knowledge; 'stewardship' is responsibility.",
          "2. sharing → second blank\nJustification: International collaborations promote knowledge 'sharing'.\nWhy not other options: 'Conservation' already implied; 'stewardship' is separate.",
          "3. stewardship → third blank\nJustification: Policy and collaboration enhance responsible 'stewardship'.\nWhy not other options: 'Sustainability' is outcome; 'awareness' already used.",
          "4. sustainability → fourth blank\nJustification: Long-term 'sustainability' ensures ocean protection.\nWhy not other options: 'Stewardship' is process; 'sharing' already used."
        ]
      },
      {
        "id": 77,
        "text": [
          "Public libraries provide free access to knowledge, support literacy, and foster lifelong learning. They offer books, digital resources, workshops, and community programs that encourage reading, research, and information ",
          " skills. Librarians guide users in finding reliable information and developing critical thinking and digital literacy. Libraries serve as community hubs, promoting social ",
          ", civic engagement, and inclusion. Funding, policy support, and technological upgrades enhance library services and ensure ",
          " for all users. Educational campaigns inspire curiosity, self-directed learning, and innovation."
        ],
        "blanks": [
          { "correct": "retrieval" },
          { "correct": "cohesion" },
          { "correct": "access" },
          { "correct": "innovation" }
        ],
        "draggableOptions": ["retrieval", "cohesion", "access", "innovation", "literacy", "technology", "community"],
        "explanation": [
          "1. retrieval → first blank\nJustification: Libraries develop information 'retrieval' skills.\nWhy not other options: 'Literacy' is broader; 'innovation' is outcome, not skill.",
          "2. cohesion → second blank\nJustification: Libraries promote social 'cohesion'.\nWhy not other options: 'Community' is generic; 'access' is later blank.",
          "3. access → third blank\nJustification: Libraries ensure 'access' to resources.\nWhy not other options: 'Cohesion' already covered; 'retrieval' is skill, not physical access.",
          "4. innovation → fourth blank\nJustification: Libraries inspire 'innovation'.\nWhy not other options: 'Literacy' is skill, 'community' already implied."
        ]
      },
      {
        "id": 78,
        "text": [
          "Renewable water management is essential to address scarcity, contamination, and climate change impacts. Strategies include rainwater harvesting, wastewater treatment, and sustainable irrigation to conserve ",
          " and ensure equitable distribution. Public education campaigns encourage water-saving ",
          " in households, agriculture, and industry. Policy frameworks, investment, and technological innovation improve water ",
          ", quality monitoring, and ecological protection. Collaboration among governments, communities, and researchers enhances knowledge ",
          " and promotes sustainable practices for future generations."
        ],
        "blanks": [
          { "correct": "resources" },
          { "correct": "behavior" },
          { "correct": "management" },
          { "correct": "sharing" },
          { "correct": "conservation" }
        ],
        "draggableOptions": ["resources", "behavior", "management", "sharing", "conservation", "quality", "innovation"],
        "explanation": [
          "1. resources → first blank\nJustification: Conservation strategies maintain water 'resources'.\nWhy not other options: 'Quality' is subset; 'innovation' is method.",
          "2. behavior → second blank\nJustification: Campaigns promote water-saving 'behavior'.\nWhy not other options: 'Management' is policy, not personal action.",
          "3. management → third blank\nJustification: Technological and policy measures improve 'management'.\nWhy not other options: 'Sharing' is social process; 'conservation' is goal.",
          "4. sharing → fourth blank\nJustification: Collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Management' already used; 'conservation' is result.",
          "5. conservation → fifth blank\nJustification: Sustainable practices ensure water 'conservation'.\nWhy not other options: 'Resources' already used; 'management' is process."
        ]
      },
      {
        "id": 79,
        "text": [
          "Renewable energy integration into national grids reduces reliance on fossil fuels and lowers carbon emissions. Wind, solar, and hydroelectric plants supply clean electricity while minimizing environmental ",
          ". Grid modernization, energy storage, and smart meters enhance power reliability, efficiency, and system ",
          ". Policy incentives, subsidies, and public awareness campaigns encourage adoption of renewable energy technologies. International collaboration enables knowledge ",
          " and joint investment in research and development. Community participation strengthens local ",
          " and promotes sustainable energy behavior."
        ],
        "blanks": [
          { "correct": "impact" },
          { "correct": "performance" },
          { "correct": "sharing" },
          { "correct": "engagement" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["impact", "performance", "sharing", "engagement", "behavior", "efficiency", "innovation", "access"],
        "explanation": [
          "1. impact → first blank\nJustification: Renewable energy reduces environmental 'impact'.\nWhy not other options: 'Efficiency' is system metric; 'behavior' is personal.",
          "2. performance → second blank\nJustification: Modern grids improve system 'performance'.\nWhy not other options: 'Impact' already used; 'sharing' is knowledge, not system quality.",
          "3. sharing → third blank\nJustification: Collaboration enables knowledge 'sharing'.\nWhy not other options: 'Engagement' is participation; 'behavior' is individual action.",
          "4. engagement → fourth blank\nJustification: Community 'engagement' supports adoption.\nWhy not other options: 'Behavior' is outcome; 'sharing' already used.",
          "5. behavior → fifth blank\nJustification: Promotes sustainable energy 'behavior'.\nWhy not other options: 'Engagement' is participation; 'performance' is system metric."
        ]
      },
      {
        "id": 80,
        "text": [
          "Urban resilience planning addresses disasters, climate risks, and socio-economic challenges. Infrastructure upgrades, emergency preparedness, and early warning systems reduce vulnerability and enhance community ",
          ". Risk assessment, data analytics, and scenario modeling inform strategic planning and resource allocation. Policy frameworks and governance support equitable recovery and social ",
          ". Public awareness campaigns, community drills, and citizen involvement strengthen adaptive capacity and promote responsible ",
          ". Collaboration among local authorities, NGOs, and research institutions enhances knowledge ",
          " and ensures coordinated disaster response. Investments in sustainable urban design increase environmental "
        ],
        "blanks": [
          { "correct": "safety" },
          { "correct": "cohesion" },
          { "correct": "behavior" },
          { "correct": "sharing" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["safety", "cohesion", "behavior", "sharing", "resilience", "efficiency", "planning", "security"],
        "explanation": [
          "1. safety → first blank\nJustification: Measures enhance community 'safety'.\nWhy not other options: 'Resilience' is long-term; 'cohesion' is social.",
          "2. cohesion → second blank\nJustification: Policies promote social 'cohesion'.\nWhy not other options: 'Resilience' is outcome; 'safety' already used.",
          "3. behavior → third blank\nJustification: Awareness campaigns encourage responsible 'behavior'.\nWhy not other options: 'Sharing' is collaboration; 'resilience' is system property.",
          "4. sharing → fourth blank\nJustification: Collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Planning' is process; 'cohesion' already used.",
          "5. resilience → fifth blank\nJustification: Investments improve urban 'resilience'.\nWhy not other options: 'Safety' is immediate; 'behavior' is individual."
        ]
      },

      {
        "id": 81,
        "text": [
          "Biodiversity conservation protects species, habitats, and ecological processes essential for human well-being. Protected areas, reforestation, and wildlife corridors maintain ecosystem ",
          ", while policies and regulations prevent habitat loss and overexploitation. Community engagement fosters environmental ",
          " and encourages local participation in monitoring and conservation projects. Scientific research provides knowledge on species behavior, population dynamics, and threats, informing evidence-based management strategies. International agreements and knowledge ",
          " enhance collaboration and resource allocation, ensuring global biodiversity preservation for future generations."
        ],
        "blanks": [
          { "correct": "integrity" },
          { "correct": "awareness" },
          { "correct": "sharing" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["integrity", "awareness", "sharing", "stewardship", "protection", "conservation", "education", "management"],
        "explanation": [
          "1. integrity → first blank\nJustification: Protected areas maintain ecosystem 'integrity'.\nWhy not other options: 'Protection' is similar but less precise; 'conservation' is broader.",
          "2. awareness → second blank\nJustification: Engagement fosters environmental 'awareness'.\nWhy not other options: 'Stewardship' is responsibility; 'sharing' is collaboration, not local engagement.",
          "3. sharing → third blank\nJustification: Research collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Stewardship' is outcome; 'awareness' already used.",
          "4. stewardship → fourth blank\nJustification: Ensures responsible 'stewardship' of biodiversity.\nWhy not other options: 'Integrity' already used; 'conservation' is goal, not process."
        ]
      },
      {
        "id": 82,
        "text": [
          "Climate-smart agriculture integrates technology, ecology, and policy to improve food security under changing climatic conditions. Crop diversification, soil management, and water-efficient irrigation enhance resilience and reduce greenhouse gas ",
          ". Farmers are trained in sustainable practices, improving productivity and environmental ",
          ". Data-driven monitoring and decision support systems provide real-time information for adaptive management. Market access, subsidies, and knowledge ",
          " empower farmers to adopt climate-resilient practices, while community participation fosters social ",
          " and collaboration among stakeholders."
        ],
        "blanks": [
          { "correct": "emissions" },
          { "correct": "sustainability" },
          { "correct": "sharing" },
          { "correct": "cohesion" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["emissions", "sustainability", "sharing", "cohesion", "resilience", "efficiency", "behavior"],
        "explanation": [
          "1. emissions → first blank\nJustification: Practices reduce greenhouse gas 'emissions'.\nWhy not other options: 'Efficiency' is secondary; 'resilience' is later outcome.",
          "2. sustainability → second blank\nJustification: Practices improve environmental 'sustainability'.\nWhy not other options: 'Cohesion' is social; 'sharing' is knowledge process.",
          "3. sharing → third blank\nJustification: Data and programs promote knowledge 'sharing'.\nWhy not other options: 'Resilience' is goal; 'sustainability' already used.",
          "4. cohesion → fourth blank\nJustification: Participation fosters social 'cohesion'.\nWhy not other options: 'Resilience' is later; 'sharing' already used.",
          "5. resilience → fifth blank\nJustification: Farmers adopt climate-resilient practices to increase 'resilience'.\nWhy not other options: 'Cohesion' is social; 'sustainability' already used."
        ]
      },
      {
        "id": 83,
        "text": [
          "Renewable energy research drives technological progress and sustainability. Solar, wind, and hydropower innovations reduce carbon emissions and increase energy ",
          ". Energy storage, smart grids, and digital monitoring enhance reliability, efficiency, and operational ",
          ". Policy incentives and public engagement accelerate adoption, fostering societal ",
          ". International cooperation supports knowledge ",
          ", joint investment, and regulatory harmonization for global energy transition."
        ],
        "blanks": [
          { "correct": "access" },
          { "correct": "performance" },
          { "correct": "acceptance" },
          { "correct": "sharing" },
          { "correct": "innovation" }
        ],
        "draggableOptions": ["access", "performance", "acceptance", "sharing", "innovation", "efficiency", "collaboration", "behavior"],
        "explanation": [
          "1. access → first blank\nJustification: Renewable energy increases energy 'access'.\nWhy not other options: 'Efficiency' is metric; 'performance' is system quality.",
          "2. performance → second blank\nJustification: Smart grids enhance system 'performance'.\nWhy not other options: 'Access' already used; 'sharing' is knowledge.",
          "3. acceptance → third blank\nJustification: Policies and engagement foster societal 'acceptance'.\nWhy not other options: 'Sharing' is knowledge process; 'innovation' is result.",
          "4. sharing → fourth blank\nJustification: Cooperation enables knowledge 'sharing'.\nWhy not other options: 'Innovation' is result; 'acceptance' already used.",
          "5. innovation → fifth blank\nJustification: Research drives 'innovation'.\nWhy not other options: 'Sharing' is process; 'performance' already used."
        ]
      },
      {
        "id": 84,
        "text": [
          "Digital literacy is essential for participation in modern society. Citizens must acquire skills in online research, cybersecurity, and information ",
          " to navigate digital platforms safely. Educational programs develop critical thinking, ethical decision-making, and digital ",
          " among students. Policy frameworks and technological support ensure equitable ",
          " to devices and the internet. Community initiatives foster awareness, engagement, and responsible online ",
          ", contributing to social cohesion and informed citizenship."
        ],
        "blanks": [
          { "correct": "management" },
          { "correct": "fluency" },
          { "correct": "access" },
          { "correct": "behavior" }
        ],
        "draggableOptions": ["management", "fluency", "access", "behavior", "literacy", "ethics", "skills", "technology"],
        "explanation": [
          "1. management → first blank\nJustification: Skills in information 'management' are required.\nWhy not other options: 'Literacy' is broader; 'fluency' is second blank.",
          "2. fluency → second blank\nJustification: Digital 'fluency' describes competence in digital tools.\nWhy not other options: 'Management' already used; 'access' is infrastructure.",
          "3. access → third blank\nJustification: Equitable 'access' ensures all can participate.\nWhy not other options: 'Behavior' is action; 'fluency' already covered.",
          "4. behavior → fourth blank\nJustification: Programs foster responsible online 'behavior'.\nWhy not other options: 'Management' and 'fluency' already used; 'access' is infrastructure."
        ]
      },
      {
        "id": 85,
        "text": [
          "Urban green spaces provide environmental, social, and economic benefits. Parks, gardens, and tree-lined streets improve air quality, reduce urban heat islands, and support biodiversity. Social programs encourage community participation and environmental ",
          ", promoting stewardship and volunteerism. Urban planning integrates green infrastructure for sustainable development, climate resilience, and improved public health. Funding, research, and policy support facilitate equitable ",
          " and long-term maintenance of green spaces. Educational campaigns raise awareness, inspire innovation, and foster social ",
          " within urban communities."
        ],
        "blanks": [
          { "correct": "awareness" },
          { "correct": "access" },
          { "correct": "cohesion" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["awareness", "access", "cohesion", "stewardship", "innovation", "education", "participation"],
        "explanation": [
          "1. awareness → first blank\nJustification: Social programs promote environmental 'awareness'.\nWhy not other options: 'Access' is physical; 'stewardship' is outcome.",
          "2. access → second blank\nJustification: Green spaces require equitable 'access'.\nWhy not other options: 'Cohesion' is social; 'awareness' already used.",
          "3. cohesion → third blank\nJustification: Social 'cohesion' strengthens communities.\nWhy not other options: 'Stewardship' is individual responsibility; 'access' already used.",
          "4. stewardship → fourth blank\nJustification: Programs promote responsible 'stewardship'.\nWhy not other options: 'Awareness' already used; 'cohesion' is social, not action."
        ]
      },
      {
        "id": 86,
        "text": [
          "Telemedicine has expanded access to healthcare, particularly in remote regions. Video consultations, remote monitoring, and mobile health applications enhance service ",
          ", patient engagement, and clinical outcomes. Policy frameworks and training programs ensure data ",
          ", patient confidentiality, and professional standards. Public awareness campaigns inform citizens about telehealth services and encourage responsible ",
          ". Research evaluates the effectiveness, efficiency, and equity of digital healthcare solutions."
        ],
        "blanks": [
          { "correct": "delivery" },
          { "correct": "security" },
          { "correct": "usage" },
          { "correct": "access" }
        ],
        "draggableOptions": ["delivery", "security", "usage", "access", "efficiency", "privacy", "behavior"],
        "explanation": [
          "1. delivery → first blank\nJustification: Telemedicine improves healthcare service 'delivery'.\nWhy not other options: 'Access' is separate; 'efficiency' is system metric.",
          "2. security → second blank\nJustification: Ensures data 'security'.\nWhy not other options: 'Privacy' is related but broader; 'usage' is patient action.",
          "3. usage → third blank\nJustification: Campaigns encourage responsible 'usage'.\nWhy not other options: 'Access' is infrastructure; 'behavior' is generic.",
          "4. access → fourth blank\nJustification: Telemedicine improves healthcare 'access'.\nWhy not other options: 'Delivery' already used; 'security' is data protection."
        ]
      },
      {
        "id": 87,
        "text": [
          "Environmental education promotes understanding of ecosystems, human impact, and sustainability. School programs, workshops, and field trips develop environmental knowledge, critical thinking, and responsible ",
          " among students. Community projects, citizen science, and public campaigns raise awareness, foster engagement, and encourage collective ",
          ". Policy support, funding, and teacher training enhance program quality, long-term effectiveness, and equitable ",
          " across regions."
        ],
        "blanks": [
          { "correct": "behavior" },
          { "correct": "action" },
          { "correct": "access" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["behavior", "action", "access", "stewardship", "awareness", "participation", "education"],
        "explanation": [
          "1. behavior → first blank\nJustification: Programs develop responsible 'behavior'.\nWhy not other options: 'Action' is later; 'stewardship' is broader concept.",
          "2. action → second blank\nJustification: Projects encourage collective 'action'.\nWhy not other options: 'Awareness' is knowledge; 'behavior' already used.",
          "3. access → third blank\nJustification: Equitable 'access' ensures program availability.\nWhy not other options: 'Action' already used; 'stewardship' is outcome.",
          "4. stewardship → fourth blank\nJustification: Education promotes long-term environmental 'stewardship'.\nWhy not other options: 'Access' is already used; 'behavior' is immediate action."
        ]
      },
      {
        "id": 88,
        "text": [
          "Artificial intelligence in healthcare improves diagnostics, treatment planning, and personalized medicine. Algorithms analyze patient data, predict disease risk, and assist in clinical decision-making. Ethical frameworks, regulation, and training ensure AI systems maintain data ",
          ", patient confidentiality, and transparency. Collaboration among hospitals, researchers, and technology developers enhances knowledge ",
          ", technological innovation, and resource-sharing. Public engagement fosters trust, understanding, and responsible ",
          "."
        ],
        "blanks": [
          { "correct": "security" },
          { "correct": "sharing" },
          { "correct": "behavior" },
          { "correct": "ethics" }
        ],
        "draggableOptions": ["security", "sharing", "behavior", "ethics", "privacy", "trust", "innovation"],
        "explanation": [
          "1. security → first blank\nJustification: AI must maintain data 'security'.\nWhy not other options: 'Privacy' is related but broader; 'ethics' is separate.",
          "2. sharing → second blank\nJustification: Collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Innovation' is result; 'behavior' is individual.",
          "3. behavior → third blank\nJustification: Public engagement promotes responsible 'behavior'.\nWhy not other options: 'Ethics' is principle, not action; 'trust' is feeling.",
          "4. ethics → fourth blank\nJustification: Ethical frameworks ensure proper AI practice.\nWhy not other options: 'Behavior' already used; 'sharing' is process."
        ]
      },
      {
        "id": 89,
        "text": [
          "Disaster risk reduction strategies improve resilience to floods, earthquakes, and storms. Infrastructure reinforcement, early warning systems, and evacuation planning reduce vulnerability and enhance community ",
          ". Risk mapping, scenario analysis, and data modeling inform resource allocation, policy development, and emergency response. Public education, drills, and participatory exercises foster responsible ",
          ", civic engagement, and social ",
          ". International cooperation supports knowledge ",
          ", funding, and coordinated disaster management."
        ],
        "blanks": [
          { "correct": "safety" },
          { "correct": "behavior" },
          { "correct": "cohesion" },
          { "correct": "sharing" }
        ],
        "draggableOptions": ["safety", "behavior", "cohesion", "sharing", "resilience", "education", "participation"],
        "explanation": [
          "1. safety → first blank\nJustification: Strategies enhance community 'safety'.\nWhy not other options: 'Resilience' is long-term; 'cohesion' is social.",
          "2. behavior → second blank\nJustification: Education fosters responsible 'behavior'.\nWhy not other options: 'Participation' is broader; 'sharing' used elsewhere.",
          "3. cohesion → third blank\nJustification: Social 'cohesion' strengthens communities.\nWhy not other options: 'Resilience' is system property; 'safety' already used.",
          "4. sharing → fourth blank\nJustification: Cooperation supports knowledge 'sharing'.\nWhy not other options: 'Participation' is action; 'cohesion' already used."
        ]
      },
      {
        "id": 90,
        "text": [
          "Circular economy initiatives aim to reduce waste, reuse materials, and recycle resources. Product design, manufacturing processes, and supply chain management are optimized for material efficiency and waste reduction. Consumer education, incentives, and policy support promote sustainable consumption and production ",
          ". Technological innovation enables recycling, remanufacturing, and resource recovery. Collaboration among businesses, governments, and communities fosters knowledge ",
          ", resource allocation, and innovation. Monitoring, reporting, and continuous improvement enhance environmental ",
          " and economic benefits."
        ],
        "blanks": [
          { "correct": "behavior" },
          { "correct": "sharing" },
          { "correct": "performance" },
          { "correct": "efficiency" }
        ],
        "draggableOptions": ["behavior", "sharing", "performance", "efficiency", "innovation", "management", "access"],
        "explanation": [
          "1. behavior → first blank\nJustification: Initiatives promote sustainable consumption 'behavior'.\nWhy not other options: 'Efficiency' is technical; 'sharing' is collaboration.",
          "2. sharing → second blank\nJustification: Collaboration fosters knowledge 'sharing'.\nWhy not other options: 'Innovation' is outcome; 'behavior' already used.",
          "3. performance → third blank\nJustification: Continuous improvement enhances system 'performance'.\nWhy not other options: 'Efficiency' is material, not overall system metric; 'sharing' already used.",
          "4. efficiency → fourth blank\nJustification: Resource recovery improves material 'efficiency'.\nWhy not other options: 'Performance' is overall; 'behavior' already used."
        ]
      },
      {
        "id": 91,
        "text": [
          "Smart cities integrate technology, data analytics, and sustainable planning to enhance urban living. Intelligent transportation systems, energy-efficient infrastructure, and digital governance improve service ",
          ", reduce carbon footprint, and increase operational ",
          ". Citizen engagement, education, and participatory platforms foster responsible ",
          ", social cohesion, and innovation. Policy frameworks, funding, and cross-sector collaboration enable knowledge ",
          ", resource allocation, and long-term urban resilience."
        ],
        "blanks": [
          { "correct": "delivery" },
          { "correct": "efficiency" },
          { "correct": "behavior" },
          { "correct": "sharing" },
          { "correct": "innovation" }
        ],
        "draggableOptions": ["delivery", "efficiency", "behavior", "sharing", "innovation", "access", "resilience", "cohesion"],
        "explanation": [
          "1. delivery → first blank\nJustification: Smart cities improve service 'delivery'.\nWhy not other options: 'Efficiency' is later; 'innovation' is result.",
          "2. efficiency → second blank\nJustification: Systems increase operational 'efficiency'.\nWhy not other options: 'Delivery' already used; 'sharing' is knowledge process.",
          "3. behavior → third blank\nJustification: Engagement promotes responsible 'behavior'.\nWhy not other options: 'Innovation' is outcome; 'cohesion' is social.",
          "4. sharing → fourth blank\nJustification: Collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Innovation' is output; 'behavior' already used.",
          "5. innovation → fifth blank\nJustification: Technology fosters urban 'innovation'.\nWhy not other options: 'Efficiency' already used; 'delivery' already used."
        ]
      },

      {
        "id": 92,
        "text": [
          "Water management is critical for sustainable development. Integrated approaches combine water conservation, treatment technologies, and efficient distribution to ensure adequate supply. Policy frameworks and community participation enhance governance, equitable ",
          ", and quality control. Education programs promote responsible consumption, public health, and environmental ",
          ". Research and data analysis support decision-making, monitoring, and resource ",
          ". International cooperation facilitates knowledge ",
          " and funding to address transboundary water challenges."
        ],
        "blanks": [
          { "correct": "access" },
          { "correct": "protection" },
          { "correct": "management" },
          { "correct": "sharing" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["access", "protection", "management", "sharing", "stewardship", "efficiency", "governance"],
        "explanation": [
          "1. access → first blank\nJustification: Equitable 'access' ensures fair water distribution.\nWhy not other options: 'Protection' is environmental; 'management' is broader.",
          "2. protection → second blank\nJustification: Education promotes environmental 'protection'.\nWhy not other options: 'Management' is later; 'sharing' is knowledge.",
          "3. management → third blank\nJustification: Research supports resource 'management'.\nWhy not other options: 'Access' already used; 'stewardship' is broader responsibility.",
          "4. sharing → fourth blank\nJustification: Cooperation enhances knowledge 'sharing'.\nWhy not other options: 'Management' already used; 'stewardship' is outcome.",
          "5. stewardship → fifth blank\nJustification: Promotes responsible 'stewardship' of water resources.\nWhy not other options: 'Access' already used; 'protection' already used."
        ]
      },
      {
        "id": 93,
        "text": [
          "Renewable transport solutions, such as electric vehicles, biofuels, and hydrogen technologies, reduce carbon emissions and dependence on fossil fuels. Infrastructure investments, charging networks, and policy incentives improve accessibility and ",
          ". Public awareness campaigns encourage responsible ",
          " and adoption of clean mobility solutions. Data collection, monitoring, and predictive modeling enhance operational ",
          " and energy efficiency. Cross-sector collaboration and international cooperation facilitate knowledge ",
          ", innovation, and global sustainability efforts."
        ],
        "blanks": [
          { "correct": "availability" },
          { "correct": "behavior" },
          { "correct": "performance" },
          { "correct": "sharing" },
          { "correct": "innovation" }
        ],
        "draggableOptions": ["availability", "behavior", "performance", "sharing", "innovation", "efficiency", "access", "education"],
        "explanation": [
          "1. availability → first blank\nJustification: Investments improve service 'availability'.\nWhy not other options: 'Access' is related but less precise; 'efficiency' is later.",
          "2. behavior → second blank\nJustification: Campaigns encourage responsible 'behavior'.\nWhy not other options: 'Innovation' is outcome; 'sharing' is collaboration.",
          "3. performance → third blank\nJustification: Data improves operational 'performance'.\nWhy not other options: 'Availability' already used; 'efficiency' is technical.",
          "4. sharing → fourth blank\nJustification: Cooperation facilitates knowledge 'sharing'.\nWhy not other options: 'Innovation' is result; 'behavior' already used.",
          "5. innovation → fifth blank\nJustification: Collaboration promotes technological 'innovation'.\nWhy not other options: 'Performance' already used; 'behavior' already used."
        ]
      },
      {
        "id": 94,
        "text": [
          "Sustainable tourism balances economic growth, environmental protection, and social responsibility. Destination management, resource-efficient infrastructure, and community engagement reduce negative impacts and improve visitor ",
          ". Policies and certifications promote environmental ",
          " and responsible practices. Education, awareness campaigns, and participatory programs foster local involvement and ethical ",
          ". Research, monitoring, and reporting provide data for decision-making, adaptive management, and long-term ",
          " of tourism resources."
        ],
        "blanks": [
          { "correct": "experience" },
          { "correct": "protection" },
          { "correct": "behavior" },
          { "correct": "management" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["experience", "protection", "behavior", "management", "stewardship", "efficiency", "access"],
        "explanation": [
          "1. experience → first blank\nJustification: Sustainable tourism improves visitor 'experience'.\nWhy not other options: 'Management' is later; 'stewardship' is long-term responsibility.",
          "2. protection → second blank\nJustification: Policies promote environmental 'protection'.\nWhy not other options: 'Management' is system-wide; 'behavior' is human action.",
          "3. behavior → third blank\nJustification: Programs foster ethical 'behavior'.\nWhy not other options: 'Stewardship' is long-term outcome; 'experience' already used.",
          "4. management → fourth blank\nJustification: Research informs tourism 'management'.\nWhy not other options: 'Protection' already used; 'stewardship' is final outcome.",
          "5. stewardship → fifth blank\nJustification: Ensures long-term 'stewardship' of tourism resources.\nWhy not other options: 'Management' already used; 'behavior' already used."
        ]
      },
      {
        "id": 95,
        "text": [
          "Food security depends on sustainable agriculture, supply chain efficiency, and equitable distribution. Crop improvement, soil health, and water management enhance productivity and resilience. Education and training programs develop farmers' skills and responsible ",
          ". Market access, storage facilities, and logistics reduce post-harvest losses and improve food ",
          ". Policy support, funding, and innovation encourage sustainable practices and resource ",
          ". International collaboration facilitates knowledge ",
          ", technological transfer, and global food security strategies."
        ],
        "blanks": [
          { "correct": "behavior" },
          { "correct": "availability" },
          { "correct": "management" },
          { "correct": "sharing" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["behavior", "availability", "management", "sharing", "resilience", "efficiency", "access"],
        "explanation": [
          "1. behavior → first blank\nJustification: Education fosters responsible farming 'behavior'.\nWhy not other options: 'Management' is system-wide; 'resilience' is outcome.",
          "2. availability → second blank\nJustification: Logistics improve food 'availability'.\nWhy not other options: 'Efficiency' is metric; 'sharing' is knowledge.",
          "3. management → third blank\nJustification: Policy and resources improve 'management'.\nWhy not other options: 'Resilience' is long-term result; 'availability' already used.",
          "4. sharing → fourth blank\nJustification: Collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Resilience' is outcome; 'behavior' already used.",
          "5. resilience → fifth blank\nJustification: Sustainable practices improve food system 'resilience'.\nWhy not other options: 'Management' already used; 'availability' already used."
        ]
      },
      {
        "id": 96,
        "text": [
          "Public transportation systems reduce traffic congestion, air pollution, and carbon emissions. Bus rapid transit, subways, and cycling infrastructure improve accessibility and operational ",
          ". Ticketing systems, digital information, and planning enhance service ",
          " and user satisfaction. Policy frameworks, subsidies, and public engagement encourage responsible ",
          " and promote sustainable mobility. Research, monitoring, and innovation provide data for system improvement, energy efficiency, and long-term ",
          " of transit services."
        ],
        "blanks": [
          { "correct": "efficiency" },
          { "correct": "delivery" },
          { "correct": "behavior" },
          { "correct": "sustainability" },
          { "correct": "management" }
        ],
        "draggableOptions": ["efficiency", "delivery", "behavior", "sustainability", "management", "performance", "innovation"],
        "explanation": [
          "1. efficiency → first blank\nJustification: Systems improve operational 'efficiency'.\nWhy not other options: 'Delivery' is service; 'management' is broader.",
          "2. delivery → second blank\nJustification: Ticketing and planning enhance service 'delivery'.\nWhy not other options: 'Efficiency' already used; 'sustainability' is outcome.",
          "3. behavior → third blank\nJustification: Public engagement promotes responsible travel 'behavior'.\nWhy not other options: 'Sustainability' is goal; 'management' is broader.",
          "4. sustainability → fourth blank\nJustification: Encourages long-term 'sustainability'.\nWhy not other options: 'Efficiency' already used; 'delivery' already used.",
          "5. management → fifth blank\nJustification: Monitoring improves transit 'management'.\nWhy not other options: 'Efficiency' is first blank; 'delivery' already used."
        ]
      },
      {
        "id": 97,
        "text": [
          "Renewable energy integration requires infrastructure, policy, and public participation. Solar, wind, and hydropower increase clean energy ",
          ", while storage technologies and smart grids improve system ",
          ". Public campaigns encourage responsible energy ",
          ". International collaboration supports knowledge ",
          ", financing, and global sustainability efforts."
        ],
        "blanks": [
          { "correct": "supply" },
          { "correct": "performance" },
          { "correct": "behavior" },
          { "correct": "sharing" }
        ],
        "draggableOptions": ["supply", "performance", "behavior", "sharing", "efficiency", "access"],
        "explanation": [
          "1. supply → first blank\nJustification: Renewable energy increases 'supply'.\nWhy not other options: 'Efficiency' is technical; 'performance' is next blank.",
          "2. performance → second blank\nJustification: Smart grids improve system 'performance'.\nWhy not other options: 'Supply' already used; 'sharing' is knowledge.",
          "3. behavior → third blank\nJustification: Campaigns encourage responsible energy 'behavior'.\nWhy not other options: 'Efficiency' is technical; 'sharing' is process.",
          "4. sharing → fourth blank\nJustification: Collaboration enhances knowledge 'sharing'.\nWhy not other options: 'Behavior' already used; 'performance' already used."
        ]
      },
      {
        "id": 98,
        "text": [
          "Climate adaptation strategies help communities prepare for extreme weather, sea-level rise, and temperature changes. Infrastructure reinforcement, early warning systems, and emergency planning reduce ",
          " and enhance resilience. Community engagement, education, and participatory programs foster responsible ",
          ", social cohesion, and civic engagement. Policy support, funding, and technological innovation improve resource ",
          " and ensure long-term sustainability."
        ],
        "blanks": [
          { "correct": "vulnerability" },
          { "correct": "behavior" },
          { "correct": "management" },
          { "correct": "resilience" }
        ],
        "draggableOptions": ["vulnerability", "behavior", "management", "resilience", "efficiency", "cohesion"],
        "explanation": [
          "1. vulnerability → first blank\nJustification: Adaptation reduces community 'vulnerability'.\nWhy not other options: 'Resilience' is outcome; 'management' later.",
          "2. behavior → second blank\nJustification: Programs promote responsible 'behavior'.\nWhy not other options: 'Management' is broader; 'resilience' is outcome.",
          "3. management → third blank\nJustification: Supports resource 'management'.\nWhy not other options: 'Resilience' later; 'behavior' already used.",
          "4. resilience → fourth blank\nJustification: Ensures long-term community 'resilience'.\nWhy not other options: 'Management' already used; 'behavior' already used."
        ]
      },
      {
        "id": 99,
        "text": [
          "Marine conservation protects oceans, coral reefs, and aquatic species. Protected areas, pollution control, and sustainable fisheries maintain ecosystem ",
          ". Scientific monitoring, research, and community engagement promote awareness and responsible ",
          ". Policy frameworks, international agreements, and funding enhance governance, resource allocation, and knowledge ",
          ". Education programs inspire stewardship, engagement, and long-term sustainability."
        ],
        "blanks": [
          { "correct": "integrity" },
          { "correct": "behavior" },
          { "correct": "sharing" },
          { "correct": "stewardship" }
        ],
        "draggableOptions": ["integrity", "behavior", "sharing", "stewardship", "protection", "awareness"],
        "explanation": [
          "1. integrity → first blank\nJustification: Conservation maintains ecosystem 'integrity'.\nWhy not other options: 'Protection' is general; 'stewardship' is outcome.",
          "2. behavior → second blank\nJustification: Programs promote responsible 'behavior'.\nWhy not other options: 'Awareness' is knowledge; 'sharing' is process.",
          "3. sharing → third blank\nJustification: Agreements and cooperation enhance knowledge 'sharing'.\nWhy not other options: 'Stewardship' is final outcome; 'behavior' already used.",
          "4. stewardship → fourth blank\nJustification: Education inspires long-term 'stewardship'.\nWhy not other options: 'Behavior' already used; 'integrity' already used."
        ]
      },
      {
        "id": 100,
        "text": [
          "Urban sustainability integrates energy efficiency, green spaces, and social equity. Smart infrastructure, public transport, and renewable energy improve service ",
          " and reduce environmental impact. Community programs and policy incentives promote responsible ",
          " and civic engagement. Monitoring, research, and participatory planning enhance system ",
          ", long-term performance, and social ",
          ". Education campaigns foster awareness, innovation, and sustainable ",
          " within urban populations."
        ],
        "blanks": [
          { "correct": "delivery" },
          { "correct": "behavior" },
          { "correct": "management" },
          { "correct": "cohesion" },
          { "correct": "practice" }
        ],
        "draggableOptions": ["delivery", "behavior", "management", "cohesion", "practice", "efficiency", "innovation", "access"],
        "explanation": [
          "1. delivery → first blank\nJustification: Infrastructure improves service 'delivery'.\nWhy not other options: 'Management' is later; 'efficiency' is technical.",
          "2. behavior → second blank\nJustification: Programs encourage responsible 'behavior'.\nWhy not other options: 'Practice' is later; 'cohesion' is social.",
          "3. management → third blank\nJustification: Monitoring enhances system 'management'.\nWhy not other options: 'Delivery' already used; 'efficiency' is technical.",
          "4. cohesion → fourth blank\nJustification: Programs strengthen social 'cohesion'.\nWhy not other options: 'Behavior' already used; 'practice' is later.",
          "5. practice → fifth blank\nJustification: Education fosters sustainable 'practice'.\nWhy not other options: 'Behavior' already used; 'cohesion' already used."
        ]
      }




    ];
  
  export default FillInTheBlanksDrag;
  