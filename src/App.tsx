import * as React from 'react';
import { Button, DatePicker } from 'antd';

interface IApp {
  date?: Date;
}

interface IAppState {
  date?: Date;
  timer_id: NodeJS.Timer;
}

class App extends React.Component<IApp, IAppState> {
  constructor(props: IApp) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      date: new Date(),
      timer_id: setInterval(
        () => this.tick(),
        1000
      ),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer_id);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const date = this.state?.date?.toLocaleDateString();
    return (
      <div className="App">
      <h1>Date Now: {date}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
    )
  }
}
export default App;
