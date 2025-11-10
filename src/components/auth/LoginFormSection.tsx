import {
  Box,
  Divider,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Button,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";

type TLoginInputs = {
  username: string;
  password: string;
};

const initialValues: TLoginInputs = {
  username: "",
  password: "",
};

export const LoginFormSection = () => {
  const form = useForm({
    initialValues,
    validate: {
      username: (value) => (!value ? "Email is required" : null),
      password: (value) => (!value ? "Password is required" : null),
    },
  });

  const handleSubmit = (values: TLoginInputs) => {
    console.log("Login attempt:", values);
    alert("This is a mockup - no actual login functionality");
  };

  return (
    <Flex
      direction="column"
      flex={1}
      justify="space-between"
      px={{ base: "xs", sm: "md" }}
      style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}
    >
      <Flex direction="column" flex={1}>
        <Flex justify="center" flex={1} align="center">
          <Box w={{ base: "100%", sm: 420 }}>
            <Paper shadow="xs" p="xl" radius="md">
              <Text
                size="xl"
                fw={700}
                mb="xs"
                style={{
                  fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                  fontSize: '24px',
                  textAlign: 'center',
                }}
              >
                Inloggen
              </Text>
              <Text
                size="sm"
                mb="xl"
                style={{
                  fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                  textAlign: 'center',
                  color: '#000000',
                }}
              >
                Student of docent? Beide kunnen hier aanmelden
              </Text>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Flex direction="column" gap="md">
                  <TextInput
                    label="E-mail"
                    placeholder="naam@gmail.com"
                    {...form.getInputProps("username")}
                    styles={{
                      label: {
                        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                        fontWeight: 500,
                        marginBottom: '8px',
                      },
                      input: {
                        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                      },
                    }}
                  />
                  
                  <Flex direction="column">
                    <PasswordInput
                      label="Wachtwoord"
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                      {...form.getInputProps("password")}
                      styles={{
                        label: {
                          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                          fontWeight: 500,
                          marginBottom: '8px',
                        },
                        input: {
                          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                        },
                      }}
                    />
                    <Text
                      component="a"
                      href="#"
                      c="orange"
                      size="sm"
                      mt="xs"
                      style={{ 
                        textAlign: 'right',
                        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                      }}
                    >
                      Wachtwoord vergeten?
                    </Text>
                  </Flex>
                </Flex>

                <Button 
                  type="submit" 
                  fullWidth 
                  mt="xl"
                  size="md"
                  color="blue"
                  style={{ 
                    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Inloggen
                </Button>
              </form>
            </Paper>
          </Box>
        </Flex>
      </Flex>
      
      <LoginBottomSection />
    </Flex>
  );
};

const LoginBottomSection = () => (
  <Flex
    justify="center"
    py="xl"
    direction={{ base: "column", sm: "row" }}
    align="center"
    gap={{ base: 3, sm: 0 }}
  >
    <Text 
      fw={500} 
      size="xs" 
      component="a" 
      href="#"
      style={{ 
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      Gebruikersvoorwaarden
    </Text>
    <Divider orientation="vertical" mx={{ base: "xs", sm: "md" }} />
    <Text 
      fw={500} 
      size="xs" 
      component="a" 
      href="#"
      style={{ 
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      Privacybeleid
    </Text>
    <Divider orientation="vertical" mx={{ base: "xs", sm: "md" }} />
    <Text 
      fw={500} 
      size="xs" 
      component="a" 
      href="#"
      style={{ 
        fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      }}
    >
      Contact
    </Text>
  </Flex>
);