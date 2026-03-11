export interface ToolConfig {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  placeholder: string;
  promptTemplate: string;
  icon: string;
  category: "student" | "writing";
  supportsPdf?: boolean;
  fields?: {
    name: string;
    label: string;
    type: "select" | "number";
    options?: { value: string; label: string }[];
    default?: string | number;
    min?: number;
    max?: number;
  }[];
  examples: { input: string; output: string }[];
  faqs: { question: string; answer: string }[];
}

export const tools: ToolConfig[] = [
  {
    slug: "essay-generator",
    title: "AI Essay Generator",
    description:
      "Generate well-structured essays on any topic instantly. Perfect for students who need inspiration, outlines, or complete essays.",
    metaDescription:
      "Free AI Essay Generator - Create well-structured essays on any topic in seconds. Get introductions, body paragraphs, and conclusions instantly.",
    placeholder: "Enter your essay topic (e.g., 'The impact of social media on education')",
    icon: "📝",
    category: "student",
    fields: [
      {
        name: "wordCount",
        label: "Word Count",
        type: "select",
        options: [
          { value: "200", label: "Short (200 words)" },
          { value: "400", label: "Medium (400 words)" },
          { value: "600", label: "Long (600 words)" },
        ],
        default: "400",
      },
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: [
          { value: "academic", label: "Academic" },
          { value: "casual", label: "Casual" },
          { value: "persuasive", label: "Persuasive" },
          { value: "descriptive", label: "Descriptive" },
        ],
        default: "academic",
      },
    ],
    promptTemplate:
      "Write a {wordCount}-word {tone} essay about: {input}. Include a clear introduction with a thesis statement, well-organized body paragraphs with supporting evidence, and a strong conclusion. Use proper paragraph formatting.",
    examples: [
      {
        input: "The impact of artificial intelligence on education",
        output:
          "Artificial intelligence is revolutionizing the educational landscape in unprecedented ways. From personalized learning platforms to automated grading systems, AI technologies are reshaping how students learn and how teachers teach...",
      },
      {
        input: "Climate change and its effects on biodiversity",
        output:
          "Climate change represents one of the most significant threats to global biodiversity in the 21st century. Rising temperatures, shifting weather patterns, and increasing ocean acidification are creating cascading effects...",
      },
    ],
    faqs: [
      {
        question: "Is this AI essay generator free?",
        answer:
          "Yes! You get 5 free generations per day. For unlimited access, check our Pro plan.",
      },
      {
        question: "Can I use these essays for school?",
        answer:
          "These essays are meant for inspiration and learning. We recommend using them as a starting point and adding your own research and voice.",
      },
      {
        question: "What topics can I write about?",
        answer:
          "You can generate essays on virtually any topic - science, history, literature, technology, social issues, and more.",
      },
    ],
  },
  {
    slug: "notes-summarizer",
    title: "AI Notes Summarizer",
    description:
      "Instantly summarize long notes, lectures, and textbook content into concise, easy-to-review summaries.",
    metaDescription:
      "Free AI Notes Summarizer - Turn long notes and lectures into concise summaries. Perfect for students studying for exams.",
    placeholder: "Paste your notes or lecture content here...",
    icon: "📋",
    category: "student",
    supportsPdf: true,
    fields: [
      {
        name: "format",
        label: "Summary Format",
        type: "select",
        options: [
          { value: "bullet points", label: "Bullet Points" },
          { value: "paragraph", label: "Paragraph" },
          { value: "outline", label: "Outline" },
        ],
        default: "bullet points",
      },
      {
        name: "length",
        label: "Summary Length",
        type: "select",
        options: [
          { value: "brief", label: "Brief" },
          { value: "medium", label: "Medium" },
          { value: "detailed", label: "Detailed" },
        ],
        default: "medium",
      },
    ],
    promptTemplate:
      "Summarize the following notes in {format} format. Make it {length} in length. Focus on key concepts, definitions, and important facts. Here are the notes:\n\n{input}",
    examples: [
      {
        input: "Long biology lecture notes about photosynthesis...",
        output:
          "Key Points:\n- Photosynthesis converts light energy into chemical energy\n- Occurs in chloroplasts using chlorophyll\n- Two stages: Light reactions and Calvin cycle\n- Light reactions produce ATP and NADPH\n- Calvin cycle fixes CO2 into glucose...",
      },
    ],
    faqs: [
      {
        question: "How long can my notes be?",
        answer:
          "You can paste notes up to several thousand words. The AI will extract the most important information.",
      },
      {
        question: "Does it work for all subjects?",
        answer:
          "Yes! The summarizer works for any subject - science, history, literature, math concepts, and more.",
      },
    ],
  },
  {
    slug: "homework-solver",
    title: "AI Homework Solver",
    description:
      "Get step-by-step explanations for homework problems across all subjects. Understand concepts, not just answers.",
    metaDescription:
      "Free AI Homework Solver - Get step-by-step explanations for any homework problem. Math, science, history, and more.",
    placeholder: "Type or paste your homework question here...",
    icon: "🎓",
    category: "student",
    supportsPdf: true,
    fields: [
      {
        name: "subject",
        label: "Subject",
        type: "select",
        options: [
          { value: "math", label: "Mathematics" },
          { value: "science", label: "Science" },
          { value: "history", label: "History" },
          { value: "english", label: "English" },
          { value: "other", label: "Other" },
        ],
        default: "math",
      },
    ],
    promptTemplate:
      "You are a helpful {subject} tutor. Solve and explain this homework problem step by step. Show your work clearly and explain the reasoning behind each step so the student can learn:\n\n{input}",
    examples: [
      {
        input: "Solve: 2x + 5 = 17",
        output:
          "Step 1: Subtract 5 from both sides\n2x + 5 - 5 = 17 - 5\n2x = 12\n\nStep 2: Divide both sides by 2\n2x/2 = 12/2\nx = 6\n\nVerification: 2(6) + 5 = 12 + 5 = 17 ✓",
      },
    ],
    faqs: [
      {
        question: "Will this do my homework for me?",
        answer:
          "This tool is designed to help you understand concepts by providing step-by-step explanations. Use it to learn, not to copy.",
      },
      {
        question: "What subjects are supported?",
        answer:
          "Math, science, history, English, and virtually any academic subject.",
      },
    ],
  },
  {
    slug: "email-writer",
    title: "AI Email Writer",
    description:
      "Generate professional emails in seconds. Perfect for students, job seekers, and professionals who need polished communication.",
    metaDescription:
      "Free AI Email Writer - Generate professional emails instantly. Perfect for job applications, professors, and business communication.",
    placeholder: "Describe the email you need (e.g., 'Email to professor requesting a deadline extension')",
    icon: "✉️",
    category: "writing",
    fields: [
      {
        name: "tone",
        label: "Tone",
        type: "select",
        options: [
          { value: "formal", label: "Formal" },
          { value: "professional", label: "Professional" },
          { value: "friendly", label: "Friendly" },
          { value: "casual", label: "Casual" },
        ],
        default: "professional",
      },
    ],
    promptTemplate:
      "Write a {tone} email for the following purpose. Include a clear subject line, proper greeting, well-structured body, and professional closing:\n\n{input}",
    examples: [
      {
        input: "Email to professor requesting deadline extension for research paper",
        output:
          "Subject: Request for Extension - Research Paper Due March 15\n\nDear Professor Smith,\n\nI hope this email finds you well. I am writing to respectfully request a brief extension on the research paper due March 15...",
      },
    ],
    faqs: [
      {
        question: "Can I customize the email after generating?",
        answer:
          "Absolutely! The generated email is a starting point. We recommend personalizing it with your specific details.",
      },
      {
        question: "Is it good for job application emails?",
        answer:
          "Yes! Select 'Formal' or 'Professional' tone for job-related emails.",
      },
    ],
  },
  {
    slug: "flashcard-generator",
    title: "AI Flashcard Generator",
    description:
      "Automatically create study flashcards from any topic or notes. Perfect for exam preparation and active recall practice.",
    metaDescription:
      "Free AI Flashcard Generator - Create study flashcards from any topic instantly. Perfect for exam prep and active recall.",
    placeholder: "Enter a topic or paste your study material...",
    icon: "🃏",
    category: "student",
    supportsPdf: true,
    fields: [
      {
        name: "count",
        label: "Number of Cards",
        type: "select",
        options: [
          { value: "5", label: "5 cards" },
          { value: "10", label: "10 cards" },
          { value: "15", label: "15 cards" },
        ],
        default: "10",
      },
      {
        name: "difficulty",
        label: "Difficulty",
        type: "select",
        options: [
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Intermediate" },
          { value: "advanced", label: "Advanced" },
        ],
        default: "intermediate",
      },
    ],
    promptTemplate:
      "Create {count} {difficulty}-level study flashcards about the following topic. Format each flashcard clearly with 'Q:' for the question and 'A:' for the answer. Make questions that test understanding, not just memorization:\n\n{input}",
    examples: [
      {
        input: "World War II key events",
        output:
          "Q: What event triggered the start of World War II in Europe?\nA: Germany's invasion of Poland on September 1, 1939.\n\nQ: What was D-Day and when did it occur?\nA: D-Day (June 6, 1944) was the Allied invasion of Normandy, France - the largest seaborne invasion in history...",
      },
    ],
    faqs: [
      {
        question: "Can I generate flashcards from my own notes?",
        answer:
          "Yes! Paste your study notes and the AI will create flashcards based on the key concepts.",
      },
      {
        question: "How should I use these flashcards?",
        answer:
          "Use spaced repetition - review cards at increasing intervals. Cover the answer, try to recall it, then check.",
      },
    ],
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((t) => t.slug === slug);
}

export function buildPrompt(
  tool: ToolConfig,
  input: string,
  fields: Record<string, string>
): string {
  let prompt = tool.promptTemplate.replace("{input}", input);
  for (const [key, value] of Object.entries(fields)) {
    prompt = prompt.replace(`{${key}}`, value);
  }
  return prompt;
}
