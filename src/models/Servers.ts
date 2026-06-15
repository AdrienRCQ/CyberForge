export interface Server {
  id: number;
  name: string;
  status: "online" | "offline" | "maintenance";
  ip: string;
  location: string;
}