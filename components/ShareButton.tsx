'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  excerpt: string;
  url: string;
}

export default function ShareButton({ title, excerpt, url }: ShareButtonProps) {
  const handleShare = async () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({
          title,
          text: excerpt,
          url: shareUrl,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        if (typeof navigator !== 'undefined' && navigator.clipboard && shareUrl) {
          await navigator.clipboard.writeText(shareUrl);
          alert('URLをクリップボードにコピーしました！');
        } else {
          // Final fallback - create a temporary input element
          const tempInput = document.createElement('input');
          tempInput.value = shareUrl;
          document.body.appendChild(tempInput);
          tempInput.select();
          tempInput.setSelectionRange(0, 99999);
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          alert('URLをクリップボードにコピーしました！');
        }
      }
    } catch (error) {
      console.error('共有に失敗しました:', error);
      // Error fallback - show URL in alert
      alert(`URLを手動でコピーしてください: ${shareUrl}`);
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