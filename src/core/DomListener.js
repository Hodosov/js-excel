import { capitalize } from "./utils"

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw Error(`No $root provided forDomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(
                    `Method ${method} is not init in ${this.name} Component`
                    )
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })       
    }

    removeDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
