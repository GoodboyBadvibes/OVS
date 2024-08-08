import React from 'react'
import style from "../../Style/Dashboard style/table.module.css"

const Table = ({ data }) => {
  let className=''
  let status=false



  data.forEach((data)=>{

    Object.entries(data).forEach(([key, value]) => {
      if (key.trim().toLowerCase() === 'status') {
        status=true
        className = value==='successful'?style.success:''
      }else{
        
      }
    })
  })


  return (
    <div className={style.table} style={{ overflowX: 'scroll', borderRadius: '15px', marginTop: '50px', scrollbarWidth: '0' }}>

      <table style={{ width: ' 100%', backgroundColor: 'white', borderRadius: '10px', minWidth: '1160px' }}>

        <tbody className={style.body}>



          <tr className={style.head}>
            {Object.keys(data[0]).map((key) => (
              <th style={{ borderLeft: '1px solid white' }}>{key}</th>
            ))}
            <th>Action</th>
          </tr>

          {data.map(
            (data) => (
              <tr className={style.row}>
                {/* {Object.entries(data).map(([key, value]) => (
            key.trim().toLowerCase()==='status'? (<td className={' '+(value==='successful')?(style.success):(style.failed)}>{value}</td>) : (<td>{value}</td>)

            // if (key.trim().toLowerCase()==='status') {
            //   console.log('hello')
            // }
             

            ))} */}

                {/* {Object.entries(data).forEach(([key, value]) => {
                  if (key.trim().toLowerCase() === 'status') {
                     return (<td className={' '+(value==='successful')?(style.success):(style.failed)}>{value}</td>)
                  }
                  else{
                     return  <td>{value}</td>
                  }
                })} */}

                      {/* {Object.entries(data).map(([key, value]) => (
                         key.trim().toLowerCase() !== 'status'&& <td>{value}</td>
                      ))} */}
                      {Object.entries(data).map(([key, value]) => {
                         if(key.trim().toLowerCase() === 'status'){
                          console.log((value.trim().toLowerCase()==='successful')?style.success:style.failed)
                              return (<td className={' '+((value.trim().toLowerCase()==='successful')?style.success:style.failed)}>{value}</td>)
                         }else{
                          return <td>{value}</td>
                         }
})}
                <td>...</td>
              </tr>
            )
          )}


        </tbody>

      </table>
    </div>
  )
}

export default Table