# Windows XP

**A React recreation of iconic operating system.**

### [Demo](https://windows.shalkauskas.com)


[![](https://res.cloudinary.com/dyj6lkekg/image/upload/c_thumb,q_46,w_557/v1618250736/github/windows.png)](https://windows.shalkauskas.com/ "Visit website")



### Features

- **Internet Explorer** with Google Search (searches for gifs via ***Giphy API***  by request query);
- **Weather App** desktop widget to see weather in select city via ***OpenWeather API***
- **To Do App** with dynamic tabs (a must-have!)
-  [**JS Paint**](https://github.com/1j01/jspaint), Paint reimplementation by: [1j01](https://github.com/1j01)
- **Notepad** a simple notepad
- Resizable and draggable windows
- Status bar of active apps
- Start Menu

### Try it locally

1. Clone the repo

2. In root folder create a `.env` file and add your API keys
```
REACT_APP_WEATHER_API_KEY="OpenWeather API key"

REACT_APP_GIPHY_API_KEY="Giphy API key"
```
3. Then
`npm start`

*This project is serverless so I am using a self hosted CORS reverse proxy for cross-origin API requests* 
[see more](https://github.com/Rob--W/cors-anywhere)

### Tools
- React
- Context API & useReducer
- [JSS](https://cssinjs.org/)
- [React Drag & Resize](https://github.com/bokuweb/react-rnd)

### Contribute
If you like this project and would like to contribute feel free to send a PR or simply add an issue with feature or bug fix request

#### Task list
- [ ] Minimize and maximize apps
- [ ] User login and save user data to database
- [ ] Calculator
- [ ] Games

### License
The Windows XP name, artwork, trademark are surely property of Microsoft. This project is provided for educational purposes only. It is not affiliated with and has not been approved by Microsoft.
### Credits
*Thanks to [ShizukuIchi](https://github.com/ShizukuIchi/winXP) for styling refferences and inspiration!*
