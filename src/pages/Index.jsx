import React, { useState, useEffect } from "react";
import { Box, Button, Heading, Text, VStack, Select, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Spinner, Image, Input } from "@chakra-ui/react";
import { FaBrain, FaRocket, FaUserMd, FaGoogle } from "react-icons/fa";

const templates = [
  { value: "Template 1", label: "Template 1" },
  { value: "Template 2", label: "Template 2" },
  { value: "Template 3", label: "Template 3" },
  { value: "Template 4", label: "Template 4" },
  { value: "Template 5", label: "Template 5" },
  { value: "Template 6", label: "Template 6" },
  { value: "Template 7", label: "Template 7" },
  { value: "Template 8", label: "Template 8" },
  { value: "Template 9", label: "Template 9" },
  { value: "Template 10", label: "Template 10" },
];

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [findings, setFindings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const handleFindingsChange = (e) => {
    setFindings(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    onOpen();

    const loadingPhrases = ["Enviando o tipo de exame e os achados para a LaudAI...", "Sintetizando descrições radiológicas...", "Entendendo as imagens e estruturas anatômicas relacionadas...", "Aplicando conhecimento médico especializado...", "Identificando achados relevantes...", "Correlacionando informações clínicas...", "Estruturando o laudo radiológico...", "Revisando a consistência do laudo...", "Otimizando a clareza e precisão do laudo...", "Finalizando a geração do laudo..."];

    for (const phrase of loadingPhrases) {
      setLoadingText(phrase);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    const response = await fetch("/api/generate-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ template: selectedTemplate, findings }),
    });
    const data = await response.json();

    setIsLoading(false);
    onClose();
  };

  const handleGoogleSignIn = () => {
    console.log("Initiate Google Sign-In process");
  };

  return (
    <Box>
      <Box as="nav" position="fixed" top={0} left={0} right={0} zIndex={999} bg="linear-gradient(45deg, #2980b9, #6dd5fa)" py={4} px={8} display="flex" justifyContent="space-between" alignItems="center" boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)" backdropFilter="blur(10px)">
        <Heading as="h1" size="lg" color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
          LaudAI
        </Heading>
        <Box>
          <Button as="a" href="#inicio" variant="ghost" color="white" mr={4}>
            Início
          </Button>
          <Button as="a" href="#como-funciona" variant="ghost" color="white" mr={4}>
            Por que escolher a LaudAI?
          </Button>
          <Button as="a" href="#faq" variant="ghost" color="white">
            FAQ
          </Button>
        </Box>
      </Box>

      <Box as="section" id="inicio" h="100vh" display="flex" alignItems="center" justifyContent="center" bgImage="https://images.unsplash.com/photo-1436262513933-a0b06755c784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdyZXklMjBjb2xvciUyMHBhbGV0dGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMzI3NTUwMHww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center">
        <Box textAlign="center" p={8} bg="rgba(255, 255, 255, 0.8)" borderRadius="md" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" backdropFilter="blur(10px)">
          <Heading as="h1" size="2xl" mb={4} color="gray.800" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
            O co-piloto para radiologistas eficientes
          </Heading>
          <Text fontSize="xl" mb={8} color="gray.600">
            Gere laudos radiológicos com rapidez e precisão usando a inteligência artificial
          </Text>
          <Button colorScheme="blue" size="lg" onClick={onOpen}>
            Gerar Laudo
          </Button>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="linear-gradient(to right, #6dd5fa, #2980b9)" color="white" fontSize="2xl" py={4} textAlign="center">
            Stunning Report Generator
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <VStack spacing={4}>
                <Spinner size="xl" />
                <Text>{loadingText}</Text>
              </VStack>
            ) : (
              <VStack spacing={6} align="stretch" p={5}>
                <Select placeholder="Select a template" value={selectedTemplate} onChange={handleTemplateChange} size="lg" borderColor="blue.500">
                  {templates.map((template) => (
                    <option key={template.value} value={template.value}>
                      {template.label}
                    </option>
                  ))}
                </Select>
                <Textarea placeholder="Enter findings" value={findings} onChange={handleFindingsChange} rows={6} borderColor="blue.500" />
                <Button type="submit" colorScheme="blue" size="lg" boxShadow="0px 0px 15px rgba(45, 55, 72, 0.4)" _hover={{ boxShadow: "0px 0px 20px rgba(45, 55, 72, 0.5)" }} onClick={handleSubmit}>
                  Generate Report
                </Button>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box as="section" id="como-funciona" py={20} bg="white">
        <Box maxW="6xl" mx="auto" px={8}>
          <Heading as="h2" size="xl" mb={12} textAlign="center" color="gray.800" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
            Por que escolher a LaudAI?
          </Heading>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={8}>
            <Box textAlign="center" p={8} bg="white" borderRadius="md" borderWidth={1} borderColor="gray.600">
              <FaRocket size={48} color="#3498db" mb={4} />
              <Heading as="h3" size="lg" mb={4} color="gray.800">
                Agilidade
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                Gere laudos radiológicos de forma rápida e eficiente com nossa inteligência artificial avançada.
              </Text>
            </Box>
            <Box textAlign="center" p={8} bg="white" borderRadius="md" borderWidth={1} borderColor="gray.600">
              <FaBrain size={48} color="#3498db" mb={4} />
              <Heading as="h3" size="lg" mb={4} color="gray.800">
                Precisão
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                Nosso sistema de IA foi treinado com milhares de exames e laudos para fornecer resultados precisos e confiáveis.
              </Text>
            </Box>
            <Box textAlign="center" p={8} bg="white" borderRadius="md" borderWidth={1} borderColor="gray.600">
              <FaUserMd size={48} color="#3498db" mb={4} />
              <Heading as="h3" size="lg" mb={4} color="gray.800">
                Foco no Radiologista
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                Desenvolvido com o radiologista em mente, oferecendo uma experiência intuitiva e personalizável.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box as="section" id="faq" py={20} bg="white">
        <Box maxW="3xl" mx="auto" px={8}>
          <Heading as="h2" size="xl" mb={12} textAlign="center" color="gray.800" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
            Perguntas Frequentes
          </Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="lg" mb={2} color="gray.800">
                Como a LaudAI funciona?
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                A LaudAI utiliza inteligência artificial avançada para analisar os achados do exame e gerar um laudo radiológico completo e estruturado. Basta fornecer o tipo de exame e os achados relevantes, e a LaudAI fará o resto.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2} color="gray.800">
                O que é LaudAI?
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                LaudAI é uma ferramenta inovadora desenvolvida para auxiliar radiologistas, utilizando inteligência artificial para otimizar diagnósticos e reduzir a carga de trabalho, visando principalmente a redução de burnout entre profissionais da área como missão de existência.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2} color="gray.800">
                O LaudAI está aberto para uso?
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                Sim, atualmente, o LaudAI está aberto e acessível para radiologistas. Nosso objetivo é fornecer suporte imediato à comunidade médica, aliviando sobrecargas de trabalho e contribuindo para a saúde mental dos profissionais.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2} color="gray.800">
                Haverá uma versão paga do LaudAI?
              </Heading>
              <Text color="gray.600" opacity={0.8}>
                Sabemos que seu tempo é valioso e que você precisa de ferramentas que se adaptem à sua rotina, e não o contrário. É por isso que estamos finalizando o desenvolvimento de uma solução intuitiva, personalizável e que se integra perfeitamente ao seu dia a dia. Com recursos como reconhecimento de voz, modelos adaptáveis e uma interface clean e objetiva, além de inúmeras ferramentas de IA, você terá em mãos uma ferramenta poderosa e ao mesmo tempo amigável. Simplifique seu trabalho e eleve a qualidade dos seus laudos com uma solução criada especialmente para atender às necessidades únicas do radiologista moderno.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>

      <Box as="footer" py={8} bg="linear-gradient(45deg, #2980b9, #6dd5fa)" display="flex" flexDirection="column" alignItems="center">
        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleGoogleSignIn}>
          Sign in with Google
        </Button>
        <Box maxW="6xl" mx="auto" px={8} display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h4" size="md" color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
            LaudAI
          </Heading>
          <Box>
            <Button as="a" href="/privacy" variant="ghost" color="white" mr={4}>
              Política de Privacidade
            </Button>
            <Button as="a" href="/services" variant="ghost" color="white">
              Termos de Serviço
            </Button>
          </Box>
          <Box>
            <Button as="a" href="#" variant="ghost" color="white" mr={2}>
              <Image src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMGljb258ZW58MHx8fHwxNzEzMjc1NTAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Facebook" boxSize={6} />
            </Button>
            <Button as="a" href="#" variant="ghost" color="white" mr={2}>
              <Image src="https://images.unsplash.com/photo-1611605698335-8b1569810432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0d2l0dGVyJTIwaWNvbnxlbnwwfHx8fDE3MTMyNzU1MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Twitter" boxSize={6} />
            </Button>
            <Button as="a" href="#" variant="ghost" color="white" mr={2}>
              <Image src="https://images.unsplash.com/photo-1611262588024-d12430b98920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBpY29ufGVufDB8fHx8MTcxMzI3NTUwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Instagram" boxSize={6} />
            </Button>
            <Button as="a" href="https://www.linkedin.com/in/natanparaiso/" target="_blank" variant="ghost" color="white">
              <Image src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5rZWRpbiUyMGljb258ZW58MHx8fHwxNzEzMjc1NTAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="LinkedIn" boxSize={6} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Quick Reporting Tools</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Enter report body" />
              <Button colorScheme="blue">Send as 'exame'</Button>
              <Textarea placeholder="Describe findings" rows={4} />
              <Button colorScheme="blue">Describe Findings</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
