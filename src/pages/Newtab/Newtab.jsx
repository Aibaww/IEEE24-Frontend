import Menu from './Components/dropdown-menu';
import Greeting from './Components/greeting';
import TabList from './Components/tab-list';
import Task from './Components/task';
import React from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import './Newtab.css';
import './Newtab.scss';
const Quote = require('inspirational-quotes');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: DateTime.now(),
      focused: false,
      wallpaper: '',
      quote: '',
      tabs: [],
      tasks: [],
      name: 'Aiba',
      dayPhase: '',
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
    chrome.storage.local.get('tasks', (result) => {
      if (
        result !== undefined &&
        result.tasks !== undefined &&
        result.tasks.tasks !== undefined
      ) {
        this.setState({ tasks: result.tasks.tasks });
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
    chrome.storage.local.get('tasks', (result) => {
      if (
        result !== undefined &&
        result.tasks !== undefined &&
        result.tasks.tasks !== undefined
      ) {
        this.setState({ tasks: result.tasks.tasks });
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

  updateTasks = (tasks) => {
    this.setState({ tasks: tasks });
    chrome.storage.local.set({ tasks: { tasks: tasks } });
  };

  updateFocused = () => {
    this.setState({ focused: !this.state.focused });
    chrome.storage.local.set({ focused: this.state.focused });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${this.state.wallpaper})` }}
      >
        <header className="App-header">
          <Box className="menu-bar">
            <Menu updateFocused={this.updateFocused} />
          </Box>
          <Box>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <Box className="clock">
                  {this.state.clock.toFormat('HH:mm').toString()}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Greeting
                  focused={this.state.focused}
                  name={this.state.name}
                  dayPhase={this.state.dayPhase}
                  quote={this.state.quote}
                />
              </Grid>
            </Grid>
          </Box>
        </header>
        <Grid container spacing={2} justifyContent={'center'} padding={5}>
          <Grid item xs={4}>
            <Box className="box">
              <Box height="30px"> Tasks </Box>
              <Divider color="gray" />
              <Task tasks={this.state.tasks} updateTasks={this.updateTasks} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="box">
              <Box height="30px"> Tabs </Box>
              <Divider color="gray" />
              <TabList tabs={this.state.tabs} updateTabs={this.updateTabs} />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
