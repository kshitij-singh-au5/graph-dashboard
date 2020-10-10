import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Dashboard extends Component {

    constructor(props) {
        super();
        this.state = {
            seriesArray: [{
                data: [8200, 9320, 9010, 9340, 18900, 15300, 13200],
                type: 'line',
                smooth: true,
            },
            {
                data: [7200, 8320, 10010, 11340, 13900, 14300, 15200],
                type: 'line',
                smooth: true
            }],
            totalEarning: 83360,
            totalPaid: 80270
        }
    }

    chartChange = (e) => {
        console.log(e.target.value);
        console.log(this.state.seriesArray);

        if (e.target.value === 'thisMonth') {
            console.log(e)
            this.setState({
                seriesArray: [{
                    data: [8200, 9320, 9010, 9340, 18900, 15300, 13200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [7200, 8320, 10010, 11340, 13900, 14300, 15200],
                    type: 'line',
                    smooth: true
                }],
                totalEarning: 83360,
                totalPaid: 80270
            })
        }

        if (e.target.value === 'lastMonth') {
            this.setState({
                seriesArray: [{
                    data: [10200, 11320, 9010, 10340, 17900, 16300, 14200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [12200, 5320, 8010, 10340, 12900, 11300, 18200],
                    type: 'line',
                    smooth: true
                }],
                totalEarning: 89270,
                totalPaid: 78270
            })
        }

        if (e.target.value === 'thisQuarter') {
            this.setState({
                seriesArray: [{
                    data: [3200, 13320, 12010, 17340, 10900, 11300, 7200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [8500, 10320, 15010, 17340, 19900, 9300, 12200],
                    type: 'line',
                    smooth: true
                }],
                totalEarning: 75270,
                totalPaid: 92570
            })
        }

        if (e.target.value === 'thisYear') {
            this.setState({
                seriesArray: [{
                    data: [18200, 19320, 6010, 7340, 10900, 16300, 18200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [17200, 15320, 16010, 7340, 13900, 14300, 15200],
                    type: 'line',
                    smooth: true
                }],
                totalEarning: 96270,
                totalPaid: 99270
            })
        }

        if (e.target.value === 'lastYear') {
            this.setState({
                seriesArray: [{
                    data: [17200, 18320, 7010, 6340, 9900, 14300, 17200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [19200, 14320, 12010, 9340, 11900, 13300, 17200],
                    type: 'line',
                    smooth: true
                }],
                totalEarning: 90270,
                totalPaid: 97270
            })
        }

    }



    render() {
        return (
            <div>
                <div className=' mt-5 w-25' style={{ marginLeft: '30%' }}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <b>For your portfolio</b>
                        </div>
                        <div className='col-md-6'>
                            <select onChange={(value) => this.chartChange(value)}>
                                <option value='thisMonth' className="dropdown-item">This month</option>
                                <option value='lastMonth' className="dropdown-item">Last month</option>
                                <option value='thisQuarter' className="dropdown-item">This quarter</option>
                                <option value='thisYear' className="dropdown-item">This year</option>
                                <option value='lastYear' className="dropdown-item">Last year</option>
                            </select>
                        </div>
                    </div>

                    <div className='row mt-4 ml-3'>
                        <div className='col-md-4' style={{borderStyle:'solid', borderWidth:'thick', borderColor:'palegreen'}}>
                        ₹ {this.state.totalEarning}
                        </div>
                        <div className='col-md-4 ml-2' style={{borderStyle:'solid', borderWidth:'thick', borderColor:'red'}}>
                        ₹ {this.state.totalPaid}
                        </div>
                    </div>

                    <div className='row ml-3 mt-1'>
                        <div className='col-md-4'>
                            <p className='font-weight-light'>Total Earning</p>
                        </div>
                        <div className='col-md-4 ml-2'>
                            <p className='font-weight-light'>Amount Paid</p>
                        </div>
                    </div>

                </div>
                <ReactEcharts
                    option={{
                        xAxis: {
                            type: 'category',
                            data: ['March', 'April', 'May', 'June', 'July', 'August', 'September']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: this.state.seriesArray,
                    }}

                    style={{ height: "50vh", top: 50, width: "50vw", marginLeft: '25%' }}
                />
            </div>
        );
    }
}

export default Dashboard;