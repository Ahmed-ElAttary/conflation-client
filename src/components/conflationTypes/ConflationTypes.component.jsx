import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Area2Area from "./Area2Area.component";
export default function conflationTypes({ sessionID, setCurrentState }) {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="Line to Line"></TabPanel>
        <TabPanel header="Area to Area">
          <Area2Area sessionID={sessionID} setCurrentState={setCurrentState} />
        </TabPanel>
        <TabPanel header="Point to Point"></TabPanel>
        <TabPanel header="Area to Line"></TabPanel>
        <TabPanel header="Area to Point"></TabPanel>
        <TabPanel header="Line to Point"></TabPanel>
      </TabView>
    </div>
  );
}
