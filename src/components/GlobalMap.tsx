/**
 * Dark world map (SVG, simplified continents) with luminous pulse dots
 * for Madrid, London, Dubai and Singapore. No external token required.
 */

type City = {
  name: string;
  country: string;
  // Approx geo
  lat: number;
  lon: number;
  role: string;
};

const CITIES: City[] = [
  { name: "Madrid", country: "ES", lat: 40.41, lon: -3.7, role: "Operations Hub" },
  { name: "London", country: "UK", lat: 51.5, lon: -0.12, role: "Financial Intelligence" },
  { name: "Dubai", country: "UAE", lat: 25.2, lon: 55.27, role: "Emerging Logistics" },
  { name: "Singapore", country: "SG", lat: 1.35, lon: 103.82, role: "Innovation Division" },
];

// Equirectangular projection into a 1000x500 viewBox
function project(lat: number, lon: number) {
  const x = ((lon + 180) / 360) * 1000;
  const y = ((90 - lat) / 180) * 500;
  return { x, y };
}

export function GlobalMap() {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1000 500"
        className="block w-full h-auto"
        role="img"
        aria-label="Evolvix Global Footprint Map"
      >
        <defs>
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.16 254)" stopOpacity="0.9" />
            <stop offset="40%" stopColor="oklch(0.68 0.19 254)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="oklch(0.68 0.19 254)" stopOpacity="0" />
          </radialGradient>
          <pattern id="dotGrid" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="oklch(1 0 0 / 0.07)" />
          </pattern>
          <mask id="continents">
            {/* Approximate landmasses: rough silhouettes */}
            <rect width="1000" height="500" fill="black" />
            {/* North America */}
            <path d="M120 90 Q160 70 220 90 L280 130 L300 200 L260 260 L210 290 L160 260 L130 200 Z" fill="white" />
            {/* Central + South America */}
            <path d="M260 280 L300 290 L320 340 L310 420 L280 470 L260 460 L250 410 L240 360 Z" fill="white" />
            {/* Europe */}
            <path d="M470 110 L540 95 L560 130 L545 170 L500 185 L470 165 Z" fill="white" />
            {/* Africa */}
            <path d="M490 200 L560 200 L590 260 L580 340 L540 410 L500 410 L470 350 L470 270 Z" fill="white" />
            {/* Middle East / Asia minor */}
            <path d="M560 170 L640 165 L660 210 L620 230 L580 220 Z" fill="white" />
            {/* Asia */}
            <path d="M620 110 L820 100 L880 150 L870 220 L800 260 L720 250 L660 220 L630 180 Z" fill="white" />
            {/* India */}
            <path d="M700 240 L740 240 L745 290 L720 320 L700 290 Z" fill="white" />
            {/* SE Asia */}
            <path d="M790 260 L850 270 L860 310 L820 320 L790 295 Z" fill="white" />
            {/* Australia */}
            <path d="M820 360 L900 355 L915 395 L880 415 L830 410 L815 385 Z" fill="white" />
          </mask>
        </defs>

        {/* Background */}
        <rect width="1000" height="500" fill="oklch(0.05 0 0)" />

        {/* Dot-grid only on continents */}
        <rect width="1000" height="500" fill="url(#dotGrid)" mask="url(#continents)" />

        {/* Subtle continent outline */}
        <g mask="url(#continents)">
          <rect width="1000" height="500" fill="oklch(0.12 0 0)" opacity="0.4" />
        </g>

        {/* Equator + meridian guides */}
        <line x1="0" y1="250" x2="1000" y2="250" stroke="oklch(1 0 0 / 0.06)" strokeDasharray="2 6" />
        <line x1="500" y1="0" x2="500" y2="500" stroke="oklch(1 0 0 / 0.06)" strokeDasharray="2 6" />

        {/* Connection arcs between cities */}
        <g fill="none" stroke="oklch(0.68 0.19 254 / 0.45)" strokeWidth="0.6">
          {CITIES.map((from, i) =>
            CITIES.slice(i + 1).map((to) => {
              const a = project(from.lat, from.lon);
              const b = project(to.lat, to.lon);
              const mx = (a.x + b.x) / 2;
              const my = (a.y + b.y) / 2 - 60;
              return (
                <path
                  key={`${from.name}-${to.name}`}
                  d={`M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`}
                />
              );
            }),
          )}
        </g>

        {/* City dots */}
        {CITIES.map((c) => {
          const { x, y } = project(c.lat, c.lon);
          return (
            <g key={c.name}>
              <circle cx={x} cy={y} r="22" fill="url(#dotGlow)" />
              <circle cx={x} cy={y} r="3" fill="oklch(0.95 0.05 254)" />
              <circle cx={x} cy={y} r="6" fill="none" stroke="oklch(0.78 0.16 254)" strokeWidth="0.5">
                <animate attributeName="r" values="3;14;3" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0;0.9" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <text
                x={x + 12}
                y={y - 8}
                fill="oklch(0.97 0 0)"
                fontFamily="Inter, sans-serif"
                fontSize="10"
                fontWeight={500}
                letterSpacing="0.2em"
              >
                {c.name.toUpperCase()}
              </text>
              <text
                x={x + 12}
                y={y + 6}
                fill="oklch(0.62 0 0)"
                fontFamily="Inter, sans-serif"
                fontSize="7"
                letterSpacing="0.2em"
              >
                {c.country}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export const FOOTPRINT_CITIES = CITIES;
