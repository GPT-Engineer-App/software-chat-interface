import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, IconButton, Avatar } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: messages.length,
      text: input,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate a response from the "agent"
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 1,
        text: "This is a simulated response from the agent.",
        sender: "agent",
      };
      setMessages((prevMessages) => [...prevMessages, agentMessage]);
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid #e2e8f0" borderRadius="md" padding={4}>
          {messages.map((message) => (
            <HStack key={message.id} justifyContent={message.sender === "user" ? "flex-end" : "flex-start"} marginY={2}>
              {message.sender === "agent" && <Avatar name="Agent" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZ2VudCUyMGF2YXRhcnxlbnwwfHx8fDE3MTY0NjE1ODh8MA&ixlib=rb-4.0.3&q=80&w=1080" />}
              <Box bg={message.sender === "user" ? "blue.500" : "gray.200"} color={message.sender === "user" ? "white" : "black"} borderRadius="md" padding={3} maxWidth="70%">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "user" && <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNjQ0MDM5Nnww&ixlib=rb-4.0.3&q=80&w=1080" />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
