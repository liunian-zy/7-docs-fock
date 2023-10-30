interface Event {
    event: string;
    data: string;
}
export declare class TransformWithEvent {
    private sentEventOnce;
    private transformStream;
    constructor(options: Event);
    private createTransformStream;
    getTransformStream(): TransformStream<Uint8Array, Uint8Array>;
}
export {};
