import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  prepare() {
    
  }

  toHTML() {
    return ''
  }

  $emit(event, ...arg) {
    this.emitter.emit(event, ...arg)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  init() {
    this.initDomListener()
  }

  destroy() {
    this.removeDomListener()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
