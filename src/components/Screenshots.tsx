import { useState, useEffect, useRef } from "react";

import Home from "../assets/Home.jpeg";
import Player from "../assets/Player.jpeg";
import Profile from "../assets/Profile.jpeg";
import Settings from "../assets/Setting.jpeg";

const screens = [
  {
    label: "Home",
    image: Home,
    color: "#7C3AED",
  },
  {
    label: "Player",
    image: Player,
    color: "#22D3EE",
  },
  {
    label: "Profile",
    image: Profile,
    color: "#EC4899",
  },
  {
    label: "Settings",
    image: Settings,
    color: "#10B981",
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobileRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleIndex = -1;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleIndex = screens.findIndex(
              (_, i) => phoneRefs.current[i] === entry.target
            );
          }
        });

        if (mostVisibleIndex !== -1 && mostVisibleIndex !== active) {
          setActive(mostVisibleIndex);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    observerRef.current = observer;
    phoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      phoneRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [active]);

  return (
    <section id="screenshots" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.25)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#22D3EE",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              App Preview
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            Beautiful <span className="text-gradient">Screenshots</span>
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "#A1A1AA",
              maxWidth: 620,
              marginInline: "auto",
              lineHeight: 1.7,
            }}
          >
            Experience BeatFlow through its elegant AMOLED interface,
            immersive player and beautifully designed screens.
          </p>
        </div>

        {/* Tabs */}

        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {screens.map((screen, index) => (
            <button
              key={screen.label}
              onClick={() => setActive(index)}
              style={{
                border: "none",
                cursor: "pointer",
                borderRadius: 999,
                padding: "10px 24px",
                transition: ".3s",
                fontWeight: 600,
                fontSize: 14,
                background:
                  active === index
                    ? screen.color
                    : "rgba(255,255,255,.05)",
                color: active === index ? "#fff" : "#A1A1AA",
              }}
            >
              {screen.label}
            </button>
          ))}
        </div>

        {/* Screenshot Phones */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 28,
          }}
        >
          {screens.map((screen, index) => (
            <div
              key={screen.label}
              ref={(el) => (phoneRefs.current[index] = el)}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              style={{
                cursor: "pointer",
                transition: ".35s",
                transform:
                  active === index
                    ? "translateY(-10px) scale(1.06)"
                    : "scale(.93)",
                opacity: active === index ? 1 : 0.55,
              }}
            >
              <div
                style={{
                  width: 220,
                  borderRadius: 36,
                  padding: 10,
                  background:
                    "linear-gradient(145deg,#18181B,#09090B)",
                  border:
                    active === index
                      ? `2px solid ${screen.color}`
                      : "1px solid rgba(255,255,255,.08)",
                  boxShadow:
                    active === index
                      ? `0 25px 70px ${screen.color}30`
                      : "0 10px 30px rgba(0,0,0,.35)",
                  transition: ".35s",
                }}
              >
                {/* Phone */}

                <div
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    background: "#000",
                  }}
                >
                  <img
                    src={screen.image}
                    alt={screen.label}
                    draggable={false}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: 14,
                  fontSize: 14,
                  fontWeight: 700,
                  color: active === index ? "#fff" : "#A1A1AA",
                  transition: ".3s",
                }}
              >
                {screen.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}