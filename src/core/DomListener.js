import { $ } from "./dom"

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw Error(`No $root provided forDomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListener() {

    }

    removeDomListener() {

    }
}
