import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

//React Portal 提供了一種將子節點渲染到父組件以外的 DOM 節點的優秀解決方案。
export default function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
