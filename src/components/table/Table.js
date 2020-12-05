import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './table.tamplate';
import { resizeHandler } from './table.resize';
import { isCell, shoutResize } from './table.functions'
import { TableSelection } from './TableSelection';
import { matrix } from './table.functions'
import { $ } from '../../core/dom'

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

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()
        const $cell = this.$root.find('[data-id="0:0"]')
        this.selection.select($cell)
    }

    onMousedown(event) {
        if (shoutResize(event)) {
            resizeHandler(this.$root, event)
        } else if (isCell(event)) {
            const $target = $(event.target)
            if (event.shiftKey) {
                const $cells = matrix($target, this.selection.current)
                    .map(id => this.$root.find(`[data-id="${id}"]`))
                this.selection.selectGroup($cells)                
            } else {
                this.selection.select($target)
            }
        }
    }
}
