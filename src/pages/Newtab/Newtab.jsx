import DropdownMenu from './Components/dropdown-menu';
import TabList from './Components/tab-list';
import React from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Newtab.css';
import './Newtab.scss';
const Quote = require('inspirational-quotes');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: DateTime.now(),
      wallpaper: '',
      quote: '',
      tabs: [],
    };
  }

  componentDidMount() {
    chrome.storage.local.get('tabs', (result) => {
      if (
        result !== undefined &&
        result.tabs !== undefined &&
        result.tabs.tabs !== undefined
      ) {
        this.setState({ tabs: result.tabs.tabs });
      }
    });
    this.timerID = setInterval(() => this.tick(), 1000);
    axios
      .get(
        'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
        { headers: { 'X-Requested-With': 'true' } }
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ wallpaper: res.data[0].url });
        }
      })
      .catch((err) => {
        this.setState({ wallpaper: '' });
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      clock: DateTime.now(),
    });
    this.setState({
      quote: Quote.getQuote({ author: false }).text,
    });
    this.getDayPhase();
    chrome.storage.local.get('tabs', (result) => {
      if (
        result !== undefined &&
        result.tabs !== undefined &&
        result.tabs.tabs !== undefined
      ) {
        this.setState({ tabs: result.tabs.tabs });
      }
    });
  }

  getDayPhase() {
    var hour = parseInt(this.state.clock.toFormat('HH'), 10);
    if (hour >= 5 && hour <= 12) {
      this.setState({ dayPhase: 'Morning' });
    } else if (hour > 12 && hour <= 17) {
      this.setState({ dayPhase: 'Afternoon' });
    } else if (hour > 17 && hour <= 21) {
      this.setState({ dayPhase: 'Evening' });
    } else if (hour > 21 && hour <= 24) {
      this.setState({ dayPhase: 'Night' });
    } else if (hour >= 0 && hour <= 4) {
      this.setState({ dayPhase: 'Night' });
    } else {
      this.setState({ dayPhase: 'Morning' });
    }
  }

  updateTabs = (tabs) => {
    this.setState({ tabs: tabs });
    chrome.storage.local.set({ tabs: { tabs: tabs } });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${this.state.wallpaper})` }}
      >
        <header className="App-header">
          <DropdownMenu />
          <Box>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <Box className="clock">
                  {this.state.clock.toFormat('HH:mm').toString()}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="user-welcome">
                  Good {this.state.dayPhase}, Aiba.
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="quote">{this.state.quote}</Box>
              </Grid>
            </Grid>
          </Box>
        </header>
        <Grid container spacing={2} justifyContent={'center'} padding={5}>
          <Grid item xs={4}>
            <Box className="box">Tasks</Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="box">
              Tabs
              <TabList tabs={this.state.tabs} updateTabs={this.updateTabs} />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// function getQuote() {
//     const q = Quote.getQuote({author: false});
//     return q.text;
// }

// const Newtab = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <DropdownMenu />
//         <h1>
//           Good afternoon, Aiba.
//         </h1>
//         <p>
//           {getQuote()}
//         </p>
//       </header>
//     </div>
//   );
// };

// export default Newtab;
