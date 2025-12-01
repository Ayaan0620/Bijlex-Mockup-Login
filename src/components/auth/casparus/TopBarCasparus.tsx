import { Box, Flex } from "@mantine/core";

import casparusLogo from "@/assets/Casparus/CasparusLogo.png";
import bijlexLogo from "@/assets/bijlexLogo.webp";

export const TopBarCasparus = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'clamp(60px, 10vw, 70px)',
        background: '#000000',
        zIndex: 100,
        boxShadow: '0 4px 20px rgba(107, 76, 154, 0.4)',
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
              width: 'clamp(95px, 14vw, 125px)',
              height: 'clamp(40px, 7vw, 52px)',
              background: 'linear-gradient(135deg, #E8DCFF 0%, #F5F0FF 50%, #FFFFFF 100%)',
              borderRadius: '999px',
              transform: 'rotate(0deg)',
              zIndex: -1,
              boxShadow: '0 0 25px rgba(107, 76, 154, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          />

          <img
            src={casparusLogo}
            alt="Casparus College Logo"
            style={{
              height: 'clamp(32px, 6vw, 42px)',
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