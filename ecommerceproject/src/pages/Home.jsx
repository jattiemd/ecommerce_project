import { banner } from "../services/api.js";
import { useEffect, useState } from "react";

function Home() {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    banner().then((url) => setImgUrl(url));
  }, []);

  return (
    <div className="flex justify-center mt-5">
      {imgUrl && <img src={imgUrl} alt="Banner" />}
    </div>
  );
}

export default Home;
