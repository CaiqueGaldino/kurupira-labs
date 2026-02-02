import Link from 'next/link';

interface AppStoreButtonProps {
  variant?: 'google' | 'apple';
  href: string;
  className?: string;
}

export default function AppStoreButton({ 
  variant = 'google', 
  href,
  className = '' 
}: AppStoreButtonProps) {
  const isGoogle = variant === 'google';

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-zinc-900 border border-gray-700 rounded-lg transition-colors ${className}`}
    >
      {isGoogle ? (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M3.609 4.545A10.939 10.939 0 012.25 10c0 2.008.542 3.89 1.487 5.51l4.49-4.49v-.56l-4.618-5.915z" fill="#EA4335"/>
          <path d="M12 2.25c2.428 0 4.639.888 6.345 2.355L15.57 7.38A6.735 6.735 0 0012 6.25c-2.38 0-4.442 1.265-5.583 3.15L2.25 10c.92-3.92 4.384-6.75 9.75-6.75z" fill="#4285F4"/>
          <path d="M12 17.75c-2.38 0-4.442-1.265-5.583-3.15L2.25 14c.92 3.92 4.384 6.75 9.75 6.75 2.428 0 4.639-.888 6.345-2.355L15.57 15.62a6.735 6.735 0 01-3.57.98v-.85z" fill="#34A853"/>
          <path d="M21.75 10c0 .607-.054 1.2-.155 1.775h-9.345v-3.55h5.595a4.78 4.78 0 01-2.07 3.14l3.12 2.485c1.82-1.68 2.855-4.155 2.855-7.1 0-.643-.055-1.265-.155-1.87L18.345 7.38c.36.82.555 1.73.555 2.62z" fill="#FBBC04"/>
        </svg>
      ) : (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )}
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-400">
          {isGoogle ? 'GET IT ON' : 'Download on the'}
        </span>
        <span className="text-sm font-semibold text-white">
          {isGoogle ? 'Google Play' : 'App Store'}
        </span>
      </div>
    </Link>
  );
}
