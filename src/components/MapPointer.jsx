import { useState, useEffect } from "react";

const locations = [
  { id: 1, name: "Parekh Fabrics", short: "Fabrics", x: 203, y: 475 },
  { id: 2, name: "Parekh Silk", short: "Silk", x: 258, y: 550 },
  { id: 3, name: "Parekh Rayon", short: "Rayon", x: 468, y: 505 },
  { id: 4, name: "Parekh Linen", short: "Linen", x: 615, y: 450 },
  { id: 5, name: "Parekh e-Trade Market", short: "e-Trade", x: 400, y: 615 },
  { id: 6, name: "Parekh Chamber of Textile", short: "Chamber",  x: 355, y: 755 },
  { id: 7, name: "Parekh Southern Polyfabrics", short: "Southern", x: 425, y: 755 },
];

const PIN_COLOR = "#8b1a1a";
const PIN_DARK = "#5a0a0a";
const LABEL_BG = "rgba(26,5,5,0.85)";

function Pin({ loc, index, active, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 100);
    return () => clearTimeout(t);
  }, [index]);

  // Design Constants (Aapke original colors aur values)
  const labelWidth = loc.subtitle ? 180 : Math.max(loc.name.length * 8.5 + 28, 120);
  const labelH = loc.subtitle ? 34 : 26;

  // OVERLAP FIX: Specific logic for Chamber (6) and Southern (7)
  let labelX = loc.x - labelWidth / 2;
  let labelY = loc.y - 50;
  let textAnchor = "middle";
  let textX = loc.x;

  if (loc.id === 6) { // Chamber - Move Left
    labelX = loc.x - labelWidth - 25;
    labelY = loc.y - 15;
    textAnchor = "end";
    textX = loc.x - 35;
  } else if (loc.id === 7) { // Southern - Move Right
    labelX = loc.x + 25;
    labelY = loc.y - 15;
    textAnchor = "start";
    textX = loc.x + 35;
  }

  return (
    <g
      onClick={() => onClick(loc.id)}
      style={{ cursor: "pointer", opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
    >
      {/* Ripple rings (Aapka original code) */}
      <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke={PIN_COLOR} strokeWidth="2">
        <animate attributeName="r" values="10;32" dur="2.4s" begin={`${index * 0.3}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="2.4s" begin={`${index * 0.3}s`} repeatCount="indefinite" />
      </circle>
      <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke={PIN_COLOR} strokeWidth="1.5">
        <animate attributeName="r" values="10;24" dur="2.4s" begin={`${index * 0.3 + 0.6}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" begin={`${index * 0.3 + 0.6}s`} repeatCount="indefinite" />
      </circle>

      {/* Pin shadow */}
      <ellipse cx={loc.x} cy={loc.y + 14} rx="7" ry="3" fill="#1a0000" opacity="0.2" />

      {/* Pin body (Aapka original design) */}
      <g style={{ transformOrigin: `${loc.x}px ${loc.y + 14}px` }}>
        <path
          d={`M${loc.x} ${loc.y - 24} C${loc.x - 10} ${loc.y - 24} ${loc.x - 17} ${loc.y - 16} ${loc.x - 17} ${loc.y - 8} C${loc.x - 17} ${loc.y + 4} ${loc.x} ${loc.y + 14} ${loc.x} ${loc.y + 14} C${loc.x} ${loc.y + 14} ${loc.x + 17} ${loc.y + 4} ${loc.x + 17} ${loc.y - 8} C${loc.x + 17} ${loc.y - 16} ${loc.x + 10} ${loc.y - 24} ${loc.x} ${loc.y - 24}Z`}
          fill={active ? "#c62828" : PIN_COLOR}
          stroke={PIN_DARK}
          strokeWidth="1.2"
        />
        <circle cx={loc.x} cy={loc.y - 9} r="5.5" fill="#f7e8d0" />
        <circle cx={loc.x} cy={loc.y - 9} r="2.5" fill={active ? "#c62828" : PIN_COLOR} />
      </g>

      {/* Label card */}
      <g>
        <rect
          x={labelX}
          y={labelY}
          width={labelWidth}
          height={labelH}
          rx="6"
          fill={LABEL_BG}
          style={{ filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.4))" }}
        />
        
        {/* Triangle pointer - Only for top-aligned labels (not 6 and 7) */}
        {loc.id !== 6 && loc.id !== 7 && (
          <polygon
            points={`${loc.x - 5},${labelY + labelH} ${loc.x + 5},${labelY + labelH} ${loc.x},${labelY + labelH + 7}`}
            fill={LABEL_BG}
          />
        )}

        <text
          x={textX}
          y={loc.subtitle ? labelY + 14 : labelY + 17}
          textAnchor={textAnchor}
          fontSize={loc.subtitle ? "12" : "13"}
          fontWeight="700"
          fill="#f7e8d0"
          letterSpacing="0.03em"
        >
          {loc.name}
        </text>
        {loc.subtitle && (
          <text
            x={textX}
            y={labelY + 27}
            textAnchor={textAnchor}
            fontSize="10"
            fill="#d4a98a"
          >
            {loc.subtitle}
          </text>
        )}
      </g>
    </g>
  );
}

export default function MapPointerPolished() {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        background: "#f4f1eb",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #5a1a1a 0%, #3d0e0e 100%)",
          color: "#f7e8d0",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
          <path
            d="M11 0C5.48 0 1 4.48 1 10C1 17.5 11 26 11 26C11 26 21 17.5 21 10C21 4.48 16.52 0 11 0Z"
            fill="none"
            stroke="#f7e8d0"
            strokeWidth="1.5"
          />
          <circle cx="11" cy="10" r="4" fill="#f7e8d0" opacity="0.85" />
        </svg>
        <div>
          <div style={{ fontSize: "15px", fontWeight: "700", letterSpacing: "0.06em" }}>
            PAREKH GROUP
          </div>
          <div style={{ fontSize: "11px", opacity: 0.7, letterSpacing: "0.08em", marginTop: "1px" }}>
            STORE LOCATIONS
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => handleClick(loc.id)}
              style={{
                background: active === loc.id ? "#f7e8d0" : "rgba(247,232,208,0.15)",
                color: active === loc.id ? "#5a1a1a" : "#f7e8d0",
                border: "1px solid rgba(247,232,208,0.3)",
                borderRadius: "20px",
                padding: "4px 10px",
                fontSize: "11px",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.03em",
              }}
            >
              {loc.short}
            </button>
          ))}
        </div>
      </div>

      {/* Map area */}
      <div style={{ position: "relative", width: "100%" }}>
        <svg
          viewBox="0 0 1000 1000"
          style={{ width: "100%", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Map background */}
          <rect width="1000" height="1000" fill="#e8e0d2" />

          {/* Map image */}
          <image
            href="/map.jpg"
            width="1000"
            height="1000"
            preserveAspectRatio="xMidYMid slice"
            opacity="0.88"
          />

          {/* Vignette */}
          <defs>
            <radialGradient id="vig" cx="50%" cy="50%" r="70%">
              <stop offset="55%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
            </radialGradient>
          </defs>
          <rect width="1000" height="1000" fill="url(#vig)" />

          {/* Pins */}
          {locations.map((loc, i) => (
            <Pin
              key={loc.id}
              loc={loc}
              index={i}
              active={active === loc.id}
              onClick={handleClick}
            />
          ))}
        </svg>

        {/* Active info card */}
        {active && (
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(26,5,5,0.92)",
              color: "#f7e8d0",
              padding: "10px 20px",
              borderRadius: "30px",
              fontSize: "13px",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              whiteSpace: "nowrap",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(247,232,208,0.2)",
            }}
          >
            📍 {locations.find((l) => l.id === active)?.name}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#2a0808",
          color: "#d4a98a",
          padding: "10px 22px",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          letterSpacing: "0.03em",
        }}
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: PIN_COLOR, display: "inline-block" }} />
        {locations.length} Parekh Group Locations &nbsp;·&nbsp; Click any pin or button to highlight
      </div>
    </div>
  );
}