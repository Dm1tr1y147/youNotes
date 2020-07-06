import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_NOTES } from '../../graphql/queries'

const ListNotes: React.FC = () => {
    
    const { loading, error, data } = useQuery(FETCH_NOTES)

    if (loading) return <>Loading...</>
    if (error) return <>Error: {error.message}</>
    return (
        <ul>
            {data.notes.map((note: any) => (
                <li key={note.id}>
                    <h1>{note.title}</h1>
                    <p>{note.text}</p>
                </li>
            ))}
        </ul>
    )
}

export default ListNotes