import { useEffect } from "react";

const useHideBody = (hideBody: boolean) => {
    useEffect(() => {
        hideBody
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");
    }, [hideBody]);
};

export default useHideBody;
