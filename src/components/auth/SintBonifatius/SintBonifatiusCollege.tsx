import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";
import bonifatiusLogo from "../../../assets/BonifatiusCollege/logo-boni.png";

const mascot = {
  left: mascotLeft,
  right: mascotRight,
};

type Position = keyof typeof mascot;

const branding = {
  purple: "#9b51e0",
  purpleDark: "#7a3fb3",
  purpleLight: "#b87ce8",
  orange: "#ff6900",
  orangeLight: "#ff8533",
  white: "#ffffff",
  offWhite: "#f8f9fa",
  textDark: "#1a1a1a",
  textBody: "#4a4a4a",
  name: "Sint Bonifatiuscollege",
  shortName: "Het Boni",
  heading: "Ontdek je talenten op het Boni",
  description:
    "Bijlex ondersteunt leerlingen van het Sint Bonifatiuscollege bij hun persoonlijke ontwikkeling. Met slimme feedback en begeleiding op maat helpen we jou het beste uit jezelf te halen in een inspirerende leeromgeving.",
  logoPath: bonifatiusLogo,
};

interface Props {
  position: Position;
}

export const MascotSectionSintBonifatiusCollege = ({ position }: Props) => {
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
        // Modern purple gradient with sophisticated feel
        background: `
          radial-gradient(1400px 700px at -5% -5%, ${branding.purpleLight}45 0%, transparent 50%),
          radial-gradient(1000px 600px at 105% 105%, ${branding.orange}25 0%, transparent 55%),
          linear-gradient(135deg, ${branding.purple} 0%, ${branding.purpleDark} 100%)
        `,
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      {/* Elegant geometric background shapes - lowest z-index */}
      <Box style={{
        position: "absolute", top: "5%", right: "3%",
        width: 200, height: 200,
        background: "rgba(255,255,255,0.08)",
        borderRadius: "50%",
        filter: "blur(2px)",
        zIndex: 0,
      }} />
      
      <Box style={{
        position: "absolute", bottom: "15%", left: "5%",
        width: 180, height: 180,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 24,
        transform: "rotate(25deg)",
        filter: "blur(1.5px)",
        zIndex: 0,
      }} />

      {/* Extra grote achtergrond figuren */}
      <Box style={{
        position: "absolute", top: "35%", right: "25%",
        width: 250, height: 250,
        background: "rgba(255,105,0,0.05)",
        borderRadius: "50%",
        filter: "blur(3px)",
        zIndex: 0,
      }} />

      <Box style={{
        position: "absolute", bottom: "30%", left: "30%",
        width: 220, height: 220,
        background: "rgba(184,124,232,0.06)",
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        filter: "blur(2.5px)",
        zIndex: 0,
      }} />

      <Box style={{
        position: "absolute", bottom: "8%", right: "35%",
        width: 200, height: 200,
        background: "rgba(155,81,224,0.06)",
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        transform: "rotate(22deg)",
        filter: "blur(2px)",
        zIndex: 0,
      }} />

      {/* Nog 3 extra achtergrond figuren */}
      <Box style={{
        position: "absolute", top: "50%", left: "8%",
        width: 240, height: 240,
        background: "rgba(255,105,0,0.04)",
        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        transform: "rotate(18deg)",
        filter: "blur(2.5px)",
        zIndex: 0,
      }} />

      <Box style={{
        position: "absolute", top: "8%", right: "35%",
        width: 210, height: 210,
        background: "rgba(122,63,179,0.05)",
        borderRadius: "50%",
        filter: "blur(3px)",
        zIndex: 0,
      }} />

      <Box style={{
        position: "absolute", bottom: "40%", right: "8%",
        width: 230, height: 180,
        background: "rgba(255,133,51,0.06)",
        borderRadius: "115px / 90px",
        transform: "rotate(35deg)",
        filter: "blur(2px)",
        zIndex: 0,
      }} />

      {/* LEFT SIDE - Top to Bottom */}
      
      {/* Division symbol with circles - top left */}
      <Box style={{
        position: "absolute", top: "8%", left: "6%",
        width: 65, height: 65,
        animation: "pulseBulb 4s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="65" height="65" viewBox="0 0 100 100">
          {/* Top circle */}
          <circle cx="50" cy="30" r="10" 
                  fill={`${branding.white}FF`}
                  filter="drop-shadow(0 4px 16px rgba(255,255,255,0.4))"/>
          {/* Line */}
          <rect x="25" y="48" width="50" height="4" rx="2"
                fill={`${branding.orange}E6`}
                filter="drop-shadow(0 4px 12px rgba(255,105,0,0.3))"/>
          {/* Bottom circle */}
          <circle cx="50" cy="70" r="10" 
                  fill={`${branding.orange}E6`}
                  filter="drop-shadow(0 4px 12px rgba(255,105,0,0.3))"/>
        </svg>
      </Box>

      {/* Book - left side */}
      <Box style={{
        position: "absolute", top: "28%", left: "4%",
        width: 100, height: 80,
        animation: "floatBook1 40s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="100" height="80" viewBox="0 0 120 100">
          <rect x="10" y="10" width="70" height="80" rx="4" 
                fill={`${branding.orange}D9`}
                filter="drop-shadow(0 8px 24px rgba(255,105,0,0.4))"/>
          <rect x="40" y="10" width="70" height="80" rx="4" 
                fill={`${branding.orangeLight}E6`}
                filter="drop-shadow(0 8px 24px rgba(255,133,51,0.35))"/>
        </svg>
      </Box>

      {/* Sigma symbol - left middle */}
      <Box style={{
        position: "absolute", top: "52%", left: "3%",
        width: 95, height: 95,
        animation: "floatCap1 44s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="95" height="95" viewBox="0 0 100 100">
          <text x="50" y="75" 
                fontSize="80" 
                fontWeight="bold"
                textAnchor="middle"
                fill={`${branding.orange}CC`}
                fontFamily="Georgia, serif"
                filter="drop-shadow(0 8px 20px rgba(255,105,0,0.4))">Σ</text>
        </svg>
      </Box>

      {/* Plus symbol - left bottom */}
      <Box style={{
        position: "absolute", top: "72%", left: "8%",
        width: 60, height: 60,
        animation: "floatMusic1 40s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="60" height="60" viewBox="0 0 100 100">
          {/* Plus symbol */}
          <line x1="50" y1="30" x2="50" y2="70" 
                stroke={`${branding.orange}E6`} 
                strokeWidth="8"
                strokeLinecap="round"
                filter="drop-shadow(0 4px 12px rgba(255,105,0,0.35))"/>
          <line x1="30" y1="50" x2="70" y2="50" 
                stroke={`${branding.orange}E6`} 
                strokeWidth="8"
                strokeLinecap="round"/>
        </svg>
      </Box>

      {/* RIGHT SIDE - Top to Bottom */}

      {/* Check/root symbol with circles - top right */}
      <Box style={{
        position: "absolute", top: "6%", right: "5%",
        width: 75, height: 75,
        animation: "floatCap2 38s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="75" height="75" viewBox="0 0 100 100">
          {/* Orange circle */}
          <circle cx="35" cy="55" r="10" 
                  fill={`${branding.orange}FF`}
                  filter="drop-shadow(0 4px 12px rgba(255,105,0,0.3))"/>
          {/* Check/root path */}
          <path d="M 25 50 L 35 65 L 65 30" 
                stroke={`${branding.white}E6`}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="drop-shadow(0 6px 16px rgba(255,255,255,0.3))"/>
          {/* White circle */}
          <circle cx="65" cy="30" r="10" 
                  fill={`${branding.white}FF`}
                  filter="drop-shadow(0 4px 12px rgba(255,255,255,0.3))"/>
        </svg>
      </Box>

      {/* Math equation - right side */}
      <Box style={{
        position: "absolute", top: "25%", right: "7%",
        width: 75, height: 75,
        animation: "rotateGlobe 60s linear infinite",
        zIndex: 2,
      }}>
        <svg width="75" height="75" viewBox="0 0 100 100">
          {/* Square root symbol */}
          <path d="M 15 45 L 25 65 L 35 20 L 85 20" 
                stroke={`${branding.orange}CC`}
                strokeWidth="4"
                fill="none"
                filter="drop-shadow(0 4px 12px rgba(255,105,0,0.4))"/>
          {/* x² inside */}
          <text x="55" y="50" 
                fontSize="24" 
                fontWeight="bold"
                textAnchor="middle"
                fill={`${branding.white}E6`}
                fontFamily="Georgia, serif">x²</text>
        </svg>
      </Box>

      {/* Multiply symbol - right middle */}
      <Box style={{
        position: "absolute", top: "48%", right: "4%",
        width: 100, height: 80,
        animation: "rotatePencil1 50s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="100" height="80" viewBox="0 0 100 80">
          {/* Multiply symbol */}
          <line x1="30" y1="20" x2="70" y2="60" 
                stroke={`${branding.orange}E6`} 
                strokeWidth="8"
                strokeLinecap="round"
                filter="drop-shadow(0 4px 12px rgba(255,105,0,0.3))"/>
          <line x1="70" y1="20" x2="30" y2="60" 
                stroke={`${branding.orange}E6`} 
                strokeWidth="8"
                strokeLinecap="round"/>
        </svg>
      </Box>

      {/* Book - right bottom */}
      <Box style={{
        position: "absolute", bottom: "8%", right: "6%",
        width: 90, height: 72,
        animation: "floatBook2 48s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="90" height="72" viewBox="0 0 120 100">
          <rect x="10" y="10" width="70" height="80" rx="4" 
                fill={`${branding.white}BF`}
                filter="drop-shadow(0 6px 20px rgba(255,255,255,0.3))"/>
          <rect x="40" y="10" width="70" height="80" rx="4" 
                fill={`${branding.white}D9`}
                filter="drop-shadow(0 6px 20px rgba(255,255,255,0.25))"/>
        </svg>
      </Box>

      {/* TOP CENTER AREA */}

      {/* Triangle - top center left */}
      <Box style={{
        position: "absolute", top: "4%", left: "25%",
        width: 55, height: 55,
        animation: "rotateTriangle2 42s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="55" height="55" viewBox="0 0 100 100">
          <polygon points="50,10 90,80 10,80" 
                   fill={`${branding.purpleLight}99`}
                   filter="drop-shadow(0 4px 12px rgba(184,124,232,0.3))"/>
        </svg>
      </Box>

      {/* Small division symbol - top right area */}
      <Box style={{
        position: "absolute", top: "8%", right: "12%",
        width: 35, height: 35,
        animation: "floatDot1 28s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="35" height="35" viewBox="0 0 100 100">
          {/* Top line */}
          <rect x="25" y="35" width="50" height="4" rx="2"
                fill={`${branding.white}FF`}
                filter="drop-shadow(0 2px 8px rgba(255,255,255,0.3))"/>
          {/* Bottom line */}
          <rect x="25" y="61" width="50" height="4" rx="2"
                fill={`${branding.white}FF`}/>
        </svg>
      </Box>

      {/* Molecule - top center right */}
      <Box style={{
        position: "absolute", top: "8%", right: "22%",
        width: 80, height: 80,
        animation: "floatMolecule1 55s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="30" cy="30" r="12" 
                  fill={`${branding.orange}D9`}
                  filter="drop-shadow(0 4px 12px rgba(255,105,0,0.4))"/>
          <circle cx="70" cy="30" r="10" 
                  fill={`${branding.white}CC`}
                  filter="drop-shadow(0 4px 12px rgba(255,255,255,0.3))"/>
          <circle cx="50" cy="65" r="11" 
                  fill={`${branding.purpleLight}D9`}
                  filter="drop-shadow(0 4px 12px rgba(184,124,232,0.3))"/>
          <line x1="30" y1="30" x2="70" y2="30" stroke={`${branding.white}99`} strokeWidth="2"/>
          <line x1="30" y1="30" x2="50" y2="65" stroke={`${branding.white}99`} strokeWidth="2"/>
          <line x1="70" y1="30" x2="50" y2="65" stroke={`${branding.white}99`} strokeWidth="2"/>
        </svg>
      </Box>

      {/* MIDDLE CENTER AREA */}

      {/* Hexagon - center left */}
      <Box style={{
        position: "absolute", top: "42%", left: "18%",
        width: 70, height: 70,
        animation: "floatHex2 36s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="70" height="70" viewBox="0 0 100 100">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                   fill="none"
                   stroke={`${branding.orange}B3`}
                   strokeWidth="3"
                   filter="drop-shadow(0 4px 12px rgba(255,105,0,0.25))"/>
        </svg>
      </Box>

      {/* BOTTOM CENTER AREA */}

      {/* Pencil - bottom left */}
      <Box style={{
        position: "absolute", bottom: "22%", left: "20%",
        width: 80, height: 16,
        animation: "rotatePencil2 45s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="80" height="16" viewBox="0 0 100 20">
          <rect x="0" y="5" width="85" height="10" rx="2" 
                fill={`${branding.purpleLight}E6`}
                filter="drop-shadow(0 4px 12px rgba(184,124,232,0.3))"/>
          <polygon points="85,5 85,15 95,10" 
                   fill={`${branding.purple}FF`}/>
        </svg>
      </Box>

      {/* Triangle - bottom left */}
      <Box style={{
        position: "absolute", bottom: "8%", left: "28%",
        width: 70, height: 70,
        animation: "rotateTriangle1 50s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="70" height="70" viewBox="0 0 100 100">
          <polygon points="50,10 90,80 10,80" 
                   fill="none"
                   stroke={`${branding.orange}B3`}
                   strokeWidth="4"
                   filter="drop-shadow(0 4px 12px rgba(255,105,0,0.25))"/>
        </svg>
      </Box>

      {/* Math symbols - bottom center */}
      <Box style={{
        position: "absolute", bottom: "6%", right: "32%",
        width: 50, height: 50,
        animation: "floatMusic2 38s ease-in-out infinite",
        zIndex: 2,
      }}>
        <svg width="50" height="50" viewBox="0 0 100 100">
          {/* Equals symbol */}
          <line x1="20" y1="55" x2="80" y2="55" 
                stroke={`${branding.white}D9`} 
                strokeWidth="8"
                filter="drop-shadow(0 4px 12px rgba(255,255,255,0.3))"/>
          <line x1="20" y1="70" x2="80" y2="70" 
                stroke={`${branding.white}D9`} 
                strokeWidth="8"/>
        </svg>
      </Box>

      {/* Star - bottom right area */}
      <Box style={{
        position: "absolute", bottom: "18%", right: "24%",
        width: 45, height: 45,
        animation: "rotateStar1 65s linear infinite",
        zIndex: 2,
      }}>
        <svg width="45" height="45" viewBox="0 0 50 50">
          <path d="M25 0 L30 20 L50 25 L30 30 L25 50 L20 30 L0 25 L20 20 Z" 
                fill={`${branding.orange}D9`}
                filter="drop-shadow(0 4px 12px rgba(255,105,0,0.35))"/>
        </svg>
      </Box>

      {/* Star - top left area */}
      <Box style={{
        position: "absolute", top: "20%", left: "15%",
        width: 38, height: 38,
        animation: "rotateStar2 55s linear infinite reverse",
        zIndex: 2,
      }}>
        <svg width="38" height="38" viewBox="0 0 50 50">
          <path d="M25 0 L30 20 L50 25 L30 30 L25 50 L20 30 L0 25 L20 20 Z" 
                fill={`${branding.white}CC`}
                filter="drop-shadow(0 4px 12px rgba(255,255,255,0.3))"/>
        </svg>
      </Box>

      {/* SMALL DOTS - scattered carefully */}
      <Box style={{
        position: "absolute", top: "32%", right: "42%",
        width: 14, height: 14, borderRadius: "50%",
        background: `${branding.orange}E6`,
        animation: "floatDot1 28s ease-in-out infinite",
        boxShadow: `0 4px 16px ${branding.orange}70`,
        zIndex: 2,
      }} />
      
      <Box style={{
        position: "absolute", bottom: "48%", left: "32%",
        width: 18, height: 18, borderRadius: "50%",
        background: `${branding.white}E6`,
        animation: "floatDot2 32s ease-in-out infinite",
        boxShadow: `0 4px 16px ${branding.white}60`,
        zIndex: 2,
      }} />

      {/* Content */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        gap="lg"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Mascot + Logo Badge */}
        <Flex align="center" justify="center" gap="xl" wrap="wrap" style={{ marginBottom: 8 }}>
          {/* Mascot */}
          <Box style={{ position: "relative", animation: "floatY 8s ease-in-out infinite" }}>
            <img
              src={mascotImage}
              alt="Bijlex Mascot"
              style={{
                width: "clamp(140px, 12vw, 190px)",
                height: "auto",
                filter: "drop-shadow(0 18px 42px rgba(0,0,0,0.3))",
              }}
            />
          </Box>

          {/* Logo Badge */}
          <Box
            style={{
              padding: "40px 56px",
              background: branding.white,
              borderRadius: 20,
              boxShadow: `0 20px 70px rgba(155,81,224,0.25), 0 0 0 4px ${branding.orange}15`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatY 9.5s ease-in-out .5s infinite",
            }}
          >
            <img
              src={branding.logoPath}
              alt={branding.name}
              style={{ height: 85, width: "auto", display: "block" }}
            />
          </Box>
        </Flex>

        {/* Text Content */}
        <Box
          style={{
            width: "min(880px, 92%)",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: "clamp(2.3rem, 4.4vw, 3.1rem)",
              fontWeight: 900,
              color: branding.white,
              letterSpacing: "-0.025em",
              marginBottom: 16,
              textShadow: "0 3px 12px rgba(0,0,0,0.3)",
            }}
          >
            {branding.heading}
          </Text>

          <Text
            style={{
              fontSize: "clamp(1.05rem, 1.75vw, 1.2rem)",
              lineHeight: 1.8,
              color: branding.white,
              opacity: 0.96,
              fontWeight: 450,
              margin: "0 auto 20px",
              maxWidth: 700,
              textShadow: "0 2px 6px rgba(0,0,0,0.2)",
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
        
        /* Book floating animations */
        @keyframes floatBook1 { 
          0%, 100% { transform: translateY(0) rotate(-5deg); } 
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes floatBook2 { 
          0%, 100% { transform: translateX(0) rotate(8deg); } 
          50% { transform: translateX(10px) rotate(-8deg); }
        }
        
        /* Pencil animations */
        @keyframes rotatePencil1 {
          0%, 100% { transform: rotate(-25deg) translateY(0); }
          50% { transform: rotate(-15deg) translateY(-8px); }
        }
        
        @keyframes rotatePencil2 {
          0%, 100% { transform: rotate(30deg) translateY(0); }
          50% { transform: rotate(20deg) translateY(-6px); }
        }
        
        /* Molecule animations */
        @keyframes floatMolecule1 {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          33% { transform: rotate(120deg) translate(-5px, -8px); }
          66% { transform: rotate(240deg) translate(5px, -8px); }
        }
        
        /* Music note animations */
        @keyframes floatMusic1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.05); }
        }
        
        @keyframes floatMusic2 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(8px) scale(1.08); }
        }
        
        /* Triangle animations */
        @keyframes rotateTriangle1 {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(180deg) translateY(-10px); }
        }
        
        @keyframes rotateTriangle2 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-180deg); }
        }
        
        /* Globe rotation */
        @keyframes rotateGlobe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Light bulb pulse */
        @keyframes pulseBulb {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        /* Compass rotation */
        @keyframes rotateCompass {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Graduation cap animations */
        @keyframes floatCap1 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          50% { transform: translate(-8px, -12px) rotate(-10deg); }
        }
        
        @keyframes floatCap2 { 
          0%, 100% { transform: translateY(0) rotate(-15deg); } 
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        
        /* Star rotation */
        @keyframes rotateStar1 { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        @keyframes rotateStar2 { 
          from { transform: rotate(360deg); } 
          to { transform: rotate(0deg); } 
        }
        
        /* Hexagon floating */
        @keyframes floatHex1 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          50% { transform: translate(10px, -10px) rotate(180deg); }
        }
        
        @keyframes floatHex2 { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(12px) rotate(-180deg); }
        }
        
        /* Dot floating */
        @keyframes floatDot1 { 
          0%, 100% { transform: translateY(0); opacity: 0.6; } 
          50% { transform: translateY(-12px); opacity: 0.95; }
        }
        
        @keyframes floatDot2 { 
          0%, 100% { transform: translateX(0); opacity: 0.55; } 
          50% { transform: translateX(10px); opacity: 0.9; }
        }
        
        @keyframes floatDot3 { 
          0%, 100% { transform: translateY(0); opacity: 0.6; } 
          50% { transform: translateY(-10px); opacity: 0.95; }
        }
        
        @media (prefers-reduced-motion: reduce) { 
          * { animation: none !important; } 
        }
      `}</style>
    </Paper>
  );
};