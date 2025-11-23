export interface BlankOption {
    options: string[];
    correct?: string;
  }
  
  export interface Exercise {
    id: string| number;
    text: string[];
    blanks: BlankOption[];
    explanation: string[];

  }
  
  export const FillInTheBlanks: Exercise[] = [
      // -------------------------
  // EJERCICIO 1
  // -------------------------
  {
    id: "exercise_1",
    text: [
      "People are living longer, and this longevity is good news for sales teams. It results in a much more ",
      " customer base for them to work from. Why we are living longer is not the concern for anyone ",
      " in planning marketing strategies. What they focus on is the fact that there are now more age groups to target, which means a sales pitch can be adapted multiple times to fit each one. For instance, ",
      " referring simply to 'adults', there are now 'starting adults', 'young adults' and 'established adults'. ",
      ", markets no longer talk only about 'children', but now categorize 'kids', 'tweens', 'pre-teens', and 'teenagers'. Such diversity in age creates a ",
      " for businesses."
    ],
    blanks: [
      { options: ["usual", "precise", "right", "honest"], correct: "precise" },
      { options: ["mixed", "concerned", "involved", "linked"], correct: "involved" },
      { options: ["while", "by", "even when", "rather than"], correct: "rather than" },
      { options: ["Even", "While", "Similarly", "Really"], correct: "Similarly" },
      { options: ["favour", "bonus", "promise", "desire"], correct: "bonus" }
    ],
    explanation: [
      "`precise` is correct because a longer-living customer base allows sales teams to be more exact in targeting.",
      "`involved` fits because planners focus on the customer demographics rather than the reasons for longevity.",
      "`rather than` is correct as it contrasts general 'adults' with more specific age subcategories.",
      "`Similarly` introduces the parallel example for children categories.",
      "`bonus` is appropriate as it represents an advantage for businesses."
    ]
  },

  // -------------------------
  // EJERCICIO 2
  // -------------------------
  {
    id: "exercise_2",
    text: [
      "In the southern cone, from Venezuela to Argentina, the region is rising to overcome the legacy of past external domination and the cruel social structures it established. The ",
      " of imperial control—violence and economic warfare, still felt in Latin America—are losing effectiveness, signaling a shift toward independence. Washington must now tolerate governments that previously would have drawn intervention. Throughout the region, a vibrant ",
      " of popular movements provides the foundation for meaningful democracy. Indigenous populations, rediscovering pre-Columbian heritage, are more active, particularly in Bolivia and Ecuador. These developments stem partly from a trend: as elected governments become more democratic, citizens ",
      " increasing disillusionment with institutions, striving to construct democratic systems based on popular participation rather than elite and foreign ",
      "."
    ],
    blanks: [
      { options: ["merchants", "metabolism", "mechanisms", "machinery"], correct: "mechanisms" },
      { options: ["sequence", "flow", "array", "direction"], correct: "array" },
      { options: ["extent", "export", "express", "expose"], correct: "express" },
      { options: ["detection", "domination", "illustration", "determination"], correct: "domination" }
    ],
    explanation: [
      "`mechanisms` is correct because it refers to methods of control used by imperial powers.",
      "`array` fits as it describes a wide variety of popular movements.",
      "`express` is correct because citizens are showing disillusionment.",
      "`domination` is correct since it refers to the power previously held by elites or foreign interests."
    ]
  },

  // -------------------------
  // EJERCICIO 3
  // -------------------------
  {
    id: "exercise_3",
    text: [
      "Climate is the word we ",
      " for weather over extended periods. Deserts have a dry climate due to very ",
      " rainfall. The UK has a 'temperate climate', ",
      " means winters are generally mild and, ",
      " summers rarely become excessively hot."
    ],
    blanks: [
      { options: ["estimates", "predict", "cares", "use"], correct: "use" },
      { options: ["torrential", "often", "little", "heavy"], correct: "little" },
      { options: ["what", "these", "that", "which"], correct: "which" },
      { options: ["summers", "winter", "desert", "dessert"], correct: "summers" }
    ],
    explanation: [
      "`use` is correct as it defines how 'climate' refers to long-term weather patterns.",
      "`little` fits because deserts receive very minimal rainfall.",
      "`which` is appropriate to introduce an explanation of 'temperate climate'.",
      "`summers` is correct as it refers to the season that does not get too hot."
    ]
  },

  // -------------------------
  // EJERCICIO 4
  // -------------------------
  {
    id: "exercise_4",
    text: [
      "Since the last papal reform, several ",
      " have been ",
      " to make the Western calendar more functional or ",
      ". Few reforms, such as the decimal French Republican and Soviet calendars, gained official ",
      ", yet each was discontinued shortly after implementation."
    ],
    blanks: [
      { options: ["arguments", "essays", "assumptions", "proposals"], correct: "proposals" },
      { options: ["expected", "accomplished", "overthrown", "offered"], correct: "offered" },
      { options: ["portable", "strict", "regular", "abnormal"], correct: "regular" },
      { options: ["accepted", "accept", "acceptance", "accepting"], correct: "acceptance" }
    ],
    explanation: [
      "`proposals` is correct as it refers to suggested reforms.",
      "`offered` is correct since reforms were presented or proposed.",
      "`regular` fits because the calendar needed consistency.",
      "`acceptance` is appropriate as it indicates official approval."
    ]
  },

  // -------------------------
  // EJERCICIO 5
  // -------------------------
  {
    id: "exercise_5",
    text: [
      "Writers and speakers conceive thoughts as a whole but must express them in a line of words. The reader or listener must ",
      " the original wholeness of thought. Conversational difficulty is minimal since the listener receives cues from the speaker; dialogue allows the listener to ",
      " in at any time. Group discussions allow ideas to be synthesized from multiple directions, providing wholeness of thought, unlike printed text, which lacks physical ",
      " and emphasis."
    ],
    blanks: [
      { options: ["recover", "respect", "reconstruct", "reduce"], correct: "reconstruct" },
      { options: ["lean", "cut", "intrude", "get"], correct: "cut" },
      { options: ["tune", "thumb", "tone", "tile"], correct: "tone" },
      { options: ["conveying", "combining", "collecting", "converging"], correct: "converging" }
    ],
    explanation: [
      "`reconstruct` is correct as the reader rebuilds the full thought.",
      "`cut` fits because listeners can interject or engage.",
      "`tone` refers to the expressive quality of speech.",
      "`converging` is correct as ideas combine from multiple directions."
    ]
  },
// -------------------------
// EJERCICIO 6
// -------------------------
{
  id: "exercise_6",
  text: [
    "Sydney is planning to make the best use of its limited unconstrained land. The city encourages development of business, office, residential, retail, and other facilities in accessible areas to maximize public transport ",
    " and promote walking and cycling. This strategy reduces the ",
    " of land for housing at the urban fringe. For proposed mixed-use areas, employment data for ",
    " areas was unavailable. It is concluded that lack of housing supply impacts ",
    " in Sydney."
  ],
  blanks: [
    { options: ["patron", "patronage", "patrons", "patronizing"], correct: "patronage" },
    { options: ["consumption", "consumed", "consume", "consumable"], correct: "consumption" },
    { options: ["comparison", "compared", "comparable", "comparing"], correct: "comparable" },
    { options: ["affording", "affordability", "afford", "afforded"], correct: "affordability" }
  ],
  explanation: [
    "`patronage` is correct because it refers to the support and use of public transport.",
    "`consumption` is used to describe the usage of land resources.",
    "`comparable` refers to areas of similar characteristics for planning.",
    "`affordability` is correct as housing supply affects residents' ability to pay."
  ]
},

// -------------------------
// EJERCICIO 7
// -------------------------
{
  id: "exercise_7",
  text: [
    "Everyone eats, and increasingly consumers consider the ",
    " impact of their food choices. Researchers aimed to ",
    " the effects of livestock versus crops. Raising cows was found dramatically more environmentally draining than other animals. The study analyzed land, water, fertilizer, and greenhouse gas ",
    " and compared livestock to potatoes, wheat, and rice. Under current ",
    " practices, beef consumes far more resources than other categories."
  ],
  blanks: [
    { options: ["spiritual", "environmental", "economic", "material"], correct: "environmental" },
    { options: ["exemplify", "discover", "squander", "purchase"], correct: "discover" },
    { options: ["conjectures", "emissions", "manufacture", "purification"], correct: "emissions" },
    { options: ["agricultural", "impalpable", "terminal", "ungrammatical"], correct: "agricultural" }
  ],
  explanation: [
    "`environmental` is correct as the paragraph discusses ecological impact.",
    "`discover` fits because researchers were investigating effects.",
    "`emissions` refers to greenhouse gases released.",
    "`agricultural` applies to farming systems."
  ]
},

// -------------------------
// EJERCICIO 8
// -------------------------
{
  id: "exercise_8",
  text: [
    "Samuel Johnson’s dictionary, published in 1755, dominated English ",
    " for more than a century. Its two volumes surpassed earlier dictionaries not in ",
    " but in the precision of definition. It exemplified definitions with citations, which ",
    " the shades of meaning of each word. The work drew from the best usage in ",
    " London and demonstrated the ",
    " ideals and techniques of European lexicography."
  ],
  blanks: [
    { options: ["hieroglyph", "lexicography", "hierarchy", "taxonomy"], correct: "lexicography" },
    { options: ["bulk", "bask", "busk", "barn"], correct: "bulk" },
    { options: ["classified", "exemplified", "signified", "simplified"], correct: "exemplified" },
    { options: ["contemptuous", "contemporary", "contemplative", "contemptible"], correct: "contemporary" },
    { options: ["prevailing", "condescending", "dignifying", "demeaning"], correct: "prevailing" }
  ],
  explanation: [
    "`lexicography` is correct as it refers to dictionary-making.",
    "`bulk` fits as it refers to quantity or volume.",
    "`exemplified` is correct because it illustrates meanings.",
    "`contemporary` applies to usage at that time.",
    "`prevailing` fits as it refers to common or dominant ideals."
  ]
},

// -------------------------
// EJERCICIO 9
// -------------------------
{
  id: "exercise_9",
  text: [
    "Clownfish are famous from Finding Nemo. In real life, larger fish dominate smaller ",
    ". To reinforce social structure, they communicate with aggressive and submissive sounds. Researchers ",
    " calls, ",
    " this noise as one chased a smaller fish. When a clownfish submits, it shakes its head and makes clicking noises. Scientists ",
    " aggressive and submissive calls, discovering that submissive pulses are shorter and higher-pitched. Unlike other animals that use sounds to attract ",
    " mates, clownfish use calls for social labeling."
  ],
  blanks: [
    { options: ["palms", "prompts", "traps", "counterparts"], correct: "counterparts" },
    { options: ["unfolded", "deported", "recorded", "dialled"], correct: "recorded" },
    { options: ["cluttering", "capturing", "profiting", "padlocking"], correct: "capturing" },
    { options: ["pared", "compared", "guided", "treaded"], correct: "compared" },
    { options: ["exponential", "potential", "nimble", "ventral"], correct: "potential" }
  ],
  explanation: [
    "`counterparts` refers to smaller fish in the social hierarchy.",
    "`recorded` is correct as scientists documented the calls.",
    "`capturing` fits because it describes obtaining the sound recordings.",
    "`compared` is correct for analyzing differences between call types.",
    "`potential` is appropriate as it refers to reproductive mates."
  ]
},

// -------------------------
// EJERCICIO 10
// -------------------------
{
  id: "exercise_10",
  text: [
    "Owls are nearly ",
    " hunters, swooping silently on prey. The leading edge of an owl’s wing has a comb of stiff ",
    ", while the trailing edge is flexible, unlike a ",
    " bird wing. These adaptations ",
    " almost no noise during flight. Owl wings also feature a layer of down, aiding in silence, making owls deadly but quiet predators."
  ],
  blanks: [
    { options: ["employables", "joyfulness", "noiseless", "avoidances"], correct: "noiseless" },
    { options: ["feathers", "beaks", "claws", "tracts"], correct: "feathers" },
    { options: ["bearable", "convectional", "correctable", "conventional"], correct: "conventional" },
    { options: ["equals", "manufactures", "produces", "derives"], correct: "produces" },
    { options: ["riveters", "nebulas", "predators", "spiracles"], correct: "predators" }
  ],
  explanation: [
    "`noiseless` describes how owls hunt silently.",
    "`feathers` is correct as the structure of feathers reduces noise.",
    "`conventional` contrasts owl wings with typical bird wings.",
    "`produces` is appropriate because the structure generates minimal noise.",
    "`predators` fits since owls are hunting animals."
  ]
},

// -------------------------
// EJERCICIO 11
// -------------------------
{
  id: "exercise_11",
  text: [
    "Functional MRI (fMRI) is used to ",
    " the brain in action. New research suggests fMRI may show not only what the brain is doing but what it is about to do. Studies assume that blood flow ",
    " with neuronal activity, as active brain cells require nutrients. Surprisingly, fMRI also detects ",
    " blood flow in regions that are not yet active. Researchers trained monkeys on a visual task and found increased blood flow even while they waited in darkness. This suggests fMRI may reveal more than previously thought."
  ],
  blanks: [
    { options: ["stunned", "chronicle", "strung", "stung"], correct: "chronicle" },
    { options: ["academic", "dental", "correlates", "indirect"], correct: "correlates" },
    { options: ["incomes", "concerns", "activity", "substances"], correct: "activity" },
    { options: ["patronizes", "disallows", "nutrients", "facilitates"], correct: "nutrients" },
    { options: ["reciprocity", "risk", "effect", "increased"], correct: "increased" }
  ],
  explanation: [
    "`chronicle` is correct because fMRI records brain activity.",
    "`correlates` refers to blood flow matching neural activity.",
    "`activity` is appropriate as it describes neuron firing.",
    "`nutrients` supply the active brain cells.",
    "`increased` blood flow is detected even before activity starts."
  ]
},

// -------------------------
// EJERCICIO 12
// -------------------------
{
  id: "exercise_12",
  text: [
    "It's Friday the 13th. You must ask yourself: 'Do I feel lucky?' Failure to do so can result in ",
    " from triskaidekaphobia, the fear of 13. Notable figures like Napoleon and FDR had this fear. Why is 13 unlucky, particularly ",
    " on Friday? University of Delaware's Thomas Fernsler, Dr. 13, explains that Judas was the 13th guest at the Last Supper. Other unlucky events include car accidents and Apollo 13, which ",
    " at 13:13 CST on April 11, 1970. Some buildings skip the 13th floor, renaming it the 14th."
  ],
  blanks: [
    { options: ["suffering", "contacting", "resurfacing", "gravelling"], correct: "suffering" },
    { options: ["Frivolously", "Timorously", "Particularly", "Magnificently"], correct: "Particularly" },
    { options: ["launched", "reenforced", "permafrost", "debouched"], correct: "launched" }
  ],
  explanation: [
    "`suffering` is correct as it describes experiencing fear.",
    "`Particularly` fits because Friday 13 is especially unlucky.",
    "`launched` is appropriate as it marks the Apollo 13 event start."
  ]
},
// -------------------------
// EJERCICIO 13
// -------------------------
{
  id: "exercise_13",
  text: [
    "Rodents are the workhorses of biomedical labs. So, it's important to know if they're ",
    " out, which could affect results. Now we know that lab rodents may be regularly exposed to a big stressor: men. Researchers noticed that mice showed a lower pain ",
    "—a sign of stress—when a human was present. So, they put mice and rats into clear cubicles, where their faces were visible, and ",
    " them with an irritant. The rodents expressed pain through grimacing when no humans were nearby. But when confronted with a male researcher, or even just his ",
    " T-shirt, the animals grimaced less. Female observers did not get the same rodent ",
    ". Turns out that smelling a human male made rodents produce higher levels of a stress hormone and increase their body ",
    ". That stress response also blunted their sensitivity to pain."
  ],
  blanks: [
    { options: ["unrest", "confessed", "bread", "stressed"], correct: "stressed" },
    { options: ["sacs", "response", "births", "massage"], correct: "response" },
    { options: ["sprinkled", "nettled", "ingested", "injected"], correct: "injected" },
    { options: ["deaconess", "creaminess", "facetiousness", "odoriferous"], correct: "odoriferous" },
    { options: ["compunction", "reaction", "version", "handgun"], correct: "reaction" },
    { options: ["bickerer", "stepmother", "temperature", "tempera"], correct: "temperature" }
  ],
  explanation: [
    "`stressed` is correct because rodents under human observation showed signs of stress.",
    "`response` refers to the measure of pain indicating stress.",
    "`injected` fits as the irritant was applied via injection.",
    "`odoriferous` applies because the male T-shirt emitted a smell affecting rodents.",
    "`reaction` is correct for the rodents’ behavioral change.",
    "`temperature` indicates physiological stress responses."
  ]
},

// -------------------------
// EJERCICIO 14
// -------------------------
{
  id: "exercise_14",
  text: [
    "Decision making is central to the management of an enterprise. The manager of a profit-making business has to decide on the manner of implementation of the objectives of the business, at least one of which may ",
    " relate to allocating resources so as to maximize profit. A non-profit-making enterprise (such as a department of central or local government) will be making decisions on resource allocation so as to be economical, efficient and effective ",
    " finance. All organizations, whether in the private sector or the public sector, ",
    " decisions which have financial implications. Decisions will be about resources, which may be people, products, services or long-term and short-term investment. Decisions will also be about activities, including whether and how to undertake them. Most decisions will at some stage involve consideration of financial matters, ",
    " cost."
  ],
  blanks: [
    { options: ["well", "definitely", "also", "thereby"], correct: "well" },
    { options: ["in its use of", "to an extent of", "in the accordance with", "on the level of"], correct: "in its use of" },
    { options: ["beget", "uplift", "adapt", "take"], correct: "take" },
    { options: ["eventually", "consequently", "particularly", "spontaneously"], correct: "particularly" }
  ],
  explanation: [
    "`well` fits as an adverb modifying how objectives relate to resource allocation.",
    "`in its use of` is correct describing how resources are efficiently used.",
    "`take` is the right verb describing the act of making decisions.",
    "`particularly` emphasizes the focus on financial costs."
  ]
},

// -------------------------
// EJERCICIO 15
// -------------------------
{
  id: "exercise_15",
  text: [
    "In the developed world, home appliances have greatly reduced the need for physical labour. ",
    " people need to be involved in tasks that once left them little time to do much else. For example, the word processor and email have, to a great ",
    ", replaced the dedicated secretarial staff that briefly flourished with the rise of the typewriter. At ",
    " time all copies were made with manual scribes, carefully duplicating what they read. Then we had carbon paper. Then photocopiers. Then printers. Then the requirement for physical copy reduced. An entire stream of labour appeared and disappeared as technology advanced. We freed ourselves of one kind of work; we just replaced it ",
    " another."
  ],
  blanks: [
    { options: ["Fewer", "More", "Less", "Many"], correct: "Fewer" },
    { options: ["extension", "possibility", "range", "extent"], correct: "extent" },
    { options: ["once", "some", "one", "a"], correct: "one" },
    { options: ["with", "as", "for", "by"], correct: "with" }
  ],
  explanation: [
    "`Fewer` is correct since fewer people are needed.",
    "`extent` is appropriate as it refers to the degree of replacement.",
    "`one` fits as it refers to a singular past time.",
    "`with` shows the replacement of one type of work by another."
  ]
},

// -------------------------
// EJERCICIO 16
// -------------------------
{
  id: "exercise_16",
  text: [
    "The desire to build big is nothing new. Big buildings have been used to show off power and wealth; to honour leaders or religious beliefs; to stretch the limits of what's possible; and even as simple ",
    " among owners, families, architects, and builders. Some of the most ",
    " buildings of the past include the pyramids in Egypt, the skinny towers stretching towards the sky in Italian hill towns, and the gothic cathedrals of France. While these types of buildings may look very different from each other, they all have one thing in ",
    ". They were built with masonry or stone walls supporting most of the weight (so-called load-bearing walls), including that of the floors, the people, and everything the rooms contained. Because of this, the height of these buildings was limited by how massive and heavy they had to be at the base. Two ",
    " in the 19th century paved the way for a whole new type of building: the skyscraper. The first was the development of a safe elevator. Primitive elevators of various designs had been used for centuries, and starting in the mid-19th century, steam-operated elevators were used to move materials in factories, mines, and warehouses. But these elevators were not ",
    " safe for people; if the cable broke, they would plummet to the bottom of the elevator shaft."
  ],
  blanks: [
    { options: ["spite", "competition", "division", "compliment"], correct: "competition" },
    { options: ["dramatic", "dreadful", "derivative", "dreary"], correct: "dramatic" },
    { options: ["conclusion", "contrast", "addition", "common"], correct: "common" },
    { options: ["metropolises", "developments", "contributions", "leverages"], correct: "developments" },
    { options: ["manipulated", "considered", "provisioned", "stipulated"], correct: "considered" }
  ],
  explanation: [
    "`competition` fits because building large served as rivalry among builders.",
    "`dramatic` emphasizes the impressive size and effect.",
    "`common` is correct as all these buildings share characteristics.",
    "`developments` refers to innovations in the 19th century.",
    "`considered` indicates elevators weren’t regarded as safe initially."
  ]
},

// -------------------------
// EJERCICIO 17
// -------------------------
{
  id: "exercise_17",
  text: [
    "Agrarian parties are political parties chiefly representing the interests of peasants or, more broadly, the rural sector of society. The extent to ",
    " they are important, or ",
    " they even exist, depends mainly on two factors. One, obviously, is the size of an identifiable peasantry, or the size of the rural relative to the urban population. The other is a matter of social integration: for agrarian parties to be important, the representation of countryside or peasantry must not be integrated with the other major sections of society. ",
    ", a country might possess a sizable rural population, but have an economic system in which the interests of the voters were predominantly related to their incomes, ",
    " than their occupations or location; and in such a country the political system would be unlikely to include an important agrarian party."
  ],
  blanks: [
    { options: ["where", "which", "what", "that"], correct: "which" },
    { options: ["that", "how", "when", "whether"], correct: "whether" },
    { options: ["Since", "Though", "Thus", "Because"], correct: "Thus" },
    { options: ["even", "more", "rather", "ever"], correct: "rather" }
  ],
  explanation: [
    "`which` refers to the extent they are important.",
    "`whether` expresses uncertainty about their existence.",
    "`Thus` introduces a logical consequence.",
    "`rather` indicates preference for income over occupation."
  ]
},

// -------------------------
// EJERCICIO 18
// -------------------------
{
  id: "exercise_18",
  text: [
    "Lucy was a single hominid skeleton found in Ethiopia. First, she was a bunch of broken fragments lying in Ethiopia. She was found by Donald Johansson and Tom Gray, who headed out to the area looking for rocks, and then drove back. ",
    " that return journey, Johansson spotted a forearm bone, identified it -- and then kept looking, where the two found a huge set of bones that would eventually ",
    " 40 per cent of the entire skeleton. The discovery was so important because it entirely ",
    " our understanding of the process of evolution. She showed that people had been wrong to think that we became intelligent before we stood up-- Lucy and her contemporaries were better suited for walking ",
    " than we were, but appeared to have been much less ",
    " advanced. That was important because it changed our understanding of the story of evolution, implying that walking was one of the most important things in moving us towards our current state, and that brainpower might not have been the most important thing."
  ],
  blanks: [
    { options: ["Despite", "For", "Towards", "During"], correct: "During" },
    { options: ["represent", "reproduce", "present", "count"], correct: "represent" },
    { options: ["upset", "discharged", "assimilated", "undermined"], correct: "upset" },
    { options: ["outright", "upright", "upper", "vertical"], correct: "upright" },
    { options: ["intentionally", "instantaneously", "intellectually", "technologically"], correct: "intellectually" }
  ],
  explanation: [
    "`During` fits the temporal context of the return journey.",
    "`represent` means the bones constituted 40% of the skeleton.",
    "`upset` refers to overturning previous understanding.",
    "`upright` indicates their posture adapted for walking.",
    "`intellectually` refers to cognitive advancement."
  ]
},

// -------------------------
// EJERCICIO 19
// -------------------------
{
  id: "exercise_19",
  text: [
    "Rudman looks at how a poor understanding of Maths has led historians to false conclusions about the Mathematical sophistication of early societies. Rudman's final observation—that ancient Greece ",
    " unrivalled progress in the subject while ",
    " to teach it at school—leads to a ",
    " punchline. Mathematics could be better learnt after we "
  ],
  blanks: [
    { options: ["marked", "enjoyed", "reviewed", "expected"], correct: "enjoyed" },
    { options: ["waiting", "hesitating", "hoping", "failing"], correct: "failing" },
    { options: ["radical", "rational", "radish", "radius"], correct: "radical" },
    { options: ["enter", "graduate", "leave", "go{leave} school"], correct: "leave" }
  ],
  explanation: [
    "`enjoyed` indicates Greece made significant progress.",
    "`failing` fits because schools did not teach it.",
    "`radical` describes the striking punchline.",
    "`leave` is correct, suggesting math could be better learned afterward."
  ]
},

// -------------------------
// EJERCICIO 20
// -------------------------
{
  id: "exercise_20",
  text: [
    "Break out the binoculars and telescopes on Saturday, May 19th. Because it's the first International Sidewalk Astronomy Night. 'Sidewalk Astronomers' was founded in San Francisco in 1968, when a lot of people were seeing stars, and not just at night. The group's goal is to ",
    " more people to the beauty and wonder of celestial objects with good viewing equipment and to provide ",
    " about what the eyewitnesses are actually looking at. The most ",
    " viewed objects are the moon; Jupiter, whose major moons are visible with good binocs; and Saturn. I once trained a cheap telescope on Saturn and some friends were so amazed at the site of the rings, they seriously looked at the other end of the scope to see if I had ",
    " it. Sidewalk Astronomy Night is indeed an international event, with dozens of public viewing sites from Beijing to the corner of 81st Street and Central Park West in Manhattan. For more info and to find a site near you, just go to the official website. And if there's no ",
    " site near you, feel free to go outside and look at the stars anyway."
  ],
  blanks: [
    { options: ["expose", "explain", "transfer", "defer"], correct: "expose" },
    { options: ["arbitration", "examination", "imputation", "information"], correct: "information" },
    { options: ["singularly", "agreeably", "frequently", "randomly"], correct: "frequently" },
    { options: ["sued", "upgraded", "overloaded", "doctored"], correct: "doctored" },
    { options: ["ossified", "organized", "sized", "enshrined"], correct: "organized" }
  ],
  explanation: [
    "`expose` is correct as it aims to introduce people to astronomy.",
    "`information` fits as observers provide knowledge.",
    "`frequently` applies to the most commonly viewed objects.",
    "`doctored` refers to checking if the image was altered.",
    "`organized` fits for official viewing sites."
  ]
},

// -------------------------
// EJERCICIO 21
// -------------------------
{
  id: "exercise_21",
  text: [
    "Deciding to go to business school is perhaps the simplest part of what can be a complicated process. With nearly 600 accredited MBA programmes on ",
    " around the world, the choice of where to study can be overwhelming. Here we explain how to ",
    " the right school and course for you and unravel the application and funding process. 'Probably the ",
    " of people applying to business school are at a point in their careers where they know they ",
    " to shake things up, but they don't know exactly what they would like to do with their professional lives,' says Stacy Blackman, an MBA admissions consultant based in Los Angeles. 'If that's the case with you, look at other ",
    ": culture, teaching method, location, and then pick a place that’s a good fit for you with a strong general management programme. Super-defined career goals don’t have to be a part of this process.'"
  ],
  blanks: [
    { options: ["offer", "provide", "give", "take"], correct: "offer" },
    { options: ["elect", "choose", "identify", "recognize"], correct: "choose" },
    { options: ["few", "many", "majority", "minority"], correct: "majority" },
    { options: ["enjoy", "hesitate", "want", "choose"], correct: "want" },
    { options: ["standards", "factors", "rules", "criteria"], correct: "criteria" }
  ],
  explanation: [
    "`offer` refers to programs offered worldwide.",
    "`choose` is correct as it refers to selecting a school.",
    "`majority` indicates most applicants.",
    "`want` expresses the desire to change careers.",
    "`criteria` refers to considerations beyond career goals."
  ]
},

{
  id: 22,
  text: [
    "After locating research that is ",
    " to your topic of interest, the next step is to actually ",
    " the findings of that research. This section aims to show you how to critically evaluate the studies you ",
    " and how to ensure that the ",
    " is trustworthy and accurately represented. Unfortunately, this also involves discussing the ways research results might be misinterpreted."
  ],
  blanks: [
    { options: ["relevant", "important", "useful", "referred"], correct: "relevant" },
    { options: ["make profit", "take advantage", "make sense", "sum up"], correct: "make sense" },
    { options: ["are monitoring", "are finding", "are reviewing", "are discovering"], correct: "are reviewing" },
    { options: ["support", "invention", "statement", "evidence"], correct: "evidence" }
  ],
  explanation: [
    "`relevant` indica que la investigación se relaciona directamente con el tema de interés.",
    "`make sense` significa resumir o interpretar los hallazgos para que sean comprensibles.",
    "`are reviewing` refleja que estás evaluando críticamente los estudios.",
    "`evidence` se refiere a que lo que se revisa debe ser evidencia confiable."
  ]
},

// -------------------------
// EJERCICIO 23
// -------------------------
{
  id: 23,
  text: [
    "The Nature Conservation Amendment Act of 1996 allows the Minister of Environment and Tourism to register a conservancy if it has a ",
    " committee, a legally recognized constitution, which ensures sustainable ",
    " and utilization of wildlife in the conservancy, the capacity to ",
    " the funds, an approved procedure for the ",
    " distribution of benefits to local community members, and well-defined boundaries."
  ],
  blanks: [
    { options: ["powerful", "patient", "representative", "significant"], correct: "representative" },
    { options: ["management", "attraction", "making", "taking"], correct: "management" },
    { options: ["manage", "liquidate", "redeem", "repossess"], correct: "manage" },
    { options: ["same", "equal", "proportionate", "equitable"], correct: "equitable" }
  ],
  explanation: [
    "`representative` indica que el comité refleja a la comunidad y sus intereses.",
    "`management` se refiere a la gestión sostenible de la vida silvestre.",
    "`manage` significa administrar correctamente los fondos.",
    "`equitable` asegura que la distribución de beneficios sea justa."
  ]
},

// -------------------------
// EJERCICIO 24
// -------------------------
{
  id: 24,
  text: [
    "Of the more than 1,000 bat species worldwide, 22 are ",
    " to North America. Even though there are no pollinator bats locally, gardeners should ",
    " those that are present, since they feed on insects. These bats ",
    " moths, beetles, and mosquitoes, and can consume up to 500 mosquito-sized insects in an hour. They also safeguard gardens and crops from such ",
    " as cucumber beetles, cutworms, and leafhoppers."
  ],
  blanks: [
    { options: ["local", "national", "native", "residential"], correct: "native" },
    { options: ["suppose", "champion", "breed", "fight"], correct: "champion" },
    { options: ["spend", "consume", "provide", "deplete"], correct: "consume" },
    { options: ["species", "pests", "objects", "animals"], correct: "pests" }
  ],
  explanation: [
    "`native` indica que son originarios de Norteamérica.",
    "`champion` significa apoyar o proteger activamente a los murciélagos.",
    "`consume` refleja que se alimentan de los insectos.",
    "`pests` se refiere a los insectos perjudiciales para los cultivos."
  ]
},

// -------------------------
// EJERCICIO 25
// -------------------------
{
  id: 25,
  text: [
    "For every action, there is a ",
    ". And for many of our movements, there is an ",
    ": we plan to move, and then we move. A study published in the May 8th issue of Science suggests that the sense of movement is largely in your mind. The brain region that activates when intending to move is the same that allows you to feel the movement. Two separate regions are involved: one generates intention, the other executes motion. But it was unclear which region makes you aware of actual movement. In the study, scientists worked with patients ",
    " surgery to remove a brain tumor. Surgeons often electrically ",
    " the area around the tumor while the patient is awake, so they can provide feedback and avoid harming critical tissue. The researchers found that stimulating one ",
    " part of the brain made patients feel the desire to move arms, lips, or tongue. Increasing stimulation made them feel they had moved. But stimulating the region responsible for motion left patients unaware of the movement—a fascinating finding."
  ],
  blanks: [
    { options: ["contraption", "burden", "transaction", "reaction"], correct: "reaction" },
    { options: ["intention", "ascription", "unchristian", "indirection"], correct: "intention" },
    { options: ["composing", "undergoing", "poring", "pudding"], correct: "undergoing" },
    { options: ["wait", "stimulate", "trait", "saint"], correct: "stimulate" },
    { options: ["particular", "calligrapher", "regular", "simpler"], correct: "particular" }
  ],
  explanation: [
    "`reaction` se refiere a la consecuencia o efecto de una acción.",
    "`intention` indica la intención de mover antes de hacerlo.",
    "`undergoing` significa que los pacientes estaban sometidos a la cirugía.",
    "`stimulate` refleja la estimulación eléctrica del cerebro.",
    "`particular` indica la zona específica responsable de la sensación de movimiento."
  ]
},

// -------------------------
// EJERCICIO 26
// -------------------------
{
  id: 26,
  text: [
    "In The Origin of Species, Darwin provided extensive evidence that life on Earth has evolved over time, proposing natural selection as the main mechanism. He observed that individuals ",
    " in their inherited traits and that selection acts on these variations, leading to ",
    " change. Although Darwin knew that variation is essential for ",
    ", he did not understand how traits are passed to offspring. A few years later, Gregor Mendel published a paper on pea plant inheritance. ",
    " that work, Mendel proposed a model where organisms pass discrete heritable units (genes) to their offspring. While Darwin didn't know about genes, Mendel's study laid the groundwork ",
    " understanding the genetic basis of evolution."
  ],
  blanks: [
    { options: ["differed", "difference", "different", "same"], correct: "differed" },
    { options: ["tremendous", "evolutionary", "unrivalled", "enormous"], correct: "evolutionary" },
    { options: ["evolution", "development", "growth", "maturity"], correct: "evolution" },
    { options: ["On", "In", "For", "With"], correct: "In" },
    { options: ["for", "as", "in", "at"], correct: "for" }
  ],
  explanation: [
    "`differed` indica que los individuos mostraban variación en sus rasgos heredados.",
    "`evolutionary` refleja el cambio a través del tiempo impulsado por la selección natural.",
    "`evolution` significa que la variación es necesaria para la evolución.",
    "`In` refiere a la continuación del trabajo de Mendel tras el de Darwin.",
    "`for` indica el propósito de entender la base genética de la evolución."
  ]
},

// -------------------------
// EJERCICIO 27
// -------------------------
{
  id: 27,
  text: [
    "The global textile industry has a major environmental impact. One-third of water used worldwide goes into making fabrics. For every ton of cloth ",
    ", 200 tons of water are polluted with chemicals and heavy metals. An estimated 1 trillion kilowatt-hours of electricity run factories that card, spin, weave, and sew materials into garments, ",
    " mountains of solid waste and a large carbon footprint. 'The industry today is not sustainable for the long term,' says Shreyas Chaudhary, CEO of Pratibha Syntax, India. With a vision of 'if you build it, they will come,' he has positioned Pratibha ",
    " the forefront of eco-friendly textile production. Initially, the company struggled to find enough organic cotton farms in central India ",
    " its factories. To meet demand, farmers were trained in sustainable methods, and Pratibha guaranteed fair-trade prices for ",
    " crops. Today, the company has a network of 28,000 organic cotton farmers across central India."
  ],
  blanks: [
    { options: ["produced", "has produced", "producing", "is produced"], correct: "produced" },
    { options: ["moving", "leaving", "processing", "looking into"], correct: "leaving" },
    { options: ["against", "onto", "toward", "behind"], correct: "toward" },
    { options: ["have supplied", "supply", "to supply", "is supplied"], correct: "to supply" },
    { options: ["their", "some", "mine", "them"], correct: "their" }
  ],
  explanation: [
    "`produced` indica por cada tonelada de tela producida.",
    "`leaving` se refiere a que genera montañas de desechos.",
    "`toward` indica que la empresa se dirige al liderazgo en producción eco-amigable.",
    "`to supply` refleja el abastecimiento de las fábricas con algodón orgánico.",
    "`their` indica que los agricultores recibían precios justos por sus propios cultivos."
  ]
}
,
// -------------------------
// EJERCICIO 28
// -------------------------
{
  id: 28,
  text: [
    "Great engineers have a passion for improving life; a strong conviction that they can make life better for everyone. Engineers need creativity for invention and innovation, but what ",
    " them is the belief that they can find better ways of doing things; cheaper, more efficient solutions to problems on this planet with ",
    " resources. Many of us ",
    " time complaining about life’s difficulties. Engineers see challenges as opportunities. How can this be made to work better? How can that process be more efficient? How can ",
    " be made more cheaply, accurately, and fit-for-purpose? Great engineers are convinced that everything can be ",
    ". Instead of complaining, they seek solutions."
  ],
  blanks: [
    { options: ["drives", "makes", "motivate", "activate"], correct: "drives" },
    { options: ["limited", "unlimited", "numerous", "mysterious"], correct: "limited" },
    { options: ["take", "spend", "cost", "save"], correct: "spend" },
    { options: ["parts", "elements", "units", "components"], correct: "components" },
    { options: ["improved", "created", "performed", "changed"], correct: "improved" }
  ],
  explanation: [
    "`drives` indica lo que motiva a los ingenieros.",
    "`limited` se refiere a los recursos finitos de la Tierra.",
    "`spend` refleja cómo las personas gastan tiempo en quejarse.",
    "`components` son los elementos que pueden ser optimizados.",
    "`improved` significa que todo se puede mejorar."
  ]
},

// -------------------------
// EJERCICIO 29
// -------------------------
{
  id: 29,
  text: [
    "With the increase in women's ",
    " in the labor force, many mothers have less ",
    " time for domestic tasks. At the same time, there is growing ",
    " that the father’s role and ",
    " with children is significant. Fathers can have many roles, from provider to teacher, carer, playmate, and role model. Balancing paid work and family duties is important for both parents."
  ],
  blanks: [
    { options: ["anticipation", "substitution", "participation", "definition"], correct: "participation" },
    { options: ["available", "related", "consumable", "useful"], correct: "available" },
    { options: ["recognition", "discrimination", "resolution", "recreation"], correct: "recognition" },
    { options: ["scholarship", "relationship", "worship", "employment"], correct: "relationship" }
  ],
  explanation: [
    "`participation` se refiere a la participación de mujeres en el trabajo remunerado.",
    "`available` indica el tiempo que les queda para tareas domésticas.",
    "`recognition` refleja la apreciación del rol del padre.",
    "`relationship` indica la interacción significativa con los hijos."
  ]
},

// -------------------------
// EJERCICIO 30
// -------------------------
{
  id: 30,
  text: [
    "In reality, the ",
    " of truancy and non-attendance are complex. Each child has a ",
    " story, and although algunos factores pueden ser comunes, cada niño requiere una respuesta que ",
    " individualmente a sus necesidades. Esto aplica ",
    " al adolescente de 14 años que falta por enfermedad de un progenitor, al de 11 años que se siente ",
    " por cambiarse para la clase de educación física, al de 15 años aburrido en clase, y a la niña de 7 años acosada por ropa de marca."
  ],
  blanks: [
    { options: ["initiations", "supervisions", "triggers", "unifications"], correct: "triggers" },
    { options: ["untold", "moving", "unique", "weepy"], correct: "unique" },
    { options: ["dictates", "deters", "monopolies", "deserves"], correct: "deserves" },
    { options: ["mutually", "equitably", "equality", "equally"], correct: "equally" },
    { options: ["hyperbolic", "arrogant", "embarrassed", "reticent"], correct: "embarrassed" }
  ],
  explanation: [
    "`triggers` se refiere a los factores que provocan el ausentismo.",
    "`unique` indica que cada historia es única.",
    "`deserves` significa que cada niño merece atención individual.",
    "`equally` indica que la respuesta se aplica por igual a todos los casos.",
    "`embarrassed` describe la emoción del niño avergonzado al cambiarse."
  ]
},

// -------------------------
// EJERCICIO 31
// -------------------------
{
  id: 31,
  text: [
    "If you want to estimate the number of jelly beans in a jar, ask friends and average their guesses. A group guess often outperforms individuals, provided they don't see each other's answers. A new study shows social influence can sway estimates and make the crowd ",
    ". Published in the Proceedings of the National Academy of Sciences, crowd wisdom is a statistical phenomenon: wild guesses cancel out, yielding closer results. Yet psychology and statistics don't always ",
    ". Seeing peers’ estimates caused more second-guessing, which ",
    " the spread of responses and misled the group. Even ",
    ", knowing others agreed increased confidence in answers. So numbers have wisdom—if kept quiet until counted."
  ],
  blanks: [
    { options: ["eminence", "insolence", "estimate", "imminence"], correct: "estimate" },
    { options: ["correct", "entrenched", "incorrect", "divided"], correct: "incorrect" },
    { options: ["differ", "mix", "agree", "tell"], correct: "mix" },
    { options: ["added", "weakened", "narrowed", "widened"], correct: "narrowed" },
    { options: ["exception", "direction", "recollection", "inception"], correct: "direction" },
    { options: ["better", "worse", "though", "than"], correct: "worse" }
  ],
  explanation: [
    "`estimate` se refiere a la predicción de la cantidad de caramelos.",
    "`incorrect` refleja que la influencia social puede llevar a errores.",
    "`mix` indica que los valores se combinan, no siempre coinciden.",
    "`narrowed` significa que la gama de respuestas se estrechó.",
    "`direction` indica que el grupo se orientó incorrectamente.",
    "`worse` señala que la confianza aumentó aunque el resultado empeoró."
  ]
},

// -------------------------
// EJERCICIO 32
// -------------------------
{
  id: 32,
  text: [
    "Sometimes it seems there's only so much we can learn about ",
    ". We can't observe coloration or behavior. Only remains allow extrapolation. Scientists now infer dinosaur movement from ostriches. Flightless birds retain feathered forelimbs. But ",
    " from Germany and Belgium carefully ",
    " ",
    " ostriches, modeling their movements in air streams. They found wings aid in braking, turning, and zig-zagging. Findings were presented at the Society for ",
    " Biology conference in Prague. Ostrich movement may reflect bipedal dinosaurs, aiding in speed, ",
    " and agility."
  ],
  blanks: [
    { options: ["phones", "warts", "moulds", "dinosaurs"], correct: "dinosaurs" },
    { options: ["receivables", "grievances", "priestesses", "researchers"], correct: "researchers" },
    { options: ["starred", "trussed", "hurt", "observed"], correct: "observed" },
    { options: ["plagued", "motivate", "hand-raised", "grape"], correct: "hand-raised" },
    { options: ["findings", "sermonizes", "portraitists", "temporizes"], correct: "findings" },
    { options: ["Ventricle", "Accidental", "Experimental", "Civil"], correct: "Experimental" },
    { options: ["impermeability", "wickedly", "stability", "impenetrability"], correct: "stability" }
  ],
  explanation: [
    "`dinosaurs` se refiere a los animales estudiados.",
    "`researchers` son quienes realizaron las observaciones.",
    "`observed` indica la acción de analizar a los avestruces.",
    "`hand-raised` refleja aves criadas a mano para estudio controlado.",
    "`findings` son los resultados de la investigación.",
    "`Experimental` se refiere a la naturaleza del estudio.",
    "`stability` indica cómo las extremidades contribuyen al equilibrio y agilidad."
  ]
},

// -------------------------
// EJERCICIO 33
// -------------------------
{
  id: 33,
  text: [
    "Children are often ",
    " by various musical experiences. Opportunities for active music-making are declining. They are surrounded by music from an ",
    " of devices, toys, and computers offering a ",
    " array of musical selections. Yet much music is 'unchosen,' making them ",
    " listeners. They encounter music in games, TV, films, iPads, radios, and ringtones, influenced by parents or schools. Studies are being ",
    " on how ubiquitous pre-recorded music ",
    " on their desire to create and interact musically."
  ],
  blanks: [
    { options: ["surrounded", "deterred", "deferred", "characterized"], correct: "surrounded" },
    { options: ["array", "appointment", "access", "arrangement"], correct: "array" },
    { options: ["limitless", "plunging", "excessive", "spacious"], correct: "limitless" },
    { options: ["dormant", "bilateral", "active", "passive"], correct: "passive" },
    { options: ["abandoned", "culminated", "confided", "conducted"], correct: "conducted" },
    { options: ["can have intruded", "would have intruded", "could have intruded", "is intruding"], correct: "is intruding" }
  ],
  explanation: [
    "`surrounded` indica exposición constante a la música.",
    "`array` refleja la variedad de dispositivos y fuentes.",
    "`limitless` significa selección prácticamente infinita.",
    "`passive` indica que son receptores pasivos, no activos.",
    "`conducted` se refiere a estudios realizados sobre este efecto.",
    "`is intruding` significa que la música afecta su deseo de interactuar."
  ]
},

// -------------------------
// EJERCICIO 34
// -------------------------
{
  id: 34,
  text: [
    "Cultural studies is a new approach to studying culture. Traditionally, disciplines like anthropology, history, literary studies, human geography, and sociology examined culture from their own perspectives. ",
    ", in recent decades there has been a ",
    " interest in studying culture across disciplinary ",
    ". The ",
    " activities and cultural studies have become an exciting intellectual field, shedding new light on human cultures and promising to continue doing so. While there is little doubt that cultural studies will ",
    " as a distinctive field, it covers a potentially enormous area. 'Culture' has a complex history and provides a legitimate ",
    " of inquiry across disciplines."
  ],
  blanks: [
    { options: ["However", "Then", "Subsequently", "Consistently"], correct: "However" },
    { options: ["renewed", "refunded", "renowned", "irresistible"], correct: "renewed" },
    { options: ["discriminations", "similarities", "boundaries", "differentiations"], correct: "boundaries" },
    { options: ["simultaneous", "spontaneous", "resulting", "derivative"], correct: "resulting" },
    { options: ["have promised", "promising", "promises", "would have promised"], correct: "promises" },
    { options: ["phase out", "pull together", "be widely recognized", "be narrowly reduced"], correct: "be widely recognized" },
    { options: ["dispersion", "focus", "heart", "centre"], correct: "focus" }
  ],
  explanation: [
    "`However` introduce contraste con el pasado.",
    "`renewed` refleja un interés reciente renovado.",
    "`boundaries` indica cruces de límites disciplinarios.",
    "`resulting` se refiere a actividades que surgieron de este enfoque.",
    "`promises` indica que el campo continuará desarrollándose.",
    "`be widely recognized` significa que se consolidará como campo distintivo.",
    "`focus` indica el centro de investigación y estudio."
  ]
},

// -------------------------
// EJERCICIO 35
// -------------------------
{
  id: 35,
  text: [
    "Since biological systems with signs of ",
    " engineering are unlikely to have arisen by chance, their ",
    " must result from natural selection and therefore should have ",
    " useful for survival and reproduction in human evolutionary environments."
  ],
  blanks: [
    { options: ["complimentary", "complex", "compensatory", "compendious"], correct: "complex" },
    { options: ["compilation", "organization", "eccentricity", "metabolism"], correct: "organization" },
    { options: ["evaluations", "functions", "intentions", "attentions"], correct: "functions" }
  ],
  explanation: [
    "`complex` indica que los sistemas biológicos son complejos.",
    "`organization` refleja la estructura interna adaptativa.",
    "`functions` indica que poseen funciones útiles para sobrevivir."
  ]
},

// -------------------------
// EJERCICIO 36
// -------------------------
{
  id: 36,
  text: [
    "The International Journal of Design is a peer-reviewed, open-access journal publishing research across all design fields: industrial, visual communication, interface, animation, game, architectural, urban, and related areas. It aims to provide an international forum for the ",
    " of ideas and findings across cultures and encourages research on cultural impacts ",
    " design theory and practice. It also promotes ",
    " of knowledge between academia and industry by emphasizing research whose ",
    " results are relevant to design practices."
  ],
  blanks: [
    { options: ["infliction", "change", "ocurrence", "exchange"], correct: "exchange" },
    { options: ["without", "on", "inside", "at"], correct: "on" },
    { options: ["overlap", "transplant", "transfer", "estimation"], correct: "transfer" },
    { options: ["the", "which", "that", "what"], correct: "which" }
  ],
  explanation: [
    "`exchange` se refiere al intercambio de ideas.",
    "`on` indica el impacto sobre la teoría y práctica.",
    "`transfer` refleja la transferencia de conocimiento.",
    "`which` introduce la condición de relevancia para diseño."
  ]
},

// -------------------------
// EJERCICIO 37
// -------------------------
{
  id: 37,
  text: [
    "Coastal fish farms seem less harmful to local plants and animals than ",
    " thought, a new study ",
    ". Marine ecosystems can ",
    " from such damage ",
    ". But analysis of a trout farm in Faroe Islands over nearly a year shows careful management is needed and there's a limit to operations before biodiversity suffers. In coastal farms, fish live in cages on the water. Feces and uneaten food sink, affecting seabed ecosystems. ",
    " managed farms can also impact surrounding waters."
  ],
  blanks: [
    { options: ["collectively", "individually", "previously", "pretentiously"], correct: "previously" },
    { options: ["introduces", "deceives", "reveals", "conceives"], correct: "reveals" },
    { options: ["derive", "segregate", "recover", "prevent"], correct: "recover" },
    { options: ["visually", "commonly", "surprisingly", "spiritually"], correct: "surprisingly" },
    { options: ["dislocated", "estimated", "placed", "dismounted"], correct: "placed" },
    { options: ["Well", "Badly", "Expectedly", "Attentively"], correct: "Badly" }
  ],
  explanation: [
    "`previously` indica la creencia anterior sobre impacto.",
    "`reveals` señala lo que el estudio muestra.",
    "`recover` significa que el ecosistema puede recuperarse.",
    "`surprisingly` indica rapidez inesperada de recuperación.",
    "`placed` significa ubicadas cuidadosamente las granjas.",
    "`Badly` refleja que mal gestionadas afectan el entorno."
  ]
},

// -------------------------
// EJERCICIO 38
// -------------------------
{
  id: 38,
  text: [
    "Forty years ago, Donald Johanson discovered arguably the most famous early human fossil in Ethiopia: Lucy. At a ScienceWriters2014 meeting, he described seeing Lucy. A year earlier, during the ",
    ", a geologist had left footprints nearby while searching for rocks. Johanson found a small elbow piece, a ",
    " allowing arm flexion. Looking uphill, he saw other ",
    " eroding. The species was named Australopithecus afarensis in 1978."
  ],
  blanks: [
    { options: ["ancestor", "dulcimer", "mantissa", "cullender"], correct: "ancestor" },
    { options: ["discovery", "confession", "concealment", "interpolation"], correct: "discovery" },
    { options: ["skeleton", "singleton", "insulin", "chairperson"], correct: "skeleton" },
    { options: ["hinge", "axis", "pulley", "knot"], correct: "hinge" },
    { options: ["malice", "deterrence", "fragments", "ballots"], correct: "fragments" },
    { options: ["published", "object", "encampment", "eructed"], correct: "published" }
  ],
  explanation: [
    "`ancestor` indica que Lucy es un ancestro humano.",
    "`discovery` se refiere al hallazgo fósil.",
    "`skeleton` indica que se trata de restos óseos.",
    "`hinge` describe la articulación del codo.",
    "`fragments` se refiere a fragmentos fósiles adicionales.",
    "`published` indica la formalización del nombre científico."
  ]
},

// -------------------------
// EJERCICIO 39
// -------------------------
{
  id: 39,
  text: [
    "Invasive species can ",
    " biodiversity and push native species toward extinction. Prevention, early detection, and rapid response are critical. Control strategies include physical, chemical, and biological methods. Public awareness and legislation also play a key role in ",
    " invasions. Climate change may exacerbate invasions by creating favorable conditions. Managing invasions requires international cooperation and consistent monitoring to prevent long-term ecological and economic impacts."
  ],
  blanks: [
    { options: ["threaten", "support", "neglect", "analyze"], correct: "threaten" },
    { options: ["facilitating", "mitigating", "preventing", "ignoring"], correct: "preventing" }
  ],
  explanation: [
    "`threaten` indica que las especies invasoras ponen en riesgo la biodiversidad.",
    "`preventing` se refiere a impedir la propagación de invasoras."
  ]
}
,
// -------------------------
// EJERCICIO 40
// -------------------------
{
  id: 40,
  text: [
    "The discovery of a set of what look like ancient hominin footprints on the island of Crete could throw our understanding of human evolution into disarray. Received wisdom is that after ",
    " from the chimp lineage, our hominin ancestors were confined to Africa until around 1.5 million years ago. The prints found in Crete, however, ",
    " to a creature that appears to have lived 5.7 million years ago ... More research is needed ... the prints seem to have been ",
    " by a creature that walked upright, on the soles of clawless feet ..."
  ],
  blanks: [
    { options: ["degrading", "splitting", "converging", "escaping"], correct: "splitting" },
    { options: ["stuck", "flanked", "clung", "belonged"], correct: "belonged" },
    { options: ["faked", "made", "filled", "taken"], correct: "made" },
    { options: ["previously", "respectively", "surprisingly", "relatively"], correct: "previously" }
  ],
  explanation: [
    "`splitting` se refiere a la separación del linaje de los chimpancés.",
    "`belonged` indica que las huellas pertenecían a un homínido.",
    "`made` significa que la criatura caminó dejando las huellas.",
    "`previously` indica que ya caminaba erguido, según lo observado."
  ]
},

// -------------------------
// EJERCICIO 41
// -------------------------
{
  id: 41,
  text: [
    "The iPhone ... The first-generation iPhone was ",
    " by Apple co-founder Steve Jobs ... The iPhone's user interface is built around a multi-touch screen with a ",
    " keyboard. ... further features have been added ... ",
    " accessibility support. ... gesture ",
    " ."
  ],
  blanks: [
    { options: ["announced", "seen", "got", "taken"], correct: "announced" },
    { options: ["solid", "visible", "virtual", "broad"], correct: "virtual" },
    { options: ["more than", "in spite of", "as well as", "except"], correct: "as well as" },
    { options: ["estimation", "establishment", "production", "recognition"], correct: "recognition" }
  ],
  explanation: [
    "`announced` significa que Steve Jobs presentó el iPhone.",
    "`virtual` describe el teclado en pantalla táctil.",
    "`as well as` indica la adición de soporte de accesibilidad junto con otras funciones.",
    "`recognition` se refiere al reconocimiento de gestos en el dispositivo."
  ]
},

// -------------------------
// EJERCICIO 42
// -------------------------
{
  id: 42,
  text: [
    "The stock of Australia's dwellings is ",
    ", with current homes having more bedrooms on average than homes ten years ago. At the same time, households are getting smaller on average with decreasing ",
    " of couple families with children and ",
    " couple only and lone person households. This ",
    " examines the changes in household size and number of bedrooms from 1994-95 to 2003-04."
  ],
  blanks: [
    { options: ["evanescent", "eternal", "erupting", "evolving"], correct: "evolving" },
    { options: ["interests", "proportions", "appearances", "durations"], correct: "proportions" },
    { options: ["flopping", "increasing", "fluctuating", "declining"], correct: "increasing" },
    { options: ["statistic", "suggestion", "article", "index"], correct: "article" }
  ],
  explanation: [
    "`evolving` indica que las viviendas están cambiando con el tiempo.",
    "`proportions` se refiere a la proporción de familias con hijos.",
    "`increasing` muestra el aumento de hogares de pareja y personas solas.",
    "`article` señala que se trata de un estudio o publicación que analiza estos cambios."
  ]
},

// -------------------------
// EJERCICIO 43
// -------------------------
{
  id: 43,
  text: [
    "The Elder Academy scheme ... was ",
    " in early 2007 ... The activities provide ",
    " to learning opportunities ... optimizes the use of existing ",
    " facilities and has been successful ... helping to maintain ",
    " and mental wellbeing."
  ],
  blanks: [
    { options: ["portioned", "relegated", "launched", "provisioned"], correct: "launched" },
    { options: ["assumption", "condescension", "access", "ascendancy"], correct: "access" },
    { options: ["entertaining", "educational", "profitable", "economical"], correct: "educational" },
    { options: ["tangible", "stoical", "physical", "solid"], correct: "physical" }
  ],
  explanation: [
    "`launched` indica que el programa se inició oficialmente.",
    "`access` significa que proporciona acceso a oportunidades de aprendizaje.",
    "`educational` se refiere a la naturaleza educativa de las actividades.",
    "`physical` describe el uso de instalaciones físicas existentes."
  ]
},

// -------------------------
// EJERCICIO 44
// -------------------------
{
  id: 44,
  text: [
    "Children who skip school are increasingly on family holidays ... ",
    " children played truant this spring term ... But a ",
    " group of truants ... same ",
    " last year. ... not ",
    " by their school last term ..."
  ],
  blanks: [
    { options: ["Same", "More", "Fewer", "Less"], correct: "Fewer" },
    { options: ["mere", "hardcore", "residual", "flimsy"], correct: "hardcore" },
    { options: ["slot", "span", "period", "duration"], correct: "period" },
    { options: ["consent", "recommended", "agreed", "contradicted"], correct: "agreed" }
  ],
  explanation: [
    "`Fewer` indica que hubo menos niños haciendo novillos.",
    "`hardcore` se refiere a un grupo constante o dedicado de alumnos faltistas.",
    "`period` describe el período de tiempo comparable al año anterior.",
    "`agreed` señala que no fueron aprobados o supervisados por la escuela."
  ]
},

// -------------------------
// EJERCICIO 45
// -------------------------
{
  id: 45,
  text: [
    "Scientists have discovered the cause of a mass extinction ... which also provides insight into how climate change can impact ",
    " deep ocean biota. In a new study ",
    " in the journal Nature Communications ... cause ... was ",
    " unknown. Scientists tested various possible ",
    " for the mass extinction ... ",
    ", they discovered that the extinction was caused by a global change in plankton at the surface of the ocean."
  ],
  blanks: [
    { options: ["in", "of", "on", "off"], correct: "on" },
    { options: ["publishing", "has published", "published", "be publishing"], correct: "published" },
    { options: ["occasionally", "necessarily", "previously", "currently"], correct: "previously" },
    { options: ["causes", "consequences", "elements", "factors"], correct: "causes" },
    { options: ["However", "Thus", "So", "Instead"], correct: "Instead" }
  ],
  explanation: [
    "`on` indica que el cambio climático afecta la biota del océano profundo.",
    "`published` señala que el estudio se publicó en la revista.",
    "`previously` indica que la causa era previamente desconocida.",
    "`causes` se refiere a factores probables de la extinción.",
    "`Instead` introduce el hallazgo real que reemplaza la hipótesis anterior."
  ]
},

// -------------------------
// EJERCICIO 46
// -------------------------
{
  id: 46,
  text: [
    "Psychology as a subject of study has largely developed in the West since the late nineteenth century. During this period there has been an ",
    " on scientific thinking. Because of this, there have been many scientific studies in psychology which ",
    " different aspects of human nature. These include studies into how biology (physical factors) influences human experience, how people use their ",
    " (touch, taste, smell, sight and hearing) to get to know the world, how people develop, why people behave in certain ways, how memory works, how people develop language, how people understand and think about the world, what motivates people, why people have emotions and how personality develops. These scientific ",
    " all contribute to an understanding of human nature. What do we mean by the practical applications of these studies? An ",
    " of psychology is useful in many different areas in life, such as education, the workplace, social services and medicine. This means that people who have knowledge of psychology can ",
    " or apply that knowledge in areas such as the ones listed above."
  ],
  blanks: [
    { options: ["emphasis", "attention", "example", "extension"], correct: "emphasis" },
    { options: ["exclude", "summon", "separate", "explore"], correct: "explore" },
    { options: ["brains", "skins", "minds", "senses"], correct: "senses" },
    { options: ["assumptions", "correlations", "investigations", "stimulations"], correct: "investigations" },
    { options: ["ideology", "empowerment", "understanding", "equivalence"], correct: "understanding" },
    { options: ["register", "classify", "use", "prepare"], correct: "use" }
  ],
  explanation: [
    "`emphasis` indica la importancia en el pensamiento científico.",
    "`explore` significa estudiar diferentes aspectos de la naturaleza humana.",
    "`senses` se refiere a los sentidos utilizados para percibir el mundo.",
    "`investigations` son los estudios científicos que contribuyen al conocimiento.",
    "`understanding` indica la aplicación práctica del conocimiento psicológico.",
    "`use` significa emplear ese conocimiento en contextos prácticos."
  ]
},

// -------------------------
// EJERCICIO 47
// -------------------------
{
  id: 47,
  text: [
    "The study of objects constitutes a relatively new field of academic enquiry, commonly referred to as material culture studies. Students of material culture seek to understand societies, both past and present, through careful study and ",
    " of the physical or material objects generated by those societies. The source material for study is exceptionally wide, ",
    " not just human-made artefacts but also natural objects and even preserved body parts ... Some specialists in the field of material culture have made bold claims for its pre-eminence. In certain disciplines, it reigns ",
    " . ...",
    " , objects are all scholars have to rely on in forming an understanding of ancient peoples. ... {as in} the case of medieval and post-medieval archaeology."
  ],
  blanks: [
    { options: ["experiment", "modification", "consumption", "observation"], correct: "observation" },
    { options: ["includes", "including", "included", "had included"], correct: "including" },
    { options: ["at all", "supreme", "everywhere", "far and wide"], correct: "supreme" },
    { options: ["By no means", "In such cases", "In this time", "In this way"], correct: "In such cases" },
    { options: ["as long as", "as if", "as a result of", "as in"], correct: "as in" }
  ],
  explanation: [
    "`observation` significa examinar los objetos cuidadosamente.",
    "`including` indica que se consideran también objetos naturales y restos humanos.",
    "`supreme` refleja la importancia central del estudio en ciertas disciplinas.",
    "`In such cases` señala que en esos casos los objetos son la única fuente.",
    "`as in` introduce un ejemplo concreto de arqueología medieval."
  ]
},

// -------------------------
// EJERCICIO 48
// -------------------------
{
  id: 48,
  text: [
    "Away from the rumble of Shanghai's highways and the cacophony of the shopping districts, stroll down side streets filled with rows of tall brick ",
    ". In the early evening or on a weekend morning, you'll hear the ",
    " of classical music drifting from a piano ... Wander down another alley toward concrete ",
    " and you'll hear Beethoven or Mozart flowing from a violin, or perhaps a cello, accordion or flute. In China, classical music is ",
    " as mightily as the 1812 Overture. ..."
  ],
  blanks: [
    { options: ["rooms", "piles", "huts", "houses"], correct: "houses" },
    { options: ["impact", "sound", "effect", "noise"], correct: "sound" },
    { options: ["skyscrapers", "craters", "museums", "courts"], correct: "skyscrapers" },
    { options: ["looming", "bluffing", "changing", "booming"], correct: "booming" }
  ],
  explanation: [
    "`houses` se refiere a las casas de ladrillo en las calles laterales.",
    "`sound` indica el sonido de la música clásica.",
    "`skyscrapers` describe los altos edificios hacia los que se dirige la música.",
    "`booming` significa que la música suena con fuerza y resonancia."
  ]
},

// -------------------------
// EJERCICIO 49
// -------------------------
{
  id: 49,
  text: [
    "Paraphrasing is often defined as putting a passage from an author into your own words. However, what are your own words? How different must your paraphrase be from the original? The answer is it should be ",
    " different. The whole point of paraphrasing is to show you have read and understood another person's ideas, and can summarize them in your own writing style rather than borrowing their phrases. If you just change a few words, or add some bits ",
    " your own to an otherwise reproduced passage, you will probably ",
    " for plagiarism. ...",
    " also important to credit the original writer by referencing."
  ],
  blanks: [
    { options: ["considerable", "considerate", "considering", "considerably"], correct: "considerably" },
    { options: ["despite", "of", "on", "off"], correct: "of" },
    { options: ["be penalizing", "be penalized", "have penalized", "penalize"], correct: "be penalized" },
    { options: ["That has", "It is", "There is", "That is"], correct: "It is" }
  ],
  explanation: [
    "`considerably` significa que la paráfrasis debe ser significativamente diferente.",
    "`of` indica añadir elementos propios a la reproducción del texto.",
    "`be penalized` advierte que puedes ser sancionado por plagio.",
    "`It is` introduce la importancia de citar al autor original."
  ]
},

// -------------------------
// EJERCICIO 50
// -------------------------
{
  id: 50,
  text: [
    "It is an original work, not an excerpted passage. An abstract must be fully self-contained and ",
    " sense by itself, without further reference to outside sources or to the actual paper. It highlights key ",
    " areas, your research purpose, the relevance or importance of your work, and the main outcomes. ... of approximately 250 words ",
    ", which is indented and single spaced. ... Although ",
    " at the beginning of your paper ... the abstract should be the last thing that you write, ",
    " you are sure of the conclusions you will reach."
  ],
  blanks: [
    { options: ["get", "give", "take", "make"], correct: "make" },
    { options: ["contemplate", "content", "account", "comment"], correct: "content" },
    { options: ["from", "within", "to", "in"], correct: "in" },
    { options: ["it is placed", "it places", "it has placed", "it is placing"], correct: "it is placed" },
    { options: ["once", "then", "before", "and"], correct: "once" }
  ],
  explanation: [
    "`make` significa que el resumen debe tener sentido por sí mismo.",
    "`content` se refiere a las áreas clave del contenido del trabajo.",
    "`in` indica la ubicación del resumen dentro del documento.",
    "`it is placed` señala cómo se posiciona al inicio del trabajo.",
    "`once` indica que debe escribirse cuando las conclusiones estén claras."
  ]
}


  ];

  export default FillInTheBlanks;
  