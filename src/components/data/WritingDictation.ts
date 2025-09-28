export interface Sentence {
  text: string;
  audio: string;
}

const sentences: Sentence[] = [
  {
    text: "Stock predictions can be very capricious even for professionals.",
    audio: "https://res.cloudinary.com/demo/video/upload/v1727500000/audio1.mp3",
  },
  {
    text: "The new classrooms will be put into use next month.",
    audio: "https://res.cloudinary.com/demo/video/upload/v1727500000/audio2.mp3",
  },
  {
    text: "Football is played throughout all years at the university.",
    audio: "https://res.cloudinary.com/demo/video/upload/v1727500000/audio3.mp3",
  },
];

export default sentences;
