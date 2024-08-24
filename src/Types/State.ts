import {
  Contact
} from "./Contact"

/** for (if connection === "open") at chat update (open, connecting, close) */
export type WAConnectionState = "open" | "connecting" | "close"

export type ConnectionState = {
  /** connection is now open, connecting or closed */
  connection: WAConnectionState
  /** the error that caused the connection to close */
  lastDisconnect?: {
    error: Error | undefined
    date: Date
  }
  /** is this a new login */
  isNewLogin?: boolean
  /** the current QR code */
  qr?: string
  /** has the device received all pending notifications while it was offline */
  receivedPendingNotifications?: boolean /** true or false */
  /** legacy connection options */
  legacy?: {
    phoneConnected: boolean
    user?: Contact
  }
  /**
  * if the client is shown as an active, online client.
  * If this is false, the primary phone and other devices will receive notifs
  * */
  isOnline?: boolean
}
