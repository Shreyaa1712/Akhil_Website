/**
 * Renders a JSON-LD <script> tag for structured data.
 * Must be used inside <head> or directly in a layout/page at the top level.
 * Produces no visible output.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
