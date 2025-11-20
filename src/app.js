import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      id: 1,
      title: "Aurora Dashboard",
      desc: "Realtime analytics with beautiful charts.",
      img: "https://picsum.photos/seed/aurora/600/400",
    },
    {
      id: 2,
      title: "Nimbus Store",
      desc: "Headless e-commerce built with Next.js.",
      img: "https://picsum.photos/seed/nimbus/600/400",
    },
    {
      id: 3,
      title: "Pulse App",
      desc: "Cross-platform wellbeing tracker.",
      img: "https://picsum.photos/seed/pulse/600/400",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Jing’s Portfolio</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <h2>Hi 👋, I’m Jing</h2>
          <p>I design and develop clean, functional web experiences.</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I’m passionate about creating software that’s fast, accessible, and
            enjoyable to use.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("This demo form doesn’t send yet 🙂");
            }}
          >
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Jing — Built with ❤️</footer>
    </div>
  );
}

export default App;
