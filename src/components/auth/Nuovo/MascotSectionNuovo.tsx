import { Flex, Paper, Text, Box } from "@mantine/core";

import mascotLeft from "@/assets/images/mascot/mascot-waving-left.svg";
import mascotRight from "@/assets/images/mascot/mascot-waving-right.svg";
import nuovoLogo from "@/assets/nuovo/image.png";
import nuovoCircle from "@/assets/nuovo/NuovoCircle.png";

const mascot = {
  left: mascotLeft,
  right: mascotRight,
};

type Position = keyof typeof mascot;

const branding = {
  primaryColor: '#222894',
  lightBlue: '#6B9CFF',
  greenAccent: '#2BCC87',
  coralAccent: '#DE455C',
  orangeAccent: '#F06A5E',
  darkNavy: '#1A1F5C',
  name: 'NUOVO',
  heading: 'Beter leren doe je Bijlex',
  description: 'Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.',
  logoPath: nuovoLogo,
  circleLogoPath: nuovoCircle,
};

interface Props {
  position: Position;
}

export const MascotSectionNuovo = ({ position }: Props) => {
  const mascotImage = mascot[position];

  return (
    <Paper
      shadow="sm"
      flex={1}
      px={{ base: 'xs', sm: 'md' }}
      py={{ base: 'md', sm: 'xl' }}
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, ${branding.primaryColor}dd 0%, ${branding.darkNavy} 70%),
          linear-gradient(135deg, ${branding.primaryColor} 0%, ${branding.darkNavy} 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        borderRadius: 0,
        minHeight: '300px',
      }}
    >
      <Box style={{ position: 'absolute', top: '-12%', left: '-10%', width: 'clamp(350px, 30vw, 500px)', height: 'clamp(350px, 30vw, 500px)', zIndex: 1, opacity: 0.35, animation: 'nuovoCircleSpin 80s linear infinite' }}>
        <img src={branding.circleLogoPath} alt="NUOVO Circle" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'blur(1.5px) drop-shadow(0 10px 40px rgba(34, 40, 148, 0.3))' }} />
      </Box>
      <Box style={{ position: 'absolute', bottom: '-10%', right: '-8%', width: 'clamp(300px, 26vw, 450px)', height: 'clamp(300px, 26vw, 450px)', zIndex: 1, opacity: 0.32, animation: 'nuovoCircleSpin 80s linear infinite reverse' }}>
        <img src={branding.circleLogoPath} alt="NUOVO Circle" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'blur(1.5px) drop-shadow(0 10px 40px rgba(34, 40, 148, 0.3))' }} />
      </Box>
      <Box style={{ position: 'absolute', top: '20%', right: '12%', width: 'clamp(180px, 15vw, 260px)', height: 'clamp(180px, 15vw, 260px)', zIndex: 1, opacity: 0.25, animation: 'nuovoCircleSpin 80s linear infinite', animationDelay: '-20s' }}>
        <img src={branding.circleLogoPath} alt="NUOVO Circle" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'blur(1.5px) drop-shadow(0 10px 40px rgba(34, 40, 148, 0.3))' }} />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '35%',
          left: '8%',
          width: 'clamp(80px, 7vw, 110px)',
          height: 'clamp(80px, 7vw, 110px)',
          background: branding.greenAccent,
          opacity: 0.6,
          borderRadius: '24px',
          transform: 'rotate(18deg)',
          animation: 'squareFloat1 24s ease-in-out infinite',
          boxShadow: `0 6px 28px ${branding.greenAccent}20`,
          zIndex: 2,
          filter: 'blur(4px)',
        }}
      />

      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: 'clamp(90px, 8vw, 130px)',
          height: 'clamp(90px, 8vw, 130px)',
          borderRadius: '50%',
          background: branding.coralAccent,
          opacity: 0.65,
          animation: 'floatGentle 20s ease-in-out infinite',
          boxShadow: `0 8px 32px ${branding.coralAccent}25`,
          zIndex: 2,
          filter: 'blur(3px)',
        }}
      />

      <Box
        style={{
          position: 'absolute',
          top: '15%',
          right: '40%',
          width: 'clamp(60px, 5vw, 90px)',
          height: 'clamp(60px, 5vw, 90px)',
          borderRadius: '50%',
          background: branding.orangeAccent,
          opacity: 0.55,
          animation: 'floatGentle2 18s ease-in-out infinite',
          boxShadow: `0 8px 32px ${branding.orangeAccent}25`,
          zIndex: 2,
          filter: 'blur(3px)',
        }}
      />

       <Box
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '20%',
          width: 'clamp(50px, 4vw, 75px)',
          height: 'clamp(50px, 4vw, 75px)',
          background: branding.orangeAccent,
          opacity: 0.5,
          borderRadius: '16px',
          transform: 'rotate(40deg)',
          animation: 'squareFloat3 26s ease-in-out infinite',
          boxShadow: `0 6px 26px ${branding.orangeAccent}18`,
          zIndex: 2,
          filter: 'blur(4px)',
        }}
      />

      <Box style={{ position: 'absolute', top: '18%', left: '28%', fontSize: 'clamp(1.5rem, 2vw, 2.4rem)', color: branding.greenAccent, opacity: 0.4, textShadow: `0 0 20px ${branding.greenAccent}50`, fontWeight: 'bold', animation: 'starTwinkle1 6s ease-in-out infinite', zIndex: 2 }}>✦</Box>
      <Box style={{ position: 'absolute', bottom: '28%', left: '20%', fontSize: 'clamp(1.3rem, 1.8vw, 2.2rem)', color: branding.coralAccent, opacity: 0.38, textShadow: `0 0 18px ${branding.coralAccent}48`, fontWeight: 'bold', animation: 'starTwinkle2 7s ease-in-out infinite', zIndex: 2 }}>✦</Box>
      <Box style={{ position: 'absolute', top: '55%', right: '15%', fontSize: 'clamp(1.4rem, 1.9vw, 2.3rem)', color: branding.lightBlue, opacity: 0.42, textShadow: `0 0 22px ${branding.lightBlue}52`, fontWeight: 'bold', animation: 'starTwinkle3 6.5s ease-in-out infinite', zIndex: 2 }}>✦</Box>

      <Flex direction="column" align="center" justify="center" h="100%" gap={{ base: 'sm', md: 'lg' }} style={{ position: 'relative', zIndex: 10 }} py={{ base: 'md', md: '0' }}>
        <Flex align="center" justify="center" gap={{ base: 'md', md: 'xl' }} wrap="wrap" style={{ marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>
          <Box style={{ position: 'relative', animation: 'mascotFloat 8s ease-in-out infinite' }} display={{ base: 'none', sm: 'block' }}>
            <Box style={{ position: 'absolute', width: '180%', height: '180%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${branding.lightBlue}28 0%, transparent 65%)`, animation: 'refinedGlow 4.5s ease-in-out infinite', zIndex: -1, filter: 'blur(28px)' }} />
            <Box style={{ position: 'absolute', width: '230%', height: '230%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${branding.greenAccent}14 0%, transparent 65%)`, animation: 'refinedGlow 5.5s ease-in-out infinite 0.7s', zIndex: -2, filter: 'blur(38px)' }} />
            <img src={mascotImage} alt="Bijlex Mascot" style={{ width: 'clamp(120px, 14vw, 220px)', height: 'auto', filter: `drop-shadow(0 12px 40px ${branding.lightBlue}42)` }} />
          </Box>
          <Box style={{ position: 'relative', padding: 'clamp(10px 20px, 3vw, 20px 40px)', animation: 'slideInRight 0.8s ease-out, logoFloat 9.5s ease-in-out 0.8s infinite' }}>
            <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'clamp(200px, 22vw, 400px)', height: 'clamp(100px, 12vw, 220px)', background: `linear-gradient(135deg, #FFE8E0 0%, #FFF5F0 50%, #FFFFFF 100%)`, borderRadius: '999px', zIndex: -1, boxShadow: `0 0 60px rgba(222, 69, 92, 0.25), 0 15px 50px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.8)` }} />
            <img src={branding.logoPath} alt={`${branding.name} Logo`} style={{ width: 'clamp(140px, 14vw, 280px)', height: 'auto', position: 'relative', display: 'block', filter: 'brightness(1.05) contrast(1.05) drop-shadow(0 4px 16px rgba(0,0,0,0.18))' }} />
          </Box>
        </Flex>
        <Text component="h2" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)', color: branding.greenAccent, textAlign: 'center', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", letterSpacing: '-0.03em', marginBottom: 'clamp(0.5rem, 2vw, 1.5rem)', filter: `drop-shadow(0 2px 28px rgba(0, 0, 0, 0.42)) drop-shadow(0 0 48px ${branding.greenAccent}52)`, padding: '0 1rem' }}>
          Beter leren doe je{' '}
          <span style={{ color: branding.orangeAccent, filter: `drop-shadow(0 0 35px ${branding.orangeAccent}50)` }}>Bijlex</span>
        </Text>
        <Text style={{ fontSize: 'clamp(0.9rem, 1.9vw, 1.3rem)', color: '#FFFFFF', textAlign: 'center', maxWidth: '700px', lineHeight: 1.75, opacity: 0.94, fontWeight: 400, fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", letterSpacing: '0.015em', textShadow: `0 2px 14px rgba(0, 0, 0, 0.26), 0 0 25px ${branding.coralAccent}15`, padding: '0 1rem' }} display={{ base: 'none', sm: 'block' }}>
          {branding.description}
        </Text>
      </Flex>
      <style>{`
        @keyframes nuovoCircleSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatGentle { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-8px, -12px); } }
        @keyframes floatGentle2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, -8px); } }
        @keyframes squareFloat1 { 0% { transform: rotate(18deg) scale(1); } 50% { transform: rotate(198deg) scale(1.06); } 100% { transform: rotate(378deg) scale(1); } }
        @keyframes squareFloat2 { 0% { transform: rotate(-22deg) scale(1); } 50% { transform: rotate(-202deg) scale(1.05); } 100% { transform: rotate(-382deg) scale(1); } }
        @keyframes squareFloat3 { 0% { transform: rotate(40deg) scale(1); } 50% { transform: rotate(220deg) scale(1.08); } 100% { transform: rotate(400deg) scale(1); } }
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
