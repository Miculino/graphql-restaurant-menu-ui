export default function SidebarScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex md:flex-col">
      {/* Horizontal scroll container for mobile */}
      <div className="flex md:hidden overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-4 px-4">{children}</div>
      </div>

      {/* Vertical layout for larger screens */}
      <div className="hidden md:flex md:flex-col">{children}</div>
    </div>
  );
}
