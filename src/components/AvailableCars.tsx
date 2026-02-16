interface AvailableCarsProps {
  search: string;
  onSearchChange: (value: string) => void;

  onOpenFilters: () => void; // ✅ اضافه شد
}

export const AvailableCars = ({
  search,
  onSearchChange,
  onOpenFilters,
}: AvailableCarsProps) => {
  return (
    <section className="flex flex-col items-center py-20 bg-[#F1F5F9] max-md:px-4">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-3xl md:text-[40px] text-black">
          Available Cars
        </h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[600px]">
          Browse our selection of premium vehicles available for your next
          adventure
        </p>
      </div>

      <div
        className="
          flex items-center bg-white px-4 mt-6 
          max-w-[560px] w-full h-12 
          rounded-full shadow-md
        "
      >
        <svg
          className="w-5 h-5 mr-2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#64748B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5001 17.5L13.9167 13.9167"
            stroke="#64748B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          type="text"
          placeholder="Search by make, model, or features"
          className="w-full h-full outline-none text-gray-600 text-sm md:text-base placeholder:text-gray-400"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <button
          type="button"
          onClick={onOpenFilters}
          aria-label="Open filters"
          className="ml-2 p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
        >
          <svg
            className="w-5 h-5"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 2.5H1.6665L8.33317 10.3833V15.8333L11.6665 17.5V10.3833L18.3332 2.5Z"
              stroke="#64748B"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
