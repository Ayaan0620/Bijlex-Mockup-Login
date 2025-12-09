import { Box, Flex, Image } from "@mantine/core";
import bonifatiusLogo from "../../../assets/BonifatiusCollege/logo-boni.png";

export const TopBarSintBonifatius = () => {
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        background: "#000000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        h="100%"
        px={{ base: "md", sm: "xl" }}
      >
        <Flex align="center" gap="md">
          <Image
            src={bonifatiusLogo}
            alt="Sint Bonifatiuscollege"
            h={45}
            w="auto"
            fit="contain"
          />
        </Flex>
      </Flex>
    </Box>
  );
};