const handleRadioTicked = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};
const [radio, setRadio] = useState(true);

<fieldset>
  <input type="radio" name="tempConverter" />
  <label htmlFor="tempConverter">Celcium</label>
  <input type="radio" name="tempConverter" />
  <label htmlFor="tempConverter">Fahrenheit</label>
</fieldset>;
