const API_KEY = '6448d29fd763a3d0e266d0100b828aa4';

const mapConfig = {
	center: {
		lat: 50,
		lng: 30
	},
	zoom: 6
};

const citys = [
	'Vinnytsia',
	'Kyiv',
	'Poltava',
	'Ivano-Frankivsk',
	'Cherkasy',
	'Chernihiv',
	'Chernivtsi',
	'Dnipropetrovsk',
	'Donetsk',
	'Kharkiv',
	'Kherson',
	'Luhansk',
	'Lviv',
	'Mykolaiv',
	'Odessa'
]
const convertPositionFormat = (position) => {
	const {
		lon,
		lat
	} = position;
	const lng = lon
	return {
		lat,
		lng
	}
}

class ApiService {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	async getWeaterByCityName(city, country) {
		const q = country ? `${city},${country}` : city;
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${this.apiKey}`);

		return await response.json();
	}


	async getWeaterByPosition(position) {
		const {
			lat,
			lng
		} = position;
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.apiKey}`
		);

		return await response.json();
	}

	getWeatherIconLink(iconCode) {
		return `http://openweathermap.org/img/w/${iconCode}.png`;
	}
}

class MapService {
	constructor(map) {
		this.map = map;
	}

	addMarker(position, options = {}) {
		return new google.maps.Marker({
			position,
			map: this.map,
			...options
		});
	}
}

const main = async () => {
	const map = new google.maps.Map(document.getElementById('map'), mapConfig);

	const apiService = new ApiService(API_KEY);
	const mapService = new MapService(map);
	for (const city of citys) {
		const data = await apiService.getWeaterByCityName(city);
		const weather = data.weather[0];
		const coord = convertPositionFormat(data.coord);

		const infowindow = new google.maps.InfoWindow({
			content: weather.description
		});

		const icon = apiService.getWeatherIconLink(weather.icon);

		const options = {
			icon,
			title: weather.main
		};

		const marker = mapService.addMarker(coord, options);

		google.maps.event.addListener(marker, 'click', () => {
			infowindow.open(map, marker);
		});
	}
};

main();