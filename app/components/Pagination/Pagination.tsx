import Link from "next/link";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

const Pagination = ({ pagination }: any) => {
  const { prev_page_url, next_page_url, to, total, per_page } = pagination;

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(total / per_page);

    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      const isActive = pageNumber * per_page >= to - per_page + 1 && pageNumber * per_page <= to;

      return (
        <Link 
          href={`?page=${pageNumber}`}
          key={pageNumber}
          className={`rounded-full w-8 h-8 flex items-center justify-center ${isActive ? 'bg-gray-200' : ''}`}
        >
          {pageNumber}
        </Link>
      );
    });
  };

  return (
    <div className="flex gap-x-4 items-center py-8">
      {prev_page_url && (
        <Link href={prev_page_url} className="w-12 h-12 rounded-full flex items-center justify-end">
          <ArrowLeftCircle className="w-6 h-6" />
        </Link>
      )}
      {renderPageNumbers()}
      {next_page_url && (
        <Link href={next_page_url} className="w-12 h-12 rounded-full flex items-center">
          <ArrowRightCircle className="w-6 h-6" />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
