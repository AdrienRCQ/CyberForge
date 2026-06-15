import type { Server } from "../models/Servers";

type Props = {
  server: Server;
};

export default function ServerCard({ server }: Props) {
  const getStatusColor = () => {
    switch (server.status) {
      case "online":
        return "green";
      case "offline":
        return "red";
      case "maintenance":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <div style={styles.card}>
      <h2>{server.name}</h2>
      <p><strong>IP:</strong> {server.ip}</p>
      <p><strong>Location:</strong> {server.location}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: getStatusColor() }}>
          {server.status}
        </span>
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "250px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

