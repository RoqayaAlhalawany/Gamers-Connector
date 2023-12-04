export interface ProfileDetailsGetPayload {
  username: string // Username of the profile owner
  email: string // Email address of the profile owner
  firstName: string // First name of the profile owner
  lastName: string // Last name of the profile owner
  discordTag: string // Discord tag of the profile owner
  handles: { // An array of handles associated with the profile owner
    game: string // Name of the game associated with the handle
    gameId: number // Unique identifier of the game associated with the handle
    handle: string // Handle (username) used in the game
    id: number // Unique identifier of the handle
  }[]
  profilePicture: { // Object containing details about the profile picture
    id: string // Unique identifier of the profile picture
    type: string // Type of the profile picture (e.g., image/jpeg, image/png)
    size: number // Size of the profile picture in bytes
    url: string // URL or path to access/view the profile picture
  }
  country: { // Object containing details about the country of the profile owner
    name: string // Name of the country
  }
}
