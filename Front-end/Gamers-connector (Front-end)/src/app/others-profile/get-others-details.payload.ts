// Defines the GetOthersDetailsPayload interface
export interface GetOthersDetailsPayload {
  firstName: string; // Represents the firstName property of type string
  lastName: string; // Represents the lastName property of type string
  username: string; // Represents the username property of type string
  handles: any; // Represents the handles property of type any (can be replaced with a more specific type if available)
  country: {
    name: string; // Represents the name property of the country object of type string
  };
  requested: boolean; // Represents the requested property of type boolean
  otherRequested: boolean; // Represents the otherRequested property of type boolean
  peer: boolean; // Represents the peer property of type boolean
  reviewed: boolean; // Represents the reviewed property of type boolean
  discordTag: string; // Represents the discordTag property of type string
  profilePicture: {
    id: string; // Represents the id property of the profilePicture object of type string
    type: string; // Represents the type property of the profilePicture object of type string
    size: number; // Represents the size property of the profilePicture object of type number
    url: string; // Represents the url property of the profilePicture object of type string
  };
}
