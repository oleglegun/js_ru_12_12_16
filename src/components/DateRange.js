import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { setDateRange } from '../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (e, day) => {
        this.props.setDateRange(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dateRange: state.filters.dateRange
    }
}

const mapDispatchToProps = {
    setDateRange
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRange)