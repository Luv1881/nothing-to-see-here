export function JsonLd({ data }: { data: object }) {
  // JSON.stringify does not escape "</script>", so a value containing that
  // substring (e.g. a post title about XSS) would terminate the script tag
  // and inject markup. Escaping "<" as \u003c is the standard defense and
  // stays valid JSON.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
