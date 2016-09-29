import React from 'react'

import SearchResults from "../SearchResults"

const Styles = {
    header : {
        height: '50px',
        backgroundColor: 'pink',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
}

class Header extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            search : '',
            results : []
        }
    }

    onChange (e) {
        this.setState({
            search : e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault()

        fetch(`http://localhost:4242/podcast?term=${this.state.search}`)
            .then((reponse) => {
                return reponse.json()
            })
            .then(rep => {
                this.setState({
                    results : rep.results
                })
            })
            .catch(err => { console.log(err) })
    }

    onClose () {
        this.setState({
            search : '',
            results : []
        })
    }

    render () {
        const { results, search } = this.state

        return <header style={Styles.header}>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text"
                    value={search}
                    onChange={this.onChange.bind(this)}
                    placeholder="Podcast search..."
                />
            </form>
            <SearchResults
                results={results}
                onClose={this.onClose.bind(this)}
            />
        </header>
    }
}

export default Header
