/* ===========================================================
   Interações da página — Felipe Campos de Souza Gama
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Ano no rodapé ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Navbar muda ao rolar ---- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Menu mobile ---- */
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav__links");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    })
  );

  /* ---- Efeito de digitação no hero ---- */
  const typedEl = document.getElementById("typed");
  const roles = [
    "Desenvolvedor Full-Stack",
    "Front-End com React",
    "Back-End com Node.js",
    "Amante de Clean Code",
  ];
  let r = 0,
    c = 0,
    deleting = false;

  const type = () => {
    const word = roles[r];
    typedEl.textContent = deleting
      ? word.slice(0, c--)
      : word.slice(0, c++);

    let delay = deleting ? 45 : 90;

    if (!deleting && c === word.length + 1) {
      deleting = true;
      delay = 1600;
    } else if (deleting && c === 0) {
      deleting = false;
      r = (r + 1) % roles.length;
      delay = 350;
    }
    setTimeout(type, delay);
  };
  type();

  /* ---- Revelar elementos ao entrar na viewport ---- */
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
});
