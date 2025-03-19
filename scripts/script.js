// Countdown
const countdown = () => {
  const targetDate = new Date("April 25, 2025 18:00:00").getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown-timer").innerHTML = "La festa è iniziata! 🎉";
    }
  }, 1000);
};

countdown();

// Animazione
document.querySelector("h1").addEventListener("mouseover", () => {
  document.querySelector("h1").style.transform = "scale(1.1)";
});

document.querySelector("h1").addEventListener("mouseout", () => {
  document.querySelector("h1").style.transform = "scale(1)";
});
