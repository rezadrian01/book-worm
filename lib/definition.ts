export type ActionResult = {
    success?: boolean,
    errorTitle?: string | undefined,
    errorDesc?: string[] | undefined,
    issues?: {
        message: string,
        path: string | number
    }[] | undefined,
}