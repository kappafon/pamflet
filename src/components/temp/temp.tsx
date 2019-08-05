import * as React from 'react'

interface TempObject {
    id: string
    title: string
}

export interface TempProps {
    testObject: TempObject
    onClicked(): void
}

export const Temp: React.FunctionComponent<TempProps> = (props: TempProps) => {
    return <div className="test-class">{props.testObject.title}</div>
}
