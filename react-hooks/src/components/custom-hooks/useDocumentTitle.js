import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `title count : ${count}`;
  }, [count]);
}

export default useDocumentTitle;
