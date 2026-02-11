const steps = [
  {
    gif: "https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif",
    text: "Me practicing this question like it's a job interview...",
  },
  {
    gif: "https://media.giphy.com/media/eM16dA4eiatuyUs3rA/giphy.gif",
    text: "Me whenever you text back in 0.2 seconds 😍",
  },
  {
    gif: "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif",
    text: "Okay okay, no more stalling. One more tap...",
  },
];

const STORAGE_KEY = "valentineOfficialSince";
const OFFICIAL_TEXT = "Official since Feb 14, 2026 💞";

const INITIAL_GIF = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif";
const INITIAL_TEXT = "Tap next for a very serious proposal…";

const stepGif = document.getElementById("step-gif");
const stepText = document.getElementById("step-text");
const nextBtn = document.getElementById("next-btn");
const finalScreen = document.getElementById("final-screen");
const yesBtn = document.getElementById("yes-btn");
const successScreen = document.getElementById("success-screen");
const officialDate = document.getElementById("official-date");
const storageHint = document.getElementById("storage-hint");

let currentStep = 0;

const getStoredOfficialDate = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveOfficialDate = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, OFFICIAL_TEXT);
    return true;
  } catch {
    return false;
  }
};

const showSuccess = (dateText) => {
  officialDate.textContent = dateText;
  finalScreen.classList.add("hidden");
  successScreen.classList.remove("hidden");

  if (typeof confetti === "function") {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  }
};

const updateButtonLabel = () => {
  const stepsLeft = Math.max(steps.length - currentStep, 0);
  nextBtn.textContent =
    stepsLeft > 0 ? `Next (${stepsLeft}) ➜` : "Open the question 💘";
};

const resetToStart = () => {
  currentStep = 0;
  stepGif.src = INITIAL_GIF;
  stepText.textContent = INITIAL_TEXT;
  nextBtn.classList.remove("hidden");
  finalScreen.classList.add("hidden");
  successScreen.classList.add("hidden");
  storageHint.classList.add("hidden");
  updateButtonLabel();
};

stepGif.addEventListener("error", () => {
  stepGif.src =
    "https://placehold.co/800x600/ffd1e8/4a084b?text=Funny+GIF+blocked+on+this+network+%F0%9F%98%85";
  stepText.textContent =
    "GIFs are blocked on this network, but the flow still works 💌";
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length) {
    const step = steps[currentStep];
    stepGif.src = step.gif;
    stepText.textContent = step.text;
    currentStep += 1;
    updateButtonLabel();
    return;
  }

  nextBtn.classList.add("hidden");
  finalScreen.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
  const saved = saveOfficialDate();
  const dateText = saved ? getStoredOfficialDate() || OFFICIAL_TEXT : OFFICIAL_TEXT;

  if (!saved) {
    storageHint.textContent =
      "Could not save on this browser mode, but you're still official 💞";
    storageHint.classList.remove("hidden");
  }

  showSuccess(dateText);
});

resetToStart();
