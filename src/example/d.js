
const d = `
//普通字符串
\`In JavaScript '\n' is a line-feed.\`

// 多行字符串

\`In JavaScript this is
 not legal.\`

console.log(\`string text line 1
 string text line 2\`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
\`Hello \${name}, how are you \${time}?\`

`.trim();


export default d;