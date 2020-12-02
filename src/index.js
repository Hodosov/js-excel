import { Excel } from './components/excel/Excel'
import { Formula } from './components/formuls/Formula'
import { Header } from './components/header/Header'
import { Table } from './components/table/Table'
import { ToolBar } from './components/toolbar/ToolBar'
import './scss/index.scss'

const excel = new Excel('#app', {
  components: [Header, Formula, Table, ToolBar]
})

excel.render()
