export interface OneChoiceQuestion {
    question: string;
    options: string[];
    correctAnswer: string; // SOLO UNA RESPUESTA
}

export interface OneChoiceExercise {
    id: number;
    text: string;
    questions: OneChoiceQuestion[];
}

export const OneChoiceExercises: OneChoiceExercise[] = [
    {
        id: 50,
        text: `Global climate change is one of the most pressing challenges facing humanity today. Rising 
               temperatures, melting ice caps, and increased frequency of extreme weather events have 
               prompted scientists and policymakers to take urgent action. Many countries are adopting 
               mitigation strategies to reduce greenhouse gas emissions, including transitioning to 
               renewable energy, promoting energy efficiency, and encouraging sustainable agricultural 
               practices. Public awareness campaigns and education play a crucial role in fostering 
               environmental responsibility among citizens, ensuring that everyone contributes to the 
               solution. Despite efforts, global coordination remains a significant hurdle, requiring 
               international agreements and cooperation.`,
        questions: [
            {
                question: "What is emphasized as a key strategy to combat climate change?",
                options: [
                    "Transitioning to renewable energy",
                    "Increasing fossil fuel consumption",
                    "Reducing public awareness",
                    "Ignoring extreme weather events"
                ],
                correctAnswer: "Transitioning to renewable energy"
            }
        ]
    },
    {
        id: 49,
        text: `Artificial intelligence has revolutionized multiple sectors, from healthcare to finance. 
               AI algorithms can process vast amounts of data with remarkable speed, enabling faster 
               decision-making and predictive insights. In medicine, AI supports diagnostics, drug 
               discovery, and personalized treatment plans. In business, it enhances customer experiences, 
               optimizes supply chains, and predicts market trends. However, ethical considerations, 
               including data privacy, algorithmic bias, and the displacement of human labor, remain 
               central challenges. Policymakers and companies are working to develop guidelines that 
               balance innovation with responsibility, ensuring AI benefits society without causing harm.`,
        questions: [
            {
                question: "Which sector benefits from AI by improving diagnostics and personalized treatment?",
                options: [
                    "Healthcare",
                    "Construction",
                    "Transportation",
                    "Hospitality"
                ],
                correctAnswer: "Healthcare"
            }
        ]
    },
    {
        id: 48,
        text: `The study of ocean ecosystems is vital for understanding climate regulation and biodiversity. 
               Oceans cover over 70% of the Earth’s surface and act as a major carbon sink, absorbing 
               significant amounts of carbon dioxide from the atmosphere. Marine species, ranging from 
               microscopic plankton to large mammals, contribute to ecological balance and provide 
               essential resources for human livelihoods. Overfishing, pollution, and habitat destruction 
               threaten these delicate ecosystems. Conservation efforts, including marine protected areas 
               and sustainable fisheries management, are crucial for preserving ocean health and ensuring 
               the long-term availability of resources for future generations.`,
        questions: [
            {
                question: "What is one of the key roles oceans play according to the passage?",
                options: [
                    "Absorbing carbon dioxide",
                    "Increasing deforestation",
                    "Reducing freshwater availability",
                    "Causing desertification"
                ],
                correctAnswer: "Absorbing carbon dioxide"
            }
        ]
    },
    {
        id: 47,
        text: `Renewable energy adoption has accelerated due to technological advances and policy support. 
               Solar panels, wind turbines, and hydroelectric systems have become more efficient and 
               cost-effective. Governments are offering subsidies, tax incentives, and favorable regulations 
               to encourage households and businesses to shift from fossil fuels to cleaner energy sources. 
               While initial investment costs may be high, long-term benefits include reduced carbon 
               emissions, lower energy bills, and enhanced energy security. Public engagement and 
               community-driven projects further enhance adoption rates, demonstrating the importance 
               of collective action in tackling environmental challenges.`,
        questions: [
            {
                question: "Which factor is highlighted as helping renewable energy adoption?",
                options: [
                    "Government subsidies and incentives",
                    "Increased fossil fuel consumption",
                    "Limited technology access",
                    "Decline in public awareness"
                ],
                correctAnswer: "Government subsidies and incentives"
            }
        ]
    },
    {
        id: 46,
        text: `Nutrition plays a fundamental role in maintaining health and preventing disease. Diets rich 
               in fruits, vegetables, whole grains, and lean proteins support bodily functions and 
               enhance immunity. Conversely, excessive intake of processed foods, sugar, and saturated 
               fats is linked to obesity, diabetes, and cardiovascular diseases. Education on balanced 
               diets, public health initiatives, and community support programs help individuals make 
               healthier food choices. Furthermore, understanding the cultural, social, and economic factors 
               influencing dietary habits is essential for designing effective interventions and promoting 
               long-term wellbeing across diverse populations.`,
        questions: [
            {
                question: "According to the passage, which type of diet supports health?",
                options: [
                    "Fruits, vegetables, whole grains, and lean proteins",
                    "Processed foods and sugary snacks",
                    "High-fat fast foods",
                    "Only dairy products"
                ],
                correctAnswer: "Fruits, vegetables, whole grains, and lean proteins"
            }
        ]
    },

    {
        id: 45,
        text: `Urbanization has led to profound changes in lifestyle, economy, and the environment. As cities 
               expand, infrastructure development accelerates, providing more opportunities for employment, 
               education, and healthcare. However, rapid urban growth also results in traffic congestion, 
               pollution, and strain on public services. Urban planning strategies, including sustainable 
               transportation, green spaces, and efficient waste management, aim to balance growth with 
               quality of life. Community engagement and policy frameworks play a vital role in ensuring 
               that urban expansion benefits residents while minimizing negative environmental and social impacts.`,
        questions: [
            {
                question: "What is one challenge associated with rapid urbanization mentioned in the passage?",
                options: [
                    "Traffic congestion",
                    "Reduced employment opportunities",
                    "Decline in education access",
                    "Less healthcare availability"
                ],
                correctAnswer: "Traffic congestion"
            }
        ]
    },
    {
        id: 44,
        text: `Artificial intelligence continues to impact creative industries such as art, music, and 
               literature. AI-powered tools can generate compositions, design graphics, and even write 
               articles based on large datasets. These technologies offer artists new ways to experiment 
               with style and form while enhancing productivity. At the same time, debates emerge around 
               authorship, originality, and ethical use of AI-generated content. Balancing innovation with 
               intellectual property rights and artistic integrity remains an ongoing challenge for 
               regulators, creators, and consumers alike.`,
        questions: [
            {
                question: "What is a concern regarding AI in creative industries?",
                options: [
                    "Authorship and originality",
                    "Decrease in technology availability",
                    "High manual labor demand",
                    "Limited audience interest"
                ],
                correctAnswer: "Authorship and originality"
            }
        ]
    },
    {
        id: 43,
        text: `Space exploration has evolved from national prestige projects to collaborative international 
               efforts. Governments, private companies, and scientific organizations invest in research 
               to study distant planets, asteroids, and celestial phenomena. Advances in robotics, satellite 
               technology, and propulsion systems have enabled more efficient missions, including Mars 
               rovers and space telescopes. While exploration generates valuable knowledge about our solar 
               system and the universe, it also raises questions about sustainability, resource utilization, 
               and ethical considerations regarding extraterrestrial environments.`,
        questions: [
            {
                question: "According to the passage, what has space exploration shifted towards?",
                options: [
                    "Collaborative international efforts",
                    "Exclusive national projects",
                    "Tourism-focused programs",
                    "Military-only missions"
                ],
                correctAnswer: "Collaborative international efforts"
            }
        ]
    },
    {
        id: 42,
        text: `Climate resilience refers to the ability of communities, ecosystems, and economies to adapt 
               to changing climate conditions and recover from extreme weather events. Strategies include 
               building flood defenses, promoting drought-resistant crops, and developing early warning 
               systems. Public education campaigns and government policies support preparedness, while 
               scientific research guides evidence-based interventions. Investing in climate resilience 
               reduces vulnerability, mitigates potential economic losses, and safeguards human well-being, 
               particularly in regions prone to natural disasters.`,
        questions: [
            {
                question: "What is a key focus of climate resilience strategies?",
                options: [
                    "Adapting to changing climate conditions",
                    "Increasing fossil fuel usage",
                    "Reducing technological innovation",
                    "Expanding urban sprawl"
                ],
                correctAnswer: "Adapting to changing climate conditions"
            }
        ]
    },
    {
        id: 41,
        text: `Language acquisition in early childhood is a complex process influenced by genetics, 
               environment, and social interaction. Children develop vocabulary, grammar, and pronunciation 
               skills through exposure to spoken and written language, as well as interaction with caregivers 
               and peers. Early literacy programs, reading aloud, and interactive communication enhance 
               language development and cognitive growth. Understanding linguistic milestones enables 
               educators and parents to provide appropriate support, identify potential delays, and foster 
               lifelong communication skills.`,
        questions: [
            {
                question: "According to the passage, what supports early language development?",
                options: [
                    "Reading aloud and interactive communication",
                    "Minimizing social interaction",
                    "Exclusive screen time use",
                    "Avoiding structured literacy programs"
                ],
                correctAnswer: "Reading aloud and interactive communication"
            }
        ]
    },

    {
        id: 40,
        text: `Biodiversity loss has become a critical concern as human activities continue to alter natural 
               habitats. Deforestation, urban expansion, pollution, and climate change threaten species 
               survival and ecosystem stability. Protecting biodiversity involves establishing wildlife 
               reserves, enforcing conservation laws, and promoting sustainable land use practices. 
               Ecological research helps identify vulnerable species, understand interdependent relationships, 
               and guide effective interventions. Maintaining biodiversity is essential for food security, 
               ecosystem services, and the overall health of the planet, benefiting both humans and wildlife.`,
        questions: [
            {
                question: "What is a key method for protecting biodiversity mentioned in the passage?",
                options: [
                    "Establishing wildlife reserves",
                    "Increasing urban expansion",
                    "Intensifying deforestation",
                    "Promoting industrial pollution"
                ],
                correctAnswer: "Establishing wildlife reserves"
            }
        ]
    },
    {
        id: 39,
        text: `Nutrition science emphasizes the importance of a balanced diet for maintaining physical 
               and mental health. Essential nutrients include carbohydrates, proteins, fats, vitamins, 
               and minerals. Consuming a variety of fruits, vegetables, whole grains, and lean proteins 
               supports energy levels, immune function, and cognitive performance. Excessive intake of 
               processed foods, sugar, and saturated fats can contribute to chronic illnesses such as 
               obesity, diabetes, and cardiovascular disease. Public health campaigns encourage healthy 
               eating habits and provide guidelines for portion control, meal planning, and mindful 
               consumption.`,
        questions: [
            {
                question: "According to the passage, what can a balanced diet help prevent?",
                options: [
                    "Chronic illnesses such as obesity and diabetes",
                    "Immediate memory loss",
                    "Hair growth issues",
                    "Reduced exercise performance"
                ],
                correctAnswer: "Chronic illnesses such as obesity and diabetes"
            }
        ]
    },
    {
        id: 38,
        text: `Renewable water management is increasingly important in regions facing water scarcity 
               due to population growth, industrialization, and climate change. Efficient water use, 
               recycling, rainwater harvesting, and sustainable irrigation practices help conserve freshwater 
               resources. Policies promoting equitable distribution, pollution control, and public awareness 
               campaigns ensure that water remains accessible for domestic, agricultural, and industrial 
               needs. Failure to manage water resources effectively can lead to shortages, conflicts, and 
               environmental degradation, highlighting the need for integrated approaches to water sustainability.`,
        questions: [
            {
                question: "What is one approach mentioned for managing water resources sustainably?",
                options: [
                    "Rainwater harvesting",
                    "Expanding industrial water use",
                    "Ignoring pollution control",
                    "Reducing public awareness campaigns"
                ],
                correctAnswer: "Rainwater harvesting"
            }
        ]
    },
    {
        id: 37,
        text: `The impact of social media on communication has been profound, transforming how individuals 
               connect, share information, and engage with communities. Platforms allow real-time interaction, 
               networking, and dissemination of ideas across global audiences. While social media facilitates 
               collaboration and awareness, it also presents challenges such as misinformation, cyberbullying, 
               and reduced face-to-face interaction. Understanding the benefits and risks helps users, educators, 
               and policymakers promote digital literacy, ethical online behavior, and the responsible use of 
               technology to maximize social benefits while minimizing harm.`,
        questions: [
            {
                question: "According to the passage, what is a negative consequence of social media?",
                options: [
                    "Misinformation and cyberbullying",
                    "Improved global communication",
                    "Better networking opportunities",
                    "Increased collaboration"
                ],
                correctAnswer: "Misinformation and cyberbullying"
            }
        ]
    },
    {
        id: 36,
        text: `Historical studies reveal how societies adapt to environmental, economic, and political 
               challenges over time. Patterns of migration, urbanization, technological innovation, and 
               cultural exchange provide insight into human resilience and societal transformation. Understanding 
               historical events and trends allows policymakers, educators, and researchers to anticipate 
               future challenges, develop effective strategies, and learn from past successes and failures. 
               Integrating history with contemporary social sciences enhances critical thinking and informs 
               decision-making in complex, dynamic environments.`,
        questions: [
            {
                question: "What is one benefit of studying historical events, according to the passage?",
                options: [
                    "It helps anticipate future challenges",
                    "It prevents environmental changes",
                    "It guarantees economic growth",
                    "It eliminates societal transformation"
                ],
                correctAnswer: "It helps anticipate future challenges"
            }
        ]
    },
    {
        id: 35,
        text: `Mental health awareness has gained prominence as societies recognize the psychological 
               impact of stress, trauma, and social pressures. Access to counseling, therapy, and community 
               support networks enhances emotional well-being and helps individuals manage mental health 
               challenges effectively. Employers, schools, and governments implement programs promoting 
               mental resilience, stress reduction, and early intervention. Reducing stigma associated with 
               mental illness encourages people to seek help, fostering healthier communities and improving 
               overall quality of life.`,
        questions: [
            {
                question: "What helps individuals manage mental health challenges, according to the passage?",
                options: [
                    "Counseling and therapy",
                    "Ignoring stress",
                    "Avoiding community support",
                    "Focusing only on physical health"
                ],
                correctAnswer: "Counseling and therapy"
            }
        ]
    },
    {
        id: 34,
        text: `The evolution of transportation systems has reshaped societies, economies, and urban planning. 
               From the invention of the wheel to modern high-speed trains, aviation, and autonomous vehicles, 
               mobility solutions influence trade, tourism, and daily life. Sustainable transportation, including 
               electric vehicles, public transit, and cycling infrastructure, addresses environmental concerns 
               and reduces reliance on fossil fuels. Investment in efficient, accessible, and safe transport 
               networks fosters economic growth, social inclusion, and environmental sustainability across 
               regions.`,
        questions: [
            {
                question: "According to the passage, what is one advantage of sustainable transportation?",
                options: [
                    "It reduces reliance on fossil fuels",
                    "It increases traffic congestion",
                    "It discourages public transit",
                    "It limits social inclusion"
                ],
                correctAnswer: "It reduces reliance on fossil fuels"
            }
        ]
    },
    {
        id: 33,
        text: `Ocean ecosystems provide essential services, including climate regulation, food supply, 
               and biodiversity support. Marine conservation efforts address overfishing, pollution, and 
               habitat destruction. Marine protected areas, sustainable fishing practices, and pollution 
               reduction initiatives contribute to ecosystem health and resilience. Collaboration among 
               governments, organizations, and local communities ensures that oceans continue to sustain 
               livelihoods, protect species, and maintain ecological balance, which is crucial for the 
               well-being of both marine and human populations.`,
        questions: [
            {
                question: "What is one method of protecting ocean ecosystems mentioned in the passage?",
                options: [
                    "Marine protected areas",
                    "Increasing fishing quotas",
                    "Expanding coastal development",
                    "Polluting waterways"
                ],
                correctAnswer: "Marine protected areas"
            }
        ]
    },
    {
        id: 32,
        text: `Renewable energy adoption faces both technical and social challenges. While solar, wind, 
               and hydroelectric power reduce greenhouse gas emissions, storage limitations, cost concerns, 
               and inconsistent supply pose barriers. Public acceptance, policy frameworks, and investment 
               incentives are essential to overcome these obstacles. Integrating renewable energy into 
               national grids, improving battery efficiency, and fostering community participation enhance 
               sustainability. Addressing both engineering and social aspects ensures that renewable energy 
               contributes effectively to climate mitigation goals and long-term energy security.`,
        questions: [
            {
                question: "What is one challenge to renewable energy adoption mentioned in the passage?",
                options: [
                    "Storage limitations",
                    "Excess fossil fuel usage",
                    "Abundance of energy supply",
                    "Reduced community participation"
                ],
                correctAnswer: "Storage limitations"
            }
        ]
    },
    {
        id: 31,
        text: `Cultural heritage preservation helps maintain a sense of identity, continuity, and 
               historical knowledge. Monuments, traditions, languages, and artifacts connect current 
               generations with their past. Governments, organizations, and communities engage in documentation, 
               restoration, and education initiatives to safeguard cultural assets. Preservation promotes 
               tourism, economic development, and intercultural understanding while ensuring that valuable 
               knowledge and practices are transmitted to future generations.`,
        questions: [
            {
                question: "According to the passage, why is cultural heritage preservation important?",
                options: [
                    "It maintains identity and historical knowledge",
                    "It reduces tourism opportunities",
                    "It prevents economic growth",
                    "It discourages community engagement"
                ],
                correctAnswer: "It maintains identity and historical knowledge"
            }
        ]
    },
    {
        id: 30,
        text: `Advances in medical research have significantly increased life expectancy and improved 
               quality of life. Innovations in diagnostics, treatment methods, and preventive care enable 
               early detection of diseases and more effective management of chronic conditions. Public health 
               campaigns, vaccination programs, and health education initiatives play a critical role in 
               reducing mortality and morbidity. Interdisciplinary collaboration among researchers, 
               healthcare providers, and policymakers fosters the translation of scientific discoveries 
               into practical solutions that benefit populations worldwide.`,
        questions: [
            {
                question: "What is one benefit of medical research mentioned in the passage?",
                options: [
                    "Increased life expectancy",
                    "Higher disease prevalence",
                    "Reduced quality of care",
                    "Limited access to diagnostics"
                ],
                correctAnswer: "Increased life expectancy"
            }
        ]
    },
    {
        id: 29,
        text: `Urban green spaces, such as parks, gardens, and tree-lined streets, contribute significantly 
               to environmental quality, public health, and social well-being. They reduce air pollution, 
               lower urban temperatures, and provide habitats for various species. Access to green spaces 
               encourages physical activity, relaxation, and social interaction among residents. Planning, 
               maintaining, and expanding urban greenery requires collaboration between municipalities, 
               community groups, and environmental organizations. Proper integration of green infrastructure 
               into city development promotes sustainability, enhances aesthetics, and improves the quality 
               of life for urban populations.`,
        questions: [
            {
                question: "What is one benefit of urban green spaces mentioned in the passage?",
                options: [
                    "Reducing air pollution",
                    "Increasing urban temperatures",
                    "Limiting public access",
                    "Reducing physical activity"
                ],
                correctAnswer: "Reducing air pollution"
            }
        ]
    },
    {
        id: 28,
        text: `Artificial intelligence (AI) has transformed numerous industries, including healthcare, 
               finance, and transportation. AI systems analyze vast amounts of data, identify patterns, 
               and make predictions that support decision-making. In healthcare, AI assists with diagnostics, 
               personalized treatments, and patient monitoring. In finance, AI improves risk assessment and 
               fraud detection. Despite these advantages, ethical concerns, data privacy issues, and potential 
               job displacement require careful consideration. Ensuring transparency, accountability, and 
               responsible deployment is critical for maximizing the benefits of AI while mitigating its risks.`,
        questions: [
            {
                question: "What is a concern related to AI mentioned in the passage?",
                options: [
                    "Data privacy issues",
                    "Faster diagnostics",
                    "Improved transportation",
                    "Pattern recognition"
                ],
                correctAnswer: "Data privacy issues"
            }
        ]
    },
    {
        id: 27,
        text: `Climate change poses significant threats to ecosystems, agriculture, and human societies. 
               Rising global temperatures, altered precipitation patterns, and extreme weather events affect 
               food security, water availability, and biodiversity. Adaptation strategies include developing 
               resilient crops, sustainable water management, and urban planning that reduces vulnerability 
               to floods and heatwaves. Mitigation measures, such as reducing greenhouse gas emissions, 
               transitioning to renewable energy, and promoting low-carbon transportation, are essential to 
               limit long-term climate impacts. Collective action by governments, industries, and communities 
               is crucial to address this global challenge.`,
        questions: [
            {
                question: "Which of the following is mentioned as a mitigation measure for climate change?",
                options: [
                    "Transitioning to renewable energy",
                    "Expanding fossil fuel use",
                    "Ignoring urban planning",
                    "Increasing greenhouse gas emissions"
                ],
                correctAnswer: "Transitioning to renewable energy"
            }
        ]
    },
    {
        id: 26,
        text: `The study of neuroscience has expanded our understanding of the brain's structure, function, 
               and plasticity. Research explores neural pathways, cognitive processes, and the biological 
               basis of behavior and emotion. Advanced imaging techniques, such as MRI and PET scans, allow 
               scientists to observe brain activity in real-time. Insights from neuroscience inform treatments 
               for neurological disorders, mental health conditions, and learning disabilities. Collaborative 
               efforts across psychology, biology, and medicine continue to advance knowledge, improve clinical 
               interventions, and enhance human cognitive potential.`,
        questions: [
            {
                question: "What does neuroscience research help improve according to the passage?",
                options: [
                    "Treatments for neurological disorders",
                    "Urban development strategies",
                    "Agricultural crop yields",
                    "Renewable energy solutions"
                ],
                correctAnswer: "Treatments for neurological disorders"
            }
        ]
    },
    {
        id: 25,
        text: `Globalization has interconnected economies, cultures, and political systems, influencing trade, 
               communication, and migration. Businesses operate across borders, enabling access to international 
               markets, resources, and labor. Cultural exchange introduces diverse ideas, languages, and 
               traditions. While globalization promotes economic growth and technological advancement, it also 
               presents challenges such as income inequality, environmental degradation, and the loss of 
               cultural identity. Policies that balance economic opportunities with social and environmental 
               considerations are crucial for sustainable and equitable globalization.`,
        questions: [
            {
                question: "What is one challenge of globalization mentioned in the passage?",
                options: [
                    "Income inequality",
                    "Faster communication",
                    "Access to international markets",
                    "Cultural exchange"
                ],
                correctAnswer: "Income inequality"
            }
        ]
    },
    {
        id: 24,
        text: `Space exploration continues to provide insights into planetary systems, astrophysics, and the 
               origins of life. Robotic missions, telescopes, and satellites have advanced knowledge of Mars, 
               the Moon, and distant celestial bodies. Human spaceflight contributes to research on human 
               adaptation to microgravity, space medicine, and long-duration missions. Scientific discoveries 
               inform technology development, resource management, and potential colonization efforts. 
               International collaboration, funding, and ethical considerations shape the trajectory of space 
               exploration as humanity seeks to expand understanding beyond Earth.`,
        questions: [
            {
                question: "What is one contribution of space exploration mentioned in the passage?",
                options: [
                    "Advancing knowledge of celestial bodies",
                    "Reducing planetary diversity",
                    "Limiting scientific collaboration",
                    "Restricting technology development"
                ],
                correctAnswer: "Advancing knowledge of celestial bodies"
            }
        ]
    },
    {
        id: 23,
        text: `The importance of financial literacy is increasingly recognized as individuals navigate complex 
               economic environments. Understanding budgeting, saving, investing, and managing debt enables 
               informed financial decisions and long-term security. Educational programs, online resources, 
               and community workshops provide tools for improving financial competence. Awareness of risks, 
               such as high-interest loans and fraudulent schemes, helps prevent financial pitfalls. 
               Encouraging financial literacy from an early age supports responsible behavior, reduces economic 
               stress, and fosters stability for both individuals and society.`,
        questions: [
            {
                question: "According to the passage, why is financial literacy important?",
                options: [
                    "It enables informed financial decisions",
                    "It guarantees immediate wealth",
                    "It eliminates all financial risks",
                    "It reduces the need for education"
                ],
                correctAnswer: "It enables informed financial decisions"
            }
        ]
    },
    {
        id: 22,
        text: `Language acquisition in early childhood significantly influences cognitive development, 
               communication skills, and social interaction. Exposure to diverse linguistic environments 
               enhances vocabulary, comprehension, and critical thinking abilities. Multilingual children 
               often demonstrate greater flexibility in problem-solving and adaptability. Early education, 
               parental involvement, and access to rich verbal experiences contribute to language proficiency. 
               Understanding the processes of language development informs teaching strategies, intervention 
               programs, and policies to support linguistic and cognitive growth across populations.`,
        questions: [
            {
                question: "What is a benefit of early language acquisition mentioned in the passage?",
                options: [
                    "Enhanced cognitive development",
                    "Guaranteed perfect pronunciation",
                    "Avoidance of social interaction",
                    "Immediate academic success"
                ],
                correctAnswer: "Enhanced cognitive development"
            }
        ]
    },
    {
        id: 21,
        text: `Sustainable agriculture emphasizes environmentally friendly farming practices that maintain 
               soil fertility, conserve water, and reduce chemical use. Crop rotation, organic fertilizers, 
               and integrated pest management support long-term productivity and ecosystem health. Sustainable 
               methods balance economic viability with environmental stewardship, ensuring food security and 
               reducing negative impacts on surrounding habitats. Governments, NGOs, and farming communities 
               collaborate to promote sustainable agriculture through policies, education, and financial 
               incentives, contributing to global sustainability goals.`,
        questions: [
            {
                question: "Which practice is associated with sustainable agriculture according to the passage?",
                options: [
                    "Crop rotation",
                    "Excessive pesticide use",
                    "Over-irrigation",
                    "Monoculture farming"
                ],
                correctAnswer: "Crop rotation"
            }
        ]
    },
    {
        id: 20,
        text: `Urbanization transforms social, economic, and environmental landscapes, affecting housing, 
               transportation, and public services. Cities attract populations seeking employment, education, 
               and healthcare, often resulting in population density and infrastructure strain. Effective urban 
               planning incorporates zoning, public transit, green spaces, and waste management to address 
               challenges. Sustainable urban development integrates technology, community participation, 
               and policy initiatives to improve livability, reduce environmental impact, and enhance economic 
               opportunities for diverse populations.`,
        questions: [
            {
                question: "What is one goal of sustainable urban development mentioned in the passage?",
                options: [
                    "Improving livability",
                    "Increasing population density",
                    "Reducing public transit",
                    "Eliminating green spaces"
                ],
                correctAnswer: "Improving livability"
            }
        ]
    },
    {
        id: 19,
        text: `Renewable resources, including solar, wind, and hydro power, are essential for mitigating 
               climate change and reducing dependence on fossil fuels. Energy efficiency, technological 
               innovation, and policy support enhance renewable energy adoption. Transitioning to clean 
               energy systems reduces greenhouse gas emissions, decreases air pollution, and promotes 
               sustainable development. Challenges such as storage limitations, cost barriers, and public 
               acceptance require strategic planning and investment. Collaborative efforts between governments, 
               industries, and communities accelerate the global shift toward renewable energy and long-term 
               environmental resilience.`,
        questions: [
            {
                question: "According to the passage, what is a benefit of renewable energy?",
                options: [
                    "Reducing greenhouse gas emissions",
                    "Increasing fossil fuel consumption",
                    "Limiting sustainable development",
                    "Raising air pollution levels"
                ],
                correctAnswer: "Reducing greenhouse gas emissions"
            }
        ]
    },
    {
        id: 18,
        text: `Public health initiatives aim to prevent disease, promote wellness, and improve population 
               health outcomes. Vaccination campaigns, health education, sanitation, and access to healthcare 
               services are critical components. Data monitoring, research, and community engagement inform 
               targeted interventions. Addressing social determinants of health, such as income, education, 
               and environment, ensures equitable access to health resources. Coordinated efforts by governments, 
               healthcare providers, and civil society contribute to resilient health systems and healthier 
               communities worldwide.`,
        questions: [
            {
                question: "What is one component of public health initiatives mentioned in the passage?",
                options: [
                    "Vaccination campaigns",
                    "Ignoring sanitation",
                    "Reducing healthcare access",
                    "Promoting unhealthy diets"
                ],
                correctAnswer: "Vaccination campaigns"
            }
        ]
    },
    {
        id: 17,
        text: `The study of climate patterns helps scientists predict weather events, understand global 
               warming, and develop adaptation strategies. Meteorological data, satellite imagery, and 
               computer modeling provide insight into atmospheric changes. Understanding seasonal cycles, 
               ocean currents, and greenhouse gas concentrations enables the forecasting of storms, droughts, 
               and temperature extremes. Accurate climate science informs agriculture, disaster preparedness, 
               and policy-making, helping communities mitigate risks, adapt to changes, and build resilience 
               against environmental challenges.`,
        questions: [
            {
                question: "According to the passage, what is one use of climate science?",
                options: [
                    "Forecasting storms and temperature extremes",
                    "Promoting deforestation",
                    "Increasing urban pollution",
                    "Reducing public awareness of climate"
                ],
                correctAnswer: "Forecasting storms and temperature extremes"
            }
        ]
    },
    {
        id: 16,
        text: `Literacy development is crucial for academic achievement, communication, and lifelong 
               learning. Exposure to reading, writing, and critical thinking activities in early childhood 
               enhances language skills and cognitive growth. Educational programs, family engagement, and 
               access to books and digital resources support literacy acquisition. Early intervention 
               strategies address learning difficulties, ensuring students achieve proficiency. Literacy 
               enables individuals to participate fully in society, access opportunities, and make informed 
               decisions throughout their lives.`,
        questions: [
            {
                question: "What does literacy development enable according to the passage?",
                options: [
                    "Full participation in society",
                    "Avoidance of learning difficulties",
                    "Immediate academic perfection",
                    "Limited communication skills"
                ],
                correctAnswer: "Full participation in society"
            }
        ]
    },
    {
        id: 15,
        text: `Ecotourism focuses on responsible travel to natural areas that conserves the environment, 
               sustains local communities, and educates travelers about ecological and cultural values. 
               Activities include wildlife observation, guided nature tours, and community-led cultural 
               experiences. Proper management ensures minimal environmental impact, protects biodiversity, 
               and generates economic benefits for local populations. Education and awareness campaigns 
               encourage tourists to respect habitats, reduce waste, and support conservation initiatives, 
               fostering sustainable tourism practices that balance enjoyment with ecological responsibility.`,
        questions: [
            {
                question: "What is a key principle of ecotourism mentioned in the passage?",
                options: [
                    "Conserving the environment",
                    "Increasing mass tourism",
                    "Exploiting local resources",
                    "Ignoring ecological impact"
                ],
                correctAnswer: "Conserving the environment"
            }
        ]
    },

    {
        id: 14,
        text: `Renewable water management involves using natural water resources efficiently to meet 
               human needs while maintaining ecological balance. Strategies include rainwater harvesting, 
               efficient irrigation, wastewater recycling, and sustainable groundwater use. Protecting 
               wetlands, rivers, and lakes ensures biodiversity preservation and water quality. Climate 
               change, population growth, and industrial demands create challenges requiring integrated 
               water management policies. Collaboration between governments, communities, and industries 
               ensures equitable access, reduces scarcity, and supports long-term sustainability of water 
               resources.`,
        questions: [
            {
                question: "What is one strategy for renewable water management mentioned in the passage?",
                options: [
                    "Rainwater harvesting",
                    "Excessive groundwater extraction",
                    "Polluting rivers",
                    "Ignoring wetlands"
                ],
                correctAnswer: "Rainwater harvesting"
            }
        ]
    },
    {
        id: 13,
        text: `Cultural heritage preservation protects tangible and intangible assets, such as monuments, 
               artworks, traditions, and languages, that reflect the identity of societies. Preservation 
               involves restoration, documentation, legislation, and public engagement. Museums, archives, 
               and cultural institutions play a key role in safeguarding history and knowledge. Globalization, 
               urbanization, and conflict pose threats to cultural heritage, making proactive efforts essential. 
               Supporting local communities, promoting education, and using technology for digital archiving 
               enhance preservation, ensuring future generations can access and appreciate their cultural 
               legacy.`,
        questions: [
            {
                question: "According to the passage, what is a method to preserve cultural heritage?",
                options: [
                    "Restoration and documentation",
                    "Destroying historical sites",
                    "Neglecting traditions",
                    "Limiting public engagement"
                ],
                correctAnswer: "Restoration and documentation"
            }
        ]
    },
    {
        id: 12,
        text: `Cybersecurity is critical in an increasingly digital world where personal, corporate, 
               and governmental data are stored and transmitted online. Threats include hacking, phishing, 
               malware, and data breaches that can result in financial losses, identity theft, and operational 
               disruptions. Effective cybersecurity involves encryption, authentication, regular updates, 
               employee training, and risk assessment. Organizations must implement comprehensive policies 
               and incident response plans. Cooperation among governments, businesses, and individuals ensures 
               robust protection and resilience against evolving cyber threats.`,
        questions: [
            {
                question: "What is one measure to enhance cybersecurity mentioned in the passage?",
                options: [
                    "Encryption",
                    "Ignoring updates",
                    "Sharing passwords publicly",
                    "Avoiding employee training"
                ],
                correctAnswer: "Encryption"
            }
        ]
    },
    {
        id: 11,
        text: `Ocean conservation addresses challenges such as overfishing, pollution, habitat destruction, 
               and climate change impacts on marine ecosystems. Protecting coral reefs, mangroves, and 
               coastal wetlands preserves biodiversity, supports fisheries, and mitigates climate risks. 
               International agreements, marine protected areas, and sustainable fishing practices contribute 
               to ocean health. Education and awareness campaigns encourage responsible behavior among 
               communities, industries, and tourists. Collaborative action ensures long-term resilience, 
               resource availability, and ecological balance in marine environments.`,
        questions: [
            {
                question: "According to the passage, what is one focus of ocean conservation?",
                options: [
                    "Protecting coral reefs and mangroves",
                    "Increasing marine pollution",
                    "Promoting overfishing",
                    "Destroying coastal wetlands"
                ],
                correctAnswer: "Protecting coral reefs and mangroves"
            }
        ]
    },
    {
        id: 10,
        text: `Digital marketing uses online platforms, social media, search engines, and email to 
               reach and engage consumers. Techniques include content marketing, search engine optimization, 
               influencer partnerships, and targeted advertising. Data analytics allows marketers to measure 
               engagement, conversion, and return on investment. Personalization, timely communication, and 
               user experience optimization enhance effectiveness. Despite advantages, challenges such as 
               privacy concerns, ad-blocking, and information overload require strategic planning. Integrating 
               digital marketing with traditional approaches provides comprehensive brand promotion and 
               customer relationship management.`,
        questions: [
            {
                question: "What is one tool used in digital marketing mentioned in the passage?",
                options: [
                    "Social media",
                    "Physical billboards only",
                    "Door-to-door sales exclusively",
                    "Radio without online content"
                ],
                correctAnswer: "Social media"
            }
        ]
    },
    {
        id: 9,
        text: `Public transportation systems improve mobility, reduce traffic congestion, and lower 
               greenhouse gas emissions. Efficient networks include buses, trains, subways, and trams, 
               complemented by pedestrian and cycling infrastructure. Investments in accessibility, 
               safety, and affordability increase ridership. Integrating technology, such as mobile apps 
               and real-time tracking, enhances user convenience. Policy support, urban planning, and 
               sustainable funding models ensure long-term viability. Encouraging public transportation 
               use reduces environmental impact and promotes social equity by providing mobility options 
               for all community members.`,
        questions: [
            {
                question: "According to the passage, what is a benefit of public transportation?",
                options: [
                    "Reducing traffic congestion",
                    "Increasing private car use",
                    "Raising emissions",
                    "Limiting mobility options"
                ],
                correctAnswer: "Reducing traffic congestion"
            }
        ]
    },
    {
        id: 8,
        text: `Artificial intelligence in healthcare improves diagnostics, treatment planning, 
               and patient monitoring. Machine learning algorithms analyze medical data to detect diseases, 
               predict outcomes, and personalize therapies. AI-enabled devices assist in surgeries, imaging, 
               and drug discovery. While enhancing efficiency and accuracy, challenges include data privacy, 
               ethical considerations, and integration with clinical workflows. Healthcare professionals must 
               balance technological advancements with patient-centered care. Proper regulation, training, 
               and monitoring ensure safe and effective AI implementation for improved health outcomes.`,
        questions: [
            {
                question: "What is one application of AI in healthcare mentioned in the passage?",
                options: [
                    "Diagnostics",
                    "Reducing patient monitoring",
                    "Ignoring clinical workflows",
                    "Increasing errors intentionally"
                ],
                correctAnswer: "Diagnostics"
            }
        ]
    },
    {
        id: 7,
        text: `Renewable energy sources, such as wind, solar, and hydroelectric power, provide 
               sustainable alternatives to fossil fuels. Advances in energy storage, grid integration, 
               and smart technology enable more reliable and efficient electricity supply. Transitioning 
               to renewables reduces greenhouse gas emissions, mitigates climate change, and fosters 
               energy independence. Policymakers encourage adoption through incentives, regulations, 
               and public awareness campaigns. Despite high initial investment, long-term benefits include 
               environmental protection, cost savings, and job creation in green industries.`,
        questions: [
            {
                question: "According to the passage, what is one advantage of renewable energy?",
                options: [
                    "Reducing greenhouse gas emissions",
                    "Increasing fossil fuel use",
                    "Higher pollution levels",
                    "Limiting electricity supply"
                ],
                correctAnswer: "Reducing greenhouse gas emissions"
            }
        ]
    },
    {
        id: 6,
        text: `Climate change adaptation involves adjusting ecological, social, and economic systems 
               to minimize harm from climate impacts. Strategies include resilient infrastructure, 
               sustainable agriculture, early warning systems, and disaster preparedness plans. Communities, 
               governments, and organizations collaborate to assess risks, allocate resources, and implement 
               effective interventions. Education, capacity building, and stakeholder participation enhance 
               resilience. Successful adaptation reduces vulnerability, safeguards livelihoods, and supports 
               sustainable development in the face of environmental change.`,
        questions: [
            {
                question: "What is one strategy for climate change adaptation mentioned in the passage?",
                options: [
                    "Resilient infrastructure",
                    "Ignoring environmental risks",
                    "Decreasing disaster preparedness",
                    "Reducing stakeholder participation"
                ],
                correctAnswer: "Resilient infrastructure"
            }
        ]
    },
    {
        id: 5,
        text: `The human brain is highly adaptable, capable of neuroplasticity, which allows neurons 
               to reorganize and form new connections. Learning, experience, and rehabilitation after injury 
               can strengthen or create pathways. Cognitive exercises, environmental stimulation, and social 
               interaction enhance plasticity. Understanding brain function informs treatments for neurological 
               disorders, mental health conditions, and age-related cognitive decline. Research into 
               neuroplasticity supports personalized therapy approaches and the development of technologies 
               that optimize cognitive potential across the lifespan.`,
        questions: [
            {
                question: "What does neuroplasticity allow according to the passage?",
                options: [
                    "Neurons to reorganize and form new connections",
                    "Neurons to remain static",
                    "Cognitive decline without intervention",
                    "Complete avoidance of learning"
                ],
                correctAnswer: "Neurons to reorganize and form new connections"
            }
        ]
    },
    {
        id: 4,
        text: `The digital economy leverages online platforms, big data, and cloud computing to 
               facilitate transactions, innovation, and communication. Businesses utilize e-commerce, 
               fintech, and digital marketing to reach global markets efficiently. Consumer behavior, 
               data analytics, and artificial intelligence shape services and products. While creating 
               opportunities for growth, the digital economy also presents challenges, including data 
               privacy, cybersecurity risks, and digital divides. Policy frameworks, education, and equitable 
               access support sustainable development within the digital landscape.`,
        questions: [
            {
                question: "What is one challenge of the digital economy mentioned in the passage?",
                options: [
                    "Data privacy concerns",
                    "Unlimited physical store access",
                    "Reducing global market reach",
                    "Eliminating technology use"
                ],
                correctAnswer: "Data privacy concerns"
            }
        ]
    },
    {
        id: 3,
        text: `Sustainable tourism emphasizes responsible travel that conserves natural resources, 
               respects local cultures, and provides socio-economic benefits to host communities. Planning 
               considers environmental impact, visitor education, and community involvement. Practices include 
               eco-friendly accommodations, low-impact activities, and supporting local businesses. Effective 
               sustainable tourism balances enjoyment for travelers with conservation goals, ensuring that 
               destinations remain viable and attractive for future generations. Policy measures, awareness 
               campaigns, and stakeholder collaboration are essential for long-term sustainability.`,
        questions: [
            {
                question: "According to the passage, what is a principle of sustainable tourism?",
                options: [
                    "Conserving natural resources",
                    "Ignoring cultural impact",
                    "Maximizing environmental damage",
                    "Focusing only on profit"
                ],
                correctAnswer: "Conserving natural resources"
            }
        ]
    },
    {
        id: 2,
        text: `Urban air pollution results from vehicle emissions, industrial processes, and energy 
               consumption. Pollutants such as particulate matter, nitrogen oxides, and volatile organic 
               compounds affect respiratory health, contribute to climate change, and reduce quality of life. 
               Mitigation strategies include promoting public transportation, adopting clean technologies, 
               enforcing emissions regulations, and enhancing green spaces. Monitoring, policy enforcement, 
               and public awareness campaigns are essential to reduce pollution levels and protect public 
               health and the environment in urban areas.`,
        questions: [
            {
                question: "What is one method to reduce urban air pollution mentioned in the passage?",
                options: [
                    "Promoting public transportation",
                    "Increasing vehicle emissions",
                    "Encouraging industrial pollution",
                    "Eliminating green spaces"
                ],
                correctAnswer: "Promoting public transportation"
            }
        ]
    },
    {
        id: 1,
        text: `Biodiversity conservation is crucial for ecosystem stability, food security, and climate 
               regulation. Habitats such as forests, wetlands, and coral reefs host diverse species that 
               interact and support ecological processes. Human activities, including deforestation, 
               overfishing, and pollution, threaten biodiversity. Conservation strategies involve protected 
               areas, habitat restoration, sustainable resource management, and community engagement. 
               Research and monitoring inform policies and actions to preserve species diversity. Global 
               cooperation, public education, and responsible practices are vital to maintaining healthy 
               ecosystems and ensuring that natural resources are available for future generations.`,
        questions: [
            {
                question: "According to the passage, why is biodiversity conservation important?",
                options: [
                    "For ecosystem stability and food security",
                    "To reduce ecosystem interactions",
                    "To promote deforestation",
                    "To limit species diversity"
                ],
                correctAnswer: "For ecosystem stability and food security"
            }
        ]
    }
    
];

export default OneChoiceExercises;
