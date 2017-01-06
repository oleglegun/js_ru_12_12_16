import React, {Component, PropTypes} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayPick extends Component {
    state = {
        from: null,
        to: null
    };

    render() {
        const {from, to} = this.state;
        return (
            <div>
                <DayPicker onDayClick={this.handleDayPick} selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }/>
                <p>You have selected: {from ? from.toLocaleDateString() : ''} - {to ? to.toLocaleDateString() : ''}</p>
            </div>
        );
    }

    handleDayPick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
}

export default DayPick;
