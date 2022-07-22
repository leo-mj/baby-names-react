import { AppHeader } from "./components/AppHeader";
import { NameLister } from "./components/NameLister";
import { AppFooter } from "./components/AppFooter";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NameLister />
      <AppFooter />
    </>
  );
}

export default App;
