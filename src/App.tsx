import { SelectColor } from "./components/SelectColor";
import { SelectPackage } from "./components/SelectPackage";
import { SelectPower } from "./components/SelectPower";
import { SelectWarpDrive } from "./components/SelectWarpDrive";
import { PriceCalculator } from "./components/PriceCalculator";
import { LabelText } from "./resources/LabelText";

function App() {
  return (
    <div className="content-container">
      <div className="app-container">
        <h1 data-testid="app-title" className="page-title">
          {LabelText.SPACESHIP_CONFIGURATOR}
        </h1>
        <div className="configurator-container">
          <div className="parts-container">
            <SelectColor />
            <SelectPower />
            <SelectWarpDrive />
            <SelectPackage />
          </div>
          <PriceCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
