import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

function UserContainer(props) {
  const { userData, fetchUsers } = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <div>Loading </div>
  ) : userData.error ? (
    <div>Error in fetching data {userData.error}</div>
  ) : (
    <div><h3>User List</h3>
      {userData?.data?.map((user, i) => <div key={i}>{i} - {user.name}</div> )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
