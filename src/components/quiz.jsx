import { useEffect, useState } from "react"
import Spinner from "./spinner";

function getData() {

}

export default function Quiz() {
  const [loading, setLoading] = useState(true);
  const questions = getData();

  useEffect(() => {
    questions && setLoading(false);
  }, [questions]);

  return <div id='wrapper'>
    {loading
      ? <Spinner text/>
      : <span>Loaded</span>}
  </div>
}
