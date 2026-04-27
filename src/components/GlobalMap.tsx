/**
 * GlobalMap — realistic world map via react-simple-maps (Natural Earth 110m GeoJSON)
 * with luminous pulse dots for each office city and geodesic arcs connecting them.
 */

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type City = {
  name: string;
  country: string;
  coordinates: [number, number]; // [lon, lat]
  role: string;
};

const CITIES: City[] = [
  { name: "Madrid",    country: "ES",  coordinates: [-3.70,  40.41], role: "Operations Hub" },
  { name: "London",   country: "UK",  coordinates: [-0.12,  51.50], role: "Financial Intelligence" },
  { name: "Dubai",    country: "UAE", coordinates: [55.27,  25.20], role: "Emerging Logistics" },
  { name: "Singapore",country: "SG",  coordinates: [103.82,  1.35], role: "Innovation Division" },
];

// All city pairs for arcs
const ARCS: [City, City][] = CITIES.flatMap((a, i) =>
  CITIES.slice(i + 1).map<[City, City]>((b) => [a, b]),
);

// Electric blue palette
const ELECTRIC = "oklch(0.68 0.19 254)";
const ELECTRIC_BRIGHT = "oklch(0.85 0.14 254)";
const LAND_FILL = "#0e0e10";
const LAND_STROKE = "rgba(255,255,255,0.07)";
const OCEAN = "#050507";

export function GlobalMap() {
  return (
    <div className="relative w-full overflow-hidden" style={{ background: OCEAN }}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 160, center: [20, 10] }}
        style={{ width: "100%", height: "auto" }}
        width={1000}
        height={500}
      >
        {/* Ocean gradient background — rendered as SVG rect injected via the composable map */}

        {/* Land */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={LAND_FILL}
                stroke={LAND_STROKE}
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover:   { outline: "none", fill: "#181820" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Connection arcs */}
        {ARCS.map(([from, to]) => (
          <Line
            key={`${from.name}-${to.name}`}
            from={from.coordinates}
            to={to.coordinates}
            stroke={ELECTRIC}
            strokeWidth={0.8}
            strokeOpacity={0.45}
            strokeLinecap="round"
          />
        ))}

        {/* City markers */}
        {CITIES.map((city) => (
          <Marker key={city.name} coordinates={city.coordinates}>
            {/* Glow halo */}
            <circle r={18} fill={ELECTRIC} fillOpacity={0.12} />
            {/* Pulse ring */}
            <circle r={6} fill="none" stroke={ELECTRIC_BRIGHT} strokeWidth={0.8} opacity={0.8}>
              <animate attributeName="r"       values="4;18;4"    dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.6s" repeatCount="indefinite" />
            </circle>
            {/* Core dot */}
            <circle r={3} fill={ELECTRIC_BRIGHT} />
            {/* Label */}
            <text
              x={10}
              y={-6}
              fill="rgba(255,255,255,0.95)"
              fontFamily="Inter, sans-serif"
              fontSize={9}
              fontWeight={600}
              letterSpacing="0.18em"
              style={{ userSelect: "none" }}
            >
              {city.name.toUpperCase()}
            </text>
            <text
              x={10}
              y={6}
              fill="rgba(255,255,255,0.4)"
              fontFamily="Inter, sans-serif"
              fontSize={6.5}
              letterSpacing="0.18em"
              style={{ userSelect: "none" }}
            >
              {city.country}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export const FOOTPRINT_CITIES = CITIES.map(({ name, country, role }) => ({
  name,
  country,
  role,
}));
