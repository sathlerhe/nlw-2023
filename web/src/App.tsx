import Header from "./components/Header";
import SummaryTable from "./components/SummaryTable";
import "./styles/global.css";

const App = () => {
  return (
    <div className="w-screeen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
};

export default App;
