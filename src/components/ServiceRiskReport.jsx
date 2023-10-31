// ServiceRiskReport.jsx

import React from 'react';
import '../styles/ServiceRiskReport.css';

const ServiceRiskReport = () => {
  const medicineData = [
    {
      name: 'Concerta ER 54mg 24cnt 30s AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
        
      ],
      additionalData: [53, 46, 39, 32, 25, 18, 73, 66, 58, 63, 54, 78, 71, 63, 18, 73, 66, 58, 63],
    },
    {
      name: 'Concerta ER 18mg 24cnt 30s AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [81, 74, 108, 101, 135, 128, 121, 114, 107, 100, 134, 127, 120, 113,121, 114, 107, 100, 134],
    },
    {
      name: 'Topamax 50mg 60 Sprinkle Caps AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [177, 170, 163, 156, 149, 142, 135, 128, 121, 170, 172, 165, 158, 151, 121, 114, 107, 100, 134],
    },
    {
      name: 'Invega Trinza 1x525mg SYR AUS-NZ',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [651, 644, 637, 630, 623, 616, 609, 602, 595, 588, 581, 574, 567, 560, 121, 114, 107, 100, 134],
    },
    {
      name: 'Eprex Protecs 20000U 6x0 5ml SYR AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [71, 64, 57, 51, 43, 50, 42, 50, 51, 63, 56, 49, 41, 50, 42, 50, 51, 63, 56],
    },
    {
      name: 'Eprex Protecs 30000U 6x0 3ml SYR AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [80, 73, 66, 59, 52, 44, 70, 63, 56, 70, 63, 56, 50, 41, 42, 50, 51, 63, 56],
    },
    {
      name: 'Eprex Protecs 80000U 6x0 8ml SYR AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [60, 53, 46, 72, 65, 58, 50, 47, 53, 64, 57, 49, 43, 37, 50, 42, 50, 51, 56],
    },
    {
      name: 'Imbruvica 560mg 30Tab AUS',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0],
    },
    {
      name: 'Tracleer 125mg 60Tab AU',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [231, 224, 217, 210, 203, 196, 189, 182, 175, 168, 161, 154, 147, 140, 196, 189, 182, 175, 168],
    },
    {
      name: 'Preziste 600mg 60FC Tab AUS-NZ',
      dates: [
        '02 Aug',
        '09 Aug',
        '16 Aug',
        '23 Aug',
        '30 Aug',
        '04 Sep',
        '11 Sep',
        '18 Sep',
        '25 Sep',
        '02 Oct',
        '09 Oct',
        '16 Oct',
        '23 Oct',
        '30 Oct',
        '06 Nov',
        '13 Nov',
        '20 Nov',
        '27 Nov',
        '04 Dec',
      ],
      additionalData: [67, 60, 71, 80, 73, 66, 59, 108, 101, 94, 87, 80, 73, 66, 59, 108, 101, 94, 87],
    },
  ];

  
  return (
    <div className='serviceRiskReport-container'>
      <table className='serviceRiskReport-table'>
        <thead>
          <tr>
            <th className='grey-heading-border'>Medicine</th>
            {medicineData[0].dates.map((date, index) => (
              <th key={index} className='grey-heading-border'>
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {medicineData.map((medicine, index) => (
            <tr key={index} className={index % 2 === 0 ? 'white-row' : 'light-grey-row'}>
              <td className='bold-text border medicine-name'>
                <input type="checkbox" /> {medicine.name}
              </td>
              {medicine.additionalData.map((data, index) => (
                <td key={index} className='border'>
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceRiskReport;
