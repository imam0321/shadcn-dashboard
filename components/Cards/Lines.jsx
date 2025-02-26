"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        lineWidth={3}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
       
    />
)

export const Lines = () => {
  const data = [
    {
      "id": "japan",
      "color": "hsl(209, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 135
        },
        {
          "x": "helicopter",
          "y": 12
        },
        {
          "x": "boat",
          "y": 197
        },
        {
          "x": "train",
          "y": 257
        },
        {
          "x": "subway",
          "y": 61
        },
        {
          "x": "bus",
          "y": 87
        },
        {
          "x": "car",
          "y": 139
        },
        {
          "x": "moto",
          "y": 253
        },
        {
          "x": "bicycle",
          "y": 223
        },
        {
          "x": "horse",
          "y": 119
        },
        {
          "x": "skateboard",
          "y": 111
        },
        {
          "x": "others",
          "y": 50
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(94, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 261
        },
        {
          "x": "helicopter",
          "y": 173
        },
        {
          "x": "boat",
          "y": 61
        },
        {
          "x": "train",
          "y": 52
        },
        {
          "x": "subway",
          "y": 155
        },
        {
          "x": "bus",
          "y": 220
        },
        {
          "x": "car",
          "y": 87
        },
        {
          "x": "moto",
          "y": 223
        },
        {
          "x": "bicycle",
          "y": 33
        },
        {
          "x": "horse",
          "y": 154
        },
        {
          "x": "skateboard",
          "y": 236
        },
        {
          "x": "others",
          "y": 69
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(142, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 295
        },
        {
          "x": "helicopter",
          "y": 163
        },
        {
          "x": "boat",
          "y": 117
        },
        {
          "x": "train",
          "y": 72
        },
        {
          "x": "subway",
          "y": 30
        },
        {
          "x": "bus",
          "y": 163
        },
        {
          "x": "car",
          "y": 81
        },
        {
          "x": "moto",
          "y": 54
        },
        {
          "x": "bicycle",
          "y": 163
        },
        {
          "x": "horse",
          "y": 208
        },
        {
          "x": "skateboard",
          "y": 114
        },
        {
          "x": "others",
          "y": 193
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(354, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 285
        },
        {
          "x": "helicopter",
          "y": 240
        },
        {
          "x": "boat",
          "y": 156
        },
        {
          "x": "train",
          "y": 150
        },
        {
          "x": "subway",
          "y": 33
        },
        {
          "x": "bus",
          "y": 173
        },
        {
          "x": "car",
          "y": 94
        },
        {
          "x": "moto",
          "y": 253
        },
        {
          "x": "bicycle",
          "y": 13
        },
        {
          "x": "horse",
          "y": 250
        },
        {
          "x": "skateboard",
          "y": 3
        },
        {
          "x": "others",
          "y": 209
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(304, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 66
        },
        {
          "x": "helicopter",
          "y": 236
        },
        {
          "x": "boat",
          "y": 244
        },
        {
          "x": "train",
          "y": 294
        },
        {
          "x": "subway",
          "y": 59
        },
        {
          "x": "bus",
          "y": 91
        },
        {
          "x": "car",
          "y": 22
        },
        {
          "x": "moto",
          "y": 38
        },
        {
          "x": "bicycle",
          "y": 250
        },
        {
          "x": "horse",
          "y": 139
        },
        {
          "x": "skateboard",
          "y": 270
        },
        {
          "x": "others",
          "y": 103
        }
      ]
    }
  ]
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>Lines</CardTitle>
        <CardDescription>Those are the results of this year Lines.</CardDescription>
      </CardHeader>
      <CardContent className="h-[200px]">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  )
}
