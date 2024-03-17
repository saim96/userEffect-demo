import "./index.css";
import "./App.css";
import QuoteFetcher from "./QouteFetcher.component";
import Counter from "./counter";
import QouteFetcherLoader from "./QuoteFetcherLoader.component";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch.component";
import RenderDemo from "./RenderDemo"

function App() {
  return (
    <>
      <ProfileViewerWithSearch />
      <hr />
      <RenderDemo/>
      <hr />
      <h1> Counter </h1>
      <Counter />
      <hr />
      <QuoteFetcher />
      <hr />
      <QouteFetcherLoader />
    </>
  );
}

export default App;
