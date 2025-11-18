// exercisesData.ts

export interface BlankOption {
    options: string[];
    correct?: string;
  }
  
  export interface Exercise {
    text: string[];
    blanks: BlankOption[];
  }
  
  export const FillInTheBlanks: Exercise[] = [
    // -------------------------
    // EJERCICIO 1
    // -------------------------
    {
      text: [
        "People are living longer and this longevity is good news for sales teams. It results in a much more ",
        " customer base for them to work from. Why we are living longer is not the issue for anyone ",
        " in drawing up plans to market a product. What they focus on is the fact that there are now more age groups to target, which means that a sales pitch can be re-worked a number of times to more exactly fit each one. For example, ",
        " referring simply to 'adults', there are now 'starting adults', 'young adults' and 'established adults'. ",
        ", markets no longer talk about 'children', but tend to refer to a fuller range of categories that includes 'kids', 'tweens', 'pre-teens' and 'teenagers'. We now have a very diverse population in terms of age, and that can only be a ",
        " for business."
      ],
      blanks: [
        { options: ["usual", "precise", "right", "honest"], correct: "precise" },
        { options: ["mixed", "concerned", "involved", "linked"], correct: "involved" },
        { options: ["while", "by", "even when", "rather than"], correct: "rather than" },
        { options: ["Even", "While", "Similarly", "Really"], correct: "Similarly" },
        { options: ["favour", "bonus", "promise", "desire"], correct: "bonus" }
      ]
    },
  
    // -------------------------
    // EJERCICIO 2
    // -------------------------
    {
      text: [
        "In the southern cone especially, from Venezuela to Argentina, the region is rising to overthrow the legacy of external domination of the past centuries and the cruel and destructive social forms that they have helped to establish. The ",
        " of imperial control- violence and economic warfare, hardly a distant memory in Latin America- are losing their effectiveness, a sign of the shift toward independence. Washington is now compelled to tolerate governments that in the past would have drawn intervention or reprisal. Throughout the region a vibrant ",
        " of popular movements provides the basis for a meaningful democracy. The indigenous populations, as if in a rediscovery of their pre-Columbian legacy, are much more active and influential, particularly in Bolivia and Ecuador. These developments are in part the result of a phenomenon that has been observed for some years in Latin America: As the elected governments become more formally democratic, citizens ",
        " an increasing disillusionment with democratic institutions. They have sought to construct democratic systems based on popular participation rather than elite and foreign ",
        "."
      ],
      blanks: [
        { options: ["merchants", "metabolism", "mechanisms", "machinery"], correct: "mechanisms" },
        { options: ["sequence", "flow", "array", "direction"], correct: "array" },
        { options: ["extent", "export", "express", "expose"], correct: "express" },
        { options: ["detection", "domination", "illustration", "determination"], correct: "domination" }
      ]
    },
  
    // -------------------------
    // EJERCICIO 3
    // -------------------------
    {
      text: [
        "Climate is the word we ",
        " for weather over a long period of time. The desert has a dry climate because there is very ",
        " rain. The UK has a ‘temperate climate’, ",
        " means winters are, overall, mild and, ",
        " generally, don’t get too hot."
      ],
      blanks: [
        { options: ["estimates", "predict", "cares", "use"], correct: "use" },
        { options: ["torrential", "often", "little", "heavy"], correct: "little" },
        { options: ["what", "these", "that", "which"], correct: "which" },
        { options: ["summers", "winter", "desert", "dessert"], correct: "summers" }
      ]
    },
  
    // -------------------------
    // EJERCICIO 4
    // -------------------------
    {
      text: [
        "Since the last papal reform, several ",
        " have been ",
        " to make the Western calendar more useful or ",
        ". Very few reforms, such as the rather different decimal French Republican and Soviet calendars, had gained official ",
        ", but each was put out of use shortly after its introduction."
      ],
      blanks: [
        { options: ["arguments", "essays", "assumptions", "proposals"], correct: "proposals" },
        { options: ["expected", "accomplished", "overthrown", "offered"], correct: "offered" },
        { options: ["portable", "strict", "regular", "abnormal"], correct: "regular" },
        { options: ["accepted", "accept", "acceptance", "accepting"], correct: "acceptance" }
      ]
    },

    // -------------------------
  // EJERCICIO 5
  // -------------------------
  {
    text: [
      "The writer, or, for that matter, the speaker conceives his thought whole, as a unity, but must express it in a line of words; the reader, or listener, must take this line of symbols and from it ",
      " the original wholeness of thought. There is ",
      " difficulty in conversation, because the listener receives innumerable cues from the physical expressions of the speaker; there is a dialogue, and the listener can ",
      " in at any time. The advantage of group discussion is that people can overcome linear sequence of words by ",
      " on ideas from different directions; which makes for wholeness of thought. But the reader is confronted by line upon line of printed symbols, without benefits of physical ",
      " and emphasis or the possibility of dialogue or discussion."
    ],
    blanks: [
      { options: ["recover", "respect", "reconstruct", "reduce"], correct: "reconstruct" },
      { options: ["little", "much", "more", "few"], correct: "little" },
      { options: ["lean", "cut", "intrude", "get"], correct: "cut" },
      { options: ["conveying", "combining", "collecting", "converging"], correct: "converging" },
      { options: ["tune", "thumb", "tone", "tile"], correct: "tone" }
    ]
  },

  // -------------------------
  // EJERCICIO 6
  // -------------------------
  {
    text: [
      "Sydney is becoming effective in making the best of its limited available unconstrained land. Sydney is suitable for integrating suitable business, office, residential, retail and other development in accessible locations so as to maximise public transport ",
      " and encourage walking and cycling. Also, this city can reduce the ",
      " of land for housing and associated urban development on the urban fringe. For the proposed mixed business, mixed use and business park areas, there was no employment data available for ",
      " areas. It is also concluded that lack of housing supply will affect ",
      " in Sydney."
    ],
    blanks: [
      { options: ["patron", "patronizing", "patronize", "patrons", "patronage"], correct: "patronage" },
      { options: ["consumption", "consumed", "consume", "consuming", "consumable"], correct: "consumption" },
      { options: ["comparison", "compared", "compare", "comparing", "comparable"], correct: "comparable" },
      { options: ["affording", "afford", "affordable", "afforded", "affordability"], correct: "affordability" }
    ]
  },

  // -------------------------
  // EJERCICIO 7
  // -------------------------
  {
    text: [
      "Everybody eats. And consumers increasingly try to consider the ",
      " effects of their food choices. For example, if you want to eat meat, how do your choices compare? That's what a group of researchers set out to ",
      ". And they found that raising one animal is dramatically more environmentally draining than all the others: cows. The research is in the Proceedings of the National Academy of Sciences. The scientists noted the challenge in accessing data and creating metrics that can be compared across livestock and to potato, wheat and rice ",
      ". They settled on national data from the U.S. Departments of Agriculture, the Interior and Energy. The team calculated the production costs by assessing land area, water needs and fertilizer. They also analysed greenhouse gas ",
      ". Producing pork, poultry, eggs and dairy were between two and six times less efficient than growing potatoes, wheat and rice. And in the current ",
      " system, beef uses 28 times more land, 11 times more water and six times more fertilizer than the average of the other categories of livestock. Cattle ranching also creates five times more greenhouse gas emissions. The researchers hope this data will help consumers make informed choices and policy makers create systems that can reduce the environmental costs of what we eat."
    ],
    blanks: [
      { options: ["spiritual", "economic", "environmental", "material"], correct: "environmental" },
      { options: ["exemplify", "squander", "discover", "purchase"], correct: "discover" },
      { options: ["production", "corruption", "consumption", "inventory"], correct: "production" },
      { options: ["conjectures", "manufacture", "emissions", "purification"], correct: "emissions" },
      { options: ["agricultural", "impalpable", "ungrammatical", "terminal"], correct: "agricultural" }
    ]
  },

  // -------------------------
  // EJERCICIO 8
  // -------------------------
  {
    text: [
      "The famous dictionary of Samuel Johnson, published in London in 1755; its principles dominated English ",
      " for more than a century. This two-volume work surpassed earlier dictionaries not in ",
      " but in the precision of definition. Its strength lay in two features: the original carefully divided and ordered, elegantly formulated definitions of the main word stock of the language; and the copious citation of quotations from the entire range of English literature, which served in support and illustration and which ",
      " the different shades of meaning of a particular word. A Dictionary of the English Language included a history of the language, a grammar, and an extensive list of words representing basic general vocabulary, based on the best conversation of ",
      " London and the normal usage of respected writers. The original was followed in 1756 by an abbreviated one-volume version that was widely used far into the 20th century. Johnson's accomplishment was to provide for the English language a dictionary that incorporated with skill and intellectual power the ",
      " ideals and resources and the best available techniques of European lexicography. It was the standard English dictionary until Noah Webster's."
    ],
    blanks: [
      { options: ["hieroglyph", "lexicography", "hierarchy", "taxonomy"], correct: "lexicography" },
      { options: ["busk", "barn", "bask", "bulk"], correct: "bulk" },
      { options: ["classified", "exemplified", "signified", "simplified"], correct: "exemplified" },
      { options: ["contemptuous", "contemplative", "contemporary", "contemptible"], correct: "contemporary" },
      { options: ["prevailing", "condescending", "dignifying", "demeaning"], correct: "prevailing" }
    ]
  },

  // -------------------------
  // EJERCICIO 9
  // -------------------------
  {
    text: [
      "Clown fish became famous thanks to the movie Finding Nemo. In real life, their social hierarchy is simple: larger fish dominate their smaller ",
      ". Now we know that to reinforce this social structure, the fish communicate with aggressive and submissive audio signals. The new info is in the journal PLoS ONE. Researchers ",
      " clown fish calls, ",
      " this noise as one chased a smaller fish. [Aggressive audio] These popping sounds function as an aggression signal. When a clown fish has been chased and wishes to submit, it shakes its head in a submissive gesture and produces clicking noises like these. The researchers ",
      " the aggressive and submissive calls, and found that the sound pulses in a submissive signal were shorter and more high-pitched. Unlike many animals that use sound to draw in ",
      " mates, clown fish appear to use their calls only as labels of social status. When a little fish makes submissive sounds to a larger one, neither has to invest in a physical confrontation. Which is good news for small-fry like Nemo."
    ],
    blanks: [
      { options: ["palms", "prompts", "traps", "counterparts"], correct: "counterparts" },
      { options: ["unfolded", "deported", "recorded", "dialled"], correct: "recorded" },
      { options: ["cluttering", "profiting", "capturing", "padlocking"], correct: "capturing" },
      { options: ["pared", "compared", "guided", "treaded"], correct: "compared" },
      { options: ["exponential", "potential", "nimble", "ventral"], correct: "potential" }
    ]
  },

  // -------------------------
  // EJERCICIO 10
  // -------------------------
  {
    text: [
      "Owls are nearly ",
      " hunters, swooping down on prey without any warning whoosh. How do they do it? We've known that the leading edge of an owl's wing has a comb of stiff ",
      ". And the trailing edge has a flexible fringe, unlike the rigid trailing edge of a ",
      " bird wing. These two features contribute to a structure that ",
      " almost no noise as it rushes through the air. Now it appears that these ",
      " have a third trick up their sleeves—or rather, wings—that allow them to be so silent but deadly. Researchers modelled the effect of the layer of down on the wing's top surface. And it looks like that fluffy stuff absorbs sound too. The work was presented at a meeting of the American Physical Society's Division of Fluid Dynamics. Mimicking owl wing down may lead to new sound-proofing materials. Down and the other silencing features could inspire wind turbines and plane engines that produce less noise and fewer vibrations. So that all we hear is silence."
    ],
    blanks: [
      { options: ["employables", "joyfulness", "noiseless", "avoidances"], correct: "noiseless" },
      { options: ["feathers", "beaks", "claws", "tracts"], correct: "feathers" },
      { options: ["bearable", "convectional", "correctable", "conventional"], correct: "conventional" },
      { options: ["equals", "manufactures", "produces", "derives"], correct: "produces" },
      { options: ["riveters", "nebulas", "predators", "spiracles"], correct: "predators" }
    ]
  },

  // -------------------------
  // EJERCICIO 11
  // -------------------------
  {
    text: [
      "For decades, scientists have used an imaging technique called functional magnetic resonance imaging, or fMRI, to ",
      " the brain in action. But a study in the January 22nd issue of Nature suggests that fMRI might show more than what the brain is doing—it might reveal what the brain's about to do. FMRI studies assume that blood flow in the brain ",
      " with neuronal ",
      ". Active brain cells need ",
      ", which are brought to the cells by freshly oxygenated blood. But in the new study, scientists found that fMRI also detects ",
      " blood flow in brain regions that aren't active—but that may be in the near future. The researchers trained monkeys to perform a specific visual task. And they found that, even when the animals were sitting in the dark waiting for the test to begin, fMRI nevertheless revealed an increased blood flow to the monkeys' visual cortex. The study suggests that fMRI data may be a lot more interesting than we thought. Scientists may be looking at their imaging data in a way that's too simplistic. And fMRI may not be measuring exactly what we thought it did. What will they think of next? Maybe fMRI can tell."
    ],
    blanks: [
      { options: ["stunned", "strung", "strong", "stung"], correct: "chronicle" },
      { options: ["academic", "dental", "relative", "indirect"], correct: "correlates" },
      { options: ["incomes", "concerns", "substances", "minds"], correct: "activity" },
      { options: ["patronizes", "disallows", "funds", "facilitates"], correct: "nutrients" },
      { options: ["reciprocity", "risk", "effect", "purpose"], correct: "increased" }
    ]
  },

  // -------------------------
  // EJERCICIO 12
  // -------------------------
  {
    text: [
      "It's Friday the 13th. \"You've got to ask ",
      " a question: 'Do I feel lucky?'\" If you don't, you could be ",
      " from triskaidekaphobia. That's a fear of the number 13. Napoleon, Herbert Hoover and FDR are well-documented triskaidekaphobics. But why do folks think 13 is unlucky? ",
      " when it falls on a Friday, as it will three times this year? The University of Delaware's Thomas Fernsler is known as Dr. 13. He's an expert on the number's bad reputation, which may date back to biblical times. After all, the 13th guest at the Last Supper was Judas. And you know how that worked out for Jesus, who was crucified on a Friday. Other factoids from Fernsler: The first person to die in a car accident was killed in New York City on September the 13th in 1899, ",
      " that was a ",
      ". And the ill-fated flight of Apollo 13 ",
      " at the 13th minute of the 13th hour Central Standard Time on April 11th, 1970. And the numerals in the date 4/11/70 add up to 13! As long as you don't include the 19 in 1970. Hey, sometimes superstition can be hard work. Today, some tall buildings lack a 13th floor. Well, they have a 13th floor, but they call it the 14th floor. Because the purveyors of bad luck are apparently easily fooled. Meanwhile, over in France, panicky Parisian party-throwers can even hire a quadrireme, a professional 14th guest. Like Judas, Mark Twain was allegedly once poised to be the 13th guest at a dinner party. A superstitious friend warned the very rational Twain not to go. But Twain went. \"It was bad luck,\" he later remarked. \"They only had food for 12.\""
    ],
    blanks: [
      { options: ["steppes", "concierge", "sixpence", "yourself"], correct: "yourself" },
      { options: ["suffering", "contacting", "resurfacing", "gravelling"], correct: "suffering" },
      { options: ["Frivolously", "Timorously", "Particularly", "Magnificently"], correct: "Particularly" },
      { options: ["although", "show", "sloe", "forego"], correct: "although" },
      { options: ["Wimpy", "Severely", "Nifty", "Wednesday"], correct: "Wednesday" },
      { options: ["launched", "reenforced", "permafrost", "debouched"], correct: "launched" }
    ]
  },
  // -------------------------
  // EJERCICIO 13
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 14
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 15
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 16
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 17
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 18
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 19
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 20
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 21
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 22
  // -------------------------
  {
    text: [
      "Having tracked down research that is ",
      " to your area of interest, the next task is to actually ",
      " of that research. This section is intended to show you how to be critical of the research you ",
      " and how to check that the ",
      " is credible and represented appropriately. Unfortunately, this means discussing the ways in which research findings may be misrepresented."
    ],
    blanks: [
      { options: ["relevant", "important", "useful", "referred"], correct: "relevant" },
      { options: ["make profit", "take advantage", "make sense", "sum up"], correct: "make sense" },
      { options: ["are monitoring", "are finding", "are reviewing", "are discovering"], correct: "are reviewing" },
      { options: ["support", "invention", "statement", "evidence"], correct: "evidence" }
    ]
  },

  // -------------------------
  // EJERCICIO 23
  // -------------------------
  {
    text: [
      "The Nature Conservation Amendment Act of 1996 enables the Minister of Environment and Tourism to register a conservancy if it has a ",
      " committee, a legal constitution, which provides for the sustainable ",
      " and utilization of game in the conservancy, the ability to ",
      " the funds, an approved method for the ",
      " distribution of benefits to members of the community and defined boundaries."
    ],
    blanks: [
      { options: ["powerful", "patient", "representative", "significant"], correct: "representative" },
      { options: ["management", "attraction", "making", "taking"], correct: "management" },
      { options: ["manage", "liquidate", "redeem", "repossess"], correct: "manage" },
      { options: ["same", "equal", "proportionate", "equitable"], correct: "equitable" }
    ]
  },

  // -------------------------
  // EJERCICIO 24
  // -------------------------
  {
    text: [
      "Of the more than 1,000 bat species worldwide, 22 are ",
      " to North America. And while there are no pollinator bats in our area, gardeners should ",
      " those that do live here, because they’re insectivorous. These bats ",
      " moths, beetles and mosquitoes, and can eat up to 500 mosquito-sized insects per hour. They also protect gardens and crops from such ",
      " as cucumber beetles, cutworms and leafhoppers."
    ],
    blanks: [
      { options: ["local", "national", "native", "residential"], correct: "native" },
      { options: ["suppose", "champion", "breed", "fight"], correct: "champion" },
      { options: ["spend", "consume", "provide", "deplete"], correct: "consume" },
      { options: ["species", "pests", "objects", "animals"], correct: "pests" }
    ]
  },

  // -------------------------
  // EJERCICIO 25
  // -------------------------
  {
    text: [
      "For every action, there's a ",
      ". And for many movements we make, there's an ",
      ": we think about moving, and we move. Now a study published in the May 8th issue of the journal Science suggests that the experience of moving is all in your mind. Because the part of the brain that's active when you intend to move is the same part that lets you feel like you did. Two separate brain regions are involved in moving your body. One part provides the intention, and the other powers the actual movement. But researchers didn't know which part let you know that you actually moved. In the new study, scientists were working with patients ",
      " surgery to remove a brain tumour. Surgeons often electrically ",
      " the area around the tumour while the patient is awake and can provide feedback, so they can avoid damaging critical tissue. The scientists found that zapping one ",
      " part of the brain made their patients feel like they wanted to move their arms, lips or tongue. And ramping up the stimulation to that spot made them feel like they'd done it. But when the team poked at the region that actually caused motion, the patients didn't know they moved—a finding that's oddly moving."
    ],
    blanks: [
      { options: ["contraption", "burden", "transaction", "reaction"], correct: "reaction" },
      { options: ["intention", "ascription", "unchristian", "indirection"], correct: "intention" },
      { options: ["composing", "undergoing", "poring", "pudding"], correct: "undergoing" },
      { options: ["wait", "stimulate", "trait", "saint"], correct: "stimulate" },
      { options: ["particular", "calligrapher", "regular", "simpler"], correct: "particular" }
    ]
  },

  // -------------------------
  // EJERCICIO 26
  // -------------------------
  {
    text: [
      "In The Origin of Species, Darwin provided abundant evidence that life on Earth has evolved over time, and he proposed natural selection as the primary mechanism for that change. He observed that individuals ",
      " in their inherited traits and that selection acts on such differences, leading to ",
      " change. Although Darwin realized that variation in heritable traits is a prerequisite for ",
      ", he did not know precisely how organisms pass heritable traits to their offspring. Just a few years after Darwin published The Origin of Species, Gregor Mendel wrote a ground breaking paper on inheritance in pea plants. ",
      " that paper, Mendel proposed a model of inheritance in which organisms transmit discrete heritable units (now called genes) to their offspring. Although Darwin did not know about genes, Mendel’s paper set the stage ",
      " understanding the genetic differences on which evolution is based."
    ],
    blanks: [
      { options: ["differed", "difference", "different", "same"], correct: "differed" },
      { options: ["tremendous", "evolutionary", "unrivalled", "enormous"], correct: "evolutionary" },
      { options: ["evolution", "development", "growth", "maturity"], correct: "evolution" },
      { options: ["On", "In", "For", "With"], correct: "In" },
      { options: ["for", "as", "in", "at"], correct: "for" }
    ]
  },

  // -------------------------
  // EJERCICIO 27
  // -------------------------
  {
    text: [
      "The environmental impact of the global textile industry is hard to overstate. One-third of the water used worldwide is spent fashioning fabrics. For every ton of cloth ",
      ", 200 tons of water is polluted with chemicals and heavy metals. An estimated 1 trillion kilowatt-hours of electricity powers the factories that card and comb, spin and weave, and cut and stitch materials into everything from T-shirts to towels, ",
      " behind mountains of solid waste and a massive carbon footprint. 'Where the industry is today is not really sustainable for the long term,' says Shreyas Chaudhary, chief executive of Pratibha Syntax, a textile manufacturer based outside Indore, India. With something of an “if you build it, they will come” attitude, Mr. Chaudhary has steered Pratibha ",
      " the leading edge of eco-friendly textile production. Under his direction, Pratibha began making clothes with organic cotton in 1999. Initially, the company couldn't find enough organic farms growing cotton in central India ",
      " its factories. To meet production demands, Chaudhary's team had to convince conventional cotton farmers to change their growing methods. Pratibha provided seeds, cultivation instruction, and a guarantee of fair-trade prices for ",
      " crops. Today, Pratibha has a network of 28,000 organic cotton growers across the central states of Madhya Pradesh, Maharashtra, and Orissa."
    ],
    blanks: [
      { options: ["produced", "has produced", "producing", "is produced"], correct: "produced" },
      { options: ["moving", "leaving", "processing", "looking into"], correct: "leaving" },
      { options: ["against", "onto", "toward", "behind"], correct: "toward" },
      { options: ["have supplied", "supply", "to supply", "is supplied"], correct: "to supply" },
      { options: ["their", "some", "mine", "them"], correct: "their" }
    ]
  },

  // -------------------------
  // EJERCICIO 28
  // -------------------------
  {
    text: [
      "Great engineers have a passion to improve life; a burning conviction that they can make life better for everyone. Engineers need to have a talent for invention and innovation, but what ",
      " them is the conviction that they can find a better way to do things; a cheaper and more efficient solution to the problems of human existence on this planet of ",
      " resources that we call Earth. Many of us ",
      " a lot of time complaining about the difficulties and problems of life. It is easy to find fault with things that make daily life arduous. For an engineer, these difficulties can be opportunities. How can this be made to work better? How can that process be made more efficient? How can ",
      " be made more cheaply, more accurately and more fit-for- purpose? Great engineers are convinced that everything can be ",
      ". Instead of complaining, they think of ways to make things better."
    ],
    blanks: [
      { options: ["drives", "makes", "motivate", "activate"], correct: "drives" },
      { options: ["limited", "unlimited", "numerous", "mysterious"], correct: "limited" },
      { options: ["take", "spend", "cost", "save"], correct: "spend" },
      { options: ["parts", "elements", "units", "components"], correct: "components" },
      { options: ["improved", "created", "performed", "changed"], correct: "improved" }
    ]
  },

  // -------------------------
  // EJERCICIO 29
  // -------------------------
  {
    text: [
      "With the increase in women's ",
      " in the labour force, many mothers have less time ",
      " to undertake domestic activities. At the same time, there has been increasing ",
      " that the father's role and ",
      " with a child is important. A father can have many roles in the family, ranging from income provider to teacher, carer, playmate and role model. Therefore, balancing paid work and family responsibilities can be an important issue for both fathers and mothers in families."
    ],
    blanks: [
      { options: ["anticipation", "substitution", "participation", "definition"], correct: "participation" },
      { options: ["available", "related", "consumable", "useful"], correct: "available" },
      { options: ["recognition", "discrimination", "resolution", "recreation"], correct: "recognition" },
      { options: ["scholarship", "relationship", "worship", "employment"], correct: "relationship" }
    ]
  },

  // -------------------------
  // EJERCICIO 30
  // -------------------------
  {
    text: [
      "In reality, however, the ",
      " of truancy and non-attendance are diverse and multifaceted. There are as many causes of non-attendance as there are non-attenders. Each child has her own ",
      " story, and whilst there may often be certain identifiable factors in common, each non-attending child demands and ",
      " an individual response, tailored to meet her individual needs. This applies ",
      " to the 14-year-old who fails to attend school because a parent is terminally ill, the overweight 11-year-old who fails to attend because he is ",
      " about changing for PE in front of peers, the 15-year-old who is 'bored' by lessons, and to the seven-year-old who is teased in the playground because she does not wear the latest designer-label clothes."
    ],
    blanks: [
      { options: ["initiations", "supervisions", "triggers", "unifications"], correct: "triggers" },
      { options: ["untold", "moving", "unique", "weepy"], correct: "unique" },
      { options: ["dictates", "deters", "monopolies", "deserves"], correct: "deserves" },
      { options: ["mutually", "equitably", "equality", "equally"], correct: "equally" },
      { options: ["hyperbolic", "arrogant", "embarrassed", "reticent"], correct: "embarrassed" }
    ]
  },

  // -------------------------
  // EJERCICIO 31
  // -------------------------
  {
    text: [
      "If you want to guess how many jelly beans are in a jar, you should ask your friends. Then average their answers. Because a group guess is often more accurate than that of any one individual. Just don't let them peek at each other's responses. Because a new study shows that social influence can sway people's ",
      " and render the crowd ",
      ". The work appears in the Proceedings of the National Academy of Sciences. Crowd wisdom is actually a statistical phenomenon. Gather enough estimates and the wild guesses cancel each other out, bringing you closer to the answer. But psychology and statistics don't ",
      ". And knowing what your peers think doesn't make you any smarter. European scientists asked volunteers to estimate statistics like the population density of Switzerland. Each person got five guesses. Some were shown their peers' answers and others weren't. Turns out that seeing others' estimates led to a lot of second guessing, which ",
      " the range of the group's responses and pointed them in the wrong ",
      ". Even ",
      ", knowing that others said the same thing made everyone more confident they were right. So there is wisdom in numbers—as long as those numbers keep quiet `til they're counted."
    ],
    blanks: [
      { options: ["eminence", "insolence", "estimate", "imminence"], correct: "estimate" },
      { options: ["correct", "entrenched", "incorrect", "divided"], correct: "incorrect" },
      { options: ["differ", "mix", "agree", "tell"], correct: "mix" },
      { options: ["added", "weakened", "narrowed", "widened"], correct: "narrowed" },
      { options: ["exception", "direction", "recollection", "inception"], correct: "direction" },
      { options: ["better", "worse", "though", "than"], correct: "worse" }
    ]
  },

  // -------------------------
  // EJERCICIO 32
  // -------------------------
  {
    text: [
      "Sometimes it seems there's only so much we can learn about ",
      ". We can't know what their coloration looked like, we can't watch them interact with each other. We can only extrapolate from their remains. But now scientists say we can discern a hint of dinosaur movement - from ostriches. The giant, flightless birds still have feathered forelimbs that scientists assumed were now solely used for display and temperature regulation. But ",
      " from Germany and Belgium carefully ",
      " ",
      " ostriches, and modeled their movement in the surrounding air streams. They found that far from being useless in movement, the leftover wings help ostriches break quickly, turn, and zig-zag. The scientists presented their ",
      " at the Society for ",
      " Biology's annual conference in Prague. Ostriches are descendants of dinosaurs, and the researchers liken ostrich movements to those of bipedal dinosaurs. Paleontologists had previously thought that some dinos' small forelimbs had served to catch insects or rip flesh. But this new research shows dinosaurs may have used their forelimbs to help with quickness, ",
      " and agility. Further study in this field could lead to more accurate ideas of what it once looked like when dinosaurs went dashing through their prehistoric landscape."
    ],
    blanks: [
      { options: ["phones", "warts", "moulds", "dinosaurs"], correct: "dinosaurs" },
      { options: ["receivables", "grievances", "priestesses", "researchers"], correct: "researchers" },
      { options: ["starred", "trussed", "hurt", "observed"], correct: "observed" },
      { options: ["plagued", "motivate", "hand-raised", "grape"], correct: "hand-raised" },
      { options: ["findings", "sermonizes", "portraitists", "temporizes"], correct: "findings" },
      { options: ["Ventricle", "Accidental", "Experimental", "Civil"], correct: "Experimental" },
      { options: ["impermeability", "wickedly", "stability", "impenetrability"], correct: "stability" }
    ]
  },

  // -------------------------
  // EJERCICIO 33
  // -------------------------
  {
    text: [
      "The general perception is that children are ",
      " by a variety of musical experiences. There are often fewer and fewer opportunities for children to actively engage in music making themselves. They are inundated with music emitting from a wide ",
      " of electronic devices, toys, and computers offering a ",
      " number of musical selections. However, much of the music in children's lives is 'unchosen', in other words they are ",
      " recipients in much of the music in their lives, and not actively engaged in its selection. They experience background music in computer games, cartoons, TV shows, films, on iPads, radios, and ringtones. They listen to music choices of their parents or siblings, and even the schools they attend often play music before the school day begins or in classrooms while students are working. Studies are being ",
      " on the effects of the ubiquitous pre-recorded music they encounter and whether or not it ",
      " on their desire to make their own music or interact with each other on the playground."
    ],
    blanks: [
      { options: ["surrounded", "deterred", "deferred", "characterized"], correct: "surrounded" },
      { options: ["array", "appointment", "access", "arrangement"], correct: "array" },
      { options: ["limitless", "plunging", "excessive", "spacious"], correct: "limitless" },
      { options: ["dormant", "bilateral", "active", "passive"], correct: "passive" },
      { options: ["abandoned", "culminated", "confided", "conducted"], correct: "conducted" },
      { options: ["can have intruded", "would have intruded", "could have intruded", "is intruding"], correct: "is intruding" }
    ]
  },
    // -------------------------
  // EJERCICIO 34
  // -------------------------
  {
    text: [
      "Cultural studies is a new way of engaging in the study of culture. In the past, many academic subjects including anthropology, history, literary studies, human geography and sociology have brought their own disciplinary concerns to the study of culture. ",
      ", in recent decades there has been a ",
      " interest in the study of culture that has crossed disciplinary ",
      ". The ",
      " activities and cultural studies have emerged as an intriguing and exciting area of intellectual inquiry which has already shed important new life on the character of human cultures and which ",
      " to continue to do so. While there is a little doubt that cultural studies are coming to ",
      " as an important and distinctive field of study, it does seem to encompass a potentially enormous area. This is because the term 'culture' has a complex history and range of usages, which have provided a legitimate ",
      " of inquiry for several academic disciplines."
    ],
    blanks: [
      { options: ["However", "Then", "Subsequently", "Consistently"], correct: "However" },
      { options: ["renewed", "refunded", "renowned", "irresistible"], correct: "renewed" },
      { options: ["discriminations", "similarities", "boundaries", "differentiations"], correct: "boundaries" },
      { options: ["simultaneous", "spontaneous", "resulting", "derivative"], correct: "resulting" },
      { options: ["have promised", "promising", "promises", "would have promised"], correct: "promises" },
      { options: ["phase out", "pull together", "be widely recognized", "be narrowly reduced"], correct: "be widely recognized" },
      { options: ["dispersion", "focus", "heart", "centre"], correct: "focus" }
    ]
  },

  // -------------------------
  // EJERCICIO 35
  // -------------------------
  {
    text: [
      "Since biological systems with signs of ",
      " engineering are unlikely to have arisen from accidents or coincidences, their ",
      " must come from natural selection, and hence should have ",
      " useful for survival and reproduction in the environments in which humans evolved."
    ],
    blanks: [
      { options: ["complimentary", "complex", "compensatory", "compendious"], correct: "complex" },
      { options: ["compilation", "organization", "eccentricity", "metabolism"], correct: "organization" },
      { options: ["evaluations", "functions", "intentions", "attentions"], correct: "functions" }
    ]
  },

  // -------------------------
  // EJERCICIO 36
  // -------------------------
  {
    text: [
      "The international journal of design is a peer-reviewed, open access journal devoted to publishing research papers in all fields of design, including industrial design, visual communication design, interface design, animation and game design, architectural design, urban design, and other design related fields. It aims to provide an international forum for the ",
      " of ideas and findings from researchers across different cultures and encourages research on the impact of cultural factors ",
      " design theory and practice. It also seeks to promote the ",
      " of knowledge between professionals in academia and industry by emphasizing research in ",
      " results are of interest or applicable to design practices."
    ],
    blanks: [
      { options: ["infliction", "change", "ocurrence", "exchange"], correct: "exchange" },
      { options: ["without", "on", "inside", "at"], correct: "on" },
      { options: ["overlap", "transplant", "transfer", "estimation"], correct: "transfer" },
      { options: ["the", "which", "that", "what"], correct: "which" }
    ]
  },

  // -------------------------
  // EJERCICIO 37
  // -------------------------
  {
    text: [
      "Coastal fish farms seem to do less harm to nearby plants and animals than ",
      " believed, a new study ",
      ". And marine ecosystems can ",
      " from this damage ",
      " fast. But the analysis of a single trout farm internationally renowned in a Faroe Islands fjord over nearly a year also shows that these facilities need to be ",
      " carefully, and that there's a limit to how many can operate in a particular area before its biodiversity suffers lasting harm. In coastal farms, fish live in large cages hanging from pontoons on the surface. Fish feces and uneaten food sink to the seabed, affecting its ecosystem. ",
      " managed farms can also have serious effects on the surrounding water column."
    ],
    blanks: [
      { options: ["collectively", "individually", "previously", "pretentiously"], correct: "previously" },
      { options: ["introduces", "deceives", "reveals", "conceives"], correct: "reveals" },
      { options: ["derive", "segregate", "recover", "prevent"], correct: "recover" },
      { options: ["visually", "commonly", "surprisingly", "spiritually"], correct: "surprisingly" },
      { options: ["dislocated", "estimated", "placed", "dismounted"], correct: "placed" },
      { options: ["Well", "Badly", "Expectedly", "Attentively"], correct: "Badly" }
    ]
  },

  // -------------------------
  // EJERCICIO 38
  // -------------------------
  {
    text: [
      "Forty years ago yesterday, November 24, 1974, paleoanthropologist Donald Johanson found in Ethiopia what's arguably the most famous and important fossil of a human ",
      ": Lucy. Last month, at the ScienceWriters2014 meeting in Columbus, Ohio, Johanson talked about the moment he laid eyes on Lucy. ...Because a year before the ",
      " a geologist had left his footprints four-to-five feet away from the ",
      ", because he was looking for rocks. I was looking for bones. And I found a little piece of elbow, that little ",
      " that allows us to flex and extend our arm. ...And as I looked up the slope, I saw other ",
      " eroding out. ...we didn't know it was a new species really until a few years later when we finally ",
      " in 1978 the name Australopithecus afarensis."
    ],
    blanks: [
      { options: ["ancestor", "dulcimer", "mantissa", "cullender"], correct: "ancestor" },
      { options: ["discovery", "confession", "concealment", "interpolation"], correct: "discovery" },
      { options: ["skeleton", "singleton", "insulin", "chairperson"], correct: "skeleton" },
      { options: ["hinge", "axis", "pulley", "knot"], correct: "hinge" },
      { options: ["malice", "deterrence", "fragments", "ballots"], correct: "fragments" },
      { options: ["published", "object", "encampment", "eructed"], correct: "published" }
    ]
  },

  // -------------------------
  // EJERCICIO 39
  // -------------------------
  {
    text: [
      "Invasive species can ",
      " biodiversity and drive resident species to the brink of extinction. But how do these interlopers fare so well in unfamiliar territory? ... for example, the ",
      " that keep them in check on their home turf. ...Fishermen brought the shrimp to Northern Ireland in the 1950s as a tasty treat for local trout. ... In some streams, 70 percent of the invaders are ",
      " with an intestinal worm that doesn't go for the native shrimp. ...If you had a worm that ",
      " a quarter of your body weight, you'd eat more too."
    ],
    blanks: [
      { options: ["decrease", "sheets", "musketeers", "inductees"], correct: "decrease" },
      { options: ["organs", "abodes", "kinds", "parasites"], correct: "parasites" },
      { options: ["leftover", "narrower", "shipowner", "freshwater"], correct: "freshwater" },
      { options: ["affected", "feathered", "connected", "infected"], correct: "infected" },
      { options: ["disputed", "quintupled", "fueled", "constituted"], correct: "constituted" }
    ]
  },

  // -------------------------
  // EJERCICIO 40
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 41
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 42
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 43
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 44
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 45
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 46
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 47
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 48
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 49
  // -------------------------
  {
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
    ]
  },

  // -------------------------
  // EJERCICIO 50
  // -------------------------
  {
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
    ]
  }

  ];

  export default FillInTheBlanks;
  