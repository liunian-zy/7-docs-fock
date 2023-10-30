export class TransformWithEvent {
    sentEventOnce;
    transformStream;
    constructor(options) {
        this.sentEventOnce = false;
        this.transformStream = this.createTransformStream(options);
    }
    createTransformStream(options) {
        return new TransformStream({
            transform: (chunk, controller) => {
                if (!this.sentEventOnce) {
                    const eventString = `event: ${options.event}\ndata: ${options.data}\n\n`;
                    const customEventBytes = new TextEncoder().encode(eventString);
                    controller.enqueue(customEventBytes);
                    this.sentEventOnce = true;
                }
                controller.enqueue(chunk);
            }
        });
    }
    getTransformStream() {
        return this.transformStream;
    }
}
