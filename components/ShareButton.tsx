'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  excerpt: string;
  url: string;
}

export default function ShareButton({ title, excerpt, url }: ShareButtonProps) {
  const handleShare = () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: shareUrl,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      if (shareUrl) {
        navigator.clipboard.writeText(shareUrl);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center px-4 py-2 bg-cosmic-600 text-white rounded-lg hover:bg-cosmic-700 transition-colors"
    >
      <Share2 className="w-4 h-4 mr-2" />
      共有
    </button>
  );
}