// Sparkline - Küçük çizgi grafik (Figma'daki gibi)
/**
 * @param {Object} props
 * @param {number[]} props.data - Fiyat dizisi
 * @param {number} [props.width=80]
 * @param {number} [props.height=28]
 * @param {string} [props.color="#45B26B"]
 */
export default function Sparkline({ data, width = 80, height = 28, color = "#45B26B" }) {
  if (!data || data.length === 0) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d - min) / (max - min || 1)) * height;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        points={points}
        style={{ filter: "drop-shadow(0 1px 1px #eee)" }}
      />
    </svg>
  );
} 