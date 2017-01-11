import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setSelectionIds } from '../AC'
import 'react-select/dist/react-select.css'

class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    // state = {
    //     selected: null
    // }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={this.props.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => {
        const ids = selected.map(article => article.value)
        this.props.setSelectionIds(ids)
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.filters.selectedIds
    }
}

const mapDispatchToProps = {
    setSelectionIds
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSelect)