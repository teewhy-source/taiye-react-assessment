import React, { Component } from "react";
import UserInfo from "./UserInfo/UserInfo";
class App extends Component {
  state = {
    UserInfo: [
      { FirstName: "teewhy" },
      { LastName: "hjjdh" },
      { EmailAddress: "taiye@gmail.com" },
      { PhoneNumber: "08156326734" },
    ],
    UserInfo1: [
      { FirstName: "Tope" },
      { LastName: "idan" },
      { EmailAddress: "idan@yahoo.com" },
      { PhoneNumber: "081124" },
    ],
    UserInfo2: [
      { FirstName: "Maan" },
      { LastName: "Agbe" },
      { EmailAddress: "mary@gmail.com" },
      { PhoneNumber: "08012457908" },
    ],
    UserInfo3: [
      { FirstName: "Fky" },
      { LastName: "ele" },
      { EmailAddress: "ty@gmail.com" },
      { PhoneNumber: "08hd465767" },
    ],
    UserInfo4: [
      { FirstName: "Ses" },
      { LastName: "Hab" },
      { EmailAddress: "ty@gmail.com" },
      { PhoneNumber: "08023176755" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo
          fname={this.state.UserInfo[0].FirstName}
          lname={this.state.UserInfo[1].LastName}
          email={this.state.UserInfo[2].EmailAddress}
          phone={this.state.UserInfo[3].PhoneNumber}
        />
        <UserInfo
          fname={this.state.UserInfo1[0].FirstName}
          lname={this.state.UserInfo1[1].LastName}
          email={this.state.UserInfo1[2].EmailAddress}
          phone={this.state.UserInfo1[3].PhoneNumber}
        />
      <UserInfo
        fname={this.state.UserInfo2[0].FirstName}
        lname={this.state.UserInfo2[1].LastName}
        email={this.state.UserInfo2[2].EmailAddress}
        phone={this.state.UserInfo2[3].PhoneNumber}
      />
      <UserInfo
        fname={this.state.UserInfo3[0].FirstName}
        lname={this.state.UserInfo3[1].LastName}
        email={this.state.UserInfo3[2].EmailAddress}
        phone={this.state.UserInfo3[3].PhoneNumber}
      />
      <UserInfo
        fname={this.state.UserInfo4[0].FirstName}
        lname={this.state.UserInfo4[1].LastName}
        email={this.state.UserInfo4[2].EmailAddress}
        phone={this.state.UserInfo4[3].PhoneNumber}
      />
      </div>
    );
  }
}
export default App;