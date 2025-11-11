import { Box, Flex } from "@mantine/core";

import nuovoLogo from "@/assets/nuovo/image.png";
import bijlexLogo from "@/assets/bijlexLogo.webp";

export const TopBar = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'clamp(60px, 10vw, 70px)',
        background: '#1a1a1a',
        borderBottom: '1px solid #2a2a2a',
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        h="100%"
        px={{ base: 'sm', md: 'xl' }}
      >
        <Box
          style={{
            position: 'relative',
            padding: 'clamp(6px 12px, 2vw, 8px 16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              width: 'clamp(90px, 15vw, 120px)',
              height: 'clamp(42px, 7vw, 55px)',
              background: 'linear-gradient(135deg, #FFE8E0 0%, #FFF5F0 50%, #FFFFFF 100%)',
              borderRadius: '999px',
              zIndex: -1,
              boxShadow: '0 0 25px rgba(222, 69, 92, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          />

          <img
            src={nuovoLogo}
            alt="School Logo"
            style={{
              height: 'clamp(24px, 4vw, 30px)',
              width: 'auto',
              position: 'relative',
              display: 'block',
            }}
          />
        </Box>

        <img
          src={bijlexLogo}
          alt="Bijlex Logo"
          style={{
            height: 'clamp(40px, 7vw, 60px)',
            width: 'auto',
          }}
        />
      </Flex>
    </Box>
  );
};
