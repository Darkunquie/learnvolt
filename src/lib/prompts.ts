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
  // NEW: Extended SEO content
  longDescription?: string;
  benefits?: string[];
  useCases?: string[];
  targetKeywords?: string[];
}

export const tools: ToolConfig[] = [
  {
    slug: "essay-generator",
    title: "AI Essay Generator",
    description:
      "Generate well-structured essays on any topic instantly. Perfect for students who need inspiration, outlines, or complete essays.",
    metaDescription:
      "Free AI Essay Generator - Create well-structured essays on any topic in seconds. No signup required. Get introductions, body paragraphs, and conclusions instantly.",
    placeholder: "Enter your essay topic (e.g., 'The impact of social media on education')",
    icon: "📝",
    category: "student",
    targetKeywords: [
      "ai essay generator",
      "free essay generator",
      "essay writer ai",
      "essay generator for students",
      "ai essay writer free",
      "automatic essay generator",
      "essay generator no sign up",
    ],
    fields: [
      {
        name: "wordCount",
        label: "Word Count",
        type: "select",
        options: [
          { value: "200", label: "Short (200 words)" },
          { value: "400", label: "Medium (400 words)" },
          { value: "600", label: "Long (600 words)" },
          { value: "800", label: "Extended (800 words)" },
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
          { value: "argumentative", label: "Argumentative" },
        ],
        default: "academic",
      },
    ],
    promptTemplate:
      "Write a {wordCount}-word {tone} essay about: {input}. Include a clear introduction with a thesis statement, well-organized body paragraphs with supporting evidence, and a strong conclusion. Use proper paragraph formatting.",
    longDescription: `
Our AI Essay Generator is the fastest way to create well-written essays on any topic. Whether you're a high school student working on an assignment, a college student preparing a research paper, or anyone who needs help with writing, our tool delivers high-quality essays in seconds.

Unlike ChatGPT or other generic AI tools, our essay generator is specifically designed for academic writing. It understands essay structure, creates proper thesis statements, and organizes arguments logically. Simply enter your topic, choose your preferred length and tone, and get a complete essay ready for review.

The best part? It's completely free with no signup required. You can generate up to 5 essays per day without creating an account. For unlimited access, check out our Pro plan.
    `,
    benefits: [
      "Generate essays in under 30 seconds",
      "No signup or login required",
      "Proper academic structure with intro, body, and conclusion",
      "Choose from multiple tones and lengths",
      "Works for any topic or subject",
      "Free to use - 5 essays per day",
    ],
    useCases: [
      "High school assignments and homework",
      "College essays and research papers",
      "IELTS and TOEFL writing practice",
      "Getting started when you have writer's block",
      "Learning proper essay structure",
      "Creating outlines and first drafts",
    ],
    examples: [
      {
        input: "The impact of artificial intelligence on education",
        output:
          "Artificial intelligence is revolutionizing the educational landscape in unprecedented ways. From personalized learning platforms to automated grading systems, AI technologies are reshaping how students learn and how teachers teach.\n\nThe integration of AI in education offers numerous benefits. Adaptive learning systems can identify individual student weaknesses and adjust curriculum accordingly, ensuring no student is left behind. Virtual tutors powered by AI provide 24/7 assistance, answering questions and explaining concepts at any hour. Furthermore, AI-driven analytics help educators track student progress and identify at-risk learners before they fall too far behind.\n\nHowever, the rise of AI in education also raises important concerns. Questions about data privacy, the digital divide, and the potential replacement of human teachers must be addressed. Additionally, over-reliance on AI tools may impact students' critical thinking and problem-solving abilities.\n\nIn conclusion, while AI presents transformative opportunities for education, careful implementation is essential. By balancing technological innovation with human guidance, we can create educational experiences that prepare students for an AI-driven future while preserving the irreplaceable value of human mentorship.",
      },
      {
        input: "Climate change and its effects on biodiversity",
        output:
          "Climate change represents one of the most significant threats to global biodiversity in the 21st century. Rising temperatures, shifting weather patterns, and increasing ocean acidification are creating cascading effects throughout ecosystems worldwide.\n\nThe impacts on wildlife are already visible. Polar bears struggle to find food as Arctic ice melts, while coral reefs bleach and die in warming oceans. Migratory patterns are shifting as species search for suitable habitats, disrupting established ecological relationships. Scientists estimate that one million species face extinction within decades if current trends continue.\n\nThe loss of biodiversity has far-reaching consequences for humanity. Ecosystems provide essential services including food production, water purification, and carbon sequestration. The disappearance of pollinators threatens agricultural systems, while the loss of plant species eliminates potential sources of medicine.\n\nAddressing this crisis requires immediate and coordinated global action. Reducing greenhouse gas emissions, protecting natural habitats, and supporting conservation efforts are essential steps. By recognizing the interconnection between climate change and biodiversity loss, we can work toward solutions that protect both our planet's incredible diversity of life and our own future.",
      },
      {
        input: "The importance of mental health awareness in schools",
        output:
          "Mental health awareness in schools has become increasingly critical as students face unprecedented levels of stress, anxiety, and depression. Creating supportive educational environments that prioritize psychological well-being is no longer optional—it is essential for student success.\n\nThe statistics are alarming. Studies show that one in five students experiences a mental health condition, yet only a fraction receive adequate support. Academic pressure, social media comparison, and uncertain futures contribute to rising rates of anxiety and depression among young people. Without intervention, these issues can impact academic performance, relationships, and long-term health outcomes.\n\nSchools play a unique role in addressing this crisis. By integrating mental health education into curricula, training teachers to recognize warning signs, and providing access to counseling services, schools can reach students who might otherwise go without support. Programs that reduce stigma and encourage open conversations create environments where students feel safe seeking help.\n\nIn conclusion, prioritizing mental health awareness in schools is an investment in our children's futures. When students feel emotionally supported, they are better equipped to learn, grow, and become healthy adults. Schools must embrace their responsibility in fostering not just academic achievement, but holistic well-being.",
      },
    ],
    faqs: [
      {
        question: "Is this AI essay generator completely free?",
        answer:
          "Yes! You get 5 free essay generations per day with no signup required. Simply enter your topic and generate. For unlimited essays, you can upgrade to our Pro plan.",
      },
      {
        question: "Can I use these essays for school assignments?",
        answer:
          "These essays are designed to serve as inspiration, learning tools, and starting points. We recommend using them to understand essay structure, generate ideas, and create first drafts that you then personalize with your own research and voice. Always follow your school's academic integrity policies.",
      },
      {
        question: "What topics can I generate essays about?",
        answer:
          "You can generate essays on virtually any topic - science, history, literature, technology, social issues, current events, philosophy, and more. Our AI has been trained on diverse subjects and can adapt to academic, persuasive, descriptive, or argumentative styles.",
      },
      {
        question: "How long does it take to generate an essay?",
        answer:
          "Most essays are generated in 10-30 seconds depending on the length you select. Our AI works quickly to deliver quality content without long wait times.",
      },
      {
        question: "Is the generated content unique and plagiarism-free?",
        answer:
          "Yes, our AI generates original content for each request. However, we recommend running important essays through a plagiarism checker and adding your own insights to ensure uniqueness. The AI creates new text each time, but similar topics may produce structurally similar essays.",
      },
      {
        question: "Do I need to create an account to use the essay generator?",
        answer:
          "No account needed! You can start generating essays immediately. We believe in making AI tools accessible without barriers. Just visit the page and start creating.",
      },
      {
        question: "Can I choose the essay format and structure?",
        answer:
          "Yes! You can select the word count (200-800 words) and tone (academic, casual, persuasive, descriptive, or argumentative). The AI will structure the essay appropriately with introduction, body paragraphs, and conclusion.",
      },
      {
        question: "Is this better than using ChatGPT for essays?",
        answer:
          "Our essay generator is purpose-built for academic writing, while ChatGPT is a general-purpose AI. Our tool requires no login, offers preset academic formats, and is specifically optimized for essay structure. Many students find it faster and easier for essay-specific tasks.",
      },
    ],
  },
  {
    slug: "notes-summarizer",
    title: "AI Notes Summarizer",
    description:
      "Instantly summarize long notes, lectures, and textbook content into concise, easy-to-review summaries.",
    metaDescription:
      "Free AI Notes Summarizer - Turn long notes, lectures, and PDFs into concise summaries. Perfect for exam preparation. No signup required.",
    placeholder: "Paste your notes or lecture content here...",
    icon: "📋",
    category: "student",
    supportsPdf: true,
    targetKeywords: [
      "ai notes summarizer",
      "summarize notes online",
      "lecture summarizer",
      "notes summary generator",
      "pdf summarizer for students",
      "study notes summarizer",
      "ai summarizer free",
    ],
    fields: [
      {
        name: "format",
        label: "Summary Format",
        type: "select",
        options: [
          { value: "bullet points", label: "Bullet Points" },
          { value: "paragraph", label: "Paragraph" },
          { value: "outline", label: "Outline" },
          { value: "cornell notes", label: "Cornell Notes" },
        ],
        default: "bullet points",
      },
      {
        name: "length",
        label: "Summary Length",
        type: "select",
        options: [
          { value: "brief", label: "Brief (key points only)" },
          { value: "medium", label: "Medium" },
          { value: "detailed", label: "Detailed" },
        ],
        default: "medium",
      },
    ],
    promptTemplate:
      "Summarize the following notes in {format} format. Make it {length} in length. Focus on key concepts, definitions, and important facts. Organize information logically. Here are the notes:\n\n{input}",
    longDescription: `
Stop spending hours re-reading your notes! Our AI Notes Summarizer transforms lengthy lecture notes, textbook chapters, and study materials into clear, concise summaries that make studying efficient.

Whether you're preparing for exams, reviewing class material, or trying to understand complex topics, our summarizer extracts the most important information and presents it in an easy-to-digest format. You can even upload PDFs directly - perfect for summarizing textbook chapters or downloaded lecture slides.

Choose your preferred format: bullet points for quick review, paragraphs for flowing summaries, outlines for structured study, or Cornell notes format for active learning. Our AI identifies key concepts, definitions, and important relationships, helping you focus on what matters most.
    `,
    benefits: [
      "Summarize hours of notes in seconds",
      "Upload PDFs directly (up to 10MB)",
      "Multiple formats: bullets, paragraphs, outlines",
      "Perfect for exam preparation",
      "Identifies key concepts automatically",
      "No signup required",
    ],
    useCases: [
      "Preparing for exams and tests",
      "Reviewing lecture notes quickly",
      "Summarizing textbook chapters",
      "Creating study guides",
      "Understanding research papers",
      "Condensing meeting notes",
    ],
    examples: [
      {
        input: "Long biology lecture notes about photosynthesis covering light reactions, Calvin cycle, chloroplast structure, and energy conversion...",
        output:
          "**Key Points: Photosynthesis**\n\n• **Definition**: Process converting light energy → chemical energy (glucose)\n• **Location**: Occurs in chloroplasts, specifically in thylakoid membranes and stroma\n\n**Two Main Stages:**\n\n1. **Light Reactions** (Thylakoid membranes)\n   - Capture light energy using chlorophyll\n   - Split water molecules (H₂O → O₂ + H⁺)\n   - Produce ATP and NADPH\n   - Release oxygen as byproduct\n\n2. **Calvin Cycle** (Stroma)\n   - Uses ATP and NADPH from light reactions\n   - Fixes CO₂ into organic molecules\n   - Produces glucose (C₆H₁₂O₆)\n   - Also called 'dark reactions' (doesn't need light directly)\n\n**Overall Equation:**\n6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
      },
      {
        input: "History lecture about the causes of World War I including nationalism, imperialism, militarism, and alliance systems...",
        output:
          "**Causes of World War I - Summary**\n\n**MAIN Causes (Acronym: MANIA)**\n\n• **M - Militarism**: Arms race between European powers, especially Germany vs Britain. Countries built massive armies and navies.\n\n• **A - Alliances**: Two major alliance systems created tensions:\n  - Triple Alliance: Germany, Austria-Hungary, Italy\n  - Triple Entente: France, Russia, Britain\n\n• **N - Nationalism**: Intense pride in one's nation led to competition and conflict. Slavic nationalism in Balkans was especially volatile.\n\n• **I - Imperialism**: European powers competed for colonies in Africa and Asia, creating rivalries.\n\n• **A - Assassination**: Archduke Franz Ferdinand killed in Sarajevo (June 28, 1914) - the spark that ignited the war.\n\n**Key Takeaway**: WWI resulted from long-term tensions, not a single event. The assassination was the trigger, but underlying causes had been building for decades.",
      },
    ],
    faqs: [
      {
        question: "Can I upload PDF files to summarize?",
        answer:
          "Yes! Our Notes Summarizer accepts PDF uploads up to 10MB. Simply click the attach button or drag and drop your PDF. The AI will extract the text and create a summary. This works great for textbook chapters, lecture slides, and research papers.",
      },
      {
        question: "How long can my notes be?",
        answer:
          "You can paste up to 5,000 characters of text or upload PDFs up to 10MB. For very long documents, we recommend breaking them into sections for the best quality summaries.",
      },
      {
        question: "What subjects does the summarizer work for?",
        answer:
          "Our AI works for any subject - science, history, literature, math concepts, business, law, medicine, and more. It's trained to identify key information regardless of the topic.",
      },
      {
        question: "What's the difference between the summary formats?",
        answer:
          "Bullet Points: Quick, scannable list of key facts. Paragraph: Flowing text that connects ideas. Outline: Hierarchical structure with main topics and subtopics. Cornell Notes: Formatted with cues, notes, and summary sections for active studying.",
      },
      {
        question: "Is this free to use?",
        answer:
          "Yes! You get 5 free summaries per day. No account needed - just paste your notes and generate. For unlimited summaries, check out our Pro plan.",
      },
      {
        question: "How accurate are the summaries?",
        answer:
          "Our AI is designed to identify and preserve the most important information from your notes. However, we recommend reviewing summaries to ensure nothing critical was missed, especially for exam preparation.",
      },
    ],
  },
  {
    slug: "homework-solver",
    title: "AI Homework Solver",
    description:
      "Get step-by-step explanations for homework problems across all subjects. Understand concepts, not just answers.",
    metaDescription:
      "Free AI Homework Solver - Get step-by-step explanations for math, science, history & more. Learn concepts, not just answers. No signup required.",
    placeholder: "Type or paste your homework question here...",
    icon: "🎓",
    category: "student",
    supportsPdf: true,
    targetKeywords: [
      "ai homework solver",
      "homework helper ai",
      "solve my homework",
      "math homework solver",
      "homework solver free",
      "ai tutor free",
      "step by step homework help",
    ],
    fields: [
      {
        name: "subject",
        label: "Subject",
        type: "select",
        options: [
          { value: "math", label: "Mathematics" },
          { value: "physics", label: "Physics" },
          { value: "chemistry", label: "Chemistry" },
          { value: "biology", label: "Biology" },
          { value: "history", label: "History" },
          { value: "english", label: "English" },
          { value: "economics", label: "Economics" },
          { value: "other", label: "Other" },
        ],
        default: "math",
      },
    ],
    promptTemplate:
      "You are a helpful {subject} tutor. Solve and explain this homework problem step by step. Show your work clearly and explain the reasoning behind each step so the student can learn and understand the concept:\n\n{input}",
    longDescription: `
Stuck on homework? Our AI Homework Solver doesn't just give you answers - it teaches you how to solve problems step by step. Whether you're struggling with algebra, physics equations, or history questions, our AI tutor breaks down each problem so you actually understand the concepts.

Unlike other homework helpers, we focus on learning. Each solution includes clear explanations of why each step is taken, helping you master the material rather than just copy answers. This approach prepares you for tests and builds real understanding.

The solver works across all subjects: math, science, history, English, economics, and more. You can type your question or upload a PDF with problem sets. It's like having a patient tutor available 24/7.
    `,
    benefits: [
      "Step-by-step explanations, not just answers",
      "Works for all subjects and grade levels",
      "Upload PDFs with problem sets",
      "Available 24/7 - no waiting for a tutor",
      "Learn concepts to ace your tests",
      "Free to use with no signup",
    ],
    useCases: [
      "Solving math problems with explanations",
      "Understanding physics concepts",
      "Getting help with chemistry equations",
      "Answering history and social studies questions",
      "Checking your work before submitting",
      "Preparing for tests by understanding solutions",
    ],
    examples: [
      {
        input: "Solve: 2x + 5 = 17",
        output:
          "**Solution: Solving for x in 2x + 5 = 17**\n\n**Step 1: Isolate the term with x**\nWe need to get x alone. First, let's remove the +5 from the left side.\n\nSubtract 5 from both sides:\n2x + 5 - 5 = 17 - 5\n2x = 12\n\n**Step 2: Solve for x**\nNow we have 2x = 12. To find x, divide both sides by 2:\n2x ÷ 2 = 12 ÷ 2\nx = 6\n\n**Step 3: Verify the answer**\nLet's check by substituting x = 6 back into the original equation:\n2(6) + 5 = 12 + 5 = 17 ✓\n\n**Answer: x = 6**\n\n**Key Concept:** To solve linear equations, perform the same operation on both sides to isolate the variable. Always verify your answer by substituting it back.",
      },
      {
        input: "What caused the French Revolution?",
        output:
          "**Causes of the French Revolution (1789)**\n\n**1. Social Inequality (The Three Estates)**\n- First Estate (Clergy): ~1% of population, owned 10% of land, paid no taxes\n- Second Estate (Nobility): ~2% of population, paid few taxes\n- Third Estate (Everyone else): 97% of population, paid most taxes\n\n**2. Financial Crisis**\n- France was bankrupt from wars (including supporting American Revolution)\n- King Louis XVI's extravagant spending\n- Poor harvests caused bread prices to soar\n\n**3. Enlightenment Ideas**\n- Philosophers like Voltaire, Rousseau promoted ideas of equality and liberty\n- People questioned the divine right of kings\n- American Revolution showed change was possible\n\n**4. Weak Leadership**\n- Louis XVI was indecisive\n- Queen Marie Antoinette was unpopular (seen as extravagant)\n\n**5. Immediate Trigger**\n-召集 Estates-General in May 1789\n- Third Estate formed National Assembly\n- Storming of the Bastille (July 14, 1789)\n\n**Key Takeaway:** The revolution resulted from long-term inequality and financial problems, combined with new ideas about rights and a weak monarchy unable to implement reforms.",
      },
      {
        input: "Calculate the acceleration of a 5kg object with a force of 20N applied to it",
        output:
          "**Solution: Finding Acceleration Using Newton's Second Law**\n\n**Given Information:**\n- Mass (m) = 5 kg\n- Force (F) = 20 N\n- Find: Acceleration (a) = ?\n\n**Step 1: Identify the relevant formula**\nWe use Newton's Second Law of Motion:\n**F = ma** (Force equals mass times acceleration)\n\n**Step 2: Rearrange for acceleration**\nTo find acceleration, divide both sides by mass:\na = F ÷ m\n\n**Step 3: Substitute values**\na = 20 N ÷ 5 kg\na = 4 m/s²\n\n**Answer: The acceleration is 4 m/s²**\n\n**What this means:**\nThe object will increase its velocity by 4 meters per second every second. After 1 second, it's moving 4 m/s faster; after 2 seconds, 8 m/s faster, and so on.\n\n**Key Concept:** Newton's Second Law shows that acceleration is directly proportional to force and inversely proportional to mass. More force = more acceleration. More mass = less acceleration.",
      },
    ],
    faqs: [
      {
        question: "Will this do my homework for me?",
        answer:
          "Our tool provides step-by-step explanations to help you understand how to solve problems. It's designed to be a learning aid, like having a tutor explain concepts. We encourage using it to learn, not just to copy answers.",
      },
      {
        question: "What subjects are supported?",
        answer:
          "We support mathematics (algebra, geometry, calculus), physics, chemistry, biology, history, English, economics, and more. The AI adapts to different subjects and provides appropriate explanations.",
      },
      {
        question: "Can I upload a picture of my homework?",
        answer:
          "Currently, you can upload PDFs with typed problems. We're working on image recognition for handwritten problems. For now, you can type out the problem for best results.",
      },
      {
        question: "How detailed are the explanations?",
        answer:
          "We provide complete step-by-step breakdowns with explanations of why each step is taken. Our goal is to help you understand the concept so you can solve similar problems on your own.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes! You get 5 free solutions per day with no signup required. For unlimited access and additional features, check out our Pro plan.",
      },
      {
        question: "What grade levels does this work for?",
        answer:
          "Our AI can help with problems from middle school through college level. It adapts its explanations based on the complexity of the problem.",
      },
    ],
  },
  {
    slug: "email-writer",
    title: "AI Email Writer",
    description:
      "Generate professional emails in seconds. Perfect for students, job seekers, and professionals who need polished communication.",
    metaDescription:
      "Free AI Email Writer - Generate professional emails instantly. Perfect for job applications, professors, and business. No signup required.",
    placeholder: "Describe the email you need (e.g., 'Email to professor requesting a deadline extension')",
    icon: "✉️",
    category: "writing",
    targetKeywords: [
      "ai email writer",
      "email generator ai",
      "professional email writer",
      "email to professor",
      "job application email",
      "formal email generator",
      "email writer free",
    ],
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
          { value: "apologetic", label: "Apologetic" },
        ],
        default: "professional",
      },
    ],
    promptTemplate:
      "Write a {tone} email for the following purpose. Include a clear subject line, proper greeting, well-structured body, and professional closing. Make it concise but complete:\n\n{input}",
    longDescription: `
Writing professional emails is a crucial skill, but it can be time-consuming and stressful. Our AI Email Writer generates polished, well-structured emails in seconds, helping you communicate effectively without the hassle.

Whether you're emailing a professor about a deadline extension, applying for a job, responding to a colleague, or reaching out to a client, our tool crafts the perfect message. Simply describe what you need, choose your tone, and get a ready-to-send email complete with subject line and proper formatting.

Perfect for students who need to email professors, job seekers writing application emails, professionals handling business correspondence, or anyone who wants to improve their email communication.
    `,
    benefits: [
      "Generate professional emails in seconds",
      "Includes subject line and proper formatting",
      "Multiple tones for different situations",
      "Perfect for non-native English speakers",
      "No signup required",
      "Free to use daily",
    ],
    useCases: [
      "Emailing professors about extensions or questions",
      "Job application cover emails",
      "Follow-up emails after interviews",
      "Professional business correspondence",
      "Customer service responses",
      "Meeting requests and scheduling",
    ],
    examples: [
      {
        input: "Email to professor requesting deadline extension for research paper due to illness",
        output:
          "**Subject:** Request for Extension - Research Paper Due March 20\n\nDear Professor Johnson,\n\nI hope this email finds you well. I am writing to respectfully request a brief extension on the research paper originally due on March 20.\n\nUnfortunately, I have been unwell for the past few days and was unable to make the progress I had planned. I have medical documentation available if required.\n\nI am committed to submitting a quality paper and would greatly appreciate an extension until March 25. This additional time would allow me to complete the research and revisions necessary to meet the assignment requirements.\n\nI understand if this is not possible and am prepared to submit what I have by the original deadline if needed. Please let me know what would work best.\n\nThank you for considering my request. I appreciate your understanding.\n\nBest regards,\n[Your Name]\n[Student ID]\n[Course Name and Section]",
      },
      {
        input: "Follow-up email after job interview thanking the interviewer",
        output:
          "**Subject:** Thank You - Marketing Coordinator Interview\n\nDear Ms. Chen,\n\nThank you for taking the time to meet with me today regarding the Marketing Coordinator position at TechStart Inc.\n\nI truly enjoyed learning more about the role and the exciting projects your team is working on. Our conversation about the upcoming product launch particularly resonated with me, and I'm excited about the possibility of contributing to such innovative campaigns.\n\nAfter our discussion, I am even more confident that my experience in digital marketing and content strategy would be valuable to your team. I'm particularly drawn to TechStart's collaborative culture and commitment to creativity.\n\nPlease don't hesitate to reach out if you need any additional information. I look forward to hearing from you regarding the next steps.\n\nThank you again for this opportunity.\n\nBest regards,\n[Your Name]\n[Phone Number]\n[LinkedIn Profile]",
      },
    ],
    faqs: [
      {
        question: "Can I customize the email after generating?",
        answer:
          "Absolutely! The generated email is a starting point. We recommend personalizing it with specific details, names, and any additional context relevant to your situation.",
      },
      {
        question: "Is this good for job application emails?",
        answer:
          "Yes! Select 'Formal' or 'Professional' tone for job-related emails. Our AI creates well-structured emails that make a positive impression while remaining concise and appropriate.",
      },
      {
        question: "Can it write emails in other languages?",
        answer:
          "Currently, our tool generates emails in English. For other languages, you can use the generated email as a template and translate it.",
      },
      {
        question: "How do I choose the right tone?",
        answer:
          "Formal: For professors, executives, first contact. Professional: For colleagues, business partners. Friendly: For people you know well. Casual: For close colleagues or informal contexts. Apologetic: When you need to apologize or request understanding.",
      },
      {
        question: "Is this free to use?",
        answer:
          "Yes! Generate up to 5 emails per day for free with no signup. For unlimited emails, check out our Pro plan.",
      },
    ],
  },
  {
    slug: "flashcard-generator",
    title: "AI Flashcard Generator",
    description:
      "Automatically create study flashcards from any topic or notes. Perfect for exam preparation and active recall practice.",
    metaDescription:
      "Free AI Flashcard Generator - Create study flashcards from any topic instantly. Perfect for exam prep and active recall. No signup required.",
    placeholder: "Enter a topic or paste your study material...",
    icon: "🃏",
    category: "student",
    supportsPdf: true,
    targetKeywords: [
      "ai flashcard generator",
      "flashcard maker ai",
      "automatic flashcard generator",
      "study flashcards generator",
      "flashcard creator free",
      "make flashcards from notes",
      "anki card generator",
    ],
    fields: [
      {
        name: "count",
        label: "Number of Cards",
        type: "select",
        options: [
          { value: "5", label: "5 cards" },
          { value: "10", label: "10 cards" },
          { value: "15", label: "15 cards" },
          { value: "20", label: "20 cards" },
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
      "Create {count} {difficulty}-level study flashcards about the following topic. Format each flashcard clearly with 'Q:' for the question and 'A:' for the answer on separate lines. Make questions that test understanding and recall of key concepts. Include a mix of definition, concept, and application questions:\n\n{input}",
    longDescription: `
Flashcards are one of the most effective study methods, leveraging active recall and spaced repetition to boost memory retention. But creating flashcards manually is time-consuming. Our AI Flashcard Generator creates perfect study cards in seconds.

Simply enter your topic or paste your study notes, and our AI will identify key concepts, definitions, and important facts, transforming them into question-answer pairs. You can generate up to 20 cards at once and choose from beginner to advanced difficulty levels.

The generated flashcards are formatted for easy copying into apps like Anki, Quizlet, or for printing. Use them to prepare for exams, review lecture material, or learn new topics efficiently.
    `,
    benefits: [
      "Generate 5-20 flashcards in seconds",
      "Automatic identification of key concepts",
      "Multiple difficulty levels",
      "Upload PDFs to create cards from textbooks",
      "Easy to copy to Anki or Quizlet",
      "Free with no signup required",
    ],
    useCases: [
      "Exam preparation and test review",
      "Learning vocabulary and definitions",
      "Memorizing historical dates and events",
      "Studying scientific concepts and formulas",
      "Language learning",
      "Medical and legal terminology",
    ],
    examples: [
      {
        input: "World War II key events and dates",
        output:
          "Q: What event triggered the start of World War II in Europe?\nA: Germany's invasion of Poland on September 1, 1939.\n\nQ: What was D-Day and when did it occur?\nA: D-Day (June 6, 1944) was the Allied invasion of Normandy, France - the largest seaborne invasion in history, marking the beginning of the liberation of Western Europe.\n\nQ: What was the significance of the Battle of Stalingrad?\nA: The Battle of Stalingrad (1942-1943) was a turning point on the Eastern Front. Germany's defeat there marked the beginning of their retreat from the Soviet Union.\n\nQ: When and why did the United States enter World War II?\nA: The US entered WWII on December 8, 1941, the day after Japan's surprise attack on Pearl Harbor, Hawaii.\n\nQ: What was the Holocaust?\nA: The Holocaust was the systematic genocide of six million Jews by Nazi Germany, along with millions of others including Roma, disabled people, and political prisoners.\n\nQ: When and how did World War II end in Europe?\nA: V-E Day (Victory in Europe Day) was May 8, 1945, when Germany surrendered unconditionally to the Allied forces.\n\nQ: What event led to Japan's surrender and the end of WWII?\nA: The atomic bombings of Hiroshima (August 6, 1945) and Nagasaki (August 9, 1945) led to Japan's surrender on August 15, 1945 (V-J Day).\n\nQ: What was the Lend-Lease Act?\nA: A 1941 US program that provided military aid to Allied nations (especially Britain and USSR) before America officially entered the war.\n\nQ: Who were the three main Axis Powers?\nA: Germany (Hitler), Italy (Mussolini), and Japan (Emperor Hirohito/Tojo).\n\nQ: What was the Atlantic Charter?\nA: A 1941 agreement between Churchill and Roosevelt outlining Allied goals for the post-war world, including self-determination and free trade.",
      },
    ],
    faqs: [
      {
        question: "Can I generate flashcards from my own notes?",
        answer:
          "Yes! Paste your study notes or upload a PDF, and our AI will automatically identify key concepts and create flashcards based on your material.",
      },
      {
        question: "How should I use these flashcards?",
        answer:
          "For best results, use spaced repetition: review cards at increasing intervals (1 day, 3 days, 1 week, etc.). Cover the answer, try to recall it, then check. Apps like Anki automate this process.",
      },
      {
        question: "Can I export flashcards to Anki or Quizlet?",
        answer:
          "The flashcards are generated in a standard Q&A format that you can easily copy and paste into Anki, Quizlet, or any other flashcard app. We're working on direct export features.",
      },
      {
        question: "What makes good flashcards?",
        answer:
          "Our AI creates cards that test understanding, not just memorization. Questions are specific, answers are concise, and we include a mix of definitions, concepts, and applications.",
      },
      {
        question: "How many flashcards should I generate?",
        answer:
          "It depends on the topic complexity. For a chapter, 10-15 cards usually work well. For comprehensive exam review, you might want to generate cards from multiple sections.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes! Generate flashcards up to 5 times per day for free. No account needed. For unlimited generations, check out our Pro plan.",
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

export function getAllTools(): ToolConfig[] {
  return tools;
}

export function getToolsByCategory(category: "student" | "writing"): ToolConfig[] {
  return tools.filter((t) => t.category === category);
}
