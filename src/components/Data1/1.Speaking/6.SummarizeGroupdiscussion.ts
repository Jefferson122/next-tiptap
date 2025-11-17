export interface Sentence {
    id: number;
    summarize: string;
    text: string;
    audio: string[];
  }
  
  const readings: Sentence[] = [
    {
      id: 50,
      summarize: `Job Search Strategies`,
      text: `Several students are discussing effective ways to find jobs in today’s competitive market. Some believe that online platforms like LinkedIn and job portals are most efficient, while others argue that attending career fairs and networking events leads to better opportunities.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329459/audios_tts/final_e060fa45-8312-42fd-b70a-8c217a0fb8e5.mp3'],
    },
    {
      id: 49,
      summarize: `Resume Writing Skills`,
      text: `A group of job seekers is talking about what makes a resume stand out. One suggests keeping it concise and results-focused, another emphasizes creative design, while others feel clear formatting and strong action verbs matter most.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329463/audios_tts/final_0407066b-b6f1-4494-94f6-392087c7227d.mp3'],
    },
    {
      id: 48,
      summarize: `Cover Letter Writing`,
      text: `Participants in a career workshop are sharing their views on writing cover letters. Some think personalization for each job is essential, while others believe a general but professional format saves time.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329467/audios_tts/final_45273e73-3dac-46eb-93fb-3eb54b8d5e5d.mp3'],
    },
    {
      id: 47,
      summarize: `Online Job Applications`,
      text: `A group of applicants discusses challenges with online job portals. Some mention automated filters and lack of feedback, while others appreciate how easy it is to apply to multiple jobs quickly.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329472/audios_tts/final_eeb526ba-ca0b-4ea3-b773-d1cb4497b437.mp3'],
    },
    {
      id: 46,
      summarize: `Networking for Career Growth`,
      text: `Several professionals debate whether networking is more important than skills for career advancement. Some think personal connections open doors, while others insist strong performance speaks for itself.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329477/audios_tts/final_f09a8699-821c-4f77-b206-90f00c5def3d.mp3'],
    },
    {
      id: 45,
      summarize: `Job Interview Preparation`,
      text: `Job candidates discuss how best to prepare for interviews. Some believe researching the company is crucial, others stress practicing common questions, and a few say confidence is key.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329480/audios_tts/final_81a2f869-1b17-4f10-8966-92ddef1689e1.mp3'],
    },
    {
      id: 44,
      summarize: `Workplace Communication Skills`,
      text: `Employees discuss how communication affects productivity. Some emphasize the need for open feedback channels, others prefer structured communication to avoid confusion.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329485/audios_tts/final_d26d5072-513a-4de1-948a-b661679b90af.mp3'],
    },
    {
      id: 43,
      summarize: `Teamwork in the Workplace`,
      text: `Team members talk about what makes collaboration successful. Some say clear goals are vital, while others stress mutual respect and trust among colleagues.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329488/audios_tts/final_882fbd4c-0976-499b-9f52-93100ced7b9e.mp3'],
    },
    {
      id: 42,
      summarize: `Leadership Skills Development`,
      text: `A leadership seminar group discusses what defines an effective leader. Some highlight empathy and emotional intelligence, while others value decision-making and vision.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329492/audios_tts/final_0e09ff8f-0b16-4398-8a3f-9a9689b9f091.mp3'],
    },
    {
      id: 41,
      summarize: `Conflict Resolution at Work`,
      text: `Colleagues are discussing how to handle workplace conflicts. Some suggest open dialogue, others prefer mediation by supervisors, and a few think clear policies work best.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329496/audios_tts/final_6c30cfd4-5253-4cfb-8356-6430eddfc4e3.mp3'],
    },
    {
      id: 40,
      summarize: `Employee Motivation Strategies`,
      text: `Managers exchange ideas about motivating employees. Some focus on financial rewards, others emphasize recognition, while a few prefer flexible work options.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329500/audios_tts/final_a3dc16d9-d066-4aaf-9c77-d6f6683e0439.mp3'],
    },
    {
      id: 39,
      summarize: `International Law`,
      text: `Students debate the importance of international law in maintaining global order. Some believe it prevents conflict, while others say enforcement is too weak to be effective.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329506/audios_tts/final_d1aa7e2b-3140-4e36-8f95-ec25ecd85a6d.mp3'],
    },
    {
      id: 38,
      summarize: `Cybercrime Prevention`,
      text: `Experts discuss strategies to prevent cybercrime. Some support stronger international cooperation, while others focus on public education and cybersecurity awareness.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329511/audios_tts/final_9decb26c-3529-44f7-80ff-7d45444655b2.mp3'],
    },
    {
      id: 37,
      summarize: `Cybersecurity Laws`,
      text: `Participants talk about how cybersecurity laws differ between countries. Some think strict penalties deter hackers, others worry about invasion of privacy.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329514/audios_tts/final_2a983385-6236-4ccd-8037-bf4140f6014e.mp3'],
    },
    {
      id: 36,
      summarize: `Intellectual Property Rights`,
      text: `A panel discusses whether intellectual property laws promote innovation or limit access to knowledge. Opinions vary on how to balance protection with public benefit.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329519/audios_tts/final_53a40f74-0267-4c35-80dd-c7b58d74f58a.mp3'],
    },
    {
      id: 35,
      summarize: `Copyright Law`,
      text: `Students discuss whether copyright duration should be reduced. Some believe long protection helps artists, while others argue it limits creativity and sharing.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329523/audios_tts/final_e9612c85-c1eb-4dc4-bf37-223667c2fdb8.mp3'],
    },
    {
      id: 34,
      summarize: `Patent Law`,
      text: `A group debates if patent laws encourage or hinder innovation. Some say they reward inventors, while others claim they restrict new technological progress.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329527/audios_tts/final_aa5930d4-1bbd-4c18-b848-4af9e9dc81cb.mp3'],
    },
    {
      id: 33,
      summarize: `Trademark Law`,
      text: `Business students discuss how trademarks affect branding. Some see them as essential for recognition, while others think they can cause unnecessary legal disputes.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329530/audios_tts/final_43e615ca-1186-47b6-9118-c89bafaa2a0e.mp3'],
    },
    {
      id: 32,
      summarize: `Anti-Corruption Measures`,
      text: `A policy group talks about ways to reduce corruption. Some emphasize stricter laws and penalties, others advocate transparency and public reporting systems.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329534/audios_tts/final_b44acd7f-3457-42b3-a912-5c5ba3d3a958.mp3'],
    },
    {
      id: 31,
      summarize: `Whistleblower Protections`,
      text: `Employees discuss whether whistleblowers are adequately protected. Some believe strong laws encourage honesty, while others fear retaliation and career damage.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329538/audios_tts/final_6a4c74e4-b6b3-447a-a464-0974b853ac74.mp3'],
    },
    {
      id: 30,
      summarize: `Privacy Rights`,
      text: `Citizens debate how much personal data governments should collect. Some support surveillance for safety, while others believe it violates privacy rights.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329542/audios_tts/final_0243defc-0d2a-49bf-a7c7-2ec5d1b622e3.mp3'],
    },
    {
      id: 29,
      summarize: `Data Protection Regulations`,
      text: `Tech experts discuss global data protection rules. Some support strict regulations like GDPR, while others say they burden businesses unnecessarily.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329546/audios_tts/final_60f72653-4ec0-4e7d-986d-6e34f3adb2b6.mp3'],
    },
    {
      id: 28,
      summarize: `Augmented Reality Uses`,
      text: `Students explore how augmented reality can enhance daily life. Some focus on entertainment and gaming, while others highlight its potential in education and healthcare.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329551/audios_tts/final_c5013f1c-2c24-4386-83ba-c22cf3c4dc4b.mp3'],
    },
    {
      id: 27,
      summarize: `Virtual Reality in Education`,
      text: `Teachers discuss how virtual reality could transform learning. Some see it as immersive and engaging, others worry about cost and accessibility.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329554/audios_tts/final_2aee88db-e303-43c4-ad43-96a4d1d22a88.mp3'],
    },
    {
      id: 26,
      summarize: `Blockchain Technology`,
      text: `A technology panel debates whether blockchain is revolutionary or overhyped. Some praise its transparency and security, while others question its scalability.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329558/audios_tts/final_798c6128-94f0-4642-b6f0-c6f50af409e0.mp3'],
    },
    {
      id: 25,
      summarize: `Cryptocurrency Trends`,
      text: `Investors discuss the future of cryptocurrencies. Some believe digital coins will replace traditional money, while others warn of volatility and regulation risks.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329561/audios_tts/final_374c8745-68f3-482b-bdfc-aafee1b4a304.mp3'],
    },
    {
      id: 24,
      summarize: `Internet of Things`,
      text: `Professionals talk about the growth of smart devices. Some highlight convenience and efficiency, while others raise security and privacy concerns.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329565/audios_tts/final_90bedc20-dad8-4504-be31-1621439df531.mp3'],
    },
    {
      id: 23,
      summarize: `Smart Home Technology`,
      text: `Homeowners discuss whether smart homes are worth the investment. Some value automation and energy savings, others worry about cost and data safety.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329570/audios_tts/final_05d789db-0d98-4335-a8a2-e795a4675d8c.mp3'],
    },
    {
      id: 22,
      summarize: `Wearable Technology`,
      text: `A group discusses wearable health trackers. Some find them motivating and useful, while others question their accuracy and data privacy.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329574/audios_tts/final_69f81dc7-3063-4d48-bcbc-836e80f276c0.mp3'],
    },
    {
      id: 21,
      summarize: `Mobile App Development`,
      text: `Developers discuss trends in mobile apps. Some say AI integration will dominate, others emphasize user-friendly design and accessibility.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329577/audios_tts/final_47f6fbf3-a752-4781-af0d-3abadd8386de.mp3'],
    },
    {
      id: 20,
      summarize: `Cybersecurity Threats`,
      text: `Experts talk about growing digital threats. Some focus on ransomware and phishing, while others highlight insider risks and weak passwords.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329581/audios_tts/final_b053d248-d058-4e69-b7cf-19efb7e0aa1d.mp3'],
    },
    {
      id: 19,
      summarize: `Ethical Hacking`,
      text: `Students debate whether ethical hacking is necessary. Some believe it helps improve systems, while others worry it can be misused.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329585/audios_tts/final_f9f35bb0-9b2d-4bcc-bbe7-e5fc00c77706.mp3'],
    },
    {
      id: 18,
      summarize: `Cloud Computing`,
      text: `IT professionals discuss cloud storage benefits. Some value flexibility and collaboration, while others are concerned about security and dependency.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329590/audios_tts/final_6d4e2364-c664-4a1d-9169-b14f11800514.mp3'],
    },
    {
      id: 17,
      summarize: `Data Analytics`,
      text: `Analysts discuss how data shapes decision-making. Some stress accuracy and ethics, while others focus on automation and AI-driven insights.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329593/audios_tts/final_986e7057-f225-4ddd-a9f5-4cad4191d6fc.mp3'],
    },
    {
      id: 16,
      summarize: `Big Data Applications`,
      text: `Experts discuss how big data impacts industries. Some say it drives innovation, while others warn about privacy and bias issues.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329597/audios_tts/final_68b7b427-4201-405b-8302-19157914a179.mp3'],
    },
    {
      id: 15,
      summarize: `Digital Transformation in Business`,
      text: `Executives talk about adopting digital tools. Some believe transformation increases efficiency, others say it’s expensive and requires major cultural change.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329601/audios_tts/final_393b7085-9c1f-49c5-9653-66d55e15aa0c.mp3'],
    },
    {
      id: 14,
      summarize: `Preventive Healthcare Strategies`,
      text: `Doctors discuss how prevention can reduce disease. Some support regular check-ups, others emphasize healthy lifestyles and awareness programs.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329606/audios_tts/final_4e6c48cd-e369-4263-abdb-a2a8a581c1de.mp3'],
    },
    {
      id: 13,
      summarize: `Primary Healthcare Access`,
      text: `Community leaders discuss how to improve primary healthcare. Some suggest mobile clinics, others call for better funding and more medical staff.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329609/audios_tts/final_ba19a1e7-ea1e-4fc1-a065-8f9462e2d6b0.mp3'],
    },
    {
      id: 12,
      summarize: `Universal Healthcare Models`,
      text: `Economists and policymakers debate universal healthcare. Some argue it ensures equality, while others raise concerns about cost and efficiency.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329615/audios_tts/final_fa7dd600-77cf-4426-876d-7385d2fd921f.mp3'],
    },
    {
      id: 11,
      summarize: `Vaccination Programs Worldwide`,
      text: `Health officials discuss global vaccination efforts. Some highlight success stories, while others point to misinformation and distribution challenges.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329618/audios_tts/final_d7df71ee-d603-4b0c-9066-ac1c402258a8.mp3'],
    },
    {
      id: 10,
      summarize: `Eradication of Infectious Diseases`,
      text: `Researchers discuss global disease eradication. Some say it’s achievable through cooperation, others note mutations and funding as barriers.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329622/audios_tts/final_55a9cc1b-6f80-4809-a777-6dc6247cdb82.mp3'],
    },
    {
      id: 9,
      summarize: `Pandemic Preparedness`,
      text: `Experts debate how countries can prepare for future pandemics. Some suggest stockpiling supplies, others emphasize global coordination and early warning systems.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329627/audios_tts/final_57b4960b-ac62-4f43-b504-a71b5df8ef9c.mp3'],
    },
    {
      id: 8,
      summarize: `Mental Health Awareness Campaigns`,
      text: `Participants discuss how to promote mental health awareness. Some propose school programs, others stress media campaigns and community events.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329631/audios_tts/final_a52bab7a-393a-4224-96a7-4a00683156d2.mp3'],
    },
    {
      id: 7,
      summarize: `Depression Prevention Programs`,
      text: `Counselors discuss strategies to prevent depression. Some focus on stress management, others suggest community engagement and early therapy access.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329636/audios_tts/final_6a1489e1-81bc-4dec-8a75-d2435c25527f.mp3'],
    },
    {
      id: 6,
      summarize: `Anxiety Management Techniques`,
      text: `Therapists talk about managing anxiety. Some recommend mindfulness and breathing exercises, others prefer medication or lifestyle changes.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329639/audios_tts/final_34eeedbd-7039-4fbc-acbf-13669b93c834.mp3'],
    },
    {
      id: 5,
      summarize: `Stress-Relief Practices`,
      text: `Employees share ideas for reducing stress. Some enjoy yoga and meditation, others prefer exercise, hobbies, or social time.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329643/audios_tts/final_abfdb46c-194b-4bf6-9270-a24fd8d7f90c.mp3'],
    },
    {
      id: 4,
      summarize: `Nutrition Guidelines`,
      text: `Dietitians discuss dietary recommendations. Some emphasize balance and portion control, while others suggest personalized nutrition plans.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329647/audios_tts/final_30b0fa52-740d-4491-a997-8216823b2db1.mp3'],
    },
    {
      id: 3,
      summarize: `Balanced Diet Planning`,
      text: `A health workshop discusses how to plan a balanced diet. Some focus on meal preparation, others highlight the importance of fresh ingredients.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329650/audios_tts/final_ac88b0a0-3817-45ca-85a1-3a45a0eebb02.mp3'],
    },
    {
      id: 2,
      summarize: `Healthy Eating Habits`,
      text: `Students discuss ways to eat healthily despite busy schedules. Some suggest home-cooked meals, others rely on quick but nutritious options.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329653/audios_tts/final_a123941a-0361-49f8-9e10-38c2046275f5.mp3'],
    },
    {
      id: 1,
      summarize: `Obesity Prevention`,
      text: `Health experts discuss reducing obesity rates. Some promote physical activity, others stress reducing sugar and fast food consumption.`,
      audio: ['https://res.cloudinary.com/ddy824awb/video/upload/v1763329657/audios_tts/final_1bba5fc6-6e44-4bbb-9b3b-09fe7d91f5ec.mp3'],
    },
  ];
  
  export default readings;
  