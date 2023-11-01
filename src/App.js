import React, { useEffect } from 'react';
import Extension from './Extension';

function App() {
    useEffect(() => {
        /* eslint-disable no-undef */
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: activeTabId },
                function: () => alert("React Chrome Extension Alert")
            });
        });
    }, []); // Empty dependency array to run it once when the component mounts

    return (
        <div>
            {/* Other components of your React app */}
            <Extension />
        </div>
    );
}

export default App;


