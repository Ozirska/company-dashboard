import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import { CompanyWidget } from "./CompanyWidget";

export default function MosaicLayout() {
  const renderTile = (id: string, path: any) => {
    return (
      <MosaicWindow<string> path={path} title={"Company Info"}>
        <CompanyWidget initialTicker={id} />
      </MosaicWindow>
    );
  };

  return (
    <div className="h-screen w-screen">
      <Mosaic<string>
        renderTile={renderTile}
        initialValue={{
          direction: "row",
          first: "AAPL",
          second: {
            direction: "row",
            first: "GOOGL",
            second: "MSFT",
          },
        }}
      />
    </div>
  );
}
