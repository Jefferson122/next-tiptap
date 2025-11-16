export interface Sentence {
  id: number;
  title: string;
  text: string;
  audio: string;
}

const RetellLecture: Sentence[] = [
  {
    id: 30,
    title: 'Energy Insecurity in American Households',
    text: `Most Americans take energy for granted, but for many families, maintaining access to reliable and affordable energy is a significant challenge. Energy insecurity affects millions annually, especially Black and Hispanic households, families with young children, or those requiring medical devices. Poor housing conditions make it worse. Households unable to pay for energy struggle to use refrigerators, medical devices, or maintain safe temperatures. Extreme heat or cold can lead to mental and physical health problems. Dangerous coping strategies, like burning trash or staying in cars with engines running, are risks. Public policies like energy bill assistance, weatherization programs, and residential solar incentives can alleviate these hardships. Additionally, unpredictable energy costs and seasonal fluctuations make budgeting extremely difficult, forcing families to make tough choices between food, medicine, and energy, which can create long-term health and social consequences.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763318987/audios_tts/audio_20696687-1980-45ac-b344-052f6918db74.mp3'
  },
  {
    id: 29,
    title: 'Bumblebees and Flower Temperature Preferences',
    text: `Researchers have discovered that bumblebees select flowers not only for nectar but also for temperature. Bees expend energy staying warm and cannot fly when too cold, so warmer flowers offer a benefit. In experiments, bees preferred slightly warmer flowers even when nectar was equal. Some plants appear evolutionarily adapted to warmth, attracting more pollinators. This preference influences which plants are pollinated most often, showing that temperature, alongside color and nectar quality, plays a crucial role in bee behavior and plant reproduction strategies. Understanding these preferences helps scientists design better conservation strategies and informs gardeners and farmers on how to optimize crop yields by considering microclimate conditions that favor pollination. These findings also highlight the delicate balance between climate change and pollinator behavior, emphasizing the importance of preserving habitats.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763318989/audios_tts/audio_a7e02aaf-962a-47fa-b19e-22e00bcec71f.mp3'
  },
  {
    id: 28,
    title: 'The Rapid Evolution of Software',
    text: `The software industry is remarkably young, only around 67 years old, yet has expanded rapidly. Moore's Law—the exponential growth of computing power and the fall in costs—enabled information technology to penetrate areas once unforeseen. Developers have focused on the low-hanging fruit, influencing the growth of software and IT over decades. This rapid expansion affects how entrepreneurs innovate, what technologies are prioritized, and how society adapts to new digital tools. The industry continues evolving at a fast pace, with consequences across many sectors. The speed of development has also led to challenges in cybersecurity, ethical use of AI, and the need for continuous learning for professionals to keep up with evolving programming languages, frameworks, and cloud infrastructures. Additionally, software now drives major economic and social transformations, influencing everything from healthcare to education.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763318992/audios_tts/audio_c6830f7d-9a53-467c-bd52-4a8b2da087e4.mp3'
  },
  {
    id: 27,
    title: 'Characteristics of a Great Idea',
    text: `Successful entrepreneurs understand that a great idea has to be novel, unique, and transformative. Ideas often build on smaller concepts but must improve or expand upon them to be impactful. Merely copying others doesn't create uniqueness; the key lies in adding individuality and innovation. Constant iteration and deliberate effort allow ideas to evolve into something productive and distinct. Unique ideas are often extensions of pre-existing notions, but only those that solve problems better or more efficiently truly stand out. Moreover, market understanding, timing, and the ability to pivot when faced with challenges often determine whether a concept remains an abstract idea or becomes a successful venture impacting many lives. Creativity, resilience, and feedback from users further refine ideas into innovations that endure.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763318994/audios_tts/audio_6d97753f-7bd5-4a4c-8328-77f171ffb571.mp3'
  },
  {
    id: 26,
    title: 'Globalization and Modern Challenges',
    text: `Globalization has changed the way we perceive disasters and economic crises. In past decades, a localized event such as a chicken dying or a bank failing had limited impact, but today, such events can have global consequences. The interconnectedness of people, goods, and information allows faster communication and commerce, with both positive and negative effects. While disasters can spread rapidly, humanity has also achieved milestones, like meeting Millennium Development Goals early, proving that coordinated global efforts can produce extraordinary progress. However, globalization also raises complex issues like economic inequality, cultural homogenization, environmental degradation, and the rapid spread of misinformation, which require innovative solutions and international cooperation to address effectively. Policymakers, educators, and corporations all play a role in adapting to these challenges while promoting global sustainability.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763318997/audios_tts/audio_deb63792-84eb-4294-8e1c-c0c396a419b5.mp3'
  },
  {
    id: 25,
    title: 'Why Study Animal Behavior?',
    text: `Studying animal behavior helps us understand why animals act as they do. It informs conservation strategies, helping biologists determine space, social, and mating needs for species preservation. Research can yield unexpected results; for instance, Fernando Nottebohm’s work on birdsong led to major advances in neurobiology. Animal behavior studies evolve quickly, as seen in the textbook by John Alcock. Understanding behaviors provides insights into ecosystems, cognition, and the adaptive strategies of species in changing environments. Insights from these studies can also influence human psychology, robotics, and AI, offering models for problem-solving, learning, and communication. Moreover, examining animal responses to environmental changes sheds light on biodiversity resilience and the effects of climate change.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319000/audios_tts/audio_ef316aa4-fefd-4637-b12b-90fc199682d3.mp3'
  },
  {
    id: 24,
    title: 'Visual Description in Historical Research',
    text: `Using visual description allows historians and researchers to reconstruct events without direct observation. Asking eyewitnesses detailed questions about settings or actions provides rich, visual evidence. For example, descriptions of wartime shelters or childhood experiences help authors write accurate historical accounts. Combining personal recollections with careful observation produces a vivid narrative that communicates events effectively, preserving details that might otherwise be lost. Additionally, integrating maps, photographs, and sketches enhances interpretation, allowing readers to engage more deeply with history. This approach also encourages empathy and understanding, connecting past events to present contexts and revealing the lived experiences of individuals across time.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319002/audios_tts/audio_d4719220-6851-4dcf-b713-22b967d5c5db.mp3'
  },
  {
    id: 23,
    title: 'Deliberate Practice and Musical Mastery',
    text: `Becoming skilled in musical instruments requires deliberate practice over thousands of hours. Even professionals need structured practice to reach international levels. Deliberate practice involves identifying errors, solving problems, and continuously refining skills. Examples from music and geometry illustrate how focused, consistent effort allows individuals to master complex tasks. Practice must be purposeful, not merely repetitive, to achieve the highest level of proficiency. Additionally, psychological factors like motivation, concentration, and mental resilience play a critical role in mastery. Understanding cognitive processes during practice helps educators design effective learning programs, while technology, such as digital feedback tools, can accelerate skill acquisition for aspiring musicians and athletes alike.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319006/audios_tts/audio_e7c28777-fc5a-4d51-91d3-7565a3458558.mp3'
  },
  {
    id: 22,
    title: 'BSI Standards and Fire Safety',
    text: `BSI provides testing and certification for fire safety products, ensuring they meet rigorous performance standards. Their labs test extinguishers, hoses, alarms, and smoke detectors for safety and compatibility. BSI Kitemark and CE certification symbolize trust and quality, enabling products to enter European and global markets. Through comprehensive audits and testing, BSI ensures that fire safety systems are effective and reliable, helping clients meet regulatory requirements and giving consumers peace of mind. Advances in materials, IoT-enabled devices, and smart alarm systems have made fire safety more responsive. Educating the public and professionals about safety standards and best practices is equally important to minimize risks and prevent loss of life.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319008/audios_tts/audio_02cbafb1-52a8-4286-80a4-a2af6efb2920.mp3'
  },
  {
    id: 21,
    title: "Melatonin and the Body's Nighttime Rhythm",
    text: `Melatonin, synthesized in the pineal gland, regulates the body's response to darkness. Known as the 'darkness hormone,' it peaks at night and is essential for sleep in humans, while other species may remain active. It counterbalances cortisol, preparing the body for nighttime behaviors. Across studied species, melatonin is tied to nocturnal activity, highlighting its evolutionary significance in synchronizing biological functions with day-night cycles. Disruption of melatonin due to artificial lighting, shift work, or travel across time zones can impair sleep quality, cognitive performance, and metabolic processes. Research also explores melatonin as a therapeutic agent for sleep disorders, jet lag, and age-related circadian changes, reflecting its critical role in overall health.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319010/audios_tts/audio_0ee83354-c6cd-4dd9-a27b-f087a55d0956.mp3'
  },
  {
    id: 20,
    title: 'Adapting Teaching to the Educational Revolution',
    text: `Traditional teaching relied on desks, paper, and pencils, but technology has radically transformed classrooms. Teachers now integrate digital tools to enhance learning. Future education emphasizes developing critical thinking skills over rote memorization. Adaptation to technological advances allows students to engage more deeply with content and prepares them for a dynamic, tech-driven world, requiring teachers to continuously evolve methods and strategies. Integrating AI tutors, collaborative platforms, and interactive simulations enables personalized learning. Assessments are increasingly designed to evaluate problem-solving and creativity rather than memory. Educators also need professional development to leverage these technologies effectively while maintaining inclusivity and equity for all learners.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319012/audios_tts/audio_2a66c235-eaea-416c-9bde-7f8dc1a2b09a.mp3'
  },
  {
    id: 19,
    title: 'Motivation and Emotion in Brain Research',
    text: `Studying how motivation and emotion operate in the brain reveals insights into human and animal behavior. Pavlov’s experiments with dogs, observing salivation and movement in response to stimuli, illustrate conditioned responses. Brain imaging technologies now allow researchers to examine these responses directly, enhancing understanding of competitive states and emotional reactions. Such studies help link physiological mechanisms with behavioral outcomes in learning and decision-making. Furthermore, research into reward pathways, dopamine signaling, and prefrontal cortex activity shows how motivation influences persistence, goal-setting, and resilience, providing applications in education, therapy, and workplace productivity.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319015/audios_tts/audio_5e5e6167-c964-456a-bfb1-aeaf1865727b.mp3'
  },
  {
    id: 18,
    title: 'Teaching as a Vehicle for Research',
    text: `Effective teaching can simultaneously promote research. Engaging graduate students in learning fosters both knowledge acquisition and discovery of new ideas. Inventions and insights often emerge as byproducts of teaching. The close interplay between teaching and research provides motivation, encourages experimentation, and uncovers problems worth investigating, creating a cycle where education and research mutually enhance each other. Innovative pedagogy encourages students to explore interdisciplinary connections, apply theory to practice, and generate original research questions, which not only enriches the classroom but also contributes to broader academic and societal knowledge.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319017/audios_tts/audio_75b4c3a1-c7af-4ff6-82aa-bc052de30dfa.mp3'
  },
  {
    id: 17,
    title: 'Personality and Leadership in Sticklebacks',
    text: `A study of stickleback fish shows shy individuals prefer leaders with similar timidity. Researchers placed trios of fish with different personalities in tanks with food and obstacles. Shy fish followed cautious leaders more closely, while bold fish followed regardless of leader traits. Bold fish initiated more trips, demonstrating that leadership can be exerted through effort. The study highlights the role of personality in social dynamics and decision-making, showing that even shy followers benefit from aligned leadership. These findings suggest that personality alignment can improve cooperation and group efficiency, with implications for understanding social behavior in other species, including humans, as well as team management strategies.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319019/audios_tts/audio_3574c60b-0f1c-43ae-b2c1-2a903fd8afdb.mp3'
  },
  {
    id: 16,
    title: 'Hidden Sugar in Everyday Foods',
    text: `Sugar is present in many unexpected foods, not just sweets. For example, peanut butter lists sugar as the second ingredient, and canned beef stew contains sugar despite being savory. Food labels reveal these hidden sugars, which can exceed naturally occurring ingredients like carrots or potatoes. Understanding ingredient lists is essential for making informed dietary choices and recognizing the pervasive nature of added sugars in processed foods. Excessive sugar consumption can contribute to obesity, diabetes, cardiovascular issues, and metabolic disorders. Educating consumers and promoting nutrition awareness helps individuals make healthier choices while advocating for clearer food labeling and reduced sugar content in industrially processed products.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319021/audios_tts/audio_ad8f2d04-bed4-49aa-83a0-49ed32aa34f1.mp3'
  },
  {
    id: 15,
    title: 'Light Pollution and the Early Arrival of Spring',
    text: `Rising temperatures and urban light pollution are causing plants to bloom earlier in spring. Studies in the U.K. show streetlights can advance bud burst by a week. Early blooming affects caterpillars and birds dependent on synchronized food availability. Adjusting lighting, such as using LEDs with fewer red wavelengths, could mitigate these effects, helping maintain natural seasonal patterns. This research underscores the complex interaction between human activity and ecological timing. Moreover, disruptions in natural cycles can impact agricultural planning, pest control, and biodiversity, highlighting the importance of combining urban planning with ecological sensitivity to preserve species interactions and ecosystem stability.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319024/audios_tts/audio_ebead966-8a6d-4ac5-8f65-3653a3cbacef.mp3'
  },
  {
    id: 14,
    title: 'Human Error and Task Design',
    text: `The likelihood of mistakes depends on task design and distractions. Well-structured tasks encourage correct actions, while poorly designed ones increase errors. External interruptions, like forgetting an original document after using a copier, illustrate the impact of distractions. Two key strategies minimize mistakes: optimizing instructions and reducing environmental interruptions. Understanding human tendencies and designing tasks accordingly improves efficiency and accuracy. Incorporating automation, checklists, and ergonomic workflows can further reduce errors. Research into cognitive load, multitasking limits, and human factors engineering provides practical applications for safer workplaces, medical procedures, and industrial operations.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319026/audios_tts/audio_240cb1f4-f684-42db-9996-ab23b0fed32a.mp3'
  },
  {
    id: 13,
    title: 'Steering Civilization Through Challenges',
    text: `Civilization progresses like a massive ship navigating uncertain waters. Humans must act wisely to avoid disasters, as errors can have global consequences. The accelerated pace of technological, social, and environmental change means we cannot rely solely on trial and error. Planning, understanding past mistakes, and making informed decisions are essential to maintain and advance human achievements safely. Societal resilience depends on cooperation, foresight, and sustainable resource management. Historical examples, from pandemics to financial crises, illustrate how preparation, policy, and scientific innovation can guide societies through turbulent times and preserve both lives and cultural legacies.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319028/audios_tts/audio_ba3fab5b-06b4-42fc-a343-585c810731dc.mp3'
  },
  {
    id: 12,
    title: 'The Role of Music in Well-being',
    text: `Well-being encompasses health, happiness, and contentment. Music intuitively enhances well-being, calming, uplifting, and uniting people. Research aims to transition from intuitive use to informed application, understanding music's influence on emotional and social health. Communities can leverage music for mental health, education, and social cohesion, demonstrating its wide-ranging potential to enrich human life and promote thriving individuals and societies. Studies show music therapy can reduce anxiety, improve cognitive function, and strengthen social bonds. Integrating music into public health programs, schools, and care facilities can create more emotionally supportive environments.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319030/audios_tts/audio_cf6fa206-1dbf-431a-a6ca-312a55255590.mp3'
  },
  {
    id: 11,
    title: 'Technology and Writing Styles',
    text: `Writing instruments shape prose and output. Quill pens encouraged simple, measured sentences; fountain pens allowed flowing narratives; typewriters fostered concise writing. Dictation and word processors influenced conversational or verbose styles. Tools impact productivity and style, alongside personal factors like education and temperament. Understanding the relationship between technology and writing informs both historical literature analysis and contemporary communication practices. Moreover, digital platforms, AI-assisted editing, and multimedia storytelling are transforming the way information is crafted and consumed, affecting journalism, creative writing, and education, highlighting the evolving interaction between human expression and technological progress.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319032/audios_tts/audio_67e8f460-e9c3-45e8-9460-68a920952877.mp3'
  },
  {
    id: 10,
    title: 'Understanding Infinity in Physics',
    text: `Infinity represents unbounded growth, larger than any assigned number. In physics, it helps conceptualize vast distances and timeframes. However, when calculations yield infinite results for measurable phenomena, it indicates errors, prompting reevaluation. Infinity serves both as a conceptual tool and a diagnostic check, guiding physicists to refine equations and models to produce finite, physically meaningful results. Applications include cosmology, quantum theory, and mathematical physics. Understanding infinity allows scientists to model singularities, black holes, and theoretical constructs, highlighting the interplay between abstract concepts and empirical observation, and emphasizing the philosophical depth inherent in scientific inquiry.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319034/audios_tts/audio_f32b35ea-8e11-4616-b97f-c84caf5d7a3d.mp3'
  },
  {
    id: 9,
    title: 'Species Adaptation and Flexibility',
    text: `Species are often assumed to be strictly adapted to their native climates, yet many plants and animals thrive in diverse environments. Rats, mice, and other animals transported by humans now occupy broad ranges from Arctic to tropical regions. This flexibility shows adaptation is not rigid but part of innate physiological and behavioral versatility. Historical and contemporary examples illustrate the resilience of life across varied climates, challenging simplistic notions of species-specific environmental constraints. Studying these adaptations informs conservation, predicts ecological impacts of climate change, and improves our understanding of evolutionary processes. Human-induced environmental change continues to test species flexibility and survival strategies.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319036/audios_tts/audio_d6a3277c-fc46-4ef0-a5c9-94c8f7e2860a.mp3'
  },
  {
    id: 8,
    title: 'Energy Insecurity in American Households',
    text: `Most Americans take energy for granted, but for many families, maintaining access to reliable and affordable energy is a significant challenge. Energy insecurity affects millions annually, especially Black and Hispanic households, families with young children, or those requiring medical devices. Poor housing conditions exacerbate the problem. Households unable to pay for energy struggle to use refrigerators, medical devices, or maintain safe temperatures. Extreme heat or cold can lead to mental and physical health problems. Dangerous coping strategies, like burning trash or staying in cars with engines running, are risks. Public policies such as energy bill assistance, weatherization programs, and residential solar incentives can alleviate these hardships. Moreover, energy insecurity is linked to stress, sleep disruption, and reduced school or work performance, showing it impacts both immediate well-being and long-term opportunities.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319038/audios_tts/audio_229749a8-963b-422c-87ce-bb27f86f289b.mp3'
  },
  {
    id: 7,
    title: 'Bumblebees and Flower Temperature Preferences',
    text: `Researchers have discovered that bumblebees select flowers not only for nectar but also for temperature. Bees expend energy staying warm and cannot fly when too cold, so warmer flowers offer a benefit. In experiments, bees preferred slightly warmer flowers even when nectar was equal. Some plants appear evolutionarily adapted to warmth, attracting more pollinators. This preference influences which plants are pollinated most often, showing that temperature, alongside color and nectar quality, plays a crucial role in bee behavior and plant reproduction strategies. Additionally, understanding these preferences helps in conservation planning, habitat restoration, and designing pollinator-friendly gardens, illustrating the interconnectedness of plant traits, pollinator behavior, and ecosystem health.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319041/audios_tts/audio_70cb653a-7f5f-4078-acf8-d5f7a4b93e85.mp3'
  },
  {
    id: 6,
    title: 'The Rapid Evolution of Software',
    text: `The software industry is remarkably young, only around 67 years old, yet has expanded rapidly. Moore's Law—the exponential growth of computing power and the fall in costs—enabled information technology to penetrate areas once unforeseen. Developers have focused on low-hanging fruit, influencing the growth of software and IT over decades. This rapid expansion affects how entrepreneurs innovate, what technologies are prioritized, and how society adapts to new digital tools. The industry continues evolving at a fast pace, with consequences across many sectors. Software now drives commerce, healthcare, education, communication, and entertainment, requiring professionals to continuously update skills and methodologies to keep pace with evolving technologies.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319043/audios_tts/audio_b09583c1-2002-438d-9c41-86da0ac25cf2.mp3'
  },
  {
    id: 5,
    title: 'Characteristics of a Great Idea',
    text: `Successful entrepreneurs understand that a great idea has to be novel, unique, and transformative. Ideas often build on smaller concepts but must improve or expand upon them to be impactful. Merely copying others doesn't create uniqueness; the key lies in adding individuality and innovation. Constant iteration and deliberate effort allow ideas to evolve into something productive and distinct. Unique ideas are often extensions of pre-existing notions, but only those that solve problems better or more efficiently truly stand out. Entrepreneurs also consider scalability, sustainability, and market needs, understanding that an idea's potential impact is as important as its originality. Creative thinking, coupled with systematic validation, allows ideas to flourish and create meaningful change in society.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319045/audios_tts/audio_6070b988-8d49-49c1-be6e-16e56bcbfb06.mp3'
  },
  {
    id: 4,
    title: 'Globalization and Modern Challenges',
    text: `Globalization has changed the way we perceive disasters and economic crises. In past decades, a localized event such as a chicken dying or a bank failing had limited impact, but today, such events can have global consequences. The interconnectedness of people, goods, and information allows faster communication and commerce, with both positive and negative effects. While disasters can spread rapidly, humanity has also achieved milestones, like meeting Millennium Development Goals early, proving that coordinated global efforts can produce extraordinary progress. Globalization also amplifies cultural exchange, innovation diffusion, and shared learning, but increases vulnerability to supply chain disruptions, financial instability, and rapid transmission of health crises, highlighting the double-edged nature of interconnected modern societies.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319049/audios_tts/audio_d1baa622-cfa8-449a-9ba5-db5dbc09f60a.mp3'
  },
  {
    id: 3,
    title: 'Why Study Animal Behavior?',
    text: `Studying animal behavior helps us understand why animals act as they do. It informs conservation strategies, helping biologists determine space, social, and mating needs for species preservation. Research can yield unexpected results; for instance, Fernando Nottebohm’s work on birdsong led to major advances in neurobiology. Animal behavior studies evolve quickly, as seen in the textbook by John Alcock. Understanding behaviors provides insights into ecosystems, cognition, and the adaptive strategies of species in changing environments. Additionally, studying behavior aids in human-animal interaction, wildlife management, and environmental policy development, emphasizing the importance of behavioral research in sustaining biodiversity and ecological balance.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319052/audios_tts/audio_5aa22e41-0d11-4263-abdd-43eced45cc2a.mp3'
  },
  {
    id: 2,
    title: 'Visual Description in Historical Research',
    text: `Using visual description allows historians and researchers to reconstruct events without direct observation. Asking eyewitnesses detailed questions about settings or actions provides rich, visual evidence. For example, descriptions of wartime shelters or childhood experiences help authors write accurate historical accounts. Combining personal recollections with careful observation produces a vivid narrative that communicates events effectively, preserving details that might otherwise be lost. Incorporating visual aids, diagrams, and maps enriches understanding of historical contexts, helping scholars, students, and the public grasp the physical and social environment of past events more fully.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319054/audios_tts/audio_3291b11a-d8c6-4f57-ba95-71d61824a82d.mp3'
  },
  {
    id: 1,
    title: 'Deliberate Practice and Musical Mastery',
    text: `Becoming skilled in musical instruments requires deliberate practice over thousands of hours. Even professionals need structured practice to reach international levels. Deliberate practice involves identifying errors, solving problems, and continuously refining skills. Examples from music and geometry illustrate how focused, consistent effort allows individuals to master complex tasks. Practice must be purposeful, not merely repetitive, to achieve the highest level of proficiency. Additionally, deliberate practice improves mental discipline, memory, and attention to detail. It also fosters creativity by allowing musicians to experiment with interpretation, dynamics, and expression, ultimately producing not only technical mastery but also emotionally compelling performances.`,
    audio: 'https://res.cloudinary.com/ddy824awb/video/upload/v1763319056/audios_tts/audio_9dda86a2-1e72-400f-8bdc-1935dc43a348.mp3'
  },
];

export default RetellLecture;
