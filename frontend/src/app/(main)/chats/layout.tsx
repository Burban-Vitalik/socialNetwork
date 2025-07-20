export default function Layout({
  children,
  rightSidebar,
  leftSidebar,
}: {
  children: React.ReactNode;
  rightSidebar: React.ReactNode;
  leftSidebar: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="bg-red-200">{leftSidebar}</div>
      <div className="flex-1 bg-green-200">{children}</div>
      <div className="bg-orange-200">{rightSidebar}</div>
    </div>
  );
}
