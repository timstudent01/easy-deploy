export const repoUrl = 'https://github.com/timstudent01/codex-mobile-chat'

export const features = [
  {
    title: 'Mobile-First Chat UI',
    description:
      'A clean ChatGPT-like experience optimized for phone screens, while still feeling natural on desktop.',
  },
  {
    title: 'Local Session Browser',
    description:
      'Reads from ~/.codex/session_index.jsonl so you can continue any existing Codex thread instantly.',
  },
  {
    title: 'Real-Time Streaming',
    description:
      'NDJSON streaming endpoint keeps the conversation feeling live with status, chunks, and completion events.',
  },
  {
    title: 'New Session from UI',
    description:
      'Create fresh sessions from the browser without dropping to terminal commands.',
  },
  {
    title: 'Image Upload Support',
    description:
      'Share screenshots and reference images directly in chat with in-thread preview.',
  },
  {
    title: 'Built for Self-Hosted Workflows',
    description:
      'Bun + Hono stack with straightforward deployment options for private network access.',
  },
]

export const plans = [
  {
    name: 'Starter',
    price: 'Free',
    detail: 'For personal use and local experimentation.',
    points: ['1 local instance', 'Basic chat history', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$12/mo',
    detail: 'For solo builders and power users.',
    points: [
      'Unlimited sessions',
      'Advanced stream monitoring',
      'Priority issue response',
    ],
    highlight: true,
  },
  {
    name: 'Team',
    price: '$39/mo',
    detail: 'For small teams running shared workflows.',
    points: [
      'Multi-user workspace guidelines',
      'Deployment playbooks',
      'Migration and onboarding support',
    ],
  },
]

export const teamMembers = [
  {
    name: 'Tim Chen',
    role: 'Founder & Product Engineer',
    bio: 'Focuses on practical AI tooling that shortens feedback loops for local development teams.',
  },
  {
    name: 'Avery Lin',
    role: 'Frontend Experience',
    bio: 'Designs mobile-first interfaces that stay fast, clear, and easy to adopt.',
  },
  {
    name: 'Noah Wu',
    role: 'Infrastructure',
    bio: 'Builds reliable self-hosted deployment paths and secure networking guidance.',
  },
]
