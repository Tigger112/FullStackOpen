const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  let style;
  if (notification.style === "succes") {
    style = {
      color: "green",
      background: "lightgrey",
      fontSize: 20,
      borderStyle: "solid",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    };
  } else {
    style = {
      color: "red",
      background: "lightgrey",
      fontSize: 20,
      borderStyle: "solid",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    };
  }
  return <div style={style}>{notification.message}</div>;
};

export default Notification;