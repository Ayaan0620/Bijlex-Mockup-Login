import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";
import casparusLogo from "@/assets/Casparus/CasparusLogo.png";

const mascot = {
  left: mascotLeft,
  right: mascotRight,
};

type Position = keyof typeof mascot;

const branding = {
  primaryPurple: '#6B4C9A',
  darkPurple: '#4A3470',
  lightPurple: '#9B7BC6',
  redAccent: '#E63946',
  blueAccent: '#60a9d6ff',
  greenAccent: '#2A9D8F',
  orangeAccent: '#F77F00',
  yellowAccent: '#FFB703',
  name: 'Casparus College',
  heading: 'Beter leren doe je Bijlex',
  description: 'Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.',
  logoPath: casparusLogo,
};

interface Props {
  position: Position;
}

export const MascotSectionCasparus = ({ position }: Props) => {
  const mascotImage = mascot[position];

  return (
    <Paper
      shadow="sm"
      flex={1}
      px={{ base: 'xs', sm: 'md' }}
      py={{ base: 'md', sm: 'xl' }}
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, ${branding.primaryPurple}dd 0%, ${branding.darkPurple} 70%),
          linear-gradient(135deg, ${branding.primaryPurple} 0%, ${branding.darkPurple} 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        borderRadius: 0,
        minHeight: '300px',
      }}
    >
      {/* Animated grid lines */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(${branding.lightPurple}40 1.5px, transparent 1.5px),
            linear-gradient(90deg, ${branding.lightPurple}40 1.5px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 30s linear infinite',
          zIndex: 1,
          opacity: 0.6,
        }}
      />

      {/* Wide pill background */}
      <Box style={{ position: 'absolute', top: '32%', left: '50%', transform: 'translate(-50%, -50%) rotate(-18deg)', width: 'clamp(700px, 85vw, 1400px)', height: 'clamp(110px, 13vw, 230px)', background: `linear-gradient(135deg, #E8DCFF 0%, #F5F0FF 50%, #FFFFFF 100%)`, borderRadius: '999px', zIndex: 1, boxShadow: `0 0 60px rgba(107, 76, 154, 0.3), 0 15px 50px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.8)`, opacity: 0.9 }} />

      {/* 3D Sphere - Red/Pink */}
      <Box
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: 'clamp(100px, 9vw, 140px)',
          height: 'clamp(100px, 9vw, 140px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #FF6B8A 0%, ${branding.redAccent} 50%, #C41E3A 100%)`,
          animation: 'sphere3DFloat1 20s ease-in-out infinite',
          boxShadow: `
            0 20px 60px ${branding.redAccent}50,
            inset -8px -8px 16px rgba(0, 0, 0, 0.3),
            inset 8px 8px 16px rgba(255, 255, 255, 0.1)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* 3D Sphere - Blue */}
      <Box
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '12%',
          width: 'clamp(70px, 6vw, 100px)',
          height: 'clamp(70px, 6vw, 100px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #6BA3C8 0%, ${branding.blueAccent} 50%, #2E5F7D 100%)`,
          animation: 'sphere3DFloat2 18s ease-in-out infinite',
          boxShadow: `
            0 20px 50px ${branding.blueAccent}50,
            inset -6px -6px 12px rgba(0, 0, 0, 0.3),
            inset 6px 6px 12px rgba(255, 255, 255, 0.15)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* 3D Sphere - Green/Teal */}
      <Box
        style={{
          position: 'absolute',
          top: '35%',
          right: '15%',
          width: 'clamp(85px, 7.5vw, 120px)',
          height: 'clamp(85px, 7.5vw, 120px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #4ECDC4 0%, ${branding.greenAccent} 50%, #1D7A6F 100%)`,
          animation: 'sphere3DFloat3 22s ease-in-out infinite',
          boxShadow: `
            0 20px 55px ${branding.greenAccent}50,
            inset -7px -7px 14px rgba(0, 0, 0, 0.3),
            inset 7px 7px 14px rgba(255, 255, 255, 0.15)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* 3D Sphere - Orange */}
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          right: '25%',
          width: 'clamp(90px, 8vw, 130px)',
          height: 'clamp(90px, 8vw, 130px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #FFB347 0%, ${branding.orangeAccent} 50%, #D87000 100%)`,
          animation: 'sphere3DFloat1 24s ease-in-out infinite',
          boxShadow: `
            0 22px 60px ${branding.orangeAccent}50,
            inset -8px -8px 16px rgba(0, 0, 0, 0.3),
            inset 8px 8px 16px rgba(255, 255, 255, 0.2)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* 3D Sphere - Yellow/Gold */}
      <Box
        style={{
          position: 'absolute',
          bottom: '18%',
          right: '18%',
          width: 'clamp(70px, 6vw, 100px)',
          height: 'clamp(70px, 6vw, 100px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #FFD966 0%, ${branding.yellowAccent} 50%, #D99F00 100%)`,
          animation: 'sphere3DFloat2 26s ease-in-out infinite',
          boxShadow: `
            0 20px 50px ${branding.yellowAccent}50,
            inset -6px -6px 12px rgba(0, 0, 0, 0.25),
            inset 6px 6px 12px rgba(255, 255, 255, 0.25)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* 3D Sphere - Purple/Lavender */}
      <Box
        style={{
          position: 'absolute',
          top: '45%',
          left: '20%',
          width: 'clamp(60px, 5vw, 85px)',
          height: 'clamp(60px, 5vw, 85px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #C4A7E7 0%, ${branding.lightPurple} 50%, #7A5BA8 100%)`,
          animation: 'sphere3DFloat3 28s ease-in-out infinite',
          boxShadow: `
            0 18px 45px ${branding.lightPurple}50,
            inset -5px -5px 10px rgba(0, 0, 0, 0.3),
            inset 5px 5px 10px rgba(255, 255, 255, 0.2)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* Additional Blue Sphere - Top Left */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          width: 'clamp(75px, 6.5vw, 105px)',
          height: 'clamp(75px, 6.5vw, 105px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #8FB9E8 0%, ${branding.blueAccent} 50%, #2E5F7D 100%)`,
          animation: 'sphere3DFloat2 21s ease-in-out infinite',
          boxShadow: `
            0 20px 55px ${branding.blueAccent}55,
            inset -6px -6px 14px rgba(0, 0, 0, 0.3),
            inset 6px 6px 14px rgba(255, 255, 255, 0.2)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* Additional Blue Sphere - Bottom Right */}
      <Box
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '8%',
          width: 'clamp(65px, 5.5vw, 95px)',
          height: 'clamp(65px, 5.5vw, 95px)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, #6BA3C8 0%, ${branding.blueAccent} 50%, #2E5F7D 100%)`,
          animation: 'sphere3DFloat1 19s ease-in-out infinite',
          boxShadow: `
            0 18px 50px ${branding.blueAccent}50,
            inset -6px -6px 12px rgba(0, 0, 0, 0.3),
            inset 6px 6px 12px rgba(255, 255, 255, 0.15)
          `,
          zIndex: 2,
          filter: 'blur(2px)',
        }}
      />

      {/* Sparkle stars */}
      <Box style={{ position: 'absolute', top: '25%', left: '28%', fontSize: 'clamp(1.5rem, 2vw, 2.4rem)', color: branding.blueAccent, opacity: 0.45, textShadow: `0 0 20px ${branding.blueAccent}50`, fontWeight: 'bold', animation: 'starTwinkle1 6s ease-in-out infinite', zIndex: 2 }}>✦</Box>
      <Box style={{ position: 'absolute', bottom: '32%', left: '18%', fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', color: branding.blueAccent, opacity: 0.4, textShadow: `0 0 18px ${branding.blueAccent}48`, fontWeight: 'bold', animation: 'starTwinkle2 7s ease-in-out infinite', zIndex: 2 }}>✦</Box>
      <Box style={{ position: 'absolute', top: '50%', right: '12%', fontSize: 'clamp(1.4rem, 1.9vw, 2.3rem)', color: branding.blueAccent, opacity: 0.42, textShadow: `0 0 22px ${branding.blueAccent}52`, fontWeight: 'bold', animation: 'starTwinkle3 6.5s ease-in-out infinite', zIndex: 2 }}>✦</Box>
      <Box style={{ position: 'absolute', top: '65%', left: '15%', fontSize: 'clamp(1.2rem, 1.7vw, 2.1rem)', color: branding.blueAccent, opacity: 0.38, textShadow: `0 0 18px ${branding.blueAccent}46`, fontWeight: 'bold', animation: 'starTwinkle1 5.5s ease-in-out infinite', zIndex: 2 }}>✦</Box>
      <Box style={{ position: 'absolute', bottom: '15%', right: '30%', fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', color: branding.blueAccent, opacity: 0.4, textShadow: `0 0 20px ${branding.blueAccent}48`, fontWeight: 'bold', animation: 'starTwinkle2 6.8s ease-in-out infinite', zIndex: 2 }}>✦</Box>

      <Flex direction="column" align="center" justify="center" h="100%" gap={{ base: 'sm', md: 'lg' }} style={{ position: 'relative', zIndex: 10 }} py={{ base: 'md', md: '0' }}>
        <Flex align="center" justify="center" gap={{ base: '3rem', sm: '4rem', md: '5rem' }} wrap="wrap" style={{ marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>
          <Box style={{ position: 'relative', animation: 'mascotFloat 8s ease-in-out infinite' }} display={{ base: 'none', sm: 'block' }}>
            <Box style={{ position: 'absolute', width: '170%', height: '170%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${branding.blueAccent}28 0%, transparent 65%)`, animation: 'refinedGlow 4.5s ease-in-out infinite', zIndex: -1, filter: 'blur(28px)' }} />
            <Box style={{ position: 'absolute', width: '200%', height: '200%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${branding.blueAccent}14 0%, transparent 65%)`, animation: 'refinedGlow 5.5s ease-in-out infinite 0.7s', zIndex: -2, filter: 'blur(38px)' }} />
            <img src={mascotImage} alt="Bijlex Mascot" style={{ width: 'clamp(120px, 14vw, 220px)', height: 'auto', filter: `drop-shadow(0 12px 40px ${branding.blueAccent}42)` }} />
          </Box>
          <Box style={{ position: 'relative', padding: 'clamp(10px 20px, 3vw, 20px 40px)', animation: 'slideInRight 0.8s ease-out, logoFloat 9.5s ease-in-out 0.8s infinite', zIndex: 10, marginLeft: '-4rem' }}>
            <img src={branding.logoPath} alt={`${branding.name} Logo`} style={{ width: 'clamp(160px, 16vw, 300px)', height: 'auto', position: 'relative', display: 'block', filter: 'brightness(1.05) contrast(1.05) drop-shadow(0 4px 16px rgba(0,0,0,0.18))' }} />
          </Box>
        </Flex>
        <Text component="h2" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)', color: branding.blueAccent, textAlign: 'center', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", letterSpacing: '-0.03em', marginBottom: 'clamp(0.5rem, 2vw, 1.5rem)', filter: `drop-shadow(0 2px 28px rgba(0, 0, 0, 0.42)) drop-shadow(0 0 48px ${branding.blueAccent}52)`, padding: '0 1rem' }}>
          Beter leren doe je{' '}
          <span style={{ color: '#ffffffff', filter: `drop-shadow(0 0 35px #6BA3D850)` }}>Bijlex</span>
        </Text>
        <Text style={{ fontSize: 'clamp(0.9rem, 1.9vw, 1.3rem)', color: '#FFFFFF', textAlign: 'center', maxWidth: '700px', lineHeight: 1.75, opacity: 0.94, fontWeight: 400, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", letterSpacing: '0.015em', textShadow: `0 2px 14px rgba(0, 0, 0, 0.26), 0 0 25px ${branding.redAccent}15`, padding: '0 1rem' }} display={{ base: 'none', sm: 'block' }}>
          {branding.description}
        </Text>
      </Flex>
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes sphere3DFloat1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(-10px);
          }
        }

        @keyframes sphere3DFloat2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        @keyframes sphere3DFloat3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-18px) translateX(-8px);
          }
        }

        @keyframes starTwinkle1 { 0%, 100% { opacity: 0.22; transform: scale(1) rotate(0deg); } 52% { opacity: 0.50; transform: scale(1.2) rotate(-50deg); } }
        @keyframes starTwinkle2 { 0%, 100% { opacity: 0.24; transform: scale(1) rotate(0deg); } 48% { opacity: 0.48; transform: scale(1.16) rotate(42deg); } }
        @keyframes starTwinkle3 { 0%, 100% { opacity: 0.26; transform: scale(1) rotate(0deg); } 50% { opacity: 0.52; transform: scale(1.22) rotate(-38deg); } }
        @keyframes mascotFloat { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-9px, -13px) rotate(-1.2deg); } 50% { transform: translate(6px, -19px) rotate(0.6deg); } 75% { transform: translate(-11px, -9px) rotate(-0.6deg); } }
        @keyframes refinedGlow { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.62; } 50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.88; } }
        @keyframes logoFloat { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-13px) scale(1.015); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </Paper>
  );
};
