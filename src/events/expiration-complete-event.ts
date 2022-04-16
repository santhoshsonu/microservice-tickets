import { Subjects } from "./subjects";

export const EXPIRATION_WINDOW_SECONDS = 15 * 60;

export interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
