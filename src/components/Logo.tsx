import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'isotype';
  width?: number;
  height?: number;
}

export default function Logo({ className, variant = 'full', width, height }: LogoProps) {
  const isFull = variant === 'full';
  const src = isFull ? '/logo-daniautoma.svg' : '/isotipo-daniautoma.svg';
  const defaultWidth = isFull ? 180 : 80;
  const defaultHeight = isFull ? 50 : 80;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src={src}
        alt="danIAutoma Logo"
        width={width || defaultWidth}
        height={height || defaultHeight}
        priority
        className="object-contain"
      />
    </div>
  );
}
