import PropTypes from 'prop-types'
import { Component } from 'react'

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string,
        forNumber: PropTypes.number.isRequired
    }

    render() {
        const { name, forNumber, children } = this.props
        return (
            <div>
                <div>안녕 {name} 새로운 컴포넌트입니다.</div> <br />
                칠드런 값은 {children} 입니다. 
                {/* children은 component 사이의 값을 가져온다. */}
                <br />
                좋아하는 숫자는 {forNumber} 입니다.
            </div>
        )
    }
}

// MyComponent.defaultProps = {
//     name: '기본이름'
// }

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     forNumber: PropTypes.number.isRequired
// }

export default MyComponent //외부로 내보내기 위해서는 반드시 export default 붙여줘야 한다