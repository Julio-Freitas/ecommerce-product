import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const [countSeconds, setCountSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    setCountSeconds(5);
  }, [navigate]);

  useEffect(() => {
    const id =
      countSeconds > 0 &&
      setTimeout(() => setCountSeconds(countSeconds - 1), 1000);

    if (!countSeconds) {
      navigate("/");
      id && clearTimeout(id);
    }
    return () => {
      id && clearTimeout(id);
    };
  }, [countSeconds]);
  return (
    <>
      <h1>This page do not exist yet {`${countSeconds}`.padEnd(2, "s")}</h1>
    </>
  );
}
