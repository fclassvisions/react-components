import React, { useState } from "react";
import "./TabView.css";

function TabView({ title, tabs = [], editable = false }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [allTabs, setAllTabs] = useState(tabs);

  const NewTabButton = (
    <div className="btn" onClick={() => createNewTab()}>
      +
    </div>
  );

  const NewTab = (
    <div>
      <label>New Tab</label>
      <p>This is a new tab.</p>
    </div>
  );

  const createNewTab = () => {
    const newTabs = allTabs;
    newTabs.push({ name: "New Tab", content: NewTab });
    setAllTabs(newTabs);
    setActiveTabIndex(newTabs.length - 1);
  };

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="TabView">
      {title && <h4 className="title">{title}</h4>}
      <div className="body">
        {allTabs.length === 0 ? (
          <div className="tabs">
            <div>No Tabs</div>
            {editable ? NewTabButton : null}
          </div>
        ) : (
          <div>
            <div className="tabs">
              {allTabs.map((tab, index) => (
                <label
                  key={index}
                  className={index === activeTabIndex ? "active-tab" : "tab"}
                  onClick={() => activateTab(index)}
                >
                  {tab.name}
                </label>
              ))}
              {editable ? NewTabButton : null}
            </div>
            <div className="content">{allTabs[activeTabIndex].content}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabView;
