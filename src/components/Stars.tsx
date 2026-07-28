import "./Stars.css";

const STARS = [
  { top: "8%",  left: "12%", size: 3, duration: 2.4, delay: 0   },
  { top: "15%", left: "78%", size: 2, duration: 3.1, delay: 0.8 },
  { top: "72%", left: "88%", size: 4, duration: 2.8, delay: 1.5 },
  { top: "60%", left: "6%",  size: 2, duration: 3.5, delay: 0.3 },
  { top: "85%", left: "42%", size: 3, duration: 2.1, delay: 1.1 },
];

export default function Stars() {
  return (
    <>
      {STARS.map((s) => (
        <div
          key={`${s.top}-${s.left}`}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </>
  );
}
