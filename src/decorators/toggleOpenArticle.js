import React from 'react'

export default function toggleOpenArticle(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            ev && ev.preventDefault && ev.preventDefault();

            this.setState({
                // Check if opened - close
                openArticleId: this.state.openArticleId === id ? null : id
            })
        }
    }
}