import React from 'react'
import { useParams } from 'react-router-dom'
import MobilePage from './MobilePage'
import LaptopPage from './LaptopPage'


const extractSelectedItem = (name: string)=> {
    const arr = name.split("&")
    return {
        tag: arr[0],
        itemName: arr[1],
        id: Number(arr[2])
    }
}

const ItemPage = () => {
    const {name} = useParams()
    const {tag, id, itemName} = extractSelectedItem(name as string)
    console.log("SELECTED::::", name)
    switch (tag) {
        case "mobile" : {
            return <MobilePage id={id as number} name={itemName as string} />
        }
        case "laptop": {
            return <LaptopPage id={id} name={itemName as string} />
        }
        default: return <div>
            SelectedItem:::: {tag} - {id} - {name}
        </div>
    }
}

export default ItemPage