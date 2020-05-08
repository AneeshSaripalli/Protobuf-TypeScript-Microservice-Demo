const LOGGER = (identity: string) => (...body: any[]) => {
    console.log(identity, body.join(', '));
}

export {
    LOGGER
}