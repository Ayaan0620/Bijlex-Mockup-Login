import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";
import VierTaalLogo from "@/assets/vierTaal/VierTaalLogo.jpeg";
import hoekblock from "@/assets/vierTaal/hoekblock.png";


const mascot = {
  left: mascotLeft,
  right: mascotRight,
};

type Position = keyof typeof mascot;

const branding = {
  green: "#7ab53e",
  greenDark: "#5a9025",
  greenLight: "#9FD356",
  blue: "#1e78c1",
  blueDark: "#175a91",
  blueLight: "#4a96d1",
  textDark: "#1b1f24",
  textBody: "#364152",
  white: "#ffffff",
  // Logo kleuren
  yellow: "#FFD400",
  yellowLight: "#FFE74C",
  name: "Vier Taal",
  heading: "Beter leren doe je Bijlex",
  description:
    "Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we ervoor dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.",
  logoPath: VierTaalLogo,
};

interface Props {
  position: Position;
}

export const MascotSectionVierTaal = ({ position }: Props) => {
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
        // groene achtergrond met subtiele radial highlights
        background: `radial-gradient(1200px 600px at -10% -10%, ${branding.greenLight}55 0%, transparent 50%),
                     radial-gradient(900px 500px at 110% 110%, ${branding.greenLight}40 0%, transparent 55%),
                     ${branding.green}`,
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      {/* Hoek block at bottom left - 2.5 times smaller (40% height) */}
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "40%",
          width: "auto",
          zIndex: 0,
        }}
      >
        <img
          src={hoekblock}
          alt=""
          style={{
            height: "100%",
            width: "auto",
            objectFit: "cover",
            opacity: 0.9,
          }}
        />
      </Box>

      {/* decoratieve zachte vormen - originelen (wit) */}
      <Box style={{
        position: "absolute", top: "8%", right: "5%",
        width: 160, height: 160, borderRadius: 24,
        background: "rgba(255,255,255,0.10)", transform: "rotate(18deg)",
        filter: "blur(0.5px)", boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        zIndex: 0
      }} />
      <Box style={{
        position: "absolute", bottom: "10%", right: "8%",
        width: 220, height: 220, borderRadius: "50%",
        background: "rgba(255,255,255,0.12)", filter: "blur(2px)",
        zIndex: 0
      }} />

      {/* Nieuwe grote groene zachte vormen */}
      <Box style={{
        position: "absolute", top: "15%", left: "25%",
        width: 280, height: 280, borderRadius: "50%",
        background: "rgba(122,181,62,0.15)", filter: "blur(3px)",
        zIndex: 0
      }} />

      <Box style={{
        position: "absolute", bottom: "20%", left: "45%",
        width: 200, height: 200, borderRadius: 30,
        background: "rgba(159,211,86,0.12)", transform: "rotate(-15deg)",
        filter: "blur(1px)", boxShadow: "0 12px 35px rgba(122,181,62,0.1)",
        zIndex: 0
      }} />

      <Box style={{
        position: "absolute", top: "40%", right: "25%",
        width: 240, height: 240, borderRadius: "50%",
        background: "rgba(90,144,37,0.18)", filter: "blur(2.5px)",
        zIndex: 0
      }} />

      <Box style={{
        position: "absolute", top: "5%", left: "45%",
        width: 180, height: 180, borderRadius: 28,
        background: "rgba(122,181,62,0.14)", transform: "rotate(25deg)",
        filter: "blur(1.5px)", boxShadow: "0 10px 28px rgba(90,144,37,0.08)",
        zIndex: 0
      }} />

      <Box style={{
        position: "absolute", bottom: "35%", right: "10%",
        width: 260, height: 260, borderRadius: "50%",
        background: "rgba(159,211,86,0.16)", filter: "blur(2.8px)",
        zIndex: 0
      }} />

      <Box style={{
        position: "absolute", top: "58%", left: "8%",
        width: 190, height: 190, borderRadius: 32,
        background: "rgba(90,144,37,0.13)", transform: "rotate(-22deg)",
        filter: "blur(1.2px)", boxShadow: "0 11px 32px rgba(122,181,62,0.09)",
        zIndex: 0
      }} />

      {/* Diamanten - varied sizes with rotation and random movement */}
      <Box style={{
        position: "absolute", top: "15%", left: "8%",
        width: 95, height: 95,
        animation: "randomFloat1 38s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="95" height="95" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${branding.yellow}CC`}
                filter="drop-shadow(0 8px 20px rgba(255,212,0,0.4))"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", top: "55%", right: "15%",
        width: 55, height: 55,
        animation: "randomFloat2 45s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="55" height="55" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${branding.blue}D9`}
                filter="drop-shadow(0 8px 20px rgba(30,120,193,0.4))"/>
        </svg>
      </Box>
      
      <Box style={{
        position: "absolute", bottom: "25%", right: "35%",
        width: 75, height: 75,
        animation: "randomFloat3 42s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="75" height="75" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" 
                fill={`${branding.yellowLight}D9`}
                filter="drop-shadow(0 6px 18px rgba(255,231,76,0.5))"/>
        </svg>
      </Box>

      {/* Triangles - varied sizes with rotation */}
      <Box style={{
        position: "absolute", top: "8%", left: "18%",
        width: 110, height: 110,
        animation: "randomFloat4 50s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="110" height="110" viewBox="0 0 100 100">
          <path d="M50 15 L85 85 L15 85 Z" 
                fill={`${branding.blue}D5`}
                filter="drop-shadow(0 6px 16px rgba(30,120,193,0.4))"/>
        </svg>
      </Box>

      <Box style={{
        position: "absolute", top: "38%", right: "8%",
        width: 48, height: 48,
        animation: "randomFloat5 35s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="48" height="48" viewBox="0 0 100 100">
          <path d="M50 15 L85 85 L15 85 Z" 
                fill={`${branding.yellowLight}CE`}
                filter="drop-shadow(0 5px 14px rgba(255,231,76,0.38))"/>
        </svg>
      </Box>

      <Box style={{
        position: "absolute", bottom: "15%", left: "32%",
        width: 85, height: 85,
        animation: "randomFloat6 48s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="85" height="85" viewBox="0 0 100 100">
          <path d="M50 15 L85 85 L15 85 Z" 
                fill={`${branding.blueLight}D2`}
                filter="drop-shadow(0 6px 15px rgba(74,150,209,0.4))"/>
        </svg>
      </Box>

      <Box style={{
        position: "absolute", top: "62%", left: "45%",
        width: 62, height: 62,
        animation: "randomFloat7 40s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="62" height="62" viewBox="0 0 100 100">
          <path d="M50 15 L85 85 L15 85 Z" 
                fill={`${branding.yellow}C8`}
                filter="drop-shadow(0 4px 12px rgba(255,212,0,0.35))"/>
        </svg>
      </Box>

      <Box style={{
        position: "absolute", top: "28%", left: "35%",
        width: 70, height: 70,
        animation: "randomFloat8 44s ease-in-out infinite",
        zIndex: 1
      }}>
        <svg width="70" height="70" viewBox="0 0 100 100">
          <path d="M50 15 L85 85 L15 85 Z" 
                fill={`${branding.blueDark}D0`}
                filter="drop-shadow(0 5px 13px rgba(23,90,145,0.36))"/>
        </svg>
      </Box>

      {/* Circles - varied sizes with movement */}
      <Box style={{
        position: "absolute", top: "25%", left: "12%",
        width: 68, height: 68, borderRadius: "50%",
        background: `${branding.blue}DD`,
        animation: "randomFloat9 46s ease-in-out infinite",
        boxShadow: `0 6px 18px ${branding.blue}50`,
        filter: "drop-shadow(0 4px 12px rgba(30,120,193,0.3))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", top: "48%", right: "25%",
        width: 42, height: 42, borderRadius: "50%",
        background: `${branding.yellow}E0`,
        animation: "randomFloat10 39s ease-in-out infinite",
        boxShadow: `0 6px 18px ${branding.yellow}55`,
        filter: "drop-shadow(0 5px 14px rgba(255,212,0,0.35))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", bottom: "35%", left: "25%",
        width: 58, height: 58, borderRadius: "50%",
        background: `${branding.blueLight}DA`,
        animation: "randomFloat11 43s ease-in-out infinite",
        boxShadow: `0 5px 15px ${branding.blueLight}50`,
        filter: "drop-shadow(0 4px 11px rgba(74,150,209,0.32))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", top: "12%", right: "20%",
        width: 80, height: 80, borderRadius: "50%",
        background: `${branding.yellowLight}DC`,
        animation: "randomFloat12 52s ease-in-out infinite",
        boxShadow: `0 6px 16px ${branding.yellowLight}52`,
        filter: "drop-shadow(0 4px 12px rgba(255,231,76,0.33))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", bottom: "18%", right: "10%",
        width: 50, height: 50, borderRadius: "50%",
        background: `${branding.blueDark}D8`,
        animation: "randomFloat1 36s ease-in-out infinite",
        boxShadow: `0 6px 18px ${branding.blueDark}48`,
        filter: "drop-shadow(0 5px 13px rgba(23,90,145,0.34))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", top: "35%", left: "38%",
        width: 72, height: 72, borderRadius: "50%",
        background: `${branding.yellow}D5`,
        animation: "randomFloat2 47s ease-in-out infinite",
        boxShadow: `0 5px 14px ${branding.yellow}50`,
        filter: "drop-shadow(0 4px 10px rgba(255,212,0,0.3))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", bottom: "48%", right: "40%",
        width: 38, height: 38, borderRadius: "50%",
        background: `${branding.blue}DB`,
        animation: "randomFloat3 41s ease-in-out infinite",
        boxShadow: `0 5px 15px ${branding.blue}52`,
        filter: "drop-shadow(0 4px 11px rgba(30,120,193,0.32))",
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", top: "70%", left: "18%",
        width: 64, height: 64, borderRadius: "50%",
        background: `${branding.blueLight}DE`,
        animation: "randomFloat4 49s ease-in-out infinite",
        boxShadow: `0 6px 17px ${branding.blueLight}53`,
        filter: "drop-shadow(0 5px 12px rgba(74,150,209,0.34))",
        zIndex: 1
      }} />

      {/* Kleine stipjes - varied sizes */}
      <Box style={{
        position: "absolute", top: "20%", left: "28%",
        width: 18, height: 18, borderRadius: "50%",
        background: `${branding.yellow}E8`,
        animation: "randomFloat5 34s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.yellow}60`,
        zIndex: 1
      }} />
      
      <Box style={{
        position: "absolute", top: "68%", right: "18%",
        width: 10, height: 10, borderRadius: "50%",
        background: `${branding.blue}E6`,
        animation: "randomFloat6 37s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.blue}55`,
        zIndex: 1
      }} />
      
      <Box style={{
        position: "absolute", top: "42%", left: "52%",
        width: 15, height: 15, borderRadius: "50%",
        background: `${branding.blueLight}E6`,
        animation: "randomFloat7 40s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.blueLight}60`,
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", top: "8%", left: "42%",
        width: 12, height: 12, borderRadius: "50%",
        background: `${branding.yellowLight}E8`,
        animation: "randomFloat8 33s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.yellowLight}58`,
        zIndex: 1
      }} />
      
      <Box style={{
        position: "absolute", bottom: "28%", right: "48%",
        width: 20, height: 20, borderRadius: "50%",
        background: `${branding.blueDark}E6`,
        animation: "randomFloat9 38s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.blueDark}55`,
        zIndex: 1
      }} />
      
      <Box style={{
        position: "absolute", top: "52%", right: "5%",
        width: 14, height: 14, borderRadius: "50%",
        background: `${branding.yellow}E8`,
        animation: "randomFloat10 35s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.yellow}60`,
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", bottom: "55%", left: "15%",
        width: 11, height: 11, borderRadius: "50%",
        background: `${branding.blue}E6`,
        animation: "randomFloat11 36s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.blue}58`,
        zIndex: 1
      }} />

      <Box style={{
        position: "absolute", top: "75%", left: "48%",
        width: 16, height: 16, borderRadius: "50%",
        background: `${branding.yellowLight}E6`,
        animation: "randomFloat12 42s ease-in-out infinite",
        boxShadow: `0 4px 12px ${branding.yellowLight}58`,
        zIndex: 1
      }} />

      {/* inhoud */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        gap="lg"
        style={{ position: "relative", zIndex: 2 }}
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
              background: branding.white,
              borderRadius: 18,
              boxShadow: "0 18px 60px rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatY 9s ease-in-out .4s infinite",
            }}
          >
            <img
              src={branding.logoPath}
              alt={branding.name}
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
              color: branding.white,
              letterSpacing: "-0.02em",
              marginBottom: 14,
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {branding.heading}
          </Text>

          <Text
            style={{
              fontSize: "clamp(1rem, 1.7vw, 1.15rem)",
              lineHeight: 1.75,
              color: branding.white,
              opacity: 0.95,
              fontWeight: 450,
              margin: "0 auto 18px",
              maxWidth: 680,
              textShadow: "0 1px 4px rgba(0,0,0,0.15)",
            }}
          >
            {branding.description}
          </Text>
        </Box>
      </Flex>

      <style>{`
        @keyframes floatY { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-10px); } 
        }
        
        /* Random movements with rotation - each animation is unique */
        @keyframes randomFloat1 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(8px, -15px) rotate(90deg); }
          50% { transform: translate(-5px, -10px) rotate(180deg); }
          75% { transform: translate(10px, -18px) rotate(270deg); }
        }
        
        @keyframes randomFloat2 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-12px, -8px) rotate(-80deg); }
          50% { transform: translate(6px, -20px) rotate(-160deg); }
          75% { transform: translate(-7px, -12px) rotate(-240deg); }
        }
        
        @keyframes randomFloat3 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(15px, -10px) rotate(110deg); }
          50% { transform: translate(-8px, -22px) rotate(220deg); }
          75% { transform: translate(5px, -14px) rotate(330deg); }
        }
        
        @keyframes randomFloat4 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-10px, -18px) rotate(-95deg); }
          50% { transform: translate(12px, -9px) rotate(-190deg); }
          75% { transform: translate(-14px, -16px) rotate(-285deg); }
        }
        
        @keyframes randomFloat5 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(7px, -12px) rotate(85deg); }
          50% { transform: translate(-10px, -17px) rotate(170deg); }
          75% { transform: translate(3px, -20px) rotate(255deg); }
        }
        
        @keyframes randomFloat6 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-9px, -14px) rotate(-100deg); }
          50% { transform: translate(13px, -19px) rotate(-200deg); }
          75% { transform: translate(-4px, -11px) rotate(-300deg); }
        }
        
        @keyframes randomFloat7 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(11px, -16px) rotate(75deg); }
          50% { transform: translate(-6px, -13px) rotate(150deg); }
          75% { transform: translate(9px, -21px) rotate(225deg); }
        }
        
        @keyframes randomFloat8 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-13px, -11px) rotate(-105deg); }
          50% { transform: translate(8px, -15px) rotate(-210deg); }
          75% { transform: translate(-11px, -19px) rotate(-315deg); }
        }
        
        @keyframes randomFloat9 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(6px, -19px) rotate(65deg); }
          50% { transform: translate(-11px, -10px) rotate(130deg); }
          75% { transform: translate(14px, -17px) rotate(195deg); }
        }
        
        @keyframes randomFloat10 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-8px, -13px) rotate(-70deg); }
          50% { transform: translate(10px, -21px) rotate(-140deg); }
          75% { transform: translate(-12px, -8px) rotate(-210deg); }
        }
        
        @keyframes randomFloat11 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(9px, -11px) rotate(120deg); }
          50% { transform: translate(-7px, -18px) rotate(240deg); }
          75% { transform: translate(13px, -14px) rotate(360deg); }
        }
        
        @keyframes randomFloat12 { 
          0%, 100% { transform: translate(0, 0) rotate(0deg); } 
          25% { transform: translate(-14px, -16px) rotate(-115deg); }
          50% { transform: translate(7px, -12px) rotate(-230deg); }
          75% { transform: translate(-9px, -20px) rotate(-345deg); }
        }
        
        @media (prefers-reduced-motion: reduce) { 
          * { animation: none !important; } 
        }
      `}</style>
    </Paper>
  );
};