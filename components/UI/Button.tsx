export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="hover:animate-pulse cursor-pointer px-6 py-2">
      {children}
    </button>
  );
}
