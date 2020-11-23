export class DomListener {
    constructor($root) {
        if (!$root) {
            throw Error(`No $root provided forDomListener`)
        }
    }
}
