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
  Hi! I'm <span class="highlight">Ryan Rushton</span>, a <span class="info">fullstack software engineer</span>.

  I love building elegant solutions to complex problems and working with
  modern technologies across the entire stack.
</div>
    `.trim(),
  },

  skills: {
    description: 'View technical skills',
    execute: () => `
<div class="section-header">$ ls -la ~/skills</div>
<div class="indent">
  <span class="info">Languages:</span>
  TypeScript, JavaScript, Python, Java, Go

  <span class="info">Frontend:</span>
  React, Next.js, Vue, Vite, HTML/CSS

  <span class="info">Backend:</span>
  Node.js, Express, FastAPI, Spring Boot

  <span class="info">Tools & Others:</span>
  Git, Docker, AWS, PostgreSQL, MongoDB
</div>
    `.trim(),
  },

  experience: {
    description: 'Show work experience',
    execute: () => `
<div class="section-header">$ git log --all --oneline</div>
<div class="indent">
  <span class="success">●</span> Senior Software Engineer
  <span class="success">●</span> Full Stack Development
  <span class="success">●</span> Team Leadership & Mentoring
  <span class="success">●</span> System Architecture & Design
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
<div class="section-header">$ tree ~/projects -L 1</div>
<div class="indent">
  <span class="success">├──</span> Portfolio Website (You are here!)
  <span class="success">├──</span> Open Source Contributions
  <span class="success">├──</span> Personal Tools & Scripts
  <span class="success">└──</span> More on <a href="https://github.com/ryan-rushton" target="_blank" class="link">GitHub</a>
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
