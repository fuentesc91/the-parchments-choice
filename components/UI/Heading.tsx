"use client";

export default function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-4 ${className}`}>
      <h1 className="text-6xl font-bold text-center">{children}</h1>
    </div>
  );
}
