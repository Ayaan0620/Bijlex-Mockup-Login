import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";
import MaLogo from "@/assets/Ma/MaLogo.png";

const mascot = {
  left: mascotLeft,
  right: mascotRight,
};

type Position = keyof typeof mascot;

const branding = {
  magenta: "#FF00E6",
  magentaDark: "#CC00B8",
  magentaLight: "#FF66EE",
  black: "#000000",
  grey: "#333333",
  greyLight: "#666666",
  white: "#FFFFFF",
  name: "Ma-Web",
  heading: "Beter leren doe je Bijlex",
  description:
    "Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.",
};

interface Props {
  position: Position;
}

export const MascotSectionMaWeb = ({ position }: Props) => {
  const mascotImage = mascot[position];

  return (
    <Paper
      shadow="sm"
      flex={1}
      px="md"
      py="xl"
      visibleFrom="md"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 0,
        background: `
          radial-gradient(circle at 20% 20%, ${branding.magentaLight}15 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, ${branding.magentaDark}10 0%, transparent 50%),
          ${branding.black}
        `,
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      {/* Decoratieve subtiele vormen - hoeken */}
      <Box style={{
        position: "absolute", 
        top: "2%", 
        right: "2%",
        width: 200, 
        height: 200, 
        borderRadius: 24,
        background: `${branding.magenta}10`,
        border: `1px solid ${branding.magenta}20`,
        transform: "rotate(25deg)",
        filter: "blur(1px)",
      }} />
      
      <Box style={{
        position: "absolute", 
        bottom: "2%", 
        left: "2%",
        width: 180, 
        height: 180, 
        borderRadius: "50%",
        background: `${branding.magentaLight}08`,
        border: `1px solid ${branding.magentaLight}15`,
        filter: "blur(2px)"
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "25%", 
        right: "18%",
        width: 140, 
        height: 140, 
        borderRadius: "50%",
        background: `${branding.magenta}08`,
        border: `1px solid ${branding.magenta}18`,
        filter: "blur(1.5px)",
        animation: "floatY 10s ease-in-out infinite",
      }} />
      
      <Box style={{
        position: "absolute", 
        bottom: "25%", 
        left: "18%",
        width: 160, 
        height: 160, 
        borderRadius: 20,
        background: `${branding.magentaLight}07`,
        border: `1px solid ${branding.magentaLight}12`,
        transform: "rotate(-15deg)",
        filter: "blur(1px)",
      }} />
      
      {/* Top middle */}
      <Box style={{
        position: "absolute", 
        top: "2%", 
        left: "35%",
        width: 100, 
        height: 100, 
        borderRadius: "50%",
        background: `${branding.magentaLight}09`,
        border: `1px solid ${branding.magentaLight}16`,
        filter: "blur(1.2px)",
        animation: "floatY 9s ease-in-out 0.5s infinite",
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "2%", 
        right: "30%",
        width: 85, 
        height: 85, 
        borderRadius: 18,
        background: `${branding.magenta}07`,
        border: `1px solid ${branding.magenta}14`,
        transform: "rotate(35deg)",
        filter: "blur(1px)",
      }} />
      
      {/* Bottom middle */}
      <Box style={{
        position: "absolute", 
        bottom: "2%", 
        left: "35%",
        width: 120, 
        height: 120, 
        borderRadius: "50%",
        background: `${branding.magenta}08`,
        border: `1px solid ${branding.magenta}16`,
        filter: "blur(1.3px)",
        animation: "floatY 11s ease-in-out 1s infinite",
      }} />
      
      <Box style={{
        position: "absolute", 
        bottom: "2%", 
        right: "30%",
        width: 95, 
        height: 95, 
        borderRadius: 22,
        background: `${branding.magentaLight}06`,
        border: `1px solid ${branding.magentaLight}13`,
        transform: "rotate(-20deg)",
        filter: "blur(1.1px)",
      }} />

      {/* Geometrische vormen - Links */}
      <Box style={{
        position: "absolute", 
        top: "18%", 
        left: "2%",
        width: 80, 
        height: 80,
        animation: "rotateFloat1 40s ease-in-out infinite",
      }}>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" 
                fill="none"
                stroke={branding.magenta}
                strokeWidth="3"
                transform="rotate(45 50 50)"
                opacity="0.6"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "45%", 
        left: "2%",
        width: 90, 
        height: 90,
        animation: "rotateFloat4 45s ease-in-out infinite",
      }}>
        <svg width="90" height="90" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill="none"
                stroke={branding.magenta}
                strokeWidth="2.5"
                opacity="0.5"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "72%", 
        left: "8%",
        width: 65, 
        height: 65,
        animation: "rotateFloat1 38s ease-in-out infinite",
      }}>
        <svg width="65" height="65" viewBox="0 0 100 100">
          <polygon points="50,20 80,80 20,80" 
                   fill="none"
                   stroke={branding.magentaLight}
                   strokeWidth="2.5"
                   opacity="0.45"/>
        </svg>
      </Box>
      
      {/* Geometrische vormen - Rechts */}
      <Box style={{
        position: "absolute", 
        top: "30%", 
        right: "2%",
        width: 100, 
        height: 100,
        animation: "rotateFloat2 50s ease-in-out infinite",
      }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="25" 
                  fill="none"
                  stroke={branding.magentaLight}
                  strokeWidth="2.5"
                  opacity="0.5"/>
          <circle cx="50" cy="50" r="35" 
                  fill="none"
                  stroke={branding.magentaLight}
                  strokeWidth="1.5"
                  opacity="0.3"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "55%", 
        right: "2%",
        width: 70, 
        height: 70,
        animation: "rotateFloat3 35s ease-in-out infinite",
      }}>
        <svg width="70" height="70" viewBox="0 0 100 100">
          <polygon points="50,15 85,85 15,85" 
                   fill="none"
                   stroke={branding.white}
                   strokeWidth="2"
                   opacity="0.4"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "80%", 
        right: "8%",
        width: 75, 
        height: 75,
        animation: "rotateFloat3 42s ease-in-out infinite",
      }}>
        <svg width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" 
                  fill="none"
                  stroke={branding.white}
                  strokeWidth="2"
                  opacity="0.35"/>
        </svg>
      </Box>
      
      {/* Geometrische vormen - Top middle */}
      <Box style={{
        position: "absolute", 
        top: "15%", 
        left: "40%",
        width: 70, 
        height: 70,
        animation: "rotateFloat2 44s ease-in-out infinite",
      }}>
        <svg width="70" height="70" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" 
                fill="none"
                stroke={branding.magentaLight}
                strokeWidth="2.5"
                transform="rotate(45 50 50)"
                opacity="0.5"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "15%", 
        right: "25%",
        width: 60, 
        height: 60,
        animation: "rotateFloat4 40s ease-in-out infinite",
      }}>
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill="none"
                stroke={branding.white}
                strokeWidth="2"
                opacity="0.4"/>
        </svg>
      </Box>
      
      {/* Geometrische vormen - Bottom middle */}
      <Box style={{
        position: "absolute", 
        bottom: "18%", 
        left: "38%",
        width: 68, 
        height: 68,
        animation: "rotateFloat1 41s ease-in-out infinite",
      }}>
        <svg width="68" height="68" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" 
                  fill="none"
                  stroke={branding.magenta}
                  strokeWidth="2.5"
                  opacity="0.48"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        bottom: "18%", 
        right: "28%",
        width: 72, 
        height: 72,
        animation: "rotateFloat3 39s ease-in-out infinite",
      }}>
        <svg width="72" height="72" viewBox="0 0 100 100">
          <polygon points="50,15 85,85 15,85" 
                   fill="none"
                   stroke={branding.magentaLight}
                   strokeWidth="2.3"
                   opacity="0.42"/>
        </svg>
      </Box>

      {/* Kleinere elementen - Rechts */}
      <Box style={{
        position: "absolute", 
        top: "22%", 
        right: "8%",
        width: 50, 
        height: 50,
        animation: "rotate1 60s linear infinite",
      }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <line x1="25" y1="10" x2="25" y2="40" 
                stroke={branding.magentaLight} 
                strokeWidth="2" 
                opacity="0.4"/>
          <line x1="10" y1="25" x2="40" y2="25" 
                stroke={branding.magentaLight} 
                strokeWidth="2" 
                opacity="0.4"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "48%", 
        right: "10%",
        width: 38, 
        height: 38,
        animation: "rotate2 48s linear infinite reverse",
      }}>
        <svg width="38" height="38" viewBox="0 0 50 50">
          <rect x="12.5" y="12.5" width="25" height="25" 
                fill="none"
                stroke={branding.magentaLight}
                strokeWidth="2"
                opacity="0.35"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "72%", 
        right: "15%",
        width: 40, 
        height: 40,
        animation: "rotate1 55s linear infinite",
      }}>
        <svg width="40" height="40" viewBox="0 0 50 50">
          <line x1="25" y1="10" x2="25" y2="40" 
                stroke={branding.magenta} 
                strokeWidth="2" 
                opacity="0.35"/>
          <line x1="10" y1="25" x2="40" y2="25" 
                stroke={branding.magenta} 
                strokeWidth="2" 
                opacity="0.35"/>
        </svg>
      </Box>
      
      {/* Kleinere elementen - Links */}
      <Box style={{
        position: "absolute", 
        top: "38%", 
        left: "8%",
        width: 45, 
        height: 45,
        animation: "rotate2 50s linear infinite reverse",
      }}>
        <svg width="45" height="45" viewBox="0 0 50 50">
          <rect x="12.5" y="12.5" width="25" height="25" 
                fill="none"
                stroke={branding.white}
                strokeWidth="2"
                opacity="0.3"/>
        </svg>
      </Box>
      
      {/* Kleinere elementen - Top middle */}
      <Box style={{
        position: "absolute", 
        top: "8%", 
        left: "48%",
        width: 42, 
        height: 42,
        animation: "rotate1 52s linear infinite",
      }}>
        <svg width="42" height="42" viewBox="0 0 50 50">
          <line x1="25" y1="10" x2="25" y2="40" 
                stroke={branding.white} 
                strokeWidth="2" 
                opacity="0.38"/>
          <line x1="10" y1="25" x2="40" y2="25" 
                stroke={branding.white} 
                strokeWidth="2" 
                opacity="0.38"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        top: "8%", 
        right: "38%",
        width: 36, 
        height: 36,
        animation: "rotate2 46s linear infinite reverse",
      }}>
        <svg width="36" height="36" viewBox="0 0 50 50">
          <rect x="12.5" y="12.5" width="25" height="25" 
                fill="none"
                stroke={branding.magenta}
                strokeWidth="2"
                opacity="0.33"/>
        </svg>
      </Box>
      
      {/* Kleinere elementen - Bottom middle */}
      <Box style={{
        position: "absolute", 
        bottom: "10%", 
        left: "40%",
        width: 44, 
        height: 44,
        animation: "rotate1 50s linear infinite",
      }}>
        <svg width="44" height="44" viewBox="0 0 50 50">
          <line x1="25" y1="10" x2="25" y2="40" 
                stroke={branding.magentaLight} 
                strokeWidth="2" 
                opacity="0.36"/>
          <line x1="10" y1="25" x2="40" y2="25" 
                stroke={branding.magentaLight} 
                strokeWidth="2" 
                opacity="0.36"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", 
        bottom: "10%", 
        right: "35%",
        width: 39, 
        height: 39,
        animation: "rotate2 47s linear infinite reverse",
      }}>
        <svg width="39" height="39" viewBox="0 0 50 50">
          <rect x="12.5" y="12.5" width="25" height="25" 
                fill="none"
                stroke={branding.white}
                strokeWidth="2"
                opacity="0.34"/>
        </svg>
      </Box>

      {/* Floating dots - Rechts */}
      <Box style={{
        position: "absolute", 
        top: "26%", 
        right: "5%",
        width: 12, 
        height: 12, 
        borderRadius: "50%",
        background: branding.magenta,
        animation: "floatDot1 25s ease-in-out infinite",
        opacity: 0.6,
        boxShadow: `0 4px 12px ${branding.magenta}40`
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "52%", 
        right: "7%",
        width: 13, 
        height: 13, 
        borderRadius: "50%",
        background: branding.magenta,
        animation: "floatDot2 26s ease-in-out infinite",
        opacity: 0.6,
        boxShadow: `0 4px 12px ${branding.magenta}35`
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "68%", 
        right: "12%",
        width: 10, 
        height: 10, 
        borderRadius: "50%",
        background: branding.white,
        animation: "floatDot3 22s ease-in-out infinite",
        opacity: 0.4,
        boxShadow: `0 4px 12px ${branding.white}30`
      }} />
      
      {/* Floating dots - Links */}
      <Box style={{
        position: "absolute", 
        top: "35%", 
        left: "6%",
        width: 14, 
        height: 14, 
        borderRadius: "50%",
        background: branding.magentaLight,
        animation: "floatDot2 28s ease-in-out infinite",
        opacity: 0.5,
        boxShadow: `0 4px 12px ${branding.magentaLight}40`
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "62%", 
        left: "5%",
        width: 11, 
        height: 11, 
        borderRadius: "50%",
        background: branding.magentaLight,
        animation: "floatDot1 23s ease-in-out infinite",
        opacity: 0.55,
        boxShadow: `0 4px 12px ${branding.magentaLight}35`
      }} />
      
      <Box style={{
        position: "absolute", 
        bottom: "35%", 
        left: "10%",
        width: 9, 
        height: 9, 
        borderRadius: "50%",
        background: branding.white,
        animation: "floatDot3 20s ease-in-out infinite",
        opacity: 0.45,
        boxShadow: `0 4px 12px ${branding.white}28`
      }} />
      
      {/* Floating dots - Top middle */}
      <Box style={{
        position: "absolute", 
        top: "5%", 
        left: "42%",
        width: 12, 
        height: 12, 
        borderRadius: "50%",
        background: branding.magenta,
        animation: "floatDot1 24s ease-in-out infinite",
        opacity: 0.58,
        boxShadow: `0 4px 12px ${branding.magenta}38`
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "5%", 
        right: "33%",
        width: 10, 
        height: 10, 
        borderRadius: "50%",
        background: branding.white,
        animation: "floatDot3 21s ease-in-out infinite",
        opacity: 0.48,
        boxShadow: `0 4px 12px ${branding.white}32`
      }} />
      
      <Box style={{
        position: "absolute", 
        top: "12%", 
        left: "52%",
        width: 11, 
        height: 11, 
        borderRadius: "50%",
        background: branding.magentaLight,
        animation: "floatDot2 22s ease-in-out infinite",
        opacity: 0.52,
        boxShadow: `0 4px 12px ${branding.magentaLight}36`
      }} />
      
      {/* Floating dots - Bottom middle */}
      <Box style={{
        position: "absolute", 
        bottom: "5%", 
        left: "43%",
        width: 13, 
        height: 13, 
        borderRadius: "50%",
        background: branding.magentaLight,
        animation: "floatDot2 25s ease-in-out infinite",
        opacity: 0.56,
        boxShadow: `0 4px 12px ${branding.magentaLight}37`
      }} />
      
      <Box style={{
        position: "absolute", 
        bottom: "5%", 
        right: "33%",
        width: 11, 
        height: 11, 
        borderRadius: "50%",
        background: branding.magenta,
        animation: "floatDot1 23s ease-in-out infinite",
        opacity: 0.59,
        boxShadow: `0 4px 12px ${branding.magenta}36`
      }} />
      
      <Box style={{
        position: "absolute", 
        bottom: "12%", 
        left: "48%",
        width: 10, 
        height: 10, 
        borderRadius: "50%",
        background: branding.white,
        animation: "floatDot3 21s ease-in-out infinite",
        opacity: 0.47,
        boxShadow: `0 4px 12px ${branding.white}30`
      }} />

      {/* Gradient lines */}
      <Box style={{
        position: "absolute",
        top: 0,
        left: "20%",
        width: "2px",
        height: "100%",
        background: `linear-gradient(to bottom, transparent, ${branding.magenta}20, transparent)`,
        animation: "lineFloat1 8s ease-in-out infinite",
      }} />
      
      <Box style={{
        position: "absolute",
        top: 0,
        right: "30%",
        width: "2px",
        height: "100%",
        background: `linear-gradient(to bottom, transparent, ${branding.magentaLight}15, transparent)`,
        animation: "lineFloat2 10s ease-in-out infinite",
      }} />

      {/* Inhoud */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        gap="lg"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Flex align="center" justify="center" gap="xl" wrap="wrap" style={{ marginBottom: 8 }}>
          <Box style={{ 
            position: "relative", 
            animation: "floatY 7s ease-in-out infinite" 
          }}>
            <img
              src={mascotImage}
              alt="Mascot"
              style={{
                width: "clamp(140px, 12vw, 200px)",
                height: "auto",
                filter: "drop-shadow(0 16px 40px rgba(255, 0, 230, 0.4))",
              }}
            />
          </Box>

          <Box style={{ 
            position: "relative", 
            animation: "floatY 8s ease-in-out .5s infinite",
          }}>
            <img
              src={MaLogo}
              alt={branding.name}
              style={{ 
                width: "clamp(400px, 40vw, 500px)",
                height: "clamp(225px, 22.5vw, 275px)",
                objectFit: "contain",
                display: "block",
                filter: "brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(6472%) hue-rotate(302deg) brightness(99%) contrast(105%)",
                padding: "35px",
              }}
            />
          </Box>
        </Flex>

        <Box style={{ width: "min(860px, 92%)", textAlign: "center" }}>
          <Text
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              background: `linear-gradient(135deg, ${branding.white} 0%, ${branding.white}DD 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            {branding.heading}
          </Text>

          <Text
            style={{
              fontSize: "clamp(1rem, 1.7vw, 1.15rem)",
              lineHeight: 1.75,
              color: branding.white,
              opacity: 0.85,
              fontWeight: 400,
              margin: "0 auto 18px",
              maxWidth: 680,
            }}
          >
            {branding.description}
          </Text>
        </Box>
      </Flex>

      <style>{`
        @keyframes floatY { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-12px); } 
        }
        
        @keyframes rotateFloat1 { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes rotateFloat2 { 
          0%, 100% { transform: translateX(0) rotate(0deg); } 
          50% { transform: translateX(8px) rotate(-180deg); }
        }
        
        @keyframes rotateFloat3 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          50% { transform: translate(-6px, -6px) rotate(180deg); }
        }
        
        @keyframes rotateFloat4 { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(8px) rotate(-180deg); }
        }
        
        @keyframes rotate1 { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        @keyframes rotate2 { 
          from { transform: rotate(360deg); } 
          to { transform: rotate(0deg); } 
        }
        
        @keyframes floatDot1 { 
          0%, 100% { transform: translateY(0); opacity: 0.6; } 
          50% { transform: translateY(-10px); opacity: 0.9; }
        }
        
        @keyframes floatDot2 { 
          0%, 100% { transform: translateX(0); opacity: 0.5; } 
          50% { transform: translateX(8px); opacity: 0.8; }
        }
        
        @keyframes floatDot3 { 
          0%, 100% { transform: translateY(0); opacity: 0.4; } 
          50% { transform: translateY(-8px); opacity: 0.7; }
        }
        
        @keyframes lineFloat1 { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-20px); }
        }
        
        @keyframes lineFloat2 { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(20px); }
        }
        
        @media (prefers-reduced-motion: reduce) { 
          * { animation: none !important; } 
        }
      `}</style>
    </Paper>
  );
};