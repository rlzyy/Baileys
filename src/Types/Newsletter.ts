/**
 * update newsletter
*/

import {
  proto
} from "../../WAProto"

export type newsLetterReactionMode = "ALL" | "BASIC" | "NONE"

export type newsLetterState = "ACTIVE" | "GEOSUSPENDED" | "SUSPENDED"

export type newsLetterVerification = "VERIFIED" | "UNVERIFIED"

export type newsLetterMute = "ON" | "OFF" | "UNDEFINED"

export type newsLetterViewRole = "ADMIN" | "GUEST" | "OWNER" | "SUBSCRIBER"

export type newsLetterViewerMetadata = {
  mute: newsLetterMute,
  view_role: newsLetterViewRole
}

export type newsLetterMetadata = {
  /**jid of newsLetter */
  id: string,
  /**state of newsLetter */
  state: newsLetterState,
  /**creation timestamp of newsLetter */
  creation_time: number,
  /**name of newsLetter */
  name: string,
  /**timestamp of last name modification of newsLetter */
  nameTime: number,
  /**description of newsLetter */
  description: string,
  /**timestamp of last description modification of newsLetter */
  descriptionTime: number,
  /**invite code of newsLetter */
  invite: string,
  /**i dont know */
  handle: null,
  /**direct path of picture */
  picture: string | null,
  /**direct path of picture preview (lower quality) */
  preview: string | null,
  /**reaction mode of newsLetter */
  reaction_codes?: newsLetterReactionMode,
  /**subscribers count of newsLetter */
  subscribers: number,
  /**verification state of newsLetter */
  verification: newsLetterVerification,
  /**viewer metadata */
  viewer_metadata: newsLetterViewerMetadata
}

export type SubscriberAction = "promote" | "demote"

export type ReactionModeUpdate = {
  reaction_codes: {
    blocked_codes: null,
    enabled_ts_sec: null,
    value: newsLetterReactionMode
  }}

/**
 only exists reaction mode update
*/
export type newsLetterSettingsUpdate = ReactionModeUpdate

export type newsLetterReaction = {
  count: number,
  code: string
}

export type newsLetterFetchedUpdate = {
  /**id of message in newsLetter, starts from 100 */
  server_id: string,
  /**count of views in this message */
  views?: number,
  /**reactions in this message */
  reactions: newsLetterReaction[],
  /**the message, if you requested only updates, you will not receive message */
  message?: proto.IWebMessageInfo
}

export enum MexOperations {
  PROMOTE = "NotificationnewsLetterAdminPromote",
  DEMOTE = "NotificationnewsLetterAdminDemote",
  UPDATE = "NotificationnewsLetterUpdate"
}

export enum XWAPaths {
  PROMOTE = "xwa2_notify_newsLetter_admin_promote",
  DEMOTE = "xwa2_notify_newsLetter_admin_demote",
  ADMIN_COUNT = "xwa2_newsLetter_admin",
  CREATE = "xwa2_newsLetter_create",
  newsLetter = "xwa2_newsLetter",
  METADATA_UPDATE = "xwa2_notify_newsLetter_on_metadata_update"
}
