import confetti from "canvas-confetti";

export class ConfettiService {
  static triggerConfetti() {
    confetti({
      particleCount: 200, // Konfeti sayısını artırdık
      spread: 90, // Konfetilerin yayılma alanını genişlettik
      origin: { y: 0.6 },
      gravity: 0.5, // Konfetilerin yavaş inmesi için yer çekimini azalttık
      scalar: 1.2, // Konfetilerin boyutunu büyüttük
    });
  }
}
