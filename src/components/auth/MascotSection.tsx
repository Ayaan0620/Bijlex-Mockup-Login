import { Flex, Paper, Text, Box } from "@mantine/core";

/**
 * School-specific branding configuration
 */
const schoolBranding: Record<string, {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  name: string;
  heading: string;
  description: string;
  logoPath: string;
  mascotPath: string;
}> = {
  'localhost': {
    primaryColor: '#00088F',
    secondaryColor: '#2DF200',
    accentColor: '#2DF200',
    name: 'Yuverta',
    heading: 'Beter leren doe je Bijlex',
    description: 'Bijlex is er voor alle leerlingen die het beste uit zichzelf willen halen. Met een persoonlijk feedbacksysteem zorgen we ervoor dat iedereen toegang krijgt tot op maat gemaakte ondersteuning die gericht is op jouw gemaakte fouten.',
    logoPath: '/src/assets/image.png',
    mascotPath: '/src/assets/BijlexSkins_Mascotte Body Wave_Blank.png',
  },
};

interface Props {
  position: 'left' | 'right';
}

export const MascotSection = ({ position }: Props) => {
  const getBranding = () => {
    if (typeof window === 'undefined') return schoolBranding['localhost'];
    const hostname = window.location.hostname;
    return schoolBranding[hostname] || schoolBranding['localhost'];
  };

  const branding = getBranding();

  return (
    <Paper
      shadow="sm"
      flex={1}
      px="md"
      py="xl"
      visibleFrom="md"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, ${branding.primaryColor}f0 0%, ${branding.primaryColor} 50%),
          linear-gradient(135deg, ${branding.primaryColor} 0%, #000420 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
        borderRadius: 0,
      }}
    >
      {/* Soft background blobs */}
      <Box
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          background: `radial-gradient(ellipse, ${branding.accentColor}20 0%, transparent 70%)`,
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <Box
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: '550px',
          height: '550px',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: `radial-gradient(ellipse, ${branding.accentColor}18 0%, transparent 70%)`,
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      {/* Clean circles - strategically placed */}
      <Box
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${branding.accentColor}35, ${branding.accentColor}12)`,
          boxShadow: `0 0 40px ${branding.accentColor}40`,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '6%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: branding.accentColor,
          opacity: 0.18,
          boxShadow: `0 0 50px ${branding.accentColor}50`,
        }}
      />



      {/* Geometric squares/rectangles */}
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '100px',
          height: '100px',
          background: `linear-gradient(135deg, ${branding.accentColor}22, ${branding.accentColor}08)`,
          borderRadius: '20px',
          transform: 'rotate(25deg)',
          boxShadow: `0 0 30px ${branding.accentColor}25`,
        }}
      />


      <Box
        style={{
          position: 'absolute',
          top: '70%',
          left: '18%',
          width: '70px',
          height: '70px',
          background: branding.accentColor,
          opacity: 0.12,
          borderRadius: '12px',
          transform: 'rotate(45deg)',
          boxShadow: `0 0 40px ${branding.accentColor}35`,
        }}
      />

      {/* Star symbols - subtle decoration */}
      <Box
        style={{
          position: 'absolute',
          top: '12%',
          left: '20%',
          fontSize: '2.5rem',
          color: branding.accentColor,
          opacity: 0.25,
          textShadow: `0 0 20px ${branding.accentColor}60`,
          fontWeight: 'bold',
        }}
      >
        ✦
      </Box>


      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '25%',
          fontSize: '2.2rem',
          color: branding.accentColor,
          opacity: 0.24,
          textShadow: `0 0 20px ${branding.accentColor}55`,
          fontWeight: 'bold',
        }}
      >
        ✦
      </Box>

      {/* Diamond shapes */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          left: '45%',
          width: '50px',
          height: '50px',
          background: `linear-gradient(135deg, ${branding.accentColor}25, transparent)`,
          transform: 'rotate(45deg)',
          boxShadow: `0 0 25px ${branding.accentColor}35`,
        }}
      />



      {/* Main content container */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        gap="lg"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Logo and Mascot Row */}
        <Flex
          align="center"
          justify="center"
          gap="xl"
          wrap="wrap"
          style={{
            marginBottom: '1rem',
          }}
        >
          {/* Mascot */}
          <Box
            style={{
              position: 'relative',
            }}
          >
            {/* Soft glow behind mascot */}
            <Box
              style={{
                position: 'absolute',
                width: '150%',
                height: '150%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${branding.accentColor}25 0%, transparent 70%)`,
                zIndex: -1,
                filter: 'blur(25px)',
              }}
            />
            <img
              src={branding.mascotPath}
              alt="Bijlex Mascot"
              style={{
                width: 'clamp(160px, 14vw, 220px)',
                height: 'auto',
                filter: `drop-shadow(0 15px 40px ${branding.accentColor}40)`,
              }}
            />
          </Box>

          {/* Logo with solid angled green background */}
          <Box
            style={{
              position: 'relative',
              padding: '40px 50px',
            }}
          >
            {/* Angled solid green background */}
            <Box
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '20px',
                bottom: '20px',
                background: branding.accentColor,
                transform: 'skewY(-2deg)',
                zIndex: -1,
                boxShadow: `
                  0 0 60px ${branding.accentColor}80,
                  0 15px 50px rgba(0,0,0,0.4)
                `,
              }}
            />

            <img
              src={branding.logoPath}
              alt={`${branding.name} Logo`}
              style={{
                width: 'clamp(200px, 16vw, 320px)',
                height: 'auto',
                position: 'relative',
                display: 'block',
                filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 8px 24px rgba(0,0,0,0.3))',
              }}
            />
          </Box>
        </Flex>

        {/* Heading */}
        <Text
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: branding.accentColor,
            textAlign: 'center',
            fontWeight: 800,
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            textShadow: `
              0 2px 30px rgba(0, 0, 0, 0.5),
              0 0 50px ${branding.accentColor}50
            `,
          }}
        >
          {branding.heading}
        </Text>

        {/* Description */}
        <Text
          style={{
            fontSize: 'clamp(1.05rem, 1.9vw, 1.3rem)',
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.75,
            opacity: 0.94,
            fontWeight: 400,
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            letterSpacing: '0.015em',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)',
          }}
        >
          {branding.description}
        </Text>
      </Flex>
    </Paper>
  );
};