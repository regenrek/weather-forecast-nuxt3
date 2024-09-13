import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  const data = {
        "lat": 48.2082,
        "lon": 16.3738,
        "timezone": "Europe/Vienna",
        "timezone_offset": 7200,
        "current": {
          "dt": 1726235656,
          "sunrise": 1726201747,
          "sunset": 1726247511,
          "temp": 7.57,
          "feels_like": 1.96,
          "pressure": 1010,
          "humidity": 90,
          "dew_point": 6.04,
          "uvi": 0.17,
          "clouds": 75,
          "visibility": 10000,
          "wind_speed": 15.2,
          "wind_deg": 329,
          "wind_gust": 26.82,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
            }
          ],
          "rain": {
            "1h": 2.73
          }
        },
        "minutely": [
          {
            "dt": 1726235700,
            "precipitation": 2.734
          },
          {
            "dt": 1726235760,
            "precipitation": 2.6608
          },
          {
            "dt": 1726235820,
            "precipitation": 2.5876
          },
          {
            "dt": 1726235880,
            "precipitation": 2.5144
          },
          {
            "dt": 1726235940,
            "precipitation": 2.4412
          },
          {
            "dt": 1726236000,
            "precipitation": 2.368
          },
          {
            "dt": 1726236060,
            "precipitation": 2.368
          },
          {
            "dt": 1726236120,
            "precipitation": 2.368
          },
          {
            "dt": 1726236180,
            "precipitation": 2.368
          },
          {
            "dt": 1726236240,
            "precipitation": 2.368
          },
          {
            "dt": 1726236300,
            "precipitation": 2.368
          },
          {
            "dt": 1726236360,
            "precipitation": 2.368
          },
          {
            "dt": 1726236420,
            "precipitation": 2.368
          },
          {
            "dt": 1726236480,
            "precipitation": 2.368
          },
          {
            "dt": 1726236540,
            "precipitation": 2.368
          },
          {
            "dt": 1726236600,
            "precipitation": 2.368
          },
          {
            "dt": 1726236660,
            "precipitation": 2.368
          },
          {
            "dt": 1726236720,
            "precipitation": 2.368
          },
          {
            "dt": 1726236780,
            "precipitation": 2.368
          },
          {
            "dt": 1726236840,
            "precipitation": 2.368
          },
          {
            "dt": 1726236900,
            "precipitation": 2.368
          },
          {
            "dt": 1726236960,
            "precipitation": 2.3044
          },
          {
            "dt": 1726237020,
            "precipitation": 2.2408
          },
          {
            "dt": 1726237080,
            "precipitation": 2.1772
          },
          {
            "dt": 1726237140,
            "precipitation": 2.1136
          },
          {
            "dt": 1726237200,
            "precipitation": 2.05
          },
          {
            "dt": 1726237260,
            "precipitation": 2.05
          },
          {
            "dt": 1726237320,
            "precipitation": 2.05
          },
          {
            "dt": 1726237380,
            "precipitation": 2.05
          },
          {
            "dt": 1726237440,
            "precipitation": 2.05
          },
          {
            "dt": 1726237500,
            "precipitation": 2.05
          },
          {
            "dt": 1726237560,
            "precipitation": 1.9952
          },
          {
            "dt": 1726237620,
            "precipitation": 1.9404
          },
          {
            "dt": 1726237680,
            "precipitation": 1.8856
          },
          {
            "dt": 1726237740,
            "precipitation": 1.8308
          },
          {
            "dt": 1726237800,
            "precipitation": 1.776
          },
          {
            "dt": 1726237860,
            "precipitation": 1.776
          },
          {
            "dt": 1726237920,
            "precipitation": 1.776
          },
          {
            "dt": 1726237980,
            "precipitation": 1.776
          },
          {
            "dt": 1726238040,
            "precipitation": 1.776
          },
          {
            "dt": 1726238100,
            "precipitation": 1.776
          },
          {
            "dt": 1726238160,
            "precipitation": 1.776
          },
          {
            "dt": 1726238220,
            "precipitation": 1.776
          },
          {
            "dt": 1726238280,
            "precipitation": 1.776
          },
          {
            "dt": 1726238340,
            "precipitation": 1.776
          },
          {
            "dt": 1726238400,
            "precipitation": 1.776
          },
          {
            "dt": 1726238460,
            "precipitation": 1.776
          },
          {
            "dt": 1726238520,
            "precipitation": 1.776
          },
          {
            "dt": 1726238580,
            "precipitation": 1.776
          },
          {
            "dt": 1726238640,
            "precipitation": 1.776
          },
          {
            "dt": 1726238700,
            "precipitation": 1.776
          },
          {
            "dt": 1726238760,
            "precipitation": 1.7284
          },
          {
            "dt": 1726238820,
            "precipitation": 1.6808
          },
          {
            "dt": 1726238880,
            "precipitation": 1.6332
          },
          {
            "dt": 1726238940,
            "precipitation": 1.5856
          },
          {
            "dt": 1726239000,
            "precipitation": 1.538
          },
          {
            "dt": 1726239060,
            "precipitation": 1.538
          },
          {
            "dt": 1726239120,
            "precipitation": 1.538
          },
          {
            "dt": 1726239180,
            "precipitation": 1.538
          },
          {
            "dt": 1726239240,
            "precipitation": 1.538
          }
        ],
        "hourly": [
          {
            "dt": 1726232400,
            "temp": 7.47,
            "feels_like": 3.18,
            "pressure": 1010,
            "humidity": 91,
            "dew_point": 6.1,
            "uvi": 0.21,
            "clouds": 80,
            "visibility": 3697,
            "wind_speed": 8.72,
            "wind_deg": 299,
            "wind_gust": 15.7,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 5.19
            }
          },
          {
            "dt": 1726236000,
            "temp": 7.57,
            "feels_like": 3.19,
            "pressure": 1010,
            "humidity": 90,
            "dew_point": 6.04,
            "uvi": 0.17,
            "clouds": 75,
            "visibility": 5597,
            "wind_speed": 9.2,
            "wind_deg": 303,
            "wind_gust": 16.15,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2.37
            }
          },
          {
            "dt": 1726239600,
            "temp": 7.5,
            "feels_like": 3.11,
            "pressure": 1010,
            "humidity": 91,
            "dew_point": 6.13,
            "uvi": 0.08,
            "clouds": 80,
            "visibility": 8101,
            "wind_speed": 9.15,
            "wind_deg": 304,
            "wind_gust": 16.34,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 1.54
            }
          },
          {
            "dt": 1726243200,
            "temp": 7.42,
            "feels_like": 2.92,
            "pressure": 1010,
            "humidity": 89,
            "dew_point": 5.73,
            "uvi": 0.03,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 9.47,
            "wind_deg": 303,
            "wind_gust": 16.94,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 1.54
            }
          },
          {
            "dt": 1726246800,
            "temp": 7.44,
            "feels_like": 2.94,
            "pressure": 1009,
            "humidity": 88,
            "dew_point": 5.58,
            "uvi": 0,
            "clouds": 90,
            "visibility": 10000,
            "wind_speed": 9.51,
            "wind_deg": 303,
            "wind_gust": 17.49,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.2
            }
          },
          {
            "dt": 1726250400,
            "temp": 7.5,
            "feels_like": 3.16,
            "pressure": 1010,
            "humidity": 87,
            "dew_point": 5.48,
            "uvi": 0,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 8.95,
            "wind_deg": 299,
            "wind_gust": 17.09,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.53
            }
          },
          {
            "dt": 1726254000,
            "temp": 7.56,
            "feels_like": 3.14,
            "pressure": 1010,
            "humidity": 89,
            "dew_point": 5.61,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.33,
            "wind_deg": 296,
            "wind_gust": 17.61,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 1.12
            }
          },
          {
            "dt": 1726257600,
            "temp": 7.77,
            "feels_like": 3.42,
            "pressure": 1010,
            "humidity": 88,
            "dew_point": 5.67,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.33,
            "wind_deg": 293,
            "wind_gust": 17.63,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.39
            }
          },
          {
            "dt": 1726261200,
            "temp": 8.13,
            "feels_like": 3.9,
            "pressure": 1010,
            "humidity": 88,
            "dew_point": 5.89,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.32,
            "wind_deg": 293,
            "wind_gust": 17.26,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.53
            }
          },
          {
            "dt": 1726264800,
            "temp": 8.36,
            "feels_like": 4.25,
            "pressure": 1010,
            "humidity": 88,
            "dew_point": 6.23,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.12,
            "wind_deg": 287,
            "wind_gust": 16.65,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.75
            }
          },
          {
            "dt": 1726268400,
            "temp": 8.68,
            "feels_like": 4.58,
            "pressure": 1010,
            "humidity": 89,
            "dew_point": 6.74,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.47,
            "wind_deg": 289,
            "wind_gust": 16.97,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.73
            }
          },
          {
            "dt": 1726272000,
            "temp": 8.22,
            "feels_like": 3.9,
            "pressure": 1010,
            "humidity": 87,
            "dew_point": 5.98,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.79,
            "wind_deg": 284,
            "wind_gust": 16.86,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.37
            }
          },
          {
            "dt": 1726275600,
            "temp": 8.49,
            "feels_like": 4.3,
            "pressure": 1010,
            "humidity": 87,
            "dew_point": 6.19,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.6,
            "wind_deg": 280,
            "wind_gust": 16.17,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.94,
            "rain": {
              "1h": 0.17
            }
          },
          {
            "dt": 1726279200,
            "temp": 9.12,
            "feels_like": 5.21,
            "pressure": 1009,
            "humidity": 88,
            "dew_point": 6.95,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.27,
            "wind_deg": 281,
            "wind_gust": 15.73,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.69
          },
          {
            "dt": 1726282800,
            "temp": 9.26,
            "feels_like": 5.37,
            "pressure": 1009,
            "humidity": 86,
            "dew_point": 6.84,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.37,
            "wind_deg": 281,
            "wind_gust": 15.67,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.51
          },
          {
            "dt": 1726286400,
            "temp": 9.18,
            "feels_like": 5.15,
            "pressure": 1010,
            "humidity": 84,
            "dew_point": 6.42,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.9,
            "wind_deg": 279,
            "wind_gust": 16.62,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.62,
            "rain": {
              "1h": 0.12
            }
          },
          {
            "dt": 1726290000,
            "temp": 8.73,
            "feels_like": 4.39,
            "pressure": 1010,
            "humidity": 86,
            "dew_point": 6.22,
            "uvi": 0,
            "clouds": 100,
            "visibility": 9233,
            "wind_speed": 10.62,
            "wind_deg": 278,
            "wind_gust": 17.32,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.95,
            "rain": {
              "1h": 0.95
            }
          },
          {
            "dt": 1726293600,
            "temp": 7.92,
            "feels_like": 3.16,
            "pressure": 1011,
            "humidity": 87,
            "dew_point": 5.71,
            "uvi": 0.01,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 11.32,
            "wind_deg": 278,
            "wind_gust": 18.74,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 1.8
            }
          },
          {
            "dt": 1726297200,
            "temp": 7.76,
            "feels_like": 2.84,
            "pressure": 1011,
            "humidity": 87,
            "dew_point": 5.42,
            "uvi": 0.07,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 11.85,
            "wind_deg": 276,
            "wind_gust": 19.99,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.96
            }
          },
          {
            "dt": 1726300800,
            "temp": 7.61,
            "feels_like": 2.47,
            "pressure": 1012,
            "humidity": 85,
            "dew_point": 5.01,
            "uvi": 0.18,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 12.71,
            "wind_deg": 277,
            "wind_gust": 21.02,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.48
            }
          },
          {
            "dt": 1726304400,
            "temp": 7.49,
            "feels_like": 2.31,
            "pressure": 1012,
            "humidity": 85,
            "dew_point": 4.95,
            "uvi": 0.37,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 12.67,
            "wind_deg": 274,
            "wind_gust": 20.85,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.85
            }
          },
          {
            "dt": 1726308000,
            "temp": 6.47,
            "feels_like": 0.95,
            "pressure": 1013,
            "humidity": 85,
            "dew_point": 3.8,
            "uvi": 0.53,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 12.57,
            "wind_deg": 272,
            "wind_gust": 21.53,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.48
            }
          },
          {
            "dt": 1726311600,
            "temp": 5.8,
            "feels_like": -0.01,
            "pressure": 1013,
            "humidity": 84,
            "dew_point": 3.06,
            "uvi": 0.23,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 12.84,
            "wind_deg": 274,
            "wind_gust": 22.02,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.19
            }
          },
          {
            "dt": 1726315200,
            "temp": 5.48,
            "feels_like": -0.63,
            "pressure": 1013,
            "humidity": 85,
            "dew_point": 2.92,
            "uvi": 0.21,
            "clouds": 100,
            "visibility": 7855,
            "wind_speed": 13.74,
            "wind_deg": 278,
            "wind_gust": 23,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 1.01
            }
          },
          {
            "dt": 1726318800,
            "temp": 5.77,
            "feels_like": -0.14,
            "pressure": 1014,
            "humidity": 85,
            "dew_point": 3.17,
            "uvi": 0.11,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 13.27,
            "wind_deg": 277,
            "wind_gust": 22.66,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.9
            }
          },
          {
            "dt": 1726322400,
            "temp": 5.43,
            "feels_like": -0.55,
            "pressure": 1014,
            "humidity": 86,
            "dew_point": 2.96,
            "uvi": 0.06,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 13.05,
            "wind_deg": 277,
            "wind_gust": 22.78,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.99,
            "rain": {
              "1h": 0.36
            }
          },
          {
            "dt": 1726326000,
            "temp": 5.17,
            "feels_like": -0.98,
            "pressure": 1014,
            "humidity": 86,
            "dew_point": 2.8,
            "uvi": 0.02,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 13.41,
            "wind_deg": 277,
            "wind_gust": 22.89,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.97,
            "rain": {
              "1h": 0.78
            }
          },
          {
            "dt": 1726329600,
            "temp": 5.22,
            "feels_like": -0.87,
            "pressure": 1014,
            "humidity": 88,
            "dew_point": 3.08,
            "uvi": 0.01,
            "clouds": 100,
            "visibility": 7249,
            "wind_speed": 13.19,
            "wind_deg": 276,
            "wind_gust": 22.71,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2.98
            }
          },
          {
            "dt": 1726333200,
            "temp": 5.39,
            "feels_like": -0.71,
            "pressure": 1014,
            "humidity": 88,
            "dew_point": 3.24,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 13.55,
            "wind_deg": 277,
            "wind_gust": 22.94,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2.04
            }
          },
          {
            "dt": 1726336800,
            "temp": 5.7,
            "feels_like": -0.22,
            "pressure": 1014,
            "humidity": 89,
            "dew_point": 3.8,
            "uvi": 0,
            "clouds": 100,
            "visibility": 7401,
            "wind_speed": 13.21,
            "wind_deg": 276,
            "wind_gust": 22.16,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2.72
            }
          },
          {
            "dt": 1726340400,
            "temp": 6.76,
            "feels_like": 1.47,
            "pressure": 1014,
            "humidity": 92,
            "dew_point": 5.39,
            "uvi": 0,
            "clouds": 100,
            "visibility": 3490,
            "wind_speed": 11.99,
            "wind_deg": 278,
            "wind_gust": 20.18,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 4.58
            }
          },
          {
            "dt": 1726344000,
            "temp": 8.29,
            "feels_like": 3.81,
            "pressure": 1013,
            "humidity": 93,
            "dew_point": 6.97,
            "uvi": 0,
            "clouds": 100,
            "visibility": 2579,
            "wind_speed": 10.62,
            "wind_deg": 283,
            "wind_gust": 19.56,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 6.09
            }
          },
          {
            "dt": 1726347600,
            "temp": 9.59,
            "feels_like": 5.67,
            "pressure": 1013,
            "humidity": 92,
            "dew_point": 8.06,
            "uvi": 0,
            "clouds": 100,
            "visibility": 3044,
            "wind_speed": 10.01,
            "wind_deg": 292,
            "wind_gust": 19.97,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 6.48
            }
          },
          {
            "dt": 1726351200,
            "temp": 10.06,
            "feels_like": 9.5,
            "pressure": 1012,
            "humidity": 91,
            "dew_point": 8.47,
            "uvi": 0,
            "clouds": 100,
            "visibility": 3572,
            "wind_speed": 10.55,
            "wind_deg": 298,
            "wind_gust": 20.95,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 6.93
            }
          },
          {
            "dt": 1726354800,
            "temp": 10.09,
            "feels_like": 9.5,
            "pressure": 1011,
            "humidity": 90,
            "dew_point": 8.23,
            "uvi": 0,
            "clouds": 100,
            "visibility": 5212,
            "wind_speed": 11.33,
            "wind_deg": 298,
            "wind_gust": 21.69,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 5.16
            }
          },
          {
            "dt": 1726358400,
            "temp": 9.96,
            "feels_like": 5.86,
            "pressure": 1011,
            "humidity": 90,
            "dew_point": 8.14,
            "uvi": 0,
            "clouds": 100,
            "visibility": 4156,
            "wind_speed": 11.49,
            "wind_deg": 300,
            "wind_gust": 21.93,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 4.07
            }
          },
          {
            "dt": 1726362000,
            "temp": 9.74,
            "feels_like": 5.6,
            "pressure": 1010,
            "humidity": 89,
            "dew_point": 7.91,
            "uvi": 0,
            "clouds": 100,
            "visibility": 4743,
            "wind_speed": 11.3,
            "wind_deg": 299,
            "wind_gust": 22.2,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 5.5
            }
          },
          {
            "dt": 1726365600,
            "temp": 9.68,
            "feels_like": 5.58,
            "pressure": 1010,
            "humidity": 90,
            "dew_point": 7.81,
            "uvi": 0,
            "clouds": 100,
            "visibility": 3488,
            "wind_speed": 11.03,
            "wind_deg": 300,
            "wind_gust": 22.14,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 5.28
            }
          },
          {
            "dt": 1726369200,
            "temp": 9.48,
            "feels_like": 5.38,
            "pressure": 1010,
            "humidity": 91,
            "dew_point": 7.77,
            "uvi": 0,
            "clouds": 100,
            "visibility": 3965,
            "wind_speed": 10.7,
            "wind_deg": 299,
            "wind_gust": 21.66,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 7.13
            }
          },
          {
            "dt": 1726372800,
            "temp": 9.36,
            "feels_like": 5.37,
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 7.83,
            "uvi": 0,
            "clouds": 100,
            "visibility": 3913,
            "wind_speed": 9.95,
            "wind_deg": 296,
            "wind_gust": 20.64,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 7.46
            }
          },
          {
            "dt": 1726376400,
            "temp": 9.26,
            "feels_like": 5.62,
            "pressure": 1011,
            "humidity": 93,
            "dew_point": 7.88,
            "uvi": 0,
            "clouds": 100,
            "visibility": 2328,
            "wind_speed": 8.34,
            "wind_deg": 299,
            "wind_gust": 18.32,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 8.39
            }
          },
          {
            "dt": 1726380000,
            "temp": 9.27,
            "feels_like": 5.55,
            "pressure": 1012,
            "humidity": 93,
            "dew_point": 7.84,
            "uvi": 0.03,
            "clouds": 100,
            "visibility": 4477,
            "wind_speed": 8.7,
            "wind_deg": 295,
            "wind_gust": 17.86,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 7.06
            }
          },
          {
            "dt": 1726383600,
            "temp": 9.23,
            "feels_like": 5.44,
            "pressure": 1013,
            "humidity": 92,
            "dew_point": 7.72,
            "uvi": 0.05,
            "clouds": 100,
            "visibility": 5224,
            "wind_speed": 8.93,
            "wind_deg": 293,
            "wind_gust": 17.35,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 3.52
            }
          },
          {
            "dt": 1726387200,
            "temp": 8.88,
            "feels_like": 4.82,
            "pressure": 1014,
            "humidity": 92,
            "dew_point": 7.37,
            "uvi": 0.11,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 9.58,
            "wind_deg": 288,
            "wind_gust": 17.38,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2.29
            }
          },
          {
            "dt": 1726390800,
            "temp": 8.41,
            "feels_like": 4.03,
            "pressure": 1014,
            "humidity": 91,
            "dew_point": 6.82,
            "uvi": 0.35,
            "clouds": 100,
            "visibility": 7498,
            "wind_speed": 10.35,
            "wind_deg": 282,
            "wind_gust": 18.17,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 1.65
            }
          },
          {
            "dt": 1726394400,
            "temp": 8.11,
            "feels_like": 3.43,
            "pressure": 1014,
            "humidity": 90,
            "dew_point": 6.35,
            "uvi": 0.17,
            "clouds": 100,
            "visibility": 9707,
            "wind_speed": 11.28,
            "wind_deg": 280,
            "wind_gust": 19.26,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2.78
            }
          },
          {
            "dt": 1726398000,
            "temp": 7.95,
            "feels_like": 3.38,
            "pressure": 1014,
            "humidity": 90,
            "dew_point": 6.04,
            "uvi": 0.22,
            "clouds": 100,
            "visibility": 6825,
            "wind_speed": 10.52,
            "wind_deg": 280,
            "wind_gust": 18.83,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 2
            }
          },
          {
            "dt": 1726401600,
            "temp": 8.12,
            "feels_like": 3.76,
            "pressure": 1015,
            "humidity": 90,
            "dew_point": 6.39,
            "uvi": 0.25,
            "clouds": 100,
            "visibility": 6019,
            "wind_speed": 9.85,
            "wind_deg": 280,
            "wind_gust": 18.09,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 3.39
            }
          }
        ],
        "daily": [
          {
            "dt": 1726221600,
            "sunrise": 1726201747,
            "sunset": 1726247511,
            "moonrise": 1726240440,
            "moonset": 0,
            "moon_phase": 0.32,
            "summary": "There will be rain today",
            "temp": {
              "day": 6.78,
              "min": 6.78,
              "max": 8.93,
              "night": 8.13,
              "eve": 7.42,
              "morn": 7.47
            },
            "feels_like": {
              "day": 2.22,
              "night": 3.9,
              "eve": 2.92,
              "morn": 3.52
            },
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 5.57,
            "wind_speed": 9.51,
            "wind_deg": 303,
            "wind_gust": 17.63,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
              }
            ],
            "clouds": 95,
            "pop": 1,
            "rain": 62.04,
            "uvi": 0.54
          },
          {
            "dt": 1726308000,
            "sunrise": 1726288229,
            "sunset": 1726333785,
            "moonrise": 1726328940,
            "moonset": 1726268280,
            "moon_phase": 0.36,
            "summary": "Expect a day of partly cloudy with rain",
            "temp": {
              "day": 6.47,
              "min": 5.17,
              "max": 9.59,
              "night": 9.59,
              "eve": 5.22,
              "morn": 9.18
            },
            "feels_like": {
              "day": 0.95,
              "night": 5.67,
              "eve": -0.87,
              "morn": 5.15
            },
            "pressure": 1013,
            "humidity": 85,
            "dew_point": 3.8,
            "wind_speed": 13.74,
            "wind_deg": 278,
            "wind_gust": 23,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
              }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 35.79,
            "uvi": 0.53
          },
          {
            "dt": 1726394400,
            "sunrise": 1726374711,
            "sunset": 1726420059,
            "moonrise": 1726416960,
            "moonset": 1726359660,
            "moon_phase": 0.4,
            "summary": "You can expect rain in the morning, with partly cloudy in the afternoon",
            "temp": {
              "day": 8.11,
              "min": 7.95,
              "max": 10.09,
              "night": 9.55,
              "eve": 9.46,
              "morn": 9.36
            },
            "feels_like": {
              "day": 3.43,
              "night": 6.01,
              "eve": 5.75,
              "morn": 5.37
            },
            "pressure": 1014,
            "humidity": 90,
            "dew_point": 6.35,
            "wind_speed": 11.49,
            "wind_deg": 300,
            "wind_gust": 22.2,
            "weather": [
              {
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
              }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 78.27,
            "uvi": 0.35
          },
          {
            "dt": 1726480800,
            "sunrise": 1726461193,
            "sunset": 1726506333,
            "moonrise": 1726504620,
            "moonset": 1726451340,
            "moon_phase": 0.43,
            "summary": "You can expect partly cloudy in the morning, with rain in the afternoon",
            "temp": {
              "day": 10.97,
              "min": 9.56,
              "max": 11.31,
              "night": 10.04,
              "eve": 10.09,
              "morn": 9.9
            },
            "feels_like": {
              "day": 10.29,
              "night": 9.37,
              "eve": 9.5,
              "morn": 6.78
            },
            "pressure": 1016,
            "humidity": 83,
            "dew_point": 7.9,
            "wind_speed": 8.4,
            "wind_deg": 279,
            "wind_gust": 14.53,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 4.46,
            "uvi": 1.04
          },
          {
            "dt": 1726567200,
            "sunrise": 1726547675,
            "sunset": 1726592606,
            "moonrise": 1726592160,
            "moonset": 1726543020,
            "moon_phase": 0.47,
            "summary": "The day will start with rain through the late morning hours, transitioning to partly cloudy",
            "temp": {
              "day": 10.92,
              "min": 10.03,
              "max": 16.35,
              "night": 14.09,
              "eve": 16.35,
              "morn": 10.03
            },
            "feels_like": {
              "day": 10.37,
              "night": 13.83,
              "eve": 15.97,
              "morn": 9.41
            },
            "pressure": 1022,
            "humidity": 88,
            "dew_point": 8.7,
            "wind_speed": 6.57,
            "wind_deg": 278,
            "wind_gust": 12.78,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 3.83,
            "uvi": 0.97
          },
          {
            "dt": 1726653600,
            "sunrise": 1726634157,
            "sunset": 1726678880,
            "moonrise": 1726679580,
            "moonset": 1726634700,
            "moon_phase": 0.5,
            "summary": "You can expect partly cloudy in the morning, with clearing in the afternoon",
            "temp": {
              "day": 16.67,
              "min": 14,
              "max": 20.01,
              "night": 15.69,
              "eve": 20.01,
              "morn": 14.03
            },
            "feels_like": {
              "day": 16.14,
              "night": 15.35,
              "eve": 19.58,
              "morn": 13.68
            },
            "pressure": 1024,
            "humidity": 67,
            "dew_point": 10.22,
            "wind_speed": 2.51,
            "wind_deg": 126,
            "wind_gust": 5.47,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 1
          },
          {
            "dt": 1726740000,
            "sunrise": 1726720639,
            "sunset": 1726765153,
            "moonrise": 1726767060,
            "moonset": 1726726320,
            "moon_phase": 0.55,
            "summary": "There will be clear sky until morning, then partly cloudy",
            "temp": {
              "day": 19.58,
              "min": 14.7,
              "max": 22.18,
              "night": 16.39,
              "eve": 19.95,
              "morn": 15.25
            },
            "feels_like": {
              "day": 18.87,
              "night": 15.99,
              "eve": 19.38,
              "morn": 14.68
            },
            "pressure": 1024,
            "humidity": 49,
            "dew_point": 8.34,
            "wind_speed": 4.53,
            "wind_deg": 112,
            "wind_gust": 8.14,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 1
          },
          {
            "dt": 1726826400,
            "sunrise": 1726807121,
            "sunset": 1726851427,
            "moonrise": 1726854660,
            "moonset": 1726818000,
            "moon_phase": 0.59,
            "summary": "There will be partly cloudy until morning, then clearing",
            "temp": {
              "day": 19.21,
              "min": 14.19,
              "max": 22.78,
              "night": 16.9,
              "eve": 22.18,
              "morn": 14.19
            },
            "feels_like": {
              "day": 18.44,
              "night": 16.29,
              "eve": 21.58,
              "morn": 13.75
            },
            "pressure": 1025,
            "humidity": 48,
            "dew_point": 7.79,
            "wind_speed": 4.62,
            "wind_deg": 135,
            "wind_gust": 7.72,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 1
          }
        ],
        "alerts": [
          {
            "sender_name": "GeoSphere Austria",
            "event": "Stormwarning",
            "start": 1726200000,
            "end": 1726437600,
            "description": "Gusts of 80 kph are possible.",
            "tags": [
              "Wind"
            ]
          },
          {
            "sender_name": "GeoSphere Austria",
            "event": "Snow-Icewarning",
            "start": 1726113600,
            "end": 1726524000,
            "description": "Fresh snow between 120 and 200 cm is possible.",
            "tags": [
              "Snow/Ice"
            ]
          }
        ]
      }
      return {data, error: null}
    })
    