import { Char, Phrase } from "animatedtxt";

const packageName = [
  {
    char: "H",
    duration: 0.4,
  },
  {
    char: "I",
    duration: 0.2,
  },
];

const addDelay = (delayOffset) => {
  let sum = 0;
  return packageName.map((letter) => {
    const charWithDelay = { ...letter, delay: sum };
    sum += letter.duration + delayOffset;
    return charWithDelay;
  });
};

export default function MappedPhrase() {
  return (
    <Phrase margin={5} size={40} delay={2.2} color="#fff">
      {addDelay(-0.1).map((letter, index) => (
        <Char
          key={index}
          char={letter.char}
          duration={letter.duration}
          delay={letter.delay}
        />
      ))}
    </Phrase>
  );
}
