export function DemoLayout({ title, children }) {
  return (
    <div className="p-8 max-w-md mx-auto space-y-8">
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
      {children}
    </div>
  )
}
