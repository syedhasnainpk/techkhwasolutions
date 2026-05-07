interface TKLogoProps {
  size?: number
  className?: string
}

export default function TKLogo({ size = 40, className = '' }: TKLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* TK blob/pill logo approximation */}
      {/* Top circle (dot) */}
      <circle cx="28" cy="12" r="10" fill="#5BC8E8" />

      {/* Left vertical stem of T / stem of K */}
      <ellipse cx="28" cy="32" rx="9" ry="12" fill="#5BC8E8" />

      {/* T crossbar left blob */}
      <ellipse cx="14" cy="42" rx="10" ry="8" fill="#5BC8E8" />

      {/* Center connector */}
      <ellipse cx="28" cy="52" rx="9" ry="10" fill="#5BC8E8" />

      {/* T crossbar right / K upper arm */}
      <ellipse cx="50" cy="38" rx="14" ry="8" fill="#5BC8E8" />

      {/* K upper diagonal */}
      <ellipse cx="65" cy="26" rx="10" ry="9" fill="#5BC8E8" />

      {/* K top tip */}
      <circle cx="78" cy="18" r="9" fill="#5BC8E8" />

      {/* K lower arm */}
      <ellipse cx="65" cy="58" rx="10" ry="9" fill="#5BC8E8" />

      {/* K lower diagonal */}
      <ellipse cx="50" cy="68" rx="14" ry="8" fill="#5BC8E8" />

      {/* K bottom tip */}
      <circle cx="78" cy="76" r="9" fill="#5BC8E8" />

      {/* Stem bottom */}
      <ellipse cx="28" cy="72" rx="9" ry="12" fill="#5BC8E8" />
      <circle cx="28" cy="85" r="8" fill="#5BC8E8" />
    </svg>
  )
}
