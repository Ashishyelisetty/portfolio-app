
import React from 'react';

const palette = {
  primary: "#FF6F3C",
  accent: "#FFC93C",
  background: "#F9F9F9",
  card: "#FFFFFF",
  text: "#232323",
  placeholder: "#7D7D7D"
};

const projects = [
  { name: "VRSIIS HRM", description: "Attendance app deployed on Play Store." },
  { name: "SmartHealth", description: "Health monitoring with Bluetooth & SQLite." },
  { name: "SynqTransfer", description: "File transfer app with progress UI." },
  { name: "NishConnect", description: "Chat + AI + file drive app." },
  { name: "ATMS", description: "Report and analytics dashboard." },
  { name: "Ewallet / Bitcoincerge", description: "Crypto/FinTech apps." }
];

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: palette.background }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: palette.primary }}>Yelisetty Ashishdattu</h1>
        <p style={{ color: palette.placeholder }}>Full Stack & Mobile App Developer</p>
      </header>

      <section>
        <h2 style={{ color: palette.primary }}>About Me</h2>
        <p>
          I build apps using React Native, Node.js, and React.js. I use AI tools like ChatGPT to speed up development
          and integrate smart features.
        </p>
      </section>

      <section>
        <h2 style={{ color: palette.primary }}>Skills</h2>
        <ul>
          <li>React Native, React.js, Angular</li>
          <li>Node.js, MongoDB, SQLite, Firebase</li>
          <li>Bluetooth integration, REST APIs, OpenAI</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: palette.primary }}>Projects</h2>
        <ul>
          {projects.map((p, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <strong>{p.name}</strong>: {p.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={{ color: palette.primary }}>Resume</h2>
        <p>
          <a href="Yelisetty_Ashishdattu_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
            Download My Resume (PDF)
          </a>
        </p>
      </section>

      <section>
        <h2 style={{ color: palette.primary }}>Contact</h2>
        <p>Email: ashishdattu@gmail.com<br />Phone: +91-9160319012</p>
      </section>
    </div>
  );
};

export default App;
