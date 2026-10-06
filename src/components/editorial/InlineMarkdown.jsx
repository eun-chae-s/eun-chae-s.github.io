import ReactMarkdown from "react-markdown";

export function InlineMarkdown({ children }) {
  return (
    <ReactMarkdown
      allowedElements={["em", "strong"]}
      unwrapDisallowed
      components={{ p: ({ children: content }) => content }}
    >
      {children}
    </ReactMarkdown>
  );
}
