interface SectionHeadingProps {
  tag: string;
  titleHtml: string;
  subtitle?: string;
  center?: boolean;
  tagClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  tag,
  titleHtml,
  subtitle,
  center = false,
  tagClassName = '',
  titleClassName = '',
  subtitleClassName = ''
}: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <div className={`section-tag reveal ${tagClassName}`.trim()} style={center ? { justifyContent: 'center' } : undefined}>
        {tag}
      </div>
      <h2
        className={`section-title reveal reveal-delay-1 ${titleClassName}`.trim()}
        dangerouslySetInnerHTML={{ __html: titleHtml }}
      />
      {subtitle ? <p className={`section-sub reveal reveal-delay-2 ${subtitleClassName}`.trim()}>{subtitle}</p> : null}
    </div>
  );
}
