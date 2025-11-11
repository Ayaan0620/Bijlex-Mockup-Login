import { Box, Flex } from "@mantine/core";

import yuvertaLogo from "../../../assets/yuverta/image.png";
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
        {/* Yuverta logo with green tilted background */}
        <Box
          style={{
            position: 'relative',
            padding: '8px 20px',
          }}
        >
          {/* Tilted green background */}
          <Box
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: '#2DF200',
              transform: 'skewY(-2deg)',
              zIndex: -1,
              boxShadow: '0 0 20px rgba(45, 242, 0, 0.4)',
            }}
          />
          
          <img
            src={yuvertaLogo}
            alt="Yuverta Logo"
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