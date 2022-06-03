export default function tableParse (selector: string) {
  const table = document.querySelector(selector)
  if (table) {
    const headers = [...table.querySelectorAll('th')]
    const keys = headers.map(header => {
        return header.innerText
    })
    const rows = [...table.querySelectorAll('tr')]
    const data = rows.map(row => {
        const cells = [...row.querySelectorAll('td')]
        return cells.map((cell, index) => {
            const key = keys[index]
            return { [key]: cell.innerText }
        })
    })
    return data.filter(data => data.length)
  } else return []
}
