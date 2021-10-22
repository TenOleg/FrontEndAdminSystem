import styles from './ChartsOfUsers.module.css';
import {AreaChart, YAxis, ResponsiveContainer, XAxis, Tooltip, CartesianGrid, Area} from "recharts";

const ChartsOfUsers = (props) => {
    return (
        <div className={styles.chart}>
            <h3 className={styles.chartTitle}>Amount of Users</h3>
                <ResponsiveContainer  width={'100%'} aspect={4 / 1}>
                    <AreaChart width={730} height={250} data={props.usersStatistics}
                               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorActiveAmt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3bb077" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3bb077" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorBannedAmt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2a7ade" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#2a7ade" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorDeletedAmt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#d95087" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#d95087" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="monthName" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#colorCount)" />
                        <Area type="monotone" dataKey="activeAmt" stroke="#3bb077" fillOpacity={1} fill="url(#colorActiveAmt)" />
                        <Area type="monotone" dataKey="bannedAmt" stroke="#2a7ade" fillOpacity={1} fill="url(#colorBannedAmt)" />
                        <Area type="monotone" dataKey="deletedAmt" stroke="#d95087" fillOpacity={1} fill="url(#colorDeletedAmt)" />
                    </AreaChart>
                </ResponsiveContainer>

        </div>
    )
}

export default ChartsOfUsers;