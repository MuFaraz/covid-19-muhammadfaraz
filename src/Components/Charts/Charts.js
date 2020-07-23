import React from 'react'
import {Bar} from 'react-chartjs-2';

export const Charts = (props) => {
    if (!props.apiData.confirmed){
        return ''
        // return 'Loading...'
        //  return props.apiData['confirmed']={}
        // return 'props.apiData'
          // props.apiData['confirmed']
      }
    console.log(props.apiData['confirmed'].value)
//     const [dailyData,setDailydata] = useState([])
// //     // setDailydata(props.apiData)
// //     // console.log('sas',props.apiData)
//     useEffect(()=>{
//     const fetchAPI = async ()=>{
//        const initialDailyData = await fetchData()
//         setDailydata(initialDailyData);
//     }
    
//     fetchAPI();
//     console.log(dailyData)
// },[])
// if ()
// const lineChart = (
//     dailyData[0] ? (
//       <Line
//         data={{
//           labels: dailyData.map(({ date }) => date),
//           datasets: [{
//             data: dailyData.map((data) => data.confirmed),
//             label: 'Infected',
//             borderColor: '#3333ff',
//             fill: true,
//           }, {
//             data: dailyData.map((data) => data.deaths),
//             label: 'Deaths',
//             borderColor: 'red',
//             backgroundColor: 'rgba(255, 0, 0, 0.5)',
//             fill: true,
//           },
//           ],
//         }}
//       />
//     ) : null
//   );

const data = {
    
    datasets: [
      {
        label: 'Confirmed',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [props.apiData['confirmed'].value]
      },
      {
        label: 'Recovered',
        backgroundColor: 'red',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [props.apiData['recovered'].value]
      },
      {
        label: 'Death',
        backgroundColor: 'blue',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [props.apiData['deaths'].value]
      }
    ]
  };
    return (
        <div>
            <h2></h2>
           <Bar
          data={data}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />

        </div>
    )
}

