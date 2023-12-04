export interface FindPeersPayload {
  username: string; // Represents the username of a peer
  profilePicture: {
    id: string; // Represents the ID of the profile picture
    type: string; // Represents the type of the profile picture
    size: number; // Represents the size of the profile picture
    url: string; // Represents the URL of the profile picture
  };
}
