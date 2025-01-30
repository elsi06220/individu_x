"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Facebook, X } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const toRotate = [
    "Open your eyes ",
    "Monde Digital ",
    "Géopolitique ",
    "IA ",
    "Blockchain ",
  ];
  const period = 2000;

  const socialLinks = [
    { 
      icon: <FaTelegram size={24} />, 
      href: "https://t.me/+rL94lbUQVoU5YTBk", 
      color: "white", 
      outline: true, 
      label: "Telegram" 
    },
    { 
      icon: <X size={24} />, 
      href: "", 
      color: "white", 
      label: "X (Twitter)" 
    },
  ];

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-between text-white bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-80 w-80 bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 h-96 w-96 bg-blue-700 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-20 left-20 h-72 w-72 bg-pink-700 rounded-full blur-3xl opacity-25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-left px-8 md:px-16 w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            X_Empire
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-200 mb-4">
          <span className="inline-block animate-gradient-text">
            {text}
            <span className="text-pink-500 animate-blink">|</span>
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-lg mb-8">
          Axez sur le numérique laissez nous vous diriger vers l'actualité 100%
          authentique et vers des opportunités sans précédents 
        </p>
        <div className="flex mt-6 space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform hover:scale-125"
              style={{
                color: link.color,
              }}
              aria-label={link.label}
            >
              <div
                className={`absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  link.outline ? "border-4 border-white" : ""
                }`}
                style={{
                  backgroundColor: link.color,
                  boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)",
                  filter: "brightness(1.5)",
                }}
              ></div>
              <span
                className={`relative z-10 text-shadow-glow group-hover:text-${link.color === 'white' ? 'white' : 'transparent'} transition-all duration-300`}
                style={{
                  color: link.color,
                  textShadow: `0 0 15px ${link.color === 'white' ? 'white' : link.color}`,
                }}
              >
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* GIF on the Right */}
      <div className="w-1/2 flex justify-center pr-8">
        <div style={{ textAlign: "right" }}> {/* Correction ici */}
          <img 
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
            alt="Hacker Anime GIF" 
            width="550"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;