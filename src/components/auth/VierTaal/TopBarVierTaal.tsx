import { Box, Flex } from "@mantine/core";
import VierTaalLogo from "../../../assets/VierTaal/VierTaalLogo.jpeg";
import bijlexLogo from "../../../assets/bijlexLogo.webp";
import hoekblock from "../../../assets/VierTaal/hoekblock.png";

const TopBarVierTaal = () => {
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        background: "#1a1a1a", // VierTaal blue
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Flex align="center" justify="space-between" h="100%" px="xl">
        {/* VierTaal logo */}
        <Box style={{ position: "relative", padding: "8px 20px" }}>
          <Box
            style={{
              position: "absolute",
              inset: 0,
              transform: "skewY(-2deg)",
              zIndex: -1,
            }}
          />
          <img
            src={VierTaalLogo}
            alt="Vier Taal"
            style={{ height: "32px", width: "auto", display: "block" }}
          />
        </Box>

        {/* Bijlex logo on the right */}
        <img
          src={bijlexLogo}
          alt="Bijlex"
          style={{ height: "58px", width: "auto", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}
        />
      </Flex>
    </Box>
  );
};

export default TopBarVierTaal;