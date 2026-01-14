export default function Button({
  type = "button",
  children,
}: {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
}) {
  return (
    <button
      className="hover:animate-pulse cursor-pointer px-6 py-2"
      type={type}
    >
      {children}
    </button>
  );
}
