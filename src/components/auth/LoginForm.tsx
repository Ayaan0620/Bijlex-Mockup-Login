import { Flex, Box } from "@mantine/core";
import { LoginFormSection } from "@/components/auth/LoginFormSection";
import { detectSchool } from "@/utils/schoolDetection";
import { TopBar as TopBarNuovo } from "@/components/auth/Nuovo/TopBarNuovo";
import { MascotSectionNuovo } from "@/components/auth/Nuovo/MascotSectionNuovo";
import { TopBar as TopBarYuverta } from "@/components/auth/Yuverta/TopBarYuverta";
import { MascotSectionYuverta } from "@/components/auth/Yuverta/MascotSectionYuverta";
import { TopBarSchoolaanzee } from "@/components/auth/Schoolaanzee/TopBarSchoolaanzee";
import { MascotSectionSchoolaanzee } from "@/components/auth/Schoolaanzee/MascotSectionSchoolaanzee";
import { TopBar as TopBarMa } from "@/components/auth/MA/TopBarMa";
import { MascotSectionMaWeb } from "@/components/auth/MA/MascotSectionMa";
import { TopBarCasparus } from "@/components/auth/casparus/TopBarCasparus";
import { MascotSectionCasparus } from "@/components/auth/casparus/MascotSectionCasparus";
import { MascotSectionVierTaal } from "@/components/auth/VierTaal/MascotSectionVierTaal";
import TopBarVierTaal from "./VierTaal/TopBarVierTaal";
import { TopBarSintBonifatius } from "@/components/auth/SintBonifatius/TopBarSintBonifatiusCollege";
import { MascotSectionSintBonifatiusCollege } from "@/components/auth/SintBonifatius/SintBonifatiusCollege";

export const LoginForm = () => {
  const school = detectSchool();

  let TopBar, MascotSection;

  if (school === 'yuverta') {
    TopBar = TopBarYuverta;
    MascotSection = MascotSectionYuverta;
  } else if (school === 'schoolanzee') {
    TopBar = TopBarSchoolaanzee;
    MascotSection = MascotSectionSchoolaanzee;
  } else if (school === 'nuovo') {
    TopBar = TopBarNuovo;
    MascotSection = MascotSectionNuovo;
  } else if (school === 'ma') {
    TopBar = TopBarMa;
    MascotSection = MascotSectionMaWeb;
  } else if (school === 'casparus') {
    TopBar = TopBarCasparus;
    MascotSection = MascotSectionCasparus;
  } else if (school === 'viertaal') {
    TopBar = TopBarVierTaal;
    MascotSection = MascotSectionVierTaal;
  } else if (school === 'stbonifatius') {
    TopBar = TopBarSintBonifatius;
    MascotSection = MascotSectionSintBonifatiusCollege;
  } else {
    TopBar = TopBarCasparus;
    MascotSection = MascotSectionCasparus;
  }

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