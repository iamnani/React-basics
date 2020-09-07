import React from "react";
import { UserContext, ChannelContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(a) => {
          return (
            <div>
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      User name from context is {a.fname} , {a.lname} with channel {channel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
