import ServerCard from "../components/ServerCard";
import type { Server } from "../models/Servers";
import { useState } from "react";

type Filter = "all" | "online" | "offline" | "maintenance";

export default function Servers() {
    const [filter, setFilter] = useState<Filter>("all")

    const servers: Server[] = [
    {
      id: 1,
      name: "Prod Server",
      status: "online",
      ip: "192.168.1.1",
      location: "Paris",
    },
    {
      id: 2,
      name: "Dev Server",
      status: "maintenance",
      ip: "192.168.1.2",
      location: "Lyon",
    },
    {
      id: 3,
      name: "Backup Server",
      status: "offline",
      ip: "192.168.1.3",
      location: "Marseille",
    },
    {
      id: 3,
      name: "Backup Server",
      status: "offline",
      ip: "192.168.1.3",
      location: "Marseille",
    },
  ];

// Filtrage
  const filteredServers = servers.filter((server) => {
    if (filter === "all") return true;
    return server.status === filter;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des serveurs</h1>

      {/* Filtre */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ marginRight: "8px" }}>Filtrer :</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
        >
          <option value="all">All</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      {/* Compteur */}
      <p>{filteredServers.length} serveur(s)</p>

      {/* Liste */}
      <div style={styles.container}>
        {filteredServers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
  },
};
