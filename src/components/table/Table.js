import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.tamplate';
import { resizeHandler } from './table.resize';
import { shoutResize } from './table.functions'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable()
    }

    onMousedown(event) {
        if (shoutResize(event)) {
            resizeHandler(this.$root, event)
        }
    }
}
