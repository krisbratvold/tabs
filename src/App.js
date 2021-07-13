import './App.css';
import React, { useState } from 'react';

const tabs = [
  { label: "Tab 1", content: "content 1" },
  { label: "Tab 2", content: "content 2" },
  { label: "Tab 3", content: "content 3" }
];
function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div style={{ paddingTop: 30, textAlign: "center" }}>
      <div>
        {tabs.map((tab,i) => {
          const isSelected = tab === selectedTab;
          return (<span key={i} style={{
            border: "1px solid black",
            padding: 10,
            margin: 5,
            backgroundColor: isSelected ? "black" : "white",
            color: isSelected ? "white" : "black"
          }}
          onClick={(e) => {setSelectedTab(tab);}}
          >{tab.label}</span>)
        })}
      </div>
      <p style={{ border: "1px solid black", padding: 10 }}>{selectedTab.content}</p>
    </div>
  );
}

export default App;
