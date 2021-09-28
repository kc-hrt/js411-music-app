import React from "react";
import OnlineCard from "./Online";
import VolumeCard from "./Volume";
import SoundQualityCard from "./SoundQuality";

export default class Dashboard extends React.Component {
  state = {
    online: true,
    mainVolume: 60,
    soundQuality: 2,
    notifications: [],
  };

  handleSwitch = () => {
    this.setState({ online: !this.state.online });
    if (this.state.online) {
      this.setState({
        notifications: [
          ...this.state.notifications,
          "Your application is offline. You won't be able to share or stream music to other devices.",
        ],
      });
    } else {
      this.setState({
        notifications: [
          ...this.state.notifications,
          "Your application is online.",
        ],
      });
    }
  };

  handleSlider = (e, value) => {
    console.log(this.state.mainVolume, value);
    if (this.state.mainVolume >= 80 && value < 80) {
      this.setState({
        mainVolume: value,
        notifications: [
          ...this.state.notifications,
          "Your ears thank you for turning the volume down.",
        ],
      });
    } else if (this.state.mainVolume < 80 && value >= 80) {
      this.setState({
        mainVolume: value,
        notifications: [
          ...this.state.notifications,
          "Listening to music at a high volume could cause long-term hearing loss.",
        ],
      });
    } else {
      this.setState({ mainVolume: value });
    }
  };

  handleSelect = (e) => {
    this.setState({ soundQuality: e.target.value });
    if (e.target.value === 1) {
      this.setState({
        notifications: [...this.state.notifications, "Sound quality is low."],
      });
    } else if (e.target.value === 2) {
      this.setState({
        notifications: [
          ...this.state.notifications,
          "Sound quality is normal.",
        ],
      });
    } else if (e.target.value === 3) {
      this.setState({
        notifications: [...this.state.notifications, "Sound quality is high."],
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Music Dashboard</h1>
        <div
          style={{ margin: "50px", display: "flex", justifyContent: "center" }}
        >
          <OnlineCard
            handleSwitch={this.handleSwitch}
            isOnline={this.state.online}
          />
          <VolumeCard handleSlider={this.handleSlider} />
          <SoundQualityCard handleSelect={this.handleSelect} />
        </div>
        <h1>
          System Notifications:
          {this.state.notifications.map((notification, index) => {
            return <p key={index}>{notification}</p>;
          })}
        </h1>
      </div>
    );
  }
}
