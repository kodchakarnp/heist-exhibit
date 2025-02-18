export default function SearchBox({ query, setQuery, handleSearch }) {
    return (
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="w-80 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500"
          placeholder="Title, Artist name, Area"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-green-500 px-4 py-2 rounded-r-lg font-bold"
          onClick={handleSearch}
        >
          GO
        </button>
      </div>
    );
  }
  