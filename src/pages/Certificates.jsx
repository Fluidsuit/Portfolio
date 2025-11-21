import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cForEveryone from "../assets/certificate/C for Everyone.png";
import careerEssentials from "../assets/certificate/Career Essentials.png";
import courseraPython from "../assets/certificate/Coursera Python.png";
import energyConservation from "../assets/certificate/Energy Conservation.png";
import infosysCreative from "../assets/certificate/Infosys_Creative Thinking.png";
import infosysPython from "../assets/certificate/Infosys_Python.png";
import introWeb from "../assets/certificate/Introduction to Web Development.png";
import researchStudy from "../assets/certificate/research study.png";
import soloLearn from "../assets/certificate/Solo learn.png";
import spartificial from "../assets/certificate/spartificial.png";



const CERTS = {
   tech: [
    {
      title: "Machine Learning",
      org: "Spartificial Innovations",
      date: "2023",
      img: spartificial,
      link: spartificial,
    },
    {
      title: "Basics of Python",
      org: "Infosys",
      date: "2021",
      img: infosysPython,
      link: infosysPython,
    },
    {
      title: "Introduction to Web Development",
      org: "Coursera",
      date: "2020",
      img: introWeb,
      link: introWeb,
    },
    {
      title: "C for Everyone",
      org: "Coursera",
      date: "2020",
      img: cForEveryone,
      link: cForEveryone,
    },
    {
      title: "C Tutorial",
      org: "Solo Learn",
      date: "2020",
      img: soloLearn,
      link: soloLearn,
    },
    {
      title: "Crash Course on Python",
      org: "Coursera",
      date: "2022",
      img: courseraPython,
      link: courseraPython,
    },
  ],

  other: [
    {
      title: "Career Essentials in System Administration",
      org: "Microsoft & LinkedIn Learning",
      date: "2023",
      img: careerEssentials,
      link: careerEssentials,
    },
    {
      title: "Research Study on Online Student Feedback System",
      org: "Indian Institute of Technology, Bombay",
      date: "2021",
      img: researchStudy,
      link: researchStudy,
    },
    {
      title: "National Energy Conservation Day",
      org: "JSPM's Rajarshi Shahu College of Engineering",
      date: "2021",
      img: energyConservation,
      link: energyConservation,
    },
    {
      title: "Creative Thinking",
      org: "Infosys",
      date: "2021",
      img: infosysCreative,
      link: infosysCreative,
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}