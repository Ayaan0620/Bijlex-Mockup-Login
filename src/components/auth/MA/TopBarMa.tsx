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
  heading: "Moderne Weboplossingen",
  description:
    "Wij ontwikkelen professionele websites en webapplicaties die perfect aansluiten bij jouw bedrijf. Met een focus op gebruiksvriendelijkheid en moderne technologie zorgen we voor een online aanwezigheid waar je trots op kunt zijn.",
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
      {/* Decoratieve subtiele vormen */}
      <Box style={{
        position: "absolute", 
        top: "10%", 
        right: "5%",
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
        bottom: "15%", 
        left: "8%",
        width: 180, 
        height: 180, 
        borderRadius: "50%",
        background: `${branding.magentaLight}08`,
        border: `1px solid ${branding.magentaLight}15`,
        filter: "blur(2px)"
      }} />

      {/* Geometrische vormen - magenta/wit thema */}
      <Box style={{
        position: "absolute", 
        top: "15%", 
        left: "8%",
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
        top: "55%", 
        right: "10%",
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
        bottom: "25%", 
        right: "6%",
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
        top: "40%", 
        left: "5%",
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

      {/* Kleinere decoratieve elementen */}
      <Box style={{
        position: "absolute", 
        top: "25%", 
        right: "40%",
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
        bottom: "20%", 
        left: "30%",
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

      {/* Floating dots met magenta kleuren */}
      <Box style={{
        position: "absolute", 
        top: "30%", 
        right: "45%",
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
        bottom: "35%", 
        left: "15%",
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
        top: "60%", 
        right: "25%",
        width: 10, 
        height: 10, 
        borderRadius: "50%",
        background: branding.white,
        animation: "floatDot3 22s ease-in-out infinite",
        opacity: 0.4,
        boxShadow: `0 4px 12px ${branding.white}30`
      }} />

      {/* Gradient lines als achtergrond detail */}
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
        {/* Mascot + tekst badge */}
        <Flex align="center" justify="center" gap="xl" wrap="wrap" style={{ marginBottom: 8 }}>
          {/* Mascot */}
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

          {/* Logo met witte achtergrond */}
          <Box style={{ 
            position: "relative", 
            animation: "floatY 8s ease-in-out .5s infinite",
            marginLeft: "2rem",
          }}>
            <img
              src={MaLogo}
              alt={branding.name}
              style={{ 
                width: "280px",
                height: "160px",
                objectFit: "contain",
                display: "block",
                background: branding.white,
                borderRadius: 18,
                padding: "20px",
              }}
            />
          </Box>
        </Flex>

        {/* Tekst content */}
        <Box
          style={{
            width: "min(860px, 92%)",
            textAlign: "center",
          }}
        >
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