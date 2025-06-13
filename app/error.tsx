"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
