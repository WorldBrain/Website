export class NetworkService {
    fetch: typeof fetch = (input, init?) => {
        return fetch(input, init)
    }
}
