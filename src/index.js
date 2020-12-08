import { Excel } from './components/excel/Excel'
import { Formula } from './components/formuls/Formula'
import { Header } from './components/header/Header'
import { Table } from './components/table/Table'
import { ToolBar } from './components/toolbar/ToolBar'
import { createStore } from './core/createStore'
import { storage } from './core/utils'
import { rootReducer } from './redux/rootReducer'
import './scss/index.scss'

const store = createStore(rootReducer, storage('excel-state'))

store.subscribe(state => {
  storage('excel-state', state)
})

const excel = new Excel('#app', {
  components: [Header, Formula, Table, ToolBar],
  store
})

excel.render()
