import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, CurrentPage },
  } = useAllJobsContext();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && "active"}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // Add the first page button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: CurrentPage === 1 })
    );
    // Add the dots before the current page if there are more than 3 pages
    if (CurrentPage > 3) {
      pageButtons.push(
        <span className="page-btn dots" key="dots-1">
          ....
        </span>
      );
    }
    // one before current page
    if (CurrentPage !== 1 && CurrentPage !== 2) {
      pageButtons.push(
        addPageButton({ pageNumber: CurrentPage - 1, activeClass: false })
      );
    }

    // Add the current page button
    if (CurrentPage !== 1 && CurrentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({ pageNumber: CurrentPage, activeClass: true })
      );
    }

    // one after current page
    if (CurrentPage !== numOfPages && CurrentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({ pageNumber: CurrentPage + 1, activeClass: false })
      );
    }
    if (CurrentPage < numOfPages - 2) {
      pageButtons.push(
        <span className=" page-btn dots" key="dots+1">
          ....
        </span>
      );
    }

    // Add the last page button
    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: CurrentPage === numOfPages,
      })
    );

    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        className="prev-btn"
        onClick={() => {
          let prevPage = CurrentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">{renderPageButtons()}</div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = CurrentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
