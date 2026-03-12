function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Please add it to your .env.local file.`
    );
  }
  return value;
}

export const env = {
  OPENAI_API_KEY: requireEnv("OPENAI_API_KEY"),
} as const;
