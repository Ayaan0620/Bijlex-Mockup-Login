import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";
import sazLogo from "../../../assets/schoolaanzee/schoolaanzee.png";
import saz1Logo from "../../../assets/schoolaanzee/schoolaanzeelogo.png";

const mascot = { left: mascotLeft, right: mascotRight };
type Position = keyof typeof mascot;

const BRAND = {
  green: "#4BA241",
  greenDark: "#3c8735",
  greenLight: "#73c469",
  textDark: "#1b1f24",
  textBody: "#364152",
  white: "#ffffff",
  // Logo kleuren
  red: "#E63946",
  yellow: "#FFA500",
  logoGreen: "#5CB85C",
  cyan: "#5DADE2",
  name: "Scholen aan Zee",
  heading: "Beter leren doe je Bijlex",
  description:
    "Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we ervoor dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.",
};

interface Props { position: Position }

export const MascotSectionSchoolaanzee = ({ position }: Props) => {
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
        // fris groen canvas met subtiele radial highlights
        background: `radial-gradient(1200px 600px at -10% -10%, ${BRAND.greenLight}55 0%, transparent 50%),
                     radial-gradient(900px 500px at 110% 110%, ${BRAND.greenLight}40 0%, transparent 55%),
                     ${BRAND.green}`,
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      {/* decoratieve zachte vormen */}
      <Box style={{
        position: "absolute", top: "8%", right: "5%",
        width: 160, height: 160, borderRadius: 24,
        background: "rgba(255,255,255,0.10)", transform: "rotate(18deg)",
        filter: "blur(0.5px)", boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }} />
      <Box style={{
        position: "absolute", bottom: "10%", left: "8%",
        width: 220, height: 220, borderRadius: "50%",
        background: "rgba(255,255,255,0.12)", filter: "blur(2px)"
      }} />

      {/* Zwevende saz1Logo's die draaien - alle opacity 1 */}
      <Box style={{
        position: "absolute", top: "8%", right: "25%",
        width: 80, height: 80,
        animation: "logoRotateFloat1 50s linear infinite",
        opacity: 1,
      }}>
        <img src={saz1Logo} alt="Logo" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.2))" }} />
      </Box>

      <Box style={{
        position: "absolute", bottom: "25%", left: "3%",
        width: 95, height: 95,
        animation: "logoRotateFloat2 60s linear infinite",
        opacity: 1,
      }}>
        <img src={saz1Logo} alt="Logo" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.2))" }} />
      </Box>

      <Box style={{
        position: "absolute", top: "72%", right: "15%",
        width: 65, height: 65,
        animation: "logoRotateFloat3 45s linear infinite",
        opacity: 1,
      }}>
        <img src={saz1Logo} alt="Logo" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.2))" }} />
      </Box>

      {/* Logo-vormige diamant blokjes met sterkere kleuren - meer verspreid */}
      <Box style={{
        position: "absolute", top: "15%", left: "5%",
        width: 90, height: 90,
        animation: "rotateFloat1 36s ease-in-out infinite",
      }}>
        <svg width="90" height="90" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${BRAND.red}CC`}
                filter="drop-shadow(0 8px 20px rgba(230,57,70,0.4))"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", top: "60%", right: "8%",
        width: 110, height: 110,
        animation: "rotateFloat2 45s ease-in-out infinite",
      }}>
        <svg width="110" height="110" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${BRAND.yellow}D9`}
                filter="drop-shadow(0 8px 20px rgba(255,165,0,0.4))"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", bottom: "20%", right: "4%",
        width: 70, height: 70,
        animation: "rotateFloat3 30s ease-in-out infinite",
      }}>
        <svg width="70" height="70" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${BRAND.cyan}D9`}
                filter="drop-shadow(0 6px 18px rgba(93,173,226,0.5))"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", top: "45%", left: "4%",
        width: 85, height: 85,
        animation: "rotateFloat4 39s ease-in-out infinite",
      }}>
        <svg width="85" height="85" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${BRAND.logoGreen}CC`}
                filter="drop-shadow(0 6px 18px rgba(92,184,92,0.4))"/>
        </svg>
      </Box>

      {/* Extra kleinere diamanten - meer verspreid */}
      <Box style={{
        position: "absolute", top: "28%", right: "35%",
        width: 55, height: 55,
        animation: "rotateFloat1 42s ease-in-out infinite",
      }}>
        <svg width="55" height="55" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${BRAND.cyan}C2`}
                filter="drop-shadow(0 4px 12px rgba(93,173,226,0.35))"/>
        </svg>
      </Box>

      <Box style={{
        position: "absolute", bottom: "12%", left: "25%",
        width: 65, height: 65,
        animation: "rotateFloat3 35s ease-in-out infinite",
      }}>
        <svg width="65" height="65" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${BRAND.red}BF`}
                filter="drop-shadow(0 4px 12px rgba(230,57,70,0.35))"/>
        </svg>
      </Box>

      {/* Sterren die draaien - meer verspreid */}
      <Box style={{
        position: "absolute", top: "12%", right: "40%",
        width: 40, height: 40,
        animation: "rotate1 60s linear infinite",
      }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" 
                fill={`${BRAND.yellow}CC`}
                filter="drop-shadow(0 4px 8px rgba(255,165,0,0.35))"/>
        </svg>
      </Box>
      <Box style={{
        position: "absolute", bottom: "18%", left: "35%",
        width: 35, height: 35,
        animation: "rotate2 45s linear infinite reverse",
      }}>
        <svg width="35" height="35" viewBox="0 0 40 40">
          <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" 
                fill={`${BRAND.cyan}BF`}
                filter="drop-shadow(0 4px 8px rgba(93,173,226,0.35))"/>
        </svg>
      </Box>
      <Box style={{
        position: "absolute", top: "68%", right: "6%",
        width: 30, height: 30,
        animation: "rotate3 54s linear infinite",
      }}>
        <svg width="30" height="30" viewBox="0 0 40 40">
          <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" 
                fill={`${BRAND.logoGreen}D2`}
                filter="drop-shadow(0 4px 8px rgba(92,184,92,0.35))"/>
        </svg>
      </Box>

      {/* Kleine stipjes met sterkere kleuren - meer verspreid */}
      <Box style={{
        position: "absolute", top: "32%", right: "45%",
        width: 12, height: 12, borderRadius: "50%",
        background: `${BRAND.red}E6`,
        animation: "floatDot1 24s ease-in-out infinite",
        boxShadow: `0 4px 12px ${BRAND.red}60`
      }} />
      <Box style={{
        position: "absolute", bottom: "40%", left: "12%",
        width: 15, height: 15, borderRadius: "50%",
        background: `${BRAND.yellow}E6`,
        animation: "floatDot2 27s ease-in-out infinite",
        boxShadow: `0 4px 12px ${BRAND.yellow}55`
      }} />
      <Box style={{
        position: "absolute", top: "55%", right: "30%",
        width: 10, height: 10, borderRadius: "50%",
        background: `${BRAND.logoGreen}E6`,
        animation: "floatDot3 21s ease-in-out infinite",
        boxShadow: `0 4px 12px ${BRAND.logoGreen}60`
      }} />

      {/* inhoud */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        gap="lg"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Mascot + badge/logo */}
        <Flex align="center" justify="center" gap="xl" wrap="wrap" style={{ marginBottom: 8 }}>
          {/* mascot - 20% smaller */}
          <Box style={{ position: "relative", animation: "floatY 7.5s ease-in-out infinite" }}>
            <img
              src={mascotImage}
              alt="Bijlex Mascot"
              style={{
                width: "clamp(128px, 11.2vw, 176px)",
                height: "auto",
                filter: "drop-shadow(0 16px 38px rgba(0,0,0,0.28))",
              }}
            />
          </Box>

          {/* merk-badge - alleen logo, geen tekst */}
          <Box
            style={{
              padding: "36px 52px",
              background: BRAND.white,
              borderRadius: 18,
              boxShadow: "0 18px 60px rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatY 9s ease-in-out .4s infinite",
            }}
          >
            <img
              src={sazLogo}
              alt={BRAND.name}
              style={{ height: 80, width: "auto", display: "block" }}
            />
          </Box>
        </Flex>

        {/* Text zonder witte achtergrond - gewoon witte text */}
        <Box
          style={{
            width: "min(860px, 92%)",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: "clamp(2.2rem, 4.2vw, 3rem)",
              fontWeight: 900,
              color: BRAND.white,
              letterSpacing: "-0.02em",
              marginBottom: 14,
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {BRAND.heading}
          </Text>

          <Text
            style={{
              fontSize: "clamp(1rem, 1.7vw, 1.15rem)",
              lineHeight: 1.75,
              color: BRAND.white,
              opacity: 0.95,
              fontWeight: 450,
              margin: "0 auto 18px",
              maxWidth: 680,
              textShadow: "0 1px 4px rgba(0,0,0,0.15)",
            }}
          >
            {BRAND.description}
          </Text>
        </Box>
      </Flex>

      <style>{`
        @keyframes floatY { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-10px); } 
        }
        
        /* Logo's die draaien en een beetje bewegen */
        @keyframes logoRotateFloat1 { 
          0% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(5px, -8px) rotate(90deg); }
          50% { transform: translate(0, -5px) rotate(180deg); }
          75% { transform: translate(-5px, -8px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        @keyframes logoRotateFloat2 { 
          0% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-6px, 7px) rotate(90deg); }
          50% { transform: translate(0, 10px) rotate(180deg); }
          75% { transform: translate(6px, 7px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        @keyframes logoRotateFloat3 { 
          0% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(8px, -5px) rotate(90deg); }
          50% { transform: translate(0, -10px) rotate(180deg); }
          75% { transform: translate(-8px, -5px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        /* Diamanten draaien vooral met minimale beweging - 3x langzamer */
        @keyframes rotateFloat1 { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-8px) rotate(360deg); }
        }
        
        @keyframes rotateFloat2 { 
          0%, 100% { transform: translateX(0) rotate(0deg); } 
          50% { transform: translateX(6px) rotate(-360deg); }
        }
        
        @keyframes rotateFloat3 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          50% { transform: translate(-5px, -5px) rotate(360deg); }
        }
        
        @keyframes rotateFloat4 { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(7px) rotate(-360deg); }
        }
        
        /* Sterren blijven gewoon draaien - 3x langzamer */
        @keyframes rotate1 { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        @keyframes rotate2 { 
          from { transform: rotate(360deg); } 
          to { transform: rotate(0deg); } 
        }
        
        @keyframes rotate3 { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        @keyframes rotate4 { 
          from { transform: rotate(360deg); } 
          to { transform: rotate(0deg); } 
        }
        
        /* Stipjes heel subtiel - 3x langzamer */
        @keyframes floatDot1 { 
          0%, 100% { transform: translateY(0); opacity: 0.5; } 
          50% { transform: translateY(-8px); opacity: 0.9; }
        }
        
        @keyframes floatDot2 { 
          0%, 100% { transform: translateX(0); opacity: 0.5; } 
          50% { transform: translateX(6px); opacity: 0.85; }
        }
        
        @keyframes floatDot3 { 
          0%, 100% { transform: translateY(0); opacity: 0.55; } 
          50% { transform: translateY(-6px); opacity: 0.9; }
        }
        
        @media (prefers-reduced-motion: reduce) { 
          * { animation: none !important; } 
        }
      `}</style>
    </Paper>
  );
};