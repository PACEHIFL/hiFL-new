import React from 'react'

const OfficialInfo = ({ data }) => {

    console.log(data)
    return (
        <div className="border rounded-md py-2 mb-5">
            <h4 className="font-bold pl-4 pb-2">{data?.Position ? data?.Position : "Position"} </h4>
            <hr />
            <span className=" pl-4 pt-2 block capitalize"> {`${data?.User?.Firstname} ${data?.User?.Lastname}`} </span>
        </div>
    )
}

export default OfficialInfo