import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";

const mascot = {
  left: mascotLeft,
  right: mascotRight,
};

type Position = keyof typeof mascot;

/**
 * Yuverta branding configuration
 */
const branding = {
  primaryColor: '#00088F',
  secondaryColor: '#2DF200',
  accentColor: '#2DF200',
  name: 'Yuverta',
  heading: 'Beter leren doe je Bijlex',
  description: 'Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we ervoor dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.',
  logoPath: 'https://duurzaamheidindeklas.nl/wp-content/uploads/2025/07/Yuverta-scaled-1.png',
};

interface Props {
  position: Position;
}

export const MascotSectionYuverta = ({ position }: Props) => {
  const mascotImage = mascot[position];

  return (
    <Paper
      shadow="sm"
      flex={1}
      px={{ base: 'xs', sm: 'md' }}
      py={{ base: 'md', sm: 'xl' }}
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, ${branding.primaryColor}f0 0%, ${branding.primaryColor} 50%),
          linear-gradient(135deg, ${branding.primaryColor} 0%, #000420 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        borderRadius: 0,
        minHeight: '300px',
      }}
    >

      <Box
        style={{
          position: 'absolute',
          top: '11%',
          left: '7%',
          width: 'clamp(120px, 10.5vw, 175px)',
          height: 'clamp(120px, 10.5vw, 175px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${branding.accentColor}85, ${branding.accentColor}28)`,
          animation: 'circleFloat1 19s ease-in-out infinite',
          boxShadow: `0 9px 48px ${branding.accentColor}30, inset 0 0 30px ${branding.accentColor}15`,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '13%',
          right: '8%',
          width: 'clamp(130px, 11.5vw, 185px)',
          height: 'clamp(130px, 11.5vw, 185px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${branding.accentColor}88, ${branding.accentColor}2A)`,
          animation: 'circleFloat2 21s ease-in-out infinite',
          boxShadow: `0 9px 50px ${branding.accentColor}32, inset 0 0 32px ${branding.accentColor}18`,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          top: '32%',
          right: '12%',
          width: 'clamp(85px, 7.5vw, 120px)',
          height: 'clamp(85px, 7.5vw, 120px)',
          background: `linear-gradient(135deg, ${branding.accentColor}78, ${branding.accentColor}32)`,
          borderRadius: '14px',
          transform: 'rotate(22deg)',
          animation: 'squareRotate1 25s ease-in-out infinite',
          boxShadow: `0 8px 42px ${branding.accentColor}28`,
          border: `1px solid ${branding.accentColor}C8`,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '35%',
          left: '13%',
          width: 'clamp(90px, 8vw, 125px)',
          height: 'clamp(90px, 8vw, 125px)',
          background: `linear-gradient(135deg, ${branding.accentColor}7A, ${branding.accentColor}34)`,
          borderRadius: '12px',
          transform: 'rotate(-18deg)',
          animation: 'squareRotate2 28s ease-in-out infinite',
          boxShadow: `0 8px 44px ${branding.accentColor}26`,
          border: `1px solid ${branding.accentColor}CA`,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          top: '18%',
          right: '25%',
          width: 'clamp(75px, 6.5vw, 105px)',
          height: 'clamp(75px, 6.5vw, 105px)',
          background: `linear-gradient(135deg, ${branding.accentColor}1A, transparent)`,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'triangleFloat1 20s ease-in-out infinite',
          boxShadow: `0 5px 32px ${branding.accentColor}1A`,
          filter: `drop-shadow(0 0 18px ${branding.accentColor}12)`,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '28%',
          width: 'clamp(80px, 7vw, 110px)',
          height: 'clamp(80px, 7vw, 110px)',
          background: `linear-gradient(135deg, ${branding.accentColor}18, transparent)`,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'triangleFloat2 23s ease-in-out infinite',
          boxShadow: `0 5px 35px ${branding.accentColor}18`,
          filter: `drop-shadow(0 0 20px ${branding.accentColor}10)`,
        }}
      />

      <Box style={{ position: 'absolute', top: '9%', left: '32%', fontSize: 'clamp(1.9rem, 2.5vw, 3rem)', color: branding.accentColor, opacity: 0.26, textShadow: `0 0 28px ${branding.accentColor}50`, fontWeight: 'bold', animation: 'starTwinkle1 6.5s ease-in-out infinite' }}>✦</Box>
      <Box style={{ position: 'absolute', top: '55%', left: '18%', fontSize: 'clamp(1.7rem, 2.3vw, 2.8rem)', color: branding.accentColor, opacity: 0.24, textShadow: `0 0 26px ${branding.accentColor}48`, fontWeight: 'bold', animation: 'starTwinkle2 7.5s ease-in-out infinite' }}>✦</Box>
      <Box style={{ position: 'absolute', top: '70%', right: '8%', fontSize: 'clamp(2rem, 2.6vw, 3.2rem)', color: branding.accentColor, opacity: 0.28, textShadow: `0 0 30px ${branding.accentColor}52`, fontWeight: 'bold', animation: 'starTwinkle3 8s ease-in-out infinite' }}>✦</Box>
      <Box style={{ position: 'absolute', bottom: '8%', left: '35%', fontSize: 'clamp(1.8rem, 2.4vw, 2.9rem)', color: branding.accentColor, opacity: 0.25, textShadow: `0 0 27px ${branding.accentColor}49`, fontWeight: 'bold', animation: 'starTwinkle4 7s ease-in-out infinite' }}>✦</Box>

      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        gap={{ base: 'sm', md: 'lg' }}
        style={{ position: 'relative', zIndex: 10 }}
        py={{ base: 'md', md: '0' }}
      >
        <Flex
          align="center"
          justify="center"
          gap={{ base: '3rem', sm: '4rem', md: '5rem' }}
          wrap="wrap"
          style={{ marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}
        >
          <Box style={{ position: 'relative', animation: 'mascotFloat 8s ease-in-out infinite' }} display={{ base: 'none', sm: 'block' }}>
            <Box style={{ position: 'absolute', width: '140%', height: '140%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${branding.accentColor}28 0%, transparent 65%)`, animation: 'refinedGlow 4.5s ease-in-out infinite', zIndex: -1, filter: 'blur(28px)' }} />
            <Box style={{ position: 'absolute', width: '170%', height: '170%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${branding.accentColor}14 0%, transparent 65%)`, animation: 'refinedGlow 5.5s ease-in-out infinite 0.7s', zIndex: -2, filter: 'blur(38px)' }} />
            <img src={mascotImage} alt="Bijlex Mascot" style={{ width: 'clamp(120px, 14vw, 220px)', height: 'auto', filter: `drop-shadow(0 12px 40px ${branding.accentColor}42)` }} />
          </Box>

          <Box style={{ position: 'relative', padding: 'clamp(20px 30px, 4vw, 40px 50px)', animation: 'slideInRight 0.8s ease-out, logoFloat 9.5s ease-in-out 0.8s infinite' }}>
            <Box style={{ position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', background: branding.accentColor, transform: 'skewY(-2deg)', zIndex: -1, boxShadow: `0 0 55px ${branding.accentColor}72, 0 14px 48px rgba(0,0,0,0.32)` }} />
            <img src={branding.logoPath} alt={`${branding.name} Logo`} style={{ width: 'clamp(150px, 16vw, 320px)', height: 'auto', position: 'relative', display: 'block', filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 6px 22px rgba(0,0,0,0.26))' }} />
          </Box>
        </Flex>

        <Text style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)', color: branding.accentColor, textAlign: 'center', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", letterSpacing: '-0.03em', marginBottom: 'clamp(0.5rem, 2vw, 1.5rem)', textShadow: `0 2px 28px rgba(0, 0, 0, 0.42), 0 0 48px ${branding.accentColor}52, 0 0 75px ${branding.accentColor}32`, padding: '0 1rem' }}>
          {branding.heading}
        </Text>

        <Text style={{ fontSize: 'clamp(0.9rem, 1.9vw, 1.3rem)', color: '#FFFFFF', textAlign: 'center', maxWidth: '700px', lineHeight: 1.75, opacity: 0.94, fontWeight: 400, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", letterSpacing: '0.015em', textShadow: '0 2px 14px rgba(0, 0, 0, 0.26)', padding: '0 1rem' }} display={{ base: 'none', sm: 'block' }}>
          {branding.description}
        </Text>
      </Flex>

      <style>{`
        @keyframes circleFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.78; }
          35% { transform: translate(8px, -12px) scale(1.06); opacity: 0.92; }
          70% { transform: translate(-5px, -18px) scale(1.03); opacity: 0.85; }
        }
        @keyframes circleFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.82; }
          40% { transform: translate(-10px, 15px) scale(1.08); opacity: 0.96; }
          75% { transform: translate(6px, 8px) scale(1.04); opacity: 0.88; }
        }
        @keyframes squareRotate1 {
          0% { transform: rotate(22deg) scale(1); opacity: 0.55; }
          45% { transform: rotate(165deg) scale(1.09); opacity: 0.70; }
          100% { transform: rotate(382deg) scale(1); opacity: 0.55; }
        }
        @keyframes squareRotate2 {
          0% { transform: rotate(-18deg) scale(1); opacity: 0.58; }
          50% { transform: rotate(-210deg) scale(1.07); opacity: 0.72; }
          100% { transform: rotate(-378deg) scale(1); opacity: 0.58; }
        }
        @keyframes triangleFloat1 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.48; }
          55% { transform: translateY(-22px) rotate(-12deg); opacity: 0.65; }
        }
        @keyframes triangleFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.50; }
          48% { transform: translateY(-16px) rotate(10deg); opacity: 0.63; }
        }
        @keyframes starTwinkle1 {
          0%, 100% { opacity: 0.22; transform: scale(1) rotate(0deg); }
          52% { opacity: 0.50; transform: scale(1.2) rotate(-50deg); }
        }
        @keyframes starTwinkle2 {
          0%, 100% { opacity: 0.24; transform: scale(1) rotate(0deg); }
          48% { opacity: 0.48; transform: scale(1.16) rotate(42deg); }
        }
        @keyframes starTwinkle3 {
          0%, 100% { opacity: 0.26; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.52; transform: scale(1.22) rotate(-38deg); }
        }
        @keyframes starTwinkle4 {
          0%, 100% { opacity: 0.23; transform: scale(1) rotate(0deg); }
          54% { opacity: 0.46; transform: scale(1.18) rotate(48deg); }
        }
        @keyframes mascotFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-9px, -13px) rotate(-1.2deg); }
        }
        @keyframes refinedGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.62; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.88; }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-13px) scale(1.015); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        /* Respect user preferences for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </Paper>
  );
};