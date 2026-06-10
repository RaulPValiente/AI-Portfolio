import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss.svg";
import javaIcon from "../assets/icons/java.svg";
import springIcon from "../assets/icons/spring.svg";
import goIcon from "../assets/icons/go.svg";
import pythonIcon from "../assets/icons/python.svg";
import flaskIcon from "../assets/icons/flask.svg";
import sqlIcon from "../assets/icons/sql.svg";
import gptIcon from "../assets/icons/gpt.svg";
import opencodeIcon from "../assets/icons/opencode.svg";
import claudeIcon from "../assets/icons/claude.svg";
import geminiIcon from "../assets/icons/gemini.svg";
import cursorIcon from "../assets/icons/cursor.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import bitcoinIcon from "../assets/icons/bitcoin.svg";
import vscodeIcon from "../assets/icons/vscode.svg";
import intellijIcon from "../assets/icons/intellij.svg";
import solidityIcon from "../assets/icons/solidity.svg";

const skills = [
  {
    category: "FRONTEND",
    items: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "React", icon: reactIcon },
      { name: "TailwindCSS", icon: tailwindcssIcon },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Java", icon: javaIcon },
      { name: "Spring", icon: springIcon },
      { name: "Go", icon: goIcon },
      { name: "Python", icon: pythonIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "SQL", icon: sqlIcon },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "GPT", icon: gptIcon },
      { name: "OpenCode", icon: opencodeIcon },
      { name: "Claude", icon: claudeIcon },
      { name: "Gemini", icon: geminiIcon },
      { name: "Cursor", icon: cursorIcon },
    ],
  },
  {
    category: "OTHER",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Bitcoin", icon: bitcoinIcon },
      { name: "VSCode", icon: vscodeIcon },
      { name: "IntelliJ", icon: intellijIcon },
      { name: "Solidity", icon: solidityIcon },
    ],
  },
];

export default skills;
