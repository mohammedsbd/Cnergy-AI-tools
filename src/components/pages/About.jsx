function Countdown({ seconds }) {
  const [timeLeft, setTimeLeft] = React.useState(seconds);

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div>
      <h3>Countdown: {timeLeft > 0 ? timeLeft : "Time's up!"}</h3>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About This Application</h2>
      <p>This application demonstrates a countdown timer using React.</p>
      <Countdown seconds={10} />
    </div>
  );
}
export default About;
import React from "react";
