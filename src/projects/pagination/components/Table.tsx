import React from 'react'

const PaginationTable = () => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Serial No</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
        </thead>
        <tbody>
          {
            Array(10).fill(1).map((val, idx) => {
              return <tr key={idx}>
                <td>{idx+1}</td>
                <td>test{idx+1}</td>
                <td>role{idx+1}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PaginationTable