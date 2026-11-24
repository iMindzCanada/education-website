/**
 * Not yet designed in the canvas. Rendering a clearly-labeled placeholder
 * rather than inventing content — replace once there's a real design.
 */
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-14 text-center">
      <div className="font-heading text-2xl font-extrabold text-imz-text">
        {title}
      </div>
      <div className="mt-2 text-imz-text-muted">
        Not yet designed — placeholder route.
      </div>
    </div>
  );
}
