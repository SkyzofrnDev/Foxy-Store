import React, { useEffect, useState, useRef } from "react";
import "./Test.css";

const generateFloatingElements = (count) => {
  const zones = 3;
  const perZone = Math.floor(count / zones);
  const elements = [];

  const getXInZone = (zoneIndex, indexInZone) => {
    const ranges = [
      { min: 5, max: 30 },
      { min: 35, max: 65 },
      { min: 70, max: 95 },
    ];
    const range = ranges[zoneIndex];
    const spacing = (range.max - range.min) / perZone;
    return range.min + spacing * indexInZone;
  };

  for (let zone = 0; zone < zones; zone++) {
    for (let i = 0; i < perZone; i++) {
      const size = Math.floor(Math.random() * 100) + 200;
      const left = getXInZone(zone, i);
      const baseTop = Math.random() * 80 + 10;
      const baseRotation = Math.random() * 360;

      // ✅ Update kecepatan slow-motion
      const rotateSpeed = 0.002 + Math.random() * 0.001;
      const floatSpeed = 0.0003 + Math.random() * 0.0002;
      const floatRange = 30 + Math.random() * 10;

      elements.push({
        id: `${zone}-${i}`,
        size,
        left,
        baseTop,
        baseRotation,
        rotateSpeed,
        floatSpeed,
        floatRange,
        offset: Math.random() * Math.PI * 2,
      });
    }
  }

  return elements;
};


const Test = () => {
  const [elements, setElements] = useState([]);
  const refs = useRef({});

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const count = Math.ceil(screenHeight / 1000) * 3;
    const generated = generateFloatingElements(count);
    setElements(generated);
  }, []);

  useEffect(() => {
    let start = Date.now();

    const animate = () => {
      const now = Date.now();
      const time = (now - start) / 1000;

      elements.forEach((el) => {
        const ref = refs.current[el.id];
        if (!ref) return;

        const floatY = Math.sin(time * el.floatSpeed * 1000 + el.offset) * el.floatRange;
        const rotation = (el.baseRotation + time * el.rotateSpeed * 360) % 360;

        ref.style.transform = `translateY(${floatY}px) rotate(${rotation}deg)`;
      });

      requestAnimationFrame(animate);
    };

    if (elements.length > 0) requestAnimationFrame(animate);
  }, [elements]);

  return (
    <div className="relative w-full h-screen overflow-hidde">
      {elements.map((el) => (
        <img
          key={el.id}
          ref={(r) => (refs.current[el.id] = r)}
          className="float-idle"
          src="/Icon/Stick.svg"
          style={{
            left: `${el.left}%`,
            top: `${el.baseTop}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
          }}
          alt=""
        />
      ))}
    </div>
  );
};

export default Test;
