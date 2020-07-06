import React, { useState } from 'react'
import { InputBase } from '@material-ui/core'

import './styles.css'
import useStyles from '../../styles'

const Search: React.FC = () => {
    const [query, setQuery] = useState<string>('')
    const classes = useStyles()
    
    return (
        <InputBase
            value={query}
            onChange={
                e => setQuery(e.target.value)
            }
            className={classes.searchBar}
            placeholder="Search..."
        />
    )
}

export default Search