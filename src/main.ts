import './style.css';

interface Command {
  description: string;
  execute: () => string;
}

const commands: Record<string, Command> = {
  help: {
    description: 'Show available commands',
    execute: () => {
      const commandList = Object.entries(commands)
        .map(([name, cmd]) => `  <span class="command">${name.padEnd(12)}</span> ${cmd.description}`)
        .join('\n');
      return `<div class="section-header">Available Commands:</div>\n${commandList}`;
    },
  },

  about: {
    description: 'Learn more about me',
    execute: () => `
<div class="section-header">$ whoami</div>
<div class="indent">
  Hi! I'm <span class="highlight">Ryan Rushton</span>, a <span class="info">Staff Software Engineer at Canva</span>.

  I specialize in <span class="highlight">frontend engineering</span> but work fullstack on
  <span class="info">generative AI systems</span>, building tools that empower millions of
  designers worldwide.

  I'm passionate about creating elegant, performant user experiences and
  contributing to open source projects.
</div>
    `.trim(),
  },

  skills: {
    description: 'View technical skills',
    execute: () => `
<div class="section-header">$ ls -la ~/skills</div>
<div class="indent">
  <span class="info">Languages:</span>
  TypeScript, JavaScript, Python, Java

  <span class="info">Frontend:</span>
  React, Next.js, Redux, Vite, HTML/CSS, Web Performance

  <span class="info">Backend:</span>
  Node.js, GraphQL, REST APIs, Microservices

  <span class="info">AI/ML:</span>
  Generative AI Systems, LLM Integration, Prompt Engineering

  <span class="info">Tools & Cloud:</span>
  Git, Docker, AWS, CI/CD, Monitoring & Observability
</div>
    `.trim(),
  },

  experience: {
    description: 'Show work experience',
    execute: () => `
<div class="section-header">$ git log --all --oneline --graph</div>
<div class="indent">
  <span class="highlight">Canva</span> — Staff Software Engineer
  <span class="success">●</span> May 2025 - Present | <span class="info">Canva Code</span>
      Building AI-powered code generation tools

  <span class="success">●</span> Oct 2022 - May 2025 | <span class="info">Magic Design & Design Generation</span>
      Generative AI systems for design automation

  <span class="success">●</span> Apr 2021 - Oct 2022 | <span class="info">Search</span>
      Senior Frontend Engineer, search experience & discovery

  <span class="highlight">Previous Experience</span>
  <span class="success">●</span> Orion Health — Healthcare software
  <span class="success">●</span> Australian Institute of Sport — Sports technology
</div>
    `.trim(),
  },

  contact: {
    description: 'Get in touch',
    execute: () => `
<div class="section-header">$ cat ~/contact.txt</div>
<div class="indent">
  <span class="info">GitHub:</span>   <a href="https://github.com/ryan-rushton" target="_blank" class="link">github.com/ryan-rushton</a>
  <span class="info">Email:</span>    <a href="mailto:ryan.rushton79@gmail.com" class="link">ryan.rushton79@gmail.com</a>
  <span class="info">LinkedIn:</span> <a href="https://linkedin.com/in/ryan-rushton" target="_blank" class="link">linkedin.com/in/ryan-rushton</a>
</div>
    `.trim(),
  },

  projects: {
    description: 'View notable projects',
    execute: () => `
<div class="section-header">$ tree ~/projects -L 2</div>
<div class="indent">
  <span class="success">├──</span> <span class="highlight">Destiny Item Manager</span>
  <span class="success">│   └──</span> Major contributor to <a href="https://github.com/DestinyItemManager/DIM" target="_blank" class="link">DIM</a>
  <span class="success">│   └──</span> Loadout optimization & management features
  <span class="success">│   └──</span> Used by millions of Destiny 2 players

  <span class="success">├──</span> <span class="highlight">Terminal Portfolio</span>
  <span class="success">│   └──</span> This site! Built with Vite + TypeScript

  <span class="success">└──</span> More on <a href="https://github.com/ryan-rushton" target="_blank" class="link">github.com/ryan-rushton</a>
</div>
    `.trim(),
  },

  clear: {
    description: 'Clear the terminal',
    execute: () => {
      const content = document.getElementById('terminal-content');
      if (content) content.innerHTML = '';
      return '';
    },
  },

  theme: {
    description: 'Toggle terminal theme (coming soon)',
    execute: () => '<span class="warning">⚠ Feature coming soon!</span>',
  },

  banner: {
    description: 'Show welcome banner',
    execute: () => getBanner(),
  },
};

function getBanner(): string {
  return `
<pre class="ascii-art">
 ____                    ____            _     _
|  _ \\ _   _  __ _ _ __ |  _ \\ _   _ ___| |__ | |_ ___  _ __
| |_) | | | |/ _\` | '_ \\| |_) | | | / __| '_ \\| __/ _ \\| '_ \\
|  _ <| |_| | (_| | | | |  _ <| |_| \\__ \\ | | | || (_) | | | |
|_| \\_\\\\__, |\\__,_|_| |_|_| \\_\\\\__,_|___/_| |_|\\__\\___/|_| |_|
       |___/
</pre>
<div style="margin-bottom: 16px;">
  Welcome to my terminal portfolio! 👋

  Type <span class="command">help</span> to see available commands.
  Type <span class="command">about</span> to learn more about me.
</div>
  `.trim();
}

function addLine(content: string, className: string = ''): void {
  const terminalContent = document.getElementById('terminal-content');
  if (!terminalContent) return;

  const line = document.createElement('div');
  line.className = `line ${className}`;
  line.innerHTML = content;
  terminalContent.appendChild(line);

  // Scroll to bottom
  const terminalBody = document.querySelector('.terminal-body');
  if (terminalBody) {
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

function addPromptLine(input: string): void {
  if (input.trim()) {
    addLine(
      `<span class="prompt">ryan@rushton</span> <span class="command">${escapeHtml(input)}</span>`
    );
  }
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function executeCommand(input: string): void {
  const trimmedInput = input.trim().toLowerCase();

  if (!trimmedInput) return;

  addPromptLine(input);

  if (trimmedInput in commands) {
    const output = commands[trimmedInput].execute();
    if (output) {
      addLine(output);
    }
  } else {
    addLine(
      `<span class="error">Command not found: ${escapeHtml(trimmedInput)}</span>\nType <span class="command">help</span> for available commands.`
    );
  }
}

function updatePrompt(): void {
  const promptSpan = document.querySelector('.input-line .prompt');
  if (promptSpan) {
    promptSpan.innerHTML = '<span style="color: var(--color-cyan); font-weight: 500;">ryan@rushton</span>';
  }
}

function init(): void {
  const input = document.getElementById('terminal-input') as HTMLInputElement;

  if (!input) return;

  // Show welcome banner
  addLine(getBanner());

  // Update the prompt
  updatePrompt();

  // Handle input
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = input.value;
      executeCommand(value);
      input.value = '';
    }
  });

  // Keep input focused
  document.addEventListener('click', () => {
    input.focus();
  });

  // Handle tab completion (basic)
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const value = input.value.toLowerCase();
      if (value) {
        const matches = Object.keys(commands).filter((cmd) => cmd.startsWith(value));
        if (matches.length === 1) {
          input.value = matches[0];
        }
      }
    }
  });

  input.focus();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
