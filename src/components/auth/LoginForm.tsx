import { Flex, Box } from "@mantine/core";
import { LoginFormSection } from "@/components/auth/LoginFormSection";
import { detectSchool } from "@/utils/schoolDetection";
import { TopBar as TopBarNuovo } from "@/components/auth/Nuovo/TopBarNuovo";
import { MascotSectionNuovo } from "@/components/auth/Nuovo/MascotSectionNuovo";
import { TopBar as TopBarYuverta } from "@/components/auth/Yuverta/TopBarYuverta";
import { MascotSectionYuverta } from "@/components/auth/Yuverta/MascotSectionYuverta";

export const LoginForm = () => {
  const school = detectSchool();

  const TopBar = school === 'yuverta' ? TopBarNuovo : TopBarYuverta;
  const MascotSection = school === 'yuverta' ? MascotSectionNuovo : MascotSectionYuverta;

  return (
    <>
      <TopBar />
      <Box style={{ paddingTop: '70px', minHeight: '100vh' }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          h={{ base: 'auto', md: 'calc(100vh - 70px)' }}
          w="100vw"
        >
          <Flex flex={{ base: 'none', md: 1 }} w={{ base: '100%', md: 'auto' }} style={{ minWidth: 0 }}>
            <MascotSection position="right" />
          </Flex>
          <Flex flex={{ base: 'none', md: 1 }} w={{ base: '100%', md: 'auto' }} style={{ minWidth: 0 }}>
            <LoginFormSection />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};