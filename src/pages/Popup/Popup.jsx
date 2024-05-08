import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Popup.css';

const Popup = () => {
  const handleSingleTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs);
      chrome.storage.local.get('tabs', (result) => {
        var arr = {};
        if (
          result !== undefined &&
          result.tabs !== undefined &&
          result.tabs.tabs !== undefined
        ) {
          arr = {
            tabs: [
              ...result.tabs.tabs,
              {
                url: tabs[0].url,
                title: tabs[0].title,
                favicon: tabs[0].favIconUrl,
              },
            ],
          };
        } else {
          arr = {
            tabs: [
              {
                url: tabs[0].url,
                title: tabs[0].title,
                favicon: tabs[0].favIconUrl,
              },
            ],
          };
        }
        chrome.storage.local.set({ tabs: arr }, () => {
          chrome.tabs.remove(tabs[0].id);
        });
      });
    });
  };
  const handleAllTab = () => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      console.log(tabs);
    });
  };
  return (
    <Box className="App">
      <Box className="App-header">
        <Grid container>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={handleSingleTab}>
              Store this tab
            </Button>
          </Grid>
          {/* <Grid item xs={12}>
            <Button variant="outlined" onClick={handleAllTab}>
              Store all tabs
            </Button>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Popup;
