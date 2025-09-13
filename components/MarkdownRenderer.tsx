'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import { Components } from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';

// カスタムコンポーネント
const components: Components = {
  // 見出し
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-6 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
      {children}
    </h4>
  ),
  
  // 段落
  p: ({ children }) => (
    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-100 mb-6">
      {children}
    </p>
  ),
  
  // リスト
  ul: ({ children }) => (
    <ul className="text-lg text-gray-700 dark:text-gray-100 my-6 space-y-2 list-disc ml-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-lg text-gray-700 dark:text-gray-100 my-6 space-y-2 list-decimal ml-6">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-700 dark:text-gray-100 leading-relaxed">
      {children}
    </li>
  ),
  
  // リンク
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    const isInternal = href?.startsWith('/') || href?.startsWith('#');
    
    if (isInternal) {
      return (
        <Link 
          href={href || '#'} 
          className="text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 underline decoration-2 underline-offset-2"
        >
          {children}
        </Link>
      );
    }
    
    return (
      <a 
        href={href} 
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 underline decoration-2 underline-offset-2"
      >
        {children}
      </a>
    );
  },
  
  // 強調
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900 dark:text-white">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700 dark:text-gray-100">
      {children}
    </em>
  ),
  
  // コード
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: ({ inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code 
          className="bg-gray-100 dark:bg-gray-800 text-stellar-600 dark:text-stellar-400 px-2 py-1 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }
    
    return (
      <code 
        className={`${className} block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg my-8 overflow-x-auto font-mono text-sm leading-relaxed`}
        {...props}
      >
        {children}
      </code>
    );
  },
  
  // 引用
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-cosmic-500 bg-cosmic-50/50 dark:bg-cosmic-900/20 pl-6 py-4 my-8 italic text-gray-700 dark:text-gray-100">
      {children}
    </blockquote>
  ),
  
  // テーブル
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold p-3 border border-gray-300 dark:border-gray-600 text-left">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="p-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100">
      {children}
    </td>
  ),
  
  // 水平線
  hr: () => (
    <hr className="border-gray-300 dark:border-gray-600 my-12" />
  ),
  
  // 画像
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: ({ src, alt }: any) => {
    if (!src || typeof src !== 'string') return null;
    
    return (
      <div className="my-8 flex justify-center">
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={600}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    );
  },
  
  // チェックボックス（GitHub Flavored Markdown）
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: ({ type, checked, disabled }: any) => {
    if (type === 'checkbox') {
      return (
        <input 
          type="checkbox" 
          checked={checked}
          disabled={disabled}
          className="mr-2 accent-cosmic-600"
          readOnly
        />
      );
    }
    return null;
  }
};

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-xl max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}