import { Box, Flex } from "@mantine/core";

import nuovoLogo from "../../../assets/nuovo/image.png";
import bijlexLogo from "../../../assets/bijlexLogo.webp";

export const TopBar = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
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
        px="xl"
      >
        {/* School logo with white/peachy pill-shaped background */}
        <Box
          style={{
            position: 'relative',
            padding: '8px 16px', // CHANGED: Adjusted padding for the new shape
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Pill-shaped white/peachy background */}
          <Box
            style={{
              position: 'absolute',
              width: '120px',  // CHANGED: Wider than height
              height: '55px',  // CHANGED: Shorter
              background: 'linear-gradient(135deg, #FFE8E0 0%, #FFF5F0 50%, #FFFFFF 100%)',
              borderRadius: '999px', // CHANGED: Creates the pill shape
              zIndex: -1,
              boxShadow: '0 0 25px rgba(222, 69, 92, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          />
          
          <img
            src={nuovoLogo}
            alt="School Logo"
            style={{
              height: '30px',
              width: 'auto',
              position: 'relative',
              display: 'block',
            }}
          />
        </Box>

        {/* Bijlex logo on the right */}
        <img
          src={bijlexLogo}
          alt="Bijlex Logo"
          style={{
            height: '60px',
            width: 'auto',
          }}
        />
      </Flex>
    </Box>
  );
};