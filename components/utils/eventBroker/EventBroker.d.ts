export interface EventBrokerData<T = unknown> {
    componentId: string;
    eventId: string;
    meta?: T;
    domEvent?: React.SyntheticEvent;
}
export type EventBrokerSubscription = (data: EventBrokerData) => void;
export declare class EventBroker {
    subscriptions: EventBrokerSubscription[];
    componentPrefix?: string;
    constructor(prefix?: string);
    subscribe(subscription: EventBrokerSubscription): void;
    unsubscribe(subscription: EventBrokerSubscription): void;
    publish({ componentId, ...restData }: EventBrokerData): void;
    withEventPublisher(componentId: string): (eventBrokerData: Omit<EventBrokerData, "componentId" | "qa">) => void;
}
export declare const eventBroker: EventBroker;
