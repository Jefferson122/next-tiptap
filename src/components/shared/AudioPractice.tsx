"use client";

import { useState, useEffect, useRef } from "react";

const AudioPractice = () => {
  const QUESTIONS = [
    "Schools host parent teacher conferences four times a year and it is important for families to attend. This is your chance to meet with teachers and ask questions about your child's progress. It can be helpful to write down questions ahead of time.",
    "Cheerful sunny yellow is an attention geer. While it is considered an optimistic color, people lose their tempers more oOen in yellow rooms, and babies will cry more. It is the most difficult color for the eye to take in, so it can be overpowering if overused. Yellow enhances concentration, hence its use for legal pads. It also speeds metabolism.",
    "The Office of Personnel Management was the target of the aMack, but data from nearly every government agency was stolen. U.S. investigators say they believe Chinese hackers were behind the breach.",
    "As far as politics go, the responses are just as varied. Mitigation is common and calls for a reduction of emissions and less reliance on fossil fuels. Coal burning power plants are now replaced with hydraulic power plants and electrical cars are replacing some gasoline efficient cars. Many people, however, feel that this is not enough.",
    "In 2005, donor countries agreed on an accord to harmonize their practices. Since then, aid officials have complained that too likely has changed on the ground. Conferences of donors in developing countries still tend to be dominated by a small group of north European governments, with the US often absent.",
    "The coastal wetlands have environmental and economic importance. Wetlands provide natural wealth. They have important filtering capabilities. As the runoff water passes, they retain excess nutrients and some pollutants. They maintain water flow during dry periods. Thousands of people depend on ground water for drinking. They act as natural sponges of flood waters and contains oil erosion. They control floods and save the buildings from collapsing during heavy rains.",
    "The tsunamis could provide crucial information about the habitability of ancient Mars. The first one occurred when the planet must have been relatively warm and amenable for life, because it carved out backwash channels as it returned to the sea. By contrast, the planet had become much cooler by the time the second tsunami hit.",
    "The second group that is particularly vulnerable are night shift workers, and the third group that is particularly vulnerable are people with sleep disorders, particularly sleep apnea. One out of three men and one out of six women have sleep apnea. And yet, 85 percent are undiagnosed and untreated. And it more than doubles the risk of cancers.",
    "A university is not a business. More precisely, a not-for-profit college or university is significantly different than a for-profit business. A university has no owners and it is a public trust. A business has a single over-riding goal: the maximization of return for the owners. A university has a multiplicity of goals: to foster learning, to create knowledge, and to serve its community.",
    "Margaret Simons explains the changes taking place in the Australian media. She analyses audiences, our major media organisations, the role of government and the implications of all of these for our society and our democracy. Her examination leads her to the conclusion that the challenges facing the content providers in the modern world are part of a broader striving.",
    "The one-year program of the master in global management is designed only for those who have the graduate degree in the thesis. It increases the temporary skill of new managers in an international capacity, something that recruiters are looking for more and more.",
    "At the beginning of each fiscal year, funds are allocated to each State account in accordance with the University's financial plan. Funds are allocated to each account by objects of expenditure. Account managers are responsible for ensuring that adequate funds are available in the appropriate object before initiating transactions to use the funds."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [recording, setRecording] = useState(false);
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [espVisible, setEspVisible] = useState(false);

  const [pronDetail, setPronDetail] = useState("");
  const [pronEsp, setPronEsp] = useState("");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const sessionIdRef = useRef(localStorage.getItem("sessionId") || Date.now().toString());

  useEffect(() => { localStorage.setItem("sessionId", sessionIdRef.current); }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    audioChunksRef.current = [];

    recorder.ondataavailable = e => audioChunksRef.current.push(e.data);
    recorder.onstart = () => setRecording(true);

    recorder.onstop = async () => {
      setRecording(false);
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");
      formData.append("modelo", QUESTIONS[currentQuestion]);
      formData.append("session_id", sessionIdRef.current);

      try {
        const resp = await fetch("https://backend1-exyd.onrender.com/upload-audio/", { method: "POST", body: formData });
        const data = await resp.json();
        if (data.error) return alert("Error: " + data.error);

        setResults(prev => [...prev, data]);

        // Alignment tipo karaoke
        setPronDetail(data.alignment.map((w: any) => {
          const color = w.status === "correct" ? "green" : w.status === "missing" ? "red" : "orange";
          return `<span style="color:${color}; margin-right:2px">${w.said || "❌"}</span>`;
        }).join(" "));

        // Espanglización fonética
        setPronEsp(espanglizarAmericano(QUESTIONS[currentQuestion]));

      } catch (err) {
        console.error(err);
      }
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
  };

  const stopRecording = () => mediaRecorderRef.current?.state === "recording" && mediaRecorderRef.current.stop();
  const nextQuestion = () => setCurrentQuestion(prev => Math.min(prev + 1, QUESTIONS.length - 1));
  const retryTest = () => { setCurrentQuestion(0); setResults([]); setPronDetail(""); setPronEsp(""); };

  // Función de espanglización fonética
  const espanglizarAmericano = (text: string) => {
    const dic: Record<string,string> = { "child":"chaild","i":"ai","used":"iust","to":"tu","hours":"áuers","playing":"pleiing","my":"mai","grandmother":"grandmozer","garden":"gárden","she":"shi","had":"jad","array":"arrei","flowers":"fláuers","herbs":"érbs","growing":"gróuin","throughout":"zruáut","would":"wuud","teach":"tíich","me":"mi","about":"abaut","each":"íich","one":"uan","particular":"partíkíular","love":"lov","lavender":"lávender","remember":"rimembér","telling":"télin","stories":"stóris","dry":"drai","make":"meik","sachets":"sáshets","drawers":"drórs","the":"ze","of":"ov"};
    const phraseDict: Record<string,string> = { "grandmother's garden":"grandmozerz gárden", "throughout the yard":"zruáut ze yard", "would teach me":"wuud tíich mi", "as a child":"as a chaild", "in my":"in mai" };
    
    // Reemplazar frases completas
    for(const phrase in phraseDict){ text = text.replace(new RegExp(phrase,"gi"), phraseDict[phrase]); }

    // Reglas fonéticas generales
    const reglas = (word: string) => {
      let w = word.toLowerCase();
      w = w.replace(/th/g,'z').replace(/ph/g,'f').replace(/ow/g,'au').replace(/ou/g,'au').replace(/er/g,'ér').replace(/ar/g,'ar').replace(/a/g,'á').replace(/o/g,'ó').replace(/i/g,'í').replace(/e/g,'é').replace(/u/g,'u');
      return w;
    }

    return text.split(/\s+/).map(w=>{
      const phrase = w;
      const clean = phrase.replace(/[^a-zA-Z']/g,"");
      const punct = phrase.replace(/[a-zA-Z']/g,"");
      const isCapital = phrase[0] && phrase[0] === phrase[0].toUpperCase();
      let esp = clean.toLowerCase().endsWith("'s") ? (dic[clean.slice(0,-2).toLowerCase()] || reglas(clean.slice(0,-2))) + "s" : dic[clean.toLowerCase()] || reglas(clean);
      if(isCapital && esp.length>0) esp = esp[0].toUpperCase() + esp.slice(1);
      return esp + punct;
    }).join(" ");
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto my-6">
      <h2 className="text-lg font-bold mb-4">Read aloud the text below:</h2>
      <div className="mb-4 p-4 border border-gray-200 rounded">{QUESTIONS[currentQuestion]}</div>

      <div className={`mb-4 p-4 text-center rounded border ${recording ? 'border-red-500 bg-red-100 text-red-700 font-bold' : 'border-gray-300 bg-gray-50 text-gray-700'}`}>
        {recording ? "🎤 Recording..." : "🎤 Ready to record"}
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={startRecording} disabled={recording} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Start</button>
        <button onClick={stopRecording} disabled={!recording} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Stop</button>
        <button onClick={nextQuestion} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
        <button onClick={retryTest} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Retry</button>
      </div>

      <div className="mb-4">
        <button onClick={()=>setAlignmentVisible(v=>!v)} className="underline text-sm">Toggle Alignment</button>
        {alignmentVisible && <div className="mt-2 p-2 border border-gray-200 rounded" dangerouslySetInnerHTML={{ __html: pronDetail }}></div>}
      </div>

      <div className="mb-4">
        <button onClick={()=>setEspVisible(v=>!v)} className="underline text-sm">Toggle Espanglización</button>
        {espVisible && <div className="mt-2 p-2 border border-gray-200 rounded italic bg-yellow-50">{pronEsp}</div>}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Results:</h3>
        {results.map((r,i)=>(
          <div key={i} className="border border-gray-200 p-3 mb-3 rounded">
            <p><strong>Global Score:</strong> {r.global_score}</p>
            <p>Content: {r.content_score}, Pronunciation: {r.pronunciation_score}, Fluency: {r.fluency_score}</p>
            {r.url_audio && <audio controls src={r.url_audio} className="w-full mt-2 rounded" />}
            {r.url_visual && <img src={r.url_visual} alt="Fluency Graph" className="w-full mt-2 rounded" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPractice;
