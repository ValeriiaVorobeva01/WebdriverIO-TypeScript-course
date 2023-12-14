class locators {
    getTableData(rowIndex:any, columnIndex:any) {
        return $(`table[id=\'table01\'] tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`) // using css
    }

    getTextBowIndex(index:any) {
        return $(`(//input[@type=\'text\'])[${index}]`)
    }
}

export default new locators()