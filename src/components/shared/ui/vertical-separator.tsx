interface VerticalSeparatorProps {
  height?: string;
  className?: string;
  color?: string;
}

export function VerticalSeparator({
  height = "h-full",
  className = "",
  color = "white",
}: VerticalSeparatorProps) {
  const normalizedColor =
    color.startsWith("(--") && color.endsWith(")")
      ? `var${color}`
      : color.startsWith("--")
        ? `var(${color})`
        : color;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${height} ${className}`}
    >
      {/* Top decorative diamond */}
      <div
        className="w-2 h-2 rotate-45 shadow-lg shadow-white/50"
        style={{ backgroundColor: normalizedColor }}
      />

      {/* Top gradient line */}
      <div
        className="w-px h-12"
        style={{
          background: `linear-gradient(to bottom, transparent, ${normalizedColor}, ${normalizedColor})`,
        }}
      />

      {/* Center decorative circle */}
      <div className="relative">
        <div
          className="w-3 h-3 rounded-full shadow-lg shadow-white/50"
          style={{ backgroundColor: normalizedColor }}
        />
        <div
          className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-75"
          style={{ backgroundColor: normalizedColor }}
        />
      </div>

      {/* Main line */}
      <div
        className="w-px flex-1"
        style={{
          background: `linear-gradient(to bottom, ${normalizedColor}, color-mix(in srgb, ${normalizedColor} 80%, transparent), ${normalizedColor})`,
        }}
      />

      {/* Bottom decorative circle */}
      <div className="relative">
        <div
          className="w-3 h-3 rounded-full shadow-lg shadow-white/50"
          style={{ backgroundColor: normalizedColor }}
        />
        <div
          className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-75"
          style={{ backgroundColor: normalizedColor }}
        />
      </div>

      {/* Bottom gradient line */}
      <div
        className="w-px h-12"
        style={{
          background: `linear-gradient(to bottom, ${normalizedColor}, transparent)`,
        }}
      />

      {/* Bottom decorative diamond */}
      <div
        className="w-2 h-2 rotate-45 shadow-lg shadow-white/50"
        style={{ backgroundColor: normalizedColor }}
      />
    </div>
  );
}
