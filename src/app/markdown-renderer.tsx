"use client";

import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface MarkdownRendererProps {
  content: string;
  streaming?: boolean;
}

export const MarkdownRenderer = memo(function MarkdownRenderer({
  content,
  streaming = false,
}: MarkdownRendererProps) {
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <div>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}  />
      </div>
      {streaming && <span className="animate-pulse text-orange-500">▊</span>}
    </div>
  );
});
