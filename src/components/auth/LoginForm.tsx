import { Flex, Box } from "@mantine/core";
import { LoginFormSection } from "./LoginFormSection";
import { detectSchool } from "../../utils/schoolDetection";
import { TopBar as TopBarNuovo } from "./Nuovo/TopBarNuovo";
import { MascotSection as MascotSectionNuovo } from "./Nuovo/MascotSectionNuovo";
import { TopBar as TopBarYuverta } from "./Yuverta/TopBarYuverta";
import { MascotSectionYuverta as MascotSectionYuverta } from "./Yuverta/MascotSectionYuverta";

export const LoginForm = () => {
  const school = detectSchool();

  // Select the appropriate components based on school
  const TopBar = school === 'yuverta' ? TopBarNuovo : TopBarYuverta;
  const MascotSection = school === 'yuverta' ? MascotSectionNuovo : MascotSectionYuverta;

  return (
    <>
      {/* Top navigation bar */}
      <TopBar />

      {/* Main content - 50/50 split with padding for top bar */}
      <Box style={{ paddingTop: '70px', height: '100vh' }}>
        <Flex h="calc(100vh - 70px)" w="100vw">
          {/* Left side - Mascot/Branding (50%) */}
          <Flex flex="1" style={{ minWidth: 0 }}>
            <MascotSection position="right" />
          </Flex>

          {/* Right side - Login Form (50%) */}
          <Flex flex="1" style={{ minWidth: 0 }}>
            <LoginFormSection />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};