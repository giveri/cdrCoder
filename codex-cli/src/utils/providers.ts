export const providers: Record<
  string,
  { name: string; baseURL: string; envKey: string }
> = {
  ollama: {
    name: "Ollama",
    baseURL: "http://localhost:11434/v1",
    envKey: "OLLAMA_API_KEY",
  },
};
