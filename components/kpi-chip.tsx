interface KpiChipProps {
  value: string
}

export function KpiChip({ value }: KpiChipProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-accent">
      {value}
    </span>
  )
}
