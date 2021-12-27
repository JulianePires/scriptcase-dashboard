import Navbar from "components/Navbar";
import NavigationController from "components/NavigationController";
import PageTitle from "components/PageTitle";
import TabPanel from "components/TabPanel";
import Toolbar from "components/Toolbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <NavigationController activePage="Properties" />
      <PageTitle title="Edit Project" />
      <TabPanel />
    </div>
  );
}

export default App;
