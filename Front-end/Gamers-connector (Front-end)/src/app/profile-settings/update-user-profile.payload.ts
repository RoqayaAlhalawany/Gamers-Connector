export interface UpdateUserProfilePayload {
  firstName: string;        // The first name of the user
  lastName: string;         // The last name of the user
  email: string;            // The email address of the user
  password: string;         // The password of the user
  username: string;         // The username of the user
  discordTag: string;       // The Discord tag of the user
  country: {                // The country object
    name: string;           // The name of the country
  };
}
