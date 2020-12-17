import { Page } from "../core/Page";
import { Excel } from '../components/excel/Excel'
import { Formula } from '../components/formuls/Formula'
import { Header } from '../components/header/Header'
import { Table } from '../components/table/Table'
import { ToolBar } from '../components/toolbar/ToolBar'
import { createStore } from '../core/createStore'
import { storage } from '../core/utils'
import { initialState } from '../redux/initialState'
import { rootReducer } from '../redux/rootReducer'

export class ExcelPage extends Page {
    getRoot() {
        const store = createStore(rootReducer, initialState)

        store.subscribe(state => {
            storage('excel-state', state)
        })

        this.excel = new Excel({
            components: [Header, Formula, Table, ToolBar],
            store
        })

        return this.excel.getRoot()
    }

    afterRender() {
        this.excel.init()
    }

    destroy() {
        this.excel.destroy()
    }
}
