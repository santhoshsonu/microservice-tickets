import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
    subject: Subjects.PaymentCreated;
    data: {
        id: string;
        orderId: string;
        stripeId: string;
        version: number;
    };
}