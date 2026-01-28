// Libraries
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CardExample({
  title,
  description,
  code,
  codeDescription,
}) {
  return (
    <div className="card-example">
      <h4>{title}</h4>
      <span>{description}</span>
      <span>Ejemplo:</span>
      <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
      <span>{codeDescription}</span>
    </div>
  );
}
