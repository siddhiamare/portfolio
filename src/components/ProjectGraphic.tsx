import type { ProjectIcon } from "../data/content";

export default function ProjectGraphic({ icon }: { icon: ProjectIcon }) {
  switch (icon) {
    case "chart":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <rect x="30" y="110" width="24" height="60" rx="4" fill="url(#g1)" />
          <rect x="70" y="80" width="24" height="90" rx="4" fill="url(#g1)" />
          <rect x="110" y="50" width="24" height="120" rx="4" fill="url(#g1)" />
          <rect x="150" y="95" width="24" height="75" rx="4" fill="url(#g1)" />
          <path
            d="M42 100 L82 65 L122 40 L162 80"
            stroke="url(#g1)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#89AACC" />
              <stop offset="100%" stopColor="#4E85BF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <path
            d="M55 130a30 30 0 0 1 5-59 40 40 0 0 1 76-13 32 32 0 0 1 4 63H55z"
            stroke="url(#g2)"
            strokeWidth="4"
            fill="none"
          />
          <circle cx="60" cy="150" r="4" fill="url(#g2)" />
          <circle cx="80" cy="160" r="4" fill="url(#g2)" />
          <circle cx="100" cy="150" r="4" fill="url(#g2)" />
          <circle cx="120" cy="160" r="4" fill="url(#g2)" />
          <circle cx="140" cy="150" r="4" fill="url(#g2)" />
          <path d="M70 150v10M100 150v14M130 150v10" stroke="url(#g2)" strokeWidth="2" opacity="0.6" />
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#89AACC" />
              <stop offset="100%" stopColor="#4E85BF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "grade":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <circle cx="100" cy="100" r="55" stroke="url(#g3)" strokeWidth="4" fill="none" />
          <path
            d="M100 55v45l32 20"
            stroke="url(#g3)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 40l6 12-13-2z"
            fill="url(#g3)"
          />
          <defs>
            <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#89AACC" />
              <stop offset="100%" stopColor="#4E85BF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "currency":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <circle cx="75" cy="90" r="38" stroke="url(#g4)" strokeWidth="4" fill="none" />
          <circle cx="130" cy="120" r="38" stroke="url(#g4)" strokeWidth="4" fill="none" opacity="0.6" />
          <text x="63" y="100" fontSize="30" fill="url(#g4)" fontFamily="serif">
            $
          </text>
          <text x="118" y="130" fontSize="26" fill="url(#g4)" fontFamily="serif" opacity="0.7">
            €
          </text>
          <defs>
            <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#89AACC" />
              <stop offset="100%" stopColor="#4E85BF" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}
