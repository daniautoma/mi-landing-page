import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
    variant?: "full" | "iso";
}

export function Logo({ className, width, height, variant = "full" }: LogoProps) {
    const src = variant === "full" ? "/logo-daniautoma.svg" : "/isotipo-daniautoma.svg";
    const alt = variant === "full" ? "danIAutoma Logo" : "danIAutoma Isotipo";

    return (
        <div className={cn("relative flex items-center", className)}>
            <Image
                src={src}
                alt={alt}
                width={width || (variant === "full" ? 180 : 40)}
                height={height || 40}
                className="object-contain"
                priority
            />
        </div>
    );
}
