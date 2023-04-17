import * as React from 'react'
import {AutoblogType} from "./autoblog-main";


export function AutoblogNote(props: AutoblogType) {
    return (
        <div className={'w-[300px] border-2 mt-4 ml-4 rounded-md box-border p-[10px] flex flex-col'}>
            <div className={'text-center font-bold'}>{props.name}</div>
            <p className={'border-2 rounded-md'}>{props.content}</p>
            <p className={'text-right'}>Published by {props.publishedAt} at {props.author}</p>
        </div>
    )
}

